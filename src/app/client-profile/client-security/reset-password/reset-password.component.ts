import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from 'src/app/_shared/validator/password.validator';
import { User } from 'src/app/_shared/modals/user.interface';
//import { LoaderService } from 'src/app/_shared/service/loader.service';
import { ClientProfileService } from  'src/app/client-profile/client-profile.service';
import{ AuthenticationService } from 'src/app/_shared/service/authentication.service'

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  passwordForm: FormGroup;
  //backButtonRoute = "coach/profile/security";
  file: File;
  userDetails: User;
  constructor(
    private formBuilder: FormBuilder,
     public authService: AuthenticationService,
    //public loaderService: LoaderService,
    public profileService: ClientProfileService,
    
  ) {
}

  ngOnInit(): void {

    this.passwordForm = this.formBuilder.group({
    
        email: ['', [Validators.required, Validators.email]],
      
     });
     

  }

  
 


  async save() {
    
   
    this.authService.PasswordRecover(this.passwordForm.controls['email'].value);

   
  }

  changeListener($event): void {
    this.file = $event.target.files[0];
  }


  

}
