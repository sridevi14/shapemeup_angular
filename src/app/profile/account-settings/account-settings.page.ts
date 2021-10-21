import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.page.html',
  styleUrls: ['./account-settings.page.scss'],
})
export class AccountSettingsPage implements OnInit {

  accountDetailsForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.accountDetailsForm = this.formBuilder.group({
      currentpassword: ['', [Validators.required]],
      newpassword: ['', [Validators.required, Validators.email]],
      confirmpassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  update() {

  }
}
