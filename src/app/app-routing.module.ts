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
// import{DemographicsComponent} from './demographics/demographics.component';
//import { PaymentHistoryComponent } from './client-profile/payment-history/payment-history.component';
import{GoalsComponent} from './goals/goals.component';
import { AuthGuard } from './_shared/guard/auth.guard';
import { SurveyComponent } from './client-profile/survey/survey.component';
import { ClientPaymentHistoryComponent } from './client-profile/client-payment-history/client-payment-history.component';
import { ClientDemographicsComponent } from './client-profile/client-demographics/client-demographics.component';
import { ClientSecurityComponent } from './client-profile/client-security/client-security.component';
import { ResetPasswordComponent } from './client-profile/client-security/reset-password/reset-password.component';
const routes: Routes = [
  {path:'',redirectTo:"/mobile",pathMatch:"full"},
  {path:'about',component:AboutComponent},
  {path:'mobile',component:MobileComponent},
 // {path:'diet',component:DietComponent   },
  {path:'excercise',component:ExcerciseComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {
    path:'profile',
  component:ClientProfileComponent,
  canActivate:[AuthGuard]

},
{
  path:'reset-password',
component:ResetPasswordComponent,
canActivate:[AuthGuard]

},

{
  path:'client-security',
component:ClientSecurityComponent,
canActivate:[AuthGuard]

},
{
  path:'payment-history',
component:ClientPaymentHistoryComponent,
canActivate:[AuthGuard]

},
  {path:'coach',component:CoachComponent},
  
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'demographics',component:ClientDemographicsComponent,
  canActivate:[AuthGuard]
},
  {path:'goals',component:GoalsComponent},
  {path:'survey',component:SurveyComponent,
  canActivate:[AuthGuard]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
