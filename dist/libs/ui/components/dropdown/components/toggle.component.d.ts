import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
export declare class ToggleComponent implements OnInit, OnDestroy {
    change: EventEmitter<{}>;
    onClick(e: Event): void;
    constructor();
    ngOnInit(): void;
    ngOnDestroy(): void;
}
