import { Component, OnInit } from '@angular/core';
import {ItemService} from '../services/item.service';
@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {
  items:any[];
  constructor(private itemService:ItemService) { }

  ngOnInit(): void {

     //console.log('ngonitrun');
     this.itemService.getItems().subscribe(items => {
      console.log(items);
      this.items = items;
    });
  }

}
