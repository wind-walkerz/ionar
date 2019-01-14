import { EventEmitter } from '@angular/core';
import { IoAbstractUI } from '@ionar/ui';
export declare abstract class IoFormFieldUI extends IoAbstractUI {
    invalid: Boolean;
    disabled: Boolean;
    focused: Boolean;
    readonly: Boolean;
    change: EventEmitter<{}>;
    blur: EventEmitter<{}>;
    enter: EventEmitter<{}>;
    readonly _isFocused: Boolean;
    readonly _isInvalid: Boolean;
    readonly _isDisabled: Boolean;
    readonly _isReadonly: Boolean;
}
