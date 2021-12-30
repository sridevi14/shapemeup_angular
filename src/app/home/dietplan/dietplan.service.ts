import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { DietPlanTemplate, Food, DietPlanSchedule } from 'src/app/_shared/modals/dietplan.interface';

@Injectable({
  providedIn: 'root'
})
export class DietplanService {
  dietPlanLists: any[] = [];
  constructor(private firestore: AngularFirestore) { }

  async createDietplan(newdietplan: Food) {
 
    await this.firestore.collection('foodItem/').add(newdietplan);
   
    alert("added");
  }

  async updateDietplan(dietplanID: string, dietplan: Food) {
    await this.firestore.doc('foodItem/' + dietplanID).update(dietplan);
    alert("updated")
  }

  getDietplan(dietplanID: string) {
    return this.firestore.doc<any>('foodItem/' + dietplanID).valueChanges();
  }

  deleteDietplan(dietplanID: string) {
    return this.firestore.doc('foodItem/' + dietplanID).delete();
  }

  getDietPlanList(order: string = 'asc') {
    return this.firestore.collection<any>('foodItem', ref => ref.orderBy('name', order === 'desc' ? 'desc' : 'asc')).valueChanges({ idField: 'id' });
  }

  // Diet plan template

  createDietPlanTemplate(template: DietPlanTemplate) {
    return this.firestore.collection('dietPlanTemplates').add(template);
  }

  updateDietPlanTemplate(template: DietPlanTemplate, id: string,) {
    return this.firestore.doc('dietPlanTemplates/' + id).update(template);
  }

  deleteDietPlanTemplate(id: string) {
    return this.firestore.doc('dietPlanTemplates/' + id).delete();
  }

  getDietPlanTemplate(id: string) {
    return this.firestore.doc<any>('dietPlanTemplates/' + id).valueChanges();
  }

  getAllDietPlanTemplates(order: string = 'asc') {
    return this.firestore.collection<any>('dietPlanTemplates', ref => ref.orderBy('name', order === 'desc' ? 'desc' : 'asc')).valueChanges({ idField: 'id' });
  }

  public get dietPlanList() {
    return this.dietPlanLists;
  }

  public set dietPlanList(value) {
    this.dietPlanLists = value;
  }

  createDietPlanSchedule(dietPlanScheduleData: DietPlanSchedule, clientID: string) {
    return this.firestore.collection('dietPlanSchedule').doc(clientID).set(dietPlanScheduleData);
  }

  getDietPlanScheduleByClientID(id: string) {
    return this.firestore.doc<DietPlanSchedule>('dietPlanSchedule/' + id).valueChanges();
  }
}
