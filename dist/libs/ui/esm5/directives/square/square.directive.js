/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
var SquareDirective = /** @class */ (function () {
    function SquareDirective(_elRef, _renderer) {
        var _this = this;
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.matchHeight = function (parent) {
            if (!parent)
                return;
            setTimeout(function () {
                _this._renderer.setStyle(_this._elRef.nativeElement, 'height', _this._elRef.nativeElement.offsetWidth + "px");
            }, 0);
        };
    }
    /**
     * @return {?}
     */
    SquareDirective.prototype.onResize = /**
     * @return {?}
     */
    function () {
        this.matchHeight(this._elRef.nativeElement);
    };
    /**
     * @return {?}
     */
    SquareDirective.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this.matchHeight(this._elRef.nativeElement);
    };
    SquareDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[square]'
                },] }
    ];
    /** @nocollapse */
    SquareDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    SquareDirective.propDecorators = {
        onResize: [{ type: HostListener, args: ['window:resize',] }]
    };
    return SquareDirective;
}());
export { SquareDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3F1YXJlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvc3F1YXJlL3NxdWFyZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFHTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFHWixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkI7SUFVRSx5QkFDVSxNQUFrQixFQUNsQixTQUFvQjtRQUY5QixpQkFJQztRQUhTLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDbEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQVU5QixnQkFBVyxHQUFHLFVBQUMsTUFBbUI7WUFDaEMsSUFBSSxDQUFDLE1BQU07Z0JBQUUsT0FBTztZQUVwQixVQUFVLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFLLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsT0FBSSxDQUFDLENBQUM7WUFDN0csQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ1IsQ0FBQyxDQUFDO0lBZEYsQ0FBQzs7OztJQVJELGtDQUFROzs7SUFEUjtRQUVFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7O0lBU0QsNENBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtpQkFDckI7Ozs7Z0JBVEMsVUFBVTtnQkFJVixTQUFTOzs7MkJBUVIsWUFBWSxTQUFDLGVBQWU7O0lBeUIvQixzQkFBQztDQUFBLEFBOUJELElBOEJDO1NBM0JZLGVBQWU7OztJQW1CMUIsc0NBTUU7Ozs7O0lBakJBLGlDQUEwQjs7Ozs7SUFDMUIsb0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tzcXVhcmVdJ1xufSlcbmV4cG9ydCBjbGFzcyBTcXVhcmVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkIHtcblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5tYXRjaEhlaWdodCh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gIH1cblxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLm1hdGNoSGVpZ2h0KHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cblxuICBtYXRjaEhlaWdodCA9IChwYXJlbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgaWYgKCFwYXJlbnQpIHJldHVybjtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGAke3RoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGh9cHhgKTtcbiAgICB9LCAwKTtcbiAgfTtcblxufVxuIl19