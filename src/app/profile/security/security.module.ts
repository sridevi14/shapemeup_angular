import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecurityPageRoutingModule } from './security-routing.module';
import { ToolbarModule } from 'src/app/_shared/component/toolbar/toolbar.module';
import { SecurityPage } from './security.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ToolbarModule,
    SecurityPageRoutingModule
  ],
  declarations: [SecurityPage]
})
export class SecurityPageModule {}
