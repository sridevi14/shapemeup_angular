import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CertiAchiePageRoutingModule } from './certi-achie-routing.module';
import { ToolbarModule } from 'src/app/_shared/component/toolbar/toolbar.module';
import { CertiAchiePage } from './certi-achie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ToolbarModule,
    CertiAchiePageRoutingModule
  ],
  declarations: [CertiAchiePage]
})
export class CertiAchiePageModule {}
