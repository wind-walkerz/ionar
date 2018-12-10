import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[collapse-toggle]'
})
export class CollapseToggleDirective {

  @Output() toggle = new EventEmitter();


  @HostListener('click')
  onClick($event) {
    this.toggle.emit();
  }

  constructor() {
  }

}
