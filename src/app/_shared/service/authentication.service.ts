import { Injectable, NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { User } from '../modals/user.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
    userData: any;
    public isLoggedIn = new BehaviorSubject<boolean>(false);

    constructor(
        public afStore: AngularFirestore,
        public ngFireAuth: AngularFireAuth,
        public router: Router,
        public ngZone: NgZone
    ) {
        this.ngFireAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
               // localStorage.setItem('user', this.userData);
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            } else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        })
    }

    // Login in with email/password
    async SignIn(email, password) {
        alert("logged");
        return await this.ngFireAuth.signInWithEmailAndPassword(email, password)
      
    }

    // Register user with email/password
   RegisterUser(email, password) {
//console.log(email);
        return  this.ngFireAuth.createUserWithEmailAndPassword(email, password)
  
    }

    
    async SendVerificationMail() {
        (await this.ngFireAuth.currentUser).sendEmailVerification()
        .then(() => {
          this.router.navigate(['login']);
        })   }
        

    // Recover password
    async PasswordRecover(passwordResetEmail) {
        return await this.ngFireAuth.sendPasswordResetEmail(passwordResetEmail)
            .then(() => {
                window.alert('Password reset email has been sent, please check your inbox.');
                this.router.navigate(['login']);
            }).catch((error) => {
                window.alert(error)
            })
    }

    currentUserData() {
        return this.ngFireAuth.currentUser;
    }

    // Returns true when user is looged in
    get isLogged(): boolean {
        
        const user = JSON.parse(localStorage.getItem('user'));
        return (user !== null && user.emailVerified !== false) ? true : false;
       
    }


    // Returns true when user's email is verified
    /*     get isEmailVerified(): boolean {
            const user = JSON.parse(localStorage.getItem('user'));
            return (user.emailVerified !== false) ? true : false;
        } */

    // Sign in with Gmail
    /*     async GoogleAuth() {
            this.ngFireAuth.authState.subscribe(auth => {
                auth.linkWithPopup(GoogleAuthProvider())
            })
            return await this.ngFireAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        } */

    // Auth providers
    async AuthLogin(provider) {
        return await this.ngFireAuth.signInWithPopup(provider)
            .then((result) => {
                this.ngZone.run(() => {
                    this.router.navigate(['dashboard']);
                })
                this.SetUserData(result.user);
            }).catch((error) => {
                window.alert(error)
            })
    }

  
    

    // Store user in localStorage
    SetUserData(user) {
        const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`);
        const userData: User = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.firstName,
            dateofBirth: user.dateofBirth,
            phoneNumber: user.phoneNumber,
            phoneCode: user.phoneCode,
            gender: user.gender,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            userType: user.userType,
            emailVerified: user.emailVerified,
            coachID: user.coachID,
        }
        return userRef.set(userData, {
            merge: true
        })
    }

    // Sign-out 
    async SignOut() {
        return await this.ngFireAuth.signOut().then(() => {
            localStorage.clear();
            this.router.navigate(['login']);
            alert("logout successfully");
            
        })
    }

    public updateFirstLoggedInDetails(){
        let userId:string |null = localStorage.getItem('userId')
        this.afStore.doc('users/'+userId).update({"isLoggedInFirstTimeFlag":true});
    }
}

