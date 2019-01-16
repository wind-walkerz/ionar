"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utility_1 = require("@ionar/utility");
var form_control_component_1 = require("../form-control.component");
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
        this._parent.root.statusChanges.pipe(utility_1.untilDestroyed(this)).subscribe(function (status) {
            _this.cd.markForCheck();
        });
        this._parent.root.ngSubmit.pipe(utility_1.untilDestroyed(this)).subscribe(function (data) {
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
        { type: core_1.Component, args: [{
                    selector: 'form-feedback',
                    template: "\n\n      <ng-container *ngIf=\"invalid\">\n          <ng-container *ngFor=\"let err of control.errors\">\n              <div class=\"feedback\">{{err.message}}</div>\n          </ng-container>\n\n      </ng-container>\n\n  ",
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    styles: ["\n      :host {\n          display: flex;\n          flex-direction: column;\n          justify-content: flex-start;\n          width: 100%;\n          color: #f5222d;\n          font-size: 1.2rem;\n          margin-top: 0.5rem;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    FeedbackComponent.ctorParameters = function () { return [
        { type: core_1.ChangeDetectorRef },
        { type: form_control_component_1.FormControlComponent, decorators: [{ type: core_1.Optional }, { type: core_1.Host }, { type: core_1.SkipSelf }] }
    ]; };
    return FeedbackComponent;
}());
exports.FeedbackComponent = FeedbackComponent;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL2NvbXBvbmVudHMvY29udHJvbC9mZWVkYmFjay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0NBUXVCO0FBQ3ZCLDBDQUFnRDtBQUVoRCxvRUFBaUU7QUFHakU7SUE2Q0Usd0hBQXdIO0lBQ3hILDJCQUNVLEVBQXFCLEVBQ0ksTUFBNEI7UUFEckQsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7Ozs7Ozs7O1FBWi9CLFlBQU8sR0FBZ0MsSUFBSSxDQUFDO1FBZTFDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLENBQUM7SUFkRCxzQkFBSSxzQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUFBLENBQUM7SUFFRixzQkFBVyxzQ0FBTzs7OztRQUFsQjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3RyxDQUFDOzs7T0FBQTtJQUFBLENBQUM7Ozs7SUFVRixvQ0FBUTs7O0lBQVI7UUFBQSxpQkFTQztRQVBDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsd0JBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLE1BQU07WUFDekUsS0FBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsd0JBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDbEUsS0FBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsdUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO0lBRWxDLENBQUM7Ozs7SUFHRCx1Q0FBVzs7O0lBQVg7SUFDQSxDQUFDOztnQkF0RUYsZ0JBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLGtPQVNUO29CQWFELGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNOzZCQVh0QyxtUEFVUjtpQkFFRjs7OztnQkFyQ0Msd0JBQWlCO2dCQVNWLDZDQUFvQix1QkFtRHhCLGVBQVEsWUFBSSxXQUFJLFlBQUksZUFBUTs7SUEyQmpDLHdCQUFDO0NBQUEsQUEzRUQsSUEyRUM7QUFqRFksOENBQWlCOzs7Ozs7Ozs7SUFTNUIsb0NBQTRDOzs7OztJQVkxQywrQkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBIb3N0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LCBPcHRpb25hbCwgU2ltcGxlQ2hhbmdlcywgU2tpcFNlbGZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdW50aWxEZXN0cm95ZWQgfSBmcm9tICdAaW9uYXIvdXRpbGl0eSc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnLi4vLi4vbW9kZWxzL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9mb3JtLWNvbnRyb2wuY29tcG9uZW50JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Zvcm0tZmVlZGJhY2snLFxyXG4gIHRlbXBsYXRlOiBgXHJcblxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaW52YWxpZFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZXJyIG9mIGNvbnRyb2wuZXJyb3JzXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZlZWRiYWNrXCI+e3tlcnIubWVzc2FnZX19PC9kaXY+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICBgLFxyXG4gIC8vbGFuZ3VhZ2U9U0NTU1xyXG4gIHN0eWxlczogW2BcclxuICAgICAgOmhvc3Qge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGNvbG9yOiAjZjUyMjJkO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgICAgIH1cclxuICBgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmVlZGJhY2tDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogVGhlIHBhcmVudCAgZm9yIHRoZSBjb21wb25lbnRzXHJcbiAgICpcclxuICAgKiBAaW50ZXJuYWxcclxuICAgKi9cclxuICBfcGFyZW50OiBGb3JtQ29udHJvbENvbXBvbmVudCB8IG51bGwgPSBudWxsO1xyXG5cclxuICBnZXQgY29udHJvbCgpOiBGb3JtQ29udHJvbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50LmNvbnRyb2w7XHJcbiAgfTtcclxuXHJcbiAgcHVibGljIGdldCBpbnZhbGlkKCk6IEJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udHJvbC5pbnZhbGlkICYmICh0aGlzLmNvbnRyb2wuZGlydHkgfHwgdGhpcy5jb250cm9sLnRvdWNoZWQgfHwgdGhpcy5fcGFyZW50LnJvb3Quc3VibWl0dGVkKTtcclxuICB9O1xyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBAU2tpcFNlbGYoKSAgcGFyZW50OiBGb3JtQ29udHJvbENvbXBvbmVudFxyXG4gICkge1xyXG4gICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgdGhpcy5fcGFyZW50LnJvb3Quc3RhdHVzQ2hhbmdlcy5waXBlKHVudGlsRGVzdHJveWVkKHRoaXMpKS5zdWJzY3JpYmUoc3RhdHVzID0+IHtcclxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX3BhcmVudC5yb290Lm5nU3VibWl0LnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG5cclxufVxyXG4iXX0=