import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GoalsPageRoutingModule } from './goals-routing.module';
import { ToolbarModule } from 'src/app/_shared/component/toolbar/toolbar.module';
import { GoalsPage } from './goals.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToolbarModule,
    IonicModule,
    GoalsPageRoutingModule,
  ],
  declarations: [GoalsPage]
})
export class GoalsPageModule {}
