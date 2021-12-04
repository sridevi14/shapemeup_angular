import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../_shared/service/authentication.service';
import { ClientProfileService } from './client-profile.service';
// import { LoaderService } from 'src/app/_shared/service/loader.service';




@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})


export class ClientProfileComponent implements OnInit {
  isInformationShown: boolean = true;
  usertype: string = 'client';
  homeURL = '/trainee'
  coach: any;
  constructor(
    private formBuilder: FormBuilder,
    public authenticationService: AuthenticationService,
    public clientProfileService: ClientProfileService,
    private router: Router,

  ) { }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  // TODO
  // Photos ,Traning Packages,Coach Package , Coach Rating and Couch Code 
  ngOnInit() {
    this.authenticationService.isLoggedIn.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.clientProfileService.getUser().subscribe(user => {
          this.coach = user;
          console.log(this.coach);
         
          
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