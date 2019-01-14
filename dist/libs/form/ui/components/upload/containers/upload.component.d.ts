import { ChangeDetectorRef, ElementRef, EventEmitter, TemplateRef } from '@angular/core';
import { IoFormFieldUI } from '../../../interfaces/IoFormFieldUI';
export declare class UploadComponent extends IoFormFieldUI {
    file_list: any[];
    change: EventEmitter<{}>;
    invalid: Boolean;
    type: string;
    template: TemplateRef<any>;
    multiple: Boolean;
    title: any;
    constructor(cd: ChangeDetectorRef, el: ElementRef);
    onFileChanged(file_list: any): void;
}
