/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Host } from '@angular/core';
import { FormService } from '../providers/form.service';
import _ from 'lodash';
import { ControlComponent } from './control.component';
export class LabelComponent {
    /**
     * @param {?} _formSvs
     * @param {?} cd
     * @param {?} _parent
     */
    constructor(_formSvs, cd, _parent) {
        this._formSvs = _formSvs;
        this.cd = cd;
        this._parent = _parent;
        this.parseContext = () => {
            this.control = this.formGroup.get(this._parent.name);
            this.controlConfig = (/** @type {?} */ (this.control.configuration));
            this.label = this.controlConfig.label || _.startCase(this._parent.name);
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
            this.parseContext();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.cd.detach();
    }
}
LabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'form-label',
                template: `
      {{label}}
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      :host {
          display: flex;
          align-items: center;
          color: rgba(0, 0, 0, 0.85);
          font-size: 1.6rem;
          font-weight: 700;
          position: relative
      }
  `]
            }] }
];
/** @nocollapse */
LabelComponent.ctorParameters = () => [
    { type: FormService },
    { type: ChangeDetectorRef },
    { type: ControlComponent, decorators: [{ type: Host }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL2NvbXBvbmVudHMvbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsSUFBSSxFQUdMLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUl4RCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFvQnZELE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFPekIsWUFDVSxRQUFxQixFQUNyQixFQUFxQixFQUNiLE9BQXlCO1FBRmpDLGFBQVEsR0FBUixRQUFRLENBQWE7UUFDckIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDYixZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQW9CM0MsaUJBQVksR0FBRyxHQUFHLEVBQUU7WUFFbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXJELElBQUksQ0FBQyxhQUFhLEdBQUcsbUJBQWUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUEsQ0FBQztZQUUvRCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV4RSxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQztJQTNCRixDQUFDOzs7O0lBRUQsUUFBUTtJQUVSLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUMxQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBRXhDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7WUE3Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7O0dBRVQ7Z0JBV0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07eUJBVnRDOzs7Ozs7Ozs7R0FTUjthQUVGOzs7O1lBeEJRLFdBQVc7WUFObEIsaUJBQWlCO1lBV1YsZ0JBQWdCLHVCQThCcEIsSUFBSTs7OztJQVRQLG1DQUFxQjs7SUFDckIsdUNBQTZCOztJQUM3QixpQ0FBcUI7O0lBRXJCLCtCQUFXOztJQXlCWCxzQ0FTRTs7Ozs7SUEvQkEsa0NBQTZCOzs7OztJQUM3Qiw0QkFBNkI7Ozs7O0lBQzdCLGlDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2Zvcm0uc2VydmljZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnLi4vbW9kZWxzL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IHsgQ29udHJvbENvbmZpZyB9IGZyb20gJy4uL21vZGVscy9Db250cm9sQ29uZmlnJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnLi4vbW9kZWxzL0Zvcm1Hcm91cCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbnRyb2wuY29tcG9uZW50JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Zvcm0tbGFiZWwnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIHt7bGFiZWx9fVxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgICA6aG9zdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgIH1cclxuICBgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGFiZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0NoZWNrZWQsIE9uRGVzdHJveSB7XHJcbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgY29udHJvbENvbmZpZzogQ29udHJvbENvbmZpZztcclxuICBjb250cm9sOiBGb3JtQ29udHJvbDtcclxuXHJcbiAgbGFiZWw6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9mb3JtU3ZzOiBGb3JtU2VydmljZSxcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQEhvc3QoKSBwcml2YXRlIF9wYXJlbnQ6IENvbnRyb2xDb21wb25lbnRcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9wYXJlbnQuZm9ybUdyb3VwKSB7XHJcbiAgICAgIHRoaXMuZm9ybUdyb3VwID0gdGhpcy5fcGFyZW50LmZvcm1Hcm91cDtcclxuXHJcbiAgICAgIHRoaXMucGFyc2VDb250ZXh0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2QuZGV0YWNoKCk7XHJcbiAgfVxyXG5cclxuICBwYXJzZUNvbnRleHQgPSAoKSA9PiB7XHJcblxyXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy5mb3JtR3JvdXAuZ2V0KHRoaXMuX3BhcmVudC5uYW1lKTtcclxuXHJcbiAgICB0aGlzLmNvbnRyb2xDb25maWcgPSA8Q29udHJvbENvbmZpZz50aGlzLmNvbnRyb2wuY29uZmlndXJhdGlvbjtcclxuXHJcbiAgICB0aGlzLmxhYmVsID0gdGhpcy5jb250cm9sQ29uZmlnLmxhYmVsIHx8IF8uc3RhcnRDYXNlKHRoaXMuX3BhcmVudC5uYW1lKTtcclxuXHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9O1xyXG59XHJcbiJdfQ==