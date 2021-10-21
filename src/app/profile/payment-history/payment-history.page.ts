import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.page.html',
  styleUrls: ['./payment-history.page.scss'],
})
export class PaymentHistoryPage implements OnInit {
  pageTitle ='Show Clients';
  backButtonRoute = '/coach/profile';
  Month1 = [{MonthName:"June 2021"}]
  Month2 = [{MonthName:"May 2021"}]
  Clients = [{ClientName: "Client Name" },
            {ClientName: "Client Name" },
            {ClientName: "Client Name" }]
  month: string;

  constructor() { }

  ngOnInit() {
  }
  showClients(clickedMonth: string) {
    if (clickedMonth === this.month) {
      this.month= '';
    } else {
      this.month = clickedMonth;
    }
  }

}
