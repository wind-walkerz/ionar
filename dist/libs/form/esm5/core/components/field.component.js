/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Host } from '@angular/core';
import { FormService } from '../providers/form.service';
import { ControlComponent } from './control.component';
import { untilDestroyed } from '@ionar/utility';
var FieldComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function FieldComponent(_formSvs, cd, _parent) {
        var _this = this;
        this._formSvs = _formSvs;
        this.cd = cd;
        this._parent = _parent;
        this.invalid = false;
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.onChanged = function (e) {
            _this._formSvs.getControl(_this._parent.name).setValue(e);
        };
        this.onTouched = function () {
            _this._formSvs.getControl(_this._parent.name).markAsTouched();
        };
        this.onEntered = function () {
            // this.formSvs._onEntered()
            // if (this.name === 'password') this.focus = true;
        };
        this.parseContext = function () {
            _this.control = _this.formGroup.get(_this._parent.name);
            _this.controlConfig = (/** @type {?} */ (_this.control.configuration));
            _this.template = _this._parent.fieldTemplate;
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
        // this.parseContext();
        //
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
        var _this = this;
        if (this._parent.formGroup) {
            this.formGroup = this._parent.formGroup;
            if (this._statusSubscription)
                this._statusSubscription.unsubscribe();
            if (this._submitSubscription)
                this._submitSubscription.unsubscribe();
            this._statusSubscription = this.formGroup.statusChanges.pipe(untilDestroyed(this)).subscribe(function (status) {
                _this.parseContext();
            });
            this._submitSubscription = this.formGroup.ngSubmit.pipe(untilDestroyed(this)).subscribe(function (data) {
                _this.parseContext();
            });
            this.parseContext();
        }
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
        this.cd.detach();
    };
    FieldComponent.decorators = [
        { type: Component, args: [{
                    selector: 'form-field',
                    template: "\n      <ng-container *ngIf=\"formGroup\">\n          <ng-container\n                  dynamic_field\n                  [controlConfig]=\"controlConfig\"\n\n                  [events]=\"{\n                            change: onChanged,\n                            blur: onTouched,\n                            enter: onEntered\n                    }\"\n                  [template]=\"template\"\n\n                  [value]=\"control.value\"\n                  [options]=\"controlConfig.options\"\n                  [invalid]=\"invalid\"\n                  [readonly]=\"formGroup.readonly\"\n          >\n          </ng-container>\n      </ng-container>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n      :host {\n          display: flex;\n          width: 100%;\n          height: 100%;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    FieldComponent.ctorParameters = function () { return [
        { type: FormService },
        { type: ChangeDetectorRef },
        { type: ControlComponent, decorators: [{ type: Host }] }
    ]; };
    return FieldComponent;
}());
export { FieldComponent };
if (false) {
    /** @type {?} */
    FieldComponent.prototype.formGroup;
    /** @type {?} */
    FieldComponent.prototype.control;
    /** @type {?} */
    FieldComponent.prototype.controlConfig;
    /** @type {?} */
    FieldComponent.prototype.invalid;
    /** @type {?} */
    FieldComponent.prototype.template;
    /**
     * @type {?}
     * @private
     */
    FieldComponent.prototype._statusSubscription;
    /**
     * @type {?}
     * @private
     */
    FieldComponent.prototype._submitSubscription;
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
    /**
     * @type {?}
     * @private
     */
    FieldComponent.prototype._parent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL2NvbXBvbmVudHMvZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsSUFBSSxFQUtMLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUl4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHaEQ7SUE2Q0Usd0hBQXdIO0lBQ3hILHdCQUNVLFFBQXFCLEVBQ3JCLEVBQXFCLEVBQ2IsT0FBeUI7UUFIM0MsaUJBS0M7UUFKUyxhQUFRLEdBQVIsUUFBUSxDQUFhO1FBQ3JCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ2IsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFWM0MsWUFBTyxHQUFZLEtBQUssQ0FBQzs7UUFzRHpCLGNBQVMsR0FBRyxVQUFBLENBQUM7WUFDWCxLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUM7UUFFRixjQUFTLEdBQUc7WUFDVixLQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzlELENBQUMsQ0FBQztRQUVGLGNBQVMsR0FBRztZQUNWLDRCQUE0QjtZQUM1QixtREFBbUQ7UUFDckQsQ0FBQyxDQUFDO1FBRUYsaUJBQVksR0FBRztZQUNiLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVyRCxLQUFJLENBQUMsYUFBYSxHQUFHLG1CQUFlLEtBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFBLENBQUM7WUFFL0QsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQTtZQUMxQyxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoSCxLQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRTFCLENBQUMsQ0FBQztJQWhFRixDQUFDOzs7O0lBRUQsaUNBQVE7OztJQUFSO1FBQ0UsdUJBQXVCO1FBQ3ZCLEVBQUU7SUFFSixDQUFDOzs7O0lBRUQsd0NBQWU7OztJQUFmO0lBRUEsQ0FBQzs7OztJQUVELDJDQUFrQjs7O0lBQWxCO1FBQUEsaUJBaUJDO1FBaEJDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUV4QyxJQUFJLElBQUksQ0FBQyxtQkFBbUI7Z0JBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JFLElBQUksSUFBSSxDQUFDLG1CQUFtQjtnQkFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFckUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO2dCQUNqRyxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7Z0JBQzFGLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN0QixDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7O0lBRUQsb0NBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO0lBRWxDLENBQUM7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ25CLENBQUM7O2dCQXhGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxvcEJBb0JUO29CQVFELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzZCQVB0Qyx5R0FNUjtpQkFFRjs7OztnQkF4Q1EsV0FBVztnQkFUbEIsaUJBQWlCO2dCQWFWLGdCQUFnQix1QkFzRHBCLElBQUk7O0lBb0VULHFCQUFDO0NBQUEsQUFySEQsSUFxSEM7U0FyRlksY0FBYzs7O0lBR3pCLG1DQUFxQjs7SUFDckIsaUNBQXFCOztJQUNyQix1Q0FBNkI7O0lBRTdCLGlDQUF5Qjs7SUFDekIsa0NBQTBCOzs7OztJQUUxQiw2Q0FBMEM7Ozs7O0lBQzFDLDZDQUEwQzs7SUFrRDFDLG1DQUVFOztJQUVGLG1DQUVFOztJQUVGLG1DQUdFOztJQUVGLHNDQVNFOzs7OztJQXBFQSxrQ0FBNkI7Ozs7O0lBQzdCLDRCQUE2Qjs7Ozs7SUFDN0IsaUNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdDaGVja2VkLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEhvc3QsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2Zvcm0uc2VydmljZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnLi4vbW9kZWxzL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnLi4vbW9kZWxzL0Zvcm1Hcm91cCc7XHJcbmltcG9ydCB7IENvbnRyb2xDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvQ29udHJvbENvbmZpZyc7XHJcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHVudGlsRGVzdHJveWVkIH0gZnJvbSAnQGlvbmFyL3V0aWxpdHknO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1Hcm91cFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICBkeW5hbWljX2ZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIFtjb250cm9sQ29uZmlnXT1cImNvbnRyb2xDb25maWdcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgW2V2ZW50c109XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IG9uQ2hhbmdlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsdXI6IG9uVG91Y2hlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyOiBvbkVudGVyZWRcclxuICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cInRlbXBsYXRlXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJjb250cm9sLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgW29wdGlvbnNdPVwiY29udHJvbENvbmZpZy5vcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgW2ludmFsaWRdPVwiaW52YWxpZFwiXHJcbiAgICAgICAgICAgICAgICAgIFtyZWFkb25seV09XCJmb3JtR3JvdXAucmVhZG9ubHlcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgICA6aG9zdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICBgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0NoZWNrZWQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgY29udHJvbDogRm9ybUNvbnRyb2w7XHJcbiAgY29udHJvbENvbmZpZzogQ29udHJvbENvbmZpZztcclxuXHJcbiAgaW52YWxpZDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+XHJcblxyXG4gIHByaXZhdGUgX3N0YXR1c1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgX3N1Ym1pdFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2Zvcm1TdnM6IEZvcm1TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBASG9zdCgpIHByaXZhdGUgX3BhcmVudDogQ29udHJvbENvbXBvbmVudFxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyB0aGlzLnBhcnNlQ29udGV4dCgpO1xyXG4gICAgLy9cclxuXHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX3BhcmVudC5mb3JtR3JvdXApIHtcclxuICAgICAgdGhpcy5mb3JtR3JvdXAgPSB0aGlzLl9wYXJlbnQuZm9ybUdyb3VwO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX3N0YXR1c1N1YnNjcmlwdGlvbikgdGhpcy5fc3RhdHVzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIGlmICh0aGlzLl9zdWJtaXRTdWJzY3JpcHRpb24pIHRoaXMuX3N1Ym1pdFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cclxuICAgICAgdGhpcy5fc3RhdHVzU3Vic2NyaXB0aW9uID0gdGhpcy5mb3JtR3JvdXAuc3RhdHVzQ2hhbmdlcy5waXBlKHVudGlsRGVzdHJveWVkKHRoaXMpKS5zdWJzY3JpYmUoc3RhdHVzID0+IHtcclxuICAgICAgICB0aGlzLnBhcnNlQ29udGV4dCgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuX3N1Ym1pdFN1YnNjcmlwdGlvbiA9IHRoaXMuZm9ybUdyb3VwLm5nU3VibWl0LnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICB0aGlzLnBhcnNlQ29udGV4dCgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMucGFyc2VDb250ZXh0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkLmRldGFjaCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIG9uQ2hhbmdlZCA9IGUgPT4ge1xyXG4gICAgdGhpcy5fZm9ybVN2cy5nZXRDb250cm9sKHRoaXMuX3BhcmVudC5uYW1lKS5zZXRWYWx1ZShlKTtcclxuICB9O1xyXG5cclxuICBvblRvdWNoZWQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9mb3JtU3ZzLmdldENvbnRyb2wodGhpcy5fcGFyZW50Lm5hbWUpLm1hcmtBc1RvdWNoZWQoKTtcclxuICB9O1xyXG5cclxuICBvbkVudGVyZWQgPSAoKSA9PiB7XHJcbiAgICAvLyB0aGlzLmZvcm1TdnMuX29uRW50ZXJlZCgpXHJcbiAgICAvLyBpZiAodGhpcy5uYW1lID09PSAncGFzc3dvcmQnKSB0aGlzLmZvY3VzID0gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBwYXJzZUNvbnRleHQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLmNvbnRyb2wgPSB0aGlzLmZvcm1Hcm91cC5nZXQodGhpcy5fcGFyZW50Lm5hbWUpO1xyXG5cclxuICAgIHRoaXMuY29udHJvbENvbmZpZyA9IDxDb250cm9sQ29uZmlnPnRoaXMuY29udHJvbC5jb25maWd1cmF0aW9uO1xyXG5cclxuICAgIHRoaXMudGVtcGxhdGUgPSB0aGlzLl9wYXJlbnQuZmllbGRUZW1wbGF0ZVxyXG4gICAgdGhpcy5pbnZhbGlkID0gdGhpcy5jb250cm9sLmludmFsaWQgJiYgKHRoaXMuY29udHJvbC5kaXJ0eSB8fCB0aGlzLmNvbnRyb2wudG91Y2hlZCB8fCB0aGlzLmZvcm1Hcm91cC5zdWJtaXR0ZWQpO1xyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG4gIH07XHJcblxyXG59XHJcbiJdfQ==