import { OnInit } from '@angular/core';
export declare class OptionComponent implements OnInit {
    data: any;
    constructor();
    ngOnInit(): void;
    selected: Boolean;
    disabled: Boolean;
    onClick(btn: any): void;
}
