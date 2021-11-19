import { Component, HostBinding, HostListener, OnInit } from '@angular/core';
import {enableProdMode} from '@angular/core';
import { AuthenticationService } from 'src/app/_shared/service/authentication.service';
  enableProdMode();
 
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 showMe : boolean =true;
 showMe2 : boolean =true;
  constructor( public authService: AuthenticationService) { 
   
  }

  ngOnInit(){
    
  }
toggleTag(){
  this.showMe=!this.showMe
  
}
toggleTag2(){
  this.showMe2=!this.showMe2
  
}
 
}