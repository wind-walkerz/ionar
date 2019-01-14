import { AfterViewInit, ChangeDetectorRef, ElementRef, TemplateRef } from '@angular/core';
import { ControlContainer } from '../interfaces/ControlContainer';
import { AbstractControl } from '../models/AbstractControl';
export declare const formArrayProvider: any;
export declare class FormArrayComponent extends ControlContainer implements AfterViewInit {
    private _elRef;
    isDefaultTemplate: Boolean;
    readonly controlTemplate: TemplateRef<any>;
    readonly attribute: string;
    readonly control: AbstractControl[];
    private _controlContainers;
    constructor(parent: ControlContainer, _elRef: ElementRef, cd: ChangeDetectorRef);
    ngAfterViewInit(): void;
}
