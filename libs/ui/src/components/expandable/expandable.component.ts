import { Component, OnInit, OnDestroy, Input, HostBinding, OnChanges, ContentChild } from '@angular/core';
import { ContentComponent } from './content.component';
import { ExpandToggleDirective } from './expand-toggle.directive';
import { until } from 'selenium-webdriver';
import { untilDestroyed } from '@ionar/utility';

@Component({
  selector: 'io-expandable',

  template: `
      <ng-content></ng-content>`,
  styles: [`
      :host {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
      }
  `]
})
export class ExpandableComponent implements OnInit, OnChanges, OnDestroy {

  ///-----------------------------------------------  Variables   -----------------------------------------------///
  @Input() height: any = '10rem';
  @Input() maxHeight: any = '100%';

  @ContentChild(ContentComponent) private _contentComp;
  @ContentChild(ExpandToggleDirective) private _expandDir;


  constructor() {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {
    if (this._contentComp) {
      this._contentComp.height = this.height;
      this._contentComp.maxHeight = this.maxHeight;

    }


    if (this._expandDir) {
      this._expandDir.toggle.pipe(untilDestroyed(this)).subscribe(() => {
        this._contentComp.expanded = !this._contentComp.expanded;
        this._contentComp.ngOnChanges();
      });
    }
  }

  ngOnDestroy(): void {
  }

  ngOnChanges(changes): void {

  }


  ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
