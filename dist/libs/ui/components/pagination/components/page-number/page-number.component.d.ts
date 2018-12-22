import { OnInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
export declare class PageNumberComponent implements OnInit, OnChanges {
    number: number;
    currentPage: number;
    change: EventEmitter<{}>;
    onClick: (e: any) => void;
    onMouseDown: (e: any) => void;
    onMouseUp: (e: any) => void;
    _activeStyle: boolean;
    _focusStyle: boolean;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
