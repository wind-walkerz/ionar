"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RemoveHostElementDirective = /** @class */ (function () {
    function RemoveHostElementDirective(_vcRef) {
        this._vcRef = _vcRef;
    }
    /**
     * @return {?}
     */
    RemoveHostElementDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nativeElement = this._vcRef.element.nativeElement;
        /** @type {?} */
        var parentElement = nativeElement.parentElement;
        if (parentElement) {
            // move all children out of the element
            while (nativeElement.firstChild) {
                parentElement.insertBefore(nativeElement.firstChild, nativeElement);
            }
            // remove the empty element(the host)
            parentElement.removeChild(nativeElement);
        }
    };
    RemoveHostElementDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[removeHostElement]'
                },] }
    ];
    /** @nocollapse */
    RemoveHostElementDirective.ctorParameters = function () { return [
        { type: core_1.ViewContainerRef }
    ]; };
    return RemoveHostElementDirective;
}());
exports.RemoveHostElementDirective = RemoveHostElementDirective;
if (false) {
    /**
     * @type {?}
     * @private
     */
    RemoveHostElementDirective.prototype._vcRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWhvc3QtZWxlbWVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3JlbW92ZUhvc3RFbGVtZW50L3JlbW92ZS1ob3N0LWVsZW1lbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNDQUFtRjtBQUVuRjtJQUtFLG9DQUNVLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBRWxDLENBQUM7Ozs7SUFFRCxvREFBZTs7O0lBQWY7O1lBQ1EsYUFBYSxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhOztZQUNsRSxhQUFhLEdBQWdCLGFBQWEsQ0FBQyxhQUFhO1FBRzFELElBQUksYUFBYSxFQUFFO1lBRWpCLHVDQUF1QztZQUN2QyxPQUFPLGFBQWEsQ0FBQyxVQUFVLEVBQUU7Z0JBQy9CLGFBQWEsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQzthQUNyRTtZQUNELHFDQUFxQztZQUNyQyxhQUFhLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzFDO0lBQ0gsQ0FBQzs7Z0JBeEJGLGdCQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtpQkFDaEM7Ozs7Z0JBSjBDLHVCQUFnQjs7SUE0QjNELGlDQUFDO0NBQUEsQUExQkQsSUEwQkM7QUF2QlksZ0VBQTBCOzs7Ozs7SUFHbkMsNENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBPbkluaXQsIFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3JlbW92ZUhvc3RFbGVtZW50XSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlbW92ZUhvc3RFbGVtZW50RGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfdmNSZWY6IFZpZXdDb250YWluZXJSZWZcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gdGhpcy5fdmNSZWYuZWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICBwYXJlbnRFbGVtZW50OiBIVE1MRWxlbWVudCA9IG5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuXHJcblxyXG4gICAgaWYgKHBhcmVudEVsZW1lbnQpIHtcclxuXHJcbiAgICAgIC8vIG1vdmUgYWxsIGNoaWxkcmVuIG91dCBvZiB0aGUgZWxlbWVudFxyXG4gICAgICB3aGlsZSAobmF0aXZlRWxlbWVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgcGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUobmF0aXZlRWxlbWVudC5maXJzdENoaWxkLCBuYXRpdmVFbGVtZW50KTtcclxuICAgICAgfVxyXG4gICAgICAvLyByZW1vdmUgdGhlIGVtcHR5IGVsZW1lbnQodGhlIGhvc3QpXHJcbiAgICAgIHBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQobmF0aXZlRWxlbWVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=