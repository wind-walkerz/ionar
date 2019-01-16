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
var IoControl_1 = require("../interfaces/IoControl");
/** @type {?} */
exports.formGroupProvider = {
    provide: ControlContainer_1.ControlContainer,
    useExisting: core_1.forwardRef(function () { return FormGroupComponent; })
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
        this.isDefaultTemplate = ui_1.isEmptyTemplate(this._elRef);
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
        { type: core_1.Component, args: [{
                    selector: 'form-group',
                    exportAs: 'form-group',
                    template: "\n      <ng-container *ngIf=\"isDefaultTemplate\">\n          <ng-container\n                  *ngFor=\"let item of control | keyvalue\"\n                  [ngTemplateOutlet]=\"controlTemplate\"\n                  [ngTemplateOutletContext]=\"{$implicit: item, parent: this}\"\n          ></ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"!isDefaultTemplate\">\n          <ng-content></ng-content>\n      </ng-container>\n  ",
                    providers: [exports.formGroupProvider],
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    styles: ["\n\n  "]
                }] }
    ];
    /** @nocollapse */
    FormGroupComponent.ctorParameters = function () { return [
        { type: ControlContainer_1.ControlContainer, decorators: [{ type: core_1.Optional }, { type: core_1.Host }, { type: core_1.SkipSelf }] },
        { type: core_1.ViewContainerRef },
        { type: core_1.ElementRef },
        { type: core_1.ChangeDetectorRef }
    ]; };
    FormGroupComponent.propDecorators = {
        attribute: [{ type: core_1.HostBinding, args: ['attr.id',] }],
        _controlContainerList: [{ type: core_1.ContentChildren, args: [ControlContainer_1.ControlContainer,] }],
        _ioControlList: [{ type: core_1.ContentChildren, args: [IoControl_1.IoControl,] }]
    };
    return FormGroupComponent;
}(ControlContainer_1.ControlContainer));
exports.FormGroupComponent = FormGroupComponent;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvY29tcG9uZW50cy9mb3JtLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBWXVCO0FBQ3ZCLG1FQUFrRTtBQUNsRSxnQ0FBNEM7QUFHNUMscURBQW9EOztBQUl2QyxRQUFBLGlCQUFpQixHQUFRO0lBQ3BDLE9BQU8sRUFBRSxtQ0FBZ0I7SUFDekIsV0FBVyxFQUFFLGlCQUFVLENBQUMsY0FBTSxPQUFBLGtCQUFrQixFQUFsQixDQUFrQixDQUFDO0NBQ2xEO0FBR0Q7SUF1QndDLDhDQUFnQjtJQXdCdEQsd0hBQXdIO0lBRXhILDRCQUNtQyxNQUF3QixFQUNqRCxNQUF3QixFQUN4QixNQUFrQixFQUMxQixFQUFxQjtRQUp2QixZQU1FLGtCQUFNLEVBQUUsQ0FBQyxTQUVWO1FBTlMsWUFBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsWUFBTSxHQUFOLE1BQU0sQ0FBWTtRQUkxQixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7SUFDdkIsQ0FBQztJQTdCRCxzQkFBSSwrQ0FBZTs7OztRQUFuQjtZQUNFLE9BQU8sQ0FBQyxtQkFBZSxJQUFJLENBQUMsTUFBTSxFQUFBLENBQUMsQ0FBQyxlQUFlLENBQUM7UUFDdEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSx5Q0FBUzs7OztRQURiO1lBRUUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBRUQsc0JBQUksdUNBQU87Ozs7UUFBWDtZQUNFLE9BQU8sbUJBQXFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQSxDQUFDO1FBQ3ZFLENBQUM7OztPQUFBOzs7O0lBcUJELHFDQUFROzs7SUFBUjtRQUNFLGlCQUFNLFFBQVEsV0FBRSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFHRCw0Q0FBZTs7O0lBQWY7UUFDRSxpQkFBTSxlQUFlLFdBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsb0JBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFdEQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsd0NBQVc7OztJQUFYO0lBQ0EsQ0FBQzs7Z0JBekVGLGdCQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFFBQVEsRUFBRSxZQUFZO29CQUN0QixRQUFRLEVBQUUsMmJBV1Q7b0JBTUQsU0FBUyxFQUFFLENBQUMseUJBQWlCLENBQUM7b0JBQzlCLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNOzZCQUx0QyxRQUVSO2lCQUlGOzs7O2dCQXBDUSxtQ0FBZ0IsdUJBZ0VwQixlQUFRLFlBQUksV0FBSSxZQUFJLGVBQVE7Z0JBbEUvQix1QkFBZ0I7Z0JBUlksaUJBQVU7Z0JBRGIsd0JBQWlCOzs7NEJBeUR6QyxrQkFBVyxTQUFDLFNBQVM7d0NBVXJCLHNCQUFlLFNBQUMsbUNBQWdCO2lDQUVoQyxzQkFBZSxTQUFDLHFCQUFTOztJQWdDNUIseUJBQUM7Q0FBQSxBQTVFRCxDQXVCd0MsbUNBQWdCLEdBcUR2RDtBQXJEWSxnREFBa0I7OztJQUc3QiwrQ0FBMkI7Ozs7O0lBZ0IzQixtREFBOEY7Ozs7O0lBRTlGLDRDQUF5RTs7Ozs7SUFPdkUsb0NBQWdDOzs7OztJQUNoQyxvQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBFbGVtZW50UmVmLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSG9zdCxcclxuICBIb3N0QmluZGluZyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLCBRdWVyeUxpc3QsXHJcbiAgU2tpcFNlbGYsIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbENvbnRhaW5lciB9IGZyb20gJy4uL2ludGVyZmFjZXMvQ29udHJvbENvbnRhaW5lcic7XHJcbmltcG9ydCB7IGlzRW1wdHlUZW1wbGF0ZSB9IGZyb20gJ0Bpb25hci91aSc7XHJcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tICcuLi9jb3JlLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBJb0NvbnRyb2wgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0lvQ29udHJvbCc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJy4uL21vZGVscy9BYnN0cmFjdENvbnRyb2wnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtR3JvdXBQcm92aWRlcjogYW55ID0ge1xyXG4gIHByb3ZpZGU6IENvbnRyb2xDb250YWluZXIsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRm9ybUdyb3VwQ29tcG9uZW50KVxyXG59O1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm9ybS1ncm91cCcsXHJcbiAgZXhwb3J0QXM6ICdmb3JtLWdyb3VwJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNEZWZhdWx0VGVtcGxhdGVcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgY29udHJvbCB8IGtleXZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udHJvbFRlbXBsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInskaW1wbGljaXQ6IGl0ZW0sIHBhcmVudDogdGhpc31cIlxyXG4gICAgICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc0RlZmF1bHRUZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgLFxyXG5cclxuICBzdHlsZXM6IFtgXHJcblxyXG4gIGBdLFxyXG5cclxuICBwcm92aWRlcnM6IFtmb3JtR3JvdXBQcm92aWRlcl0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1Hcm91cENvbXBvbmVudCBleHRlbmRzIENvbnRyb2xDb250YWluZXIgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIGlzRGVmYXVsdFRlbXBsYXRlOiBCb29sZWFuO1xyXG5cclxuICBnZXQgY29udHJvbFRlbXBsYXRlKCk6IFRlbXBsYXRlUmVmPGFueT4ge1xyXG4gICAgcmV0dXJuICg8Rm9ybUNvbXBvbmVudD50aGlzLnBhcmVudCkuY29udHJvbFRlbXBsYXRlO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmlkJylcclxuICBnZXQgYXR0cmlidXRlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbnRyb2woKSB7XHJcbiAgICByZXR1cm4gPHsgW25hbWU6IHN0cmluZ106IEFic3RyYWN0Q29udHJvbCB9PnRoaXMucm9vdC5nZXQodGhpcy5wYXRoKTtcclxuICB9XHJcblxyXG5cclxuICBAQ29udGVudENoaWxkcmVuKENvbnRyb2xDb250YWluZXIpIHByaXZhdGUgX2NvbnRyb2xDb250YWluZXJMaXN0OiBRdWVyeUxpc3Q8Q29udHJvbENvbnRhaW5lcj47XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oSW9Db250cm9sKSBwcml2YXRlIF9pb0NvbnRyb2xMaXN0OiBRdWVyeUxpc3Q8SW9Db250cm9sPjtcclxuXHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgQFNraXBTZWxmKCkgIHBhcmVudDogQ29udHJvbENvbnRhaW5lcixcclxuICAgIHByaXZhdGUgX3ZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHN1cGVyKGNkKTtcclxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gIH1cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgc3VwZXIubmdPbkluaXQoKTtcclxuICB9XHJcblxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ0FmdGVyVmlld0luaXQoKTtcclxuICAgIHRoaXMuaXNEZWZhdWx0VGVtcGxhdGUgPSBpc0VtcHR5VGVtcGxhdGUodGhpcy5fZWxSZWYpO1xyXG5cclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbiJdfQ==