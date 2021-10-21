import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileReviewPageRoutingModule } from './profile-review-routing.module';

import { ProfileReviewPage } from './profile-review.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileReviewPageRoutingModule
  ],
  declarations: [ProfileReviewPage]
})
export class ProfileReviewPageModule {}
