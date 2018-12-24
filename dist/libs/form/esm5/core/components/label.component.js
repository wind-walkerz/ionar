/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Host } from '@angular/core';
import { FormService } from '../providers/form.service';
import _ from 'lodash';
import { ControlComponent } from './control.component';
var LabelComponent = /** @class */ (function () {
    function LabelComponent(_formSvs, cd, _parent) {
        var _this = this;
        this._formSvs = _formSvs;
        this.cd = cd;
        this._parent = _parent;
        this.parseContext = function () {
            _this.control = _this.formGroup.get(_this._parent.name);
            _this.controlConfig = (/** @type {?} */ (_this.control.configuration));
            _this.label = _this.controlConfig.label || _.startCase(_this._parent.name);
            _this.cd.detectChanges();
        };
    }
    /**
     * @return {?}
     */
    LabelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    LabelComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (this._parent.formGroup) {
            this.formGroup = this._parent.formGroup;
            this.parseContext();
        }
    };
    /**
     * @return {?}
     */
    LabelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.cd.detach();
    };
    LabelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'form-label',
                    template: "\n      {{label}}\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n      :host {\n          display: flex;\n          align-items: center;\n          color: rgba(0, 0, 0, 0.85);\n          font-size: 1.6rem;\n          font-weight: 700;\n          position: relative\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    LabelComponent.ctorParameters = function () { return [
        { type: FormService },
        { type: ChangeDetectorRef },
        { type: ControlComponent, decorators: [{ type: Host }] }
    ]; };
    return LabelComponent;
}());
export { LabelComponent };
if (false) {
    /** @type {?} */
    LabelComponent.prototype.formGroup;
    /** @type {?} */
    LabelComponent.prototype.controlConfig;
    /** @type {?} */
    LabelComponent.prototype.control;
    /** @type {?} */
    LabelComponent.prototype.label;
    /** @type {?} */
    LabelComponent.prototype.parseContext;
    /**
     * @type {?}
     * @private
     */
    LabelComponent.prototype._formSvs;
    /**
     * @type {?}
     * @private
     */
    LabelComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    LabelComponent.prototype._parent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL2NvbXBvbmVudHMvbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsSUFBSSxFQUdMLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUl4RCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHdkQ7SUF3QkUsd0JBQ1UsUUFBcUIsRUFDckIsRUFBcUIsRUFDYixPQUF5QjtRQUgzQyxpQkFLQztRQUpTLGFBQVEsR0FBUixRQUFRLENBQWE7UUFDckIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDYixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQW9CM0MsaUJBQVksR0FBRztZQUViLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVyRCxLQUFJLENBQUMsYUFBYSxHQUFHLG1CQUFlLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFBLENBQUM7WUFFL0QsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFeEUsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMxQixDQUFDLENBQUM7SUEzQkYsQ0FBQzs7OztJQUVELGlDQUFROzs7SUFBUjtJQUVBLENBQUM7Ozs7SUFFRCwyQ0FBa0I7OztJQUFsQjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUV4QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDOzs7O0lBRUQsb0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNuQixDQUFDOztnQkE3Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsdUJBRVQ7b0JBV0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07NkJBVnRDLHdOQVNSO2lCQUVGOzs7O2dCQXhCUSxXQUFXO2dCQU5sQixpQkFBaUI7Z0JBV1YsZ0JBQWdCLHVCQThCcEIsSUFBSTs7SUE4QlQscUJBQUM7Q0FBQSxBQXpERCxJQXlEQztTQXhDWSxjQUFjOzs7SUFDekIsbUNBQXFCOztJQUNyQix1Q0FBNkI7O0lBQzdCLGlDQUFxQjs7SUFFckIsK0JBQVc7O0lBeUJYLHNDQVNFOzs7OztJQS9CQSxrQ0FBNkI7Ozs7O0lBQzdCLDRCQUE2Qjs7Ozs7SUFDN0IsaUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdDaGVja2VkLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBIb3N0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tICcuLi9wcm92aWRlcnMvZm9ybS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICcuLi9tb2RlbHMvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgeyBDb250cm9sQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL0NvbnRyb2xDb25maWcnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICcuLi9tb2RlbHMvRm9ybUdyb3VwJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC5jb21wb25lbnQnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm9ybS1sYWJlbCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAge3tsYWJlbH19XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgICAgIDpob3N0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgICAgfVxyXG4gIGBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYWJlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25EZXN0cm95IHtcclxuICBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuICBjb250cm9sQ29uZmlnOiBDb250cm9sQ29uZmlnO1xyXG4gIGNvbnRyb2w6IEZvcm1Db250cm9sO1xyXG5cclxuICBsYWJlbDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2Zvcm1TdnM6IEZvcm1TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBASG9zdCgpIHByaXZhdGUgX3BhcmVudDogQ29udHJvbENvbXBvbmVudFxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX3BhcmVudC5mb3JtR3JvdXApIHtcclxuICAgICAgdGhpcy5mb3JtR3JvdXAgPSB0aGlzLl9wYXJlbnQuZm9ybUdyb3VwO1xyXG5cclxuICAgICAgdGhpcy5wYXJzZUNvbnRleHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZC5kZXRhY2goKTtcclxuICB9XHJcblxyXG4gIHBhcnNlQ29udGV4dCA9ICgpID0+IHtcclxuXHJcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLmZvcm1Hcm91cC5nZXQodGhpcy5fcGFyZW50Lm5hbWUpO1xyXG5cclxuICAgIHRoaXMuY29udHJvbENvbmZpZyA9IDxDb250cm9sQ29uZmlnPnRoaXMuY29udHJvbC5jb25maWd1cmF0aW9uO1xyXG5cclxuICAgIHRoaXMubGFiZWwgPSB0aGlzLmNvbnRyb2xDb25maWcubGFiZWwgfHwgXy5zdGFydENhc2UodGhpcy5fcGFyZW50Lm5hbWUpO1xyXG5cclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH07XHJcbn1cclxuIl19