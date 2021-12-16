import { Component, OnInit } from '@angular/core';
import { DatePipe, Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientProfileService } from  'src/app/client-profile/client-profile.service';
import { User, Address } from 'src/app/_shared/modals/user.interface';
//import { LoaderService } from 'src/app/_shared/service/loader.service';
//import { AlertService } from 'src/app/_shared/service/alert.service';

@Component({
  selector: 'app-client-demographics',
  templateUrl: './client-demographics.component.html',
  styleUrls: ['./client-demographics.component.css']
})
export class ClientDemographicsComponent implements OnInit {

  personalInfoForm: FormGroup;

 
  userDetails: User;
  maxdate:any;
  constructor(
    private _location: Location,
    public clientProfileService: ClientProfileService,
    
    private formBuilder: FormBuilder
    
  ) { }

  ngOnInit(): void {
    console.log("*********************");
    this.clientProfileService.profileDetails.subscribe(async details => {
      if (details) {
        this.userDetails = details;
       this.buildForm(details);
        //this.loaderService.showLoader(false);
      } else {
      //  await this.loaderService.showLoader(true);
        this.clientProfileService.getUser().subscribe(userDetails =>{
          this.userDetails = userDetails;
          this.buildForm(userDetails);




          var dateofbirth:any= this.userDetails.dateofBirth;
          var date2 = new Date(dateofbirth);
          var maxdate:any=date2.getDate();
          var maxMonth:any=date2.getMonth()+1;
          

          var year:any=date2.getFullYear();
          

          if(maxdate<10){
            maxdate='0'+ maxdate;
          }
          
          if(maxMonth<10){
            maxMonth='0'+ maxMonth;
          }

          maxdate= year + '-' + maxMonth + '-' + maxdate;
          console.log(maxdate);
              
               
        });
        //this.loaderService.showLoader(false);
      }

  
    })
  }

  buildForm(details){
    this.personalInfoForm = this.formBuilder.group({
      firstName: [this.userDetails.firstName, [Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern('^[a-zA-Z ]*$')]],
     lastName: [this.userDetails.lastName, [Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern('^[a-zA-Z ]*$')]],
     dateofBirth: [this.userDetails.dateofBirth, [Validators.required]],
      gender: [this.userDetails.gender, [Validators.required]],
    // phoneCode: [this.userDetails.phoneCode, [Validators.required]],
      // phoneNumber: [this.userDetails.phoneNumber, [Validators.required, Validators.pattern('[0-9]+'), Validators.minLength(10), Validators.maxLength(10)]],
       email: [this.userDetails.email, [Validators.required, Validators.email]],
      nickName: [this.userDetails.nickName, [Validators.required, Validators.minLength(3), Validators.maxLength(25), Validators.pattern('^[a-zA-Z ]*$')]],
      addressLine1: [details.address ? details.address.addressLine1 : null,Validators.required],
      // addressLine2: [details.address ? details.address.addressLine2 : null],
     city: [details.address ? details.address.city : null, Validators.pattern('^[a-zA-Z ]*$')],
     state: [details.address ? details.address.state : null, Validators.pattern('^[a-zA-Z ]*$')],
       zipcode: [details.address ? details.address.zipcode : null, [Validators.minLength(6), Validators.maxLength(6), Validators.pattern('[0-9]+')]],
      
    });
    
  }

  backClicked() {
    this._location.back();
  }

  async update() {
    
    if (this.personalInfoForm.valid) {
      this.userDetails.firstName = this.personalInfoForm.value.firstName;
      this.userDetails.lastName = this.personalInfoForm.value.lastName;
    this.userDetails.dateofBirth = this.personalInfoForm.value.dateofBirth;
       this.userDetails.nickName = this.personalInfoForm.value.nickName;
       this.userDetails.gender = this.personalInfoForm.value.gender;
       this.userDetails.email = this.personalInfoForm.value.email;
   let address: Address = {
    addressLine1: this.personalInfoForm.value.addressLine1,
    //     addressLine2: this.personalInfoForm.value.addressLine2,
        city: this.personalInfoForm.value.city,
        state: this.personalInfoForm.value.state,
        zipcode: this.personalInfoForm.value.zipcode,
     }
       this.userDetails.address = address;
     // await this.loaderService.showLoader(true);
      this.clientProfileService.updateUser(this.userDetails).then(data => {
        //this.alertService.presentAlert('User Details updated Succesfully', '/coach/profile');
      //  alert("updated succesfully");
      });
      //this.loaderService.showLoader(false);
    }
  }


}
