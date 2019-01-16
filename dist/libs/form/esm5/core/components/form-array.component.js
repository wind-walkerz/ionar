"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var ControlContainer_1 = require("../interfaces/ControlContainer");
var ui_1 = require("@ionar/ui");
/** @type {?} */
exports.formArrayProvider = {
    provide: ControlContainer_1.ControlContainer,
    useExisting: core_1.forwardRef(function () { return FormArrayComponent; })
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
        this.isDefaultTemplate = ui_1.isEmptyTemplate(this._elRef);
        this.cd.detectChanges();
    };
    FormArrayComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'form-array',
                    exportAs: 'form-array',
                    template: "\n      <ng-container *ngIf=\"isDefaultTemplate\">\n          <ng-container\n                  *ngFor=\"let item of control | keyvalue\"\n                  [ngTemplateOutlet]=\"controlTemplate\"\n                  [ngTemplateOutletContext]=\"{$implicit: item, parent: this}\"\n          ></ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"!isDefaultTemplate\">\n          <ng-content></ng-content>\n      </ng-container>\n  ",
                    providers: [exports.formArrayProvider],
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    styles: ["\n\n  "]
                }] }
    ];
    /** @nocollapse */
    FormArrayComponent.ctorParameters = function () { return [
        { type: ControlContainer_1.ControlContainer, decorators: [{ type: core_1.Optional }, { type: core_1.Host }, { type: core_1.SkipSelf }] },
        { type: core_1.ElementRef },
        { type: core_1.ChangeDetectorRef }
    ]; };
    FormArrayComponent.propDecorators = {
        attribute: [{ type: core_1.HostBinding, args: ['attr.id',] }],
        _controlContainers: [{ type: core_1.ContentChildren, args: [ControlContainer_1.ControlContainer,] }]
    };
    return FormArrayComponent;
}(ControlContainer_1.ControlContainer));
exports.FormArrayComponent = FormArrayComponent;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1hcnJheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvY29tcG9uZW50cy9mb3JtLWFycmF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBY3VCO0FBRXZCLG1FQUFrRTtBQUVsRSxnQ0FBNEM7O0FBSS9CLFFBQUEsaUJBQWlCLEdBQVE7SUFDcEMsT0FBTyxFQUFFLG1DQUFnQjtJQUN6QixXQUFXLEVBQUUsaUJBQVUsQ0FBQyxjQUFNLE9BQUEsa0JBQWtCLEVBQWxCLENBQWtCLENBQUM7Q0FDbEQ7QUFFRDtJQXNCd0MsOENBQWdCO0lBcUJ0RCx3SEFBd0g7SUFDeEgsNEJBQ21DLE1BQXdCLEVBQ2pELE1BQWtCLEVBQzFCLEVBQXFCO1FBSHZCLFlBS0Usa0JBQU0sRUFBRSxDQUFDLFNBR1Y7UUFOUyxZQUFNLEdBQU4sTUFBTSxDQUFZO1FBSzFCLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztJQUN2QixDQUFDO0lBekJELHNCQUFJLCtDQUFlOzs7O1FBQW5CO1lBQ0UsT0FBTyxDQUFDLG1CQUFlLElBQUksQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDLGVBQWUsQ0FBQztRQUN0RCxDQUFDOzs7T0FBQTtJQUVELHNCQUNJLHlDQUFTOzs7O1FBRGI7WUFFRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDbkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxtQkFBbUIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFBLENBQUM7UUFDckQsQ0FBQzs7O09BQUE7Ozs7SUFpQkQsNENBQWU7OztJQUFmO1FBQ0UsaUJBQU0sZUFBZSxXQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLG9CQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Z0JBNURGLGdCQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsMmJBV1Q7b0JBS0QsU0FBUyxFQUFFLENBQUMseUJBQWlCLENBQUM7b0JBQzlCLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNOzZCQUp0QyxRQUVSO2lCQUdGOzs7O2dCQWhDUSxtQ0FBZ0IsdUJBd0RwQixlQUFRLFlBQUksV0FBSSxZQUFJLGVBQVE7Z0JBbEUvQixpQkFBVTtnQkFIVix3QkFBaUI7Ozs0QkF1RGhCLGtCQUFXLFNBQUMsU0FBUztxQ0FTckIsc0JBQWUsU0FBQyxtQ0FBZ0I7O0lBc0JuQyx5QkFBQztDQUFBLEFBOURELENBc0J3QyxtQ0FBZ0IsR0F3Q3ZEO0FBeENZLGdEQUFrQjs7O0lBRzdCLCtDQUEyQjs7Ozs7SUFlM0IsZ0RBQTJGOzs7OztJQU16RixvQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSG9zdCxcclxuICBIb3N0QmluZGluZyxcclxuICBPcHRpb25hbCxcclxuICBRdWVyeUxpc3QsXHJcbiAgU2tpcFNlbGYsXHJcbiAgVGVtcGxhdGVSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENvbnRyb2xDb250YWluZXIgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0NvbnRyb2xDb250YWluZXInO1xyXG5pbXBvcnQgeyBGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBpc0VtcHR5VGVtcGxhdGUgfSBmcm9tICdAaW9uYXIvdWknO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICcuLi9tb2RlbHMvQWJzdHJhY3RDb250cm9sJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZm9ybUFycmF5UHJvdmlkZXI6IGFueSA9IHtcclxuICBwcm92aWRlOiBDb250cm9sQ29udGFpbmVyLFxyXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEZvcm1BcnJheUNvbXBvbmVudClcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm9ybS1hcnJheScsXHJcbiAgZXhwb3J0QXM6ICdmb3JtLWFycmF5JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNEZWZhdWx0VGVtcGxhdGVcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgY29udHJvbCB8IGtleXZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udHJvbFRlbXBsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInskaW1wbGljaXQ6IGl0ZW0sIHBhcmVudDogdGhpc31cIlxyXG4gICAgICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc0RlZmF1bHRUZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgLFxyXG5cclxuICBzdHlsZXM6IFtgXHJcblxyXG4gIGBdLFxyXG4gIHByb3ZpZGVyczogW2Zvcm1BcnJheVByb3ZpZGVyXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUFycmF5Q29tcG9uZW50IGV4dGVuZHMgQ29udHJvbENvbnRhaW5lciBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBpc0RlZmF1bHRUZW1wbGF0ZTogQm9vbGVhbjtcclxuXHJcbiAgZ2V0IGNvbnRyb2xUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcclxuICAgIHJldHVybiAoPEZvcm1Db21wb25lbnQ+dGhpcy5wYXJlbnQpLmNvbnRyb2xUZW1wbGF0ZTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXHJcbiAgZ2V0IGF0dHJpYnV0ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9XHJcblxyXG4gIGdldCBjb250cm9sKCkge1xyXG4gICAgcmV0dXJuIDxBYnN0cmFjdENvbnRyb2xbXT50aGlzLnJvb3QuZ2V0KHRoaXMucGF0aCk7XHJcbiAgfVxyXG5cclxuICBAQ29udGVudENoaWxkcmVuKENvbnRyb2xDb250YWluZXIpIHByaXZhdGUgX2NvbnRyb2xDb250YWluZXJzOiBRdWVyeUxpc3Q8Q29udHJvbENvbnRhaW5lcj47XHJcblxyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgQFNraXBTZWxmKCkgIHBhcmVudDogQ29udHJvbENvbnRhaW5lcixcclxuICAgIHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLFxyXG4gICAgY2Q6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcihjZCk7XHJcblxyXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdBZnRlclZpZXdJbml0KCk7XHJcbiAgICB0aGlzLmlzRGVmYXVsdFRlbXBsYXRlID0gaXNFbXB0eVRlbXBsYXRlKHRoaXMuX2VsUmVmKTtcclxuXHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuIl19