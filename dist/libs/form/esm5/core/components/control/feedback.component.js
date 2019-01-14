/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Host, Optional, SkipSelf } from '@angular/core';
import { untilDestroyed } from '@ionar/utility';
import { FormControlComponent } from '../form-control.component';
var FeedbackComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function FeedbackComponent(cd, parent) {
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
    Object.defineProperty(FeedbackComponent.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            return this._parent.control;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FeedbackComponent.prototype, "invalid", {
        get: /**
         * @return {?}
         */
        function () {
            return this.control.invalid && (this.control.dirty || this.control.touched || this._parent.root.submitted);
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @return {?}
     */
    FeedbackComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._parent.root.statusChanges.pipe(untilDestroyed(this)).subscribe(function (status) {
            _this.cd.markForCheck();
        });
        this._parent.root.ngSubmit.pipe(untilDestroyed(this)).subscribe(function (data) {
            _this.cd.markForCheck();
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
                    template: "\n\n      <ng-container *ngIf=\"invalid\">\n          <ng-container *ngFor=\"let err of control.errors\">\n              <div class=\"feedback\">{{err.message}}</div>\n          </ng-container>\n\n      </ng-container>\n\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n      :host {\n          display: flex;\n          flex-direction: column;\n          justify-content: flex-start;\n          width: 100%;\n          color: #f5222d;\n          font-size: 1.2rem;\n          margin-top: 0.5rem;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    FeedbackComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: FormControlComponent, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] }
    ]; };
    return FeedbackComponent;
}());
export { FeedbackComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL2NvbXBvbmVudHMvY29udHJvbC9mZWVkYmFjay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxJQUFJLEVBR0ksUUFBUSxFQUFpQixRQUFRLEVBQzFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUdqRTtJQTZDRSx3SEFBd0g7SUFDeEgsMkJBQ1UsRUFBcUIsRUFDSSxNQUE0QjtRQURyRCxPQUFFLEdBQUYsRUFBRSxDQUFtQjs7Ozs7Ozs7UUFaL0IsWUFBTyxHQUFnQyxJQUFJLENBQUM7UUFlMUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDeEIsQ0FBQztJQWRELHNCQUFJLHNDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQzlCLENBQUM7OztPQUFBO0lBQUEsQ0FBQztJQUVGLHNCQUFXLHNDQUFPOzs7O1FBQWxCO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdHLENBQUM7OztPQUFBO0lBQUEsQ0FBQzs7OztJQVVGLG9DQUFROzs7SUFBUjtRQUFBLGlCQVNDO1FBUEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ3pFLEtBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDbEUsS0FBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsdUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO0lBRWxDLENBQUM7Ozs7SUFHRCx1Q0FBVzs7O0lBQVg7SUFDQSxDQUFDOztnQkF0RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsa09BU1Q7b0JBYUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07NkJBWHRDLG1QQVVSO2lCQUVGOzs7O2dCQXJDQyxpQkFBaUI7Z0JBU1Ysb0JBQW9CLHVCQW1EeEIsUUFBUSxZQUFJLElBQUksWUFBSSxRQUFROztJQTJCakMsd0JBQUM7Q0FBQSxBQTNFRCxJQTJFQztTQWpEWSxpQkFBaUI7Ozs7Ozs7OztJQVM1QixvQ0FBNEM7Ozs7O0lBWTFDLCtCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEhvc3QsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsIE9wdGlvbmFsLCBTaW1wbGVDaGFuZ2VzLCBTa2lwU2VsZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB1bnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bpb25hci91dGlsaXR5JztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICcuLi8uLi9tb2RlbHMvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2Zvcm0tY29udHJvbC5jb21wb25lbnQnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm9ybS1mZWVkYmFjaycsXHJcbiAgdGVtcGxhdGU6IGBcclxuXHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpbnZhbGlkXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBlcnIgb2YgY29udHJvbC5lcnJvcnNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmVlZGJhY2tcIj57e2Vyci5tZXNzYWdlfX08L2Rpdj5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIGAsXHJcbiAgLy9sYW5ndWFnZT1TQ1NTXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgICA6aG9zdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgY29sb3I6ICNmNTIyMmQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICAgICAgfVxyXG4gIGBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGZWVkYmFja0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBUaGUgcGFyZW50ICBmb3IgdGhlIGNvbXBvbmVudHNcclxuICAgKlxyXG4gICAqIEBpbnRlcm5hbFxyXG4gICAqL1xyXG4gIF9wYXJlbnQ6IEZvcm1Db250cm9sQ29tcG9uZW50IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGdldCBjb250cm9sKCk6IEZvcm1Db250cm9sIHtcclxuICAgIHJldHVybiB0aGlzLl9wYXJlbnQuY29udHJvbDtcclxuICB9O1xyXG5cclxuICBwdWJsaWMgZ2V0IGludmFsaWQoKTogQm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5jb250cm9sLmludmFsaWQgJiYgKHRoaXMuY29udHJvbC5kaXJ0eSB8fCB0aGlzLmNvbnRyb2wudG91Y2hlZCB8fCB0aGlzLl9wYXJlbnQucm9vdC5zdWJtaXR0ZWQpO1xyXG4gIH07XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIEBTa2lwU2VsZigpICBwYXJlbnQ6IEZvcm1Db250cm9sQ29tcG9uZW50XHJcbiAgKSB7XHJcbiAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB0aGlzLl9wYXJlbnQucm9vdC5zdGF0dXNDaGFuZ2VzLnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZShzdGF0dXMgPT4ge1xyXG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fcGFyZW50LnJvb3QubmdTdWJtaXQucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1haW4gRnVuY3Rpb25zICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcblxyXG59XHJcbiJdfQ==