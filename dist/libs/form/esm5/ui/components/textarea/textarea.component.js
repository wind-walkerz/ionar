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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJ1aS9jb21wb25lbnRzL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXpHO0lBd0NFLHdIQUF3SDtJQUN4SDs7UUFUUyxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFDckIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0IsWUFBTyxHQUFZLEtBQUssQ0FBQztJQUtsQyxDQUFDOzs7O0lBRUQsb0NBQVE7OztJQUFSO0lBRUEsQ0FBQzs7Ozs7SUFFRCx1Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7SUFFbEMsQ0FBQzs7Z0JBbERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLHNYQVdUOzZCQUNRLDZRQWNSO2lCQUNGOzs7Ozt1QkFHRSxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsS0FBSzt5QkFDTCxNQUFNO3VCQUNOLE1BQU07MEJBQ04sS0FBSzs7SUFpQlIsd0JBQUM7Q0FBQSxBQXRERCxJQXNEQztTQXhCWSxpQkFBaUI7OztJQUU1QixpQ0FBMkI7O0lBQzNCLGtDQUF5Qjs7SUFDekIsd0NBQStCOztJQUMvQixtQ0FBc0M7O0lBQ3RDLGlDQUFvQzs7SUFDcEMsb0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lvLXRleHRhcmVhJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgICBbbmFtZV09XCJuYW1lXCJcclxuICAgICAgICAgICAgICBbdmFsdWVdPVwidmFsdWVcIlxyXG4gICAgICAgICAgICAgIFtjbGFzcy5pbnZhbGlkXT1cImludmFsaWRcIlxyXG4gICAgICAgICAgICAgIGNvbHM9XCIxXCIgcm93cz1cIjFcIlxyXG4gICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgKGNoYW5nZSk9XCIkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7IGNoYW5nZS5lbWl0KCRldmVudC50YXJnZXQudmFsdWUpO1wiXHJcbiAgICAgICAgICAgICAgKGJsdXIpPVwiYmx1ci5lbWl0KClcIlxyXG4gICAgICA+PC90ZXh0YXJlYT5cclxuICBgLFxyXG4gIHN0eWxlczogW2BcclxuICAgICAgOmhvc3Qge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICB9XHJcbiAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRleHRhcmVhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHZhbHVlOiBhbnkgPSAnJztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogYW55ID0gJyc7XHJcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBASW5wdXQoKSBpbnZhbGlkOiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTWFpbiBGdW5jdGlvbnMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxufVxyXG4iXX0=