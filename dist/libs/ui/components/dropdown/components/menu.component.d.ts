import { ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
export declare class MenuComponent implements OnInit, OnChanges, OnDestroy {
    elRef: ElementRef;
    visible: Boolean;
    template: TemplateRef<any>;
    visibilityChange$: Subject<{}>;
    tplRef: TemplateRef<any>;
    vcRef: ViewContainerRef;
    constructor(elRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
