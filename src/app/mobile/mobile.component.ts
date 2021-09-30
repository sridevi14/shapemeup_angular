import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  ImagePath1: string;
  ImagePath2: string;
  
  constructor() { 
    this.ImagePath1 = '/assets/image2.png'
    this.ImagePath2 = '/assets/image1.png'
  }

  ngOnInit(): void {
  }

}
