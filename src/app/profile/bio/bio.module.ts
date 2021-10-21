import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BioPageRoutingModule } from './bio-routing.module';

import { BioPage } from './bio.page';
import { ToolbarModule } from 'src/app/_shared/component/toolbar/toolbar.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ToolbarModule,
    BioPageRoutingModule
  ],
  declarations: [BioPage]
})
export class BioPageModule { }
