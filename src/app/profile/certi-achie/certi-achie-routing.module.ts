import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CertiAchiePage } from './certi-achie.page';

const routes: Routes = [
  {
    path: '',
    component: CertiAchiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertiAchiePageRoutingModule {}
