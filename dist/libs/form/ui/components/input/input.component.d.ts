import { ChangeDetectorRef, ElementRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import _ from 'lodash';
import { IoFormFieldUI } from '../../interfaces/IoFormFieldUI';
export declare class InputComponent extends IoFormFieldUI implements OnInit, OnChanges {
    type: string;
    name: string;
    placeholder: string;
    value: any;
    range: any[];
    constructor(cd: ChangeDetectorRef, _elRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onFocus: () => void;
    onBlur: () => void;
    onChange: ((e: any) => void) & _.Cancelable;
    onKeyPress: (e: KeyboardEvent) => void;
    onKeyDown: (e: KeyboardEvent) => void;
    onPaste: (e: ClipboardEvent) => void;
    onPhoneKeyDown: (e: KeyboardEvent) => void;
    onPhonePaste: (e: ClipboardEvent) => void;
    onNumberKeyDown: (e: KeyboardEvent) => void;
    onNumberPaste: (e: ClipboardEvent) => void;
}
