import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/_shared/modals/user.interface';
//import { LoaderService } from 'src/app/_shared/service/loader.service';
//import { AlertService } from 'src/app/_shared/service/alert.service';
import { ClientProfileService } from  'src/app/client-profile/client-profile.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-client-security',
  templateUrl: './client-security.component.html',
  styleUrls: ['./client-security.component.css']
})
export class ClientSecurityComponent implements OnInit {
  securityForm: FormGroup;
  file: File;
  userDetails: User;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
   // public loaderService: LoaderService,
    public profileService: ClientProfileService,
   // public alertService: AlertService
  ) { }


  ngOnInit(): void {  

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
   // let userDetails = this.securityForm.value;
   // await this.loaderService.showLoader(true);
    this.profileService.updateUser(this.securityForm.value).then(data => {
     // this.loaderService.showLoader(false);
     // this.alertService.presentAlert('SecurityForm Updated Successfully', '/coach/profile/security');
    });
  }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

}
