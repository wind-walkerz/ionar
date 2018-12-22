import { ElementRef, OnInit } from '@angular/core';
export declare class ControlComponent implements OnInit {
    private eRef;
    show_menu: boolean;
    label: any;
    constructor(eRef: ElementRef);
    ngOnInit(): void;
    tabindex: number;
}
