/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
export class SquareDirective {
    /**
     * @param {?} _elRef
     * @param {?} _renderer
     */
    constructor(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.matchHeight = (parent) => {
            if (!parent)
                return;
            setTimeout(() => {
                this._renderer.setStyle(this._elRef.nativeElement, 'height', `${this._elRef.nativeElement.offsetWidth}px`);
            }, 0);
        };
    }
    /**
     * @return {?}
     */
    onResize() {
        this.matchHeight(this._elRef.nativeElement);
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this.matchHeight(this._elRef.nativeElement);
    }
}
SquareDirective.decorators = [
    { type: Directive, args: [{
                selector: '[square]'
            },] }
];
/** @nocollapse */
SquareDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
SquareDirective.propDecorators = {
    onResize: [{ type: HostListener, args: ['window:resize',] }]
};
if (false) {
    /** @type {?} */
    SquareDirective.prototype.matchHeight;
    /**
     * @type {?}
     * @private
     */
    SquareDirective.prototype._elRef;
    /**
     * @type {?}
     * @private
     */
    SquareDirective.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3F1YXJlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvc3F1YXJlL3NxdWFyZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFHTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFHWixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFLdkIsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBTzFCLFlBQ1UsTUFBa0IsRUFDbEIsU0FBb0I7UUFEcEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUNsQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBVTlCLGdCQUFXLEdBQUcsQ0FBQyxNQUFtQixFQUFFLEVBQUU7WUFDcEMsSUFBSSxDQUFDLE1BQU07Z0JBQUUsT0FBTztZQUVwQixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7WUFDN0csQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ1IsQ0FBQyxDQUFDO0lBZEYsQ0FBQzs7OztJQVJELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7OztJQVNELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTthQUNyQjs7OztZQVRDLFVBQVU7WUFJVixTQUFTOzs7dUJBUVIsWUFBWSxTQUFDLGVBQWU7Ozs7SUFpQjdCLHNDQU1FOzs7OztJQWpCQSxpQ0FBMEI7Ozs7O0lBQzFCLG9DQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIEFmdGVyVmlld0luaXQsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgSG9zdExpc3RlbmVyLFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc3F1YXJlXSdcbn0pXG5leHBvcnQgY2xhc3MgU3F1YXJlRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScpXG4gIG9uUmVzaXplKCkge1xuICAgIHRoaXMubWF0Y2hIZWlnaHQodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICB9XG5cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XG4gICAgdGhpcy5tYXRjaEhlaWdodCh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG5cbiAgbWF0Y2hIZWlnaHQgPSAocGFyZW50OiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGlmICghcGFyZW50KSByZXR1cm47XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBgJHt0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRofXB4YCk7XG4gICAgfSwgMCk7XG4gIH07XG5cbn1cbiJdfQ==