import { Component, OnInit } from '@angular/core';
import { YouTubePlayerModule } from "@angular/youtube-player";

import {ItemService} from '../services/item.service';

@Component({
  selector: 'app-excercise',
  templateUrl: './excercise.component.html',
  styleUrls: ['./excercise.component.css']
})
export class ExcerciseComponent implements OnInit {


items:any[]=[];
  name:any;
  constructor(private itemService:ItemService) { }

  ngOnInit(): void {
    //console.log('ngonitrun');
    this.itemService.getItems().subscribe(items => {
      console.log(items);
      this.items = items;
     
    });
   
  }

  Search(){
if(this.name == ""){
  this.ngOnInit();
  
}
else if(this.name==this.name){
  this.items=this.items.filter(res =>{
    return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
  });
}
  }



}
