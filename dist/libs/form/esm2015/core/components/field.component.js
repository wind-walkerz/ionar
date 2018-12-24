/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Host } from '@angular/core';
import { FormService } from '../providers/form.service';
import { ControlComponent } from './control.component';
import { untilDestroyed } from '@ionar/utility';
export class FieldComponent {
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
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.onChanged = e => {
            this._formSvs.getControl(this._parent.name).setValue(e);
        };
        this.onTouched = () => {
            this._formSvs.getControl(this._parent.name).markAsTouched();
        };
        this.onEntered = () => {
            // this.formSvs._onEntered()
            // if (this.name === 'password') this.focus = true;
        };
        this.parseContext = () => {
            this.control = this.formGroup.get(this._parent.name);
            this.controlConfig = (/** @type {?} */ (this.control.configuration));
            this.template = this._parent.fieldTemplate;
            this.invalid = this.control.invalid && (this.control.dirty || this.control.touched || this.formGroup.submitted);
            this.cd.detectChanges();
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // this.parseContext();
        //
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
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
        this.cd.detach();
    }
}
FieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'form-field',
                template: `
      <ng-container *ngIf="formGroup">
          <ng-container
                  dynamic_field
                  [controlConfig]="controlConfig"

                  [events]="{
                            change: onChanged,
                            blur: onTouched,
                            enter: onEntered
                    }"
                  [template]="template"

                  [value]="control.value"
                  [options]="controlConfig.options"
                  [invalid]="invalid"
                  [readonly]="formGroup.readonly"
          >
          </ng-container>
      </ng-container>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      :host {
          display: flex;
          width: 100%;
          height: 100%;
      }
  `]
            }] }
];
/** @nocollapse */
FieldComponent.ctorParameters = () => [
    { type: FormService },
    { type: ChangeDetectorRef },
    { type: ControlComponent, decorators: [{ type: Host }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL2NvbXBvbmVudHMvZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsSUFBSSxFQUtMLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUl4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFtQ2hELE1BQU0sT0FBTyxjQUFjOzs7Ozs7O0lBY3pCLFlBQ1UsUUFBcUIsRUFDckIsRUFBcUIsRUFDYixPQUF5QjtRQUZqQyxhQUFRLEdBQVIsUUFBUSxDQUFhO1FBQ3JCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ2IsWUFBTyxHQUFQLE9BQU8sQ0FBa0I7UUFWM0MsWUFBTyxHQUFZLEtBQUssQ0FBQzs7UUFzRHpCLGNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQztRQUVGLGNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzlELENBQUMsQ0FBQztRQUVGLGNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDZiw0QkFBNEI7WUFDNUIsbURBQW1EO1FBQ3JELENBQUMsQ0FBQztRQUVGLGlCQUFZLEdBQUcsR0FBRyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVyRCxJQUFJLENBQUMsYUFBYSxHQUFHLG1CQUFlLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFBLENBQUM7WUFFL0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQTtZQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUNoSCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRTFCLENBQUMsQ0FBQztJQWhFRixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLHVCQUF1QjtRQUN2QixFQUFFO0lBRUosQ0FBQzs7OztJQUVELGVBQWU7SUFFZixDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUU7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztZQUV4QyxJQUFJLElBQUksQ0FBQyxtQkFBbUI7Z0JBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3JFLElBQUksSUFBSSxDQUFDLG1CQUFtQjtnQkFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFckUsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3BHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN0QixDQUFDLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM3RixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7SUFDSCxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtJQUVsQyxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7O1lBeEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CVDtnQkFRRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFQdEM7Ozs7OztHQU1SO2FBRUY7Ozs7WUF4Q1EsV0FBVztZQVRsQixpQkFBaUI7WUFhVixnQkFBZ0IsdUJBc0RwQixJQUFJOzs7O0lBZFAsbUNBQXFCOztJQUNyQixpQ0FBcUI7O0lBQ3JCLHVDQUE2Qjs7SUFFN0IsaUNBQXlCOztJQUN6QixrQ0FBMEI7Ozs7O0lBRTFCLDZDQUEwQzs7Ozs7SUFDMUMsNkNBQTBDOztJQWtEMUMsbUNBRUU7O0lBRUYsbUNBRUU7O0lBRUYsbUNBR0U7O0lBRUYsc0NBU0U7Ozs7O0lBcEVBLGtDQUE2Qjs7Ozs7SUFDN0IsNEJBQTZCOzs7OztJQUM3QixpQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0NoZWNrZWQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tICcuLi9wcm92aWRlcnMvZm9ybS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICcuLi9tb2RlbHMvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICcuLi9tb2RlbHMvRm9ybUdyb3VwJztcclxuaW1wb3J0IHsgQ29udHJvbENvbmZpZyB9IGZyb20gJy4uL21vZGVscy9Db250cm9sQ29uZmlnJztcclxuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdW50aWxEZXN0cm95ZWQgfSBmcm9tICdAaW9uYXIvdXRpbGl0eSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmb3JtLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybUdyb3VwXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgIGR5bmFtaWNfZmllbGRcclxuICAgICAgICAgICAgICAgICAgW2NvbnRyb2xDb25maWddPVwiY29udHJvbENvbmZpZ1wiXHJcblxyXG4gICAgICAgICAgICAgICAgICBbZXZlbnRzXT1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZTogb25DaGFuZ2VkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmx1cjogb25Ub3VjaGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50ZXI6IG9uRW50ZXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwidGVtcGxhdGVcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgW3ZhbHVlXT1cImNvbnRyb2wudmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICBbb3B0aW9uc109XCJjb250cm9sQ29uZmlnLm9wdGlvbnNcIlxyXG4gICAgICAgICAgICAgICAgICBbaW52YWxpZF09XCJpbnZhbGlkXCJcclxuICAgICAgICAgICAgICAgICAgW3JlYWRvbmx5XT1cImZvcm1Hcm91cC5yZWFkb25seVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgICAgIDpob3N0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG4gIGBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuICBjb250cm9sOiBGb3JtQ29udHJvbDtcclxuICBjb250cm9sQ29uZmlnOiBDb250cm9sQ29uZmlnO1xyXG5cclxuICBpbnZhbGlkOiBCb29sZWFuID0gZmFsc2U7XHJcbiAgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT5cclxuXHJcbiAgcHJpdmF0ZSBfc3RhdHVzU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgcHJpdmF0ZSBfc3VibWl0U3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfZm9ybVN2czogRm9ybVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBIb3N0KCkgcHJpdmF0ZSBfcGFyZW50OiBDb250cm9sQ29tcG9uZW50XHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIHRoaXMucGFyc2VDb250ZXh0KCk7XHJcbiAgICAvL1xyXG5cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fcGFyZW50LmZvcm1Hcm91cCkge1xyXG4gICAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMuX3BhcmVudC5mb3JtR3JvdXA7XHJcblxyXG4gICAgICBpZiAodGhpcy5fc3RhdHVzU3Vic2NyaXB0aW9uKSB0aGlzLl9zdGF0dXNTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgaWYgKHRoaXMuX3N1Ym1pdFN1YnNjcmlwdGlvbikgdGhpcy5fc3VibWl0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblxyXG4gICAgICB0aGlzLl9zdGF0dXNTdWJzY3JpcHRpb24gPSB0aGlzLmZvcm1Hcm91cC5zdGF0dXNDaGFuZ2VzLnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZShzdGF0dXMgPT4ge1xyXG4gICAgICAgIHRoaXMucGFyc2VDb250ZXh0KCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5fc3VibWl0U3Vic2NyaXB0aW9uID0gdGhpcy5mb3JtR3JvdXAubmdTdWJtaXQucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIHRoaXMucGFyc2VDb250ZXh0KCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5wYXJzZUNvbnRleHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2QuZGV0YWNoKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1haW4gRnVuY3Rpb25zICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgb25DaGFuZ2VkID0gZSA9PiB7XHJcbiAgICB0aGlzLl9mb3JtU3ZzLmdldENvbnRyb2wodGhpcy5fcGFyZW50Lm5hbWUpLnNldFZhbHVlKGUpO1xyXG4gIH07XHJcblxyXG4gIG9uVG91Y2hlZCA9ICgpID0+IHtcclxuICAgIHRoaXMuX2Zvcm1TdnMuZ2V0Q29udHJvbCh0aGlzLl9wYXJlbnQubmFtZSkubWFya0FzVG91Y2hlZCgpO1xyXG4gIH07XHJcblxyXG4gIG9uRW50ZXJlZCA9ICgpID0+IHtcclxuICAgIC8vIHRoaXMuZm9ybVN2cy5fb25FbnRlcmVkKClcclxuICAgIC8vIGlmICh0aGlzLm5hbWUgPT09ICdwYXNzd29yZCcpIHRoaXMuZm9jdXMgPSB0cnVlO1xyXG4gIH07XHJcblxyXG4gIHBhcnNlQ29udGV4dCA9ICgpID0+IHtcclxuICAgIHRoaXMuY29udHJvbCA9IHRoaXMuZm9ybUdyb3VwLmdldCh0aGlzLl9wYXJlbnQubmFtZSk7XHJcblxyXG4gICAgdGhpcy5jb250cm9sQ29uZmlnID0gPENvbnRyb2xDb25maWc+dGhpcy5jb250cm9sLmNvbmZpZ3VyYXRpb247XHJcblxyXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRoaXMuX3BhcmVudC5maWVsZFRlbXBsYXRlXHJcbiAgICB0aGlzLmludmFsaWQgPSB0aGlzLmNvbnRyb2wuaW52YWxpZCAmJiAodGhpcy5jb250cm9sLmRpcnR5IHx8IHRoaXMuY29udHJvbC50b3VjaGVkIHx8IHRoaXMuZm9ybUdyb3VwLnN1Ym1pdHRlZCk7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuXHJcbiAgfTtcclxuXHJcbn1cclxuIl19