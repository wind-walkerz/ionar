import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare class MenuComponent implements OnInit, OnChanges {
    options: ({
        label: any;
        value: any;
        disable?: boolean;
    })[];
    name: string;
    value: any;
    change: EventEmitter<{}>;
    blur: EventEmitter<{}>;
    enter: EventEmitter<{}>;
    invalid: Boolean;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onSelectOption: (option: any) => void;
}
