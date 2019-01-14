import { ChangeDetectorRef, ElementRef } from '@angular/core';
import { IoFormFieldUI } from '../../interfaces/IoFormFieldUI';
export declare class TextareaComponent extends IoFormFieldUI {
    name: string;
    value: any;
    placeholder: any;
    constructor(cd: ChangeDetectorRef, el: ElementRef);
    ngOnInit(): void;
}
