import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalInfoPageRoutingModule } from './personal-info-routing.module';

import { PersonalInfoPage } from './personal-info.page';
import { ToolbarModule } from 'src/app/_shared/component/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ToolbarModule,
    PersonalInfoPageRoutingModule
  ],
  declarations: [PersonalInfoPage]
})
export class PersonalInfoPageModule { }
