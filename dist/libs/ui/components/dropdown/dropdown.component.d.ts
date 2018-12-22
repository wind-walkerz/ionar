import { AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
export declare class DropdownComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {
    private _elRef;
    private cd;
    viewInitialized: Boolean;
    visible: Boolean;
    showDropdownMenu: Boolean;
    private _menuComp;
    private _toggleComp;
    onClickOutside(e: Event): void;
    constructor(_elRef: ElementRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
