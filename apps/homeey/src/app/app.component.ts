import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { slide_in_left_trigger } from '@ionar/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slide_in_left_trigger
  ]
})
export class AppComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  triggerAnimation(outlet) {
    return outlet.activatedRouteData.animation || null;
  }

}
