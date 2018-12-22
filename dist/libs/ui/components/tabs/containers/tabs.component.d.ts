import { AfterViewInit, ChangeDetectorRef, OnInit, QueryList } from '@angular/core';
import { TabComponent } from '../component/tab.component';
export declare class TabsComponent implements OnInit, AfterViewInit {
    private cd;
    contentList: QueryList<TabComponent>;
    activeTab: TabComponent;
    constructor(cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    selectTab: (selected_index: any) => void;
}
