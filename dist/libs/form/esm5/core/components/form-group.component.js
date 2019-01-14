/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, forwardRef, Host, HostBinding, Optional, QueryList, SkipSelf, ViewContainerRef } from '@angular/core';
import { ControlContainer } from '../interfaces/ControlContainer';
import { isEmptyTemplate } from '@ionar/ui';
import { IoControl } from '../interfaces/IoControl';
/** @type {?} */
export var formGroupProvider = {
    provide: ControlContainer,
    useExisting: forwardRef(function () { return FormGroupComponent; })
};
var FormGroupComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FormGroupComponent, _super);
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function FormGroupComponent(parent, _vcRef, _elRef, cd) {
        var _this = _super.call(this, cd) || this;
        _this._vcRef = _vcRef;
        _this._elRef = _elRef;
        _this.parent = parent;
        return _this;
    }
    Object.defineProperty(FormGroupComponent.prototype, "controlTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return ((/** @type {?} */ (this.parent))).controlTemplate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupComponent.prototype, "attribute", {
        get: /**
         * @return {?}
         */
        function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormGroupComponent.prototype, "control", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.root.get(this.path)));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FormGroupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
    };
    /**
     * @return {?}
     */
    FormGroupComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngAfterViewInit.call(this);
        this.isDefaultTemplate = isEmptyTemplate(this._elRef);
        this.cd.detectChanges();
    };
    /**
     * @return {?}
     */
    FormGroupComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    FormGroupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'form-group',
                    exportAs: 'form-group',
                    template: "\n      <ng-container *ngIf=\"isDefaultTemplate\">\n          <ng-container\n                  *ngFor=\"let item of control | keyvalue\"\n                  [ngTemplateOutlet]=\"controlTemplate\"\n                  [ngTemplateOutletContext]=\"{$implicit: item, parent: this}\"\n          ></ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"!isDefaultTemplate\">\n          <ng-content></ng-content>\n      </ng-container>\n  ",
                    providers: [formGroupProvider],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n\n  "]
                }] }
    ];
    /** @nocollapse */
    FormGroupComponent.ctorParameters = function () { return [
        { type: ControlContainer, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] },
        { type: ViewContainerRef },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    FormGroupComponent.propDecorators = {
        attribute: [{ type: HostBinding, args: ['attr.id',] }],
        _controlContainerList: [{ type: ContentChildren, args: [ControlContainer,] }],
        _ioControlList: [{ type: ContentChildren, args: [IoControl,] }]
    };
    return FormGroupComponent;
}(ControlContainer));
export { FormGroupComponent };
if (false) {
    /** @type {?} */
    FormGroupComponent.prototype.isDefaultTemplate;
    /**
     * @type {?}
     * @private
     */
    FormGroupComponent.prototype._controlContainerList;
    /**
     * @type {?}
     * @private
     */
    FormGroupComponent.prototype._ioControlList;
    /**
     * @type {?}
     * @private
     */
    FormGroupComponent.prototype._vcRef;
    /**
     * @type {?}
     * @private
     */
    FormGroupComponent.prototype._elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvY29tcG9uZW50cy9mb3JtLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFBRSxpQkFBaUIsRUFDMUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQ3RDLFVBQVUsRUFDVixJQUFJLEVBQ0osV0FBVyxFQUdYLFFBQVEsRUFBRSxTQUFTLEVBQ25CLFFBQVEsRUFDUixnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUc1QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0FBSXBELE1BQU0sS0FBTyxpQkFBaUIsR0FBUTtJQUNwQyxPQUFPLEVBQUUsZ0JBQWdCO0lBQ3pCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGtCQUFrQixFQUFsQixDQUFrQixDQUFDO0NBQ2xEO0FBR0Q7SUF1QndDLDhDQUFnQjtJQXdCdEQsd0hBQXdIO0lBRXhILDRCQUNtQyxNQUF3QixFQUNqRCxNQUF3QixFQUN4QixNQUFrQixFQUMxQixFQUFxQjtRQUp2QixZQU1FLGtCQUFNLEVBQUUsQ0FBQyxTQUVWO1FBTlMsWUFBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsWUFBTSxHQUFOLE1BQU0sQ0FBWTtRQUkxQixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7SUFDdkIsQ0FBQztJQTdCRCxzQkFBSSwrQ0FBZTs7OztRQUFuQjtZQUNFLE9BQU8sQ0FBQyxtQkFBZSxJQUFJLENBQUMsTUFBTSxFQUFBLENBQUMsQ0FBQyxlQUFlLENBQUM7UUFDdEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSx5Q0FBUzs7OztRQURiO1lBRUUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQU87Ozs7UUFBWDtZQUNFLE9BQU8sbUJBQXFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQSxDQUFDO1FBQ3ZFLENBQUM7OztPQUFBOzs7O0lBcUJELHFDQUFROzs7SUFBUjtRQUNFLGlCQUFNLFFBQVEsV0FBRSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFHRCw0Q0FBZTs7O0lBQWY7UUFDRSxpQkFBTSxlQUFlLFdBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7SUFDQSxDQUFDOztnQkF6RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLDJiQVdUO29CQU1ELFNBQVMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO29CQUM5QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs2QkFMdEMsUUFFUjtpQkFJRjs7OztnQkFwQ1EsZ0JBQWdCLHVCQWdFcEIsUUFBUSxZQUFJLElBQUksWUFBSSxRQUFRO2dCQWxFL0IsZ0JBQWdCO2dCQVJZLFVBQVU7Z0JBRGIsaUJBQWlCOzs7NEJBeUR6QyxXQUFXLFNBQUMsU0FBUzt3Q0FVckIsZUFBZSxTQUFDLGdCQUFnQjtpQ0FFaEMsZUFBZSxTQUFDLFNBQVM7O0lBZ0M1Qix5QkFBQztDQUFBLEFBNUVELENBdUJ3QyxnQkFBZ0IsR0FxRHZEO1NBckRZLGtCQUFrQjs7O0lBRzdCLCtDQUEyQjs7Ozs7SUFnQjNCLG1EQUE4Rjs7Ozs7SUFFOUYsNENBQXlFOzs7OztJQU92RSxvQ0FBZ0M7Ozs7O0lBQ2hDLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIEVsZW1lbnRSZWYsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsIFF1ZXJ5TGlzdCxcclxuICBTa2lwU2VsZiwgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sQ29udGFpbmVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Db250cm9sQ29udGFpbmVyJztcclxuaW1wb3J0IHsgaXNFbXB0eVRlbXBsYXRlIH0gZnJvbSAnQGlvbmFyL3VpJztcclxuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IElvQ29udHJvbCB9IGZyb20gJy4uL2ludGVyZmFjZXMvSW9Db250cm9sJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnLi4vbW9kZWxzL0Fic3RyYWN0Q29udHJvbCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1Hcm91cFByb3ZpZGVyOiBhbnkgPSB7XHJcbiAgcHJvdmlkZTogQ29udHJvbENvbnRhaW5lcixcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBGb3JtR3JvdXBDb21wb25lbnQpXHJcbn07XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmb3JtLWdyb3VwJyxcclxuICBleHBvcnRBczogJ2Zvcm0tZ3JvdXAnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0RlZmF1bHRUZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjb250cm9sIHwga2V5dmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250cm9sVGVtcGxhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyRpbXBsaWNpdDogaXRlbSwgcGFyZW50OiB0aGlzfVwiXHJcbiAgICAgICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzRGVmYXVsdFRlbXBsYXRlXCI+XHJcbiAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGAsXHJcblxyXG4gIHN0eWxlczogW2BcclxuXHJcbiAgYF0sXHJcblxyXG4gIHByb3ZpZGVyczogW2Zvcm1Hcm91cFByb3ZpZGVyXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUdyb3VwQ29tcG9uZW50IGV4dGVuZHMgQ29udHJvbENvbnRhaW5lciBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgaXNEZWZhdWx0VGVtcGxhdGU6IEJvb2xlYW47XHJcblxyXG4gIGdldCBjb250cm9sVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICByZXR1cm4gKDxGb3JtQ29tcG9uZW50PnRoaXMucGFyZW50KS5jb250cm9sVGVtcGxhdGU7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxyXG4gIGdldCBhdHRyaWJ1dGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgfVxyXG5cclxuICBnZXQgY29udHJvbCgpIHtcclxuICAgIHJldHVybiA8eyBbbmFtZTogc3RyaW5nXTogQWJzdHJhY3RDb250cm9sIH0+dGhpcy5yb290LmdldCh0aGlzLnBhdGgpO1xyXG4gIH1cclxuXHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ29udHJvbENvbnRhaW5lcikgcHJpdmF0ZSBfY29udHJvbENvbnRhaW5lckxpc3Q6IFF1ZXJ5TGlzdDxDb250cm9sQ29udGFpbmVyPjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihJb0NvbnRyb2wpIHByaXZhdGUgX2lvQ29udHJvbExpc3Q6IFF1ZXJ5TGlzdDxJb0NvbnRyb2w+O1xyXG5cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBAU2tpcFNlbGYoKSAgcGFyZW50OiBDb250cm9sQ29udGFpbmVyLFxyXG4gICAgcHJpdmF0ZSBfdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIF9lbFJlZjogRWxlbWVudFJlZixcclxuICAgIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIoY2QpO1xyXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xyXG4gICAgdGhpcy5pc0RlZmF1bHRUZW1wbGF0ZSA9IGlzRW1wdHlUZW1wbGF0ZSh0aGlzLl9lbFJlZik7XHJcblxyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuIl19