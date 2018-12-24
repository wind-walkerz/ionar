/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Host, Input, Renderer2 } from '@angular/core';
import { FormGroup } from '../models/FormGroup';
import { FormService } from '../providers/form.service';
import _ from 'lodash';
import { FormComponent } from '../core.component';
import { FieldTemplateDirective } from '../directives/field-template.directive';
var ControlComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function ControlComponent(_formSvs, cd, _renderer, _elRef, _parent) {
        var _this = this;
        this._formSvs = _formSvs;
        this.cd = cd;
        this._renderer = _renderer;
        this._elRef = _elRef;
        this._parent = _parent;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.name = '';
        this.show_feedback = true;
        this.show_label = true;
        this.parseContext = function () {
            _this._checkTemplate();
            _this._control = _this.formGroup.get(_this.name);
            _this._renderer.setAttribute(_this._elRef.nativeElement, 'id', _this.name);
            /** @type {?} */
            var props = ((/** @type {?} */ (_this._control.configuration))).props;
            if (_.has(props, ['hidden'])) {
                _this._renderer.addClass(_this._elRef.nativeElement, 'hidden');
            }
            if (_.has(props, ['hideLabel'])) {
                _this.show_label = false;
                _this._renderer.addClass(_this._elRef.nativeElement, 'hide-label');
            }
            if (_.has(props, ['hideFeedback'])) {
                _this.show_feedback = false;
                _this._renderer.addClass(_this._elRef.nativeElement, 'hide-feedback');
            }
            _this.cd.detectChanges();
        };
        this._checkTemplate = function () {
            /** @type {?} */
            var templateData = _this._fieldTemplateDir ? _this._fieldTemplateDir : _.find(_this._parent._fieldTemplateDirList.toArray(), ['name', _this.name]);
            if (templateData) {
                _this.fieldTemplate = templateData._tplRef;
            }
        };
    }
    /**
     * @return {?}
     */
    ControlComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ControlComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ControlComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (this._parent.formGroup) {
            this.formGroup = this._parent.formGroup;
            this.parseContext();
        }
    };
    /**
     * @return {?}
     */
    ControlComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    ControlComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    ControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'form-control',
                    template: "\n\n      <ng-container *ngIf=\"formGroup\">\n          <form-label *ngIf=\"show_label\"></form-label>\n\n          <form-field></form-field>\n\n          <form-feedback *ngIf=\"show_feedback\"></form-feedback>\n      </ng-container>\n\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n      :host {\n          display: grid;\n          grid-template-areas: \"label   field\" \". feedback\";\n          grid-template-columns: 3fr 7fr;\n          grid-template-rows: 1fr auto;\n          margin-bottom: 1rem;\n          height: auto;\n          visibility: visible;\n          z-index: 50;\n      }\n\n      :host-context(.hide-label) {\n          grid-template-areas: \"field\" \"feedback\";\n          grid-template-columns: 1fr;\n      }\n\n      :host-context(.hide-feedback) {\n          grid-template-areas: \"label   field\";\n          grid-template-columns: 3fr 7fr;\n      }\n\n      :host-context(.hide-label.hide-feedback) {\n          grid-template-areas: \"field\";\n      }\n\n      :host-context(.hidden) {\n          display: none !important;\n      }\n\n      form-label {\n          grid-area: label;\n      }\n\n      form-field {\n          grid-area: field;\n      }\n\n      form-feedback {\n          grid-area: feedback;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    ControlComponent.ctorParameters = function () { return [
        { type: FormService },
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ElementRef },
        { type: FormComponent, decorators: [{ type: Host }] }
    ]; };
    ControlComponent.propDecorators = {
        name: [{ type: Input }],
        formGroup: [{ type: Input }],
        _fieldTemplateDir: [{ type: ContentChild, args: [FieldTemplateDirective,] }]
    };
    return ControlComponent;
}());
export { ControlComponent };
if (false) {
    /** @type {?} */
    ControlComponent.prototype.name;
    /** @type {?} */
    ControlComponent.prototype.formGroup;
    /** @type {?} */
    ControlComponent.prototype._control;
    /** @type {?} */
    ControlComponent.prototype.fieldTemplate;
    /** @type {?} */
    ControlComponent.prototype.show_feedback;
    /** @type {?} */
    ControlComponent.prototype.show_label;
    /**
     * @type {?}
     * @private
     */
    ControlComponent.prototype._fieldTemplateDir;
    /** @type {?} */
    ControlComponent.prototype.parseContext;
    /**
     * @type {?}
     * @private
     */
    ControlComponent.prototype._checkTemplate;
    /**
     * @type {?}
     * @private
     */
    ControlComponent.prototype._formSvs;
    /** @type {?} */
    ControlComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    ControlComponent.prototype._renderer;
    /**
     * @type {?}
     * @private
     */
    ControlComponent.prototype._elRef;
    /**
     * @type {?}
     * @private
     */
    ControlComponent.prototype._parent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvY29tcG9uZW50cy9jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFJTCxTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWhELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV4RCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWxELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRWhGO0lBMEVFLHdIQUF3SDtJQUN4SCwwQkFDVSxRQUFxQixFQUN0QixFQUFxQixFQUNwQixTQUFvQixFQUNwQixNQUFrQixFQUNWLE9BQXNCO1FBTHhDLGlCQU9DO1FBTlMsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUN0QixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNwQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFdBQU0sR0FBTixNQUFNLENBQVk7UUFDVixZQUFPLEdBQVAsT0FBTyxDQUFlOztRQXBCL0IsU0FBSSxHQUFRLEVBQUUsQ0FBQztRQU94QixrQkFBYSxHQUFZLElBQUksQ0FBQztRQUU5QixlQUFVLEdBQVksSUFBSSxDQUFDO1FBb0MzQixpQkFBWSxHQUFHO1lBRWIsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRXRCLEtBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUks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QUE2Qjs7SUFDN0IsOEJBQTRCOzs7OztJQUM1QixxQ0FBNEI7Ozs7O0lBQzVCLGtDQUEwQjs7Ozs7SUFDMUIsbUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdDaGVja2VkLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3QsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJy4uL21vZGVscy9Gb3JtR3JvdXAnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJy4uL21vZGVscy9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2Zvcm0uc2VydmljZSc7XHJcblxyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL0NvbnRyb2xDb25maWcnO1xyXG5pbXBvcnQgeyBGaWVsZFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9maWVsZC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmb3JtLWNvbnRyb2wnLFxyXG4gIHRlbXBsYXRlOiBgXHJcblxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybUdyb3VwXCI+XHJcbiAgICAgICAgICA8Zm9ybS1sYWJlbCAqbmdJZj1cInNob3dfbGFiZWxcIj48L2Zvcm0tbGFiZWw+XHJcblxyXG4gICAgICAgICAgPGZvcm0tZmllbGQ+PC9mb3JtLWZpZWxkPlxyXG5cclxuICAgICAgICAgIDxmb3JtLWZlZWRiYWNrICpuZ0lmPVwic2hvd19mZWVkYmFja1wiPjwvZm9ybS1mZWVkYmFjaz5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIGAsXHJcblxyXG4gIHN0eWxlczogW2BcclxuICAgICAgOmhvc3Qge1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibGFiZWwgICBmaWVsZFwiIFwiLiBmZWVkYmFja1wiO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgN2ZyO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgei1pbmRleDogNTA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDpob3N0LWNvbnRleHQoLmhpZGUtbGFiZWwpIHtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiZmllbGRcIiBcImZlZWRiYWNrXCI7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgOmhvc3QtY29udGV4dCguaGlkZS1mZWVkYmFjaykge1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJsYWJlbCAgIGZpZWxkXCI7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA3ZnI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDpob3N0LWNvbnRleHQoLmhpZGUtbGFiZWwuaGlkZS1mZWVkYmFjaykge1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJmaWVsZFwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICA6aG9zdC1jb250ZXh0KC5oaWRkZW4pIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9ybS1sYWJlbCB7XHJcbiAgICAgICAgICBncmlkLWFyZWE6IGxhYmVsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3JtLWZpZWxkIHtcclxuICAgICAgICAgIGdyaWQtYXJlYTogZmllbGQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvcm0tZmVlZGJhY2sge1xyXG4gICAgICAgICAgZ3JpZC1hcmVhOiBmZWVkYmFjaztcclxuICAgICAgfVxyXG4gIGBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdDaGVja2VkLCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcbiAgQElucHV0KCkgbmFtZTogYW55ID0gJyc7XHJcblxyXG4gIEBJbnB1dCgpIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG4gIF9jb250cm9sOiBGb3JtQ29udHJvbDtcclxuXHJcbiAgZmllbGRUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgc2hvd19mZWVkYmFjazogQm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIHNob3dfbGFiZWw6IEJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBAQ29udGVudENoaWxkKEZpZWxkVGVtcGxhdGVEaXJlY3RpdmUpIHByaXZhdGUgX2ZpZWxkVGVtcGxhdGVEaXI7XHJcblxyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2Zvcm1TdnM6IEZvcm1TZXJ2aWNlLFxyXG4gICAgcHVibGljIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIF9lbFJlZjogRWxlbWVudFJlZixcclxuICAgIEBIb3N0KCkgcHJpdmF0ZSBfcGFyZW50OiBGb3JtQ29tcG9uZW50XHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fcGFyZW50LmZvcm1Hcm91cCkge1xyXG4gICAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMuX3BhcmVudC5mb3JtR3JvdXA7XHJcbiAgICAgIHRoaXMucGFyc2VDb250ZXh0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIHBhcnNlQ29udGV4dCA9ICgpID0+IHtcclxuXHJcbiAgICB0aGlzLl9jaGVja1RlbXBsYXRlKCk7XHJcblxyXG4gICAgdGhpcy5fY29udHJvbCA9IHRoaXMuZm9ybUdyb3VwLmdldCh0aGlzLm5hbWUpO1xyXG5cclxuXHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2lkJywgdGhpcy5uYW1lKTtcclxuXHJcbiAgICBjb25zdCBwcm9wcyA9ICg8Q29udHJvbENvbmZpZz50aGlzLl9jb250cm9sLmNvbmZpZ3VyYXRpb24pLnByb3BzO1xyXG4gICAgaWYgKF8uaGFzKHByb3BzLCBbJ2hpZGRlbiddKSkge1xyXG5cclxuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2hpZGRlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChfLmhhcyhwcm9wcywgWydoaWRlTGFiZWwnXSkpIHtcclxuICAgICAgdGhpcy5zaG93X2xhYmVsID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdoaWRlLWxhYmVsJyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChfLmhhcyhwcm9wcywgWydoaWRlRmVlZGJhY2snXSkpIHtcclxuICAgICAgdGhpcy5zaG93X2ZlZWRiYWNrID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdoaWRlLWZlZWRiYWNrJyk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9O1xyXG5cclxuXHJcbiAgcHJpdmF0ZSBfY2hlY2tUZW1wbGF0ZSA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB0ZW1wbGF0ZURhdGEgPSB0aGlzLl9maWVsZFRlbXBsYXRlRGlyID8gdGhpcy5fZmllbGRUZW1wbGF0ZURpciA6IF8uZmluZCh0aGlzLl9wYXJlbnQuX2ZpZWxkVGVtcGxhdGVEaXJMaXN0LnRvQXJyYXkoKSwgWyduYW1lJywgdGhpcy5uYW1lXSk7XHJcblxyXG4gICAgaWYgKHRlbXBsYXRlRGF0YSkge1xyXG5cclxuICAgICAgdGhpcy5maWVsZFRlbXBsYXRlID0gdGVtcGxhdGVEYXRhLl90cGxSZWY7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXX0=