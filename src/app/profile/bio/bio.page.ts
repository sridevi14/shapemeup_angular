import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/_shared/modals/user.interface';
import { LoaderService } from 'src/app/_shared/service/loader.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.page.html',
  styleUrls: ['./bio.page.scss'],
})
export class BioPage implements OnInit {

  file: File;
  bioDetailsForm: FormGroup;
  userDetails: User;
  constructor(
    private formBuilder: FormBuilder,
    public loaderService: LoaderService,
    public profileService: ProfileService
  ) { }

  ngOnInit() {
    this.profileService.profileDetails.subscribe(async details => {
      if (details) {
        this.userDetails = details;
        this.bioDetailsForm = this.formBuilder.group({
          aboutMe: [details.aboutMe],
          experience: [details.experience],
          acheivements: [details.acheivements],
          certificates: [details.certificates],
          website: [details.website]
        });
        this.loaderService.showLoader(false);
      } else {
        await this.loaderService.showLoader(true);
        this.profileService.getUser();
      }
    });
  }


  async update() {
    this.userDetails.aboutMe = this.bioDetailsForm.value.aboutMe;
    this.userDetails.experience = this.bioDetailsForm.value.experience;
    this.userDetails.acheivements = this.bioDetailsForm.value.acheivements;
    this.userDetails.certificates = this.bioDetailsForm.value.certificates;
    this.userDetails.website = this.bioDetailsForm.value.website;
    await this.loaderService.showLoader(true);
    this.profileService.updateUser(this.userDetails).then(data => {
      this.loaderService.showLoader(false);
    });
  }

  changeListener($event): void {
    this.file = $event.target.files[0];
  }

  /*   saveProfile_click() {
      console.log("saveProfile_click");
      // Add your code here
      this.afAuth.authState.take(1).subscribe(auth => {
        this.afDatabase.object(`profile/${this.uid}`).set(this.profile)
          .then(() => {
            this.uploadProfileImage();
            this.navCtrl.pop();
          });
      })
    }
  
    uploadProfileImage(){
      console.log("uploadProfileImage");
      let fileRef = firebase.storage().ref('profileImages/' + this.uid + ".jpg");
      fileRef.put(this.file).then(function(snapshot) {
        console.log('Uploaded a blob or file!');
      });
    } */

}
