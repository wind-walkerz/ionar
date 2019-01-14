/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewContainerRef, ChangeDetectorRef, Input } from '@angular/core';
import { removeHost } from '../../utils';
var DefaultContentComponent = /** @class */ (function () {
    function DefaultContentComponent(_elRef, _vcRef, cd) {
        this._elRef = _elRef;
        this._vcRef = _vcRef;
        this.cd = cd;
        this.isHostRemoved = false;
    }
    Object.defineProperty(DefaultContentComponent.prototype, "template", {
        set: /**
         * @param {?} view
         * @return {?}
         */
        function (view) {
            this._vcRef.clear();
            this._vcRef.createEmbeddedView(view.template, view.context);
        },
        enumerable: true,
        configurable: true
    });
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    DefaultContentComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DefaultContentComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.context) {
            this.template = {
                template: this._vcRef['_view'].context.defaultContent,
                context: { $implicit: this.context }
            };
            if (!this.isHostRemoved) {
                removeHost(this._elRef);
            }
            this.isHostRemoved = true;
            this.cd.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    DefaultContentComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    DefaultContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'default-content',
                    template: ""
                }] }
    ];
    /** @nocollapse */
    DefaultContentComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ChangeDetectorRef }
    ]; };
    DefaultContentComponent.propDecorators = {
        context: [{ type: Input }]
    };
    return DefaultContentComponent;
}());
export { DefaultContentComponent };
if (false) {
    /** @type {?} */
    DefaultContentComponent.prototype.context;
    /** @type {?} */
    DefaultContentComponent.prototype.isHostRemoved;
    /**
     * @type {?}
     * @private
     */
    DefaultContentComponent.prototype._elRef;
    /**
     * @type {?}
     * @private
     */
    DefaultContentComponent.prototype._vcRef;
    /**
     * @type {?}
     * @private
     */
    DefaultContentComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RlZmF1bHQtY29udGVudC9kZWZhdWx0LWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULFVBQVUsRUFDVixnQkFBZ0IsRUFFaEIsaUJBQWlCLEVBQ2pCLEtBQUssRUFHTixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXpDO0lBb0JFLGlDQUNVLE1BQWtCLEVBQ2xCLE1BQXdCLEVBQ3hCLEVBQXFCO1FBRnJCLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFiL0Isa0JBQWEsR0FBWSxLQUFLLENBQUM7SUFlL0IsQ0FBQztJQWJELHNCQUFJLDZDQUFROzs7OztRQUFaLFVBQWEsSUFFWjtZQUNDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5RCxDQUFDOzs7T0FBQTtJQVdELHdIQUF3SDs7Ozs7SUFFeEgsMENBQVE7Ozs7O0lBQVI7SUFHQSxDQUFDOzs7OztJQUVELDZDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsR0FBRztnQkFDZCxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYztnQkFDckQsT0FBTyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUU7YUFDckMsQ0FBQztZQUdGLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUN2QixVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3pCO1lBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN6QjtJQUVILENBQUM7Ozs7SUFHRCw2Q0FBVzs7O0lBQVg7SUFDQSxDQUFDOztnQkF0REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxFQUFFO2lCQUNiOzs7O2dCQWZDLFVBQVU7Z0JBQ1YsZ0JBQWdCO2dCQUVoQixpQkFBaUI7OzswQkFpQmhCLEtBQUs7O0lBbURSLDhCQUFDO0NBQUEsQUEzREQsSUEyREM7U0F2RFksdUJBQXVCOzs7SUFJbEMsMENBQW1DOztJQUVuQyxnREFBK0I7Ozs7O0lBVzdCLHlDQUEwQjs7Ozs7SUFDMUIseUNBQWdDOzs7OztJQUNoQyxxQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgVmlld0NvbnRhaW5lclJlZixcclxuICBUZW1wbGF0ZVJlZixcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyByZW1vdmVIb3N0IH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRDb250ZXh0IH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9Jb0Fic3RyYWN0VUknO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZGVmYXVsdC1jb250ZW50JyxcclxuICB0ZW1wbGF0ZTogYGBcclxufSlcclxuZXhwb3J0IGNsYXNzIERlZmF1bHRDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBASW5wdXQoKSBjb250ZXh0OiBDb21wb25lbnRDb250ZXh0O1xyXG5cclxuICBpc0hvc3RSZW1vdmVkOiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHNldCB0ZW1wbGF0ZSh2aWV3OiB7XHJcbiAgICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PiwgY29udGV4dD86IGFueVxyXG4gIH0pIHtcclxuICAgIHRoaXMuX3ZjUmVmLmNsZWFyKCk7XHJcbiAgICB0aGlzLl92Y1JlZi5jcmVhdGVFbWJlZGRlZFZpZXcodmlldy50ZW1wbGF0ZSwgdmlldy5jb250ZXh0KTtcclxuICB9XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBfdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gIH1cclxuXHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuY29udGV4dCkge1xyXG4gICAgICB0aGlzLnRlbXBsYXRlID0ge1xyXG4gICAgICAgIHRlbXBsYXRlOiB0aGlzLl92Y1JlZlsnX3ZpZXcnXS5jb250ZXh0LmRlZmF1bHRDb250ZW50LFxyXG4gICAgICAgIGNvbnRleHQ6IHsgJGltcGxpY2l0OiB0aGlzLmNvbnRleHQgfVxyXG4gICAgICB9O1xyXG5cclxuXHJcbiAgICAgIGlmICghdGhpcy5pc0hvc3RSZW1vdmVkKSB7XHJcbiAgICAgICAgcmVtb3ZlSG9zdCh0aGlzLl9lbFJlZik7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5pc0hvc3RSZW1vdmVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbn1cclxuIl19