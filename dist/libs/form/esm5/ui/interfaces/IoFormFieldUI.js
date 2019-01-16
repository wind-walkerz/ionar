"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var IoAbstractUI_1 = require("./IoAbstractUI");
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
        _this.change = new core_1.EventEmitter();
        _this.blur = new core_1.EventEmitter();
        _this.enter = new core_1.EventEmitter();
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
        invalid: [{ type: core_1.Input }],
        disabled: [{ type: core_1.Input }],
        focused: [{ type: core_1.Input }],
        readonly: [{ type: core_1.Input }],
        change: [{ type: core_1.Output }],
        blur: [{ type: core_1.Output }],
        enter: [{ type: core_1.Output }],
        _isFocused: [{ type: core_1.HostBinding, args: ['class.focus',] }],
        _isInvalid: [{ type: core_1.HostBinding, args: ['class.invalid',] }],
        _isDisabled: [{ type: core_1.HostBinding, args: ['class.disabled',] }],
        _isReadonly: [{ type: core_1.HostBinding, args: ['class.readonly',] }]
    };
    return IoFormFieldUI;
}(IoAbstractUI_1.IoAbstractUI));
exports.IoFormFieldUI = IoFormFieldUI;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW9Gb3JtRmllbGRVSS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9mb3JtLyIsInNvdXJjZXMiOlsidWkvaW50ZXJmYWNlcy9Jb0Zvcm1GaWVsZFVJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxzQ0FHdUI7QUFDdkIsK0NBQThDOzs7O0FBRzlDO0lBQTRDLHlDQUFZO0lBQXhEO1FBQUEscUVBK0JDO1FBN0JVLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsY0FBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixhQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGNBQVEsR0FBWSxLQUFLLENBQUM7UUFFekIsWUFBTSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQzVCLFVBQUksR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQUMxQixXQUFLLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7O0lBc0J2QyxDQUFDO0lBcEJDLHNCQUNJLHFDQUFVOzs7O1FBRGQ7WUFFRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSxxQ0FBVTs7OztRQURkO1lBRUUsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksc0NBQVc7Ozs7UUFEZjtZQUVFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTtJQUVELHNCQUNJLHNDQUFXOzs7O1FBRGY7WUFFRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7OzBCQTNCQSxZQUFLOzJCQUNMLFlBQUs7MEJBQ0wsWUFBSzsyQkFDTCxZQUFLO3lCQUVMLGFBQU07dUJBQ04sYUFBTTt3QkFDTixhQUFNOzZCQUVOLGtCQUFXLFNBQUMsYUFBYTs2QkFLekIsa0JBQVcsU0FBQyxlQUFlOzhCQUszQixrQkFBVyxTQUFDLGdCQUFnQjs4QkFLNUIsa0JBQVcsU0FBQyxnQkFBZ0I7O0lBSy9CLG9CQUFDO0NBQUEsQUEvQkQsQ0FBNEMsMkJBQVksR0ErQnZEO0FBL0JxQixzQ0FBYTs7O0lBRWpDLGdDQUFrQzs7SUFDbEMsaUNBQW1DOztJQUNuQyxnQ0FBa0M7O0lBQ2xDLGlDQUFtQzs7SUFFbkMsK0JBQXNDOztJQUN0Qyw2QkFBb0M7O0lBQ3BDLDhCQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZyxcclxuICBJbnB1dCwgT3V0cHV0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElvQWJzdHJhY3RVSSB9IGZyb20gJy4vSW9BYnN0cmFjdFVJJztcclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW9Gb3JtRmllbGRVSSBleHRlbmRzIElvQWJzdHJhY3RVSSB7XHJcblxyXG4gIEBJbnB1dCgpIGludmFsaWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGZvY3VzZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSByZWFkb25seTogQm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBibHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBlbnRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mb2N1cycpXHJcbiAgZ2V0IF9pc0ZvY3VzZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5mb2N1c2VkO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pbnZhbGlkJylcclxuICBnZXQgX2lzSW52YWxpZCgpIHtcclxuICAgIHJldHVybiB0aGlzLmludmFsaWQ7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRpc2FibGVkJylcclxuICBnZXQgX2lzRGlzYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MucmVhZG9ubHknKVxyXG4gIGdldCBfaXNSZWFkb25seSgpIHtcclxuICAgIHJldHVybiB0aGlzLnJlYWRvbmx5O1xyXG4gIH1cclxuXHJcbn1cclxuIl19