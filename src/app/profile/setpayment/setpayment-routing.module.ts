import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetpaymentPage } from './setpayment.page';

const routes: Routes = [
  {
    path: '',
    component: SetpaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetpaymentPageRoutingModule {}
