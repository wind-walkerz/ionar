import { OnChanges, OnDestroy, OnInit, TemplateRef } from '@angular/core';
export declare class SlideDirective implements OnInit, OnDestroy, OnChanges {
    tplRef: TemplateRef<any>;
    constructor(tplRef: TemplateRef<any>);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
