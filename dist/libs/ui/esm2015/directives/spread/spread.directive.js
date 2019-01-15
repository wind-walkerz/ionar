/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2, ViewContainerRef } from '@angular/core';
import _ from 'lodash';
export class SpreadDirective {
    /**
     * @param {?} _vcRef
     * @param {?} _renderer
     * @param {?} _elRef
     */
    constructor(_vcRef, _renderer, _elRef) {
        this._vcRef = _vcRef;
        this._renderer = _renderer;
        this._elRef = _elRef;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this._vcRef['_data'].componentView) {
            _.forOwn(this._context, (value, key) => {
                if (!this._elRef.nativeElement[key] || key === 'type')
                    (value instanceof Function)
                        ? this._renderer.listen(this._elRef.nativeElement, key, value)
                        : this._renderer.setAttribute(this._elRef.nativeElement, key, value);
            });
        }
    }
}
SpreadDirective.decorators = [
    { type: Directive, args: [{
                selector: '[spread]'
            },] }
];
/** @nocollapse */
SpreadDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: Renderer2 },
    { type: ElementRef }
];
SpreadDirective.propDecorators = {
    _context: [{ type: Input, args: ['spread',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ByZWFkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvc3ByZWFkL3NwcmVhZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsVUFBVSxFQUNyQixLQUFLLEVBR0wsU0FBUyxFQUVULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFNdkIsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQUkxQixZQUNVLE1BQXdCLEVBQ3hCLFNBQW9CLEVBQ3BCLE1BQWtCO1FBRmxCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtJQUU1QixDQUFDOzs7O0lBRUQsUUFBUTtJQUVSLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsRUFBRTtZQUN2QyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFVLEVBQUUsR0FBVyxFQUFFLEVBQUU7Z0JBRWxELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLEtBQUksTUFBTTtvQkFFbEQsQ0FBQyxLQUFLLFlBQVksUUFBUSxDQUFDO3dCQUN6QixDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQzt3QkFDOUQsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMzRSxDQUFDLENBQUMsQ0FBQztTQUVKO0lBRUgsQ0FBQzs7O1lBL0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTthQUNyQjs7OztZQVBDLGdCQUFnQjtZQUZoQixTQUFTO1lBSkUsVUFBVTs7O3VCQWdCcEIsS0FBSyxTQUFDLFFBQVE7Ozs7Ozs7SUFBZixtQ0FBMEM7Ozs7O0lBR3hDLGlDQUFnQzs7Ozs7SUFDaEMsb0NBQTRCOzs7OztJQUM1QixpQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSwgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tzcHJlYWRdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3ByZWFkRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoJ3NwcmVhZCcpIHByaXZhdGUgX2NvbnRleHQ6IE9iamVjdDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF92Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIF9lbFJlZjogRWxlbWVudFJlZlxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl92Y1JlZlsnX2RhdGEnXS5jb21wb25lbnRWaWV3KSB7XHJcbiAgICAgIF8uZm9yT3duKHRoaXMuX2NvbnRleHQsICh2YWx1ZTogYW55LCBrZXk6IHN0cmluZykgPT4ge1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnRba2V5XSB8fCBrZXk9PT0gJ3R5cGUnKVxyXG5cclxuICAgICAgICAgICh2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uKVxyXG4gICAgICAgICAgICA/IHRoaXMuX3JlbmRlcmVyLmxpc3Rlbih0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCBrZXksIHZhbHVlKVxyXG4gICAgICAgICAgICA6IHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCBrZXksIHZhbHVlKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG59XHJcbiJdfQ==