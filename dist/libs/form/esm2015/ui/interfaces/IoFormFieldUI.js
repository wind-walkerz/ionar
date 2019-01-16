/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { IoAbstractUI } from './IoAbstractUI';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW9Gb3JtRmllbGRVSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9mb3JtLyIsInNvdXJjZXMiOlsidWkvaW50ZXJmYWNlcy9Jb0Zvcm1GaWVsZFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsWUFBWSxFQUFFLFdBQVcsRUFDekIsS0FBSyxFQUFFLE1BQU0sRUFDZCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFHOUMsTUFBTSxPQUFnQixhQUFjLFNBQVEsWUFBWTtJQUF4RDs7UUFFVyxZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRXpCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBc0J2QyxDQUFDOzs7O0lBcEJDLElBQ0ksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsSUFDSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVELElBQ0ksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7c0JBM0JBLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLO3VCQUNMLEtBQUs7cUJBRUwsTUFBTTttQkFDTixNQUFNO29CQUNOLE1BQU07eUJBRU4sV0FBVyxTQUFDLGFBQWE7eUJBS3pCLFdBQVcsU0FBQyxlQUFlOzBCQUszQixXQUFXLFNBQUMsZ0JBQWdCOzBCQUs1QixXQUFXLFNBQUMsZ0JBQWdCOzs7O0lBeEI3QixnQ0FBa0M7O0lBQ2xDLGlDQUFtQzs7SUFDbkMsZ0NBQWtDOztJQUNsQyxpQ0FBbUM7O0lBRW5DLCtCQUFzQzs7SUFDdEMsNkJBQW9DOztJQUNwQyw4QkFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsIE91dHB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJb0Fic3RyYWN0VUkgfSBmcm9tICcuL0lvQWJzdHJhY3RVSSc7XHJcblxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIElvRm9ybUZpZWxkVUkgZXh0ZW5kcyBJb0Fic3RyYWN0VUkge1xyXG5cclxuICBASW5wdXQoKSBpbnZhbGlkOiBCb29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBmb2N1c2VkOiBCb29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcmVhZG9ubHk6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgZW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZm9jdXMnKVxyXG4gIGdldCBfaXNGb2N1c2VkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZm9jdXNlZDtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW52YWxpZCcpXHJcbiAgZ2V0IF9pc0ludmFsaWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnZhbGlkO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5kaXNhYmxlZCcpXHJcbiAgZ2V0IF9pc0Rpc2FibGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnJlYWRvbmx5JylcclxuICBnZXQgX2lzUmVhZG9ubHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZWFkb25seTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==