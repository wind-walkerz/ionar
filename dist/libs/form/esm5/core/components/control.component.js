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
                _this.field_template = templateData._tplRef;
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
                    template: "\n\n      <ng-container *ngIf=\"formGroup\">\n          <form-label\n                  [name]=\"name\"\n                  [formGroup]=\"formGroup\"\n                  *ngIf=\"show_label\"\n          ></form-label>\n\n          <form-field\n                  [name]=\"name\"\n                  [formGroup]=\"formGroup\"\n                  [template]=\"field_template\"\n          ></form-field>\n\n          <form-feedback\n                  [name]=\"name\"\n                  [formGroup]=\"formGroup\"\n                  *ngIf=\"show_feedback\"\n          ></form-feedback>\n      </ng-container>\n\n  ",
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
    ControlComponent.prototype.field_template;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvY29tcG9uZW50cy9jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUFFLFlBQVksRUFDdkIsVUFBVSxFQUFFLElBQUksRUFFaEIsS0FBSyxFQUlMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXhELE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFaEY7SUFzRkUsd0hBQXdIO0lBQ3hILDBCQUNVLFFBQXFCLEVBQ3RCLEVBQXFCLEVBQ3BCLFNBQW9CLEVBQ3BCLE1BQWtCLEVBQ1YsT0FBc0I7UUFMeEMsaUJBT0M7UUFOUyxhQUFRLEdBQVIsUUFBUSxDQUFhO1FBQ3RCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3BCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUNWLFlBQU8sR0FBUCxPQUFPLENBQWU7O1FBcEIvQixTQUFJLEdBQVEsRUFBRSxDQUFDO1FBT3hCLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFvQzNCLGlCQUFZLEdBQUc7WUFFYixLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7WUFFdEIsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsSUFB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QSxvQ0FBNkI7O0lBQzdCLDhCQUE0Qjs7Ozs7SUFDNUIscUNBQTRCOzs7OztJQUM1QixrQ0FBMEI7Ozs7O0lBQzFCLG1DQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCwgQ29udGVudENoaWxkLCBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZiwgSG9zdCxcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBSZW5kZXJlcjIsIFRlbXBsYXRlUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJy4uL21vZGVscy9Gb3JtR3JvdXAnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJy4uL21vZGVscy9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2Zvcm0uc2VydmljZSc7XHJcblxyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi4vY29yZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250cm9sQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWxzL0NvbnRyb2xDb25maWcnO1xyXG5pbXBvcnQgeyBGaWVsZFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9maWVsZC10ZW1wbGF0ZS5kaXJlY3RpdmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmb3JtLWNvbnRyb2wnLFxyXG4gIHRlbXBsYXRlOiBgXHJcblxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZm9ybUdyb3VwXCI+XHJcbiAgICAgICAgICA8Zm9ybS1sYWJlbFxyXG4gICAgICAgICAgICAgICAgICBbbmFtZV09XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cInNob3dfbGFiZWxcIlxyXG4gICAgICAgICAgPjwvZm9ybS1sYWJlbD5cclxuXHJcbiAgICAgICAgICA8Zm9ybS1maWVsZFxyXG4gICAgICAgICAgICAgICAgICBbbmFtZV09XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwiZmllbGRfdGVtcGxhdGVcIlxyXG4gICAgICAgICAgPjwvZm9ybS1maWVsZD5cclxuXHJcbiAgICAgICAgICA8Zm9ybS1mZWVkYmFja1xyXG4gICAgICAgICAgICAgICAgICBbbmFtZV09XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAqbmdJZj1cInNob3dfZmVlZGJhY2tcIlxyXG4gICAgICAgICAgPjwvZm9ybS1mZWVkYmFjaz5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIGAsXHJcblxyXG4gIHN0eWxlczogW2BcclxuICAgICAgOmhvc3Qge1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibGFiZWwgICBmaWVsZFwiIFwiLiBmZWVkYmFja1wiO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgN2ZyO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0bztcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgei1pbmRleDogNTA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDpob3N0LWNvbnRleHQoLmhpZGUtbGFiZWwpIHtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiZmllbGRcIiBcImZlZWRiYWNrXCI7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgOmhvc3QtY29udGV4dCguaGlkZS1mZWVkYmFjaykge1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJsYWJlbCAgIGZpZWxkXCI7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA3ZnI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDpob3N0LWNvbnRleHQoLmhpZGUtbGFiZWwuaGlkZS1mZWVkYmFjaykge1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJmaWVsZFwiO1xyXG4gICAgICB9XHJcblxyXG4gICAgICA6aG9zdC1jb250ZXh0KC5oaWRkZW4pIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9ybS1sYWJlbCB7XHJcbiAgICAgICAgICBncmlkLWFyZWE6IGxhYmVsO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3JtLWZpZWxkIHtcclxuICAgICAgICAgIGdyaWQtYXJlYTogZmllbGQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvcm0tZmVlZGJhY2sge1xyXG4gICAgICAgICAgZ3JpZC1hcmVhOiBmZWVkYmFjaztcclxuICAgICAgfVxyXG4gIGBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdDaGVja2VkLCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcbiAgQElucHV0KCkgbmFtZTogYW55ID0gJyc7XHJcblxyXG4gIEBJbnB1dCgpIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG4gIF9jb250cm9sOiBGb3JtQ29udHJvbDtcclxuXHJcbiAgZmllbGRfdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIHNob3dfZmVlZGJhY2s6IEJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBzaG93X2xhYmVsOiBCb29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChGaWVsZFRlbXBsYXRlRGlyZWN0aXZlKSBwcml2YXRlIF9maWVsZFRlbXBsYXRlRGlyO1xyXG5cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9mb3JtU3ZzOiBGb3JtU2VydmljZSxcclxuICAgIHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBASG9zdCgpIHByaXZhdGUgX3BhcmVudDogRm9ybUNvbXBvbmVudFxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX3BhcmVudC5mb3JtR3JvdXApIHtcclxuICAgICAgdGhpcy5mb3JtR3JvdXAgPSB0aGlzLl9wYXJlbnQuZm9ybUdyb3VwO1xyXG4gICAgICB0aGlzLnBhcnNlQ29udGV4dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBwYXJzZUNvbnRleHQgPSAoKSA9PiB7XHJcblxyXG4gICAgdGhpcy5fY2hlY2tUZW1wbGF0ZSgpO1xyXG5cclxuICAgIHRoaXMuX2NvbnRyb2wgPSB0aGlzLmZvcm1Hcm91cC5nZXQodGhpcy5uYW1lKTtcclxuXHJcblxyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdpZCcsIHRoaXMubmFtZSk7XHJcblxyXG4gICAgY29uc3QgcHJvcHMgPSAoPENvbnRyb2xDb25maWc+dGhpcy5fY29udHJvbC5jb25maWd1cmF0aW9uKS5wcm9wcztcclxuICAgIGlmIChfLmhhcyhwcm9wcywgWydoaWRkZW4nXSkpIHtcclxuXHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKHRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQsICdoaWRkZW4nKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXy5oYXMocHJvcHMsIFsnaGlkZUxhYmVsJ10pKSB7XHJcbiAgICAgIHRoaXMuc2hvd19sYWJlbCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnaGlkZS1sYWJlbCcpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAoXy5oYXMocHJvcHMsIFsnaGlkZUZlZWRiYWNrJ10pKSB7XHJcbiAgICAgIHRoaXMuc2hvd19mZWVkYmFjayA9IGZhbHNlO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnaGlkZS1mZWVkYmFjaycpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfTtcclxuXHJcblxyXG4gIHByaXZhdGUgX2NoZWNrVGVtcGxhdGUgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgdGVtcGxhdGVEYXRhID0gdGhpcy5fZmllbGRUZW1wbGF0ZURpciA/IHRoaXMuX2ZpZWxkVGVtcGxhdGVEaXIgOiBfLmZpbmQodGhpcy5fcGFyZW50Ll9maWVsZFRlbXBsYXRlRGlyTGlzdC50b0FycmF5KCksIFsnbmFtZScsIHRoaXMubmFtZV0pO1xyXG5cclxuICAgIGlmICh0ZW1wbGF0ZURhdGEpIHtcclxuXHJcbiAgICAgIHRoaXMuZmllbGRfdGVtcGxhdGUgPSB0ZW1wbGF0ZURhdGEuX3RwbFJlZjtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiJdfQ==