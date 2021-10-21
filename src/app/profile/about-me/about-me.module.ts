import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutMePageRoutingModule } from './about-me-routing.module';
import { ToolbarModule } from 'src/app/_shared/component/toolbar/toolbar.module';
import { AboutMePage } from './about-me.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ToolbarModule,
    AboutMePageRoutingModule
  ],
  declarations: [AboutMePage]
})
export class AboutMePageModule {}
