import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import {enableProdMode} from '@angular/core';

  enableProdMode();
 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 showMe : boolean =true;
  
  constructor() { 
    
  }

  ngOnInit(){
    
  }
toggleTag(){
  this.showMe=!this.showMe
}
 
}