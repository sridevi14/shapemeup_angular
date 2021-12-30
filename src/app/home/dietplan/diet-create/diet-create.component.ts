import { Component, OnInit } from '@angular/core';



import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_shared/service/authentication.service';

import { DietplanService } from 'src/app/home/dietplan/dietplan.service';


@Component({
  selector: 'app-diet-create',
  templateUrl: './diet-create.component.html',
  styleUrls: ['./diet-create.component.css']
})
export class DietCreateComponent implements OnInit {

  pageTitle: string = 'Add Food Item';
  dietPlanId: string;
  dietplanForm: FormGroup;
  
  tempCategoryName: string;

  constructor(private formBuilder: FormBuilder,
    public authenticationService: AuthenticationService,
   
    private dietplanService: DietplanService,
    private route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
     this.dietPlanId = this.route.snapshot.paramMap.get('id');
    console.log( this.dietPlanId);
    if (this.dietPlanId) {
      this.pageTitle = 'Edit Food Item';
      this.dietPlanDetails();
    }
    else
    this.buildForm();
  }
  buildForm(dietplan?: any) {
    //this.tempCategoryName = this.dietPlanId ? dietplan.name.toLowerCase() : null;
    this.dietplanForm = this.formBuilder.group({
      name: [dietplan && dietplan.name ? dietplan.name : '', [Validators.required]],
     // unit: ['', [Validators.required]],
      // note: [dietplan && dietplan.note ? dietplan.note : ''],
    
    
  });
}

  logout() {
    this.authenticationService.SignOut();

  }
  async deleteDietplan() {
   // await this.loaderService.showLoader(true);
    this.dietplanService.deleteDietplan(this.dietPlanId).then(data => {
      //this.alertService.presentAlert('Dietplan Deleted Successfully', '/coach/home/dietplan/');
      //this.loaderService.showLoader(false);
      alert("deleted");
    })
  }
  async dietPlanDetails() {
   // await this.loaderService.showLoader(true);
    this.dietplanService.getDietplan(this.dietPlanId).subscribe(dietPlan => {
      console.log(dietPlan)
      this.buildForm(dietPlan);
    })
   // await this.loaderService.showLoader(false);
  }

  isDietPlanCtegoryExists(name?: string): boolean {
    let isNameExists: boolean = false;
    this.dietplanService.dietPlanList.forEach(data => {
      if (data.name.toLowerCase() === name.toLocaleLowerCase()
        && this.tempCategoryName !== name.toLocaleLowerCase()) {
        isNameExists = true;
      }
    });
    return isNameExists;
  }

  async Save() {
   console.log(this.dietplanForm.valid);
   console.log(this.dietplanForm.value);
    if (this.dietplanForm.valid) {
      let formValue = this.dietplanForm.value;
      if (this.isDietPlanCtegoryExists(formValue.name))
       // this.alertService.presentAlert('Food Item already exists');
        alert("already exists");
  else {
       // await this.loaderService.showLoader(true);
        //formValue.name = this.titlecasePipe.transform(formValue.name);
        if (this.dietPlanId) {
          this.dietplanService.updateDietplan(this.dietPlanId, formValue).then(data => {
           //this.loaderService.showLoader(false);
           //this.alertService.presentAlert('Food Item Updated Successfully', '/coach/home/dietplan/');
         
          })
        } else {
          this.dietplanService.createDietplan(formValue).then(data => {
            //this.loaderService.showLoader(false);
           // this.alertService.presentAlert('Food Item  Saved Successfully', '/coach/home/dietplan/');
     
          })
        }
      }
    }
  

  }
}