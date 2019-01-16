"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FormGroup_1 = require("../models/FormGroup");
var SubmitDirective = /** @class */ (function () {
    function SubmitDirective(_elRef) {
        var _this = this;
        this._elRef = _elRef;
        this.disabled = false;
        this.onClick = function (e) {
            if (!_this.disabled) {
                _this._formGr.submit();
            }
        };
    }
    /**
     * @return {?}
     */
    SubmitDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // console.log(this._formGr)
    };
    /**
     * @return {?}
     */
    SubmitDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        // console.log(this._formGr)
    };
    /**
     * @return {?}
     */
    SubmitDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    SubmitDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[submitForm]'
                },] }
    ];
    /** @nocollapse */
    SubmitDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef }
    ]; };
    SubmitDirective.propDecorators = {
        _formGr: [{ type: core_1.Input, args: ['submitForm',] }],
        disabled: [{ type: core_1.Input }],
        onClick: [{ type: core_1.HostListener, args: ['click', ['$event'],] }]
    };
    return SubmitDirective;
}());
exports.SubmitDirective = SubmitDirective;
if (false) {
    /**
     * @type {?}
     * @private
     */
    SubmitDirective.prototype._formGr;
    /** @type {?} */
    SubmitDirective.prototype.disabled;
    /** @type {?} */
    SubmitDirective.prototype.onClick;
    /**
     * @type {?}
     * @private
     */
    SubmitDirective.prototype._elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWl0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9mb3JtLyIsInNvdXJjZXMiOlsiY29yZS9kaXJlY3RpdmVzL3N1Ym1pdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0NBQXlHO0FBQ3pHLGlEQUFnRDtBQUVoRDtJQWtCRSx5QkFBb0IsTUFBa0I7UUFBdEMsaUJBRUM7UUFGbUIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQVo3QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBR25DLFlBQU8sR0FBRyxVQUFDLENBQWE7WUFFdEIsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBRWxCLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDdkI7UUFFSCxDQUFDLENBQUM7SUFJRixDQUFDOzs7O0lBR0Qsa0NBQVE7OztJQUFSO1FBQ0UsNEJBQTRCO0lBQzlCLENBQUM7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7UUFDRSw0QkFBNEI7SUFDOUIsQ0FBQzs7OztJQUVELHFDQUFXOzs7SUFBWDtJQUVBLENBQUM7O2dCQWpDRixnQkFBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO2lCQUN6Qjs7OztnQkFMbUIsaUJBQVU7OzswQkFRM0IsWUFBSyxTQUFDLFlBQVk7MkJBQ2xCLFlBQUs7MEJBRUwsbUJBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBNEJuQyxzQkFBQztDQUFBLEFBcENELElBb0NDO0FBakNZLDBDQUFlOzs7Ozs7SUFFMUIsa0NBQWdEOztJQUNoRCxtQ0FBbUM7O0lBRW5DLGtDQVFFOzs7OztJQUVVLGlDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnLi4vbW9kZWxzL0Zvcm1Hcm91cCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tzdWJtaXRGb3JtXSdcbn0pXG5leHBvcnQgY2xhc3MgU3VibWl0RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCdzdWJtaXRGb3JtJykgcHJpdmF0ZSBfZm9ybUdyOiBGb3JtR3JvdXA7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBCb29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBvbkNsaWNrID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcblxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuXG4gICAgICB0aGlzLl9mb3JtR3Iuc3VibWl0KCk7XG4gICAgfVxuXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYpIHtcblxuICB9XG5cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9mb3JtR3IpXG4gIH1cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9mb3JtR3IpXG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcblxuICB9XG5cblxufVxuIl19