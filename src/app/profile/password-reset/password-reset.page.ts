import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from 'src/app/_shared/validator/password.validator';
import { User } from 'src/app/_shared/modals/user.interface';
import { LoaderService } from 'src/app/_shared/service/loader.service';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {

  passwordForm: FormGroup;
  backButtonRoute = "coach/profile/security";
  file: File;
  userDetails: User;
  constructor(
    private formBuilder: FormBuilder,
    public loaderService: LoaderService,
    public profileService: ProfileService
  ) { }



  ngOnInit() {
    this.profileService.profileDetails.subscribe(async details => {
      if (details) {
        this.userDetails = details;
        this.passwordForm = this.formBuilder.group({
          currentPassword: [null, Validators.compose([Validators.required])],
          newPassword: [
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
          retypePassword: [null, Validators.compose([Validators.required])]
        },
          {
            // check whether our password and confirm password match
            validator: PasswordValidators.passwordMatchValidator
          });
        this.loaderService.showLoader(false);
      } else {
        await this.loaderService.showLoader(true);
        this.profileService.getUser();
      }
    });

  }

  async save() {
    this.userDetails.currentPassword = this.passwordForm.value.currentPassword;
    this.userDetails.newPassword = this.passwordForm.value.newPassword;
    this.userDetails.retypePassword = this.passwordForm.value.retypePassword;
    await this.loaderService.showLoader(true);
    this.profileService.updateUser(this.userDetails).then(data => {
      this.loaderService.showLoader(false);
    });
  }

  changeListener($event): void {
    this.file = $event.target.files[0];
  }

}
