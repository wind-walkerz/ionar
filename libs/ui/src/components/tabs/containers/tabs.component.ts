import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  OnInit,
  QueryList
} from '@angular/core';
import _ from 'lodash';
import { TabComponent } from '../component/tab.component';

@Component({
  selector: 'io-tabs',
  template: `
      <ng-template>
          <ng-content></ng-content>
      </ng-template>

      <div class="label_container">
          <ng-container *ngFor="let tab of contentList; let i =index">
              <tab-label
                      [ngClass]="tab.active && 'active'"
                      (click)="selectTab(i)"
                      [text]="tab.label"
                      [template]="tab._labelComp?._templateRef"
              >
              </tab-label>
          </ng-container>
      </div>
      
      <tab-content
              *ngIf="activeTab"
              [template]="activeTab._contentComp ? activeTab._contentComp._templateRef : activeTab._tabTemplateRef"
      >
      </tab-content>
    

  `,
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit, AfterViewInit {
  @ContentChildren(TabComponent) contentList: QueryList<TabComponent>;

  activeTab: TabComponent;

  constructor(private cd: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.activeTab = this.contentList.toArray()[0];
    this.contentList.toArray()[0].active = true;
    this.cd.detectChanges();
  }

  selectTab = selected_index => {
    _.each(this.contentList.toArray(), (tab, i) => {
      tab.active = i === selected_index;
    });
    this.activeTab = _.find(this.contentList.toArray(), ['active', true]);
  };
}
