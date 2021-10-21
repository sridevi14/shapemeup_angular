import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Appointment } from '../../modals/appointment.interface';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss'],
})
export class UpcomingEventsComponent implements OnInit, OnChanges {

  @Input() appointments: Appointment[];
  upcomingEvents: Appointment[] = []
  currentDate = new Date().toISOString();
  selectedDate = new Date().toISOString();
  minimumDate = new Date().toISOString();

  constructor(public loadingController: LoadingController) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.upcomingEvents = this.appointments;
    console.log(this.upcomingEvents);
    // this.handleLoader();
  }

  async handleLoader() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }


}
