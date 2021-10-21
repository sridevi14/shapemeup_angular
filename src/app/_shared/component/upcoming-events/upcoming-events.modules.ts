import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { UpcomingEventsComponent } from './upcoming-events.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    declarations: [UpcomingEventsComponent],
    exports: [UpcomingEventsComponent]
})
export class UpcomingEventsModule { }
