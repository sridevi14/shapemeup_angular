import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileReviewPage } from './profile-review.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileReviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileReviewPageRoutingModule {}
