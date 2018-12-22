/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormService } from '../providers/form.service';
import { FormGroup } from '../models/FormGroup';
import _ from 'lodash';
var LabelComponent = /** @class */ (function () {
    function LabelComponent(_formSvs, cd) {
        var _this = this;
        this._formSvs = _formSvs;
        this.cd = cd;
        this.parseContext = function () {
            _this._control = _this.formGroup.get(_this.name);
            _this._controlConfig = (/** @type {?} */ (_this._control.configuration));
            _this.label = _this._controlConfig.label || _.startCase(_this.name);
            _this.cd.markForCheck();
        };
    }
    /**
     * @return {?}
     */
    LabelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.parseContext();
    };
    /**
     * @return {?}
     */
    LabelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
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
        { type: ChangeDetectorRef }
    ]; };
    LabelComponent.propDecorators = {
        name: [{ type: Input }],
        formGroup: [{ type: Input }]
    };
    return LabelComponent;
}());
export { LabelComponent };
if (false) {
    /** @type {?} */
    LabelComponent.prototype.name;
    /** @type {?} */
    LabelComponent.prototype.formGroup;
    /** @type {?} */
    LabelComponent.prototype._controlConfig;
    /** @type {?} */
    LabelComponent.prototype._control;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL2NvbXBvbmVudHMvbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBRVQsS0FBSyxFQUdOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUd4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFaEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBR3ZCO0lBeUJFLHdCQUNVLFFBQXFCLEVBQ3JCLEVBQXFCO1FBRi9CLGlCQUlDO1FBSFMsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUNyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQVcvQixpQkFBWSxHQUFHO1lBRWIsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFOUMsS0FBSSxDQUFDLGNBQWMsR0FBRyxtQkFBZSxLQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBQSxDQUFDO1lBRWpFLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFakUsS0FBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUM7SUFsQkYsQ0FBQzs7OztJQUVELGlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsb0NBQVc7OztJQUFYO0lBQ0EsQ0FBQzs7Z0JBcENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLHVCQUVUO29CQVdELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzZCQVZ0Qyx3TkFTUjtpQkFFRjs7OztnQkF4QlEsV0FBVztnQkFQbEIsaUJBQWlCOzs7dUJBaUNoQixLQUFLOzRCQUNMLEtBQUs7O0lBNkJSLHFCQUFDO0NBQUEsQUFoREQsSUFnREM7U0EvQlksY0FBYzs7O0lBQ3pCLDhCQUFzQjs7SUFDdEIsbUNBQThCOztJQUM5Qix3Q0FBOEI7O0lBQzlCLGtDQUFzQjs7SUFFdEIsK0JBQVc7O0lBZVgsc0NBU0U7Ozs7O0lBckJBLGtDQUE2Qjs7Ozs7SUFDN0IsNEJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gJy4uL3Byb3ZpZGVycy9mb3JtLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJy4uL21vZGVscy9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCB7IENvbnRyb2xDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvQ29udHJvbENvbmZpZyc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJy4uL21vZGVscy9Gb3JtR3JvdXAnO1xyXG5pbXBvcnQgeyB1bnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bpb25hci91dGlsaXR5JztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Zvcm0tbGFiZWwnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIHt7bGFiZWx9fVxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgICA6aG9zdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgIH1cclxuICBgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGFiZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG4gIF9jb250cm9sQ29uZmlnOiBDb250cm9sQ29uZmlnO1xyXG4gIF9jb250cm9sOiBGb3JtQ29udHJvbDtcclxuXHJcbiAgbGFiZWw6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9mb3JtU3ZzOiBGb3JtU2VydmljZSxcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucGFyc2VDb250ZXh0KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIHBhcnNlQ29udGV4dCA9ICgpID0+IHtcclxuXHJcbiAgICB0aGlzLl9jb250cm9sID0gdGhpcy5mb3JtR3JvdXAuZ2V0KHRoaXMubmFtZSk7XHJcblxyXG4gICAgdGhpcy5fY29udHJvbENvbmZpZyA9IDxDb250cm9sQ29uZmlnPnRoaXMuX2NvbnRyb2wuY29uZmlndXJhdGlvbjtcclxuXHJcbiAgICB0aGlzLmxhYmVsID0gdGhpcy5fY29udHJvbENvbmZpZy5sYWJlbCB8fCBfLnN0YXJ0Q2FzZSh0aGlzLm5hbWUpO1xyXG5cclxuICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfTtcclxufVxyXG4iXX0=