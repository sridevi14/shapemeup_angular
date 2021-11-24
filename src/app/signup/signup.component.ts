//import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder, PatternValidator } from '@angular/forms';


import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ProfileService } from 'src/app/profile/profile.service';
import { PhoneCode } from 'src/app/_shared/modals/phone-code.interface';
//import { AlertService } from 'src/app/_shared/service/alert.service';
import { AuthenticationService } from 'src/app/_shared/service/authentication.service';
import { PasswordValidators } from 'src/app/_shared/validator/password.validator';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // reactiveForm:FormGroup;
  // submitted:boolean=false;

  
  registerForm: FormGroup;
  maxDateofBirth: string;
  constructor(
    public authService: AuthenticationService,
   //private alertService: AlertService,
    public profileService: ProfileService,
   public router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
  let date = moment.utc().format();
  moment.default(date).add(environment.minmumAgeRequired, 'year')
  this.maxDateofBirth = moment.utc(date).local().format();


  this.registerForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern('^[a-zA-Z ]*$')]],


      



    
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern('^[a-zA-Z ]*$')]],
    //dateofBirth: ['2002-09-23T15:03:46.789', [Validators.required]],
     gender: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: [
      null,
      Validators.compose([
        Validators.required,
        // check whether the entered password has a number
        PasswordValidators.patternValidator(/\d/, {
          hasNumber: true
        }),
        // check whether the entered password has upper case letter
        PasswordValidators.patternValidator(/[A-Z]/, {
          hasCapitalCase: true
        }),
        // check whether the entered password has a lower case letter
        PasswordValidators.patternValidator(/[a-z]/, {
          hasSmallCase: true
        }),
        // check whether the entered password has a special character
        PasswordValidators.patternValidator(
          /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
          {
            hasSpecialCharacters: true
          }
        ),
        Validators.minLength(8)
      ])
    ],
    confirmPassword: [null, Validators.compose([Validators.required])]
  },
    {
      // check whether our password and confirm password match
      validator: PasswordValidators.passwordMatchValidator
    }
 );
 
 

  }

//   constructor(private formBuilder:FormBuilder) {
// this.reactiveForm=this.formBuilder.group({
//   firstname:new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern('^[a-zA-Z ]*$')]),
//   lastname:new FormControl(null,[Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern('^[a-zA-Z ]*$')]),
//   dateofbirth:new FormControl(null,[Validators.required]),
//   age:new FormControl(null,[Validators.required,Validators.pattern('^(0|[1-9][0-9]*)$')]),
//   email:new FormControl(null,[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
//   gender:new FormControl(null,[Validators.required]),
//   phone:new FormControl(null,[Validators.required,Validators.pattern('(0|91)?[7-9][0-9]{9}')]),
//   Confirm_password:new FormControl(null,[Validators.required]),
//   password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
//   //confirmPassword: [null, Validators.compose([Validators.required])]
// },
// // ^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$

// {
//   validators:this.MustMatch('password','Confirm_password')
// })

// this.reactiveForm.reset();
//    }
  
// get f (){return this.reactiveForm.controls}

// MustMatch(controlName:string,matchingControlName:string){
// return(formGroup:FormGroup)=>{
//   const control = formGroup.controls[controlName];
//   const matchingControl = formGroup.controls[matchingControlName];
//   if(matchingControl.errors && !matchingControl.errors.MustMatch){
//     return
//   }
//   if(control.value!==matchingControl.value){
//     matchingControl.setErrors({MustMatch:true});
//   }
//   else{
//     matchingControl.setErrors(null);
//   }
// }
// }

// onSubmit(){
  
//    this.submitted=true;
//    console.log(this.reactiveForm.value);
//    //alert('form submitted');
//   //  if(this.reactiveForm.invalid)
//   //  {
    
    
//   //   return;
  
//   //  }



// }


  
  

  signUp() {
    if (this.registerForm.valid) {
      
      
      this.authService.RegisterUser(this.registerForm.value.email, this.registerForm.value.password)
     
      .then(async (res) => {
          let formValues = this.registerForm.value;
          delete formValues.password;
          delete formValues.confirmPassword;
          
          //TODO
          formValues.userType = 'client';
          this.profileService.createUser(formValues);
          await this.authService.SendVerificationMail();
          alert("Verify the email in "+this.registerForm.value.email);
          this.registerForm.reset();
         //this.alertService.presentAlert(' Please check your email and verfiy your email address.', '/login')
        })
        .catch((error) => {
          window.alert(error.message)
        })
    }
  }

  
  


}


