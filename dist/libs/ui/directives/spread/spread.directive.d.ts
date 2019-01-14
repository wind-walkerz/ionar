import { ElementRef, OnChanges, OnInit, Renderer2, SimpleChanges, ViewContainerRef } from '@angular/core';
export declare class SpreadDirective implements OnInit, OnChanges {
    private _vcRef;
    private _renderer;
    private _elRef;
    private _context;
    constructor(_vcRef: ViewContainerRef, _renderer: Renderer2, _elRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
