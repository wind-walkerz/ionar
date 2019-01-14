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
                if (!_this._elRef.nativeElement[key])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ByZWFkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvc3ByZWFkL3NwcmVhZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsVUFBVSxFQUNyQixLQUFLLEVBR0wsU0FBUyxFQUVULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFHdkI7SUFPRSx5QkFDVSxNQUF3QixFQUN4QixTQUFvQixFQUNwQixNQUFrQjtRQUZsQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQVk7SUFFNUIsQ0FBQzs7OztJQUVELGtDQUFROzs7SUFBUjtJQUVBLENBQUM7Ozs7O0lBRUQscUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQWxDLGlCQVlDO1FBWEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsYUFBYSxFQUFFO1lBQ3ZDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFDLEtBQVUsRUFBRSxHQUFXO2dCQUM5QyxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDO29CQUVqQyxDQUFDLEtBQUssWUFBWSxRQUFRLENBQUM7d0JBQ3pCLENBQUMsQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDO3dCQUM5RCxDQUFDLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRTNFLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFFSCxDQUFDOztnQkE5QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO2lCQUNyQjs7OztnQkFQQyxnQkFBZ0I7Z0JBRmhCLFNBQVM7Z0JBSkUsVUFBVTs7OzJCQWdCcEIsS0FBSyxTQUFDLFFBQVE7O0lBMkJqQixzQkFBQztDQUFBLEFBaENELElBZ0NDO1NBN0JZLGVBQWU7Ozs7OztJQUUxQixtQ0FBMEM7Ozs7O0lBR3hDLGlDQUFnQzs7Ozs7SUFDaEMsb0NBQTRCOzs7OztJQUM1QixpQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSwgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tzcHJlYWRdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3ByZWFkRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoJ3NwcmVhZCcpIHByaXZhdGUgX2NvbnRleHQ6IE9iamVjdDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF92Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIF9lbFJlZjogRWxlbWVudFJlZlxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl92Y1JlZlsnX2RhdGEnXS5jb21wb25lbnRWaWV3KSB7XHJcbiAgICAgIF8uZm9yT3duKHRoaXMuX2NvbnRleHQsICh2YWx1ZTogYW55LCBrZXk6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudFtrZXldKVxyXG5cclxuICAgICAgICAgICh2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uKVxyXG4gICAgICAgICAgICA/IHRoaXMuX3JlbmRlcmVyLmxpc3Rlbih0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCBrZXksIHZhbHVlKVxyXG4gICAgICAgICAgICA6IHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCBrZXksIHZhbHVlKTtcclxuXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG59XHJcbiJdfQ==