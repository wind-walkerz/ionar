import { Component, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dropdown-toggle',
  template: `
      <ng-content></ng-content>`,
  styles: [`
      :host {
          display: flex;
          flex-shrink: 0;
      }
  `]
})
export class ToggleComponent implements OnInit, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Output() change = new EventEmitter();

  @HostListener('click', ['$event'])
  onClick(e: Event) {
    this.change.emit();
  }

  constructor() {
  }


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


  ngOnInit() {

  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
