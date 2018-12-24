/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostBinding, Input, Output, TemplateRef } from '@angular/core';
import _ from 'lodash';
export class InputComponent {
    /**
     * @param {?} cd
     */
    constructor(cd) {
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
        this.onFocus = () => {
            this.host_focus = true;
        };
        this.onBlur = () => {
            this.blur.emit();
            this.host_focus = false;
            this.cd.markForCheck();
        };
        this.onChange = _.debounce(e => {
            e.stopPropagation();
            console.log(e.target.value);
            /** @type {?} */
            let value = e.target.value;
            /** @type {?} */
            const min = parseInt(this.range[0], 10);
            /** @type {?} */
            const max = parseInt(this.range[1], 10);
            if (this.range && this.type === 'number' && !(min <= value && value <= max)) {
                value = e.target.value = this.range[1];
            }
            this.change.emit(value);
        }, 500);
        //  Keyboard & Clipboard Event  //
        this.onKeyPress = (e) => {
            if (e.keyCode === 13)
                this.enter.emit();
        };
        this.onKeyDown = (e) => {
            return (this.type === 'number')
                ? this.onNumberKeyDown(e)
                : (this.type === 'phone')
                    ? this.onPhoneKeyDown(e)
                    : null;
        };
        this.onPaste = (e) => {
            return (this.type === 'number')
                ? this.onNumberPaste(e)
                : (this.type === 'phone')
                    ? this.onPhonePaste(e)
                    : null;
        };
        // Ensure that it is a number from [0-9] no decimal_point
        this.onPhoneKeyDown = (e) => {
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
        this.onPhonePaste = (e) => {
            if (!/^\d+$/.test(e.clipboardData.getData('Text'))) {
                e.preventDefault();
            }
        };
        // Ensure that it is a  number: integer || decimal
        this.onNumberKeyDown = (e) => {
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
        this.onNumberPaste = (e) => {
            if (!/^\d.+$/.test(e.clipboardData.getData('Text'))) {
                e.preventDefault();
            }
        };
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ngOnInit() {
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
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.host_invalid = this.invalid;
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
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
InputComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJ1aS9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUlMLE1BQU0sRUFDTixXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBYXZCLE1BQU0sT0FBTyxjQUFjOzs7O0lBNEJ6QixZQUFvQixFQUFxQjtRQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjs7UUF2QmhDLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsVUFBSyxHQUFRLElBQUksQ0FBQztRQUdsQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFFekIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFJVCxlQUFVLEdBQVksS0FBSyxDQUFDO1FBQzFCLGlCQUFZLEdBQVksS0FBSyxDQUFDOztRQWdENUQsWUFBTyxHQUFHLEdBQUcsRUFBRTtZQUNiLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsQ0FBQztRQUVGLFdBQU0sR0FBRyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxV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RUFBRSxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxXQUFXO0lBQ1gsQ0FBQzs7O1lBOUVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsMmpKQUFxQztnQkFFckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLElBQUksRUFBRTtvQkFDSixrQkFBa0IsRUFBRSxVQUFVO29CQUM5QixrQkFBa0IsRUFBRSxVQUFVO2lCQUMvQjs7YUFDRjs7OztZQXRCQyxpQkFBaUI7OzttQkE2QmhCLEtBQUs7bUJBQ0wsS0FBSzswQkFDTCxLQUFLO29CQUNMLEtBQUs7c0JBR0wsS0FBSzt1QkFDTCxLQUFLO29CQUNMLEtBQUs7dUJBQ0wsS0FBSztxQkFFTCxNQUFNO21CQUNOLE1BQU07b0JBQ04sTUFBTTt1QkFFTixLQUFLO3lCQUVMLFdBQVcsU0FBQyxhQUFhOzJCQUN6QixXQUFXLFNBQUMsZUFBZTs7OztJQWxCNUIsOEJBQW1COztJQUNuQiw4QkFBbUI7O0lBQ25CLHFDQUEwQjs7SUFDMUIsK0JBQTJCOztJQUczQixpQ0FBa0M7O0lBQ2xDLGtDQUFtQzs7SUFDbkMsK0JBQW9COztJQUNwQixrQ0FBbUM7O0lBRW5DLGdDQUFzQzs7SUFDdEMsOEJBQW9DOztJQUNwQywrQkFBcUM7O0lBRXJDLGtDQUFvQzs7SUFFcEMsb0NBQXdEOztJQUN4RCxzQ0FBNEQ7O0lBRzVELHlDQUFnQjs7SUE2Q2hCLGlDQUVFOztJQUVGLGdDQUlFOztJQUVGLGtDQVlROztJQUlSLG9DQUVFOztJQUVGLG1DQU1FOztJQUVGLGlDQU1FOztJQUtGLHdDQXdCRTs7SUFHRixzQ0FJRTs7SUFJRix5Q0EyQkU7O0lBR0YsdUNBSUU7Ozs7O0lBaktVLDRCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgVGVtcGxhdGVSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaW8taW5wdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiBgLi9pbnB1dC5jb21wb25lbnQuaHRtbGAsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXHJcbiAgICAnW2NsYXNzLnJlYWRvbmx5XSc6ICdyZWFkb25seSdcclxuICB9XHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG5cclxuICBASW5wdXQoKSB0eXBlID0gJyc7XHJcbiAgQElucHV0KCkgbmFtZSA9ICcnO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJyc7XHJcbiAgQElucHV0KCkgdmFsdWU6IGFueSA9IG51bGw7XHJcblxyXG5cclxuICBASW5wdXQoKSBpbnZhbGlkOiBCb29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSByYW5nZSA9IFtdO1xyXG4gIEBJbnB1dCgpIHJlYWRvbmx5OiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGVudGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mb2N1cycpIGhvc3RfZm9jdXM6IEJvb2xlYW4gPSBmYWxzZTtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmludmFsaWQnKSBob3N0X2ludmFsaWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblxyXG4gIHRlbXBsYXRlQ29udGV4dDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICB9XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICB0aGlzLnRlbXBsYXRlQ29udGV4dCA9IHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcclxuICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXHJcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLFxyXG4gICAgICAgIGludmFsaWQ6IHRoaXMuaW52YWxpZCxcclxuICAgICAgICBkaXNhYmxlZDogdGhpcy5kaXNhYmxlZCxcclxuICAgICAgICByYW5nZTogdGhpcy5yYW5nZSxcclxuICAgICAgICByZWFkb25seTogdGhpcy5yZWFkb25seVxyXG4gICAgICB9LFxyXG4gICAgICBldmVudHM6IHtcclxuICAgICAgICBjaGFuZ2U6IHRoaXMuY2hhbmdlLFxyXG4gICAgICAgIGJsdXI6IHRoaXMuYmx1cixcclxuICAgICAgICBlbnRlcjogdGhpcy5lbnRlcixcclxuICAgICAgICBrZXlkb3duOiB0aGlzLm9uS2V5RG93bixcclxuICAgICAgICBrZXlwcmVzczogdGhpcy5vbktleVByZXNzLFxyXG4gICAgICAgIHBhc3RlOiB0aGlzLm9uUGFzdGVcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmhvc3RfaW52YWxpZCA9IHRoaXMuaW52YWxpZDtcclxuXHJcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhvc3RfaW52YWxpZCA9IHRoaXMuaW52YWxpZDtcclxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIG9uRm9jdXMgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmhvc3RfZm9jdXMgPSB0cnVlO1xyXG4gIH07XHJcblxyXG4gIG9uQmx1ciA9ICgpID0+IHtcclxuICAgIHRoaXMuYmx1ci5lbWl0KCk7XHJcbiAgICB0aGlzLmhvc3RfZm9jdXMgPSBmYWxzZTtcclxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfTtcclxuXHJcbiAgb25DaGFuZ2UgPSBfLmRlYm91bmNlKGUgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIGxldCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xyXG4gICAgY29uc3QgbWluID0gcGFyc2VJbnQodGhpcy5yYW5nZVswXSwgMTApO1xyXG4gICAgY29uc3QgbWF4ID0gcGFyc2VJbnQodGhpcy5yYW5nZVsxXSwgMTApO1xyXG4gICAgaWYgKHRoaXMucmFuZ2UgJiYgdGhpcy50eXBlID09PSAnbnVtYmVyJyAmJiAhKG1pbiA8PSB2YWx1ZSAmJiB2YWx1ZSA8PSBtYXgpKSB7XHJcbiAgICAgIHZhbHVlID0gZS50YXJnZXQudmFsdWUgPSB0aGlzLnJhbmdlWzFdO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2hhbmdlLmVtaXQodmFsdWUpO1xyXG5cclxuICB9LCA1MDApO1xyXG5cclxuICAvLyAgS2V5Ym9hcmQgJiBDbGlwYm9hcmQgRXZlbnQgIC8vXHJcblxyXG4gIG9uS2V5UHJlc3MgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHRoaXMuZW50ZXIuZW1pdCgpO1xyXG4gIH07XHJcblxyXG4gIG9uS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICByZXR1cm4gKHRoaXMudHlwZSA9PT0gJ251bWJlcicpXHJcbiAgICAgID8gdGhpcy5vbk51bWJlcktleURvd24oZSlcclxuICAgICAgOiAodGhpcy50eXBlID09PSAncGhvbmUnKVxyXG4gICAgICAgID8gdGhpcy5vblBob25lS2V5RG93bihlKVxyXG4gICAgICAgIDogbnVsbDtcclxuICB9O1xyXG5cclxuICBvblBhc3RlID0gKGU6IENsaXBib2FyZEV2ZW50KSA9PiB7XHJcbiAgICByZXR1cm4gKHRoaXMudHlwZSA9PT0gJ251bWJlcicpXHJcbiAgICAgID8gdGhpcy5vbk51bWJlclBhc3RlKGUpXHJcbiAgICAgIDogKHRoaXMudHlwZSA9PT0gJ3Bob25lJylcclxuICAgICAgICA/IHRoaXMub25QaG9uZVBhc3RlKGUpXHJcbiAgICAgICAgOiBudWxsO1xyXG4gIH07XHJcblxyXG5cclxuICAvLyBFbnN1cmUgdGhhdCBpdCBpcyBhIG51bWJlciBmcm9tIFswLTldIG5vIGRlY2ltYWxfcG9pbnRcclxuXHJcbiAgb25QaG9uZUtleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgLy8gQWxsb3dcclxuICAgIGlmIChcclxuICAgICAgZS5rZXlDb2RlID09PSA4IHx8ICAgICAgLy8gYmFja3NwYWNlXHJcbiAgICAgIGUua2V5Q29kZSA9PT0gOSB8fCAgICAgICAgICAvLyBUYWJcclxuICAgICAgZS5rZXlDb2RlID09PSAxMyB8fCAgICAgICAvLyBlbnRlclxyXG4gICAgICAoZS5rZXlDb2RlID09PSA2NSAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8ICAgICAgLy8gIEN0cmwgKyBBXHJcbiAgICAgIChlLmtleUNvZGUgPT09IDY3ICYmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSkgfHwgICAgICAgLy8gIEN0cmwgKyBDXHJcbiAgICAgIChlLmtleUNvZGUgPT09IDg4ICYmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSkgfHwgICAgICAgIC8vICBDdHJsICsgWFxyXG4gICAgICAoZS5rZXlDb2RlID09PSA4NiAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8ICAgICAgICAvLyAgQ3RybCArIFZcclxuICAgICAgKGUua2V5Q29kZSA+PSAzNSAmJiBlLmtleUNvZGUgPD0gMzkpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBob21lLCBlbmQsIGxlZnQsIHJpZ2h0XHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBSZWplY3QgaWYgbm90IGEgbnVtYmVyIG9yIG51bXBhZFxyXG4gICAgaWYgKFxyXG4gICAgICAoZS5zaGlmdEtleSB8fCAoZS5rZXlDb2RlIDwgNDggfHwgZS5rZXlDb2RlID4gNTcpKSAmJiAgICAgICAvLyBub3QgbnVtYmVyXHJcbiAgICAgIChlLmtleUNvZGUgPCA5NiB8fCBlLmtleUNvZGUgPiAxMDUpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vdCBudW1wYWRcclxuICAgICkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gIH07XHJcblxyXG4gIC8vIEVuc3VyZSB0aGF0IHBhc3RlZCB2YWx1ZSBpcyBhIG51bWJlciBvciBzdHJpbmcgb2YgbnVtYmVyXHJcbiAgb25QaG9uZVBhc3RlID0gKGU6IENsaXBib2FyZEV2ZW50KSA9PiB7XHJcbiAgICBpZiAoIS9eXFxkKyQvLnRlc3QoZS5jbGlwYm9hcmREYXRhLmdldERhdGEoJ1RleHQnKSkpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICAvLyBFbnN1cmUgdGhhdCBpdCBpcyBhICBudW1iZXI6IGludGVnZXIgfHwgZGVjaW1hbFxyXG4gIG9uTnVtYmVyS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAvLyBBbGxvd1xyXG4gICAgaWYgKFxyXG4gICAgICBlLmtleUNvZGUgPT09IDggfHwgICAgICAvLyBiYWNrc3BhY2VcclxuICAgICAgZS5rZXlDb2RlID09PSA5IHx8ICAgICAgICAgIC8vIFRhYlxyXG4gICAgICBlLmtleUNvZGUgPT09IDEzIHx8ICAgICAgIC8vIGVudGVyXHJcbiAgICAgIGUua2V5Q29kZSA9PT0gMTg4IHx8ICAgIC8vIGNvbW1hKFwiLFwiKVxyXG4gICAgICBlLmtleUNvZGUgPT09IDExMCB8fCAgICAgICAgLy8gICBudW1wYWQgZGVjaW1hbCBwb2ludFxyXG4gICAgICBlLmtleUNvZGUgPT09IDE5MCB8fCAgICAgICAgLy8gcGVyaW9kKFwiLlwiKVxyXG4gICAgICAoZS5rZXlDb2RlID09PSA2NSAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8ICAgICAgLy8gIEN0cmwgKyBBXHJcbiAgICAgIChlLmtleUNvZGUgPT09IDY3ICYmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSkgfHwgICAgICAgLy8gIEN0cmwgKyBDXHJcbiAgICAgIChlLmtleUNvZGUgPT09IDg4ICYmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSkgfHwgICAgICAgIC8vICBDdHJsICsgWFxyXG4gICAgICAoZS5rZXlDb2RlID09PSA4NiAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8ICAgICAgICAvLyAgQ3RybCArIFZcclxuICAgICAgKGUua2V5Q29kZSA+PSAzNSAmJiBlLmtleUNvZGUgPD0gMzkpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBob21lLCBlbmQsIGxlZnQsIHJpZ2h0XHJcbiAgICApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyBSZWplY3QgaWYgbm90IGEgbnVtYmVyIG9yIG51bXBhZFxyXG4gICAgaWYgKFxyXG4gICAgICAoZS5zaGlmdEtleSB8fCAoZS5rZXlDb2RlIDwgNDggfHwgZS5rZXlDb2RlID4gNTcpKSAmJiAgICAgICAvLyBub3QgbnVtYmVyXHJcbiAgICAgIChlLmtleUNvZGUgPCA5NiB8fCBlLmtleUNvZGUgPiAxMDUpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vdCBudW1wYWRcclxuICAgICkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gIH07XHJcblxyXG4gIC8vIEVuc3VyZSB0aGF0IHBhc3RlZCB2YWx1ZSBpcyBhIHN0cmluZyBvZiBudW1iZXI6IGludGVnZXIgfHwgZGVjaW1hbFxyXG4gIG9uTnVtYmVyUGFzdGUgPSAoZTogQ2xpcGJvYXJkRXZlbnQpID0+IHtcclxuICAgIGlmICghL15cXGQuKyQvLnRlc3QoZS5jbGlwYm9hcmREYXRhLmdldERhdGEoJ1RleHQnKSkpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxufVxyXG4iXX0=