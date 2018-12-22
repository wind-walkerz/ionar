import { OnInit, OnDestroy } from '@angular/core';
export declare class CollapsibleComponent implements OnInit, OnDestroy {
    private _panelComp;
    private _headerComp;
    private _contentComp;
    single: Boolean;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
}
