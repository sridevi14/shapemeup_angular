import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {

  @Input() headingText: string;
  @Input() backButtonRoute: string;
  @Input() showProfileIcon: boolean;
  @Input() profileRoute: string = '/coach/profile';
  @Input() customEventText: string;
  @Input() leftCustomEvent: string;
  @Input() rightCustomEvent: string;
  @Output() leftCustomEventClick = new EventEmitter<string>();
  @Output() rightCustomEventClick = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit() { }

  backClicked() {
    this.router.navigate([this.backButtonRoute])
  }

}
