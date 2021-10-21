import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    constructor(private alertController: AlertController, private router: Router) { }

    async presentAlert(message: string, routeURL?: string) {
        const alert = await this.alertController.create({
            cssClass: 'my-custom-class',
            header: message,
            buttons: [{
                text: 'Ok',
                handler: () => {
                    if (routeURL) {
                        this.router.navigateByUrl(routeURL);
                    }
                }
            }]
        });
        return alert.present();
    }



}
