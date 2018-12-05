import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'flex',
  template: `
      <ng-content></ng-content>
  `,
  styles: [`
      :host {
          display: flex;
      }
  `]
})
export class FlexElement implements OnInit, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  constructor() {
  }


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


  ngOnInit() {

  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
