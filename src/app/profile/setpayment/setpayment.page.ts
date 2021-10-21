import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/_shared/modals/user.interface';
import { LoaderService } from 'src/app/_shared/service/loader.service';
import { AlertService } from 'src/app/_shared/service/alert.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-setpayment',
  templateUrl: './setpayment.page.html',
  styleUrls: ['./setpayment.page.scss'],
})
export class SetpaymentPage implements OnInit {
  paymentForm: FormGroup;
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
    this.paymentForm = this.formBuilder.group({
      amount: ['', [Validators.required]],
      setpayment: ['', [Validators.required]],
      date: ['', [Validators.required]],
      tilldate: ['', [Validators.required]],
      occuring: ['', [Validators.required]],

    });

  }
  async Save() {
    console.log(this.paymentForm.value)
    let userDetails = this.paymentForm.value;
    await this.loaderService.showLoader(true);
    this.profileService.updateUser(this.userDetails).then(data => {
      this.loaderService.showLoader(false);
      this.alertService.presentAlert('Payment Saved Successfully', '/coach/profile/setpayment');
    });
  }
}

