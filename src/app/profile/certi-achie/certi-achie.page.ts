import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/_shared/modals/user.interface';
import { LoaderService } from 'src/app/_shared/service/loader.service';
import { ProfileService } from '../profile.service';
import { AlertService } from 'src/app/_shared/service/alert.service';


@Component({
  selector: 'app-certi-achie',
  templateUrl: './certi-achie.page.html',
  styleUrls: ['./certi-achie.page.scss'],
})
export class CertiAchiePage implements OnInit {

  certificateForm: FormGroup;
  backButtonRoute = '/coach/profile';
  file: File;
  userDetails: User;
  constructor(
    private formBuilder: FormBuilder,
    public loaderService: LoaderService,
    public profileService: ProfileService,
    public alertService: AlertService,
  ) { }

  ngOnInit() {
    this.certificateForm = this.formBuilder.group({
      certificate1: ['', [Validators.required]],
      certificate2: ['', [Validators.required]],
      certificate3: ['', [Validators.required]],
      achievement: ['', [Validators.required]],
    });
  }
  async update() {
    console.log(this.certificateForm.value)
    let userDetails = this.certificateForm.value;
    await this.loaderService.showLoader(true);
    this.profileService.updateUser(this.userDetails).then(data => {
      this.loaderService.showLoader(false);
      this.alertService.presentAlert('certificates Updated Successfully', '/coach/profile/certi-achie');
    });
  }

}

