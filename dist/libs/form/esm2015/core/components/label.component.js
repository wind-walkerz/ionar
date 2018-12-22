/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { FormService } from '../providers/form.service';
import { FormGroup } from '../models/FormGroup';
import _ from 'lodash';
export class LabelComponent {
    /**
     * @param {?} _formSvs
     * @param {?} cd
     */
    constructor(_formSvs, cd) {
        this._formSvs = _formSvs;
        this.cd = cd;
        this.parseContext = () => {
            this._control = this.formGroup.get(this.name);
            this._controlConfig = (/** @type {?} */ (this._control.configuration));
            this.label = this._controlConfig.label || _.startCase(this.name);
            this.cd.markForCheck();
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.parseContext();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
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
    { type: ChangeDetectorRef }
];
LabelComponent.propDecorators = {
    name: [{ type: Input }],
    formGroup: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL2NvbXBvbmVudHMvbGFiZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBRVQsS0FBSyxFQUdOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUd4RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFaEQsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBb0J2QixNQUFNLE9BQU8sY0FBYzs7Ozs7SUFRekIsWUFDVSxRQUFxQixFQUNyQixFQUFxQjtRQURyQixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBQ3JCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBVy9CLGlCQUFZLEdBQUcsR0FBRyxFQUFFO1lBRWxCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTlDLElBQUksQ0FBQyxjQUFjLEdBQUcsbUJBQWUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUEsQ0FBQztZQUVqRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWpFLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDO0lBbEJGLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxXQUFXO0lBQ1gsQ0FBQzs7O1lBcENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOztHQUVUO2dCQVdELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO3lCQVZ0Qzs7Ozs7Ozs7O0dBU1I7YUFFRjs7OztZQXhCUSxXQUFXO1lBUGxCLGlCQUFpQjs7O21CQWlDaEIsS0FBSzt3QkFDTCxLQUFLOzs7O0lBRE4sOEJBQXNCOztJQUN0QixtQ0FBOEI7O0lBQzlCLHdDQUE4Qjs7SUFDOUIsa0NBQXNCOztJQUV0QiwrQkFBVzs7SUFlWCxzQ0FTRTs7Ozs7SUFyQkEsa0NBQTZCOzs7OztJQUM3Qiw0QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2Zvcm0uc2VydmljZSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnLi4vbW9kZWxzL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IHsgQ29udHJvbENvbmZpZyB9IGZyb20gJy4uL21vZGVscy9Db250cm9sQ29uZmlnJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnLi4vbW9kZWxzL0Zvcm1Hcm91cCc7XHJcbmltcG9ydCB7IHVudGlsRGVzdHJveWVkIH0gZnJvbSAnQGlvbmFyL3V0aWxpdHknO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm9ybS1sYWJlbCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAge3tsYWJlbH19XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgICAgIDpob3N0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICAgICAgfVxyXG4gIGBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMYWJlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgX2NvbnRyb2xDb25maWc6IENvbnRyb2xDb25maWc7XHJcbiAgX2NvbnRyb2w6IEZvcm1Db250cm9sO1xyXG5cclxuICBsYWJlbDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2Zvcm1TdnM6IEZvcm1TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5wYXJzZUNvbnRleHQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgcGFyc2VDb250ZXh0ID0gKCkgPT4ge1xyXG5cclxuICAgIHRoaXMuX2NvbnRyb2wgPSB0aGlzLmZvcm1Hcm91cC5nZXQodGhpcy5uYW1lKTtcclxuXHJcbiAgICB0aGlzLl9jb250cm9sQ29uZmlnID0gPENvbnRyb2xDb25maWc+dGhpcy5fY29udHJvbC5jb25maWd1cmF0aW9uO1xyXG5cclxuICAgIHRoaXMubGFiZWwgPSB0aGlzLl9jb250cm9sQ29uZmlnLmxhYmVsIHx8IF8uc3RhcnRDYXNlKHRoaXMubmFtZSk7XHJcblxyXG4gICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICB9O1xyXG59XHJcbiJdfQ==