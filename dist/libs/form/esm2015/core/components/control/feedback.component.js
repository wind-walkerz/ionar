/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Host, Optional, SkipSelf } from '@angular/core';
import { untilDestroyed } from '@ionar/utility';
import { FormControlComponent } from '../form-control.component';
export class FeedbackComponent {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} cd
     * @param {?} parent
     */
    constructor(cd, parent) {
        this.cd = cd;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        /**
         * \@description
         * The parent  for the components
         *
         * \@internal
         */
        this._parent = null;
        this._parent = parent;
    }
    /**
     * @return {?}
     */
    get control() {
        return this._parent.control;
    }
    ;
    /**
     * @return {?}
     */
    get invalid() {
        return this.control.invalid && (this.control.dirty || this.control.touched || this._parent.root.submitted);
    }
    ;
    /**
     * @return {?}
     */
    ngOnInit() {
        this._parent.root.statusChanges.pipe(untilDestroyed(this)).subscribe(status => {
            this.cd.markForCheck();
        });
        this._parent.root.ngSubmit.pipe(untilDestroyed(this)).subscribe(data => {
            this.cd.markForCheck();
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

      <ng-container *ngIf="invalid">
          <ng-container *ngFor="let err of control.errors">
              <div class="feedback">{{err.message}}</div>
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
    { type: ChangeDetectorRef },
    { type: FormControlComponent, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] }
];
if (false) {
    /**
     * \@description
     * The parent  for the components
     *
     * \@internal
     * @type {?}
     */
    FeedbackComponent.prototype._parent;
    /**
     * @type {?}
     * @private
     */
    FeedbackComponent.prototype.cd;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL2NvbXBvbmVudHMvY29udHJvbC9mZWVkYmFjay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxJQUFJLEVBR0ksUUFBUSxFQUFpQixRQUFRLEVBQzFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQTZCakUsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7O0lBb0I1QixZQUNVLEVBQXFCLEVBQ0ksTUFBNEI7UUFEckQsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7Ozs7Ozs7O1FBWi9CLFlBQU8sR0FBZ0MsSUFBSSxDQUFDO1FBZTFDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFkRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBQzlCLENBQUM7SUFBQSxDQUFDOzs7O0lBRUYsSUFBVyxPQUFPO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3RyxDQUFDO0lBQUEsQ0FBQzs7OztJQVVGLFFBQVE7UUFFTixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM1RSxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDckUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO0lBRWxDLENBQUM7Ozs7SUFHRCxXQUFXO0lBQ1gsQ0FBQzs7O1lBdEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7R0FTVDtnQkFhRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFYdEM7Ozs7Ozs7Ozs7R0FVUjthQUVGOzs7O1lBckNDLGlCQUFpQjtZQVNWLG9CQUFvQix1QkFtRHhCLFFBQVEsWUFBSSxJQUFJLFlBQUksUUFBUTs7Ozs7Ozs7OztJQWIvQixvQ0FBNEM7Ozs7O0lBWTFDLCtCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEhvc3QsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsIE9wdGlvbmFsLCBTaW1wbGVDaGFuZ2VzLCBTa2lwU2VsZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB1bnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bpb25hci91dGlsaXR5JztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICcuLi8uLi9tb2RlbHMvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2Zvcm0tY29udHJvbC5jb21wb25lbnQnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm9ybS1mZWVkYmFjaycsXHJcbiAgdGVtcGxhdGU6IGBcclxuXHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBlcnIgb2YgY29udHJvbC5lcnJvcnNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmVlZGJhY2tcIj57e2Vyci5tZXNzYWdlfX08L2Rpdj5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIGAsXHJcbiAgLy9sYW5ndWFnZT1TQ1NTXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgICA6aG9zdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgY29sb3I6ICNmNTIyMmQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgICAgfVxyXG4gIGBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZWVkYmFja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBUaGUgcGFyZW50ICBmb3IgdGhlIGNvbXBvbmVudHNcclxuICAgKlxyXG4gICAqIEBpbnRlcm5hbFxyXG4gICAqL1xyXG4gIF9wYXJlbnQ6IEZvcm1Db250cm9sQ29tcG9uZW50IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGdldCBjb250cm9sKCk6IEZvcm1Db250cm9sIHtcclxuICAgIHJldHVybiB0aGlzLl9wYXJlbnQuY29udHJvbDtcclxuICB9O1xyXG5cclxuICBwdWJsaWMgZ2V0IGludmFsaWQoKTogQm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLmludmFsaWQgJiYgKHRoaXMuY29udHJvbC5kaXJ0eSB8fCB0aGlzLmNvbnRyb2wudG91Y2hlZCB8fCB0aGlzLl9wYXJlbnQucm9vdC5zdWJtaXR0ZWQpO1xyXG4gIH07XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIEBTa2lwU2VsZigpICBwYXJlbnQ6IEZvcm1Db250cm9sQ29tcG9uZW50XHJcbiAgKSB7XHJcbiAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB0aGlzLl9wYXJlbnQucm9vdC5zdGF0dXNDaGFuZ2VzLnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZShzdGF0dXMgPT4ge1xyXG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fcGFyZW50LnJvb3QubmdTdWJtaXQucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1haW4gRnVuY3Rpb25zICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcblxyXG59XHJcbiJdfQ==