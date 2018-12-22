/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
var FieldTemplateDirective = /** @class */ (function () {
    function FieldTemplateDirective(_vcRef, _tplRef) {
        this._vcRef = _vcRef;
        this._tplRef = _tplRef;
        this.name = '';
    }
    /**
     * @return {?}
     */
    FieldTemplateDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FieldTemplateDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._vcRef.clear();
    };
    FieldTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[fieldTemplate]'
                },] }
    ];
    /** @nocollapse */
    FieldTemplateDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: TemplateRef }
    ]; };
    FieldTemplateDirective.propDecorators = {
        name: [{ type: Input }]
    };
    return FieldTemplateDirective;
}());
export { FieldTemplateDirective };
if (false) {
    /** @type {?} */
    FieldTemplateDirective.prototype.name;
    /**
     * @type {?}
     * @private
     */
    FieldTemplateDirective.prototype._vcRef;
    /**
     * @type {?}
     * @private
     */
    FieldTemplateDirective.prototype._tplRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtdGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL2RpcmVjdGl2ZXMvZmllbGQtdGVtcGxhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBR00sU0FBUyxFQUFFLEtBQUssRUFDbkIsV0FBVyxFQUFFLGdCQUFnQixFQUN0QyxNQUFNLGVBQWUsQ0FBQztBQUd2QjtJQU9FLGdDQUNVLE1BQXdCLEVBQ3hCLE9BQXlCO1FBRHpCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBSjFCLFNBQUksR0FBUSxFQUFFLENBQUM7SUFNeEIsQ0FBQzs7OztJQUVELHlDQUFROzs7SUFBUjtJQUVBLENBQUM7Ozs7SUFFRCxnREFBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RCLENBQUM7O2dCQW5CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtpQkFDNUI7Ozs7Z0JBTnNCLGdCQUFnQjtnQkFBN0IsV0FBVzs7O3VCQVNsQixLQUFLOztJQWVSLDZCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FqQlksc0JBQXNCOzs7SUFFakMsc0NBQXdCOzs7OztJQUd0Qix3Q0FBZ0M7Ozs7O0lBQ2hDLHlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsIERpcmVjdGl2ZSwgSW5wdXQsXHJcbiAgT25Jbml0LCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2ZpZWxkVGVtcGxhdGVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgRmllbGRUZW1wbGF0ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIG5hbWU6IGFueSA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX3ZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSBfdHBsUmVmOiBUZW1wbGF0ZVJlZjxhbnk+XHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLl92Y1JlZi5jbGVhcigpO1xyXG4gIH1cclxufVxyXG4iXX0=