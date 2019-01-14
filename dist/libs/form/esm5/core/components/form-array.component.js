/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, forwardRef, Host, HostBinding, Optional, QueryList, SkipSelf } from '@angular/core';
import { ControlContainer } from '../interfaces/ControlContainer';
import { isEmptyTemplate } from '@ionar/ui';
/** @type {?} */
export var formArrayProvider = {
    provide: ControlContainer,
    useExisting: forwardRef(function () { return FormArrayComponent; })
};
var FormArrayComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FormArrayComponent, _super);
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function FormArrayComponent(parent, _elRef, cd) {
        var _this = _super.call(this, cd) || this;
        _this._elRef = _elRef;
        _this.parent = parent;
        return _this;
    }
    Object.defineProperty(FormArrayComponent.prototype, "controlTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return ((/** @type {?} */ (this.parent))).controlTemplate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayComponent.prototype, "attribute", {
        get: /**
         * @return {?}
         */
        function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormArrayComponent.prototype, "control", {
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
    FormArrayComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngAfterViewInit.call(this);
        this.isDefaultTemplate = isEmptyTemplate(this._elRef);
        this.cd.detectChanges();
    };
    FormArrayComponent.decorators = [
        { type: Component, args: [{
                    selector: 'form-array',
                    exportAs: 'form-array',
                    template: "\n      <ng-container *ngIf=\"isDefaultTemplate\">\n          <ng-container\n                  *ngFor=\"let item of control | keyvalue\"\n                  [ngTemplateOutlet]=\"controlTemplate\"\n                  [ngTemplateOutletContext]=\"{$implicit: item, parent: this}\"\n          ></ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"!isDefaultTemplate\">\n          <ng-content></ng-content>\n      </ng-container>\n  ",
                    providers: [formArrayProvider],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n\n  "]
                }] }
    ];
    /** @nocollapse */
    FormArrayComponent.ctorParameters = function () { return [
        { type: ControlContainer, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    FormArrayComponent.propDecorators = {
        attribute: [{ type: HostBinding, args: ['attr.id',] }],
        _controlContainers: [{ type: ContentChildren, args: [ControlContainer,] }]
    };
    return FormArrayComponent;
}(ControlContainer));
export { FormArrayComponent };
if (false) {
    /** @type {?} */
    FormArrayComponent.prototype.isDefaultTemplate;
    /**
     * @type {?}
     * @private
     */
    FormArrayComponent.prototype._controlContainers;
    /**
     * @type {?}
     * @private
     */
    FormArrayComponent.prototype._elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1hcnJheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvY29tcG9uZW50cy9mb3JtLWFycmF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFVBQVUsRUFDVixJQUFJLEVBQ0osV0FBVyxFQUNYLFFBQVEsRUFDUixTQUFTLEVBQ1QsUUFBUSxFQUVULE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRWxFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxXQUFXLENBQUM7O0FBSTVDLE1BQU0sS0FBTyxpQkFBaUIsR0FBUTtJQUNwQyxPQUFPLEVBQUUsZ0JBQWdCO0lBQ3pCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGtCQUFrQixFQUFsQixDQUFrQixDQUFDO0NBQ2xEO0FBRUQ7SUFzQndDLDhDQUFnQjtJQXFCdEQsd0hBQXdIO0lBQ3hILDRCQUNtQyxNQUF3QixFQUNqRCxNQUFrQixFQUMxQixFQUFxQjtRQUh2QixZQUtFLGtCQUFNLEVBQUUsQ0FBQyxTQUdWO1FBTlMsWUFBTSxHQUFOLE1BQU0sQ0FBWTtRQUsxQixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7SUFDdkIsQ0FBQztJQXpCRCxzQkFBSSwrQ0FBZTs7OztRQUFuQjtZQUNFLE9BQU8sQ0FBQyxtQkFBZSxJQUFJLENBQUMsTUFBTSxFQUFBLENBQUMsQ0FBQyxlQUFlLENBQUM7UUFDdEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSx5Q0FBUzs7OztRQURiO1lBRUUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQU87Ozs7UUFBWDtZQUNFLE9BQU8sbUJBQW1CLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQSxDQUFDO1FBQ3JELENBQUM7OztPQUFBOzs7O0lBaUJELDRDQUFlOzs7SUFBZjtRQUNFLGlCQUFNLGVBQWUsV0FBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Z0JBNURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSwyYkFXVDtvQkFLRCxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztvQkFDOUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07NkJBSnRDLFFBRVI7aUJBR0Y7Ozs7Z0JBaENRLGdCQUFnQix1QkF3RHBCLFFBQVEsWUFBSSxJQUFJLFlBQUksUUFBUTtnQkFsRS9CLFVBQVU7Z0JBSFYsaUJBQWlCOzs7NEJBdURoQixXQUFXLFNBQUMsU0FBUztxQ0FTckIsZUFBZSxTQUFDLGdCQUFnQjs7SUFzQm5DLHlCQUFDO0NBQUEsQUE5REQsQ0FzQndDLGdCQUFnQixHQXdDdkQ7U0F4Q1ksa0JBQWtCOzs7SUFHN0IsK0NBQTJCOzs7OztJQWUzQixnREFBMkY7Ozs7O0lBTXpGLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIE9wdGlvbmFsLFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBTa2lwU2VsZixcclxuICBUZW1wbGF0ZVJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ29udHJvbENvbnRhaW5lciB9IGZyb20gJy4uL2ludGVyZmFjZXMvQ29udHJvbENvbnRhaW5lcic7XHJcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tICcuLi9jb3JlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGlzRW1wdHlUZW1wbGF0ZSB9IGZyb20gJ0Bpb25hci91aSc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJy4uL21vZGVscy9BYnN0cmFjdENvbnRyb2wnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtQXJyYXlQcm92aWRlcjogYW55ID0ge1xyXG4gIHByb3ZpZGU6IENvbnRyb2xDb250YWluZXIsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRm9ybUFycmF5Q29tcG9uZW50KVxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmb3JtLWFycmF5JyxcclxuICBleHBvcnRBczogJ2Zvcm0tYXJyYXknLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0RlZmF1bHRUZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjb250cm9sIHwga2V5dmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250cm9sVGVtcGxhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyRpbXBsaWNpdDogaXRlbSwgcGFyZW50OiB0aGlzfVwiXHJcbiAgICAgICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzRGVmYXVsdFRlbXBsYXRlXCI+XHJcbiAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGAsXHJcblxyXG4gIHN0eWxlczogW2BcclxuXHJcbiAgYF0sXHJcbiAgcHJvdmlkZXJzOiBbZm9ybUFycmF5UHJvdmlkZXJdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGb3JtQXJyYXlDb21wb25lbnQgZXh0ZW5kcyBDb250cm9sQ29udGFpbmVyIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIGlzRGVmYXVsdFRlbXBsYXRlOiBCb29sZWFuO1xyXG5cclxuICBnZXQgY29udHJvbFRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgcmV0dXJuICg8Rm9ybUNvbXBvbmVudD50aGlzLnBhcmVudCkuY29udHJvbFRlbXBsYXRlO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcclxuICBnZXQgYXR0cmlidXRlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbnRyb2woKSB7XHJcbiAgICByZXR1cm4gPEFic3RyYWN0Q29udHJvbFtdPnRoaXMucm9vdC5nZXQodGhpcy5wYXRoKTtcclxuICB9XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ29udHJvbENvbnRhaW5lcikgcHJpdmF0ZSBfY29udHJvbENvbnRhaW5lcnM6IFF1ZXJ5TGlzdDxDb250cm9sQ29udGFpbmVyPjtcclxuXHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBAU2tpcFNlbGYoKSAgcGFyZW50OiBDb250cm9sQ29udGFpbmVyLFxyXG4gICAgcHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHN1cGVyKGNkKTtcclxuXHJcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuICB9XHJcblxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcclxuICAgIHRoaXMuaXNEZWZhdWx0VGVtcGxhdGUgPSBpc0VtcHR5VGVtcGxhdGUodGhpcy5fZWxSZWYpO1xyXG5cclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4iXX0=