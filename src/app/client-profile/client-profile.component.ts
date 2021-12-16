import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../_shared/service/authentication.service';
import { ClientProfileService } from './client-profile.service';
// import { LoaderService } from 'src/app/_shared/service/loader.service';
import {Observable} from 'rxjs';
import {finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { User,Image } from 'src/app/_shared/modals/user.interface';
@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})


export class ClientProfileComponent implements OnInit {
 downloadURL: string;
userDetails: User;
uploadProgress: Observable<number>;
  isInformationShown: boolean = true;
  usertype: string = 'client';
  homeURL = '/trainee'
  coach: any;
  urls:any;
profileImg:any;
  constructor(
    private formBuilder: FormBuilder,
    public authenticationService: AuthenticationService,
    public clientProfileService: ClientProfileService,
    private router: Router,
   private db:AngularFireStorage,
  ) { }

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  // TODO
  // Photos ,Traning Packages,Coach Package , Coach Rating and Couch Code 
  ngOnInit() {
    this.authenticationService.isLoggedIn.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.clientProfileService.getUser().subscribe(user => {
          this.coach = user;
         // console.log(this.coach);
         
          
        })
      }
    })
    this.usertype = localStorage.getItem('userType');
    if (this.usertype !== 'client') {
      this.homeURL = '/coach'
      
    }


   
  }
  /* showInformation(clickedusertype:string ){
    this.usertype = clickedusertype;
  } */
  logout() {
    this.authenticationService.SignOut();

  }
 
  path:any;
  name:any;
  files:any;
  upload($event){
   this.path=$event.target.files[0];

  }
  downloadurl:Observable<any>;
  url;
  uploadImage(){
   // console.log(this.path);

const filepath=this.path.name;
   const task = this.db.upload(filepath,this.path);
    const fileRef=this.db.ref(filepath);
    task.snapshotChanges().pipe(
      finalize(()=>{
        
   this.downloadurl= fileRef.getDownloadURL();
this.downloadurl.subscribe((url)=>{
  if(url){
    this.urls=url;
    // this.files.push(this.path)

  

  let image: Image = {
    photoURL:this.urls,
     }
    this.clientProfileService.updateUsers(image).then(data => {
  
    });
    
    this.clientProfileService.profileDetails.subscribe(async details => {
      if (details) {
        this.userDetails = details;
          
        //this.loaderService.showLoader(false);
      } else {
 
        this.clientProfileService.getUser().subscribe(userDetails =>{
          this.userDetails = userDetails;
        this.profileImg=this.userDetails.photoURL;

       
        })}
      })

   
  }
}

 

);


      })
    ).subscribe();
 
   
  }


}