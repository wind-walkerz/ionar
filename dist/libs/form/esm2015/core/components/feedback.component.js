/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormService } from '../providers/form.service';
import _ from 'lodash';
import { untilDestroyed } from '@ionar/utility';
import { FormGroup } from '../models/FormGroup';
export class FeedbackComponent {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} _formSvs
     * @param {?} cd
     */
    constructor(_formSvs, cd) {
        this._formSvs = _formSvs;
        this.cd = cd;
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
                    if (this.name === 'confirm_password') {
                        return feedback['required'] || `You need to confirm password`;
                    }
                    return feedback['required'] || `${_.startCase(this.name)}  is required`;
                case 'agreement':
                    return feedback['agreement'] || `You must agree to the terms and conditions before continuing!`;
                case 'email':
                    return feedback['email'] || `Invalid email address. Valid e-mail can contain only latin letters, numbers, '@' and '.'`;
                case 'email_existed':
                    return feedback['email_existed'] || `${_.startCase(this.name)} is existed! Please use another one`;
                case 'stringLength':
                    return value.minLength ? `${_.startCase(this.name)} cannot be shorter than ${value.minLength}` : `${_.startCase(this.name)} cannot be longer than ${value.maxLength}`;
                case 'equalTo':
                    return `Confirm password is not equal to password`;
                default:
                    return value;
            }
        };
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.parseContext = () => {
            // this.formGroup = this._formSvs.getFormGroup();
            this._control = this.formGroup.get(this.name);
            this.invalid = this._control.invalid && (this._control.dirty || this._control.touched || this.formGroup.submitted);
            this.error_list = _.map(this._control.errors, (value, key) => this.generate_feedback(key, value));
            this.cd.detectChanges();
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.parseContext();
        this.formGroup.statusChanges.pipe(untilDestroyed(this)).subscribe(status => {
            this.parseContext();
        });
        this.formGroup.ngSubmit.pipe(untilDestroyed(this)).subscribe(data => {
            this.parseContext();
        });
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
    { type: ChangeDetectorRef }
];
FeedbackComponent.propDecorators = {
    name: [{ type: Input }],
    formGroup: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL2NvbXBvbmVudHMvZmVlZGJhY2suY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUlOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV4RCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQTZCaEQsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBYTVCLFlBQ1UsUUFBcUIsRUFDckIsRUFBcUI7UUFEckIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUNyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQVAvQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBdUI5QixzQkFBaUIsR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUV2QywwREFBMEQ7OztrQkFFcEQsUUFBUSxHQUFHLEVBQUU7WUFFbkIsZ0VBQWdFO1lBR2hFLHdFQUF3RTtZQUN4RSw2RUFBNkU7WUFDN0UsTUFBTTtZQUdOLElBQUksQ0FBQyxTQUFTO2dCQUFFLE9BQU8sSUFBSSxDQUFDO1lBRTVCLFFBQVEsU0FBUyxFQUFFO2dCQUNqQixLQUFLLFVBQVU7b0JBQ2IsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLGtCQUFrQixFQUFFO3dCQUNwQyxPQUFPLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSw4QkFBOEIsQ0FBQztxQkFDL0Q7b0JBQ0QsT0FBTyxRQUFRLENBQUMsVUFBVSxDQUFD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QUE4Qjs7SUF1QjlCLDhDQTBDRTs7SUFZRix5Q0FPRTs7Ozs7SUFoRkEscUNBQTZCOzs7OztJQUM3QiwrQkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gJy4uL3Byb3ZpZGVycy9mb3JtLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgdW50aWxEZXN0cm95ZWQgfSBmcm9tICdAaW9uYXIvdXRpbGl0eSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnLi4vbW9kZWxzL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnLi4vbW9kZWxzL0Zvcm1Hcm91cCc7XHJcbmltcG9ydCB7IFZhbGlkYXRvclR5cGUgfSBmcm9tICcuLi9tb2RlbHMvVmFsaWRhdG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm9ybS1mZWVkYmFjaycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dfZmVlZGJhY2tcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZXJyIG9mIGVycm9yX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZlZWRiYWNrXCI+e3tlcnJ9fTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgLFxyXG4gIC8vbGFuZ3VhZ2U9U0NTU1xyXG4gIHN0eWxlczogW2BcclxuICAgICAgOmhvc3Qge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGNvbG9yOiAjZjUyMjJkO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICAgIH1cclxuICBgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmVlZGJhY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xyXG5cclxuICBfY29udHJvbDogRm9ybUNvbnRyb2w7XHJcbiAgQElucHV0KCkgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblxyXG4gIGludmFsaWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuICBlcnJvcl9saXN0OiBzdHJpbmdbXSB8IG51bGw7XHJcbiAgc2hvd19mZWVkYmFjazogQm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfZm9ybVN2czogRm9ybVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnBhcnNlQ29udGV4dCgpO1xyXG5cclxuXHJcbiAgICB0aGlzLmZvcm1Hcm91cC5zdGF0dXNDaGFuZ2VzLnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZShzdGF0dXMgPT4ge1xyXG4gICAgICB0aGlzLnBhcnNlQ29udGV4dCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5mb3JtR3JvdXAubmdTdWJtaXQucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLnBhcnNlQ29udGV4dCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgZ2VuZXJhdGVfZmVlZGJhY2sgPSAodmFsaWRhdG9yLCB2YWx1ZSkgPT4ge1xyXG5cclxuICAgIC8vIGNvbnN0IGZlZWRiYWNrID0gdGhpcy5fY29udHJvbC52YWxpZGF0ZU9wdGlvbnMuZmVlZGJhY2tcclxuXHJcbiAgICBjb25zdCBmZWVkYmFjayA9IHt9O1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKF8udmFsdWVzKHRoaXMuX2NvbnRyb2wuY29uZmlndXJhdGlvbi52YWxpZGF0b3JzKSlcclxuXHJcblxyXG4gICAgLy8gXy5tYXBWYWx1ZXModGhpcy5fY29udHJvbC5jb25maWd1cmF0aW9uLnZhbGlkYXRvcnMsICh2YWx1ZTogYW55KSA9PiB7XHJcbiAgICAvLyAgIGZlZWRiYWNrW3ZhbGlkYXRvcl0gPSBfLmlzU3RyaW5nKHZhbHVlKSA/IHZhbHVlIDogdmFsdWUubWVzc2FnZSB8fCBudWxsO1xyXG4gICAgLy8gfSk7XHJcblxyXG5cclxuICAgIGlmICghdmFsaWRhdG9yKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBzd2l0Y2ggKHZhbGlkYXRvcikge1xyXG4gICAgICBjYXNlICdyZXF1aXJlZCc6XHJcbiAgICAgICAgaWYgKHRoaXMubmFtZSA9PT0gJ2NvbmZpcm1fcGFzc3dvcmQnKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmVlZGJhY2tbJ3JlcXVpcmVkJ10gfHwgYFlvdSBuZWVkIHRvIGNvbmZpcm0gcGFzc3dvcmRgO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmVlZGJhY2tbJ3JlcXVpcmVkJ10gfHwgYCR7Xy5zdGFydENhc2UodGhpcy5uYW1lKX0gIGlzIHJlcXVpcmVkYDtcclxuICAgICAgY2FzZSAnYWdyZWVtZW50JzpcclxuICAgICAgICByZXR1cm4gZmVlZGJhY2tbJ2FncmVlbWVudCddIHx8IGBZb3UgbXVzdCBhZ3JlZSB0byB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgYmVmb3JlIGNvbnRpbnVpbmchYDtcclxuICAgICAgY2FzZSAnZW1haWwnIDpcclxuICAgICAgICByZXR1cm4gZmVlZGJhY2tbJ2VtYWlsJ10gfHwgYEludmFsaWQgZW1haWwgYWRkcmVzcy4gVmFsaWQgZS1tYWlsIGNhbiBjb250YWluIG9ubHkgbGF0aW4gbGV0dGVycywgbnVtYmVycywgJ0AnIGFuZCAnLidgO1xyXG4gICAgICBjYXNlICdlbWFpbF9leGlzdGVkJzpcclxuICAgICAgICByZXR1cm4gZmVlZGJhY2tbJ2VtYWlsX2V4aXN0ZWQnXSB8fCBgJHtfLnN0YXJ0Q2FzZSh0aGlzLm5hbWUpfSBpcyBleGlzdGVkISBQbGVhc2UgdXNlIGFub3RoZXIgb25lYDtcclxuXHJcbiAgICAgIGNhc2UgJ3N0cmluZ0xlbmd0aCcgOlxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWUubWluTGVuZ3RoID8gYCR7Xy5zdGFydENhc2UodGhpcy5uYW1lKX0gY2Fubm90IGJlIHNob3J0ZXIgdGhhbiAke3ZhbHVlLm1pbkxlbmd0aH1gIDogYCR7Xy5zdGFydENhc2UodGhpcy5uYW1lKX0gY2Fubm90IGJlIGxvbmdlciB0aGFuICR7dmFsdWUubWF4TGVuZ3RofWA7XHJcblxyXG4gICAgICBjYXNlICdlcXVhbFRvJyA6XHJcblxyXG4gICAgICAgIHJldHVybiBgQ29uZmlybSBwYXNzd29yZCBpcyBub3QgZXF1YWwgdG8gcGFzc3dvcmRgO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG5cclxuICB9O1xyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1haW4gRnVuY3Rpb25zICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgcGFyc2VDb250ZXh0ID0gKCkgPT4ge1xyXG4gICAgLy8gdGhpcy5mb3JtR3JvdXAgPSB0aGlzLl9mb3JtU3ZzLmdldEZvcm1Hcm91cCgpO1xyXG5cclxuICAgIHRoaXMuX2NvbnRyb2wgPSB0aGlzLmZvcm1Hcm91cC5nZXQodGhpcy5uYW1lKTtcclxuICAgIHRoaXMuaW52YWxpZCA9IHRoaXMuX2NvbnRyb2wuaW52YWxpZCAmJiAodGhpcy5fY29udHJvbC5kaXJ0eSB8fCB0aGlzLl9jb250cm9sLnRvdWNoZWQgfHwgdGhpcy5mb3JtR3JvdXAuc3VibWl0dGVkKTtcclxuICAgIHRoaXMuZXJyb3JfbGlzdCA9IF8ubWFwKHRoaXMuX2NvbnRyb2wuZXJyb3JzLCAodmFsdWUsIGtleSkgPT4gdGhpcy5nZW5lcmF0ZV9mZWVkYmFjayhrZXksIHZhbHVlKSk7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9O1xyXG5cclxufVxyXG4iXX0=