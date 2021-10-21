import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../_shared/service/authentication.service';
import { ProfileService } from './profile.service';
import { LoaderService } from 'src/app/_shared/service/loader.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  isInformationShown: boolean = true;
  usertype: string = 'client';
  homeURL = '/trainee'
  coach: any;
  constructor(
    private formBuilder: FormBuilder,
    public authenticationService: AuthenticationService,
    public profileService: ProfileService,
    public loaderService: LoaderService
  ) { }
  // TODO
  // Photos ,Traning Packages,Coach Package , Coach Rating and Couch Code 
  ngOnInit() {
    this.authenticationService.isLoggedIn.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.profileService.getUser().subscribe(user => {
          this.coach = user;
          console.log(this.coach);
          this.loaderService.showLoader(false);
        })
      }
    })
    this.usertype = localStorage.getItem('userType');
    if (this.usertype !== 'client') {
      this.homeURL = '/coach'
    }
  }
  /* showInformation(clickedusertype:string ){
    this.usertype = clickedusertype;
  } */
  logout() {
    this.authenticationService.SignOut();
  }

}
