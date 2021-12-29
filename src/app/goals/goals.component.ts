import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/_shared/modals/user.interface';
//import { LoaderService } from 'src/app/_shared/service/loader.service';
import { ClientProfileService } from  'src/app/client-profile/client-profile.service';
//import { AlertService } from 'src/app/_shared/service/alert.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {
  goalForm: FormGroup;
 // backButtonRoute = '/coach/profile';
  file: File;
  userDetails: User;
  constructor(

    private formBuilder: FormBuilder,
   // public loaderService: LoaderService,
    public profileService: ClientProfileService,
   // public alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.goalForm = this.formBuilder.group({
      fitness: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(100)]],
    });
 
  }

  async update() {
      
   
   // await this.loaderService.showLoader(true);
    this.profileService.updateUser(this.goalForm.value).then(data => {
     // this.loaderService.showLoader(false);

     
    });
  }

}
