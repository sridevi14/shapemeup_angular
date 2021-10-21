import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class SurveyTemplateService {

  constructor(private firestore: AngularFirestore) { }

  getSurveyQuestion(collectionName: string) {
    return this.firestore.collection<any>(collectionName).valueChanges();
  }

  async createWeeklySurvey(collectionName: string, survey: any) {
    return this.firestore.collection(collectionName + '/').add(survey);
  }

  // getSurveyAnswer(collectionName: string, clientId: string) {
  //   return this.firestore.collection<any>(collectionName, ref => ref.where('clientId', '==', clientId).where('coachId', '==', localStorage.getItem('userId'))
  //   ).valueChanges({ idField: 'id' });
  // }

  fetchWeeklySurvey(collectionName: string, weekNo?: number, clientId?: string) {
    // let date = new Date();
    // let sevenDaysAgo = date.setDate(date.getDate() - 7);
    // let sevenDaysAgo= date.setMilliseconds(moment(date,"MM-DD-YYY").week());
    console.log(moment(new Date()).week());
    if(weekNo)
    return this.firestore.collection<any>(collectionName, ref => ref.where('weekNo', '==', weekNo).where('clientId', '==', clientId)
    ).valueChanges({ idField: 'id' });
    else{
     if(localStorage.getItem("userType") === "coach") 
    return this.firestore.collection<any>(collectionName, ref => ref.where('coachId', '==', localStorage.getItem('userId')).where('clientId', '==', clientId)
    ).valueChanges({ idField: 'id' });
    else{
    return this.firestore.collection<any>(collectionName, ref => ref.where('coachId', '==', localStorage.getItem('coachId')).where('clientId', '==', clientId)
      ).valueChanges({ idField: 'id' });
    }
    }
  }
}
