import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/_shared/modals/user.interface';
import { LoaderService } from 'src/app/_shared/service/loader.service';
import { AlertService } from 'src/app/_shared/service/alert.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.page.html',
  styleUrls: ['./security.page.scss'],
})
export class SecurityPage implements OnInit {
  securityForm: FormGroup;
  file: File;
  userDetails: User;
  constructor(
    private formBuilder: FormBuilder,
    public loaderService: LoaderService,
    public profileService: ProfileService,
    public alertService: AlertService
  ) { }

  ngOnInit() {
    this.securityForm = this.formBuilder.group({
      question1: ['', [Validators.required]],
      question2: ['', [Validators.required]],
      question3: ['', [Validators.required]],
      answer1: ['', [Validators.required]],
      answer2: ['', [Validators.required]],
      answer3: ['', [Validators.required]]

    });
  }
  async update() {
    console.log(this.securityForm.value)
    let userDetails = this.securityForm.value;
    await this.loaderService.showLoader(true);
    this.profileService.updateUser(this.userDetails).then(data => {
      this.loaderService.showLoader(false);
      this.alertService.presentAlert('SecurityForm Updated Successfully', '/coach/profile/security');
    });
  }

}
