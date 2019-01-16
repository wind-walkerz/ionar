import { ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
export interface ComponentContext {
    defaultContent: TemplateRef<any>;
    $implicit: Object;
}
export declare abstract class IoAbstractUI implements OnInit, OnChanges, OnDestroy {
    protected cd: ChangeDetectorRef;
    protected _elRef: ElementRef;
    template: TemplateRef<any>;
    viewInit: Boolean;
    private _contextData;
    readonly context: ComponentContext;
    protected _container: ViewContainerRef;
    protected _defaultTemplate: TemplateRef<any>;
    protected _contentTemplate: TemplateRef<any>;
    constructor(cd: ChangeDetectorRef, _elRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    setContext: (properties: {
        [key: string]: any;
    }, events?: {
        [key: string]: Function;
    }) => void;
    parseTemplate: () => void;
}
