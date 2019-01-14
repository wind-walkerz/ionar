/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ViewContainerRef } from '@angular/core';
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
        { type: Directive, args: [{
                    selector: '[removeHostElement]'
                },] }
    ];
    /** @nocollapse */
    RemoveHostElementDirective.ctorParameters = function () { return [
        { type: ViewContainerRef }
    ]; };
    return RemoveHostElementDirective;
}());
export { RemoveHostElementDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    RemoveHostElementDirective.prototype._vcRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3ZlLWhvc3QtZWxlbWVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL3JlbW92ZUhvc3RFbGVtZW50L3JlbW92ZS1ob3N0LWVsZW1lbnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBVSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRjtJQUtFLG9DQUNVLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBRWxDLENBQUM7Ozs7SUFFRCxvREFBZTs7O0lBQWY7O1lBQ1EsYUFBYSxHQUFnQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhOztZQUNsRSxhQUFhLEdBQWdCLGFBQWEsQ0FBQyxhQUFhO1FBRzFELElBQUksYUFBYSxFQUFFO1lBRWpCLHVDQUF1QztZQUN2QyxPQUFPLGFBQWEsQ0FBQyxVQUFVLEVBQUU7Z0JBQy9CLGFBQWEsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsQ0FBQzthQUNyRTtZQUNELHFDQUFxQztZQUNyQyxhQUFhLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzFDO0lBQ0gsQ0FBQzs7Z0JBeEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO2lCQUNoQzs7OztnQkFKMEMsZ0JBQWdCOztJQTRCM0QsaUNBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQXZCWSwwQkFBMEI7Ozs7OztJQUduQyw0Q0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIE9uSW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbcmVtb3ZlSG9zdEVsZW1lbnRdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVtb3ZlSG9zdEVsZW1lbnREaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF92Y1JlZjogVmlld0NvbnRhaW5lclJlZlxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQgPSB0aGlzLl92Y1JlZi5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgIHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gbmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50O1xyXG5cclxuXHJcbiAgICBpZiAocGFyZW50RWxlbWVudCkge1xyXG5cclxuICAgICAgLy8gbW92ZSBhbGwgY2hpbGRyZW4gb3V0IG9mIHRoZSBlbGVtZW50XHJcbiAgICAgIHdoaWxlIChuYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBwYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShuYXRpdmVFbGVtZW50LmZpcnN0Q2hpbGQsIG5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHJlbW92ZSB0aGUgZW1wdHkgZWxlbWVudCh0aGUgaG9zdClcclxuICAgICAgcGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChuYXRpdmVFbGVtZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==