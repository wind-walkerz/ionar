/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var TextareaComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function TextareaComponent() {
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.name = '';
        this.value = '';
        this.placeholder = '';
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
        this.invalid = false;
    }
    /**
     * @return {?}
     */
    TextareaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TextareaComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    TextareaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'io-textarea',
                    template: "\n      <textarea\n              [name]=\"name\"\n              [value]=\"value\"\n              [class.invalid]=\"invalid\"\n              cols=\"1\" rows=\"1\"\n              [placeholder]=\"placeholder\"\n              \n              (change)=\"$event.stopPropagation(); change.emit($event.target.value);\"\n              (blur)=\"blur.emit()\"\n      ></textarea>\n  ",
                    styles: ["\n      :host {\n          display: flex;\n          flex: 1;\n      }\n\n      textarea {\n          border: none;\n          font-size: 1.5rem;\n          padding: 1rem;\n          width: 100%;\n          max-width: 100%;\n          overflow-y: scroll;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    TextareaComponent.ctorParameters = function () { return []; };
    TextareaComponent.propDecorators = {
        name: [{ type: Input }],
        value: [{ type: Input }],
        placeholder: [{ type: Input }],
        change: [{ type: Output }],
        blur: [{ type: Output }],
        invalid: [{ type: Input }]
    };
    return TextareaComponent;
}());
export { TextareaComponent };
if (false) {
    /** @type {?} */
    TextareaComponent.prototype.name;
    /** @type {?} */
    TextareaComponent.prototype.value;
    /** @type {?} */
    TextareaComponent.prototype.placeholder;
    /** @type {?} */
    TextareaComponent.prototype.change;
    /** @type {?} */
    TextareaComponent.prototype.blur;
    /** @type {?} */
    TextareaComponent.prototype.invalid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJ1aS9jb21wb25lbnRzL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXpHO0lBd0NFLHdIQUF3SDtJQUN4SDs7UUFUUyxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFDckIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0IsWUFBTyxHQUFZLEtBQUssQ0FBQztJQUtsQyxDQUFDOzs7O0lBRUQsb0NBQVE7OztJQUFSO0lBRUEsQ0FBQzs7Ozs7SUFFRCx1Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7SUFFbEMsQ0FBQzs7Z0JBbERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLHNYQVdUOzZCQUNRLDZRQWNSO2lCQUNGOzs7Ozt1QkFHRSxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsS0FBSzt5QkFDTCxNQUFNO3VCQUNOLE1BQU07MEJBQ04sS0FBSzs7SUFpQlIsd0JBQUM7Q0FBQSxBQXRERCxJQXNEQztTQXhCWSxpQkFBaUI7OztJQUU1QixpQ0FBMkI7O0lBQzNCLGtDQUF5Qjs7SUFDekIsd0NBQStCOztJQUMvQixtQ0FBc0M7O0lBQ3RDLGlDQUFvQzs7SUFDcEMsb0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lvLXRleHRhcmVhJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBbbmFtZV09XCJuYW1lXCJcbiAgICAgICAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgW2NsYXNzLmludmFsaWRdPVwiaW52YWxpZFwiXG4gICAgICAgICAgICAgIGNvbHM9XCIxXCIgcm93cz1cIjFcIlxuICAgICAgICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgKGNoYW5nZSk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IGNoYW5nZS5lbWl0KCRldmVudC50YXJnZXQudmFsdWUpO1wiXG4gICAgICAgICAgICAgIChibHVyKT1cImJsdXIuZW1pdCgpXCJcbiAgICAgID48L3RleHRhcmVhPlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgfVxuXG4gICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgIH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgVGV4dGFyZWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmcgPSAnJztcbiAgQElucHV0KCkgdmFsdWU6IGFueSA9ICcnO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogYW55ID0gJyc7XG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBibHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBpbnZhbGlkOiBCb29sZWFuID0gZmFsc2U7XG5cblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuXG4gIH1cblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTWFpbiBGdW5jdGlvbnMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuXG59XG4iXX0=