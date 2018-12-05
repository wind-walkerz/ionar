import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  OnInit,
  QueryList
} from '@angular/core';
import _ from 'lodash';
import { TabComponent } from './tab.component';

@Component({
  selector: 'io-tabs',
  template: `
    <ng-template> <ng-content></ng-content> </ng-template>

    <div class="label_container">
      <ng-container *ngFor="let tab of contentList; let i = index">
        <div
          class="label"
          [ngClass]="tab.active && 'active'"
          (click)="selectTab(i)"
        >
          <ng-container *ngTemplateOutlet="tab.label.tpl"></ng-container>
        </div>
      </ng-container>
    </div>
    <div class="content_wrapper" *ngIf="active_tab">
      <ng-container *ngTemplateOutlet="active_tab.content.tpl"></ng-container>
    </div>
  `,
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterViewInit {
  @ContentChildren(TabComponent) contentList: QueryList<TabComponent>;

  active_tab: TabComponent;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.active_tab = this.contentList.toArray()[0];
    this.contentList.toArray()[0].active = true;
    this.cd.detectChanges();
  }

  selectTab = selected_index => {
    _.each(this.contentList.toArray(), (tab, i) => {
      tab.active = i === selected_index;
    });
    this.active_tab = _.find(this.contentList.toArray(), ['active', true]);
  };
}
