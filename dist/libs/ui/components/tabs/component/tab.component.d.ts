import { AfterViewInit, OnInit, TemplateRef } from '@angular/core';
import { TabLabelComponent } from './label.component';
import { TabContentComponent } from './content.component';
export declare class TabComponent implements OnInit, AfterViewInit {
    label: any;
    _tabTemplateRef: TemplateRef<any>;
    _labelComp: TabLabelComponent;
    _contentComp: TabContentComponent;
    active: Boolean;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
