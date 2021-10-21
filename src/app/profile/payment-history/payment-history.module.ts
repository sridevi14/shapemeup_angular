import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ToolbarModule } from 'src/app/_shared/component/toolbar/toolbar.module';
import { PaymentHistoryPageRoutingModule } from './payment-history-routing.module';

import { PaymentHistoryPage } from './payment-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToolbarModule,
    IonicModule,
    PaymentHistoryPageRoutingModule
  ],
  declarations: [PaymentHistoryPage]
})
export class PaymentHistoryPageModule {}
