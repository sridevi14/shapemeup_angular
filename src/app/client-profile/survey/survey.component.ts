import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {



  pageTitle ='Display Surveys';

   week = [{Date: "06/28" },
   {Date: "06/21" },
  {Date: "06/17" },
  {Date: "06/10" }]
  weeks = [{Date: "05/28" },
  {Date: "05/21" },
 {Date: "05/17" },
 {Date: "05/10" }]
  constructor() { }

  ngOnInit(): void {
  }

}
