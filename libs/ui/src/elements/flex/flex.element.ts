import { Component, OnInit, OnDestroy, Input, HostBinding } from '@angular/core';

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
export class FlexElement {
}
