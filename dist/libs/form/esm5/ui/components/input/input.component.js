"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var IoFormFieldUI_1 = require("../../interfaces/IoFormFieldUI");
var InputComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InputComponent, _super);
    function InputComponent(cd, _elRef) {
        var _this = _super.call(this, cd, _elRef) || this;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        _this.type = 'text';
        _this.name = '';
        _this.placeholder = '';
        _this.value = '';
        _this.range = [];
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        _this.onFocus = function () {
            // this.focused = true;
        };
        _this.onBlur = function () {
            _this.blur.emit();
            _this.focused = false;
            _this.cd.markForCheck();
        };
        _this.onChange = lodash_1.default.debounce(function (e) {
            e.stopPropagation();
            /** @type {?} */
            var value = e.target.value;
            /** @type {?} */
            var min = parseInt(_this.range[0], 10);
            /** @type {?} */
            var max = parseInt(_this.range[1], 10);
            if (_this.range && _this.type === 'number' && !(min <= value && value <= max)) {
                value = e.target.value = _this.range[1];
            }
            _this.change.emit(value);
        }, 500);
        //  Keyboard & Clipboard Event  //
        _this.onKeyPress = function (e) {
            if (e.keyCode === 13)
                _this.enter.emit();
        };
        _this.onKeyDown = function (e) {
            return (_this.type === 'number')
                ? _this.onNumberKeyDown(e)
                : (_this.type === 'phone')
                    ? _this.onPhoneKeyDown(e)
                    : null;
        };
        _this.onPaste = function (e) {
            return (_this.type === 'number')
                ? _this.onNumberPaste(e)
                : (_this.type === 'phone')
                    ? _this.onPhonePaste(e)
                    : null;
        };
        // Ensure that it is a number from [0-9] no decimal_point
        _this.onPhoneKeyDown = function (e) {
            // Allow
            if (e.keyCode === 8 || // backspace
                e.keyCode === 9 || // Tab
                e.keyCode === 13 || // enter
                (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) || //  Ctrl + A
                (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) || //  Ctrl + C
                (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) || //  Ctrl + X
                (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) || //  Ctrl + V
                (e.keyCode >= 35 && e.keyCode <= 39) // home, end, left, right
            ) {
                return;
            }
            // Reject if not a number or numpad
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && // not number
                (e.keyCode < 96 || e.keyCode > 105) // not numpad
            ) {
                e.preventDefault();
            }
        };
        // Ensure that pasted value is a number or string of number
        _this.onPhonePaste = function (e) {
            if (!/^\d+$/.test(e.clipboardData.getData('Text'))) {
                e.preventDefault();
            }
        };
        // Ensure that it is a  number: integer || decimal
        _this.onNumberKeyDown = function (e) {
            // Allow
            if (e.keyCode === 8 || // backspace
                e.keyCode === 9 || // Tab
                e.keyCode === 13 || // enter
                e.keyCode === 188 || // comma(",")
                e.keyCode === 110 || //   numpad decimal point
                e.keyCode === 190 || // period(".")
                (e.keyCode === 65 && (e.ctrlKey || e.metaKey)) || //  Ctrl + A
                (e.keyCode === 67 && (e.ctrlKey || e.metaKey)) || //  Ctrl + C
                (e.keyCode === 88 && (e.ctrlKey || e.metaKey)) || //  Ctrl + X
                (e.keyCode === 86 && (e.ctrlKey || e.metaKey)) || //  Ctrl + V
                (e.keyCode >= 35 && e.keyCode <= 39) // home, end, left, right
            ) {
                return;
            }
            // Reject if not a number or numpad
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && // not number
                (e.keyCode < 96 || e.keyCode > 105) // not numpad
            ) {
                e.preventDefault();
            }
        };
        // Ensure that pasted value is a string of number: integer || decimal
        _this.onNumberPaste = function (e) {
            if (!/^\d.+$/.test(e.clipboardData.getData('Text'))) {
                e.preventDefault();
            }
        };
        return _this;
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    InputComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.setContext({
            type: this.type,
            name: this.name,
            value: this.value,
            placeholder: this.placeholder
        }, {
            input: this.onChange,
            blur: this.onBlur,
            focus: this.onFocus,
            keydown: this.onKeyDown,
            paste: this.onPaste,
            keypress: this.onKeyPress
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    InputComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    InputComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'io-input',
                    template: "<ng-container [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"context\"></ng-container>\r\n\r\n<ng-template #default_template let-context>\r\n    <input\r\n            [spread]=\"context\"\r\n            *ngIf=\"!(context?.readonly || context?.disabled)\"\r\n    >\r\n\r\n    <span *ngIf=\"context?.readonly || context?.disabled\">\r\n          {{value}}\r\n      </span>\r\n</ng-template>\r\n\r\n<ng-template #content_template>\r\n    <ng-content></ng-content>\r\n</ng-template>\r\n",
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    styles: [":host{background-color:transparent;border:1px solid #d9d9d9;border-radius:.4rem;color:#363636;display:flex;align-items:center;justify-content:flex-start;font-size:1.5rem;outline:0;overflow:hidden;padding:0 1rem;position:relative;transition:.3s cubic-bezier(.645,.045,.355,1);width:100%;height:auto;min-height:2.25em;max-height:5rem;max-width:100%}:host.focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff}:host.invalid{border-color:#f5222d}:host.invalid.focus{border-color:#ff4d4f;outline:0;box-shadow:0 0 0 2px rgba(245,34,45,.2)}:host ::ng-deep input{border:none;color:inherit;display:flex;flex:1px;font-size:inherit;font-weight:inherit;text-transform:inherit;text-decoration:inherit;outline:0;height:100%;max-width:100%;z-index:1}:host .loading_icon{width:10%}:host-context(.readonly){border:0}:host-context(.disabled){border:0}"]
                }] }
    ];
    /** @nocollapse */
    InputComponent.ctorParameters = function () { return [
        { type: core_1.ChangeDetectorRef },
        { type: core_1.ElementRef }
    ]; };
    InputComponent.propDecorators = {
        type: [{ type: core_1.Input }],
        name: [{ type: core_1.Input }],
        placeholder: [{ type: core_1.Input }],
        value: [{ type: core_1.Input }],
        range: [{ type: core_1.Input }]
    };
    return InputComponent;
}(IoFormFieldUI_1.IoFormFieldUI));
exports.InputComponent = InputComponent;
if (false) {
    /** @type {?} */
    InputComponent.prototype.type;
    /** @type {?} */
    InputComponent.prototype.name;
    /** @type {?} */
    InputComponent.prototype.placeholder;
    /** @type {?} */
    InputComponent.prototype.value;
    /** @type {?} */
    InputComponent.prototype.range;
    /** @type {?} */
    InputComponent.prototype.onFocus;
    /** @type {?} */
    InputComponent.prototype.onBlur;
    /** @type {?} */
    InputComponent.prototype.onChange;
    /** @type {?} */
    InputComponent.prototype.onKeyPress;
    /** @type {?} */
    InputComponent.prototype.onKeyDown;
    /** @type {?} */
    InputComponent.prototype.onPaste;
    /** @type {?} */
    InputComponent.prototype.onPhoneKeyDown;
    /** @type {?} */
    InputComponent.prototype.onPhonePaste;
    /** @type {?} */
    InputComponent.prototype.onNumberKeyDown;
    /** @type {?} */
    InputComponent.prototype.onNumberPaste;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJ1aS9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBUXVCO0FBQ3ZCLDBEQUF1QjtBQUN2QixnRUFBK0Q7QUFHL0Q7SUFPb0MsMENBQWE7SUFhL0Msd0JBQ0UsRUFBcUIsRUFDckIsTUFBa0I7UUFGcEIsWUFJRSxrQkFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLFNBQ2xCOztRQWJRLFVBQUksR0FBRyxNQUFNLENBQUM7UUFDZCxVQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsaUJBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsV0FBSyxHQUFRLEVBQUUsQ0FBQztRQUVoQixXQUFLLEdBQUcsRUFBRSxDQUFDOztRQXVDcEIsYUFBTyxHQUFHO1lBQ1IsdUJBQXVCO1FBQ3pCLENBQUMsQ0FBQztRQUVGLFlBQU0sR0FBRztZQUNQLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDakIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUM7UUFFRixjQUFRLEdBQUcsZ0JBQUMsQ0FBQyxRQUFRLENBQUMsVUFBQSxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7Z0JBRWhCLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7O2dCQUNwQixHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDOztnQkFDakMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN2QyxJQUFJLEtBQUksQ0FBQyxLQUFL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QU8sRUFBRSxJQUFJLENBQUMsU0FBUztZQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQzFCLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsb0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLGlCQUFNLFdBQVcsWUFBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDOztnQkFwREYsZ0JBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsMmZBQXFDO29CQUVyQyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQWhCQyx3QkFBaUI7Z0JBQ04saUJBQVU7Ozt1QkFzQnBCLFlBQUs7dUJBQ0wsWUFBSzs4QkFDTCxZQUFLO3dCQUNMLFlBQUs7d0JBRUwsWUFBSzs7SUFnS1IscUJBQUM7Q0FBQSxBQWpMRCxDQU9vQyw2QkFBYSxHQTBLaEQ7QUExS1ksd0NBQWM7OztJQUt6Qiw4QkFBdUI7O0lBQ3ZCLDhCQUFtQjs7SUFDbkIscUNBQTBCOztJQUMxQiwrQkFBeUI7O0lBRXpCLCtCQUFvQjs7SUF1Q3BCLGlDQUVFOztJQUVGLGdDQUlFOztJQUVGLGtDQVlROztJQUlSLG9DQUVFOztJQUVGLG1DQU1FOztJQUVGLGlDQU1FOztJQUtGLHdDQXdCRTs7SUFHRixzQ0FJRTs7SUFJRix5Q0EyQkU7O0lBR0YsdUNBSUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCwgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCwgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBJb0Zvcm1GaWVsZFVJIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9Jb0Zvcm1GaWVsZFVJJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lvLWlucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogYC4vaW5wdXQuY29tcG9uZW50Lmh0bWxgLFxyXG4gIHN0eWxlVXJsczogWycuL2lucHV0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dENvbXBvbmVudCBleHRlbmRzIElvRm9ybUZpZWxkVUkgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuXHJcbiAgQElucHV0KCkgdHlwZSA9ICd0ZXh0JztcclxuICBASW5wdXQoKSBuYW1lID0gJyc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnJztcclxuICBASW5wdXQoKSB2YWx1ZTogYW55ID0gJyc7XHJcblxyXG4gIEBJbnB1dCgpIHJhbmdlID0gW107XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIF9lbFJlZjogRWxlbWVudFJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIoY2QsIF9lbFJlZik7XHJcbiAgfVxyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG5cclxuICAgIHRoaXMuc2V0Q29udGV4dChcclxuICAgICAge1xyXG4gICAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlucHV0OiB0aGlzLm9uQ2hhbmdlLFxyXG4gICAgICAgIGJsdXI6IHRoaXMub25CbHVyLFxyXG4gICAgICAgIGZvY3VzOiB0aGlzLm9uRm9jdXMsXHJcbiAgICAgICAga2V5ZG93bjogdGhpcy5vbktleURvd24sXHJcbiAgICAgICAgcGFzdGU6IHRoaXMub25QYXN0ZSxcclxuICAgICAgICBrZXlwcmVzczogdGhpcy5vbktleVByZXNzXHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcclxuICB9XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIG9uRm9jdXMgPSAoKSA9PiB7XHJcbiAgICAvLyB0aGlzLmZvY3VzZWQgPSB0cnVlO1xyXG4gIH07XHJcblxyXG4gIG9uQmx1ciA9ICgpID0+IHtcclxuICAgIHRoaXMuYmx1ci5lbWl0KCk7XHJcbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfTtcclxuXHJcbiAgb25DaGFuZ2UgPSBfLmRlYm91bmNlKGUgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGNvbnN0IG1pbiA9IHBhcnNlSW50KHRoaXMucmFuZ2VbMF0sIDEwKTtcclxuICAgIGNvbnN0IG1heCA9IHBhcnNlSW50KHRoaXMucmFuZ2VbMV0sIDEwKTtcclxuICAgIGlmICh0aGlzLnJhbmdlICYmIHRoaXMudHlwZSA9PT0gJ251bWJlcicgJiYgIShtaW4gPD0gdmFsdWUgJiYgdmFsdWUgPD0gbWF4KSkge1xyXG4gICAgICB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlID0gdGhpcy5yYW5nZVsxXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHZhbHVlKTtcclxuXHJcbiAgfSwgNTAwKTtcclxuXHJcbiAgLy8gIEtleWJvYXJkICYgQ2xpcGJvYXJkIEV2ZW50ICAvL1xyXG5cclxuICBvbktleVByZXNzID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB0aGlzLmVudGVyLmVtaXQoKTtcclxuICB9O1xyXG5cclxuICBvbktleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgcmV0dXJuICh0aGlzLnR5cGUgPT09ICdudW1iZXInKVxyXG4gICAgICA/IHRoaXMub25OdW1iZXJLZXlEb3duKGUpXHJcbiAgICAgIDogKHRoaXMudHlwZSA9PT0gJ3Bob25lJylcclxuICAgICAgICA/IHRoaXMub25QaG9uZUtleURvd24oZSlcclxuICAgICAgICA6IG51bGw7XHJcbiAgfTtcclxuXHJcbiAgb25QYXN0ZSA9IChlOiBDbGlwYm9hcmRFdmVudCkgPT4ge1xyXG4gICAgcmV0dXJuICh0aGlzLnR5cGUgPT09ICdudW1iZXInKVxyXG4gICAgICA/IHRoaXMub25OdW1iZXJQYXN0ZShlKVxyXG4gICAgICA6ICh0aGlzLnR5cGUgPT09ICdwaG9uZScpXHJcbiAgICAgICAgPyB0aGlzLm9uUGhvbmVQYXN0ZShlKVxyXG4gICAgICAgIDogbnVsbDtcclxuICB9O1xyXG5cclxuXHJcbiAgLy8gRW5zdXJlIHRoYXQgaXQgaXMgYSBudW1iZXIgZnJvbSBbMC05XSBubyBkZWNpbWFsX3BvaW50XHJcblxyXG4gIG9uUGhvbmVLZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgIC8vIEFsbG93XHJcbiAgICBpZiAoXHJcbiAgICAgIGUua2V5Q29kZSA9PT0gOCB8fCAgICAgIC8vIGJhY2tzcGFjZVxyXG4gICAgICBlLmtleUNvZGUgPT09IDkgfHwgICAgICAgICAgLy8gVGFiXHJcbiAgICAgIGUua2V5Q29kZSA9PT0gMTMgfHwgICAgICAgLy8gZW50ZXJcclxuICAgICAgKGUua2V5Q29kZSA9PT0gNjUgJiYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpKSB8fCAgICAgIC8vICBDdHJsICsgQVxyXG4gICAgICAoZS5rZXlDb2RlID09PSA2NyAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8ICAgICAgIC8vICBDdHJsICsgQ1xyXG4gICAgICAoZS5rZXlDb2RlID09PSA4OCAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8ICAgICAgICAvLyAgQ3RybCArIFhcclxuICAgICAgKGUua2V5Q29kZSA9PT0gODYgJiYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpKSB8fCAgICAgICAgLy8gIEN0cmwgKyBWXHJcbiAgICAgIChlLmtleUNvZGUgPj0gMzUgJiYgZS5rZXlDb2RlIDw9IDM5KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaG9tZSwgZW5kLCBsZWZ0LCByaWdodFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gUmVqZWN0IGlmIG5vdCBhIG51bWJlciBvciBudW1wYWRcclxuICAgIGlmIChcclxuICAgICAgKGUuc2hpZnRLZXkgfHwgKGUua2V5Q29kZSA8IDQ4IHx8IGUua2V5Q29kZSA+IDU3KSkgJiYgICAgICAgLy8gbm90IG51bWJlclxyXG4gICAgICAoZS5rZXlDb2RlIDwgOTYgfHwgZS5rZXlDb2RlID4gMTA1KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub3QgbnVtcGFkXHJcbiAgICApIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICB9O1xyXG5cclxuICAvLyBFbnN1cmUgdGhhdCBwYXN0ZWQgdmFsdWUgaXMgYSBudW1iZXIgb3Igc3RyaW5nIG9mIG51bWJlclxyXG4gIG9uUGhvbmVQYXN0ZSA9IChlOiBDbGlwYm9hcmRFdmVudCkgPT4ge1xyXG4gICAgaWYgKCEvXlxcZCskLy50ZXN0KGUuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCdUZXh0JykpKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgLy8gRW5zdXJlIHRoYXQgaXQgaXMgYSAgbnVtYmVyOiBpbnRlZ2VyIHx8IGRlY2ltYWxcclxuICBvbk51bWJlcktleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgLy8gQWxsb3dcclxuICAgIGlmIChcclxuICAgICAgZS5rZXlDb2RlID09PSA4IHx8ICAgICAgLy8gYmFja3NwYWNlXHJcbiAgICAgIGUua2V5Q29kZSA9PT0gOSB8fCAgICAgICAgICAvLyBUYWJcclxuICAgICAgZS5rZXlDb2RlID09PSAxMyB8fCAgICAgICAvLyBlbnRlclxyXG4gICAgICBlLmtleUNvZGUgPT09IDE4OCB8fCAgICAvLyBjb21tYShcIixcIilcclxuICAgICAgZS5rZXlDb2RlID09PSAxMTAgfHwgICAgICAgIC8vICAgbnVtcGFkIGRlY2ltYWwgcG9pbnRcclxuICAgICAgZS5rZXlDb2RlID09PSAxOTAgfHwgICAgICAgIC8vIHBlcmlvZChcIi5cIilcclxuICAgICAgKGUua2V5Q29kZSA9PT0gNjUgJiYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpKSB8fCAgICAgIC8vICBDdHJsICsgQVxyXG4gICAgICAoZS5rZXlDb2RlID09PSA2NyAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8ICAgICAgIC8vICBDdHJsICsgQ1xyXG4gICAgICAoZS5rZXlDb2RlID09PSA4OCAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8ICAgICAgICAvLyAgQ3RybCArIFhcclxuICAgICAgKGUua2V5Q29kZSA9PT0gODYgJiYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpKSB8fCAgICAgICAgLy8gIEN0cmwgKyBWXHJcbiAgICAgIChlLmtleUNvZGUgPj0gMzUgJiYgZS5rZXlDb2RlIDw9IDM5KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaG9tZSwgZW5kLCBsZWZ0LCByaWdodFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gUmVqZWN0IGlmIG5vdCBhIG51bWJlciBvciBudW1wYWRcclxuICAgIGlmIChcclxuICAgICAgKGUuc2hpZnRLZXkgfHwgKGUua2V5Q29kZSA8IDQ4IHx8IGUua2V5Q29kZSA+IDU3KSkgJiYgICAgICAgLy8gbm90IG51bWJlclxyXG4gICAgICAoZS5rZXlDb2RlIDwgOTYgfHwgZS5rZXlDb2RlID4gMTA1KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub3QgbnVtcGFkXHJcbiAgICApIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICB9O1xyXG5cclxuICAvLyBFbnN1cmUgdGhhdCBwYXN0ZWQgdmFsdWUgaXMgYSBzdHJpbmcgb2YgbnVtYmVyOiBpbnRlZ2VyIHx8IGRlY2ltYWxcclxuICBvbk51bWJlclBhc3RlID0gKGU6IENsaXBib2FyZEV2ZW50KSA9PiB7XHJcbiAgICBpZiAoIS9eXFxkLiskLy50ZXN0KGUuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCdUZXh0JykpKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbn1cclxuIl19