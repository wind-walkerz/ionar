/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { IoAbstractUI } from '@ionar/ui';
/**
 * @abstract
 */
export class IoFormFieldUI extends IoAbstractUI {
    constructor() {
        super(...arguments);
        this.invalid = false;
        this.disabled = false;
        this.focused = false;
        this.readonly = false;
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
        this.enter = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get _isFocused() {
        return this.focused;
    }
    /**
     * @return {?}
     */
    get _isInvalid() {
        return this.invalid;
    }
    /**
     * @return {?}
     */
    get _isDisabled() {
        return this.disabled;
    }
    /**
     * @return {?}
     */
    get _isReadonly() {
        return this.readonly;
    }
}
IoFormFieldUI.propDecorators = {
    invalid: [{ type: Input }],
    disabled: [{ type: Input }],
    focused: [{ type: Input }],
    readonly: [{ type: Input }],
    change: [{ type: Output }],
    blur: [{ type: Output }],
    enter: [{ type: Output }],
    _isFocused: [{ type: HostBinding, args: ['class.focus',] }],
    _isInvalid: [{ type: HostBinding, args: ['class.invalid',] }],
    _isDisabled: [{ type: HostBinding, args: ['class.disabled',] }],
    _isReadonly: [{ type: HostBinding, args: ['class.readonly',] }]
};
if (false) {
    /** @type {?} */
    IoFormFieldUI.prototype.invalid;
    /** @type {?} */
    IoFormFieldUI.prototype.disabled;
    /** @type {?} */
    IoFormFieldUI.prototype.focused;
    /** @type {?} */
    IoFormFieldUI.prototype.readonly;
    /** @type {?} */
    IoFormFieldUI.prototype.change;
    /** @type {?} */
    IoFormFieldUI.prototype.blur;
    /** @type {?} */
    IoFormFieldUI.prototype.enter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW9Gb3JtRmllbGRVSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9mb3JtLyIsInNvdXJjZXMiOlsidWkvaW50ZXJmYWNlcy9Jb0Zvcm1GaWVsZFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsWUFBWSxFQUFFLFdBQVcsRUFDekIsS0FBSyxFQUFFLE1BQU0sRUFDZCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sV0FBVyxDQUFDOzs7O0FBTXpDLE1BQU0sT0FBZ0IsYUFBYyxTQUFRLFlBQVk7SUFBeEQ7O1FBRVcsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUV6QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQXNCdkMsQ0FBQzs7OztJQXBCQyxJQUNJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELElBQ0ksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsSUFDSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7O3NCQTNCQSxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUVMLE1BQU07bUJBQ04sTUFBTTtvQkFDTixNQUFNO3lCQUVOLFdBQVcsU0FBQyxhQUFhO3lCQUt6QixXQUFXLFNBQUMsZUFBZTswQkFLM0IsV0FBVyxTQUFDLGdCQUFnQjswQkFLNUIsV0FBVyxTQUFDLGdCQUFnQjs7OztJQXhCN0IsZ0NBQWtDOztJQUNsQyxpQ0FBbUM7O0lBQ25DLGdDQUFrQzs7SUFDbEMsaUNBQW1DOztJQUVuQywrQkFBc0M7O0lBQ3RDLDZCQUFvQzs7SUFDcEMsOEJBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LCBPdXRwdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW9BYnN0cmFjdFVJIH0gZnJvbSAnQGlvbmFyL3VpJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW9Gb3JtRmllbGRVSSBleHRlbmRzIElvQWJzdHJhY3RVSSB7XHJcblxyXG4gIEBJbnB1dCgpIGludmFsaWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGZvY3VzZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSByZWFkb25seTogQm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBibHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBlbnRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mb2N1cycpXHJcbiAgZ2V0IF9pc0ZvY3VzZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb2N1c2VkO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pbnZhbGlkJylcclxuICBnZXQgX2lzSW52YWxpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmludmFsaWQ7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRpc2FibGVkJylcclxuICBnZXQgX2lzRGlzYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MucmVhZG9ubHknKVxyXG4gIGdldCBfaXNSZWFkb25seSgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlYWRvbmx5O1xyXG4gIH1cclxuXHJcbn1cclxuIl19