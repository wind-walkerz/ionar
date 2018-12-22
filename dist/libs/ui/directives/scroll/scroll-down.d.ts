import { AfterViewChecked, ElementRef, OnInit, Renderer2 } from '@angular/core';
export declare class ScrollDownDirective implements OnInit, AfterViewChecked {
    private _elRef;
    private _renderer;
    active: any;
    constructor(_elRef: ElementRef, _renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewChecked(): void;
}
