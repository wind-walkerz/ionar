/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormService } from './providers/form.service';
import { FormGroup } from './models/FormGroup';
import _ from 'lodash';
import { untilDestroyed } from '@ionar/utility';
import { distinctUntilChanged } from 'rxjs/operators';
import { FieldTemplateDirective } from './directives/field-template.directive';
var FormComponent = /** @class */ (function () {
    function FormComponent(_formSvs, cd) {
        var _this = this;
        this._formSvs = _formSvs;
        this.cd = cd;
        this.submit = new EventEmitter();
        this.viewInitialized = false;
        this.parseContext = function () {
            _this._formSvs.initialize(_this.formGroup);
            _this.controlRoster = _.keys(_this.formGroup.controls);
            _this.controls = _.values(_this.formGroup.controls);
            if (_this._subscription)
                _this._subscription.unsubscribe();
            _this._subscription = _this.formGroup.ngSubmit.pipe(untilDestroyed(_this), distinctUntilChanged()).subscribe(function (data) {
                if (_this.formGroup.valid || data.instant) {
                    _this.submit.emit(_this._formSvs.convertToMediaType(data.value, _this.mediaType));
                }
            });
        };
    }
    /**
     * @return {?}
     */
    FormComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (this.formGroup) {
            this.parseContext();
            this.viewInitialized = true;
            this.cd.detectChanges();
            if (!this.default_template) {
                this.default_template = this._contentVcRef.nativeElement.parentElement.children.length === 0;
            }
            this.cd.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    FormComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    FormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'io-form',
                    template: "\n      <ng-container>\n          <ng-template #contentVc>\n              <ng-content></ng-content>\n          </ng-template>\n\n          <ng-container *ngIf=\"viewInitialized\">\n\n              <ng-container *ngIf=\"!default_template\">\n                  <ng-container [ngTemplateOutlet]=\"contentVc\"></ng-container>\n              </ng-container>\n\n              <ng-container *ngIf=\"default_template\">\n                  <ng-container *ngFor=\"let name of controlRoster\">\n                      <form-control\n                              [name]=\"name\"\n                              [formGroup]=\"formGroup\"\n                      >\n                      </form-control>\n                  </ng-container>\n              </ng-container>\n\n          </ng-container>\n\n      </ng-container>\n\n\n\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [FormService],
                    styles: ["\n\n  "]
                }] }
    ];
    /** @nocollapse */
    FormComponent.ctorParameters = function () { return [
        { type: FormService },
        { type: ChangeDetectorRef }
    ]; };
    FormComponent.propDecorators = {
        formGroup: [{ type: Input }],
        mediaType: [{ type: Input }],
        submit: [{ type: Output }],
        _contentVcRef: [{ type: ViewChild, args: ['contentVc', { read: ElementRef },] }],
        _fieldTemplateDirList: [{ type: ContentChildren, args: [FieldTemplateDirective,] }]
    };
    return FormComponent;
}());
export { FormComponent };
if (false) {
    /** @type {?} */
    FormComponent.prototype.formGroup;
    /** @type {?} */
    FormComponent.prototype.mediaType;
    /** @type {?} */
    FormComponent.prototype.submit;
    /**
     * @type {?}
     * @protected
     */
    FormComponent.prototype._contentVcRef;
    /** @type {?} */
    FormComponent.prototype._fieldTemplateDirList;
    /** @type {?} */
    FormComponent.prototype.controlRoster;
    /** @type {?} */
    FormComponent.prototype.controls;
    /** @type {?} */
    FormComponent.prototype.default_template;
    /** @type {?} */
    FormComponent.prototype.viewInitialized;
    /**
     * @type {?}
     * @protected
     */
    FormComponent.prototype._subscription;
    /** @type {?} */
    FormComponent.prototype.parseContext;
    /**
     * @type {?}
     * @protected
     */
    FormComponent.prototype._formSvs;
    /**
     * @type {?}
     * @protected
     */
    FormComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvY29yZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFLTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQUUsVUFBVSxFQUMzQixZQUFZLEVBRVosS0FBSyxFQUlMLE1BQU0sRUFFUyxTQUFTLEVBQ3pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHL0MsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUcvRTtJQTJERSx1QkFBc0IsUUFBcUIsRUFBWSxFQUFxQjtRQUE1RSxpQkFDQztRQURxQixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBQVksT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFoQmxFLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBWXRDLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBeUJqQyxpQkFBWSxHQUFHO1lBQ2IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3pDLEtBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRXJELEtBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBRWxELElBQUksS0FBSSxDQUFDLGFBQWE7Z0JBQUUsS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUV6RCxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSSxDQUFDLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQXNDO2dCQUUvSSxJQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBRXhDLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztpQkFDaEY7WUFHSCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztJQXJDRixDQUFDOzs7O0lBRUQsMENBQWtCOzs7SUFBbEI7UUFFRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFFbEIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1lBQzVCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQzthQUM5RjtZQUNELElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7O0lBRUQsbUNBQVc7OztJQUFYO0lBQ0EsQ0FBQzs7Z0JBN0VGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFLG16QkE0QlQ7b0JBSUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQzs2QkFKZixRQUVSO2lCQUdGOzs7O2dCQWhEUSxXQUFXO2dCQWJsQixpQkFBaUI7Ozs0QkFpRWhCLEtBQUs7NEJBRUwsS0FBSzt5QkFDTCxNQUFNO2dDQUVOLFNBQVMsU0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO3dDQUUzQyxlQUFlLFNBQUMsc0JBQXNCOztJQW9EekMsb0JBQUM7Q0FBQSxBQW5HRCxJQW1HQztTQTdEWSxhQUFhOzs7SUFFeEIsa0NBQThCOztJQUU5QixrQ0FBMkI7O0lBQzNCLCtCQUFzQzs7Ozs7SUFFdEMsc0NBQXNFOztJQUV0RSw4Q0FBK0Q7O0lBRS9ELHNDQUF3Qjs7SUFFeEIsaUNBQXdCOztJQUV4Qix5Q0FBMEI7O0lBRTFCLHdDQUFpQzs7Ozs7SUFFakMsc0NBQXNDOztJQXVCdEMscUNBaUJFOzs7OztJQXRDVSxpQ0FBK0I7Ozs7O0lBQUUsMkJBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEluamVjdGFibGUsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9mb3JtLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnLi9tb2RlbHMvRm9ybUdyb3VwJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICcuL21vZGVscy9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCB7IENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyB1bnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bpb25hci91dGlsaXR5JztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBGaWVsZFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2ZpZWxkLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpby1mb3JtJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8bmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNjb250ZW50VmM+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidmlld0luaXRpYWxpemVkXCI+XHJcblxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhZGVmYXVsdF90ZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRlbnRWY1wiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGVmYXVsdF90ZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBuYW1lIG9mIGNvbnRyb2xSb3N0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxmb3JtLWNvbnRyb2xcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25hbWVdPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybS1jb250cm9sPlxyXG4gICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuXHJcblxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG5cclxuICBgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtGb3JtU2VydmljZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25EZXN0cm95IHtcclxuXHJcbiAgQElucHV0KCkgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblxyXG4gIEBJbnB1dCgpIG1lZGlhVHlwZTogU3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBzdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRWYycsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBwcm90ZWN0ZWQgX2NvbnRlbnRWY1JlZjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihGaWVsZFRlbXBsYXRlRGlyZWN0aXZlKSBfZmllbGRUZW1wbGF0ZURpckxpc3Q7XHJcblxyXG4gIGNvbnRyb2xSb3N0ZXI6IHN0cmluZ1tdO1xyXG5cclxuICBjb250cm9sczogRm9ybUNvbnRyb2xbXTtcclxuXHJcbiAgZGVmYXVsdF90ZW1wbGF0ZTogQm9vbGVhbjtcclxuXHJcbiAgdmlld0luaXRpYWxpemVkOiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByb3RlY3RlZCBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfZm9ybVN2czogRm9ybVNlcnZpY2UsIHByb3RlY3RlZCBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAodGhpcy5mb3JtR3JvdXApIHtcclxuXHJcbiAgICAgIHRoaXMucGFyc2VDb250ZXh0KCk7XHJcbiAgICAgIHRoaXMudmlld0luaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIGlmICghdGhpcy5kZWZhdWx0X3RlbXBsYXRlKSB7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0X3RlbXBsYXRlID0gdGhpcy5fY29udGVudFZjUmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPT09IDA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG5cclxuICBwYXJzZUNvbnRleHQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9mb3JtU3ZzLmluaXRpYWxpemUodGhpcy5mb3JtR3JvdXApO1xyXG4gICAgdGhpcy5jb250cm9sUm9zdGVyID0gXy5rZXlzKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzKTtcclxuXHJcbiAgICB0aGlzLmNvbnRyb2xzID0gXy52YWx1ZXModGhpcy5mb3JtR3JvdXAuY29udHJvbHMpO1xyXG5cclxuICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb24pIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuZm9ybUdyb3VwLm5nU3VibWl0LnBpcGUodW50aWxEZXN0cm95ZWQodGhpcyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpLnN1YnNjcmliZSgoZGF0YTogeyB2YWx1ZTogYW55LCBpbnN0YW50OiBib29sZWFuIH0pID0+IHtcclxuXHJcbiAgICAgIGlmICh0aGlzLmZvcm1Hcm91cC52YWxpZCB8fCBkYXRhLmluc3RhbnQpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdWJtaXQuZW1pdCh0aGlzLl9mb3JtU3ZzLmNvbnZlcnRUb01lZGlhVHlwZShkYXRhLnZhbHVlLCB0aGlzLm1lZGlhVHlwZSkpO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG59XHJcbiJdfQ==