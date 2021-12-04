import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../profile/profile.service';
import{ AuthenticationService } from '../_shared/service/authentication.service';
//import { PushNotificationService } from '../_shared/service/p//ush-notification.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    public authService: AuthenticationService,
    public profileService: ProfileService,
    //public pushNotificationService: PushNotificationService,
    public ngFireAuth: AngularFireAuth,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  ngOnInit(): void {

   
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  
    if (localStorage.getItem('user')) {
      // this.router.navigate(['diet']);
    }
    if (localStorage.getItem('userId') && localStorage.getItem('userType')) {
      if (localStorage.getItem('userType') === 'client') {
        // this.router.navigate(['login']);
      } else {
        // this.router.navigate(['about']);
      }
    }

  }

  logIn() {
   if (this.loginForm.valid) {


   
      this.authService.SignIn(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
        .then(async (authenticationData: any) => {
          if (authenticationData.user.emailVerified) {
            localStorage.setItem('userEmail', this.loginForm.controls['email'].value);
            this.profileService.getUser().subscribe(user => {
              localStorage.setItem('userId', user.id);
              localStorage.setItem('userType', user.userType);
              this.authService.isLoggedIn.next(true);
              // this.pushNotificationService.initPush();
              if (user['userType'] === 'client') {
                localStorage.setItem('coachId', user.coachID);
                localStorage.setItem('isUserLoginFirstTime', user.isLoggedInFirstTimeFlag);
                // alert("successfully logged in");
               
                this.loginForm.reset();
                this.router.navigate(['profile']);
              } else {
                // this.router.navigate(['mobile']);
              }
            })
          } else {
            window.alert('Email is not verified')
            return false;
          }
        }).catch((error) => {
          window.alert(error.message)
        })
    }
  }

 

  

}
