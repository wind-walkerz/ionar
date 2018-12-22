import { ElementRef, EventEmitter, OnInit } from '@angular/core';
export declare class SelectComponent implements OnInit {
    private eRef;
    show_menu: Boolean;
    selected_option: any;
    options: any;
    value: any;
    change: EventEmitter<{}>;
    blur: EventEmitter<{}>;
    invalid: Boolean;
    constructor(eRef: ElementRef);
    ngOnInit(): void;
    onToggleMenu: () => void;
    onChange: (option: any) => void;
    clickout(event: any): void;
}
