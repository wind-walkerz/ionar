import {
  AfterViewInit,
  Component,
  ContentChild,
  Input,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { TabLabelComponent } from './label.component';
import { TabContentComponent } from './content.component';

@Component({
  selector: 'tab',
  template: `
      <ng-template #tab>
          <ng-content></ng-content>
      </ng-template>
  `
})
export class TabComponent implements OnInit, AfterViewInit {
  @Input() label: any;

  @ViewChild('tab', { read: TemplateRef }) _tabTemplateRef: TemplateRef<any>;
  @ContentChild(TabLabelComponent) _labelComp: TabLabelComponent;
  @ContentChild(TabContentComponent) _contentComp: TabContentComponent;


  active: Boolean = false;

  constructor() {
  }

  ngOnInit() {

    if (!this.label && !this._labelComp) {
      throw new Error(`Missing Tab's label`);
    }

    if ((this._labelComp && !this._contentComp) || (!this._labelComp && this._contentComp))
      throw new Error(`Missing ${(!this._labelComp && this._contentComp) ? `<tab-label></tab-label>` : `<tab-content></tab-content>`}`);

  }

  ngAfterViewInit(): void {

  }
}