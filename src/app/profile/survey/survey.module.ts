import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SurveyPageRoutingModule } from './survey-routing.module';
import { ToolbarModule } from 'src/app/_shared/component/toolbar/toolbar.module';
import { SurveyPage } from './survey.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
     ToolbarModule,
    IonicModule,
    SurveyPageRoutingModule
  ],
  declarations: [SurveyPage]
})
export class SurveyPageModule {}
