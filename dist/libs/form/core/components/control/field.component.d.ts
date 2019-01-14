import { AfterViewInit, ChangeDetectorRef, OnInit, TemplateRef } from '@angular/core';
import { FormControlComponent } from '../form-control.component';
export declare class FieldComponent implements OnInit, AfterViewInit {
    private cd;
    /**
     * @description
     * The parent  for the components
     *
     * @internal
     */
    _parent: FormControlComponent | null;
    readonly template: TemplateRef<any>;
    constructor(cd: ChangeDetectorRef, parent: FormControlComponent);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    onChanged: (e: any) => void;
    onTouched: () => void;
    onEntered: () => void;
}
