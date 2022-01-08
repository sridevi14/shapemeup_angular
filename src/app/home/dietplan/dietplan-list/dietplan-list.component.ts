import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';




// import { ModalController } from '@ionic/angular';
import { Food } from 'src/app/_shared/modals/dietplan.interface';
import { DietplanService } from 'src/app/home/dietplan/dietplan.service';

@Component({
  selector: 'app-dietplan-list',
  templateUrl: './dietplan-list.component.html',
  styleUrls: ['./dietplan-list.component.css']
})
export class DietplanListComponent implements OnInit {


  filteredItemList: any[] = [];
  sortOrder: 'asc' | 'desc' = 'asc';
  dietPlanList: Food[] = [];
  groupedSelectedItems: any[] = [];
  searchDietPlanText: string;

  constructor(
    private router:Router,
    private dietplanService: DietplanService,
    
  ) { }
  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }
  
  ngOnInit(): void {
    this.getDietPlans();
  }


  getDietPlans() {
 
    this.dietplanService.getDietPlanList().subscribe(dietPlan => {
      this.dietPlanList = dietPlan;
      this.filteredItemList = dietPlan;
      this.groupedSelectedItems = this.dietPlanList;
      this.dietplanService.dietPlanList = this.dietPlanList;
      
    })
  }



  searchItems(event) {
    if (event.target.value) {
      this.filteredItemList = this.dietPlanList.filter(el => {
        return !el.name.toLowerCase().indexOf(event.target.value.toLowerCase())
      })
    } else
      this.filteredItemList = this.dietPlanList;
    this.groupedSelectedItems = this.filteredItemList;

  }

  sortItem(order) {
    this.sortOrder = order;
    if (this.sortOrder === 'asc')
      this.filteredItemList.sort((a, b) => a.name < b.name ? -1 : (a.name > b.name ? 1 : 0))
    else
      this.filteredItemList.sort((a, b) => a.name > b.name ? -1 : (a.name < b.name ? 1 : 0))
    this.groupedSelectedItems = this.filteredItemList;
  }


  navigateToCreatPage(value) {
    if (value) {
      
      this.router.navigate(['diet-create']);
    }
  }

  viewDietPlanDetails(id: string) {
    console.log('workout-edit/' + id);

    this.router.navigate(['diet-edit/'+id]);
  }

  

}
