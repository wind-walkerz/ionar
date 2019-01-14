/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input } from '@angular/core';
import _ from 'lodash';
import { IoFormFieldUI } from '../../interfaces/IoFormFieldUI';
var InputComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InputComponent, _super);
    function InputComponent(cd, _elRef) {
        var _this = _super.call(this, cd, _elRef) || this;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        _this.type = '';
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
        _this.onChange = _.debounce(function (e) {
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
    InputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'io-input',
                    template: "<ng-container [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"context\"></ng-container>\r\n\r\n<ng-template #default_template let-context>\r\n    <input\r\n            [spread]=\"context\"\r\n            *ngIf=\"!(context?.readonly || context?.disabled)\"\r\n    >\r\n\r\n    <span *ngIf=\"context?.readonly || context?.disabled\">\r\n          {{value}}\r\n      </span>\r\n</ng-template>\r\n\r\n<ng-template #content_template>\r\n    <ng-content></ng-content>\r\n</ng-template>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{background-color:transparent;border:1px solid #d9d9d9;border-radius:.4rem;color:#363636;display:flex;align-items:center;justify-content:flex-start;font-size:1.5rem;outline:0;overflow:hidden;padding:0 1rem;position:relative;transition:.3s cubic-bezier(.645,.045,.355,1);width:100%;height:auto;min-height:2.25em;max-height:5rem;max-width:100%}:host.focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff}:host.invalid{border-color:#f5222d}:host.invalid.focus{border-color:#ff4d4f;outline:0;box-shadow:0 0 0 2px rgba(245,34,45,.2)}:host ::ng-deep input{border:none;color:inherit;display:flex;flex:1px;font-size:inherit;font-weight:inherit;text-transform:inherit;text-decoration:inherit;outline:0;height:100%;max-width:100%;z-index:1}:host .loading_icon{width:10%}:host-context(.readonly){border:0}:host-context(.disabled){border:0}"]
                }] }
    ];
    /** @nocollapse */
    InputComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    InputComponent.propDecorators = {
        type: [{ type: Input }],
        name: [{ type: Input }],
        placeholder: [{ type: Input }],
        value: [{ type: Input }],
        range: [{ type: Input }]
    };
    return InputComponent;
}(IoFormFieldUI));
export { InputComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJ1aS9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFBRSxVQUFVLEVBQ3JCLEtBQUssRUFJTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRy9EO0lBT29DLDBDQUFhO0lBYS9DLHdCQUNFLEVBQXFCLEVBQ3JCLE1BQWtCO1FBRnBCLFlBSUUsa0JBQU0sRUFBRSxFQUFFLE1BQU0sQ0FBQyxTQUNsQjs7UUFiUSxVQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsVUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLGlCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2pCLFdBQUssR0FBUSxFQUFFLENBQUM7UUFFaEIsV0FBSyxHQUFHLEVBQUUsQ0FBQzs7UUFtQ3BCLGFBQU8sR0FBRztZQUNSLHVCQUF1QjtRQUN6QixDQUFDLENBQUM7UUFFRixZQUFNLEdBQUc7WUFDUCxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDO1FBRUYsY0FBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBQSxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQzs7Z0JBRWhCLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUs7O2dCQUNwQixHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsQ0FB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QUFDLFdBQVc7U0FDOUIsRUFDRDtZQUNFLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUTtZQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUztZQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQzFCLENBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQWhERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLDJmQUFxQztvQkFFckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFoQkMsaUJBQWlCO2dCQUNOLFVBQVU7Ozt1QkFzQnBCLEtBQUs7dUJBQ0wsS0FBSzs4QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBRUwsS0FBSzs7SUE0SlIscUJBQUM7Q0FBQSxBQTdLRCxDQU9vQyxhQUFhLEdBc0toRDtTQXRLWSxjQUFjOzs7SUFLekIsOEJBQW1COztJQUNuQiw4QkFBbUI7O0lBQ25CLHFDQUEwQjs7SUFDMUIsK0JBQXlCOztJQUV6QiwrQkFBb0I7O0lBbUNwQixpQ0FFRTs7SUFFRixnQ0FJRTs7SUFFRixrQ0FZUTs7SUFJUixvQ0FFRTs7SUFFRixtQ0FNRTs7SUFFRixpQ0FNRTs7SUFLRix3Q0F3QkU7O0lBR0Ysc0NBSUU7O0lBSUYseUNBMkJFOztJQUdGLHVDQUlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgSW9Gb3JtRmllbGRVSSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvSW9Gb3JtRmllbGRVSSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpby1pbnB1dCcsXHJcbiAgdGVtcGxhdGVVcmw6IGAuL2lucHV0LmNvbXBvbmVudC5odG1sYCxcclxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBJb0Zvcm1GaWVsZFVJIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG5cclxuICBASW5wdXQoKSB0eXBlID0gJyc7XHJcbiAgQElucHV0KCkgbmFtZSA9ICcnO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJyc7XHJcbiAgQElucHV0KCkgdmFsdWU6IGFueSA9ICcnO1xyXG5cclxuICBASW5wdXQoKSByYW5nZSA9IFtdO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBfZWxSZWY6IEVsZW1lbnRSZWZcclxuICApIHtcclxuICAgIHN1cGVyKGNkLCBfZWxSZWYpO1xyXG4gIH1cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkluaXQoKTtcclxuXHJcbiAgICB0aGlzLnNldENvbnRleHQoXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXHJcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbnB1dDogdGhpcy5vbkNoYW5nZSxcclxuICAgICAgICBibHVyOiB0aGlzLm9uQmx1cixcclxuICAgICAgICBmb2N1czogdGhpcy5vbkZvY3VzLFxyXG4gICAgICAgIGtleWRvd246IHRoaXMub25LZXlEb3duLFxyXG4gICAgICAgIHBhc3RlOiB0aGlzLm9uUGFzdGUsXHJcbiAgICAgICAga2V5cHJlc3M6IHRoaXMub25LZXlQcmVzc1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1haW4gRnVuY3Rpb25zICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgb25Gb2N1cyA9ICgpID0+IHtcclxuICAgIC8vIHRoaXMuZm9jdXNlZCA9IHRydWU7XHJcbiAgfTtcclxuXHJcbiAgb25CbHVyID0gKCkgPT4ge1xyXG4gICAgdGhpcy5ibHVyLmVtaXQoKTtcclxuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICB9O1xyXG5cclxuICBvbkNoYW5nZSA9IF8uZGVib3VuY2UoZSA9PiB7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgY29uc3QgbWluID0gcGFyc2VJbnQodGhpcy5yYW5nZVswXSwgMTApO1xyXG4gICAgY29uc3QgbWF4ID0gcGFyc2VJbnQodGhpcy5yYW5nZVsxXSwgMTApO1xyXG4gICAgaWYgKHRoaXMucmFuZ2UgJiYgdGhpcy50eXBlID09PSAnbnVtYmVyJyAmJiAhKG1pbiA8PSB2YWx1ZSAmJiB2YWx1ZSA8PSBtYXgpKSB7XHJcbiAgICAgIHZhbHVlID0gZS50YXJnZXQudmFsdWUgPSB0aGlzLnJhbmdlWzFdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hhbmdlLmVtaXQodmFsdWUpO1xyXG5cclxuICB9LCA1MDApO1xyXG5cclxuICAvLyAgS2V5Ym9hcmQgJiBDbGlwYm9hcmQgRXZlbnQgIC8vXHJcblxyXG4gIG9uS2V5UHJlc3MgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHRoaXMuZW50ZXIuZW1pdCgpO1xyXG4gIH07XHJcblxyXG4gIG9uS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICByZXR1cm4gKHRoaXMudHlwZSA9PT0gJ251bWJlcicpXHJcbiAgICAgID8gdGhpcy5vbk51bWJlcktleURvd24oZSlcclxuICAgICAgOiAodGhpcy50eXBlID09PSAncGhvbmUnKVxyXG4gICAgICAgID8gdGhpcy5vblBob25lS2V5RG93bihlKVxyXG4gICAgICAgIDogbnVsbDtcclxuICB9O1xyXG5cclxuICBvblBhc3RlID0gKGU6IENsaXBib2FyZEV2ZW50KSA9PiB7XHJcbiAgICByZXR1cm4gKHRoaXMudHlwZSA9PT0gJ251bWJlcicpXHJcbiAgICAgID8gdGhpcy5vbk51bWJlclBhc3RlKGUpXHJcbiAgICAgIDogKHRoaXMudHlwZSA9PT0gJ3Bob25lJylcclxuICAgICAgICA/IHRoaXMub25QaG9uZVBhc3RlKGUpXHJcbiAgICAgICAgOiBudWxsO1xyXG4gIH07XHJcblxyXG5cclxuICAvLyBFbnN1cmUgdGhhdCBpdCBpcyBhIG51bWJlciBmcm9tIFswLTldIG5vIGRlY2ltYWxfcG9pbnRcclxuXHJcbiAgb25QaG9uZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgLy8gQWxsb3dcclxuICAgIGlmIChcclxuICAgICAgZS5rZXlDb2RlID09PSA4IHx8ICAgICAgLy8gYmFja3NwYWNlXHJcbiAgICAgIGUua2V5Q29kZSA9PT0gOSB8fCAgICAgICAgICAvLyBUYWJcclxuICAgICAgZS5rZXlDb2RlID09PSAxMyB8fCAgICAgICAvLyBlbnRlclxyXG4gICAgICAoZS5rZXlDb2RlID09PSA2NSAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8ICAgICAgLy8gIEN0cmwgKyBBXHJcbiAgICAgIChlLmtleUNvZGUgPT09IDY3ICYmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSkgfHwgICAgICAgLy8gIEN0cmwgKyBDXHJcbiAgICAgIChlLmtleUNvZGUgPT09IDg4ICYmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSkgfHwgICAgICAgIC8vICBDdHJsICsgWFxyXG4gICAgICAoZS5rZXlDb2RlID09PSA4NiAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8ICAgICAgICAvLyAgQ3RybCArIFZcclxuICAgICAgKGUua2V5Q29kZSA+PSAzNSAmJiBlLmtleUNvZGUgPD0gMzkpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBob21lLCBlbmQsIGxlZnQsIHJpZ2h0XHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBSZWplY3QgaWYgbm90IGEgbnVtYmVyIG9yIG51bXBhZFxyXG4gICAgaWYgKFxyXG4gICAgICAoZS5zaGlmdEtleSB8fCAoZS5rZXlDb2RlIDwgNDggfHwgZS5rZXlDb2RlID4gNTcpKSAmJiAgICAgICAvLyBub3QgbnVtYmVyXHJcbiAgICAgIChlLmtleUNvZGUgPCA5NiB8fCBlLmtleUNvZGUgPiAxMDUpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vdCBudW1wYWRcclxuICAgICkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gIH07XHJcblxyXG4gIC8vIEVuc3VyZSB0aGF0IHBhc3RlZCB2YWx1ZSBpcyBhIG51bWJlciBvciBzdHJpbmcgb2YgbnVtYmVyXHJcbiAgb25QaG9uZVBhc3RlID0gKGU6IENsaXBib2FyZEV2ZW50KSA9PiB7XHJcbiAgICBpZiAoIS9eXFxkKyQvLnRlc3QoZS5jbGlwYm9hcmREYXRhLmdldERhdGEoJ1RleHQnKSkpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICAvLyBFbnN1cmUgdGhhdCBpdCBpcyBhICBudW1iZXI6IGludGVnZXIgfHwgZGVjaW1hbFxyXG4gIG9uTnVtYmVyS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAvLyBBbGxvd1xyXG4gICAgaWYgKFxyXG4gICAgICBlLmtleUNvZGUgPT09IDggfHwgICAgICAvLyBiYWNrc3BhY2VcclxuICAgICAgZS5rZXlDb2RlID09PSA5IHx8ICAgICAgICAgIC8vIFRhYlxyXG4gICAgICBlLmtleUNvZGUgPT09IDEzIHx8ICAgICAgIC8vIGVudGVyXHJcbiAgICAgIGUua2V5Q29kZSA9PT0gMTg4IHx8ICAgIC8vIGNvbW1hKFwiLFwiKVxyXG4gICAgICBlLmtleUNvZGUgPT09IDExMCB8fCAgICAgICAgLy8gICBudW1wYWQgZGVjaW1hbCBwb2ludFxyXG4gICAgICBlLmtleUNvZGUgPT09IDE5MCB8fCAgICAgICAgLy8gcGVyaW9kKFwiLlwiKVxyXG4gICAgICAoZS5rZXlDb2RlID09PSA2NSAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8ICAgICAgLy8gIEN0cmwgKyBBXHJcbiAgICAgIChlLmtleUNvZGUgPT09IDY3ICYmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSkgfHwgICAgICAgLy8gIEN0cmwgKyBDXHJcbiAgICAgIChlLmtleUNvZGUgPT09IDg4ICYmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSkgfHwgICAgICAgIC8vICBDdHJsICsgWFxyXG4gICAgICAoZS5rZXlDb2RlID09PSA4NiAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8ICAgICAgICAvLyAgQ3RybCArIFZcclxuICAgICAgKGUua2V5Q29kZSA+PSAzNSAmJiBlLmtleUNvZGUgPD0gMzkpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBob21lLCBlbmQsIGxlZnQsIHJpZ2h0XHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBSZWplY3QgaWYgbm90IGEgbnVtYmVyIG9yIG51bXBhZFxyXG4gICAgaWYgKFxyXG4gICAgICAoZS5zaGlmdEtleSB8fCAoZS5rZXlDb2RlIDwgNDggfHwgZS5rZXlDb2RlID4gNTcpKSAmJiAgICAgICAvLyBub3QgbnVtYmVyXHJcbiAgICAgIChlLmtleUNvZGUgPCA5NiB8fCBlLmtleUNvZGUgPiAxMDUpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vdCBudW1wYWRcclxuICAgICkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gIH07XHJcblxyXG4gIC8vIEVuc3VyZSB0aGF0IHBhc3RlZCB2YWx1ZSBpcyBhIHN0cmluZyBvZiBudW1iZXI6IGludGVnZXIgfHwgZGVjaW1hbFxyXG4gIG9uTnVtYmVyUGFzdGUgPSAoZTogQ2xpcGJvYXJkRXZlbnQpID0+IHtcclxuICAgIGlmICghL15cXGQuKyQvLnRlc3QoZS5jbGlwYm9hcmREYXRhLmdldERhdGEoJ1RleHQnKSkpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxufVxyXG4iXX0=