import { Component, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'io-btn',
  template: `
      <ng-content></ng-content>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  animated: Boolean = false;
  @Input() disabled: Boolean = false;
  @Input() type: String = '';


  @HostBinding('class.primary') primary_style: Boolean;
  @HostBinding('class.danger') danger_style: Boolean;

  @HostListener('click')
  onClick = () => {
    if (!this.disabled) {
      this.animated = true;
      setTimeout(() => this.animated = false, 100);
    }
  };

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor() {
  }

  ngOnInit() {


    switch (this.type) {
      case 'primary':
        this.primary_style = true;
        break;
      case 'danger':
        this.danger_style = true;
        break;
    }
  }


  ///-----------------------------------------------  Main Functions   -----------------------------------------------///


}
