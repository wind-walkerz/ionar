import { AfterViewInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ControlContainer } from '../interfaces/ControlContainer';
import { AbstractControl } from '../models/AbstractControl';
export declare const formGroupProvider: any;
export declare class FormGroupComponent extends ControlContainer implements OnInit, AfterViewInit, OnDestroy {
    private _vcRef;
    private _elRef;
    isDefaultTemplate: Boolean;
    readonly controlTemplate: TemplateRef<any>;
    readonly attribute: string;
    readonly control: {
        [name: string]: AbstractControl;
    };
    private _controlContainerList;
    private _ioControlList;
    constructor(parent: ControlContainer, _vcRef: ViewContainerRef, _elRef: ElementRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
