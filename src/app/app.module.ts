import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import{ForgotPasswordComponent} from './forgot-password/forgot-password.component';

//import { DietComponent } from './diet/diet.component';
import { CoachComponent } from './coach/coach.component';
import { MobileComponent } from './mobile/mobile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ExcerciseComponent } from './excercise/excercise.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { YouTubePlayerModule } from "@angular/youtube-player";
//import { VideoComponent } from './video.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//import{AngularFirestoreModule}from 'angularfire2/storage'
import{ItemService} from './services/item.service';
import { AuthenticationService } from './_shared/service/authentication.service';
import { ClientProfileComponent } from './client-profile/client-profile.component';
//import { DemographicsComponent } from './demographics/demographics.component';
import { GoalsComponent } from './goals/goals.component';
import { AuthGuard } from './_shared/guard/auth.guard';
import { SurveyComponent } from './client-profile/survey/survey.component';
import { ClientDemographicsComponent } from './client-profile/client-demographics/client-demographics.component';
import { ClientPaymentHistoryComponent } from './client-profile/client-payment-history/client-payment-history.component';
import { ClientSecurityComponent } from './client-profile/client-security/client-security.component';
import { ResetPasswordComponent } from './client-profile/client-security/reset-password/reset-password.component';





// import { HTTP_INTERCEPTORS } from '@angular/common/http';
// //import { NgModule } from '@angular/core';
// //import { AngularFireModule } from '@angular/fire';
// //import { AngularFireAuthModule } from '@angular/fire/auth';
// //import { AngularFireDatabaseModule } from '@angular/fire/database';
// //import { AngularFirestoreModule } from '@angular/fire/firestore';
// //import { BrowserModule } from '@angular/platform-browser';
// // import { RouteReuseStrategy } from '@angular/router';
//  import { TitleCasePipe } from "@angular/common";
// //import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// //import { environment } from 'src/environments/environment';
// import { HttpClientModule } from '@angular/common/http';
// //import { AppRoutingModule } from './app-routing.module';
// //import { AppComponent } from './app.component';
//  import { LoaderInterceptor } from './_shared/interceptor/loader.interceptor';
//  import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
   // DietComponent,
    CoachComponent,
    MobileComponent,
    LoginComponent,
    SignupComponent,
    ExcerciseComponent,
    ForgotPasswordComponent,
    ClientProfileComponent,
   
    GoalsComponent,
    SurveyComponent,
    ClientDemographicsComponent,

    ClientPaymentHistoryComponent,
      ClientSecurityComponent,
      ResetPasswordComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
   AngularFireDatabaseModule,
  AngularFireModule.initializeApp(environment.firebase,'shapmeup'),
  AngularFirestoreModule,
  YouTubePlayerModule,
  
  ],
    
  providers: [
  ItemService,
AuthenticationService,
AuthGuard
],
  bootstrap: [AppComponent]
})
export class AppModule { }
