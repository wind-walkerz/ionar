/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, forwardRef, Host, HostBinding, Optional, SkipSelf } from '@angular/core';
import _ from 'lodash';
import { IoControl } from '../interfaces/IoControl';
import { ControlContainer } from '../interfaces/ControlContainer';
import { IonarTemplateDirective } from '@ionar/ui';
/** @type {?} */
export var controlNameBinding = {
    provide: IoControl,
    useExisting: forwardRef(function () { return FormControlComponent; })
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
                return _.find(parent.ioTemplateDirList.toArray(), ['name', this.name])
                    || _.find(parent.ioTemplateDirList.toArray(), ['component', state.component]);
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
            return _.get(this.control.options, ['hidden']);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "isHideLabel", {
        get: /**
         * @return {?}
         */
        function () {
            return _.get(this.control.options, ['hideLabel']);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormControlComponent.prototype, "isHideFeedback", {
        get: /**
         * @return {?}
         */
        function () {
            return _.get(this.control.options, ['hideFeedback']);
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
        { type: Component, args: [{
                    selector: 'form-control',
                    template: "\n      <form-label *ngIf=\"!isHideLabel\"></form-label>\n\n      <form-field></form-field>\n\n      <form-feedback *ngIf=\"!isHideFeedback\"></form-feedback>\n  ",
                    providers: [controlNameBinding],
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n      :host {\n          display: grid;\n          grid-template-areas: \"label   field\" \". feedback\";\n          grid-template-columns: 3fr 7fr;\n          grid-template-rows: 1fr auto;\n          margin-bottom: 1rem;\n          height: auto;\n          visibility: visible;\n          z-index: 50;\n      }\n\n      :host-context(.hide-label) {\n          grid-template-areas: \"field\" \"feedback\";\n          grid-template-columns: 1fr;\n      }\n\n      :host-context(.hide-feedback) {\n          grid-template-areas: \"label   field\";\n          grid-template-columns: 3fr 7fr;\n      }\n\n      :host-context(.hide-label.hide-feedback) {\n          grid-template-areas: \"field\";\n      }\n\n      :host-context(.hidden) {\n          display: none !important;\n      }\n\n      form-label {\n          grid-area: label;\n      }\n\n      form-field {\n          grid-area: field;\n      }\n\n      form-feedback {\n          grid-area: feedback;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    FormControlComponent.ctorParameters = function () { return [
        { type: ControlContainer, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] },
        { type: ChangeDetectorRef }
    ]; };
    FormControlComponent.propDecorators = {
        _ioTemplateDir: [{ type: ContentChild, args: [IonarTemplateDirective,] }],
        attribute: [{ type: HostBinding, args: ['attr.id',] }],
        hiddenStyle: [{ type: HostBinding, args: ['class.hidden',] }],
        isHideLabel: [{ type: HostBinding, args: ['class.hideLabel',] }],
        isHideFeedback: [{ type: HostBinding, args: ['class.hideFeedback',] }]
    };
    return FormControlComponent;
}(IoControl));
export { FormControlComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormControlComponent.prototype._ioTemplateDir;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9mb3JtLyIsInNvdXJjZXMiOlsiY29yZS9jb21wb25lbnRzL2Zvcm0tY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osV0FBVyxFQUdYLFFBQVEsRUFFUixRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUdsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxXQUFXLENBQUM7O0FBRW5ELE1BQU0sS0FBTyxrQkFBa0IsR0FBUTtJQUNyQyxPQUFPLEVBQUUsU0FBUztJQUNsQixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxvQkFBb0IsRUFBcEIsQ0FBb0IsQ0FBQztDQUNwRDtBQUdEO0lBeUQwQyxnREFBUztJQTBDakQsd0hBQXdIO0lBQ3hILDhCQUNtQyxNQUF3QixFQUN6RCxFQUFxQjtRQUZ2QixZQUlFLGtCQUFNLEVBQUUsQ0FBQyxTQUVWO1FBREMsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7O0lBQ3ZCLENBQUM7SUE3Q0Qsc0JBQUksb0RBQWtCO1FBSHRCLGtIQUFrSDs7Ozs7O1FBR2xIOztnQkFFUSxNQUFNLEdBQUcsbUJBQWUsSUFBSSxDQUFDLE1BQU0sRUFBQTs7Z0JBQ3ZDLEtBQUssR0FBRyxtQkFBa0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUE7WUFFOUMsSUFBSSxJQUFJLENBQUMsY0FBYztnQkFBRSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7WUFFcEQsSUFBSSxNQUFNLENBQUMsaUJBQWlCO2dCQUMxQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt1QkFDakUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFFcEYsQ0FBQzs7O09BQUE7SUFBQSxDQUFDO0lBS0Ysc0JBQ0ksMkNBQVM7Ozs7UUFEYjtZQUVFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixDQUFDOzs7T0FBQTtJQUVELHNCQUNJLDZDQUFXOzs7O1FBRGY7WUFHRSxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pELENBQUM7OztPQUFBO0lBR0Qsc0JBQ0ksNkNBQVc7Ozs7UUFEZjtZQUVFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSxnREFBYzs7OztRQURsQjtZQUVFLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsQ0FBQzs7O09BQUE7Ozs7SUFXRCx1Q0FBUTs7O0lBQVI7SUFFQSxDQUFDOzs7OztJQUVELDBDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxpQkFBTSxXQUFXLFlBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELGlEQUFrQjs7O0lBQWxCO0lBRUEsQ0FBQzs7Z0JBdEhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsY0FBYztvQkFDeEIsUUFBUSxFQUFFLG9LQU1UO29CQTRDRCxTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDL0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07NkJBM0N0QywrOEJBeUNSO2lCQUdGOzs7O2dCQWpFUSxnQkFBZ0IsdUJBZ0hwQixRQUFRLFlBQUksSUFBSSxZQUFJLFFBQVE7Z0JBakkvQixpQkFBaUI7OztpQ0FzR2hCLFlBQVksU0FBQyxzQkFBc0I7NEJBR25DLFdBQVcsU0FBQyxTQUFTOzhCQUtyQixXQUFXLFNBQUMsY0FBYzs4QkFPMUIsV0FBVyxTQUFDLGlCQUFpQjtpQ0FLN0IsV0FBVyxTQUFDLG9CQUFvQjs7SUEwQm5DLDJCQUFDO0NBQUEsQUF4SEQsQ0F5RDBDLFNBQVMsR0ErRGxEO1NBL0RZLG9CQUFvQjs7Ozs7O0lBaUIvQiw4Q0FBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0NoZWNrZWQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBmb3J3YXJkUmVmLFxyXG4gIEhvc3QsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFNraXBTZWxmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW9Db250cm9sIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Jb0NvbnRyb2wnO1xyXG5pbXBvcnQgeyBDb250cm9sQ29udGFpbmVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Db250cm9sQ29udGFpbmVyJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2xTdGF0ZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvRm9ybSc7XHJcblxyXG5pbXBvcnQgeyBJb25hclRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnQGlvbmFyL3VpJztcclxuXHJcbmV4cG9ydCBjb25zdCBjb250cm9sTmFtZUJpbmRpbmc6IGFueSA9IHtcclxuICBwcm92aWRlOiBJb0NvbnRyb2wsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRm9ybUNvbnRyb2xDb21wb25lbnQpXHJcbn07XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmb3JtLWNvbnRyb2wnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxmb3JtLWxhYmVsICpuZ0lmPVwiIWlzSGlkZUxhYmVsXCI+PC9mb3JtLWxhYmVsPlxyXG5cclxuICAgICAgPGZvcm0tZmllbGQ+PC9mb3JtLWZpZWxkPlxyXG5cclxuICAgICAgPGZvcm0tZmVlZGJhY2sgKm5nSWY9XCIhaXNIaWRlRmVlZGJhY2tcIj48L2Zvcm0tZmVlZGJhY2s+XHJcbiAgYCxcclxuXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgICA6aG9zdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJsYWJlbCAgIGZpZWxkXCIgXCIuIGZlZWRiYWNrXCI7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA3ZnI7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICB6LWluZGV4OiA1MDtcclxuICAgICAgfVxyXG5cclxuICAgICAgOmhvc3QtY29udGV4dCguaGlkZS1sYWJlbCkge1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJmaWVsZFwiIFwiZmVlZGJhY2tcIjtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICA6aG9zdC1jb250ZXh0KC5oaWRlLWZlZWRiYWNrKSB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImxhYmVsICAgZmllbGRcIjtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDdmcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgOmhvc3QtY29udGV4dCguaGlkZS1sYWJlbC5oaWRlLWZlZWRiYWNrKSB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImZpZWxkXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDpob3N0LWNvbnRleHQoLmhpZGRlbikge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3JtLWxhYmVsIHtcclxuICAgICAgICAgIGdyaWQtYXJlYTogbGFiZWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvcm0tZmllbGQge1xyXG4gICAgICAgICAgZ3JpZC1hcmVhOiBmaWVsZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9ybS1mZWVkYmFjayB7XHJcbiAgICAgICAgICBncmlkLWFyZWE6IGZlZWRiYWNrO1xyXG4gICAgICB9XHJcbiAgYF0sXHJcbiAgcHJvdmlkZXJzOiBbY29udHJvbE5hbWVCaW5kaW5nXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtQ29udHJvbENvbXBvbmVudCBleHRlbmRzIElvQ29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdDaGVja2VkIHtcclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcblxyXG4gIGdldCBjb250cm9sVGVtcGxhdGVEaXIoKTogSW9uYXJUZW1wbGF0ZURpcmVjdGl2ZSB7XHJcblxyXG4gICAgY29uc3QgcGFyZW50ID0gPEZvcm1Db21wb25lbnQ+dGhpcy5wYXJlbnQsXHJcbiAgICAgIHN0YXRlID0gPEZvcm1Db250cm9sU3RhdGU+dGhpcy5jb250cm9sLnN0YXRlO1xyXG5cclxuICAgIGlmICh0aGlzLl9pb1RlbXBsYXRlRGlyKSByZXR1cm4gdGhpcy5faW9UZW1wbGF0ZURpcjtcclxuXHJcbiAgICBpZiAocGFyZW50LmlvVGVtcGxhdGVEaXJMaXN0KVxyXG4gICAgICByZXR1cm4gXy5maW5kKHBhcmVudC5pb1RlbXBsYXRlRGlyTGlzdC50b0FycmF5KCksIFsnbmFtZScsIHRoaXMubmFtZV0pXHJcbiAgICAgICAgfHwgXy5maW5kKHBhcmVudC5pb1RlbXBsYXRlRGlyTGlzdC50b0FycmF5KCksIFsnY29tcG9uZW50Jywgc3RhdGUuY29tcG9uZW50XSk7XHJcblxyXG4gIH07XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoSW9uYXJUZW1wbGF0ZURpcmVjdGl2ZSkgcHJpdmF0ZSBfaW9UZW1wbGF0ZURpcjtcclxuXHJcblxyXG4gIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXHJcbiAgZ2V0IGF0dHJpYnV0ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGlkZGVuJylcclxuICBnZXQgaGlkZGVuU3R5bGUoKTogQm9vbGVhbiB7XHJcblxyXG4gICAgcmV0dXJuIF8uZ2V0KHRoaXMuY29udHJvbC5vcHRpb25zLCBbJ2hpZGRlbiddKTtcclxuICB9XHJcblxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhpZGVMYWJlbCcpXHJcbiAgZ2V0IGlzSGlkZUxhYmVsKCk6IEJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIF8uZ2V0KHRoaXMuY29udHJvbC5vcHRpb25zLCBbJ2hpZGVMYWJlbCddKTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGlkZUZlZWRiYWNrJylcclxuICBnZXQgaXNIaWRlRmVlZGJhY2soKTogQm9vbGVhbiB7XHJcbiAgICByZXR1cm4gXy5nZXQodGhpcy5jb250cm9sLm9wdGlvbnMsIFsnaGlkZUZlZWRiYWNrJ10pO1xyXG4gIH1cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIEBTa2lwU2VsZigpICBwYXJlbnQ6IENvbnRyb2xDb250YWluZXIsXHJcbiAgICBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHN1cGVyKGNkKTtcclxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl19