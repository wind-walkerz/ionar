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
                if (!this._elRef.nativeElement[key])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ByZWFkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvc3ByZWFkL3NwcmVhZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsVUFBVSxFQUNyQixLQUFLLEVBR0wsU0FBUyxFQUVULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFNdkIsTUFBTSxPQUFPLGVBQWU7Ozs7OztJQUkxQixZQUNVLE1BQXdCLEVBQ3hCLFNBQW9CLEVBQ3BCLE1BQWtCO1FBRmxCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtJQUU1QixDQUFDOzs7O0lBRUQsUUFBUTtJQUVSLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLGFBQWEsRUFBRTtZQUN2QyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFVLEVBQUUsR0FBVyxFQUFFLEVBQUU7Z0JBQ2xELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7b0JBRWpDLENBQUMsS0FBSyxZQUFZLFFBQVEsQ0FBQzt3QkFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUM7d0JBQzlELENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFM0UsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUVILENBQUM7OztZQTlCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7YUFDckI7Ozs7WUFQQyxnQkFBZ0I7WUFGaEIsU0FBUztZQUpFLFVBQVU7Ozt1QkFnQnBCLEtBQUssU0FBQyxRQUFROzs7Ozs7O0lBQWYsbUNBQTBDOzs7OztJQUd4QyxpQ0FBZ0M7Ozs7O0lBQ2hDLG9DQUE0Qjs7Ozs7SUFDNUIsaUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbc3ByZWFkXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNwcmVhZERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuXHJcbiAgQElucHV0KCdzcHJlYWQnKSBwcml2YXRlIF9jb250ZXh0OiBPYmplY3Q7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWZcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5fdmNSZWZbJ19kYXRhJ10uY29tcG9uZW50Vmlldykge1xyXG4gICAgICBfLmZvck93bih0aGlzLl9jb250ZXh0LCAodmFsdWU6IGFueSwga2V5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnRba2V5XSlcclxuXHJcbiAgICAgICAgICAodmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbilcclxuICAgICAgICAgICAgPyB0aGlzLl9yZW5kZXJlci5saXN0ZW4odGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwga2V5LCB2YWx1ZSlcclxuICAgICAgICAgICAgOiB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwga2V5LCB2YWx1ZSk7XHJcblxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=