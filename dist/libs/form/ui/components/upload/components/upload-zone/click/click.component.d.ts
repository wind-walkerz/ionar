import { EventEmitter, OnChanges, OnInit, TemplateRef } from '@angular/core';
export declare class ClickComponent implements OnInit, OnChanges {
    change: EventEmitter<{}>;
    template: TemplateRef<any>;
    multiple: Boolean;
    title: any;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
}
