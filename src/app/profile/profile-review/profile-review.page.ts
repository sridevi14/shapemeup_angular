import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-review',
  templateUrl: './profile-review.page.html',
  styleUrls: ['./profile-review.page.scss'],
})
export class ProfileReviewPage implements OnInit {
  pageTitle ='Add reviews';
  backButtonRoute = 'profile';
   Clients = [{ClientName: "Client Name" },
   {ClientName: "Client Name" },
   {ClientName: "Client Name" },
   {ClientName: "Client Name" },
   {ClientName: "Client Name" }]

  constructor() { }

  ngOnInit() {
  }

}
