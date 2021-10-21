import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins, PushNotification, PushNotificationToken, PushNotificationActionPerformed, Capacitor } from '@capacitor/core';

import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFireAuth } from '@angular/fire/auth';

import { take } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NotificationBody } from '../modals/notification-body.interface';
import { environment } from 'src/environments/environment';
const { PushNotifications } = Plugins;
@Injectable({
    providedIn: 'root'
})
export class PushNotificationService {

    constructor(
        private router: Router,
        private httpClient: HttpClient,
        private angularFireAuth: AngularFireAuth,
        private firestore: AngularFirestore,
        private angularFireMessaging: AngularFireMessaging
    ) { }

    initPush() {
        if (Capacitor.platform !== 'web') {
            this.registerPush();
        }
    }

    private registerPush() {
        PushNotifications.requestPermission().then((permission) => {
            if (permission.granted) {
                // Register with Apple / Google to receive push via APNS/FCM
                
                PushNotifications.register();
            } else {
                // No permission for push granted
            }
        });

        PushNotifications.addListener(
            'registration',
            (token: PushNotificationToken) => {
                this.firestore.collection("users").doc(localStorage.getItem('userId')).update({ fcmToken: token.value })
                    .then(() => {
                        console.log("Document successfully updated!");
                    })
                    .catch((error) => {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
                console.log('My token: ' + JSON.stringify(token));
            }
        );

        PushNotifications.addListener('registrationError', (error: any) => {
            console.log('Error: ' + JSON.stringify(error));
        });

        PushNotifications.addListener(
            'pushNotificationReceived',
            async (notification: PushNotification) => {
                console.log('Push received: ' + JSON.stringify(notification));
            }
        );

        PushNotifications.addListener(
            'pushNotificationActionPerformed',
            async (notification: PushNotificationActionPerformed) => {
                const data = notification.notification.data;
                console.log('Action performed: ' + JSON.stringify(notification.notification));
                // TODO
                if (data.detailsId) {
                    this.router.navigateByUrl(`/home/${data.detailsId}`);
                }
            }
        );
    }

    updateToken(userId, token) {
        // we can change this function to request our backend service
        this.angularFireAuth.authState.pipe(take(1)).subscribe(
            () => {
                this.firestore.collection("users").doc(userId).update({ fcmId: token })
                    .then(() => {
                        console.log("Document successfully updated!");
                    })
                    .catch((error) => {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });

            });
    }

    sendNotification(notificationBody: NotificationBody) {

        const headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set('Authorization', "key=" + environment.fcmServer);

        return this.httpClient
            .post('https://fcm.googleapis.com/fcm/send', notificationBody, { 'headers': headers }).subscribe(response => {
                console.log('Notification Pushed' + response);
            });
    }
}