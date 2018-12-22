import { OnInit, OnDestroy, TemplateRef, EventEmitter } from '@angular/core';
export declare class PageLinkComponent implements OnInit, OnDestroy {
    directionLinks: 'prev' | 'next';
    boundaryLinks: 'first' | 'last';
    disabled: boolean;
    change: EventEmitter<{}>;
    template: TemplateRef<any>;
    tpl: TemplateRef<any>;
    onClick: (e: any) => void;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
}
