import { OnInit, OnDestroy, ElementRef, ViewContainerRef, TemplateRef, ChangeDetectorRef, OnChanges, SimpleChanges } from '@angular/core';
import { ComponentContext } from '../../interfaces/IoAbstractUI';
export declare class DefaultContentComponent implements OnInit, OnChanges, OnDestroy {
    private _elRef;
    private _vcRef;
    private cd;
    context: ComponentContext;
    isHostRemoved: Boolean;
    template: {
        template: TemplateRef<any>;
        context?: any;
    };
    constructor(_elRef: ElementRef, _vcRef: ViewContainerRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
