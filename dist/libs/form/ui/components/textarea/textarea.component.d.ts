import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare class TextareaComponent implements OnInit, OnChanges {
    name: string;
    value: any;
    placeholder: any;
    change: EventEmitter<{}>;
    blur: EventEmitter<{}>;
    invalid: Boolean;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
