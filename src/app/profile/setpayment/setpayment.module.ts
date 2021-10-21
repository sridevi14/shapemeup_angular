import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetpaymentPageRoutingModule } from './setpayment-routing.module';

import { SetpaymentPage } from './setpayment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SetpaymentPageRoutingModule
  ],
  declarations: [SetpaymentPage]
})
export class SetpaymentPageModule { }
