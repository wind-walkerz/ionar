"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var form_control_component_1 = require("../form-control.component");
var FieldComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function FieldComponent(cd, parent) {
        var _this = this;
        this.cd = cd;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        /**
         * \@description
         * The parent  for the components
         *
         * \@internal
         */
        this._parent = null;
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.onChanged = function (e) {
            _this._parent.control.setValue(e);
        };
        this.onTouched = function () {
            _this._parent.control.markAsTouched();
        };
        this.onEntered = function () {
            // this.formSvs._onEntered()
            // if (this.name === 'password') this.focus = true;
        };
        this._parent = parent;
    }
    Object.defineProperty(FieldComponent.prototype, "template", {
        get: /**
         * @return {?}
         */
        function () {
            return this._parent.controlTemplateDir && this._parent.controlTemplateDir.templateRef;
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @return {?}
     */
    FieldComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FieldComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    FieldComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'form-field',
                    template: "\n      <ng-container *ngIf=\"_parent.control\">\n          <ng-container\n                  dynamic_field\n                  [name]=\"_parent.name\"\n                  [control]=\"_parent.control\"\n                  [root]=\"_parent.root\"\n                  [events]=\"{\n                    change: onChanged,\n                    blur: onTouched,\n                    enter: onEntered\n              }\"\n                  [template]=\"template\"\n          >\n          </ng-container>\n      </ng-container>\n\n  ",
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    styles: ["\n      :host {\n          display: flex;\n          width: 100%;\n          height: 100%;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    FieldComponent.ctorParameters = function () { return [
        { type: core_1.ChangeDetectorRef },
        { type: form_control_component_1.FormControlComponent, decorators: [{ type: core_1.Optional }, { type: core_1.Host }, { type: core_1.SkipSelf }] }
    ]; };
    return FieldComponent;
}());
exports.FieldComponent = FieldComponent;
if (false) {
    /**
     * \@description
     * The parent  for the components
     *
     * \@internal
     * @type {?}
     */
    FieldComponent.prototype._parent;
    /** @type {?} */
    FieldComponent.prototype.onChanged;
    /** @type {?} */
    FieldComponent.prototype.onTouched;
    /** @type {?} */
    FieldComponent.prototype.onEntered;
    /**
     * @type {?}
     * @private
     */
    FieldComponent.prototype.cd;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL2NvbXBvbmVudHMvY29udHJvbC9maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0NBT3VCO0FBRXZCLG9FQUFpRTtBQUdqRTtJQTZDRSx3SEFBd0g7SUFHeEgsd0JBQ1UsRUFBcUIsRUFDSSxNQUE0QjtRQUYvRCxpQkFNQztRQUxTLE9BQUUsR0FBRixFQUFFLENBQW1COzs7Ozs7OztRQVYvQixZQUFPLEdBQWdDLElBQUksQ0FBQzs7UUEyQjVDLGNBQVMsR0FBRyxVQUFBLENBQUM7WUFDWCxLQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDO1FBRUYsY0FBUyxHQUFHO1lBQ1YsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdkMsQ0FBQyxDQUFDO1FBRUYsY0FBUyxHQUFHO1lBQ1YsNEJBQTRCO1lBQzVCLG1EQUFtRDtRQUNyRCxDQUFDLENBQUM7UUF4QkEsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDeEIsQ0FBQztJQWJELHNCQUFJLG9DQUFROzs7O1FBQVo7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7UUFDeEYsQ0FBQzs7O09BQUE7SUFBQSxDQUFDOzs7O0lBYUYsaUNBQVE7OztJQUFSO0lBRUEsQ0FBQzs7OztJQUVELHdDQUFlOzs7SUFBZjtJQUVBLENBQUM7O2dCQTlERixnQkFBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsMGdCQWlCVDtvQkFTRCxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTs2QkFQdEMseUdBTVI7aUJBRUY7Ozs7Z0JBdENDLHdCQUFpQjtnQkFNViw2Q0FBb0IsdUJBcUR4QixlQUFRLFlBQUksV0FBSSxZQUFJLGVBQVE7O0lBOEJqQyxxQkFBQztDQUFBLEFBaEZELElBZ0ZDO0FBbERZLHdDQUFjOzs7Ozs7Ozs7SUFTekIsaUNBQTRDOztJQTJCNUMsbUNBRUU7O0lBRUYsbUNBRUU7O0lBRUYsbUNBR0U7Ozs7O0lBNUJBLDRCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdCxcclxuICBPbkluaXQsIE9wdGlvbmFsLCBTa2lwU2VsZiwgVGVtcGxhdGVSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEZvcm1Db250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi4vZm9ybS1jb250cm9sLmNvbXBvbmVudCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmb3JtLWZpZWxkJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiX3BhcmVudC5jb250cm9sXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgIGR5bmFtaWNfZmllbGRcclxuICAgICAgICAgICAgICAgICAgW25hbWVdPVwiX3BhcmVudC5uYW1lXCJcclxuICAgICAgICAgICAgICAgICAgW2NvbnRyb2xdPVwiX3BhcmVudC5jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgW3Jvb3RdPVwiX3BhcmVudC5yb290XCJcclxuICAgICAgICAgICAgICAgICAgW2V2ZW50c109XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBvbkNoYW5nZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYmx1cjogb25Ub3VjaGVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGVudGVyOiBvbkVudGVyZWRcclxuICAgICAgICAgICAgICB9XCJcclxuICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cInRlbXBsYXRlXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgYCxcclxuXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgICA6aG9zdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICBgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRmllbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBUaGUgcGFyZW50ICBmb3IgdGhlIGNvbXBvbmVudHNcclxuICAgKlxyXG4gICAqIEBpbnRlcm5hbFxyXG4gICAqL1xyXG4gIF9wYXJlbnQ6IEZvcm1Db250cm9sQ29tcG9uZW50IHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGdldCB0ZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgIHJldHVybiB0aGlzLl9wYXJlbnQuY29udHJvbFRlbXBsYXRlRGlyICYmIHRoaXMuX3BhcmVudC5jb250cm9sVGVtcGxhdGVEaXIudGVtcGxhdGVSZWY7XHJcbiAgfTtcclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBAU2tpcFNlbGYoKSAgcGFyZW50OiBGb3JtQ29udHJvbENvbXBvbmVudFxyXG4gICkge1xyXG5cclxuICAgIHRoaXMuX3BhcmVudCA9IHBhcmVudDtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTWFpbiBGdW5jdGlvbnMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBvbkNoYW5nZWQgPSBlID0+IHtcclxuICAgIHRoaXMuX3BhcmVudC5jb250cm9sLnNldFZhbHVlKGUpO1xyXG4gIH07XHJcblxyXG4gIG9uVG91Y2hlZCA9ICgpID0+IHtcclxuICAgIHRoaXMuX3BhcmVudC5jb250cm9sLm1hcmtBc1RvdWNoZWQoKTtcclxuICB9O1xyXG5cclxuICBvbkVudGVyZWQgPSAoKSA9PiB7XHJcbiAgICAvLyB0aGlzLmZvcm1TdnMuX29uRW50ZXJlZCgpXHJcbiAgICAvLyBpZiAodGhpcy5uYW1lID09PSAncGFzc3dvcmQnKSB0aGlzLmZvY3VzID0gdHJ1ZTtcclxuICB9O1xyXG5cclxuXHJcbn1cclxuIl19