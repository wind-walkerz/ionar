import { OnChanges, OnInit } from '@angular/core';
export declare class ButtonComponent implements OnInit, OnChanges {
    animated: Boolean;
    disabled: Boolean;
    type: String;
    primary_style: Boolean;
    danger_style: Boolean;
    isDisabled: Boolean;
    onClick: () => void;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
}
