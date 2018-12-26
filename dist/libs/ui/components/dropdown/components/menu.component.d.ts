import { ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
export declare class MenuComponent implements OnInit, OnChanges, OnDestroy {
    elRef: ElementRef;
    visible: Boolean;
    template: TemplateRef<any>;
    visibilityChange$: Subject<{}>;
    tplRef: TemplateRef<any>;
    vcRef: ViewContainerRef;
    change: EventEmitter<{}>;
    onClick(e: Event): void;
    constructor(elRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
