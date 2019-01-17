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
        this.type = 'text';
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
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJ1aS9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUFFLFVBQVUsRUFDckIsS0FBSyxFQUlOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFVL0QsTUFBTSxPQUFPLGNBQWUsU0FBUSxhQUFhOzs7OztJQWEvQyxZQUNFLEVBQXFCLEVBQ3JCLE1BQWtCO1FBRWxCLEtBQUssQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7O1FBWlgsU0FBSSxHQUFHLE1BQU0sQ0FBQztRQUNkLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixVQUFLLEdBQVEsRUFBRSxDQUFDO1FBRWhCLFVBQUssR0FBRyxFQUFFLENBQUM7O1FBdUNwQixZQUFPLEdBQUcsR0FBRyxFQUFFO1lBQ2IsdUJBQXVCO1FBQ3pCLENBQUMsQ0FBQztRQUVGLFdBQU0sR0FBRyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDO1FBRUYsYUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDeEIsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDOztnQkFFaEIsS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSzs7a0JBQ3BCLEdBQUcs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SUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7U0FDOUIsRUFDRDtZQUNFLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUTtZQUNwQixJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ25CLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUztZQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVO1NBQzFCLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7O1lBcERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsMmZBQXFDO2dCQUVyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUFoQkMsaUJBQWlCO1lBQ04sVUFBVTs7O21CQXNCcEIsS0FBSzttQkFDTCxLQUFLOzBCQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFFTCxLQUFLOzs7O0lBTE4sOEJBQXVCOztJQUN2Qiw4QkFBbUI7O0lBQ25CLHFDQUEwQjs7SUFDMUIsK0JBQXlCOztJQUV6QiwrQkFBb0I7O0lBdUNwQixpQ0FFRTs7SUFFRixnQ0FJRTs7SUFFRixrQ0FZUTs7SUFJUixvQ0FFRTs7SUFFRixtQ0FNRTs7SUFFRixpQ0FNRTs7SUFLRix3Q0F3QkU7O0lBR0Ysc0NBSUU7O0lBSUYseUNBMkJFOztJQUdGLHVDQUlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgSW9Gb3JtRmllbGRVSSB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvSW9Gb3JtRmllbGRVSSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpby1pbnB1dCcsXHJcbiAgdGVtcGxhdGVVcmw6IGAuL2lucHV0LmNvbXBvbmVudC5odG1sYCxcclxuICBzdHlsZVVybHM6IFsnLi9pbnB1dC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRDb21wb25lbnQgZXh0ZW5kcyBJb0Zvcm1GaWVsZFVJIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcblxyXG4gIEBJbnB1dCgpIHR5cGUgPSAndGV4dCc7XHJcbiAgQElucHV0KCkgbmFtZSA9ICcnO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJyc7XHJcbiAgQElucHV0KCkgdmFsdWU6IGFueSA9ICcnO1xyXG5cclxuICBASW5wdXQoKSByYW5nZSA9IFtdO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBfZWxSZWY6IEVsZW1lbnRSZWZcclxuICApIHtcclxuICAgIHN1cGVyKGNkLCBfZWxSZWYpO1xyXG4gIH1cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkluaXQoKTtcclxuXHJcbiAgICB0aGlzLnNldENvbnRleHQoXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXHJcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxyXG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpbnB1dDogdGhpcy5vbkNoYW5nZSxcclxuICAgICAgICBibHVyOiB0aGlzLm9uQmx1cixcclxuICAgICAgICBmb2N1czogdGhpcy5vbkZvY3VzLFxyXG4gICAgICAgIGtleWRvd246IHRoaXMub25LZXlEb3duLFxyXG4gICAgICAgIHBhc3RlOiB0aGlzLm9uUGFzdGUsXHJcbiAgICAgICAga2V5cHJlc3M6IHRoaXMub25LZXlQcmVzc1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTWFpbiBGdW5jdGlvbnMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBvbkZvY3VzID0gKCkgPT4ge1xyXG4gICAgLy8gdGhpcy5mb2N1c2VkID0gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBvbkJsdXIgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmJsdXIuZW1pdCgpO1xyXG4gICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gIH07XHJcblxyXG4gIG9uQ2hhbmdlID0gXy5kZWJvdW5jZShlID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgbGV0IHZhbHVlID0gZS50YXJnZXQudmFsdWU7XHJcbiAgICBjb25zdCBtaW4gPSBwYXJzZUludCh0aGlzLnJhbmdlWzBdLCAxMCk7XHJcbiAgICBjb25zdCBtYXggPSBwYXJzZUludCh0aGlzLnJhbmdlWzFdLCAxMCk7XHJcbiAgICBpZiAodGhpcy5yYW5nZSAmJiB0aGlzLnR5cGUgPT09ICdudW1iZXInICYmICEobWluIDw9IHZhbHVlICYmIHZhbHVlIDw9IG1heCkpIHtcclxuICAgICAgdmFsdWUgPSBlLnRhcmdldC52YWx1ZSA9IHRoaXMucmFuZ2VbMV07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcblxyXG4gIH0sIDUwMCk7XHJcblxyXG4gIC8vICBLZXlib2FyZCAmIENsaXBib2FyZCBFdmVudCAgLy9cclxuXHJcbiAgb25LZXlQcmVzcyA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICBpZiAoZS5rZXlDb2RlID09PSAxMykgdGhpcy5lbnRlci5lbWl0KCk7XHJcbiAgfTtcclxuXHJcbiAgb25LZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgIHJldHVybiAodGhpcy50eXBlID09PSAnbnVtYmVyJylcclxuICAgICAgPyB0aGlzLm9uTnVtYmVyS2V5RG93bihlKVxyXG4gICAgICA6ICh0aGlzLnR5cGUgPT09ICdwaG9uZScpXHJcbiAgICAgICAgPyB0aGlzLm9uUGhvbmVLZXlEb3duKGUpXHJcbiAgICAgICAgOiBudWxsO1xyXG4gIH07XHJcblxyXG4gIG9uUGFzdGUgPSAoZTogQ2xpcGJvYXJkRXZlbnQpID0+IHtcclxuICAgIHJldHVybiAodGhpcy50eXBlID09PSAnbnVtYmVyJylcclxuICAgICAgPyB0aGlzLm9uTnVtYmVyUGFzdGUoZSlcclxuICAgICAgOiAodGhpcy50eXBlID09PSAncGhvbmUnKVxyXG4gICAgICAgID8gdGhpcy5vblBob25lUGFzdGUoZSlcclxuICAgICAgICA6IG51bGw7XHJcbiAgfTtcclxuXHJcblxyXG4gIC8vIEVuc3VyZSB0aGF0IGl0IGlzIGEgbnVtYmVyIGZyb20gWzAtOV0gbm8gZGVjaW1hbF9wb2ludFxyXG5cclxuICBvblBob25lS2V5RG93biA9IChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAvLyBBbGxvd1xyXG4gICAgaWYgKFxyXG4gICAgICBlLmtleUNvZGUgPT09IDggfHwgICAgICAvLyBiYWNrc3BhY2VcclxuICAgICAgZS5rZXlDb2RlID09PSA5IHx8ICAgICAgICAgIC8vIFRhYlxyXG4gICAgICBlLmtleUNvZGUgPT09IDEzIHx8ICAgICAgIC8vIGVudGVyXHJcbiAgICAgIChlLmtleUNvZGUgPT09IDY1ICYmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSkgfHwgICAgICAvLyAgQ3RybCArIEFcclxuICAgICAgKGUua2V5Q29kZSA9PT0gNjcgJiYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpKSB8fCAgICAgICAvLyAgQ3RybCArIENcclxuICAgICAgKGUua2V5Q29kZSA9PT0gODggJiYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpKSB8fCAgICAgICAgLy8gIEN0cmwgKyBYXHJcbiAgICAgIChlLmtleUNvZGUgPT09IDg2ICYmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSkgfHwgICAgICAgIC8vICBDdHJsICsgVlxyXG4gICAgICAoZS5rZXlDb2RlID49IDM1ICYmIGUua2V5Q29kZSA8PSAzOSkgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhvbWUsIGVuZCwgbGVmdCwgcmlnaHRcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIFJlamVjdCBpZiBub3QgYSBudW1iZXIgb3IgbnVtcGFkXHJcbiAgICBpZiAoXHJcbiAgICAgIChlLnNoaWZ0S2V5IHx8IChlLmtleUNvZGUgPCA0OCB8fCBlLmtleUNvZGUgPiA1NykpICYmICAgICAgIC8vIG5vdCBudW1iZXJcclxuICAgICAgKGUua2V5Q29kZSA8IDk2IHx8IGUua2V5Q29kZSA+IDEwNSkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm90IG51bXBhZFxyXG4gICAgKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgfTtcclxuXHJcbiAgLy8gRW5zdXJlIHRoYXQgcGFzdGVkIHZhbHVlIGlzIGEgbnVtYmVyIG9yIHN0cmluZyBvZiBudW1iZXJcclxuICBvblBob25lUGFzdGUgPSAoZTogQ2xpcGJvYXJkRXZlbnQpID0+IHtcclxuICAgIGlmICghL15cXGQrJC8udGVzdChlLmNsaXBib2FyZERhdGEuZ2V0RGF0YSgnVGV4dCcpKSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gIC8vIEVuc3VyZSB0aGF0IGl0IGlzIGEgIG51bWJlcjogaW50ZWdlciB8fCBkZWNpbWFsXHJcbiAgb25OdW1iZXJLZXlEb3duID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcclxuICAgIC8vIEFsbG93XHJcbiAgICBpZiAoXHJcbiAgICAgIGUua2V5Q29kZSA9PT0gOCB8fCAgICAgIC8vIGJhY2tzcGFjZVxyXG4gICAgICBlLmtleUNvZGUgPT09IDkgfHwgICAgICAgICAgLy8gVGFiXHJcbiAgICAgIGUua2V5Q29kZSA9PT0gMTMgfHwgICAgICAgLy8gZW50ZXJcclxuICAgICAgZS5rZXlDb2RlID09PSAxODggfHwgICAgLy8gY29tbWEoXCIsXCIpXHJcbiAgICAgIGUua2V5Q29kZSA9PT0gMTEwIHx8ICAgICAgICAvLyAgIG51bXBhZCBkZWNpbWFsIHBvaW50XHJcbiAgICAgIGUua2V5Q29kZSA9PT0gMTkwIHx8ICAgICAgICAvLyBwZXJpb2QoXCIuXCIpXHJcbiAgICAgIChlLmtleUNvZGUgPT09IDY1ICYmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSkgfHwgICAgICAvLyAgQ3RybCArIEFcclxuICAgICAgKGUua2V5Q29kZSA9PT0gNjcgJiYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpKSB8fCAgICAgICAvLyAgQ3RybCArIENcclxuICAgICAgKGUua2V5Q29kZSA9PT0gODggJiYgKGUuY3RybEtleSB8fCBlLm1ldGFLZXkpKSB8fCAgICAgICAgLy8gIEN0cmwgKyBYXHJcbiAgICAgIChlLmtleUNvZGUgPT09IDg2ICYmIChlLmN0cmxLZXkgfHwgZS5tZXRhS2V5KSkgfHwgICAgICAgIC8vICBDdHJsICsgVlxyXG4gICAgICAoZS5rZXlDb2RlID49IDM1ICYmIGUua2V5Q29kZSA8PSAzOSkgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGhvbWUsIGVuZCwgbGVmdCwgcmlnaHRcclxuICAgICkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIFJlamVjdCBpZiBub3QgYSBudW1iZXIgb3IgbnVtcGFkXHJcbiAgICBpZiAoXHJcbiAgICAgIChlLnNoaWZ0S2V5IHx8IChlLmtleUNvZGUgPCA0OCB8fCBlLmtleUNvZGUgPiA1NykpICYmICAgICAgIC8vIG5vdCBudW1iZXJcclxuICAgICAgKGUua2V5Q29kZSA8IDk2IHx8IGUua2V5Q29kZSA+IDEwNSkgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm90IG51bXBhZFxyXG4gICAgKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuXHJcbiAgfTtcclxuXHJcbiAgLy8gRW5zdXJlIHRoYXQgcGFzdGVkIHZhbHVlIGlzIGEgc3RyaW5nIG9mIG51bWJlcjogaW50ZWdlciB8fCBkZWNpbWFsXHJcbiAgb25OdW1iZXJQYXN0ZSA9IChlOiBDbGlwYm9hcmRFdmVudCkgPT4ge1xyXG4gICAgaWYgKCEvXlxcZC4rJC8udGVzdChlLmNsaXBib2FyZERhdGEuZ2V0RGF0YSgnVGV4dCcpKSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG59XHJcbiJdfQ==