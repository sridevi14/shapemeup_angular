import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MobileComponent } from './mobile/mobile.component';
import { AboutComponent } from './about/about.component';
//import { DietComponent } from './diet/diet.component';
import { CoachComponent } from './coach/coach.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ExcerciseComponent } from './excercise/excercise.component';
import { ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import{ClientProfileComponent} from './client-profile/client-profile.component'
import{DemographicsComponent} from './demographics/demographics.component';
import{GoalsComponent} from './goals/goals.component';


const routes: Routes = [
  {path:'',redirectTo:"/mobile",pathMatch:"full"},
  {path:'about',component:AboutComponent},
  {path:'mobile',component:MobileComponent},
 // {path:'diet',component:DietComponent   },
  {path:'excercise',component:ExcerciseComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'profile',component:ClientProfileComponent},
  {path:'coach',component:CoachComponent},
  
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'demographics',component:DemographicsComponent},
  {path:'goals',component:GoalsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
