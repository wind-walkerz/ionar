/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, Output, TemplateRef } from '@angular/core';
import _ from 'lodash';
var InputComponent = /** @class */ (function () {
    function InputComponent(cd) {
        var _this = this;
        this.cd = cd;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.type = '';
        this.name = '';
        this.placeholder = '';
        this.value = null;
        this.invalid = false;
        this.disabled = false;
        this.range = [];
        this.readonly = false;
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
        this.enter = new EventEmitter();
        this.host_focus = false;
        this.host_invalid = false;
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.onFocus = function () {
            _this.host_focus = true;
        };
        this.onBlur = function () {
            _this.blur.emit();
            _this.host_focus = false;
            _this.cd.markForCheck();
        };
        this.onChange = _.debounce(function (e) {
            e.stopPropagation();
            console.log(e.target.value);
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
        this.onKeyPress = function (e) {
            if (e.keyCode === 13)
                _this.enter.emit();
        };
        this.onKeyDown = function (e) {
            return (_this.type === 'number')
                ? _this.onNumberKeyDown(e)
                : (_this.type === 'phone')
                    ? _this.onPhoneKeyDown(e)
                    : null;
        };
        this.onPaste = function (e) {
            return (_this.type === 'number')
                ? _this.onNumberPaste(e)
                : (_this.type === 'phone')
                    ? _this.onPhonePaste(e)
                    : null;
        };
        // Ensure that it is a number from [0-9] no decimal_point
        this.onPhoneKeyDown = function (e) {
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
        this.onPhonePaste = function (e) {
            if (!/^\d+$/.test(e.clipboardData.getData('Text'))) {
                e.preventDefault();
            }
        };
        // Ensure that it is a  number: integer || decimal
        this.onNumberKeyDown = function (e) {
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
        this.onNumberPaste = function (e) {
            if (!/^\d.+$/.test(e.clipboardData.getData('Text'))) {
                e.preventDefault();
            }
        };
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
        this.templateContext = {
            props: {
                value: this.value,
                type: this.type,
                name: this.name,
                placeholder: this.placeholder,
                invalid: this.invalid,
                disabled: this.disabled,
                range: this.range,
                readonly: this.readonly
            },
            events: {
                change: this.change,
                blur: this.blur,
                enter: this.enter,
                keydown: this.onKeyDown,
                keypress: this.onKeyPress,
                paste: this.onPaste
            }
        };
        this.host_invalid = this.invalid;
        this.cd.markForCheck();
    };
    /**
     * @return {?}
     */
    InputComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.host_invalid = this.invalid;
        this.cd.markForCheck();
    };
    /**
     * @return {?}
     */
    InputComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    InputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'io-input',
                    template: "<ng-container *ngIf=\"!template\">\r\n    <input\r\n            [type]=\"type\"\r\n            [name]=\"name\"\r\n            [placeholder]=\"placeholder\"\r\n            [value]=\"value\"\r\n            (input)=\"onChange($event)\"\r\n            (blur)=\"onBlur()\"\r\n            (focus)=\"onFocus()\"\r\n            (keydown)=\"onKeyDown($event)\"\r\n            (paste)=\"onPaste($event)\"\r\n            (keypress)=\"onKeyPress($event)\"\r\n\r\n            *ngIf=\"!(readonly || disabled)\"\r\n    >\r\n\r\n</ng-container>\r\n\r\n\r\n<ng-container *ngIf=\"template\">\r\n    <ng-container *ngTemplateOutlet=\"template; context:templateContext\"></ng-container>\r\n</ng-container>\r\n\r\n<span *ngIf=\"readonly || disabled\">\r\n          {{value}}\r\n      </span>\r\n<!--<ng-container-->\r\n<!--*ngIf=\"properties?.loading\"-->\r\n<!--&gt;-->\r\n<!--<svg version=\"1.1\"-->\r\n\r\n<!--class=\"loading_icon\"-->\r\n<!--xmlns=\"http://www.w3.org/2000/svg\"-->\r\n<!--x=\"0px\"-->\r\n<!--y=\"0px\"-->\r\n<!--viewBox=\"0 0 80 80\"-->\r\n<!--xml:space=\"preserve\"-->\r\n<!--&gt;-->\r\n<!--<path-->\r\n<!--fill=\"#D43B11\"-->\r\n<!--d=\"M10,40c0,0,0-0.4,0-1.1c0-0.3,0-0.8,0-1.3c0-0.3,0-0.5,0-0.8c0-0.3,0.1-0.6,0.1-0.9c0.1-0.6,0.1-1.4,0.2-2.1-->\r\n<!--c0.2-0.8,0.3-1.6,0.5-2.5c0.2-0.9,0.6-1.8,0.8-2.8c0.3-1,0.8-1.9,1.2-3c0.5-1,1.1-2,1.7-3.1c0.7-1,1.4-2.1,2.2-3.1-->\r\n<!--c1.6-2.1,3.7-3.9,6-5.6c2.3-1.7,5-3,7.9-4.1c0.7-0.2,1.5-0.4,2.2-0.7c0.7-0.3,1.5-0.3,2.3-0.5c0.8-0.2,1.5-0.3,2.3-0.4l1.2-0.1-->\r\n<!--l0.6-0.1l0.3,0l0.1,0l0.1,0l0,0c0.1,0-0.1,0,0.1,0c1.5,0,2.9-0.1,4.5,0.2c0.8,0.1,1.6,0.1,2.4,0.3c0.8,0.2,1.5,0.3,2.3,0.5-->\r\n<!--c3,0.8,5.9,2,8.5,3.6c2.6,1.6,4.9,3.4,6.8,5.4c1,1,1.8,2.1,2.7,3.1c0.8,1.1,1.5,2.1,2.1,3.2c0.6,1.1,1.2,2.1,1.6,3.1-->\r\n<!--c0.4,1,0.9,2,1.2,3c0.3,1,0.6,1.9,0.8,2.7c0.2,0.9,0.3,1.6,0.5,2.4c0.1,0.4,0.1,0.7,0.2,1c0,0.3,0.1,0.6,0.1,0.9-->\r\n<!--c0.1,0.6,0.1,1,0.1,1.4C74,39.6,74,40,74,40c0.2,2.2-1.5,4.1-3.7,4.3s-4.1-1.5-4.3-3.7c0-0.1,0-0.2,0-0.3l0-0.4c0,0,0-0.3,0-0.9-->\r\n<!--c0-0.3,0-0.7,0-1.1c0-0.2,0-0.5,0-0.7c0-0.2-0.1-0.5-0.1-0.8c-0.1-0.6-0.1-1.2-0.2-1.9c-0.1-0.7-0.3-1.4-0.4-2.2-->\r\n<!--c-0.2-0.8-0.5-1.6-0.7-2.4c-0.3-0.8-0.7-1.7-1.1-2.6c-0.5-0.9-0.9-1.8-1.5-2.7c-0.6-0.9-1.2-1.8-1.9-2.7c-1.4-1.8-3.2-3.4-5.2-4.9-->\r\n<!--c-2-1.5-4.4-2.7-6.9-3.6c-0.6-0.2-1.3-0.4-1.9-0.6c-0.7-0.2-1.3-0.3-1.9-0.4c-1.2-0.3-2.8-0.4-4.2-0.5l-2,0c-0.7,0-1.4,0.1-2.1,0.1-->\r\n<!--c-0.7,0.1-1.4,0.1-2,0.3c-0.7,0.1-1.3,0.3-2,0.4c-2.6,0.7-5.2,1.7-7.5,3.1c-2.2,1.4-4.3,2.9-6,4.7c-0.9,0.8-1.6,1.8-2.4,2.7-->\r\n<!--c-0.7,0.9-1.3,1.9-1.9,2.8c-0.5,1-1,1.9-1.4,2.8c-0.4,0.9-0.8,1.8-1,2.6c-0.3,0.9-0.5,1.6-0.7,2.4c-0.2,0.7-0.3,1.4-0.4,2.1-->\r\n<!--c-0.1,0.3-0.1,0.6-0.2,0.9c0,0.3-0.1,0.6-0.1,0.8c0,0.5-0.1,0.9-0.1,1.3C10,39.6,10,40,10,40z\"-->\r\n<!--&gt;-->\r\n<!--<animateTransform-->\r\n<!--attributeType=\"xml\"-->\r\n<!--attributeName=\"transform\"-->\r\n<!--type=\"rotate\"-->\r\n<!--from=\"0 40 40\"-->\r\n<!--to=\"360 40 40\"-->\r\n<!--dur=\"0.8s\"-->\r\n<!--repeatCount=\"indefinite\"-->\r\n<!--/>-->\r\n<!--</path>-->\r\n<!--<path-->\r\n<!--fill=\"#D43B11\"-->\r\n<!--d=\"M62,40.1c0,0,0,0.2-0.1,0.7c0,0.2,0,0.5-0.1,0.8c0,0.2,0,0.3,0,0.5c0,0.2-0.1,0.4-0.1,0.7-->\r\n<!--c-0.1,0.5-0.2,1-0.3,1.6c-0.2,0.5-0.3,1.1-0.5,1.8c-0.2,0.6-0.5,1.3-0.7,1.9c-0.3,0.7-0.7,1.3-1,2.1c-0.4,0.7-0.9,1.4-1.4,2.1-->\r\n<!--c-0.5,0.7-1.1,1.4-1.7,2c-1.2,1.3-2.7,2.5-4.4,3.6c-1.7,1-3.6,1.8-5.5,2.4c-2,0.5-4,0.7-6.2,0.7c-1.9-0.1-4.1-0.4-6-1.1-->\r\n<!--c-1.9-0.7-3.7-1.5-5.2-2.6c-1.5-1.1-2.9-2.3-4-3.7c-0.6-0.6-1-1.4-1.5-2c-0.4-0.7-0.8-1.4-1.2-2c-0.3-0.7-0.6-1.3-0.8-2-->\r\n<!--c-0.2-0.6-0.4-1.2-0.6-1.8c-0.1-0.6-0.3-1.1-0.4-1.6c-0.1-0.5-0.1-1-0.2-1.4c-0.1-0.9-0.1-1.5-0.1-2c0-0.5,0-0.7,0-0.7-->\r\n<!--s0,0.2,0.1,0.7c0.1,0.5,0,1.1,0.2,2c0.1,0.4,0.2,0.9,0.3,1.4c0.1,0.5,0.3,1,0.5,1.6c0.2,0.6,0.4,1.1,0.7,1.8-->\r\n<!--c0.3,0.6,0.6,1.2,0.9,1.9c0.4,0.6,0.8,1.3,1.2,1.9c0.5,0.6,1,1.3,1.6,1.8c1.1,1.2,2.5,2.3,4,3.2c1.5,0.9,3.2,1.6,5,2.1-->\r\n<!--c1.8,0.5,3.6,0.6,5.6,0.6c1.8-0.1,3.7-0.4,5.4-1c1.7-0.6,3.3-1.4,4.7-2.4c1.4-1,2.6-2.1,3.6-3.3c0.5-0.6,0.9-1.2,1.3-1.8-->\r\n<!--c0.4-0.6,0.7-1.2,1-1.8c0.3-0.6,0.6-1.2,0.8-1.8c0.2-0.6,0.4-1.1,0.5-1.7c0.1-0.5,0.2-1,0.3-1.5c0.1-0.4,0.1-0.8,0.1-1.2-->\r\n<!--c0-0.2,0-0.4,0.1-0.5c0-0.2,0-0.4,0-0.5c0-0.3,0-0.6,0-0.8c0-0.5,0-0.7,0-0.7c0-1.1,0.9-2,2-2s2,0.9,2,2C62,40,62,40.1,62,40.1z\"-->\r\n<!--&gt;-->\r\n<!--<animateTransform-->\r\n<!--attributeType=\"xml\"-->\r\n<!--attributeName=\"transform\"-->\r\n<!--type=\"rotate\"-->\r\n<!--from=\"0 40 40\"-->\r\n<!--to=\"-360 40 40\"-->\r\n<!--dur=\"0.6s\"-->\r\n<!--repeatCount=\"indefinite\"-->\r\n<!--/>-->\r\n<!--</path>-->\r\n<!--</svg>-->\r\n<!--</ng-container>-->",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.disabled]': 'disabled',
                        '[class.readonly]': 'readonly'
                    },
                    styles: [":host{background-color:transparent;border:1px solid #d9d9d9;border-radius:.4rem;color:#363636;display:flex;align-items:center;justify-content:flex-start;font-size:1.5rem;outline:0;overflow:hidden;padding:0 1rem;position:relative;transition:.3s cubic-bezier(.645,.045,.355,1);width:100%;height:auto;min-height:2.25em;max-height:5rem;max-width:100%}:host.focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff}:host.invalid{border-color:#f5222d}:host.invalid.focus{border-color:#ff4d4f;outline:0;box-shadow:0 0 0 2px rgba(245,34,45,.2)}:host input{border:none;color:inherit;display:flex;flex:1px;font-size:inherit;font-weight:inherit;text-transform:inherit;text-decoration:inherit;outline:0;height:100%;max-width:100%;z-index:1}:host .loading_icon{width:10%}:host-context(.readonly){border:0}:host-context(.disabled){border:0}"]
                }] }
    ];
    /** @nocollapse */
    InputComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    InputComponent.propDecorators = {
        type: [{ type: Input }],
        name: [{ type: Input }],
        placeholder: [{ type: Input }],
        value: [{ type: Input }],
        invalid: [{ type: Input }],
        disabled: [{ type: Input }],
        range: [{ type: Input }],
        readonly: [{ type: Input }],
        change: [{ type: Output }],
        blur: [{ type: Output }],
        enter: [{ type: Output }],
        template: [{ type: Input }],
        host_focus: [{ type: HostBinding, args: ['class.focus',] }],
        host_invalid: [{ type: HostBinding, args: ['class.invalid',] }]
    };
    return InputComponent;
}());
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
    InputComponent.prototype.invalid;
    /** @type {?} */
    InputComponent.prototype.disabled;
    /** @type {?} */
    InputComponent.prototype.range;
    /** @type {?} */
    InputComponent.prototype.readonly;
    /** @type {?} */
    InputComponent.prototype.change;
    /** @type {?} */
    InputComponent.prototype.blur;
    /** @type {?} */
    InputComponent.prototype.enter;
    /** @type {?} */
    InputComponent.prototype.template;
    /** @type {?} */
    InputComponent.prototype.host_focus;
    /** @type {?} */
    InputComponent.prototype.host_invalid;
    /** @type {?} */
    InputComponent.prototype.templateContext;
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
    /**
     * @type {?}
     * @private
     */
    InputComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJ1aS9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUlMLE1BQU0sRUFDTixXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCO0lBdUNFLHdCQUFvQixFQUFxQjtRQUF6QyxpQkFDQztRQURtQixPQUFFLEdBQUYsRUFBRSxDQUFtQjs7UUF2QmhDLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsVUFBSyxHQUFRLElBQUksQ0FBQztRQUdsQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFekIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFJVCxlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzFCLGlCQUFZLEdBQVksS0FBSyxDQUFDOztRQWdENUQsWUFBTyxHQUFHO1lBQ1IsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDekIsQ0FBQyxDQUFDO1FBRUYsV0FBTSxHQUFHO1lBQ1AsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNqQixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztZQUN4QixL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b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLDJqSkFBcUM7b0JBRXJDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxJQUFJLEVBQUU7d0JBQ0osa0JBQWtCLEVBQUUsVUFBVTt3QkFDOUIsa0JBQWtCLEVBQUUsVUFBVTtxQkFDL0I7O2lCQUNGOzs7O2dCQXRCQyxpQkFBaUI7Ozt1QkE2QmhCLEtBQUs7dUJBQ0wsS0FBSzs4QkFDTCxLQUFLO3dCQUNMLEtBQUs7MEJBR0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFFTCxNQUFNO3VCQUNOLE1BQU07d0JBQ04sTUFBTTsyQkFFTixLQUFLOzZCQUVMLFdBQVcsU0FBQyxhQUFhOytCQUN6QixXQUFXLFNBQUMsZUFBZTs7SUF5SzlCLHFCQUFDO0NBQUEsQUEzTUQsSUEyTUM7U0FoTVksY0FBYzs7O0lBS3pCLDhCQUFtQjs7SUFDbkIsOEJBQW1COztJQUNuQixxQ0FBMEI7O0lBQzFCLCtCQUEyQjs7SUFHM0IsaUNBQWtDOztJQUNsQyxrQ0FBbUM7O0lBQ25DLCtCQUFvQjs7SUFDcEIsa0NBQW1DOztJQUVuQyxnQ0FBc0M7O0lBQ3RDLDhCQUFvQzs7SUFDcEMsK0JBQXFDOztJQUVyQyxrQ0FBb0M7O0lBRXBDLG9DQUF3RDs7SUFDeEQsc0NBQTREOztJQUc1RCx5Q0FBZ0I7O0lBNkNoQixpQ0FFRTs7SUFFRixnQ0FJRTs7SUFFRixrQ0FZUTs7SUFJUixvQ0FFRTs7SUFFRixtQ0FNRTs7SUFFRixpQ0FNRTs7SUFLRix3Q0F3QkU7O0lBR0Ysc0NBSUU7O0lBSUYseUNBMkJFOztJQUdGLHVDQUlFOzs7OztJQWpLVSw0QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFRlbXBsYXRlUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lvLWlucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogYC4vaW5wdXQuY29tcG9uZW50Lmh0bWxgLFxyXG4gIHN0eWxlVXJsczogWycuL2lucHV0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5yZWFkb25seV0nOiAncmVhZG9ubHknXHJcbiAgfVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuXHJcbiAgQElucHV0KCkgdHlwZSA9ICcnO1xyXG4gIEBJbnB1dCgpIG5hbWUgPSAnJztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBhbnkgPSBudWxsO1xyXG5cclxuXHJcbiAgQElucHV0KCkgaW52YWxpZDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBCb29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcmFuZ2UgPSBbXTtcclxuICBASW5wdXQoKSByZWFkb25seTogQm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBibHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBlbnRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZm9jdXMnKSBob3N0X2ZvY3VzOiBCb29sZWFuID0gZmFsc2U7XHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pbnZhbGlkJykgaG9zdF9pbnZhbGlkOiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICB0ZW1wbGF0ZUNvbnRleHQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgfVxyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgdGhpcy50ZW1wbGF0ZUNvbnRleHQgPSB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXHJcbiAgICAgICAgdHlwZTogdGhpcy50eXBlLFxyXG4gICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlcixcclxuICAgICAgICBpbnZhbGlkOiB0aGlzLmludmFsaWQsXHJcbiAgICAgICAgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsXHJcbiAgICAgICAgcmFuZ2U6IHRoaXMucmFuZ2UsXHJcbiAgICAgICAgcmVhZG9ubHk6IHRoaXMucmVhZG9ubHlcclxuICAgICAgfSxcclxuICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgY2hhbmdlOiB0aGlzLmNoYW5nZSxcclxuICAgICAgICBibHVyOiB0aGlzLmJsdXIsXHJcbiAgICAgICAgZW50ZXI6IHRoaXMuZW50ZXIsXHJcbiAgICAgICAga2V5ZG93bjogdGhpcy5vbktleURvd24sXHJcbiAgICAgICAga2V5cHJlc3M6IHRoaXMub25LZXlQcmVzcyxcclxuICAgICAgICBwYXN0ZTogdGhpcy5vblBhc3RlXHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5ob3N0X2ludmFsaWQgPSB0aGlzLmludmFsaWQ7XHJcblxyXG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5ob3N0X2ludmFsaWQgPSB0aGlzLmludmFsaWQ7XHJcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTWFpbiBGdW5jdGlvbnMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBvbkZvY3VzID0gKCkgPT4ge1xyXG4gICAgdGhpcy5ob3N0X2ZvY3VzID0gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBvbkJsdXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmJsdXIuZW1pdCgpO1xyXG4gICAgdGhpcy5ob3N0X2ZvY3VzID0gZmFsc2U7XHJcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gIH07XHJcblxyXG4gIG9uQ2hhbmdlID0gXy5kZWJvdW5jZShlID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGNvbnN0IG1pbiA9IHBhcnNlSW50KHRoaXMucmFuZ2VbMF0sIDEwKTtcclxuICAgIGNvbnN0IG1heCA9IHBhcnNlSW50KHRoaXMucmFuZ2VbMV0sIDEwKTtcclxuICAgIGlmICh0aGlzLnJhbmdlICYmIHRoaXMudHlwZSA9PT0gJ251bWJlcicgJiYgIShtaW4gPD0gdmFsdWUgJiYgdmFsdWUgPD0gbWF4KSkge1xyXG4gICAgICB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlID0gdGhpcy5yYW5nZVsxXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHZhbHVlKTtcclxuXHJcbiAgfSwgNTAwKTtcclxuXHJcbiAgLy8gIEtleWJvYXJkICYgQ2xpcGJvYXJkIEV2ZW50ICAvL1xyXG5cclxuICBvbktleVByZXNzID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB0aGlzLmVudGVyLmVtaXQoKTtcclxuICB9O1xyXG5cclxuICBvbktleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgcmV0dXJuICh0aGlzLnR5cGUgPT09ICdudW1iZXInKVxyXG4gICAgICA/IHRoaXMub25OdW1iZXJLZXlEb3duKGUpXHJcbiAgICAgIDogKHRoaXMudHlwZSA9PT0gJ3Bob25lJylcclxuICAgICAgICA/IHRoaXMub25QaG9uZUtleURvd24oZSlcclxuICAgICAgICA6IG51bGw7XHJcbiAgfTtcclxuXHJcbiAgb25QYXN0ZSA9IChlOiBDbGlwYm9hcmRFdmVudCkgPT4ge1xyXG4gICAgcmV0dXJuICh0aGlzLnR5cGUgPT09ICdudW1iZXInKVxyXG4gICAgICA/IHRoaXMub25OdW1iZXJQYXN0ZShlKVxyXG4gICAgICA6ICh0aGlzLnR5cGUgPT09ICdwaG9uZScpXHJcbiAgICAgICAgPyB0aGlzLm9uUGhvbmVQYXN0ZShlKVxyXG4gICAgICAgIDogbnVsbDtcclxuICB9O1xyXG5cclxuXHJcbiAgLy8gRW5zdXJlIHRoYXQgaXQgaXMgYSBudW1iZXIgZnJvbSBbMC05XSBubyBkZWNpbWFsX3BvaW50XHJcblxyXG4gIG9uUGhvbmVLZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgIC8vIEFsbG93XHJcbiAgICBpZiAoXHJcbiAgICAgIGUua2V5Q29kZSA9PT0gOCB8fCAgICAgIC8vIGJhY2tzcGFjZVxyXG4gICAgICBlLmtleUNvZGUgPT09IDkgfHwgICAgICAgICAgLy8gVGFiXHJcbiAgICAgIGUua2V5Q29kZSA9PT0gMTMgfHwgICAgICAgLy8gZW50ZXJcclxuICAgICAgKGUua2V5Q29kZSA9PT0gNjUgJiYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpKSB8fCAgICAgIC8vICBDdHJsICsgQVxyXG4gICAgICAoZS5rZXlDb2RlID09PSA2NyAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8ICAgICAgIC8vICBDdHJsICsgQ1xyXG4gICAgICAoZS5rZXlDb2RlID09PSA4OCAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8ICAgICAgICAvLyAgQ3RybCArIFhcclxuICAgICAgKGUua2V5Q29kZSA9PT0gODYgJiYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpKSB8fCAgICAgICAgLy8gIEN0cmwgKyBWXHJcbiAgICAgIChlLmtleUNvZGUgPj0gMzUgJiYgZS5rZXlDb2RlIDw9IDM5KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaG9tZSwgZW5kLCBsZWZ0LCByaWdodFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gUmVqZWN0IGlmIG5vdCBhIG51bWJlciBvciBudW1wYWRcclxuICAgIGlmIChcclxuICAgICAgKGUuc2hpZnRLZXkgfHwgKGUua2V5Q29kZSA8IDQ4IHx8IGUua2V5Q29kZSA+IDU3KSkgJiYgICAgICAgLy8gbm90IG51bWJlclxyXG4gICAgICAoZS5rZXlDb2RlIDwgOTYgfHwgZS5rZXlDb2RlID4gMTA1KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub3QgbnVtcGFkXHJcbiAgICApIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICB9O1xyXG5cclxuICAvLyBFbnN1cmUgdGhhdCBwYXN0ZWQgdmFsdWUgaXMgYSBudW1iZXIgb3Igc3RyaW5nIG9mIG51bWJlclxyXG4gIG9uUGhvbmVQYXN0ZSA9IChlOiBDbGlwYm9hcmRFdmVudCkgPT4ge1xyXG4gICAgaWYgKCEvXlxcZCskLy50ZXN0KGUuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCdUZXh0JykpKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgLy8gRW5zdXJlIHRoYXQgaXQgaXMgYSAgbnVtYmVyOiBpbnRlZ2VyIHx8IGRlY2ltYWxcclxuICBvbk51bWJlcktleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgLy8gQWxsb3dcclxuICAgIGlmIChcclxuICAgICAgZS5rZXlDb2RlID09PSA4IHx8ICAgICAgLy8gYmFja3NwYWNlXHJcbiAgICAgIGUua2V5Q29kZSA9PT0gOSB8fCAgICAgICAgICAvLyBUYWJcclxuICAgICAgZS5rZXlDb2RlID09PSAxMyB8fCAgICAgICAvLyBlbnRlclxyXG4gICAgICBlLmtleUNvZGUgPT09IDE4OCB8fCAgICAvLyBjb21tYShcIixcIilcclxuICAgICAgZS5rZXlDb2RlID09PSAxMTAgfHwgICAgICAgIC8vICAgbnVtcGFkIGRlY2ltYWwgcG9pbnRcclxuICAgICAgZS5rZXlDb2RlID09PSAxOTAgfHwgICAgICAgIC8vIHBlcmlvZChcIi5cIilcclxuICAgICAgKGUua2V5Q29kZSA9PT0gNjUgJiYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpKSB8fCAgICAgIC8vICBDdHJsICsgQVxyXG4gICAgICAoZS5rZXlDb2RlID09PSA2NyAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8ICAgICAgIC8vICBDdHJsICsgQ1xyXG4gICAgICAoZS5rZXlDb2RlID09PSA4OCAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8ICAgICAgICAvLyAgQ3RybCArIFhcclxuICAgICAgKGUua2V5Q29kZSA9PT0gODYgJiYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpKSB8fCAgICAgICAgLy8gIEN0cmwgKyBWXHJcbiAgICAgIChlLmtleUNvZGUgPj0gMzUgJiYgZS5rZXlDb2RlIDw9IDM5KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaG9tZSwgZW5kLCBsZWZ0LCByaWdodFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gUmVqZWN0IGlmIG5vdCBhIG51bWJlciBvciBudW1wYWRcclxuICAgIGlmIChcclxuICAgICAgKGUuc2hpZnRLZXkgfHwgKGUua2V5Q29kZSA8IDQ4IHx8IGUua2V5Q29kZSA+IDU3KSkgJiYgICAgICAgLy8gbm90IG51bWJlclxyXG4gICAgICAoZS5rZXlDb2RlIDwgOTYgfHwgZS5rZXlDb2RlID4gMTA1KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub3QgbnVtcGFkXHJcbiAgICApIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICB9O1xyXG5cclxuICAvLyBFbnN1cmUgdGhhdCBwYXN0ZWQgdmFsdWUgaXMgYSBzdHJpbmcgb2YgbnVtYmVyOiBpbnRlZ2VyIHx8IGRlY2ltYWxcclxuICBvbk51bWJlclBhc3RlID0gKGU6IENsaXBib2FyZEV2ZW50KSA9PiB7XHJcbiAgICBpZiAoIS9eXFxkLiskLy50ZXN0KGUuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCdUZXh0JykpKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbn1cclxuIl19