import { EventEmitter, OnInit } from '@angular/core';
export declare class MenuComponent implements OnInit {
    options: any[];
    onSelectOption: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
}
