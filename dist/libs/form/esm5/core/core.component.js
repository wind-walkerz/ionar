"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var form_service_1 = require("./providers/form.service");
var FormGroup_1 = require("./models/FormGroup");
var utility_1 = require("@ionar/utility");
var operators_1 = require("rxjs/operators");
var ControlContainer_1 = require("./interfaces/ControlContainer");
var reactive_errors_1 = require("./utils/reactive_errors");
var helpers_1 = require("./utils/helpers");
var ui_1 = require("@ionar/ui");
/** @type {?} */
exports.formProvider = {
    provide: ControlContainer_1.ControlContainer,
    useExisting: core_1.forwardRef(function () { return FormComponent; })
};
var FormComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FormComponent, _super);
    function FormComponent(_formSvs, _elRef, cd) {
        var _this = _super.call(this, cd) || this;
        _this._formSvs = _formSvs;
        _this._elRef = _elRef;
        /**
         * \@description
         * Tracks the `FormGroup` bound to this components.
         */
        _this.form = null;
        /**
         * \@description
         * Emits an event when the form submission has been triggered.
         */
        _this.submit = new core_1.EventEmitter();
        _this.isFormControl = helpers_1.isFormControl;
        _this.isFormGroup = helpers_1.isFormGroup;
        _this.isFormArray = helpers_1.isFormArray;
        return _this;
    }
    /**
     * @return {?}
     */
    FormComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this._checkFormPresent();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FormComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        _super.prototype.ngOnChanges.call(this, changes);
        this._checkFormPresent();
        if (!changes.form.previousValue && changes.form.currentValue) {
            this.form.ngSubmit
                .pipe(utility_1.untilDestroyed(this), operators_1.distinctUntilChanged())
                .subscribe(function (data) {
                if (_this.form.valid || data.instant) {
                    _this.submit.emit(_this._formSvs.convertToMediaType(data.value, _this.mediaType));
                }
            });
        }
    };
    /**
     * @return {?}
     */
    FormComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngAfterViewInit.call(this);
        this.default_template = ui_1.isEmptyTemplate(this._elRef);
        this.cd.detectChanges();
    };
    /**
     * @return {?}
     */
    FormComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(FormComponent.prototype, "root", {
        /**
         * @description
         * Returns the `FormGroup` bound to whole module.
         */
        get: /**
         * \@description
         * Returns the `FormGroup` bound to whole module.
         * @return {?}
         */
        function () {
            return this.form;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FormComponent.prototype, "path", {
        /**
         * @description
         * Returns an array representing the path to this group. Because this components
         * always lives at the top level of a form, it always an empty array.
         */
        get: /**
         * \@description
         * Returns an array representing the path to this group. Because this components
         * always lives at the top level of a form, it always an empty array.
         * @return {?}
         */
        function () {
            return [];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    FormComponent.prototype._checkFormPresent = /**
     * @private
     * @return {?}
     */
    function () {
        if (!this.form) {
            reactive_errors_1.ReactiveErrors.missingFormException();
        }
    };
    FormComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'io-form',
                    template: "\n      <ng-container>\n\n          <ng-container *ngIf=\"!default_template\">\n              <ng-content></ng-content>\n          </ng-container>\n\n\n          <ng-container *ngIf=\"default_template\">\n              <ng-container\n                      *ngFor=\"let item of form.controls | keyvalue\"\n                      [ngTemplateOutlet]=\"controlTemplate\"\n                      [ngTemplateOutletContext]=\"{$implicit: item, parent: this}\"\n              ></ng-container>\n          </ng-container>\n\n          <ng-template #controlTemplate let-data let-parent=\"parent\">\n              <ng-container *ngIf=\"isFormControl(data.value)\">\n                  <form-control [parent]=\"parent\" [name]=\"data.key\"></form-control>\n              </ng-container>\n\n              <ng-container *ngIf=\"isFormArray(data.value)\">\n                  <form-array\n                          [name]=\"data.key\"\n                          [parent]=\"parent\"\n                  >\n\n                  </form-array>\n              </ng-container>\n\n              <ng-container *ngIf=\"isFormGroup(data.value)\">\n                  <form-group\n                          [name]=\"data.key\"\n                          [parent]=\"parent\"\n                  >\n                  </form-group>\n              </ng-container>\n          </ng-template>\n\n      </ng-container>\n  ",
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    providers: [form_service_1.FormService, exports.formProvider],
                    styles: ["\n\n  "]
                }] }
    ];
    /** @nocollapse */
    FormComponent.ctorParameters = function () { return [
        { type: form_service_1.FormService },
        { type: core_1.ElementRef },
        { type: core_1.ChangeDetectorRef }
    ]; };
    FormComponent.propDecorators = {
        form: [{ type: core_1.Input, args: ['formGroup',] }],
        mediaType: [{ type: core_1.Input }],
        submit: [{ type: core_1.Output }],
        _contentVcRef: [{ type: core_1.ViewChild, args: ['contentVc', { read: core_1.ViewContainerRef },] }],
        controlTemplate: [{ type: core_1.ViewChild, args: ['controlTemplate',] }],
        ioTemplateDirList: [{ type: core_1.ContentChildren, args: [ui_1.IonarTemplateDirective,] }]
    };
    return FormComponent;
}(ControlContainer_1.ControlContainer));
exports.FormComponent = FormComponent;
if (false) {
    /**
     * \@description
     * Tracks the `FormGroup` bound to this components.
     * @type {?}
     */
    FormComponent.prototype.form;
    /** @type {?} */
    FormComponent.prototype.mediaType;
    /**
     * \@description
     * Emits an event when the form submission has been triggered.
     * @type {?}
     */
    FormComponent.prototype.submit;
    /**
     * @type {?}
     * @private
     */
    FormComponent.prototype._contentVcRef;
    /** @type {?} */
    FormComponent.prototype.controlTemplate;
    /** @type {?} */
    FormComponent.prototype.ioTemplateDirList;
    /** @type {?} */
    FormComponent.prototype.default_template;
    /** @type {?} */
    FormComponent.prototype.isFormControl;
    /** @type {?} */
    FormComponent.prototype.isFormGroup;
    /** @type {?} */
    FormComponent.prototype.isFormArray;
    /**
     * @type {?}
     * @private
     */
    FormComponent.prototype._formSvs;
    /**
     * @type {?}
     * @private
     */
    FormComponent.prototype._elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvY29yZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHNDQWtCdUI7QUFDdkIseURBQXVEO0FBQ3ZELGdEQUErQztBQUMvQywwQ0FBZ0Q7QUFDaEQsNENBQXNEO0FBRXRELGtFQUFpRTtBQUNqRSwyREFBeUQ7QUFFekQsMkNBQTBFO0FBRTFFLGdDQUFvRTs7QUFHdkQsUUFBQSxZQUFZLEdBQVE7SUFDL0IsT0FBTyxFQUFFLG1DQUFnQjtJQUN6QixXQUFXLEVBQUUsaUJBQVUsQ0FBQyxjQUFNLE9BQUEsYUFBYSxFQUFiLENBQWEsQ0FBQztDQUM3QztBQUVEO0lBa0RtQyx5Q0FBZ0I7SUFnQ2pELHVCQUNVLFFBQXFCLEVBQ3JCLE1BQWtCLEVBQzFCLEVBQXFCO1FBSHZCLFlBS0Usa0JBQU0sRUFBRSxDQUFDLFNBQ1Y7UUFMUyxjQUFRLEdBQVIsUUFBUSxDQUFhO1FBQ3JCLFlBQU0sR0FBTixNQUFNLENBQVk7Ozs7O1FBNUJSLFVBQUksR0FBYyxJQUFJLENBQUM7Ozs7O1FBUWpDLFlBQU0sR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQztRQWN0QyxtQkFBYSxHQUFHLHVCQUFhLENBQUM7UUFDOUIsaUJBQVcsR0FBRyxxQkFBVyxDQUFDO1FBQzFCLGlCQUFXLEdBQUcscUJBQVcsQ0FBQzs7SUFRMUIsQ0FBQzs7OztJQUdELGdDQUFROzs7SUFBUjtRQUNFLGlCQUFNLFFBQVEsV0FBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRUQsbUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQWxDLGlCQWtCQztRQWpCQyxpQkFBTSxXQUFXLFlBQUMsT0FBTyxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBRTVELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTtpQkFDZixJQUFJLENBQUMsd0JBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRSxnQ0FBb0IsRUFBRSxDQUFDO2lCQUNsRCxTQUFTLENBQUMsVUFBQyxJQUFzQztnQkFFaEQsSUFBSSxLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUVuQyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7aUJBQ2hGO1lBRUgsQ0FBQyxDQUFDLENBQUM7U0FFTjtJQUNILENBQUM7Ozs7SUFFRCx1Q0FBZTs7O0lBQWY7UUFDRSxpQkFBTSxlQUFlLFdBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsb0JBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFckQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsbUNBQVc7OztJQUFYO0lBQ0EsQ0FBQztJQU1ELHNCQUFJLCtCQUFJO1FBSlI7OztXQUdHOzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNuQixDQUFDOzs7T0FBQTtJQVFELHNCQUFJLCtCQUFJO1FBTFI7Ozs7V0FJRzs7Ozs7OztRQUNIO1lBQ0UsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDOzs7T0FBQTs7Ozs7SUFFTyx5Q0FBaUI7Ozs7SUFBekI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNkLGdDQUFjLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUN2QztJQUNILENBQUM7O2dCQXBKRixnQkFBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUscTJDQXdDVDtvQkFJRCxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFLENBQUMsMEJBQVcsRUFBRSxvQkFBWSxDQUFDOzZCQUo3QixRQUVSO2lCQUdGOzs7O2dCQWxFUSwwQkFBVztnQkFibEIsaUJBQVU7Z0JBSFYsd0JBQWlCOzs7dUJBMEZoQixZQUFLLFNBQUMsV0FBVzs0QkFFakIsWUFBSzt5QkFNTCxhQUFNO2dDQUVOLGdCQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLHVCQUFnQixFQUFFO2tDQUVqRCxnQkFBUyxTQUFDLGlCQUFpQjtvQ0FFM0Isc0JBQWUsU0FBQywyQkFBc0I7O0lBZ0Z6QyxvQkFBQztDQUFBLEFBdEpELENBa0RtQyxtQ0FBZ0IsR0FvR2xEO0FBcEdZLHNDQUFhOzs7Ozs7O0lBTXhCLDZCQUEyQzs7SUFFM0Msa0NBQTJCOzs7Ozs7SUFNM0IsK0JBQXNDOzs7OztJQUV0QyxzQ0FBNEY7O0lBRTVGLHdDQUFnRTs7SUFFaEUsMENBQThGOztJQU05Rix5Q0FBMEI7O0lBRTFCLHNDQUE4Qjs7SUFDOUIsb0NBQTBCOztJQUMxQixvQ0FBMEI7Ozs7O0lBR3hCLGlDQUE2Qjs7Ozs7SUFDN0IsK0JBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi9wcm92aWRlcnMvZm9ybS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnLi9tb2RlbHMvRm9ybUdyb3VwJztcclxuaW1wb3J0IHsgdW50aWxEZXN0cm95ZWQgfSBmcm9tICdAaW9uYXIvdXRpbGl0eSc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgQ29udHJvbENvbnRhaW5lciB9IGZyb20gJy4vaW50ZXJmYWNlcy9Db250cm9sQ29udGFpbmVyJztcclxuaW1wb3J0IHsgUmVhY3RpdmVFcnJvcnMgfSBmcm9tICcuL3V0aWxzL3JlYWN0aXZlX2Vycm9ycyc7XHJcblxyXG5pbXBvcnQgeyBpc0Zvcm1BcnJheSwgaXNGb3JtQ29udHJvbCwgaXNGb3JtR3JvdXAgfSBmcm9tICcuL3V0aWxzL2hlbHBlcnMnO1xyXG5cclxuaW1wb3J0IHsgSW9uYXJUZW1wbGF0ZURpcmVjdGl2ZSwgaXNFbXB0eVRlbXBsYXRlIH0gZnJvbSAnQGlvbmFyL3VpJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZm9ybVByb3ZpZGVyOiBhbnkgPSB7XHJcbiAgcHJvdmlkZTogQ29udHJvbENvbnRhaW5lcixcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBGb3JtQ29tcG9uZW50KVxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpby1mb3JtJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8bmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZGVmYXVsdF90ZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuXHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGVmYXVsdF90ZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGZvcm0uY29udHJvbHMgfCBrZXl2YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250cm9sVGVtcGxhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cInskaW1wbGljaXQ6IGl0ZW0sIHBhcmVudDogdGhpc31cIlxyXG4gICAgICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjY29udHJvbFRlbXBsYXRlIGxldC1kYXRhIGxldC1wYXJlbnQ9XCJwYXJlbnRcIj5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNGb3JtQ29udHJvbChkYXRhLnZhbHVlKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8Zm9ybS1jb250cm9sIFtwYXJlbnRdPVwicGFyZW50XCIgW25hbWVdPVwiZGF0YS5rZXlcIj48L2Zvcm0tY29udHJvbD5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzRm9ybUFycmF5KGRhdGEudmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxmb3JtLWFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW25hbWVdPVwiZGF0YS5rZXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtwYXJlbnRdPVwicGFyZW50XCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgPC9mb3JtLWFycmF5PlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNGb3JtR3JvdXAoZGF0YS52YWx1ZSlcIj5cclxuICAgICAgICAgICAgICAgICAgPGZvcm0tZ3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbbmFtZV09XCJkYXRhLmtleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3BhcmVudF09XCJwYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDwvZm9ybS1ncm91cD5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgLFxyXG4gIHN0eWxlczogW2BcclxuXHJcbiAgYF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbRm9ybVNlcnZpY2UsIGZvcm1Qcm92aWRlcl1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtQ29tcG9uZW50IGV4dGVuZHMgQ29udHJvbENvbnRhaW5lciBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBUcmFja3MgdGhlIGBGb3JtR3JvdXBgIGJvdW5kIHRvIHRoaXMgY29tcG9uZW50cy5cclxuICAgKi9cclxuICBASW5wdXQoJ2Zvcm1Hcm91cCcpIGZvcm06IEZvcm1Hcm91cCA9IG51bGw7XHJcblxyXG4gIEBJbnB1dCgpIG1lZGlhVHlwZTogU3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBFbWl0cyBhbiBldmVudCB3aGVuIHRoZSBmb3JtIHN1Ym1pc3Npb24gaGFzIGJlZW4gdHJpZ2dlcmVkLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBzdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRWYycsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSBwcml2YXRlIF9jb250ZW50VmNSZWY6IFZpZXdDb250YWluZXJSZWY7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRyb2xUZW1wbGF0ZScpIGNvbnRyb2xUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihJb25hclRlbXBsYXRlRGlyZWN0aXZlKSBpb1RlbXBsYXRlRGlyTGlzdDogUXVlcnlMaXN0PElvbmFyVGVtcGxhdGVEaXJlY3RpdmU+O1xyXG5cclxuICAvLyBAQ29udGVudENoaWxkcmVuKENvbnRyb2xDb250YWluZXIpIHByaXZhdGUgX2NvbnRyb2xDb250YWluZXJMaXN0OiBRdWVyeUxpc3Q8Q29udHJvbENvbnRhaW5lcj47XHJcbiAgLy9cclxuICAvLyBAQ29udGVudENoaWxkcmVuKElvQ29udHJvbCkgcHJpdmF0ZSBfaW9Db250cm9sTGlzdDogUXVlcnlMaXN0PElvQ29udHJvbD47XHJcblxyXG4gIGRlZmF1bHRfdGVtcGxhdGU6IEJvb2xlYW47XHJcblxyXG4gIGlzRm9ybUNvbnRyb2wgPSBpc0Zvcm1Db250cm9sO1xyXG4gIGlzRm9ybUdyb3VwID0gaXNGb3JtR3JvdXA7XHJcbiAgaXNGb3JtQXJyYXkgPSBpc0Zvcm1BcnJheTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9mb3JtU3ZzOiBGb3JtU2VydmljZSxcclxuICAgIHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLFxyXG4gICAgY2Q6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcihjZCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gICAgdGhpcy5fY2hlY2tGb3JtUHJlc2VudCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgICB0aGlzLl9jaGVja0Zvcm1QcmVzZW50KCk7XHJcblxyXG4gICAgaWYgKCFjaGFuZ2VzLmZvcm0ucHJldmlvdXNWYWx1ZSAmJiBjaGFuZ2VzLmZvcm0uY3VycmVudFZhbHVlKSB7XHJcblxyXG4gICAgICB0aGlzLmZvcm0ubmdTdWJtaXRcclxuICAgICAgICAucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSlcclxuICAgICAgICAuc3Vic2NyaWJlKChkYXRhOiB7IHZhbHVlOiBhbnksIGluc3RhbnQ6IGJvb2xlYW4gfSkgPT4ge1xyXG5cclxuICAgICAgICAgIGlmICh0aGlzLmZvcm0udmFsaWQgfHwgZGF0YS5pbnN0YW50KSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdC5lbWl0KHRoaXMuX2Zvcm1TdnMuY29udmVydFRvTWVkaWFUeXBlKGRhdGEudmFsdWUsIHRoaXMubWVkaWFUeXBlKSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xyXG4gICAgdGhpcy5kZWZhdWx0X3RlbXBsYXRlID0gaXNFbXB0eVRlbXBsYXRlKHRoaXMuX2VsUmVmKTtcclxuXHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogUmV0dXJucyB0aGUgYEZvcm1Hcm91cGAgYm91bmQgdG8gd2hvbGUgbW9kdWxlLlxyXG4gICAqL1xyXG4gIGdldCByb290KCk6IEZvcm1Hcm91cCB7XHJcbiAgICByZXR1cm4gdGhpcy5mb3JtO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIFJldHVybnMgYW4gYXJyYXkgcmVwcmVzZW50aW5nIHRoZSBwYXRoIHRvIHRoaXMgZ3JvdXAuIEJlY2F1c2UgdGhpcyBjb21wb25lbnRzXHJcbiAgICogYWx3YXlzIGxpdmVzIGF0IHRoZSB0b3AgbGV2ZWwgb2YgYSBmb3JtLCBpdCBhbHdheXMgYW4gZW1wdHkgYXJyYXkuXHJcbiAgICovXHJcbiAgZ2V0IHBhdGgoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfY2hlY2tGb3JtUHJlc2VudCgpIHtcclxuICAgIGlmICghdGhpcy5mb3JtKSB7XHJcbiAgICAgIFJlYWN0aXZlRXJyb3JzLm1pc3NpbmdGb3JtRXhjZXB0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=