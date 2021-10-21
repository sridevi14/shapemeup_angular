import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/_shared/modals/user.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/_shared/service/loader.service';
import { ProfileService } from '../profile.service';
import { AlertService } from 'src/app/_shared/service/alert.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize, tap } from 'rxjs/operators';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.page.html',
  styleUrls: ['./about-me.page.scss'],
})
export class AboutMePage implements OnInit {
  aboutMeForm: FormGroup;
  ngFireUploadTask: AngularFireUploadTask;
  backButtonRoute = '/coach/profile';
  file: File;
  imageURL: string;
  userDetails: User;
  constructor(private formBuilder: FormBuilder,
    private alertService: AlertService,
    public loaderService: LoaderService,
    private profileService: ProfileService,
    private route: ActivatedRoute, public router: Router,
    private angularFireStorage: AngularFireStorage) { }



  ngOnInit() {
    this.aboutMeForm = this.formBuilder.group({
      about: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(100)]],
      experience: ['', [Validators.required, Validators.minLength(20), Validators.maxLength(100)]],
      dateofJoining: ['', [Validators.required]],
      package: ['', [Validators.required]],
      imageURL:  ['', [Validators.required]],
    });
    this.fetchExistingUser();
  }

  fetchExistingUser() {
    this.profileService.getUser().subscribe(user => {
      this.buildForm(user);
      this.imageURL = user.imageURL;
      console.log(user);
    });
  }

  buildForm(user?: User) {
    this.aboutMeForm = this.formBuilder.group({
      about: [user && user.about ? user.about : '', [Validators.required]],
      experience: [user && user.experience ? user.experience : '', [Validators.required]],
      dateofJoining:[user && user.dateofJoining ? user.dateofJoining : '', [Validators.required]],
      package:[user && user.package ? user.package : '', [Validators.required]],
      imageURL: [user && user.imageURL ? user.imageURL : '', [Validators.required]],
    });
  }
  
  async update() {
    let formValue = this.aboutMeForm.value;
    formValue.imageURL = this.imageURL;
    await this.loaderService.showLoader(true);
    this.profileService.updateUser(formValue).then(data => {
      this.loaderService.showLoader(false);
      this.alertService.presentAlert('About Updated Successfully', '/coach/profile');
    });
  }

  fileUpload(event: FileList) {
    const file = event.item(0);
    if (file.type.split('/')[0] !== 'image') {
      console.log('File type is not supported!')
      return;
    }
    return new Promise((resolve, reject) => {
      const path = `filesStorage/${new Date().getTime()}_${file.name}`;
      const ref = this.angularFireStorage.ref(path)
      const upload = ref.put(file)
      const sub = upload.snapshotChanges().pipe(
        finalize(async () => {
          try {
            const photoURL = await ref.getDownloadURL().toPromise()
            resolve({ photoURL })
            this.imageURL = photoURL
            console.log(photoURL);
          } catch (err) {
            reject(err)
          }
          sub.unsubscribe()
        })
      ).subscribe((data) => {
        console.log('storage: ', data)
      })
    })

  }


}
