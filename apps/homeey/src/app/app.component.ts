import { Component, OnInit } from '@angular/core';
import { routerAnimation } from './shared/animations/router.animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routerAnimation
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
