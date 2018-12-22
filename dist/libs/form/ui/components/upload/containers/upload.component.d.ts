import { ElementRef, EventEmitter, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
export declare class UploadComponent implements OnInit, OnChanges {
    private elRef;
    file_list: any[];
    change: EventEmitter<{}>;
    invalid: Boolean;
    type: string;
    template: TemplateRef<any>;
    multiple: Boolean;
    private _defaultTempRef;
    constructor(elRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onFileChanged(file_list: any): void;
}
