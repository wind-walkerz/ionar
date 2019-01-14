import { ChangeDetectorRef, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { CollapsibleDirective } from './collapsible.directive';
export declare class ContentDirective implements OnInit, OnDestroy {
    private cd;
    private _vcRef;
    private _templateRef;
    collapsed: Boolean;
    private _parent;
    constructor(parent: CollapsibleDirective, cd: ChangeDetectorRef, _vcRef: ViewContainerRef, _templateRef: TemplateRef<any>);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
