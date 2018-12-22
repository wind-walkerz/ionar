import { Component, OnInit } from '@angular/core';
import { slideInDown } from '@ionar/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInDown
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
