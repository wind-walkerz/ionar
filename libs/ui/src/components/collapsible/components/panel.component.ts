import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ContentChild
} from '@angular/core';
import { HeaderComponent } from './header.component';

import { untilDestroyed } from '@ionar/utility';
import { ContentComponent } from './content.component';

@Component({
  selector: 'collapse-panel',
  template: `
      <ng-content select="collapse-header"></ng-content>

      <ng-content select="collapse-content"></ng-content>

  `
})
export class PanelComponent implements OnInit, AfterViewInit, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @ContentChild(HeaderComponent) private _headerComp;
  @ContentChild(ContentComponent) private _contentComp;

  constructor() {
  }


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


  ngOnInit() {

    if (!this._headerComp || !this._contentComp) {
      throw new Error(`'collapse-header' or 'collapse-content'  cannot be found!`);
    }

    this._headerComp.toggle.pipe(untilDestroyed(this)).subscribe(() => {
      this._contentComp.collapsed = !this._contentComp.collapsed;
      this._contentComp.ngOnChanges();
    });
  }

  ngOnDestroy(): void {
  }

  ngAfterViewInit(): void {


  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
