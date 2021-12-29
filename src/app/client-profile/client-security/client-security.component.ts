import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/_shared/modals/user.interface';
//import { LoaderService } from 'src/app/_shared/service/loader.service';
//import { AlertService } from 'src/app/_shared/service/alert.service';
import { ClientProfileService } from  'src/app/client-profile/client-profile.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_shared/service/authentication.service';
import {SecurityQuestion} from 'src/app/_shared/modals/user.interface';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-client-security',
  templateUrl: './client-security.component.html',
  styleUrls: ['./client-security.component.css']
})
export class ClientSecurityComponent implements OnInit {
  securityForm: FormGroup;
 
  file: File;
  userid:any;
  userDetails: User;
  usertype: string = 'client';
  homeURL = '/trainee'
  coach: any;
  constructor(
    public authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
   // public loaderService: LoaderService,
    public profileService: ClientProfileService,
   // public alertService: AlertService
   private firestore: AngularFirestore
  ) { }


  ngOnInit(): void {  

    this.profileService.profileDetails.subscribe(async details => {
      if (details) {
        this.userDetails = details;
      
        //this.loaderService.showLoader(false);
      } else {
      //  await this.loaderService.showLoader(true);
        this.profileService.getUsers().subscribe(userDetails =>{
          this.userDetails = userDetails;
         
        
        })
    }})

    

    

      this.securityForm = this.formBuilder.group({
    
 
      
        answer1: ['', [Validators.required]],
        answer2: ['', [Validators.required]],
        answer3: ['', [Validators.required]],
      
      });
    
  }


  
 

async save() {

  
    //console.log(this.securityForm.value);
    
 
    let data: SecurityQuestion = {
   
     email:this.userDetails.email,
     answer:this.securityForm.value,
       }
       this.profileService.SecurityQuestion(data).then(data => {
       
      });
   
     
  
       
       
  }


  


  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

}
