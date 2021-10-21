import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilePage } from './profile.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilePage
  },
  {
    path: 'personal-info',
    loadChildren: () => import('./personal-info/personal-info.module').then(m => m.PersonalInfoPageModule)
  },
  /*   {
      path: 'address',
      loadChildren: () => import('./address/address.module').then( m => m.AddressPageModule)
    }, */
  {
    path: 'bio',
    loadChildren: () => import('./bio/bio.module').then(m => m.BioPageModule)
  },
  {
    path: 'account-settings',
    loadChildren: () => import('./account-settings/account-settings.module').then(m => m.AccountSettingsPageModule)
  },
  {
    path: 'packages',
    loadChildren: () => import('./packages/packages.module').then(m => m.PackagesPageModule)
  },
  {
    path: 'setpayment',
    loadChildren: () => import('./setpayment/setpayment.module').then(m => m.SetpaymentPageModule)
  },
  {
    path: 'profile-review',
    loadChildren: () => import('./profile-review/profile-review.module').then(m => m.ProfileReviewPageModule)
  },
  {
    path: 'security',
    loadChildren: () => import('./security/security.module').then(m => m.SecurityPageModule)
  },
  {
    path: 'certi-achie',
    loadChildren: () => import('./certi-achie/certi-achie.module').then(m => m.CertiAchiePageModule)
  },
  {
    path: 'about-me',
    loadChildren: () => import('./about-me/about-me.module').then(m => m.AboutMePageModule)
  },
  {
    path: 'payment-history',
    loadChildren: () => import('./payment-history/payment-history.module').then(m => m.PaymentHistoryPageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./password-reset/password-reset.module').then(m => m.PasswordResetPageModule)
  },
  {
    path: 'survey',
    loadChildren: () => import('./survey/survey.module').then(m => m.SurveyPageModule)
  },
  {
    path: 'goals',
    loadChildren: () => import('./goals/goals.module').then(m => m.GoalsPageModule)
  },

  {
    path: 'client-payment-history',
    loadChildren: () => import('./client-payment-history/client-payment-history.module').then( m => m.ClientPaymentHistoryPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('../chat/chat.module').then( m => m.ChatPageModule)
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule { }
