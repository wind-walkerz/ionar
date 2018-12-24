/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { FormGroup } from '../models/FormGroup';
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
        { type: Directive, args: [{
                    selector: '[submitForm]'
                },] }
    ];
    /** @nocollapse */
    SubmitDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SubmitDirective.propDecorators = {
        _formGr: [{ type: Input, args: ['submitForm',] }],
        disabled: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return SubmitDirective;
}());
export { SubmitDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWl0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9mb3JtLyIsInNvdXJjZXMiOlsiY29yZS9kaXJlY3RpdmVzL3N1Ym1pdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVoRDtJQWtCRSx5QkFBb0IsTUFBa0I7UUFBdEMsaUJBRUM7UUFGbUIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQVo3QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBR25DLFlBQU8sR0FBRyxVQUFDLENBQWE7WUFFdEIsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBRWxCLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDdkI7UUFFSCxDQUFDLENBQUM7SUFJRixDQUFDOzs7O0lBR0Qsa0NBQVE7OztJQUFSO1FBQ0UsNEJBQTRCO0lBQzlCLENBQUM7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7UUFDRSw0QkFBNEI7SUFDOUIsQ0FBQzs7OztJQUVELHFDQUFXOzs7SUFBWDtJQUVBLENBQUM7O2dCQWpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7aUJBQ3pCOzs7O2dCQUxtQixVQUFVOzs7MEJBUTNCLEtBQUssU0FBQyxZQUFZOzJCQUNsQixLQUFLOzBCQUVMLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBNEJuQyxzQkFBQztDQUFBLEFBcENELElBb0NDO1NBakNZLGVBQWU7Ozs7OztJQUUxQixrQ0FBZ0Q7O0lBQ2hELG1DQUFtQzs7SUFFbkMsa0NBUUU7Ozs7O0lBRVUsaUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICcuLi9tb2RlbHMvRm9ybUdyb3VwJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3N1Ym1pdEZvcm1dJ1xufSlcbmV4cG9ydCBjbGFzcyBTdWJtaXREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoJ3N1Ym1pdEZvcm0nKSBwcml2YXRlIF9mb3JtR3I6IEZvcm1Hcm91cDtcbiAgQElucHV0KCkgZGlzYWJsZWQ6IEJvb2xlYW4gPSBmYWxzZTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIG9uQ2xpY2sgPSAoZTogTW91c2VFdmVudCkgPT4ge1xuXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG5cbiAgICAgIHRoaXMuX2Zvcm1Hci5zdWJtaXQoKTtcbiAgICB9XG5cbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbFJlZjogRWxlbWVudFJlZikge1xuXG4gIH1cblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1HcilcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2Zvcm1HcilcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuXG4gIH1cblxuXG59XG4iXX0=