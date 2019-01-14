/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Host, Optional, SkipSelf } from '@angular/core';
import { FormControlComponent } from '../form-control.component';
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
        { type: Component, args: [{
                    selector: 'form-field',
                    template: "\n      <ng-container *ngIf=\"_parent.control\">\n          <ng-container\n                  dynamic_field\n                  [name]=\"_parent.name\"\n                  [control]=\"_parent.control\"\n                  [root]=\"_parent.root\"\n                  [events]=\"{\n                    change: onChanged,\n                    blur: onTouched,\n                    enter: onEntered\n              }\"\n                  [template]=\"template\"\n          >\n          </ng-container>\n      </ng-container>\n\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n      :host {\n          display: flex;\n          width: 100%;\n          height: 100%;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    FieldComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: FormControlComponent, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] }
    ]; };
    return FieldComponent;
}());
export { FieldComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL2NvbXBvbmVudHMvY29udHJvbC9maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxJQUFJLEVBQ0ksUUFBUSxFQUFFLFFBQVEsRUFDM0IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHakU7SUE2Q0Usd0hBQXdIO0lBR3hILHdCQUNVLEVBQXFCLEVBQ0ksTUFBNEI7UUFGL0QsaUJBTUM7UUFMUyxPQUFFLEdBQUYsRUFBRSxDQUFtQjs7Ozs7Ozs7UUFWL0IsWUFBTyxHQUFnQyxJQUFJLENBQUM7O1FBMkI1QyxjQUFTLEdBQUcsVUFBQSxDQUFDO1lBQ1gsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQztRQUVGLGNBQVMsR0FBRztZQUNWLEtBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQztRQUVGLGNBQVMsR0FBRztZQUNWLDRCQUE0QjtZQUM1QixtREFBbUQ7UUFDckQsQ0FBQyxDQUFDO1FBeEJBLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLENBQUM7SUFiRCxzQkFBSSxvQ0FBUTs7OztRQUFaO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDO1FBQ3hGLENBQUM7OztPQUFBO0lBQUEsQ0FBQzs7OztJQWFGLGlDQUFROzs7SUFBUjtJQUVBLENBQUM7Ozs7SUFFRCx3Q0FBZTs7O0lBQWY7SUFFQSxDQUFDOztnQkE5REYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsMGdCQWlCVDtvQkFTRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs2QkFQdEMseUdBTVI7aUJBRUY7Ozs7Z0JBdENDLGlCQUFpQjtnQkFNVixvQkFBb0IsdUJBcUR4QixRQUFRLFlBQUksSUFBSSxZQUFJLFFBQVE7O0lBOEJqQyxxQkFBQztDQUFBLEFBaEZELElBZ0ZDO1NBbERZLGNBQWM7Ozs7Ozs7OztJQVN6QixpQ0FBNEM7O0lBMkI1QyxtQ0FFRTs7SUFFRixtQ0FFRTs7SUFFRixtQ0FHRTs7Ozs7SUE1QkEsNEJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBIb3N0LFxyXG4gIE9uSW5pdCwgT3B0aW9uYWwsIFNraXBTZWxmLCBUZW1wbGF0ZVJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRm9ybUNvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuLi9mb3JtLWNvbnRyb2wuY29tcG9uZW50JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJfcGFyZW50LmNvbnRyb2xcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgZHluYW1pY19maWVsZFxyXG4gICAgICAgICAgICAgICAgICBbbmFtZV09XCJfcGFyZW50Lm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICBbY29udHJvbF09XCJfcGFyZW50LmNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICBbcm9vdF09XCJfcGFyZW50LnJvb3RcIlxyXG4gICAgICAgICAgICAgICAgICBbZXZlbnRzXT1cIntcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2U6IG9uQ2hhbmdlZCxcclxuICAgICAgICAgICAgICAgICAgICBibHVyOiBvblRvdWNoZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZW50ZXI6IG9uRW50ZXJlZFxyXG4gICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwidGVtcGxhdGVcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICBgLFxyXG5cclxuICBzdHlsZXM6IFtgXHJcbiAgICAgIDpob3N0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG4gIGBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWVsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIFRoZSBwYXJlbnQgIGZvciB0aGUgY29tcG9uZW50c1xyXG4gICAqXHJcbiAgICogQGludGVybmFsXHJcbiAgICovXHJcbiAgX3BhcmVudDogRm9ybUNvbnRyb2xDb21wb25lbnQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgZ2V0IHRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudC5jb250cm9sVGVtcGxhdGVEaXIgJiYgdGhpcy5fcGFyZW50LmNvbnRyb2xUZW1wbGF0ZURpci50ZW1wbGF0ZVJlZjtcclxuICB9O1xyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIEBTa2lwU2VsZigpICBwYXJlbnQ6IEZvcm1Db250cm9sQ29tcG9uZW50XHJcbiAgKSB7XHJcblxyXG4gICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIG9uQ2hhbmdlZCA9IGUgPT4ge1xyXG4gICAgdGhpcy5fcGFyZW50LmNvbnRyb2wuc2V0VmFsdWUoZSk7XHJcbiAgfTtcclxuXHJcbiAgb25Ub3VjaGVkID0gKCkgPT4ge1xyXG4gICAgdGhpcy5fcGFyZW50LmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xyXG4gIH07XHJcblxyXG4gIG9uRW50ZXJlZCA9ICgpID0+IHtcclxuICAgIC8vIHRoaXMuZm9ybVN2cy5fb25FbnRlcmVkKClcclxuICAgIC8vIGlmICh0aGlzLm5hbWUgPT09ICdwYXNzd29yZCcpIHRoaXMuZm9jdXMgPSB0cnVlO1xyXG4gIH07XHJcblxyXG5cclxufVxyXG4iXX0=