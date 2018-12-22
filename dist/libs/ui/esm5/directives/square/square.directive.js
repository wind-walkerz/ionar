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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3F1YXJlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvc3F1YXJlL3NxdWFyZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFHTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFHWixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkI7SUFVRSx5QkFDVSxNQUFrQixFQUNsQixTQUFvQjtRQUY5QixpQkFJQztRQUhTLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDbEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQVU5QixnQkFBVyxHQUFHLFVBQUMsTUFBbUI7WUFDaEMsSUFBSSxDQUFDLE1BQU07Z0JBQUUsT0FBTztZQUVwQixVQUFVLENBQUM7Z0JBQ1QsS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFLLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFdBQVcsT0FBSSxDQUFDLENBQUM7WUFDN0csQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ1IsQ0FBQyxDQUFDO0lBZEYsQ0FBQzs7OztJQVJELGtDQUFROzs7SUFEUjtRQUVFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7O0lBU0QsNENBQWtCOzs7SUFBbEI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Z0JBbkJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtpQkFDckI7Ozs7Z0JBVEMsVUFBVTtnQkFJVixTQUFTOzs7MkJBUVIsWUFBWSxTQUFDLGVBQWU7O0lBeUIvQixzQkFBQztDQUFBLEFBOUJELElBOEJDO1NBM0JZLGVBQWU7OztJQW1CMUIsc0NBTUU7Ozs7O0lBakJBLGlDQUEwQjs7Ozs7SUFDMUIsb0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdDaGVja2VkLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tzcXVhcmVdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU3F1YXJlRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxyXG4gIG9uUmVzaXplKCkge1xyXG4gICAgdGhpcy5tYXRjaEhlaWdodCh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuXHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5tYXRjaEhlaWdodCh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICB9XHJcblxyXG5cclxuICBtYXRjaEhlaWdodCA9IChwYXJlbnQ6IEhUTUxFbGVtZW50KSA9PiB7XHJcbiAgICBpZiAoIXBhcmVudCkgcmV0dXJuO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgYCR7dGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aH1weGApO1xyXG4gICAgfSwgMCk7XHJcbiAgfTtcclxuXHJcbn1cclxuIl19