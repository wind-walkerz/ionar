import { AfterViewChecked, ElementRef, Renderer2 } from '@angular/core';
export declare class SquareDirective implements AfterViewChecked {
    private _elRef;
    private _renderer;
    onResize(): void;
    constructor(_elRef: ElementRef, _renderer: Renderer2);
    ngAfterViewChecked(): void;
    matchHeight: (parent: HTMLElement) => void;
}
