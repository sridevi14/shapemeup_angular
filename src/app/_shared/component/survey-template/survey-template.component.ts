import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { AlertService } from '../../service/alert.service';
import { AuthenticationService } from '../../service/authentication.service';
import { LoaderService } from '../../service/loader.service';
import { SurveyTemplateService } from './survey-template.service';

@Component({
  selector: 'app-survey-template',
  templateUrl: './survey-template.component.html',
  styleUrls: ['./survey-template.component.scss'],
})
export class SurveyTemplateComponent implements OnInit {
  @Input() surveyQuestionCollection: string;
  @Input() surveyAnswerCollection: string;
  @Input() redirectURL: string;
  @Input() weekNo: number;
  surveyQuestions: any[] = [];
  @ViewChild('surveyForm', { read: NgForm }) surveyForm: any;
  userType: string;
  isReadOnly: boolean = false;

  
  
  constructor(private surveyService: SurveyTemplateService,
    private route: ActivatedRoute, public loaderService: LoaderService, private alertService: AlertService,
    private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.userType = localStorage.getItem('userType');
    if(this.weekNo != 0 || this.userType === 'coach'){
    this.getWeeklyServyAnwser();
    this.isReadOnly = true;
    }
    else this.getWeeklyServiceQuestion();
  }

  async getWeeklyServiceQuestion() {
    this.surveyService.getSurveyQuestion(this.surveyQuestionCollection).subscribe(question => {
      console.log(question);
      this.surveyQuestions = question;
    });
  }

   getWeeklyServyAnwser(){

    this.surveyService.fetchWeeklySurvey(this.surveyAnswerCollection,this.weekNo,this.route.snapshot.paramMap.get('id')).subscribe(question => {
      console.log(question);
      this.surveyQuestions = question[0].survey;
    });
  }

  submit(surveyForm: NgForm) {
   
    if (surveyForm.valid && this.surveyQuestions.length > 0) {
      let date:string= moment.utc().format();
      let surveyAnswer = {
        survey: this.surveyQuestions,
        clientId: localStorage.getItem('userId'),
        coachId: localStorage.getItem('coachId'),
        createdOn: moment.utc(date).local().format(),
        weekNo: moment(new Date()).week(),
        year : moment(new Date()).year()
      }
      console.log(moment.utc(date).local().format());
      this.loaderService.showLoader(true);
      this.surveyService.createWeeklySurvey(this.surveyAnswerCollection,surveyAnswer).then(data => {
        this.loaderService.showLoader(false);
        //let redirectUrl = localStorage.getItem('userType') === 'coach' ? this.redirectURL  + this.route.snapshot.paramMap.get('id') : this.redirectURL;
        this.alertService.presentAlert('Feedback Saved Successfully', this.redirectURL);
      })
      if(!localStorage.getItem('isUserLoginFirstTime'))
      this.authService.updateFirstLoggedInDetails();
      console.log(surveyAnswer)
    }
  }
}

