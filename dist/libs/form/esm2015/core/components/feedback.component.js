/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Host } from '@angular/core';
import { FormService } from '../providers/form.service';
import _ from 'lodash';
import { untilDestroyed } from '@ionar/utility';
import { ControlComponent } from './control.component';
export class FeedbackComponent {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} _formSvs
     * @param {?} cd
     * @param {?} _parent
     */
    constructor(_formSvs, cd, _parent) {
        this._formSvs = _formSvs;
        this.cd = cd;
        this._parent = _parent;
        this.invalid = false;
        this.show_feedback = true;
        this.generate_feedback = (validator, value) => {
            // const feedback = this._control.validateOptions.feedback
            // const feedback = this._control.validateOptions.feedback
            /** @type {?} */
            const feedback = {};
            // console.log(_.values(this._control.configuration.validators))
            // _.mapValues(this._control.configuration.validators, (value: any) => {
            //   feedback[validator] = _.isString(value) ? value : value.message || null;
            // });
            if (!validator)
                return null;
            switch (validator) {
                case 'required':
                    if (this._parent.name === 'confirm_password') {
                        return feedback['required'] || `You need to confirm password`;
                    }
                    return feedback['required'] || `${_.startCase(this._parent.name)}  is required`;
                case 'agreement':
                    return feedback['agreement'] || `You must agree to the terms and conditions before continuing!`;
                case 'email':
                    return feedback['email'] || `Invalid email address. Valid e-mail can contain only latin letters, numbers, '@' and '.'`;
                case 'email_existed':
                    return feedback['email_existed'] || `${_.startCase(this._parent.name)} is existed! Please use another one`;
                case 'stringLength':
                    return value.minLength ? `${_.startCase(this._parent.name)} cannot be shorter than ${value.minLength}` : `${_.startCase(this._parent.name)} cannot be longer than ${value.maxLength}`;
                case 'equalTo':
                    return `Confirm password is not equal to password`;
                default:
                    return value;
            }
        };
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.parseContext = () => {
            this._control = this.formGroup.get(this._parent.name);
            this.invalid = this._control.invalid && (this._control.dirty || this._control.touched || this.formGroup.submitted);
            this.error_list = _.map(this._control.errors, (value, key) => this.generate_feedback(key, value));
            this.cd.detectChanges();
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this._parent.formGroup) {
            this.formGroup = this._parent.formGroup;
            if (this._statusSubscription)
                this._statusSubscription.unsubscribe();
            if (this._submitSubscription)
                this._submitSubscription.unsubscribe();
            this._statusSubscription = this.formGroup.statusChanges.pipe(untilDestroyed(this)).subscribe(status => {
                this.parseContext();
            });
            this._submitSubscription = this.formGroup.ngSubmit.pipe(untilDestroyed(this)).subscribe(data => {
                this.parseContext();
            });
            this.parseContext();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
FeedbackComponent.decorators = [
    { type: Component, args: [{
                selector: 'form-feedback',
                template: `
      <ng-container *ngIf="show_feedback">
          <ng-container *ngIf="invalid">
              <ng-container *ngFor="let err of error_list">
                  <div class="feedback">{{err}}</div>
              </ng-container>

          </ng-container>
      </ng-container>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      :host {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 100%;
          color: #f5222d;
          font-size: 1.2rem;
          margin-top: 0.5rem;
      }
  `]
            }] }
];
/** @nocollapse */
FeedbackComponent.ctorParameters = () => [
    { type: FormService },
    { type: ChangeDetectorRef },
    { type: ControlComponent, decorators: [{ type: Host }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL2NvbXBvbmVudHMvZmVlZGJhY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsSUFBSSxFQUlMLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV4RCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBOEJ2RCxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7O0lBZTVCLFlBQ1UsUUFBcUIsRUFDckIsRUFBcUIsRUFDYixPQUF5QjtRQUZqQyxhQUFRLEdBQVIsUUFBUSxDQUFhO1FBQ3JCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ2IsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFaM0MsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixrQkFBYSxHQUFZLElBQUksQ0FBQztRQXNDOUIsc0JBQWlCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFFdkMsMERBQTBEOzs7a0JBRXBELFFBQVEsR0FBRyxFQUFFO1lBRW5CLGdFQUFnRTtZQUdoRSx3RUFBd0U7WUFDeEUsNkVBQTZFO1lBQzdFLE1BQU07WUFHTixJQUFJLENBQUMsU0FBUztnQkFBRSxPQUFPLElBQUksQ0FBQztZQUU1QixRQUFRLFNBQVMsRUFBRTtnQkFDakIsS0FBSyxVQUFVO29CQUNiLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssa0JBQWtCLEVBQUU7d0JBQzVDLE9BQU8sUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLDhCQUE4QixDQUFDO3FCQUMvRDtvQkFDRCxPQUFPLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO2dCQUNsRixLQUFLLFdBQVc7b0JBQ2QsT0FBTyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksK0RBQStELENBQUM7Z0JBQ2xHLEtBQUssT0FBTztvQkFDVixPQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSwwRkFBMEYsQ0FBQztnQkFDekgsS0FBSyxlQUFlO29CQUNsQixPQUFPLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMscUNBQXFDLENBQUM7Z0JBRTdHLEtBQUssY0FBYztvQkFFakIsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLDBCQUEwQixLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBRXhMLEtBQUssU0FBUztvQkFFWixPQUFPLDJDQUEyQyxDQUFDO2dCQUVyRDtvQkFDRSxPQUFPLEtBQUssQ0FBQzthQUNoQjtRQUdILENBQUMsQ0FBQzs7UUFZRixpQkFBWSxHQUFHLEdBQUcsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbkgsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2xHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDMUIsQ0FBQyxDQUFDO0lBckZGLENBQUM7Ozs7SUFFRCxRQUFRO0lBRVIsQ0FBQzs7OztJQUVELGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFO1lBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUM7WUFFeEMsSUFBSSxJQUFJLENBQUMsbUJBQW1CO2dCQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNyRSxJQUFJLElBQUksQ0FBQyxtQkFBbUI7Z0JBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBRXJFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNwRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDN0YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7Ozs7SUErQ0QsV0FBVyxDQUFDLE9BQU87SUFFbkIsQ0FBQzs7OztJQUdELFdBQVc7SUFDWCxDQUFDOzs7WUExSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7Ozs7Ozs7OztHQVNUO2dCQWFELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO3lCQVh0Qzs7Ozs7Ozs7OztHQVVSO2FBRUY7Ozs7WUFuQ1EsV0FBVztZQVBsQixpQkFBaUI7WUFhVixnQkFBZ0IsdUJBZ0RwQixJQUFJOzs7O0lBZlAscUNBQXNCOztJQUN0QixzQ0FBcUI7O0lBRXJCLG9DQUF5Qjs7SUFDekIsdUNBQTRCOztJQUM1QiwwQ0FBOEI7Ozs7O0lBRzlCLGdEQUEwQzs7Ozs7SUFDMUMsZ0RBQTBDOztJQWtDMUMsOENBMENFOztJQVlGLHlDQUtFOzs7OztJQXpGQSxxQ0FBNkI7Ozs7O0lBQzdCLCtCQUE2Qjs7Ozs7SUFDN0Isb0NBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdDaGVja2VkLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBIb3N0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2Zvcm0uc2VydmljZSc7XHJcblxyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyB1bnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bpb25hci91dGlsaXR5JztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICcuLi9tb2RlbHMvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICcuLi9tb2RlbHMvRm9ybUdyb3VwJztcclxuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Zvcm0tZmVlZGJhY2snLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93X2ZlZWRiYWNrXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGVyciBvZiBlcnJvcl9saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmZWVkYmFja1wiPnt7ZXJyfX08L2Rpdj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgYCxcclxuICAvL2xhbmd1YWdlPVNDU1NcclxuICBzdHlsZXM6IFtgXHJcbiAgICAgIDpob3N0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBjb2xvcjogI2Y1MjIyZDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gICAgICB9XHJcbiAgYF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEZlZWRiYWNrQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0NoZWNrZWQsIE9uRGVzdHJveSB7XHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIF9jb250cm9sOiBGb3JtQ29udHJvbDtcclxuICBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcbiAgaW52YWxpZDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIGVycm9yX2xpc3Q6IHN0cmluZ1tdIHwgbnVsbDtcclxuICBzaG93X2ZlZWRiYWNrOiBCb29sZWFuID0gdHJ1ZTtcclxuXHJcblxyXG4gIHByaXZhdGUgX3N0YXR1c1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gIHByaXZhdGUgX3N1Ym1pdFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2Zvcm1TdnM6IEZvcm1TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBASG9zdCgpIHByaXZhdGUgX3BhcmVudDogQ29udHJvbENvbXBvbmVudFxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX3BhcmVudC5mb3JtR3JvdXApIHtcclxuICAgICAgdGhpcy5mb3JtR3JvdXAgPSB0aGlzLl9wYXJlbnQuZm9ybUdyb3VwO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX3N0YXR1c1N1YnNjcmlwdGlvbikgdGhpcy5fc3RhdHVzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIGlmICh0aGlzLl9zdWJtaXRTdWJzY3JpcHRpb24pIHRoaXMuX3N1Ym1pdFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cclxuICAgICAgdGhpcy5fc3RhdHVzU3Vic2NyaXB0aW9uID0gdGhpcy5mb3JtR3JvdXAuc3RhdHVzQ2hhbmdlcy5waXBlKHVudGlsRGVzdHJveWVkKHRoaXMpKS5zdWJzY3JpYmUoc3RhdHVzID0+IHtcclxuICAgICAgICB0aGlzLnBhcnNlQ29udGV4dCgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuX3N1Ym1pdFN1YnNjcmlwdGlvbiA9IHRoaXMuZm9ybUdyb3VwLm5nU3VibWl0LnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICB0aGlzLnBhcnNlQ29udGV4dCgpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMucGFyc2VDb250ZXh0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgZ2VuZXJhdGVfZmVlZGJhY2sgPSAodmFsaWRhdG9yLCB2YWx1ZSkgPT4ge1xyXG5cclxuICAgIC8vIGNvbnN0IGZlZWRiYWNrID0gdGhpcy5fY29udHJvbC52YWxpZGF0ZU9wdGlvbnMuZmVlZGJhY2tcclxuXHJcbiAgICBjb25zdCBmZWVkYmFjayA9IHt9O1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKF8udmFsdWVzKHRoaXMuX2NvbnRyb2wuY29uZmlndXJhdGlvbi52YWxpZGF0b3JzKSlcclxuXHJcblxyXG4gICAgLy8gXy5tYXBWYWx1ZXModGhpcy5fY29udHJvbC5jb25maWd1cmF0aW9uLnZhbGlkYXRvcnMsICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAvLyAgIGZlZWRiYWNrW3ZhbGlkYXRvcl0gPSBfLmlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlIDogdmFsdWUubWVzc2FnZSB8fCBudWxsO1xyXG4gICAgLy8gfSk7XHJcblxyXG5cclxuICAgIGlmICghdmFsaWRhdG9yKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBzd2l0Y2ggKHZhbGlkYXRvcikge1xyXG4gICAgICBjYXNlICdyZXF1aXJlZCc6XHJcbiAgICAgICAgaWYgKHRoaXMuX3BhcmVudC5uYW1lID09PSAnY29uZmlybV9wYXNzd29yZCcpIHtcclxuICAgICAgICAgIHJldHVybiBmZWVkYmFja1sncmVxdWlyZWQnXSB8fCBgWW91IG5lZWQgdG8gY29uZmlybSBwYXNzd29yZGA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmZWVkYmFja1sncmVxdWlyZWQnXSB8fCBgJHtfLnN0YXJ0Q2FzZSh0aGlzLl9wYXJlbnQubmFtZSl9ICBpcyByZXF1aXJlZGA7XHJcbiAgICAgIGNhc2UgJ2FncmVlbWVudCc6XHJcbiAgICAgICAgcmV0dXJuIGZlZWRiYWNrWydhZ3JlZW1lbnQnXSB8fCBgWW91IG11c3QgYWdyZWUgdG8gdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zIGJlZm9yZSBjb250aW51aW5nIWA7XHJcbiAgICAgIGNhc2UgJ2VtYWlsJyA6XHJcbiAgICAgICAgcmV0dXJuIGZlZWRiYWNrWydlbWFpbCddIHx8IGBJbnZhbGlkIGVtYWlsIGFkZHJlc3MuIFZhbGlkIGUtbWFpbCBjYW4gY29udGFpbiBvbmx5IGxhdGluIGxldHRlcnMsIG51bWJlcnMsICdAJyBhbmQgJy4nYDtcclxuICAgICAgY2FzZSAnZW1haWxfZXhpc3RlZCc6XHJcbiAgICAgICAgcmV0dXJuIGZlZWRiYWNrWydlbWFpbF9leGlzdGVkJ10gfHwgYCR7Xy5zdGFydENhc2UodGhpcy5fcGFyZW50Lm5hbWUpfSBpcyBleGlzdGVkISBQbGVhc2UgdXNlIGFub3RoZXIgb25lYDtcclxuXHJcbiAgICAgIGNhc2UgJ3N0cmluZ0xlbmd0aCcgOlxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWUubWluTGVuZ3RoID8gYCR7Xy5zdGFydENhc2UodGhpcy5fcGFyZW50Lm5hbWUpfSBjYW5ub3QgYmUgc2hvcnRlciB0aGFuICR7dmFsdWUubWluTGVuZ3RofWAgOiBgJHtfLnN0YXJ0Q2FzZSh0aGlzLl9wYXJlbnQubmFtZSl9IGNhbm5vdCBiZSBsb25nZXIgdGhhbiAke3ZhbHVlLm1heExlbmd0aH1gO1xyXG5cclxuICAgICAgY2FzZSAnZXF1YWxUbycgOlxyXG5cclxuICAgICAgICByZXR1cm4gYENvbmZpcm0gcGFzc3dvcmQgaXMgbm90IGVxdWFsIHRvIHBhc3N3b3JkYDtcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgfTtcclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlcyk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIHBhcnNlQ29udGV4dCA9ICgpID0+IHtcclxuICAgIHRoaXMuX2NvbnRyb2wgPSB0aGlzLmZvcm1Hcm91cC5nZXQodGhpcy5fcGFyZW50Lm5hbWUpO1xyXG4gICAgdGhpcy5pbnZhbGlkID0gdGhpcy5fY29udHJvbC5pbnZhbGlkICYmICh0aGlzLl9jb250cm9sLmRpcnR5IHx8IHRoaXMuX2NvbnRyb2wudG91Y2hlZCB8fCB0aGlzLmZvcm1Hcm91cC5zdWJtaXR0ZWQpO1xyXG4gICAgdGhpcy5lcnJvcl9saXN0ID0gXy5tYXAodGhpcy5fY29udHJvbC5lcnJvcnMsICh2YWx1ZSwga2V5KSA9PiB0aGlzLmdlbmVyYXRlX2ZlZWRiYWNrKGtleSwgdmFsdWUpKTtcclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH07XHJcblxyXG59XHJcbiJdfQ==