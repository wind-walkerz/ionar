import { AfterViewInit, OnChanges, OnInit, TemplateRef } from '@angular/core';
export declare class TabContentComponent implements OnInit, AfterViewInit, OnChanges {
    template: TemplateRef<any>;
    _templateRef: TemplateRef<any>;
    private _vcRef;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    createView: () => void;
}
