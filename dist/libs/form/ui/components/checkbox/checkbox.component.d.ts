import { EventEmitter, OnInit } from '@angular/core';
export declare class CheckboxComponent implements OnInit {
    label: string;
    title: any;
    value: Boolean;
    change: EventEmitter<{}>;
    blur: EventEmitter<{}>;
    invalid: Boolean;
    onClick: () => void;
    constructor();
    ngOnInit(): void;
}
