import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from 'src/app/_shared/validator/password.validator';
import { User } from 'src/app/_shared/modals/user.interface';
//import { LoaderService } from 'src/app/_shared/service/loader.service';
import { ClientProfileService } from  'src/app/client-profile/client-profile.service';

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
    //public loaderService: LoaderService,
    public profileService: ClientProfileService
  ) { }

  ngOnInit(): void {

    this.profileService.profileDetails.subscribe(async details => {
      if (details) {
        this.userDetails = details;
       this.buildForm(details);
       console.log(this.userDetails)
        //this.loaderService.showLoader(false);
      } else {
      //  await this.loaderService.showLoader(true);
        this.profileService.getUser().subscribe(userDetails =>{
          this.userDetails = userDetails;
          this.buildForm(userDetails);

        }
       
         
         ) }
       });
      

  }

  
  buildForm(details){
    console.log(this.userDetails.firstName)
    console.log(this.userDetails.currentPassword)
    //console.log("bnb");
    this.passwordForm = this.formBuilder.group({
    // currentPassword: ["", Validators.required],
    
    });
    
  }


  async save() {
    console.log(this.userDetails.currentPassword)
   // this.userDetails.currentPassword = this.passwordForm.value.currentPassword;
   // this.userDetails.newPassword = this.passwordForm.value.newPassword;
   // this.userDetails.retypePassword = this.passwordForm.value.retypePassword;
   // await this.loaderService.showLoader(true);
    this.profileService.updateUser(this.userDetails).then(data => {
      //this.loaderService.showLoader(false);
    });
  }

  changeListener($event): void {
    this.file = $event.target.files[0];
  }

}
