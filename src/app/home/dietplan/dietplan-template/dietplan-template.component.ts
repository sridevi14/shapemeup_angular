import { Component, OnInit } from '@angular/core';




import { DietPlanTemplate, Food } from 'src/app/_shared/modals/dietplan.interface';
import { EmitEvent } from 'src/app/_shared/modals/_shared.interface';


import { DietplanService } from '../dietplan.service';
@Component({
  selector: 'app-dietplan-template',
  templateUrl: './dietplan-template.component.html',
  styleUrls: ['./dietplan-template.component.css']
})
export class DietplanTemplateComponent implements OnInit {
  pageTitle = 'Diet Template';
  templateList: DietPlanTemplate[] = [];
  showTemplateList = true;

  selectedTemplate: DietPlanTemplate = { name: '', foods: [] };
  dietPlanList: Food[] = [];
  constructor(

    private dietplanService: DietplanService,
   
    

  ) { }

  ngOnInit(): void {

  
    // this.dietplanService.getAllDietPlanTemplates().subscribe(async template => {
    //   console.log(template);
    //   this.templateList = template;
    //  
     
    // });
    this.getDietPlans();

  }



  
  getDietPlans() {
    this.dietplanService.getDietPlanList().subscribe(dietplan => {
      this.dietPlanList = dietplan;
      console.log(this.dietPlanList);
    })
  }

  viewTemplateDetails(event: EmitEvent) {
    console.log(event);
    if (event.type === 'select') {
      this.selectedTemplate = event.value;
      this.showTemplateList = false;
    }
    if (event.type === 'addNew') {
      this.selectedTemplate = { name: '', foods: [] };
      this.showTemplateList = false;
    }
  }

  dietPlanTemplateEvent(data: EmitEvent) {
    console.log(data);
    if (data.type === 'save') {
      console.log(this.templateList.find(el => { return el.name.toLocaleLowerCase().trim() === data.value.name.toLocaleLowerCase().trim() }))
      if (this.templateList.find(el => { return el.name.toLocaleLowerCase().trim() === data.value.name.toLocaleLowerCase().trim() })) {
       // this.alertService.presentAlert('Template with name \'' + data.value.name + '\' already found');
      } else {
        if (data.value.id) { this.updateTemplate(data.value) }
        else { this.createTemplate(data.value) }
      }
    }
    if (data.type === 'delete' && data.value.id) {
      this.deleteTemplate(data.value.id)
    }
  }



  async createTemplate(template: DietPlanTemplate) {
    //await this.loaderService.showLoader(true);
   // template.name = this.titlecasePipe.transform(template.name);
    template.coachID = localStorage.getItem('userId');
    this.dietplanService.createDietPlanTemplate(template).then(async template => {
     // this.alertService.presentAlert('Template Created');
     // await this.loaderService.showLoader(false);
      this.selectedTemplate = { name: '', foods: [] };
      this.showTemplateList = true;
    }).catch(err => {
      //this.alertService.presentAlert('Error Occured')
    });
  }

  async updateTemplate(template: DietPlanTemplate) {
   // await this.loaderService.showLoader(true);
   // template.name = this.titlecasePipe.transform(template.name);
    template.coachID = localStorage.getItem('userId');
    this.dietplanService.updateDietPlanTemplate(template, template.id).then(async template => {
     // this.alertService.presentAlert('Template Updated');
     // await this.loaderService.showLoader(false);
      this.selectedTemplate = { name: '', foods: [] };
      this.showTemplateList = true;
    }).catch(err => {
      //this.alertService.presentAlert('Error Occured')
    });
  }

  async deleteTemplate(id: string) {
   // await this.loaderService.showLoader(true);
    this.dietplanService.deleteDietPlanTemplate(id).then(async template => {
      //this.alertService.presentAlert('Template Deleted');
     // await this.loaderService.showLoader(false);
      this.selectedTemplate = { name: '', foods: [] };
      this.showTemplateList = true;
    }).catch(err => {
      //this.alertService.presentAlert('Error Occured')
    });
  }

  removeFood(index) {
    this.selectedTemplate.foods.splice(index, 1);
  }

}
