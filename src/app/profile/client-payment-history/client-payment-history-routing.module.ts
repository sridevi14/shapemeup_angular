import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientPaymentHistoryPage } from './client-payment-history.page';

const routes: Routes = [
  {
    path: '',
    component: ClientPaymentHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientPaymentHistoryPageRoutingModule {}
