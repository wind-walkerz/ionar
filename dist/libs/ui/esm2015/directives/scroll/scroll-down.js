/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
export class ScrollDownDirective {
    /**
     * @param {?} _elRef
     * @param {?} _renderer
     */
    constructor(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._elRef.nativeElement.scrollTop = this._elRef.nativeElement.scrollHeight;
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this._elRef.nativeElement.scrollTop = this._elRef.nativeElement.scrollHeight;
    }
}
ScrollDownDirective.decorators = [
    { type: Directive, args: [{
                selector: '[scroll-down]'
            },] }
];
/** @nocollapse */
ScrollDownDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
ScrollDownDirective.propDecorators = {
    active: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ScrollDownDirective.prototype.active;
    /**
     * @type {?}
     * @private
     */
    ScrollDownDirective.prototype._elRef;
    /**
     * @type {?}
     * @private
     */
    ScrollDownDirective.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWRvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3Njcm9sbC9zY3JvbGwtZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLFNBQVMsRUFDVCxVQUFVLEVBQ0ksS0FBSyxFQUduQixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFLdkIsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFLOUIsWUFDVSxNQUFrQixFQUNsQixTQUFvQjtRQURwQixXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ2xCLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFFOUIsQ0FBQzs7OztJQUVILFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFBO0lBQzlFLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQTtJQUM5RSxDQUFDOzs7WUFwQkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2FBQzFCOzs7O1lBVEMsVUFBVTtZQUlWLFNBQVM7OztxQkFRUixLQUFLOzs7O0lBQU4scUNBQW9COzs7OztJQUlsQixxQ0FBMEI7Ozs7O0lBQzFCLHdDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RMaXN0ZW5lciwgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBSZW5kZXJlcjJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3Njcm9sbC1kb3duXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNjcm9sbERvd25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0NoZWNrZWQge1xyXG5cclxuICBASW5wdXQoKSBhY3RpdmU6IGFueVxyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9lbFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcclxuICApIHtcclxuICB9XHJcblxyXG5uZ09uSW5pdCgpOiB2b2lkIHtcclxuICB0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0XHJcbn1cclxuXHJcbm5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcclxuICB0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbFRvcCA9IHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0XHJcbn1cclxuXHJcbn1cclxuIl19