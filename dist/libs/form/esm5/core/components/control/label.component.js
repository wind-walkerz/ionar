/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Host, Optional, SkipSelf } from '@angular/core';
import _ from 'lodash';
import { FormControlComponent } from '../form-control.component';
var LabelComponent = /** @class */ (function () {
    function LabelComponent(cd, parent) {
        this.cd = cd;
        /**
         * \@description
         * The parent  for the components
         *
         * \@internal
         */
        this._parent = null;
        this._parent = parent;
    }
    Object.defineProperty(LabelComponent.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var props = ((/** @type {?} */ (this._control.state))).props;
            return (props && props.label) ? props.label : _.startCase(this._parent.name);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LabelComponent.prototype, "_control", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return this._parent.control;
        },
        enumerable: true,
        configurable: true
    });
    ;
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
                    template: "\n      {{ label}}\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n      :host {\n          display: flex;\n          align-items: center;\n          color: rgba(0, 0, 0, 0.85);\n          font-size: 1.6rem;\n          font-weight: 700;\n          position: relative\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    LabelComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: FormControlComponent, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] }
    ]; };
    return LabelComponent;
}());
export { LabelComponent };
if (false) {
    /**
     * \@description
     * The parent  for the components
     *
     * \@internal
     * @type {?}
     */
    LabelComponent.prototype._parent;
    /**
     * @type {?}
     * @private
     */
    LabelComponent.prototype.cd;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL2NvbXBvbmVudHMvY29udHJvbC9sYWJlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxJQUFJLEVBQ08sUUFBUSxFQUFFLFFBQVEsRUFDOUIsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR2pFO0lBdUNFLHdCQUNVLEVBQXFCLEVBQ0ksTUFBNEI7UUFEckQsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7Ozs7Ozs7UUFoQi9CLFlBQU8sR0FBZ0MsSUFBSSxDQUFDO1FBbUIxQyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUN4QixDQUFDO0lBbEJELHNCQUFJLGlDQUFLOzs7O1FBQVQ7O2dCQUVRLEtBQUssR0FBRyxDQUFDLG1CQUFrQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBQSxDQUFDLENBQUMsS0FBSztZQUUzRCxPQUFPLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9FLENBQUM7OztPQUFBO0lBRUQsc0JBQVksb0NBQVE7Ozs7O1FBQXBCO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUFBLENBQUM7Ozs7SUFXRixvQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ25CLENBQUM7O2dCQWpERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSx3QkFFVDtvQkFXRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs2QkFWdEMsd05BU1I7aUJBRUY7Ozs7Z0JBOUJDLGlCQUFpQjtnQkFXVixvQkFBb0IsdUJBNEN4QixRQUFRLFlBQUksSUFBSSxZQUFJLFFBQVE7O0lBU2pDLHFCQUFDO0NBQUEsQUFsREQsSUFrREM7U0FqQ1ksY0FBYzs7Ozs7Ozs7O0lBT3pCLGlDQUE0Qzs7Ozs7SUFnQjFDLDRCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEhvc3QsXHJcbiAgT25EZXN0cm95LCBPcHRpb25hbCwgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnLi4vLi4vbW9kZWxzL0Zvcm1Db250cm9sJztcclxuXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5pbXBvcnQgeyBGb3JtQ29udHJvbFN0YXRlIH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcy9Gb3JtJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9mb3JtLWNvbnRyb2wuY29tcG9uZW50JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Zvcm0tbGFiZWwnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIHt7IGxhYmVsfX1cclxuICBgLFxyXG4gIHN0eWxlczogW2BcclxuICAgICAgOmhvc3Qge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgICB9XHJcbiAgYF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIExhYmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBUaGUgcGFyZW50ICBmb3IgdGhlIGNvbXBvbmVudHNcclxuICAgKlxyXG4gICAqIEBpbnRlcm5hbFxyXG4gICAqL1xyXG4gIF9wYXJlbnQ6IEZvcm1Db250cm9sQ29tcG9uZW50IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGdldCBsYWJlbCgpOiBzdHJpbmcge1xyXG5cclxuICAgIGNvbnN0IHByb3BzID0gKDxGb3JtQ29udHJvbFN0YXRlPnRoaXMuX2NvbnRyb2wuc3RhdGUpLnByb3BzO1xyXG5cclxuICAgIHJldHVybiAocHJvcHMgJiYgcHJvcHMubGFiZWwpID8gcHJvcHMubGFiZWwgOiBfLnN0YXJ0Q2FzZSh0aGlzLl9wYXJlbnQubmFtZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXQgX2NvbnRyb2woKTogRm9ybUNvbnRyb2wge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudC5jb250cm9sO1xyXG4gIH07XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBAU2tpcFNlbGYoKSAgcGFyZW50OiBGb3JtQ29udHJvbENvbXBvbmVudFxyXG4gICkge1xyXG4gICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xyXG4gIH1cclxuXHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZC5kZXRhY2goKTtcclxuICB9XHJcbn1cclxuIl19