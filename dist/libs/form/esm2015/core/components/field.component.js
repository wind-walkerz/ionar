/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, TemplateRef } from '@angular/core';
import { FormService } from '../providers/form.service';
import { FormGroup } from '../models/FormGroup';
import { untilDestroyed } from '@ionar/utility';
export class FieldComponent {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} _formSvs
     * @param {?} cd
     */
    constructor(_formSvs, cd) {
        this._formSvs = _formSvs;
        this.cd = cd;
        this.invalid = false;
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.onChanged = e => {
            this._formSvs.getControl(this.name).setValue(e);
        };
        this.onTouched = () => {
            this._formSvs.getControl(this.name).markAsTouched();
        };
        this.onEntered = () => {
            // this.formSvs._onEntered()
            // if (this.name === 'password') this.focus = true;
        };
        this.parseContext = () => {
            this.control = this.formGroup.get(this.name);
            this.controlConfig = (/** @type {?} */ (this.control.configuration));
            this.invalid = this.control.invalid && (this.control.dirty || this.control.touched || this.formGroup.submitted);
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
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
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
        // this.cd.detach();
    }
}
FieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'form-field',
                template: `
      <ng-container *ngIf="control&&controlConfig">
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
    { type: ChangeDetectorRef }
];
FieldComponent.propDecorators = {
    name: [{ type: Input }],
    formGroup: [{ type: Input }],
    template: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL2NvbXBvbmVudHMvZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBR0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsS0FBSyxFQUlVLFdBQVcsRUFDM0IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXhELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFvQ2hELE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFXekIsWUFDVSxRQUFxQixFQUNyQixFQUFxQjtRQURyQixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBQ3JCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBTC9CLFlBQU8sR0FBWSxLQUFLLENBQUM7O1FBd0N6QixjQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQztRQUVGLGNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdEQsQ0FBQyxDQUFDO1FBRUYsY0FBUyxHQUFHLEdBQUcsRUFBRTtZQUNmLDRCQUE0QjtZQUM1QixtREFBbUQ7UUFDckQsQ0FBQyxDQUFDO1FBRUYsaUJBQVksR0FBRyxHQUFHLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFN0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxtQkFBZSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBQSxDQUFDO1lBRS9ELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ2hILElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFMUIsQ0FBQyxDQUFDO0lBdERGLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBCLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDekUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsZUFBZTtJQUVmLENBQUM7Ozs7SUFFRCxrQkFBa0I7SUFFbEIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7SUFFbEMsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxvQkFBb0I7SUFDdEIsQ0FBQzs7O1lBM0VGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CVDtnQkFRRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFQdEM7Ozs7OztHQU1SO2FBRUY7Ozs7WUF0Q1EsV0FBVztZQVRsQixpQkFBaUI7OzttQkFrRGhCLEtBQUs7d0JBR0wsS0FBSzt1QkFDTCxLQUFLOzs7O0lBSk4sOEJBQXNCOztJQUN0QixpQ0FBcUI7O0lBQ3JCLHVDQUE2Qjs7SUFDN0IsbUNBQThCOztJQUM5QixrQ0FBb0M7O0lBRXBDLGlDQUF5Qjs7SUF3Q3pCLG1DQUVFOztJQUVGLG1DQUVFOztJQUVGLG1DQUdFOztJQUVGLHNDQVFFOzs7OztJQXpEQSxrQ0FBNkI7Ozs7O0lBQzdCLDRCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tICcuLi9wcm92aWRlcnMvZm9ybS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICcuLi9tb2RlbHMvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICcuLi9tb2RlbHMvRm9ybUdyb3VwJztcclxuaW1wb3J0IHsgdW50aWxEZXN0cm95ZWQgfSBmcm9tICdAaW9uYXIvdXRpbGl0eSc7XHJcbmltcG9ydCB7IENvbnRyb2xDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvQ29udHJvbENvbmZpZyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmb3JtLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY29udHJvbCYmY29udHJvbENvbmZpZ1wiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICBkeW5hbWljX2ZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIFtjb250cm9sQ29uZmlnXT1cImNvbnRyb2xDb25maWdcIlxyXG5cclxuICAgICAgICAgICAgICAgICAgW2V2ZW50c109XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IG9uQ2hhbmdlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsdXI6IG9uVG91Y2hlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGVyOiBvbkVudGVyZWRcclxuICAgICAgICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cInRlbXBsYXRlXCJcclxuXHJcbiAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJjb250cm9sLnZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgW29wdGlvbnNdPVwiY29udHJvbENvbmZpZy5vcHRpb25zXCJcclxuICAgICAgICAgICAgICAgICAgW2ludmFsaWRdPVwiaW52YWxpZFwiXHJcbiAgICAgICAgICAgICAgICAgIFtyZWFkb25seV09XCJmb3JtR3JvdXAucmVhZG9ubHlcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgICA6aG9zdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICBgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0NoZWNrZWQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XHJcbiAgY29udHJvbDogRm9ybUNvbnRyb2w7XHJcbiAgY29udHJvbENvbmZpZzogQ29udHJvbENvbmZpZztcclxuICBASW5wdXQoKSBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgaW52YWxpZDogQm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2Zvcm1TdnM6IEZvcm1TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5wYXJzZUNvbnRleHQoKTtcclxuXHJcbiAgICB0aGlzLmZvcm1Hcm91cC5zdGF0dXNDaGFuZ2VzLnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZShzdGF0dXMgPT4ge1xyXG4gICAgICB0aGlzLnBhcnNlQ29udGV4dCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5mb3JtR3JvdXAubmdTdWJtaXQucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLnBhcnNlQ29udGV4dCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMuY2QuZGV0YWNoKCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1haW4gRnVuY3Rpb25zICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgb25DaGFuZ2VkID0gZSA9PiB7XHJcbiAgICB0aGlzLl9mb3JtU3ZzLmdldENvbnRyb2wodGhpcy5uYW1lKS5zZXRWYWx1ZShlKTtcclxuICB9O1xyXG5cclxuICBvblRvdWNoZWQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9mb3JtU3ZzLmdldENvbnRyb2wodGhpcy5uYW1lKS5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgfTtcclxuXHJcbiAgb25FbnRlcmVkID0gKCkgPT4ge1xyXG4gICAgLy8gdGhpcy5mb3JtU3ZzLl9vbkVudGVyZWQoKVxyXG4gICAgLy8gaWYgKHRoaXMubmFtZSA9PT0gJ3Bhc3N3b3JkJykgdGhpcy5mb2N1cyA9IHRydWU7XHJcbiAgfTtcclxuXHJcbiAgcGFyc2VDb250ZXh0ID0gKCkgPT4ge1xyXG4gICAgdGhpcy5jb250cm9sID0gdGhpcy5mb3JtR3JvdXAuZ2V0KHRoaXMubmFtZSk7XHJcblxyXG4gICAgdGhpcy5jb250cm9sQ29uZmlnID0gPENvbnRyb2xDb25maWc+dGhpcy5jb250cm9sLmNvbmZpZ3VyYXRpb247XHJcblxyXG4gICAgdGhpcy5pbnZhbGlkID0gdGhpcy5jb250cm9sLmludmFsaWQgJiYgKHRoaXMuY29udHJvbC5kaXJ0eSB8fCB0aGlzLmNvbnRyb2wudG91Y2hlZCB8fCB0aGlzLmZvcm1Hcm91cC5zdWJtaXR0ZWQpO1xyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG4gIH07XHJcblxyXG59XHJcbiJdfQ==