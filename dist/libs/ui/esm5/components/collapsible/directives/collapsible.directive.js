"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var utility_1 = require("@ionar/utility");
var CollapsibleDirective = /** @class */ (function () {
    function CollapsibleDirective() {
        this.change$ = new rxjs_1.Subject();
        this.collapsed = false;
        this.customToggler = false;
    }
    /**
     * @return {?}
     */
    CollapsibleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.change$.pipe(utility_1.untilDestroyed(this)).subscribe(function (collapsed) {
            _this.collapsed = collapsed;
        });
    };
    /**
     * @return {?}
     */
    CollapsibleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    CollapsibleDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[ioCollapsible]'
                },] }
    ];
    CollapsibleDirective.propDecorators = {
        ioCollapsible: [{ type: core_1.Input }]
    };
    return CollapsibleDirective;
}());
exports.CollapsibleDirective = CollapsibleDirective;
if (false) {
    /** @type {?} */
    CollapsibleDirective.prototype.ioCollapsible;
    /** @type {?} */
    CollapsibleDirective.prototype.change$;
    /** @type {?} */
    CollapsibleDirective.prototype.collapsed;
    /** @type {?} */
    CollapsibleDirective.prototype.customToggler;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2libGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9jb2xsYXBzaWJsZS9kaXJlY3RpdmVzL2NvbGxhcHNpYmxlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzQ0FFdUI7QUFDdkIsNkJBQStCO0FBQy9CLDBDQUFnRDtBQUdoRDtJQUFBO1FBS0UsWUFBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFFeEIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUUzQixrQkFBYSxHQUFZLEtBQUssQ0FBQztJQVVqQyxDQUFDOzs7O0lBUkMsdUNBQVE7OztJQUFSO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyx3QkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsU0FBa0I7WUFDbkUsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsMENBQVc7OztJQUFYO0lBQ0EsQ0FBQzs7Z0JBbEJGLGdCQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7OztnQ0FFRSxZQUFLOztJQWVSLDJCQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFoQlksb0RBQW9COzs7SUFDL0IsNkNBQXVCOztJQUN2Qix1Q0FBd0I7O0lBRXhCLHlDQUEyQjs7SUFFM0IsNkNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBEaXJlY3RpdmUsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHVudGlsRGVzdHJveWVkIH0gZnJvbSAnQGlvbmFyL3V0aWxpdHknO1xuXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpb0NvbGxhcHNpYmxlXSdcbn0pXG5leHBvcnQgY2xhc3MgQ29sbGFwc2libGVEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGlvQ29sbGFwc2libGU7XG4gIGNoYW5nZSQgPSBuZXcgU3ViamVjdCgpO1xuXG4gIGNvbGxhcHNlZDogQm9vbGVhbiA9IGZhbHNlO1xuXG4gIGN1c3RvbVRvZ2dsZXI6IEJvb2xlYW4gPSBmYWxzZTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZSQucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSkuc3Vic2NyaWJlKChjb2xsYXBzZWQ6IEJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuY29sbGFwc2VkID0gY29sbGFwc2VkO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gIH1cbn1cblxuIl19