import { EventEmitter, OnInit, TemplateRef } from '@angular/core';
export declare class DropComponent implements OnInit {
    change: EventEmitter<{}>;
    multiple: Boolean;
    template: TemplateRef<any>;
    drop_hover: Boolean;
    onDrop: ($event: any) => void;
    onDragOver: ($event: any) => void;
    onDragLeave: ($event: any) => void;
    constructor();
    ngOnInit(): void;
}
