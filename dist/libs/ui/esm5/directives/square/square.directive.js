"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
        { type: core_1.Directive, args: [{
                    selector: '[square]'
                },] }
    ];
    /** @nocollapse */
    SquareDirective.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: core_1.Renderer2 }
    ]; };
    SquareDirective.propDecorators = {
        onResize: [{ type: core_1.HostListener, args: ['window:resize',] }]
    };
    return SquareDirective;
}());
exports.SquareDirective = SquareDirective;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3F1YXJlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvc3F1YXJlL3NxdWFyZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0NBU3VCO0FBRXZCO0lBVUUseUJBQ1UsTUFBa0IsRUFDbEIsU0FBb0I7UUFGOUIsaUJBSUM7UUFIUyxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ2xCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFVOUIsZ0JBQVcsR0FBRyxVQUFDLE1BQW1CO1lBQ2hDLElBQUksQ0FBQyxNQUFNO2dCQUFFLE9BQU87WUFFcEIsVUFBVSxDQUFDO2dCQUNULEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLFFBQVEsRUFBSyxLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLE9BQUksQ0FBQyxDQUFDO1lBQzdHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNSLENBQUMsQ0FBQztJQWRGLENBQUM7Ozs7SUFSRCxrQ0FBUTs7O0lBRFI7UUFFRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7OztJQVNELDRDQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzlDLENBQUM7O2dCQW5CRixnQkFBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO2lCQUNyQjs7OztnQkFUQyxpQkFBVTtnQkFJVixnQkFBUzs7OzJCQVFSLG1CQUFZLFNBQUMsZUFBZTs7SUF5Qi9CLHNCQUFDO0NBQUEsQUE5QkQsSUE4QkM7QUEzQlksMENBQWU7OztJQW1CMUIsc0NBTUU7Ozs7O0lBakJBLGlDQUEwQjs7Ozs7SUFDMUIsb0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tzcXVhcmVdJ1xufSlcbmV4cG9ydCBjbGFzcyBTcXVhcmVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkIHtcblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcbiAgb25SZXNpemUoKSB7XG4gICAgdGhpcy5tYXRjaEhlaWdodCh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gIH1cblxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICB0aGlzLm1hdGNoSGVpZ2h0KHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cblxuICBtYXRjaEhlaWdodCA9IChwYXJlbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgaWYgKCFwYXJlbnQpIHJldHVybjtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGAke3RoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGh9cHhgKTtcbiAgICB9LCAwKTtcbiAgfTtcblxufVxuIl19