/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormService } from '../providers/form.service';
import _ from 'lodash';
import { untilDestroyed } from '@ionar/utility';
import { FormGroup } from '../models/FormGroup';
var FeedbackComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function FeedbackComponent(_formSvs, cd) {
        var _this = this;
        this._formSvs = _formSvs;
        this.cd = cd;
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
                    if (_this.name === 'confirm_password') {
                        return feedback['required'] || "You need to confirm password";
                    }
                    return feedback['required'] || _.startCase(_this.name) + "  is required";
                case 'agreement':
                    return feedback['agreement'] || "You must agree to the terms and conditions before continuing!";
                case 'email':
                    return feedback['email'] || "Invalid email address. Valid e-mail can contain only latin letters, numbers, '@' and '.'";
                case 'email_existed':
                    return feedback['email_existed'] || _.startCase(_this.name) + " is existed! Please use another one";
                case 'stringLength':
                    return value.minLength ? _.startCase(_this.name) + " cannot be shorter than " + value.minLength : _.startCase(_this.name) + " cannot be longer than " + value.maxLength;
                case 'equalTo':
                    return "Confirm password is not equal to password";
                default:
                    return value;
            }
        };
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.parseContext = function () {
            // this.formGroup = this._formSvs.getFormGroup();
            _this._control = _this.formGroup.get(_this.name);
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
        { type: ChangeDetectorRef }
    ]; };
    FeedbackComponent.propDecorators = {
        name: [{ type: Input }],
        formGroup: [{ type: Input }]
    };
    return FeedbackComponent;
}());
export { FeedbackComponent };
if (false) {
    /** @type {?} */
    FeedbackComponent.prototype.name;
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL2NvbXBvbmVudHMvZmVlZGJhY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUlOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV4RCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUdoRDtJQXNDRSx3SEFBd0g7SUFDeEgsMkJBQ1UsUUFBcUIsRUFDckIsRUFBcUI7UUFGL0IsaUJBSUM7UUFIUyxhQUFRLEdBQVIsUUFBUSxDQUFhO1FBQ3JCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBUC9CLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUF1QjlCLHNCQUFpQixHQUFHLFVBQUMsU0FBUyxFQUFFLEtBQUs7WUFFbkMsMERBQTBEOzs7Z0JBRXBELFFBQVEsR0FBRyxFQUFFO1lBRW5CLGdFQUFnRTtZQUdoRSx3RUFBd0U7WUFDeEUsNkVBQTZFO1lBQzdFLE1BQU07WUFHTixJQUFJLENBQUMsU0FBUztnQkFBRSxPQUFPLElBQUksQ0FBQztZQUU1QixRQUFRLFNBQVMsRUFBRTtnQkFDakIsS0FBSyxVQUFVO29CQUNiLElBQUksS0FBSSxDQUFDLElBQUksS0FBSyxrQkFBa0IsRUFBRTt3QkFDcEMsT0FBTyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksOEJBQThCLENBQUM7cUJBQy9EO29CQUNELE9BQU8sUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFPLENB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dUNBQTRCOztJQUM1QiwwQ0FBOEI7O0lBdUI5Qiw4Q0EwQ0U7O0lBWUYseUNBT0U7Ozs7O0lBaEZBLHFDQUE2Qjs7Ozs7SUFDN0IsK0JBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tICcuLi9wcm92aWRlcnMvZm9ybS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVudGlsRGVzdHJveWVkIH0gZnJvbSAnQGlvbmFyL3V0aWxpdHknO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJy4uL21vZGVscy9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJy4uL21vZGVscy9Gb3JtR3JvdXAnO1xyXG5pbXBvcnQgeyBWYWxpZGF0b3JUeXBlIH0gZnJvbSAnLi4vbW9kZWxzL1ZhbGlkYXRvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Zvcm0tZmVlZGJhY2snLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93X2ZlZWRiYWNrXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGVyciBvZiBlcnJvcl9saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmZWVkYmFja1wiPnt7ZXJyfX08L2Rpdj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgYCxcclxuICAvL2xhbmd1YWdlPVNDU1NcclxuICBzdHlsZXM6IFtgXHJcbiAgICAgIDpob3N0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBjb2xvcjogI2Y1MjIyZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICB9XHJcbiAgYF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEZlZWRiYWNrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcclxuXHJcbiAgX2NvbnRyb2w6IEZvcm1Db250cm9sO1xyXG4gIEBJbnB1dCgpIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cclxuICBpbnZhbGlkOiBCb29sZWFuID0gZmFsc2U7XHJcbiAgZXJyb3JfbGlzdDogc3RyaW5nW10gfCBudWxsO1xyXG4gIHNob3dfZmVlZGJhY2s6IEJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2Zvcm1TdnM6IEZvcm1TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5wYXJzZUNvbnRleHQoKTtcclxuXHJcblxyXG4gICAgdGhpcy5mb3JtR3JvdXAuc3RhdHVzQ2hhbmdlcy5waXBlKHVudGlsRGVzdHJveWVkKHRoaXMpKS5zdWJzY3JpYmUoc3RhdHVzID0+IHtcclxuICAgICAgdGhpcy5wYXJzZUNvbnRleHQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZm9ybUdyb3VwLm5nU3VibWl0LnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgdGhpcy5wYXJzZUNvbnRleHQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4gIGdlbmVyYXRlX2ZlZWRiYWNrID0gKHZhbGlkYXRvciwgdmFsdWUpID0+IHtcclxuXHJcbiAgICAvLyBjb25zdCBmZWVkYmFjayA9IHRoaXMuX2NvbnRyb2wudmFsaWRhdGVPcHRpb25zLmZlZWRiYWNrXHJcblxyXG4gICAgY29uc3QgZmVlZGJhY2sgPSB7fTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhfLnZhbHVlcyh0aGlzLl9jb250cm9sLmNvbmZpZ3VyYXRpb24udmFsaWRhdG9ycykpXHJcblxyXG5cclxuICAgIC8vIF8ubWFwVmFsdWVzKHRoaXMuX2NvbnRyb2wuY29uZmlndXJhdGlvbi52YWxpZGF0b3JzLCAodmFsdWU6IGFueSkgPT4ge1xyXG4gICAgLy8gICBmZWVkYmFja1t2YWxpZGF0b3JdID0gXy5pc1N0cmluZyh2YWx1ZSkgPyB2YWx1ZSA6IHZhbHVlLm1lc3NhZ2UgfHwgbnVsbDtcclxuICAgIC8vIH0pO1xyXG5cclxuXHJcbiAgICBpZiAoIXZhbGlkYXRvcikgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgc3dpdGNoICh2YWxpZGF0b3IpIHtcclxuICAgICAgY2FzZSAncmVxdWlyZWQnOlxyXG4gICAgICAgIGlmICh0aGlzLm5hbWUgPT09ICdjb25maXJtX3Bhc3N3b3JkJykge1xyXG4gICAgICAgICAgcmV0dXJuIGZlZWRiYWNrWydyZXF1aXJlZCddIHx8IGBZb3UgbmVlZCB0byBjb25maXJtIHBhc3N3b3JkYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZlZWRiYWNrWydyZXF1aXJlZCddIHx8IGAke18uc3RhcnRDYXNlKHRoaXMubmFtZSl9ICBpcyByZXF1aXJlZGA7XHJcbiAgICAgIGNhc2UgJ2FncmVlbWVudCc6XHJcbiAgICAgICAgcmV0dXJuIGZlZWRiYWNrWydhZ3JlZW1lbnQnXSB8fCBgWW91IG11c3QgYWdyZWUgdG8gdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zIGJlZm9yZSBjb250aW51aW5nIWA7XHJcbiAgICAgIGNhc2UgJ2VtYWlsJyA6XHJcbiAgICAgICAgcmV0dXJuIGZlZWRiYWNrWydlbWFpbCddIHx8IGBJbnZhbGlkIGVtYWlsIGFkZHJlc3MuIFZhbGlkIGUtbWFpbCBjYW4gY29udGFpbiBvbmx5IGxhdGluIGxldHRlcnMsIG51bWJlcnMsICdAJyBhbmQgJy4nYDtcclxuICAgICAgY2FzZSAnZW1haWxfZXhpc3RlZCc6XHJcbiAgICAgICAgcmV0dXJuIGZlZWRiYWNrWydlbWFpbF9leGlzdGVkJ10gfHwgYCR7Xy5zdGFydENhc2UodGhpcy5uYW1lKX0gaXMgZXhpc3RlZCEgUGxlYXNlIHVzZSBhbm90aGVyIG9uZWA7XHJcblxyXG4gICAgICBjYXNlICdzdHJpbmdMZW5ndGgnIDpcclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlLm1pbkxlbmd0aCA/IGAke18uc3RhcnRDYXNlKHRoaXMubmFtZSl9IGNhbm5vdCBiZSBzaG9ydGVyIHRoYW4gJHt2YWx1ZS5taW5MZW5ndGh9YCA6IGAke18uc3RhcnRDYXNlKHRoaXMubmFtZSl9IGNhbm5vdCBiZSBsb25nZXIgdGhhbiAke3ZhbHVlLm1heExlbmd0aH1gO1xyXG5cclxuICAgICAgY2FzZSAnZXF1YWxUbycgOlxyXG5cclxuICAgICAgICByZXR1cm4gYENvbmZpcm0gcGFzc3dvcmQgaXMgbm90IGVxdWFsIHRvIHBhc3N3b3JkYDtcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgfTtcclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlcyk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIHBhcnNlQ29udGV4dCA9ICgpID0+IHtcclxuICAgIC8vIHRoaXMuZm9ybUdyb3VwID0gdGhpcy5fZm9ybVN2cy5nZXRGb3JtR3JvdXAoKTtcclxuXHJcbiAgICB0aGlzLl9jb250cm9sID0gdGhpcy5mb3JtR3JvdXAuZ2V0KHRoaXMubmFtZSk7XHJcbiAgICB0aGlzLmludmFsaWQgPSB0aGlzLl9jb250cm9sLmludmFsaWQgJiYgKHRoaXMuX2NvbnRyb2wuZGlydHkgfHwgdGhpcy5fY29udHJvbC50b3VjaGVkIHx8IHRoaXMuZm9ybUdyb3VwLnN1Ym1pdHRlZCk7XHJcbiAgICB0aGlzLmVycm9yX2xpc3QgPSBfLm1hcCh0aGlzLl9jb250cm9sLmVycm9ycywgKHZhbHVlLCBrZXkpID0+IHRoaXMuZ2VuZXJhdGVfZmVlZGJhY2soa2V5LCB2YWx1ZSkpO1xyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfTtcclxuXHJcbn1cclxuIl19