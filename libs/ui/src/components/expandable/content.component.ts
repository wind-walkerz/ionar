import { Component, OnInit, OnDestroy, Input, HostBinding, OnChanges } from '@angular/core';

@Component({
  selector: 'expand-content',
  exportAs: 'expand-content',
  template: `
      <ng-content></ng-content>`,
  styles: [`
      :host {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          overflow: hidden;
      }
  `]
})
export class ContentComponent implements OnInit, OnChanges, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///
  @Input() height: any;
  @Input() maxHeight: any;

  @HostBinding('style.max-height') private _maxHeight: any;
  expanded: Boolean = false;

  constructor() {
  }


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


  ngOnInit() {
    this._maxHeight = this.expanded ? this.maxHeight : this.height;
  }

  ngOnChanges(changes): void {
    this._maxHeight = this.expanded ? this.maxHeight : this.height;
  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
