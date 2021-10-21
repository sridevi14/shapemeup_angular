import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ToolbarModule } from 'src/app/_shared/component/toolbar/toolbar.module';
import { ClientPaymentHistoryPageRoutingModule } from './client-payment-history-routing.module';

import { ClientPaymentHistoryPage } from './client-payment-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ToolbarModule,
    ClientPaymentHistoryPageRoutingModule
  ],
  declarations: [ClientPaymentHistoryPage]
})
export class ClientPaymentHistoryPageModule {}
