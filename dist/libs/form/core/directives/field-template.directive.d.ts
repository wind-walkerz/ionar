import { AfterViewInit, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
export declare class FieldTemplateDirective implements OnInit, AfterViewInit {
    private _vcRef;
    private _tplRef;
    name: any;
    constructor(_vcRef: ViewContainerRef, _tplRef: TemplateRef<any>);
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
