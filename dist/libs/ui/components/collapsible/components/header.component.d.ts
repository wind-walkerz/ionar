import { OnInit, OnDestroy, EventEmitter } from '@angular/core';
export declare class HeaderComponent implements OnInit, OnDestroy {
    toggle: EventEmitter<{}>;
    onClick($event: any): void;
    collapsed: Boolean;
    private _toggleDir;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
}
