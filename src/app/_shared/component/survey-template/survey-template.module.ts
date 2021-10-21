import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ToolbarModule } from 'src/app/_shared/component/toolbar/toolbar.module';
import { SurveyTemplateComponent } from './survey-template.component';

@NgModule({
  imports: [
    ToolbarModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
  ],
  declarations: [SurveyTemplateComponent],
  exports: [SurveyTemplateComponent]
})
export class SurveryTemplateModule { }
