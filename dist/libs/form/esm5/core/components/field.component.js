/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, TemplateRef } from '@angular/core';
import { FormService } from '../providers/form.service';
import { FormGroup } from '../models/FormGroup';
import { untilDestroyed } from '@ionar/utility';
var FieldComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function FieldComponent(_formSvs, cd) {
        var _this = this;
        this._formSvs = _formSvs;
        this.cd = cd;
        this.invalid = false;
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.onChanged = function (e) {
            _this._formSvs.getControl(_this.name).setValue(e);
        };
        this.onTouched = function () {
            _this._formSvs.getControl(_this.name).markAsTouched();
        };
        this.onEntered = function () {
            // this.formSvs._onEntered()
            // if (this.name === 'password') this.focus = true;
        };
        this.parseContext = function () {
            _this.control = _this.formGroup.get(_this.name);
            _this.controlConfig = (/** @type {?} */ (_this.control.configuration));
            _this.invalid = _this.control.invalid && (_this.control.dirty || _this.control.touched || _this.formGroup.submitted);
            _this.cd.detectChanges();
        };
    }
    /**
     * @return {?}
     */
    FieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.parseContext();
        this.formGroup.statusChanges.pipe(untilDestroyed(this)).subscribe(function (status) {
            _this.parseContext();
        });
        this.formGroup.ngSubmit.pipe(untilDestroyed(this)).subscribe(function (data) {
            _this.parseContext();
        });
    };
    /**
     * @return {?}
     */
    FieldComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FieldComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FieldComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    /**
     * @return {?}
     */
    FieldComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // this.cd.detach();
    };
    FieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'form-field',
                    template: "\n      <ng-container *ngIf=\"control&&controlConfig\">\n          <ng-container\n                  dynamic_field\n                  [controlConfig]=\"controlConfig\"\n\n                  [events]=\"{\n                            change: onChanged,\n                            blur: onTouched,\n                            enter: onEntered\n                    }\"\n                  [template]=\"template\"\n\n                  [value]=\"control.value\"\n                  [options]=\"controlConfig.options\"\n                  [invalid]=\"invalid\"\n                  [readonly]=\"formGroup.readonly\"\n          >\n          </ng-container>\n      </ng-container>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n      :host {\n          display: flex;\n          width: 100%;\n          height: 100%;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    FieldComponent.ctorParameters = function () { return [
        { type: FormService },
        { type: ChangeDetectorRef }
    ]; };
    FieldComponent.propDecorators = {
        name: [{ type: Input }],
        formGroup: [{ type: Input }],
        template: [{ type: Input }]
    };
    return FieldComponent;
}());
export { FieldComponent };
if (false) {
    /** @type {?} */
    FieldComponent.prototype.name;
    /** @type {?} */
    FieldComponent.prototype.control;
    /** @type {?} */
    FieldComponent.prototype.controlConfig;
    /** @type {?} */
    FieldComponent.prototype.formGroup;
    /** @type {?} */
    FieldComponent.prototype.template;
    /** @type {?} */
    FieldComponent.prototype.invalid;
    /** @type {?} */
    FieldComponent.prototype.onChanged;
    /** @type {?} */
    FieldComponent.prototype.onTouched;
    /** @type {?} */
    FieldComponent.prototype.onEntered;
    /** @type {?} */
    FieldComponent.prototype.parseContext;
    /**
     * @type {?}
     * @private
     */
    FieldComponent.prototype._formSvs;
    /**
     * @type {?}
     * @private
     */
    FieldComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL2NvbXBvbmVudHMvZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUlVLFdBQVcsRUFDM0IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXhELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFJaEQ7SUEwQ0Usd0hBQXdIO0lBQ3hILHdCQUNVLFFBQXFCLEVBQ3JCLEVBQXFCO1FBRi9CLGlCQUlDO1FBSFMsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUNyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUwvQixZQUFPLEdBQVksS0FBSyxDQUFDOztRQXdDekIsY0FBUyxHQUFHLFVBQUEsQ0FBQztZQUNYLEtBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEQsQ0FBQyxDQUFDO1FBRUYsY0FBUyxHQUFHO1lBQ1YsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3RELENBQUMsQ0FBQztRQUVGLGNBQVMsR0FBRztZQUNWLDRCQUE0QjtZQUM1QixtREFBbUQ7UUFDckQsQ0FBQyxDQUFDO1FBRUYsaUJBQVksR0FBRztZQUNiLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTdDLEtBQUksQ0FBQyxhQUFhLEdBQUcsbUJBQWUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUEsQ0FBQztZQUUvRCxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoSCxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRTFCLENBQUMsQ0FBQztJQXRERixDQUFDOzs7O0lBRUQsaUNBQVE7OztJQUFSO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDdEUsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDL0QsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELHdDQUFlOzs7SUFBZjtJQUVBLENBQUM7Ozs7SUFFRCwyQ0FBa0I7OztJQUFsQjtJQUVBLENBQUM7Ozs7O0lBRUQsb0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO0lBRWxDLENBQUM7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7UUFDRSxvQkFBb0I7SUFDdEIsQ0FBQzs7Z0JBM0VGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLGlxQkFvQlQ7b0JBUUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07NkJBUHRDLHlHQU1SO2lCQUVGOzs7O2dCQXRDUSxXQUFXO2dCQVRsQixpQkFBaUI7Ozt1QkFrRGhCLEtBQUs7NEJBR0wsS0FBSzsyQkFDTCxLQUFLOztJQWlFUixxQkFBQztDQUFBLEFBdkdELElBdUdDO1NBdkVZLGNBQWM7OztJQUV6Qiw4QkFBc0I7O0lBQ3RCLGlDQUFxQjs7SUFDckIsdUNBQTZCOztJQUM3QixtQ0FBOEI7O0lBQzlCLGtDQUFvQzs7SUFFcEMsaUNBQXlCOztJQXdDekIsbUNBRUU7O0lBRUYsbUNBRUU7O0lBRUYsbUNBR0U7O0lBRUYsc0NBUUU7Ozs7O0lBekRBLGtDQUE2Qjs7Ozs7SUFDN0IsNEJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdDaGVja2VkLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gJy4uL3Byb3ZpZGVycy9mb3JtLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJy4uL21vZGVscy9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJy4uL21vZGVscy9Gb3JtR3JvdXAnO1xyXG5pbXBvcnQgeyB1bnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bpb25hci91dGlsaXR5JztcclxuaW1wb3J0IHsgQ29udHJvbENvbmZpZyB9IGZyb20gJy4uL21vZGVscy9Db250cm9sQ29uZmlnJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJjb250cm9sJiZjb250cm9sQ29uZmlnXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgIGR5bmFtaWNfZmllbGRcclxuICAgICAgICAgICAgICAgICAgW2NvbnRyb2xDb25maWddPVwiY29udHJvbENvbmZpZ1wiXHJcblxyXG4gICAgICAgICAgICAgICAgICBbZXZlbnRzXT1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogb25DaGFuZ2VkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmx1cjogb25Ub3VjaGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXI6IG9uRW50ZXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwidGVtcGxhdGVcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cImNvbnRyb2wudmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICBbb3B0aW9uc109XCJjb250cm9sQ29uZmlnLm9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICBbaW52YWxpZF09XCJpbnZhbGlkXCJcclxuICAgICAgICAgICAgICAgICAgW3JlYWRvbmx5XT1cImZvcm1Hcm91cC5yZWFkb25seVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgICAgIDpob3N0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG4gIGBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcclxuICBjb250cm9sOiBGb3JtQ29udHJvbDtcclxuICBjb250cm9sQ29uZmlnOiBDb250cm9sQ29uZmlnO1xyXG4gIEBJbnB1dCgpIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBpbnZhbGlkOiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfZm9ybVN2czogRm9ybVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnBhcnNlQ29udGV4dCgpO1xyXG5cclxuICAgIHRoaXMuZm9ybUdyb3VwLnN0YXR1c0NoYW5nZXMucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSkuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XHJcbiAgICAgIHRoaXMucGFyc2VDb250ZXh0KCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmZvcm1Hcm91cC5uZ1N1Ym1pdC5waXBlKHVudGlsRGVzdHJveWVkKHRoaXMpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgIHRoaXMucGFyc2VDb250ZXh0KCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgLy8gdGhpcy5jZC5kZXRhY2goKTtcclxuICB9XHJcblxyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTWFpbiBGdW5jdGlvbnMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBvbkNoYW5nZWQgPSBlID0+IHtcclxuICAgIHRoaXMuX2Zvcm1TdnMuZ2V0Q29udHJvbCh0aGlzLm5hbWUpLnNldFZhbHVlKGUpO1xyXG4gIH07XHJcblxyXG4gIG9uVG91Y2hlZCA9ICgpID0+IHtcclxuICAgIHRoaXMuX2Zvcm1TdnMuZ2V0Q29udHJvbCh0aGlzLm5hbWUpLm1hcmtBc1RvdWNoZWQoKTtcclxuICB9O1xyXG5cclxuICBvbkVudGVyZWQgPSAoKSA9PiB7XHJcbiAgICAvLyB0aGlzLmZvcm1TdnMuX29uRW50ZXJlZCgpXHJcbiAgICAvLyBpZiAodGhpcy5uYW1lID09PSAncGFzc3dvcmQnKSB0aGlzLmZvY3VzID0gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBwYXJzZUNvbnRleHQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLmZvcm1Hcm91cC5nZXQodGhpcy5uYW1lKTtcclxuXHJcbiAgICB0aGlzLmNvbnRyb2xDb25maWcgPSA8Q29udHJvbENvbmZpZz50aGlzLmNvbnRyb2wuY29uZmlndXJhdGlvbjtcclxuXHJcbiAgICB0aGlzLmludmFsaWQgPSB0aGlzLmNvbnRyb2wuaW52YWxpZCAmJiAodGhpcy5jb250cm9sLmRpcnR5IHx8IHRoaXMuY29udHJvbC50b3VjaGVkIHx8IHRoaXMuZm9ybUdyb3VwLnN1Ym1pdHRlZCk7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuXHJcbiAgfTtcclxuXHJcbn1cclxuIl19