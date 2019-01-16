"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var IoControl_1 = require("../interfaces/IoControl");
var ControlContainer_1 = require("../interfaces/ControlContainer");
var ui_1 = require("@ionar/ui");
/** @type {?} */
exports.controlNameBinding = {
    provide: IoControl_1.IoControl,
    useExisting: core_1.forwardRef(function () { return FormControlComponent; })
};
var FormControlComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FormControlComponent, _super);
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function FormControlComponent(parent, cd) {
        var _this = _super.call(this, cd) || this;
        _this.parent = parent;
        return _this;
    }
    Object.defineProperty(FormControlComponent.prototype, "controlTemplateDir", {
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        get: 
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var parent = (/** @type {?} */ (this.parent));
            /** @type {?} */
            var state = (/** @type {?} */ (this.control.state));
            if (this._ioTemplateDir)
                return this._ioTemplateDir;
            if (parent.ioTemplateDirList)
                return lodash_1.default.find(parent.ioTemplateDirList.toArray(), ['name', this.name])
                    || lodash_1.default.find(parent.ioTemplateDirList.toArray(), ['component', state.component]);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(FormControlComponent.prototype, "attribute", {
        get: /**
         * @return {?}
         */
        function () {
            return this.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "hiddenStyle", {
        get: /**
         * @return {?}
         */
        function () {
            return lodash_1.default.get(this.control.options, ['hidden']);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "isHideLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return lodash_1.default.get(this.control.options, ['hideLabel']);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "isHideFeedback", {
        get: /**
         * @return {?}
         */
        function () {
            return lodash_1.default.get(this.control.options, ['hideFeedback']);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FormControlComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FormControlComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        _super.prototype.ngOnChanges.call(this, changes);
    };
    /**
     * @return {?}
     */
    FormControlComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
    };
    FormControlComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'form-control',
                    template: "\n      <form-label *ngIf=\"!isHideLabel\"></form-label>\n\n      <form-field></form-field>\n\n      <form-feedback *ngIf=\"!isHideFeedback\"></form-feedback>\n  ",
                    providers: [exports.controlNameBinding],
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    styles: ["\n      :host {\n          display: grid;\n          grid-template-areas: \"label   field\" \". feedback\";\n          grid-template-columns: 3fr 7fr;\n          grid-template-rows: 1fr auto;\n          margin-bottom: 1rem;\n          height: auto;\n          visibility: visible;\n          z-index: 50;\n      }\n\n      :host-context(.hide-label) {\n          grid-template-areas: \"field\" \"feedback\";\n          grid-template-columns: 1fr;\n      }\n\n      :host-context(.hide-feedback) {\n          grid-template-areas: \"label   field\";\n          grid-template-columns: 3fr 7fr;\n      }\n\n      :host-context(.hide-label.hide-feedback) {\n          grid-template-areas: \"field\";\n      }\n\n      :host-context(.hidden) {\n          display: none !important;\n      }\n\n      form-label {\n          grid-area: label;\n      }\n\n      form-field {\n          grid-area: field;\n      }\n\n      form-feedback {\n          grid-area: feedback;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    FormControlComponent.ctorParameters = function () { return [
        { type: ControlContainer_1.ControlContainer, decorators: [{ type: core_1.Optional }, { type: core_1.Host }, { type: core_1.SkipSelf }] },
        { type: core_1.ChangeDetectorRef }
    ]; };
    FormControlComponent.propDecorators = {
        _ioTemplateDir: [{ type: core_1.ContentChild, args: [ui_1.IonarTemplateDirective,] }],
        attribute: [{ type: core_1.HostBinding, args: ['attr.id',] }],
        hiddenStyle: [{ type: core_1.HostBinding, args: ['class.hidden',] }],
        isHideLabel: [{ type: core_1.HostBinding, args: ['class.hideLabel',] }],
        isHideFeedback: [{ type: core_1.HostBinding, args: ['class.hideFeedback',] }]
    };
    return FormControlComponent;
}(IoControl_1.IoControl));
exports.FormControlComponent = FormControlComponent;
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormControlComponent.prototype._ioTemplateDir;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9mb3JtLyIsInNvdXJjZXMiOlsiY29yZS9jb21wb25lbnRzL2Zvcm0tY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHNDQWN1QjtBQUd2QiwwREFBdUI7QUFFdkIscURBQW9EO0FBQ3BELG1FQUFrRTtBQUdsRSxnQ0FBbUQ7O0FBRXRDLFFBQUEsa0JBQWtCLEdBQVE7SUFDckMsT0FBTyxFQUFFLHFCQUFTO0lBQ2xCLFdBQVcsRUFBRSxpQkFBVSxDQUFDLGNBQU0sT0FBQSxvQkFBb0IsRUFBcEIsQ0FBb0IsQ0FBQztDQUNwRDtBQUdEO0lBeUQwQyxnREFBUztJQTBDakQsd0hBQXdIO0lBQ3hILDhCQUNtQyxNQUF3QixFQUN6RCxFQUFxQjtRQUZ2QixZQUlFLGtCQUFNLEVBQUUsQ0FBQyxTQUVWO1FBREMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O0lBQ3ZCLENBQUM7SUE3Q0Qsc0JBQUksb0RBQWtCO1FBSHRCLGtIQUFrSDs7Ozs7O1FBR2xIOztnQkFFUSxNQUFNLEdBQUcsbUJBQWUsSUFBSSxDQUFDLE1BQU0sRUFBQTs7Z0JBQ3ZDLEtBQUssR0FBRyxtQkFBa0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUE7WUFFOUMsSUFBSSxJQUFJLENBQUMsY0FBYztnQkFBRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7WUFFcEQsSUFBSSxNQUFNLENBQUMsaUJBQWlCO2dCQUMxQixPQUFPLGdCQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7dUJBQ2pFLGdCQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUVwRixDQUFDOzs7T0FBQTtJQUFBLENBQUM7SUFLRixzQkFDSSwyQ0FBUzs7OztRQURiO1lBRUUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksNkNBQVc7Ozs7UUFEZjtZQUdFLE9BQU8sZ0JBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pELENBQUM7OztPQUFBO0lBR0Qsc0JBQ0ksNkNBQVc7Ozs7UUFEZjtZQUVFLE9BQU8sZ0JBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3BELENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksZ0RBQWM7Ozs7UUFEbEI7WUFFRSxPQUFPLGdCQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUN2RCxDQUFDOzs7T0FBQTs7OztJQVdELHVDQUFROzs7SUFBUjtJQUVBLENBQUM7Ozs7O0lBRUQsMENBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLGlCQUFNLFdBQVcsWUFBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsaURBQWtCOzs7SUFBbEI7SUFFQSxDQUFDOztnQkF0SEYsZ0JBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLG9LQU1UO29CQTRDRCxTQUFTLEVBQUUsQ0FBQywwQkFBa0IsQ0FBQztvQkFDL0IsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07NkJBM0N0QywrOEJBeUNSO2lCQUdGOzs7O2dCQWpFUSxtQ0FBZ0IsdUJBZ0hwQixlQUFRLFlBQUksV0FBSSxZQUFJLGVBQVE7Z0JBakkvQix3QkFBaUI7OztpQ0FzR2hCLG1CQUFZLFNBQUMsMkJBQXNCOzRCQUduQyxrQkFBVyxTQUFDLFNBQVM7OEJBS3JCLGtCQUFXLFNBQUMsY0FBYzs4QkFPMUIsa0JBQVcsU0FBQyxpQkFBaUI7aUNBSzdCLGtCQUFXLFNBQUMsb0JBQW9COztJQTBCbkMsMkJBQUM7Q0FBQSxBQXhIRCxDQXlEMEMscUJBQVMsR0ErRGxEO0FBL0RZLG9EQUFvQjs7Ozs7O0lBaUIvQiw4Q0FBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0NoZWNrZWQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBmb3J3YXJkUmVmLFxyXG4gIEhvc3QsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFNraXBTZWxmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW9Db250cm9sIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Jb0NvbnRyb2wnO1xyXG5pbXBvcnQgeyBDb250cm9sQ29udGFpbmVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Db250cm9sQ29udGFpbmVyJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2xTdGF0ZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvRm9ybSc7XHJcblxyXG5pbXBvcnQgeyBJb25hclRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnQGlvbmFyL3VpJztcclxuXHJcbmV4cG9ydCBjb25zdCBjb250cm9sTmFtZUJpbmRpbmc6IGFueSA9IHtcclxuICBwcm92aWRlOiBJb0NvbnRyb2wsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRm9ybUNvbnRyb2xDb21wb25lbnQpXHJcbn07XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmb3JtLWNvbnRyb2wnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxmb3JtLWxhYmVsICpuZ0lmPVwiIWlzSGlkZUxhYmVsXCI+PC9mb3JtLWxhYmVsPlxyXG5cclxuICAgICAgPGZvcm0tZmllbGQ+PC9mb3JtLWZpZWxkPlxyXG5cclxuICAgICAgPGZvcm0tZmVlZGJhY2sgKm5nSWY9XCIhaXNIaWRlRmVlZGJhY2tcIj48L2Zvcm0tZmVlZGJhY2s+XHJcbiAgYCxcclxuXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgICA6aG9zdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJsYWJlbCAgIGZpZWxkXCIgXCIuIGZlZWRiYWNrXCI7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA3ZnI7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICB6LWluZGV4OiA1MDtcclxuICAgICAgfVxyXG5cclxuICAgICAgOmhvc3QtY29udGV4dCguaGlkZS1sYWJlbCkge1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJmaWVsZFwiIFwiZmVlZGJhY2tcIjtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICA6aG9zdC1jb250ZXh0KC5oaWRlLWZlZWRiYWNrKSB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImxhYmVsICAgZmllbGRcIjtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDdmcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgOmhvc3QtY29udGV4dCguaGlkZS1sYWJlbC5oaWRlLWZlZWRiYWNrKSB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImZpZWxkXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDpob3N0LWNvbnRleHQoLmhpZGRlbikge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3JtLWxhYmVsIHtcclxuICAgICAgICAgIGdyaWQtYXJlYTogbGFiZWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvcm0tZmllbGQge1xyXG4gICAgICAgICAgZ3JpZC1hcmVhOiBmaWVsZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9ybS1mZWVkYmFjayB7XHJcbiAgICAgICAgICBncmlkLWFyZWE6IGZlZWRiYWNrO1xyXG4gICAgICB9XHJcbiAgYF0sXHJcbiAgcHJvdmlkZXJzOiBbY29udHJvbE5hbWVCaW5kaW5nXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtQ29udHJvbENvbXBvbmVudCBleHRlbmRzIElvQ29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdDaGVja2VkIHtcclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcblxyXG4gIGdldCBjb250cm9sVGVtcGxhdGVEaXIoKTogSW9uYXJUZW1wbGF0ZURpcmVjdGl2ZSB7XHJcblxyXG4gICAgY29uc3QgcGFyZW50ID0gPEZvcm1Db21wb25lbnQ+dGhpcy5wYXJlbnQsXHJcbiAgICAgIHN0YXRlID0gPEZvcm1Db250cm9sU3RhdGU+dGhpcy5jb250cm9sLnN0YXRlO1xyXG5cclxuICAgIGlmICh0aGlzLl9pb1RlbXBsYXRlRGlyKSByZXR1cm4gdGhpcy5faW9UZW1wbGF0ZURpcjtcclxuXHJcbiAgICBpZiAocGFyZW50LmlvVGVtcGxhdGVEaXJMaXN0KVxyXG4gICAgICByZXR1cm4gXy5maW5kKHBhcmVudC5pb1RlbXBsYXRlRGlyTGlzdC50b0FycmF5KCksIFsnbmFtZScsIHRoaXMubmFtZV0pXHJcbiAgICAgICAgfHwgXy5maW5kKHBhcmVudC5pb1RlbXBsYXRlRGlyTGlzdC50b0FycmF5KCksIFsnY29tcG9uZW50Jywgc3RhdGUuY29tcG9uZW50XSk7XHJcblxyXG4gIH07XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoSW9uYXJUZW1wbGF0ZURpcmVjdGl2ZSkgcHJpdmF0ZSBfaW9UZW1wbGF0ZURpcjtcclxuXHJcblxyXG4gIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXHJcbiAgZ2V0IGF0dHJpYnV0ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGlkZGVuJylcclxuICBnZXQgaGlkZGVuU3R5bGUoKTogQm9vbGVhbiB7XHJcblxyXG4gICAgcmV0dXJuIF8uZ2V0KHRoaXMuY29udHJvbC5vcHRpb25zLCBbJ2hpZGRlbiddKTtcclxuICB9XHJcblxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhpZGVMYWJlbCcpXHJcbiAgZ2V0IGlzSGlkZUxhYmVsKCk6IEJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIF8uZ2V0KHRoaXMuY29udHJvbC5vcHRpb25zLCBbJ2hpZGVMYWJlbCddKTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGlkZUZlZWRiYWNrJylcclxuICBnZXQgaXNIaWRlRmVlZGJhY2soKTogQm9vbGVhbiB7XHJcbiAgICByZXR1cm4gXy5nZXQodGhpcy5jb250cm9sLm9wdGlvbnMsIFsnaGlkZUZlZWRiYWNrJ10pO1xyXG4gIH1cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIEBTa2lwU2VsZigpICBwYXJlbnQ6IENvbnRyb2xDb250YWluZXIsXHJcbiAgICBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHN1cGVyKGNkKTtcclxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl19