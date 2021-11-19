import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/_shared/service/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  
  passwordResetForm: FormGroup;
  constructor(public authService: AuthenticationService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.passwordResetForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  forgetPassword() {
    this.authService.PasswordRecover(this.passwordResetForm.controls['email'].value);
  }


}
