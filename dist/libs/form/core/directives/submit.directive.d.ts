import { ElementRef, OnChanges, OnDestroy, OnInit } from '@angular/core';
export declare class SubmitDirective implements OnInit, OnDestroy, OnChanges {
    private _elRef;
    private _formGr;
    disabled: Boolean;
    onClick: (e: MouseEvent) => void;
    constructor(_elRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
}
