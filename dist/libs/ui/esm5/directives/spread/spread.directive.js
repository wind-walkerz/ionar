/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2, ViewContainerRef } from '@angular/core';
import _ from 'lodash';
var SpreadDirective = /** @class */ (function () {
    function SpreadDirective(_vcRef, _renderer, _elRef) {
        this._vcRef = _vcRef;
        this._renderer = _renderer;
        this._elRef = _elRef;
    }
    /**
     * @return {?}
     */
    SpreadDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SpreadDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (!this._vcRef['_data'].componentView) {
            _.forOwn(this._context, function (value, key) {
                if (!_this._elRef.nativeElement[key] || key === 'type')
                    (value instanceof Function)
                        ? _this._renderer.listen(_this._elRef.nativeElement, key, value)
                        : _this._renderer.setAttribute(_this._elRef.nativeElement, key, value);
            });
        }
    };
    SpreadDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[spread]'
                },] }
    ];
    /** @nocollapse */
    SpreadDirective.ctorParameters = function () { return [
        { type: ViewContainerRef },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    SpreadDirective.propDecorators = {
        _context: [{ type: Input, args: ['spread',] }]
    };
    return SpreadDirective;
}());
export { SpreadDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    SpreadDirective.prototype._context;
    /**
     * @type {?}
     * @private
     */
    SpreadDirective.prototype._vcRef;
    /**
     * @type {?}
     * @private
     */
    SpreadDirective.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    SpreadDirective.prototype._elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ByZWFkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvc3ByZWFkL3NwcmVhZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsVUFBVSxFQUNyQixLQUFLLEVBR0wsU0FBUyxFQUVULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFHdkI7SUFPRSx5QkFDVSxNQUF3QixFQUN4QixTQUFvQixFQUNwQixNQUFrQjtRQUZsQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQVk7SUFFNUIsQ0FBQzs7OztJQUVELGtDQUFROzs7SUFBUjtJQUVBLENBQUM7Ozs7O0lBRUQscUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQWxDLGlCQWFDO1FBWkMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsYUFBYSxFQUFFO1lBQ3ZDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFDLEtBQVUsRUFBRSxHQUFXO2dCQUU5QyxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxLQUFJLE1BQU07b0JBRWxELENBQUMsS0FBSyxZQUFZLFFBQVEsQ0FBQzt3QkFDekIsQ0FBQyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUM7d0JBQzlELENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDM0UsQ0FBQyxDQUFDLENBQUM7U0FFSjtJQUVILENBQUM7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7aUJBQ3JCOzs7O2dCQVBDLGdCQUFnQjtnQkFGaEIsU0FBUztnQkFKRSxVQUFVOzs7MkJBZ0JwQixLQUFLLFNBQUMsUUFBUTs7SUE0QmpCLHNCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0E5QlksZUFBZTs7Ozs7O0lBRTFCLG1DQUEwQzs7Ozs7SUFHeEMsaUNBQWdDOzs7OztJQUNoQyxvQ0FBNEI7Ozs7O0lBQzVCLGlDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgRGlyZWN0aXZlLCBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3NwcmVhZF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTcHJlYWREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgnc3ByZWFkJykgcHJpdmF0ZSBfY29udGV4dDogT2JqZWN0O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX3ZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmXHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuX3ZjUmVmWydfZGF0YSddLmNvbXBvbmVudFZpZXcpIHtcclxuICAgICAgXy5mb3JPd24odGhpcy5fY29udGV4dCwgKHZhbHVlOiBhbnksIGtleTogc3RyaW5nKSA9PiB7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudFtrZXldIHx8IGtleT09PSAndHlwZScpXHJcblxyXG4gICAgICAgICAgKHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24pXHJcbiAgICAgICAgICAgID8gdGhpcy5fcmVuZGVyZXIubGlzdGVuKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsIGtleSwgdmFsdWUpXHJcbiAgICAgICAgICAgIDogdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsIGtleSwgdmFsdWUpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl19