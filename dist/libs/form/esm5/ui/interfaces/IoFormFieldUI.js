/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { IoAbstractUI } from '@ionar/ui';
/**
 * @abstract
 */
var IoFormFieldUI = /** @class */ (function (_super) {
    tslib_1.__extends(IoFormFieldUI, _super);
    function IoFormFieldUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.invalid = false;
        _this.disabled = false;
        _this.focused = false;
        _this.readonly = false;
        _this.change = new EventEmitter();
        _this.blur = new EventEmitter();
        _this.enter = new EventEmitter();
        return _this;
    }
    Object.defineProperty(IoFormFieldUI.prototype, "_isFocused", {
        get: /**
         * @return {?}
         */
        function () {
            return this.focused;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IoFormFieldUI.prototype, "_isInvalid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.invalid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IoFormFieldUI.prototype, "_isDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IoFormFieldUI.prototype, "_isReadonly", {
        get: /**
         * @return {?}
         */
        function () {
            return this.readonly;
        },
        enumerable: true,
        configurable: true
    });
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
    return IoFormFieldUI;
}(IoAbstractUI));
export { IoFormFieldUI };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW9Gb3JtRmllbGRVSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9mb3JtLyIsInNvdXJjZXMiOlsidWkvaW50ZXJmYWNlcy9Jb0Zvcm1GaWVsZFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFlBQVksRUFBRSxXQUFXLEVBQ3pCLEtBQUssRUFBRSxNQUFNLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFdBQVcsQ0FBQzs7OztBQU16QztJQUE0Qyx5Q0FBWTtJQUF4RDtRQUFBLHFFQStCQztRQTdCVSxhQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsYUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixjQUFRLEdBQVksS0FBSyxDQUFDO1FBRXpCLFlBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLFVBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFCLFdBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDOztJQXNCdkMsQ0FBQztJQXBCQyxzQkFDSSxxQ0FBVTs7OztRQURkO1lBRUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQ0kscUNBQVU7Ozs7UUFEZDtZQUVFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUVELHNCQUNJLHNDQUFXOzs7O1FBRGY7WUFFRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSxzQ0FBVzs7OztRQURmO1lBRUUsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBOzswQkEzQkEsS0FBSzsyQkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFFTCxNQUFNO3VCQUNOLE1BQU07d0JBQ04sTUFBTTs2QkFFTixXQUFXLFNBQUMsYUFBYTs2QkFLekIsV0FBVyxTQUFDLGVBQWU7OEJBSzNCLFdBQVcsU0FBQyxnQkFBZ0I7OEJBSzVCLFdBQVcsU0FBQyxnQkFBZ0I7O0lBSy9CLG9CQUFDO0NBQUEsQUEvQkQsQ0FBNEMsWUFBWSxHQStCdkQ7U0EvQnFCLGFBQWE7OztJQUVqQyxnQ0FBa0M7O0lBQ2xDLGlDQUFtQzs7SUFDbkMsZ0NBQWtDOztJQUNsQyxpQ0FBbUM7O0lBRW5DLCtCQUFzQzs7SUFDdEMsNkJBQW9DOztJQUNwQyw4QkFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsIE91dHB1dFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJb0Fic3RyYWN0VUkgfSBmcm9tICdAaW9uYXIvdWknO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJb0Zvcm1GaWVsZFVJIGV4dGVuZHMgSW9BYnN0cmFjdFVJIHtcclxuXHJcbiAgQElucHV0KCkgaW52YWxpZDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBCb29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZm9jdXNlZDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHJlYWRvbmx5OiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGVudGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZvY3VzJylcclxuICBnZXQgX2lzRm9jdXNlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmZvY3VzZWQ7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmludmFsaWQnKVxyXG4gIGdldCBfaXNJbnZhbGlkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaW52YWxpZDtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGlzYWJsZWQnKVxyXG4gIGdldCBfaXNEaXNhYmxlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmRpc2FibGVkO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5yZWFkb25seScpXHJcbiAgZ2V0IF9pc1JlYWRvbmx5KCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVhZG9ubHk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=