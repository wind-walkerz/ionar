/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input } from '@angular/core';
import _ from 'lodash';
import { IoFormFieldUI } from '../../interfaces/IoFormFieldUI';
export class InputComponent extends IoFormFieldUI {
    /**
     * @param {?} cd
     * @param {?} _elRef
     */
    constructor(cd, _elRef) {
        super(cd, _elRef);
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.type = '';
        this.name = '';
        this.placeholder = '';
        this.value = '';
        this.range = [];
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.onFocus = () => {
            // this.focused = true;
        };
        this.onBlur = () => {
            this.blur.emit();
            this.focused = false;
            this.cd.markForCheck();
        };
        this.onChange = _.debounce(e => {
            e.stopPropagation();
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
        super.ngOnInit();
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
    }
}
InputComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-input',
                template: "<ng-container [ngTemplateOutlet]=\"template\" [ngTemplateOutletContext]=\"context\"></ng-container>\r\n\r\n<ng-template #default_template let-context>\r\n    <input\r\n            [spread]=\"context\"\r\n            *ngIf=\"!(context?.readonly || context?.disabled)\"\r\n    >\r\n\r\n    <span *ngIf=\"context?.readonly || context?.disabled\">\r\n          {{value}}\r\n      </span>\r\n</ng-template>\r\n\r\n<ng-template #content_template>\r\n    <ng-content></ng-content>\r\n</ng-template>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{background-color:transparent;border:1px solid #d9d9d9;border-radius:.4rem;color:#363636;display:flex;align-items:center;justify-content:flex-start;font-size:1.5rem;outline:0;overflow:hidden;padding:0 1rem;position:relative;transition:.3s cubic-bezier(.645,.045,.355,1);width:100%;height:auto;min-height:2.25em;max-height:5rem;max-width:100%}:host.focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff}:host.invalid{border-color:#f5222d}:host.invalid.focus{border-color:#ff4d4f;outline:0;box-shadow:0 0 0 2px rgba(245,34,45,.2)}:host ::ng-deep input{border:none;color:inherit;display:flex;flex:1px;font-size:inherit;font-weight:inherit;text-transform:inherit;text-decoration:inherit;outline:0;height:100%;max-width:100%;z-index:1}:host .loading_icon{width:10%}:host-context(.readonly){border:0}:host-context(.disabled){border:0}"]
            }] }
];
/** @nocollapse */
InputComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef }
];
InputComponent.propDecorators = {
    type: [{ type: Input }],
    name: [{ type: Input }],
    placeholder: [{ type: Input }],
    value: [{ type: Input }],
    range: [{ type: Input }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJ1aS9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUFFLFVBQVUsRUFDckIsS0FBSyxFQUlOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFVL0QsTUFBTSxPQUFPLGNBQWUsU0FBUSxhQUFhOzs7OztJQWEvQyxZQUNFLEVBQXFCLEVBQ3JCLE1BQWtCO1FBRWxCLEtBQUssQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7O1FBWlgsU0FBSSxHQUFHLEVBQUUsQ0FBQztRQUNWLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixVQUFLLEdBQVEsRUFBRSxDQUFDO1FBRWhCLFVBQUssR0FBRyxFQUFFLENBQUM7O1FBbUNwQixZQUFPLEdBQUcsR0FBRyxFQUFFO1lBQ2IsdUJBQXVCO1FBQ3pCLENBQUMsQ0FBQztRQUVGLFdBQU0sR0FBRyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDO1FBRUYsYUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDeEIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDOztnQkFFaEIsS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSzs7a0JBQ3BCLEdBQUcs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SUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDOUIsRUFDRDtZQUNFLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUTtZQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUztZQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQzFCLENBQ0YsQ0FBQztJQUNKLENBQUM7OztZQWhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLDJmQUFxQztnQkFFckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O1lBaEJDLGlCQUFpQjtZQUNOLFVBQVU7OzttQkFzQnBCLEtBQUs7bUJBQ0wsS0FBSzswQkFDTCxLQUFLO29CQUNMLEtBQUs7b0JBRUwsS0FBSzs7OztJQUxOLDhCQUFtQjs7SUFDbkIsOEJBQW1COztJQUNuQixxQ0FBMEI7O0lBQzFCLCtCQUF5Qjs7SUFFekIsK0JBQW9COztJQW1DcEIsaUNBRUU7O0lBRUYsZ0NBSUU7O0lBRUYsa0NBWVE7O0lBSVIsb0NBRUU7O0lBRUYsbUNBTUU7O0lBRUYsaUNBTUU7O0lBS0Ysd0NBd0JFOztJQUdGLHNDQUlFOztJQUlGLHlDQTJCRTs7SUFHRix1Q0FJRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LCBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LCBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IElvRm9ybUZpZWxkVUkgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL0lvRm9ybUZpZWxkVUknO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaW8taW5wdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiBgLi9pbnB1dC5jb21wb25lbnQuaHRtbGAsXHJcbiAgc3R5bGVVcmxzOiBbJy4vaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IGV4dGVuZHMgSW9Gb3JtRmllbGRVSSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuXHJcbiAgQElucHV0KCkgdHlwZSA9ICcnO1xyXG4gIEBJbnB1dCgpIG5hbWUgPSAnJztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICcnO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBhbnkgPSAnJztcclxuXHJcbiAgQElucHV0KCkgcmFuZ2UgPSBbXTtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgX2VsUmVmOiBFbGVtZW50UmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcihjZCwgX2VsUmVmKTtcclxuICB9XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcblxyXG4gICAgdGhpcy5zZXRDb250ZXh0KFxyXG4gICAgICB7XHJcbiAgICAgICAgdHlwZTogdGhpcy50eXBlLFxyXG4gICAgICAgIG5hbWU6IHRoaXMubmFtZSxcclxuICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcclxuICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlclxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaW5wdXQ6IHRoaXMub25DaGFuZ2UsXHJcbiAgICAgICAgYmx1cjogdGhpcy5vbkJsdXIsXHJcbiAgICAgICAgZm9jdXM6IHRoaXMub25Gb2N1cyxcclxuICAgICAgICBrZXlkb3duOiB0aGlzLm9uS2V5RG93bixcclxuICAgICAgICBwYXN0ZTogdGhpcy5vblBhc3RlLFxyXG4gICAgICAgIGtleXByZXNzOiB0aGlzLm9uS2V5UHJlc3NcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIG9uRm9jdXMgPSAoKSA9PiB7XHJcbiAgICAvLyB0aGlzLmZvY3VzZWQgPSB0cnVlO1xyXG4gIH07XHJcblxyXG4gIG9uQmx1ciA9ICgpID0+IHtcclxuICAgIHRoaXMuYmx1ci5lbWl0KCk7XHJcbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfTtcclxuXHJcbiAgb25DaGFuZ2UgPSBfLmRlYm91bmNlKGUgPT4ge1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGNvbnN0IG1pbiA9IHBhcnNlSW50KHRoaXMucmFuZ2VbMF0sIDEwKTtcclxuICAgIGNvbnN0IG1heCA9IHBhcnNlSW50KHRoaXMucmFuZ2VbMV0sIDEwKTtcclxuICAgIGlmICh0aGlzLnJhbmdlICYmIHRoaXMudHlwZSA9PT0gJ251bWJlcicgJiYgIShtaW4gPD0gdmFsdWUgJiYgdmFsdWUgPD0gbWF4KSkge1xyXG4gICAgICB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlID0gdGhpcy5yYW5nZVsxXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHZhbHVlKTtcclxuXHJcbiAgfSwgNTAwKTtcclxuXHJcbiAgLy8gIEtleWJvYXJkICYgQ2xpcGJvYXJkIEV2ZW50ICAvL1xyXG5cclxuICBvbktleVByZXNzID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB0aGlzLmVudGVyLmVtaXQoKTtcclxuICB9O1xyXG5cclxuICBvbktleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgcmV0dXJuICh0aGlzLnR5cGUgPT09ICdudW1iZXInKVxyXG4gICAgICA/IHRoaXMub25OdW1iZXJLZXlEb3duKGUpXHJcbiAgICAgIDogKHRoaXMudHlwZSA9PT0gJ3Bob25lJylcclxuICAgICAgICA/IHRoaXMub25QaG9uZUtleURvd24oZSlcclxuICAgICAgICA6IG51bGw7XHJcbiAgfTtcclxuXHJcbiAgb25QYXN0ZSA9IChlOiBDbGlwYm9hcmRFdmVudCkgPT4ge1xyXG4gICAgcmV0dXJuICh0aGlzLnR5cGUgPT09ICdudW1iZXInKVxyXG4gICAgICA/IHRoaXMub25OdW1iZXJQYXN0ZShlKVxyXG4gICAgICA6ICh0aGlzLnR5cGUgPT09ICdwaG9uZScpXHJcbiAgICAgICAgPyB0aGlzLm9uUGhvbmVQYXN0ZShlKVxyXG4gICAgICAgIDogbnVsbDtcclxuICB9O1xyXG5cclxuXHJcbiAgLy8gRW5zdXJlIHRoYXQgaXQgaXMgYSBudW1iZXIgZnJvbSBbMC05XSBubyBkZWNpbWFsX3BvaW50XHJcblxyXG4gIG9uUGhvbmVLZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgIC8vIEFsbG93XHJcbiAgICBpZiAoXHJcbiAgICAgIGUua2V5Q29kZSA9PT0gOCB8fCAgICAgIC8vIGJhY2tzcGFjZVxyXG4gICAgICBlLmtleUNvZGUgPT09IDkgfHwgICAgICAgICAgLy8gVGFiXHJcbiAgICAgIGUua2V5Q29kZSA9PT0gMTMgfHwgICAgICAgLy8gZW50ZXJcclxuICAgICAgKGUua2V5Q29kZSA9PT0gNjUgJiYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpKSB8fCAgICAgIC8vICBDdHJsICsgQVxyXG4gICAgICAoZS5rZXlDb2RlID09PSA2NyAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8ICAgICAgIC8vICBDdHJsICsgQ1xyXG4gICAgICAoZS5rZXlDb2RlID09PSA4OCAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8ICAgICAgICAvLyAgQ3RybCArIFhcclxuICAgICAgKGUua2V5Q29kZSA9PT0gODYgJiYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpKSB8fCAgICAgICAgLy8gIEN0cmwgKyBWXHJcbiAgICAgIChlLmtleUNvZGUgPj0gMzUgJiYgZS5rZXlDb2RlIDw9IDM5KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaG9tZSwgZW5kLCBsZWZ0LCByaWdodFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gUmVqZWN0IGlmIG5vdCBhIG51bWJlciBvciBudW1wYWRcclxuICAgIGlmIChcclxuICAgICAgKGUuc2hpZnRLZXkgfHwgKGUua2V5Q29kZSA8IDQ4IHx8IGUua2V5Q29kZSA+IDU3KSkgJiYgICAgICAgLy8gbm90IG51bWJlclxyXG4gICAgICAoZS5rZXlDb2RlIDwgOTYgfHwgZS5rZXlDb2RlID4gMTA1KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub3QgbnVtcGFkXHJcbiAgICApIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICB9O1xyXG5cclxuICAvLyBFbnN1cmUgdGhhdCBwYXN0ZWQgdmFsdWUgaXMgYSBudW1iZXIgb3Igc3RyaW5nIG9mIG51bWJlclxyXG4gIG9uUGhvbmVQYXN0ZSA9IChlOiBDbGlwYm9hcmRFdmVudCkgPT4ge1xyXG4gICAgaWYgKCEvXlxcZCskLy50ZXN0KGUuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCdUZXh0JykpKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgLy8gRW5zdXJlIHRoYXQgaXQgaXMgYSAgbnVtYmVyOiBpbnRlZ2VyIHx8IGRlY2ltYWxcclxuICBvbk51bWJlcktleURvd24gPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xyXG4gICAgLy8gQWxsb3dcclxuICAgIGlmIChcclxuICAgICAgZS5rZXlDb2RlID09PSA4IHx8ICAgICAgLy8gYmFja3NwYWNlXHJcbiAgICAgIGUua2V5Q29kZSA9PT0gOSB8fCAgICAgICAgICAvLyBUYWJcclxuICAgICAgZS5rZXlDb2RlID09PSAxMyB8fCAgICAgICAvLyBlbnRlclxyXG4gICAgICBlLmtleUNvZGUgPT09IDE4OCB8fCAgICAvLyBjb21tYShcIixcIilcclxuICAgICAgZS5rZXlDb2RlID09PSAxMTAgfHwgICAgICAgIC8vICAgbnVtcGFkIGRlY2ltYWwgcG9pbnRcclxuICAgICAgZS5rZXlDb2RlID09PSAxOTAgfHwgICAgICAgIC8vIHBlcmlvZChcIi5cIilcclxuICAgICAgKGUua2V5Q29kZSA9PT0gNjUgJiYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpKSB8fCAgICAgIC8vICBDdHJsICsgQVxyXG4gICAgICAoZS5rZXlDb2RlID09PSA2NyAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8ICAgICAgIC8vICBDdHJsICsgQ1xyXG4gICAgICAoZS5rZXlDb2RlID09PSA4OCAmJiAoZS5jdHJsS2V5IHx8IGUubWV0YUtleSkpIHx8ICAgICAgICAvLyAgQ3RybCArIFhcclxuICAgICAgKGUua2V5Q29kZSA9PT0gODYgJiYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpKSB8fCAgICAgICAgLy8gIEN0cmwgKyBWXHJcbiAgICAgIChlLmtleUNvZGUgPj0gMzUgJiYgZS5rZXlDb2RlIDw9IDM5KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaG9tZSwgZW5kLCBsZWZ0LCByaWdodFxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gUmVqZWN0IGlmIG5vdCBhIG51bWJlciBvciBudW1wYWRcclxuICAgIGlmIChcclxuICAgICAgKGUuc2hpZnRLZXkgfHwgKGUua2V5Q29kZSA8IDQ4IHx8IGUua2V5Q29kZSA+IDU3KSkgJiYgICAgICAgLy8gbm90IG51bWJlclxyXG4gICAgICAoZS5rZXlDb2RlIDwgOTYgfHwgZS5rZXlDb2RlID4gMTA1KSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub3QgbnVtcGFkXHJcbiAgICApIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICB9O1xyXG5cclxuICAvLyBFbnN1cmUgdGhhdCBwYXN0ZWQgdmFsdWUgaXMgYSBzdHJpbmcgb2YgbnVtYmVyOiBpbnRlZ2VyIHx8IGRlY2ltYWxcclxuICBvbk51bWJlclBhc3RlID0gKGU6IENsaXBib2FyZEV2ZW50KSA9PiB7XHJcbiAgICBpZiAoIS9eXFxkLiskLy50ZXN0KGUuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCdUZXh0JykpKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbn1cclxuIl19