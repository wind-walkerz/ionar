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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3F1YXJlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvc3F1YXJlL3NxdWFyZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFHTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFHWixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFLdkIsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBTzFCLFlBQ1UsTUFBa0IsRUFDbEIsU0FBb0I7UUFEcEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUNsQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBVTlCLGdCQUFXLEdBQUcsQ0FBQyxNQUFtQixFQUFFLEVBQUU7WUFDcEMsSUFBSSxDQUFDLE1BQU07Z0JBQUUsT0FBTztZQUVwQixVQUFVLENBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7WUFDN0csQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ1IsQ0FBQyxDQUFDO0lBZEYsQ0FBQzs7OztJQVJELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7OztJQVNELGtCQUFrQjtRQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTthQUNyQjs7OztZQVRDLFVBQVU7WUFJVixTQUFTOzs7dUJBUVIsWUFBWSxTQUFDLGVBQWU7Ozs7SUFpQjdCLHNDQU1FOzs7OztJQWpCQSxpQ0FBMEI7Ozs7O0lBQzFCLG9DQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbc3F1YXJlXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFNxdWFyZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQge1xyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcclxuICBvblJlc2l6ZSgpIHtcclxuICAgIHRoaXMubWF0Y2hIZWlnaHQodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxyXG4gICkge1xyXG4gIH1cclxuXHJcblxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMubWF0Y2hIZWlnaHQodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgbWF0Y2hIZWlnaHQgPSAocGFyZW50OiBIVE1MRWxlbWVudCkgPT4ge1xyXG4gICAgaWYgKCFwYXJlbnQpIHJldHVybjtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGAke3RoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGh9cHhgKTtcclxuICAgIH0sIDApO1xyXG4gIH07XHJcblxyXG59XHJcbiJdfQ==