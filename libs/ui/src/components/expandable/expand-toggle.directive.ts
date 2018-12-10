import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[expand-toggle]'
})
export class ExpandToggleDirective {

  @Output() toggle = new EventEmitter();


  @HostListener('click')
  onClick($event) {
    this.toggle.emit();
  }

  constructor() {
  }

}
