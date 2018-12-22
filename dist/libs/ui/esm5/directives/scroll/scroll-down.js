/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
var ScrollDownDirective = /** @class */ (function () {
    function ScrollDownDirective(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    ScrollDownDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._elRef.nativeElement.scrollTop = this._elRef.nativeElement.scrollHeight;
    };
    /**
     * @return {?}
     */
    ScrollDownDirective.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        this._elRef.nativeElement.scrollTop = this._elRef.nativeElement.scrollHeight;
    };
    ScrollDownDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[scroll-down]'
                },] }
    ];
    /** @nocollapse */
    ScrollDownDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    ScrollDownDirective.propDecorators = {
        active: [{ type: Input }]
    };
    return ScrollDownDirective;
}());
export { ScrollDownDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLWRvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3Njcm9sbC9zY3JvbGwtZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLFNBQVMsRUFDVCxVQUFVLEVBQ0ksS0FBSyxFQUduQixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkI7SUFRRSw2QkFDVSxNQUFrQixFQUNsQixTQUFvQjtRQURwQixXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ2xCLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFFOUIsQ0FBQzs7OztJQUVILHNDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUE7SUFDOUUsQ0FBQzs7OztJQUVELGdEQUFrQjs7O0lBQWxCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQTtJQUM5RSxDQUFDOztnQkFwQkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO2lCQUMxQjs7OztnQkFUQyxVQUFVO2dCQUlWLFNBQVM7Ozt5QkFRUixLQUFLOztJQWlCUiwwQkFBQztDQUFBLEFBdEJELElBc0JDO1NBbkJZLG1CQUFtQjs7O0lBRTlCLHFDQUFvQjs7Ozs7SUFJbEIscUNBQTBCOzs7OztJQUMxQix3Q0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0NoZWNrZWQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0TGlzdGVuZXIsIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tzY3JvbGwtZG93bl0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY3JvbGxEb3duRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkIHtcclxuXHJcbiAgQElucHV0KCkgYWN0aXZlOiBhbnlcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgfVxyXG5cclxubmdPbkluaXQoKTogdm9pZCB7XHJcbiAgdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSB0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodFxyXG59XHJcblxyXG5uZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XHJcbiAgdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxUb3AgPSB0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LnNjcm9sbEhlaWdodFxyXG59XHJcblxyXG59XHJcbiJdfQ==