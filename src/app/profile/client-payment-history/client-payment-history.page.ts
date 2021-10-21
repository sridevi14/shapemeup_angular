import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-payment-history',
  templateUrl: './client-payment-history.page.html',
  styleUrls: ['./client-payment-history.page.scss'],
})
export class ClientPaymentHistoryPage implements OnInit {
  pageTitle ='Show Client';
  backButtonRoute = '/coach/profile';
  Month = [{MonthName:"June 2021"}]
  Months = [{MonthName:"May 2021"},
  {MonthName:"April 2021"},
  {MonthName:"March 2021"}]
  Client = [{ClientName: "Client Name" }]
  month: string;
  name:any;
  constructor() { }

  ngOnInit() {
  }

}
