import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/_shared/modals/user.interface';
import { LoaderService } from 'src/app/_shared/service/loader.service';
import { ProfileService } from '../profile.service';
import { AlertService } from 'src/app/_shared/service/alert.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.page.html',
  styleUrls: ['./goals.page.scss'],
})
export class GoalsPage implements OnInit {

  goalForm: FormGroup;
  backButtonRoute = '/coach/profile';
  file: File;
  userDetails: User;
  constructor(
    private formBuilder: FormBuilder,
    public loaderService: LoaderService,
    public profileService: ProfileService,
    public alertService: AlertService
  ) { }

  ngOnInit() {
    this.goalForm = this.formBuilder.group({
      fitness: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(100)]],
    });
  }

  async update() {
    console.log(this.goalForm.value)
    let userDetails = this.goalForm.value;
    await this.loaderService.showLoader(true);
    this.profileService.updateUser(this.userDetails).then(data => {
      this.loaderService.showLoader(false);
      this.alertService.presentAlert('Goals Updated Successfully', '/coach/profile/goals');
    });
  }

}

