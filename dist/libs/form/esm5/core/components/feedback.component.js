/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Host } from '@angular/core';
import { FormService } from '../providers/form.service';
import _ from 'lodash';
import { untilDestroyed } from '@ionar/utility';
import { ControlComponent } from './control.component';
var FeedbackComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function FeedbackComponent(_formSvs, cd, _parent) {
        var _this = this;
        this._formSvs = _formSvs;
        this.cd = cd;
        this._parent = _parent;
        this.invalid = false;
        this.show_feedback = true;
        this.generate_feedback = function (validator, value) {
            // const feedback = this._control.validateOptions.feedback
            // const feedback = this._control.validateOptions.feedback
            /** @type {?} */
            var feedback = {};
            // console.log(_.values(this._control.configuration.validators))
            // _.mapValues(this._control.configuration.validators, (value: any) => {
            //   feedback[validator] = _.isString(value) ? value : value.message || null;
            // });
            if (!validator)
                return null;
            switch (validator) {
                case 'required':
                    if (_this._parent.name === 'confirm_password') {
                        return feedback['required'] || "You need to confirm password";
                    }
                    return feedback['required'] || _.startCase(_this._parent.name) + "  is required";
                case 'agreement':
                    return feedback['agreement'] || "You must agree to the terms and conditions before continuing!";
                case 'email':
                    return feedback['email'] || "Invalid email address. Valid e-mail can contain only latin letters, numbers, '@' and '.'";
                case 'email_existed':
                    return feedback['email_existed'] || _.startCase(_this._parent.name) + " is existed! Please use another one";
                case 'stringLength':
                    return value.minLength ? _.startCase(_this._parent.name) + " cannot be shorter than " + value.minLength : _.startCase(_this._parent.name) + " cannot be longer than " + value.maxLength;
                case 'equalTo':
                    return "Confirm password is not equal to password";
                default:
                    return value;
            }
        };
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.parseContext = function () {
            _this._control = _this.formGroup.get(_this._parent.name);
            _this.invalid = _this._control.invalid && (_this._control.dirty || _this._control.touched || _this.formGroup.submitted);
            _this.error_list = _.map(_this._control.errors, function (value, key) { return _this.generate_feedback(key, value); });
            _this.cd.detectChanges();
        };
    }
    /**
     * @return {?}
     */
    FeedbackComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FeedbackComponent.prototype.ngAfterViewChecked = /**
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
    FeedbackComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    /**
     * @return {?}
     */
    FeedbackComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    FeedbackComponent.decorators = [
        { type: Component, args: [{
                    selector: 'form-feedback',
                    template: "\n      <ng-container *ngIf=\"show_feedback\">\n          <ng-container *ngIf=\"invalid\">\n              <ng-container *ngFor=\"let err of error_list\">\n                  <div class=\"feedback\">{{err}}</div>\n              </ng-container>\n\n          </ng-container>\n      </ng-container>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n      :host {\n          display: flex;\n          flex-direction: column;\n          justify-content: flex-start;\n          width: 100%;\n          color: #f5222d;\n          font-size: 1.2rem;\n          margin-top: 0.5rem;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    FeedbackComponent.ctorParameters = function () { return [
        { type: FormService },
        { type: ChangeDetectorRef },
        { type: ControlComponent, decorators: [{ type: Host }] }
    ]; };
    return FeedbackComponent;
}());
export { FeedbackComponent };
if (false) {
    /** @type {?} */
    FeedbackComponent.prototype._control;
    /** @type {?} */
    FeedbackComponent.prototype.formGroup;
    /** @type {?} */
    FeedbackComponent.prototype.invalid;
    /** @type {?} */
    FeedbackComponent.prototype.error_list;
    /** @type {?} */
    FeedbackComponent.prototype.show_feedback;
    /**
     * @type {?}
     * @private
     */
    FeedbackComponent.prototype._statusSubscription;
    /**
     * @type {?}
     * @private
     */
    FeedbackComponent.prototype._submitSubscription;
    /** @type {?} */
    FeedbackComponent.prototype.generate_feedback;
    /** @type {?} */
    FeedbackComponent.prototype.parseContext;
    /**
     * @type {?}
     * @private
     */
    FeedbackComponent.prototype._formSvs;
    /**
     * @type {?}
     * @private
     */
    FeedbackComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    FeedbackComponent.prototype._parent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL2NvbXBvbmVudHMvZmVlZGJhY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsSUFBSSxFQUlMLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV4RCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBSXZEO0lBd0NFLHdIQUF3SDtJQUN4SCwyQkFDVSxRQUFxQixFQUNyQixFQUFxQixFQUNiLE9BQXlCO1FBSDNDLGlCQUtDO1FBSlMsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUNyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNiLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBWjNDLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFzQzlCLHNCQUFpQixHQUFHLFVBQUMsU0FBUyxFQUFFLEtBQUs7WUFFbkMsMERBQTBEOzs7Z0JBRXBELFFBQVEsR0FBRyxFQUFFO1lBRW5CLGdFQUFnRTtZQUdoRSx3RUFBd0U7WUFDeEUsNkVBQTZFO1lBQzdFLE1BQU07WUFHTixJQUFJLENBQUMsU0FBUztnQkFBRSxPQUFPLElBQUksQ0FBQztZQUU1QixRQUFRLFNBQVMsRUFBRTtnQkFDakIsS0FBSyxVQUFVO29CQUNiLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssa0JBQWtCLEVBQUU7d0JBQzVDLE9BQU8sUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLDhCQUE4QixD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QUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7Ozs7SUErQ0QsdUNBQVc7Ozs7SUFBWCxVQUFZLE9BQU87SUFFbkIsQ0FBQzs7OztJQUdELHVDQUFXOzs7SUFBWDtJQUNBLENBQUM7O2dCQTFIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLFFBQVEsRUFBRSwyU0FTVDtvQkFhRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs2QkFYdEMsbVBBVVI7aUJBRUY7Ozs7Z0JBbkNRLFdBQVc7Z0JBUGxCLGlCQUFpQjtnQkFhVixnQkFBZ0IsdUJBZ0RwQixJQUFJOztJQXlGVCx3QkFBQztDQUFBLEFBcklELElBcUlDO1NBM0dZLGlCQUFpQjs7O0lBRzVCLHFDQUFzQjs7SUFDdEIsc0NBQXFCOztJQUVyQixvQ0FBeUI7O0lBQ3pCLHVDQUE0Qjs7SUFDNUIsMENBQThCOzs7OztJQUc5QixnREFBMEM7Ozs7O0lBQzFDLGdEQUEwQzs7SUFrQzFDLDhDQTBDRTs7SUFZRix5Q0FLRTs7Ozs7SUF6RkEscUNBQTZCOzs7OztJQUM3QiwrQkFBNkI7Ozs7O0lBQzdCLG9DQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gJy4uL3Byb3ZpZGVycy9mb3JtLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdW50aWxEZXN0cm95ZWQgfSBmcm9tICdAaW9uYXIvdXRpbGl0eSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnLi4vbW9kZWxzL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnLi4vbW9kZWxzL0Zvcm1Hcm91cCc7XHJcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmb3JtLWZlZWRiYWNrJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd19mZWVkYmFja1wiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImludmFsaWRcIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBlcnIgb2YgZXJyb3JfbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmVlZGJhY2tcIj57e2Vycn19PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGAsXHJcbiAgLy9sYW5ndWFnZT1TQ1NTXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgICA6aG9zdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgY29sb3I6ICNmNTIyMmQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgICAgfVxyXG4gIGBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZWVkYmFja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdDaGVja2VkLCBPbkRlc3Ryb3kge1xyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBfY29udHJvbDogRm9ybUNvbnRyb2w7XHJcbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblxyXG4gIGludmFsaWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuICBlcnJvcl9saXN0OiBzdHJpbmdbXSB8IG51bGw7XHJcbiAgc2hvd19mZWVkYmFjazogQm9vbGVhbiA9IHRydWU7XHJcblxyXG5cclxuICBwcml2YXRlIF9zdGF0dXNTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICBwcml2YXRlIF9zdWJtaXRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9mb3JtU3ZzOiBGb3JtU2VydmljZSxcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQEhvc3QoKSBwcml2YXRlIF9wYXJlbnQ6IENvbnRyb2xDb21wb25lbnRcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9wYXJlbnQuZm9ybUdyb3VwKSB7XHJcbiAgICAgIHRoaXMuZm9ybUdyb3VwID0gdGhpcy5fcGFyZW50LmZvcm1Hcm91cDtcclxuXHJcbiAgICAgIGlmICh0aGlzLl9zdGF0dXNTdWJzY3JpcHRpb24pIHRoaXMuX3N0YXR1c1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICBpZiAodGhpcy5fc3VibWl0U3Vic2NyaXB0aW9uKSB0aGlzLl9zdWJtaXRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuXHJcbiAgICAgIHRoaXMuX3N0YXR1c1N1YnNjcmlwdGlvbiA9IHRoaXMuZm9ybUdyb3VwLnN0YXR1c0NoYW5nZXMucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSkuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XHJcbiAgICAgICAgdGhpcy5wYXJzZUNvbnRleHQoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLl9zdWJtaXRTdWJzY3JpcHRpb24gPSB0aGlzLmZvcm1Hcm91cC5uZ1N1Ym1pdC5waXBlKHVudGlsRGVzdHJveWVkKHRoaXMpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgdGhpcy5wYXJzZUNvbnRleHQoKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnBhcnNlQ29udGV4dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGdlbmVyYXRlX2ZlZWRiYWNrID0gKHZhbGlkYXRvciwgdmFsdWUpID0+IHtcclxuXHJcbiAgICAvLyBjb25zdCBmZWVkYmFjayA9IHRoaXMuX2NvbnRyb2wudmFsaWRhdGVPcHRpb25zLmZlZWRiYWNrXHJcblxyXG4gICAgY29uc3QgZmVlZGJhY2sgPSB7fTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhfLnZhbHVlcyh0aGlzLl9jb250cm9sLmNvbmZpZ3VyYXRpb24udmFsaWRhdG9ycykpXHJcblxyXG5cclxuICAgIC8vIF8ubWFwVmFsdWVzKHRoaXMuX2NvbnRyb2wuY29uZmlndXJhdGlvbi52YWxpZGF0b3JzLCAodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgLy8gICBmZWVkYmFja1t2YWxpZGF0b3JdID0gXy5pc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZSA6IHZhbHVlLm1lc3NhZ2UgfHwgbnVsbDtcclxuICAgIC8vIH0pO1xyXG5cclxuXHJcbiAgICBpZiAoIXZhbGlkYXRvcikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgc3dpdGNoICh2YWxpZGF0b3IpIHtcclxuICAgICAgY2FzZSAncmVxdWlyZWQnOlxyXG4gICAgICAgIGlmICh0aGlzLl9wYXJlbnQubmFtZSA9PT0gJ2NvbmZpcm1fcGFzc3dvcmQnKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmVlZGJhY2tbJ3JlcXVpcmVkJ10gfHwgYFlvdSBuZWVkIHRvIGNvbmZpcm0gcGFzc3dvcmRgO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmVlZGJhY2tbJ3JlcXVpcmVkJ10gfHwgYCR7Xy5zdGFydENhc2UodGhpcy5fcGFyZW50Lm5hbWUpfSAgaXMgcmVxdWlyZWRgO1xyXG4gICAgICBjYXNlICdhZ3JlZW1lbnQnOlxyXG4gICAgICAgIHJldHVybiBmZWVkYmFja1snYWdyZWVtZW50J10gfHwgYFlvdSBtdXN0IGFncmVlIHRvIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBiZWZvcmUgY29udGludWluZyFgO1xyXG4gICAgICBjYXNlICdlbWFpbCcgOlxyXG4gICAgICAgIHJldHVybiBmZWVkYmFja1snZW1haWwnXSB8fCBgSW52YWxpZCBlbWFpbCBhZGRyZXNzLiBWYWxpZCBlLW1haWwgY2FuIGNvbnRhaW4gb25seSBsYXRpbiBsZXR0ZXJzLCBudW1iZXJzLCAnQCcgYW5kICcuJ2A7XHJcbiAgICAgIGNhc2UgJ2VtYWlsX2V4aXN0ZWQnOlxyXG4gICAgICAgIHJldHVybiBmZWVkYmFja1snZW1haWxfZXhpc3RlZCddIHx8IGAke18uc3RhcnRDYXNlKHRoaXMuX3BhcmVudC5uYW1lKX0gaXMgZXhpc3RlZCEgUGxlYXNlIHVzZSBhbm90aGVyIG9uZWA7XHJcblxyXG4gICAgICBjYXNlICdzdHJpbmdMZW5ndGgnIDpcclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLm1pbkxlbmd0aCA/IGAke18uc3RhcnRDYXNlKHRoaXMuX3BhcmVudC5uYW1lKX0gY2Fubm90IGJlIHNob3J0ZXIgdGhhbiAke3ZhbHVlLm1pbkxlbmd0aH1gIDogYCR7Xy5zdGFydENhc2UodGhpcy5fcGFyZW50Lm5hbWUpfSBjYW5ub3QgYmUgbG9uZ2VyIHRoYW4gJHt2YWx1ZS5tYXhMZW5ndGh9YDtcclxuXHJcbiAgICAgIGNhc2UgJ2VxdWFsVG8nIDpcclxuXHJcbiAgICAgICAgcmV0dXJuIGBDb25maXJtIHBhc3N3b3JkIGlzIG5vdCBlcXVhbCB0byBwYXNzd29yZGA7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gIH07XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTWFpbiBGdW5jdGlvbnMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBwYXJzZUNvbnRleHQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9jb250cm9sID0gdGhpcy5mb3JtR3JvdXAuZ2V0KHRoaXMuX3BhcmVudC5uYW1lKTtcclxuICAgIHRoaXMuaW52YWxpZCA9IHRoaXMuX2NvbnRyb2wuaW52YWxpZCAmJiAodGhpcy5fY29udHJvbC5kaXJ0eSB8fCB0aGlzLl9jb250cm9sLnRvdWNoZWQgfHwgdGhpcy5mb3JtR3JvdXAuc3VibWl0dGVkKTtcclxuICAgIHRoaXMuZXJyb3JfbGlzdCA9IF8ubWFwKHRoaXMuX2NvbnRyb2wuZXJyb3JzLCAodmFsdWUsIGtleSkgPT4gdGhpcy5nZW5lcmF0ZV9mZWVkYmFjayhrZXksIHZhbHVlKSk7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9O1xyXG5cclxufVxyXG4iXX0=