import { ElementRef, EventEmitter, OnChanges, OnInit } from '@angular/core';
export declare class ModalComponent implements OnInit, OnChanges {
    private eRef;
    visible: Boolean;
    onCancel: EventEmitter<{}>;
    onOk: EventEmitter<{}>;
    close: EventEmitter<{}>;
    private _maskElRef;
    onKeydownHandler(event: KeyboardEvent): void;
    constructor(eRef: ElementRef);
    ngOnInit(): void;
    onClose: () => void;
    ngOnChanges(changes: any): void;
}
