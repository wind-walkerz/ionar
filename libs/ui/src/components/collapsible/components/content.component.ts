import { Component, OnInit, OnDestroy, HostBinding, OnChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'collapse-content',
  template: `
      <ng-content></ng-content>`
})
export class ContentComponent implements OnInit, OnChanges, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  collapsed: Boolean = false;

  @HostBinding('style.display') display: string;


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


  ngOnInit() {
    this.display = this.collapsed ? 'none' : 'flex';
  }

  ngOnChanges(changes): void {
    this.display = this.collapsed ? 'none' : 'flex';
  }

  ngOnDestroy(): void {
  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
