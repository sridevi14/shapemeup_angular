import { Component, OnInit } from '@angular/core';

import {ItemService} from '../services/item.service';

@Component({
  selector: 'app-excercise',
  templateUrl: './excercise.component.html',
  styleUrls: ['./excercise.component.css']
})
export class ExcerciseComponent implements OnInit {
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
