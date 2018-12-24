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
export class ControlComponent {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} _formSvs
     * @param {?} cd
     * @param {?} _renderer
     * @param {?} _elRef
     * @param {?} _parent
     */
    constructor(_formSvs, cd, _renderer, _elRef, _parent) {
        this._formSvs = _formSvs;
        this.cd = cd;
        this._renderer = _renderer;
        this._elRef = _elRef;
        this._parent = _parent;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.name = '';
        this.show_feedback = true;
        this.show_label = true;
        this.parseContext = () => {
            this._checkTemplate();
            this._control = this.formGroup.get(this.name);
            this._renderer.setAttribute(this._elRef.nativeElement, 'id', this.name);
            /** @type {?} */
            const props = ((/** @type {?} */ (this._control.configuration))).props;
            if (_.has(props, ['hidden'])) {
                this._renderer.addClass(this._elRef.nativeElement, 'hidden');
            }
            if (_.has(props, ['hideLabel'])) {
                this.show_label = false;
                this._renderer.addClass(this._elRef.nativeElement, 'hide-label');
            }
            if (_.has(props, ['hideFeedback'])) {
                this.show_feedback = false;
                this._renderer.addClass(this._elRef.nativeElement, 'hide-feedback');
            }
            this.cd.detectChanges();
        };
        this._checkTemplate = () => {
            /** @type {?} */
            const templateData = this._fieldTemplateDir ? this._fieldTemplateDir : _.find(this._parent._fieldTemplateDirList.toArray(), ['name', this.name]);
            if (templateData) {
                this.fieldTemplate = templateData._tplRef;
            }
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this._parent.formGroup) {
            this.formGroup = this._parent.formGroup;
            this.parseContext();
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
ControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'form-control',
                template: `

      <ng-container *ngIf="formGroup">
          <form-label *ngIf="show_label"></form-label>

          <form-field></form-field>

          <form-feedback *ngIf="show_feedback"></form-feedback>
      </ng-container>

  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      :host {
          display: grid;
          grid-template-areas: "label   field" ". feedback";
          grid-template-columns: 3fr 7fr;
          grid-template-rows: 1fr auto;
          margin-bottom: 1rem;
          height: auto;
          visibility: visible;
          z-index: 50;
      }

      :host-context(.hide-label) {
          grid-template-areas: "field" "feedback";
          grid-template-columns: 1fr;
      }

      :host-context(.hide-feedback) {
          grid-template-areas: "label   field";
          grid-template-columns: 3fr 7fr;
      }

      :host-context(.hide-label.hide-feedback) {
          grid-template-areas: "field";
      }

      :host-context(.hidden) {
          display: none !important;
      }

      form-label {
          grid-area: label;
      }

      form-field {
          grid-area: field;
      }

      form-feedback {
          grid-area: feedback;
      }
  `]
            }] }
];
/** @nocollapse */
ControlComponent.ctorParameters = () => [
    { type: FormService },
    { type: ChangeDetectorRef },
    { type: Renderer2 },
    { type: ElementRef },
    { type: FormComponent, decorators: [{ type: Host }] }
];
ControlComponent.propDecorators = {
    name: [{ type: Input }],
    formGroup: [{ type: Input }],
    _fieldTemplateDir: [{ type: ContentChild, args: [FieldTemplateDirective,] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvY29tcG9uZW50cy9jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsSUFBSSxFQUNKLEtBQUssRUFJTCxTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWhELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV4RCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRWxELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBNERoRixNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7Ozs7SUFpQjNCLFlBQ1UsUUFBcUIsRUFDdEIsRUFBcUIsRUFDcEIsU0FBb0IsRUFDcEIsTUFBa0IsRUFDVixPQUFzQjtRQUo5QixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBQ3RCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBQ3BCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUNWLFlBQU8sR0FBUCxPQUFPLENBQWU7O1FBcEIvQixTQUFJLEdBQVEsRUFBRSxDQUFDO1FBT3hCLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFvQzNCLGlCQUFZLEdBQUcsR0FBRyxFQUFFO1lBRWxCLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUV0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElB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Ozs7O0lBQzVCLHFDQUE0Qjs7Ozs7SUFDNUIsa0NBQTBCOzs7OztJQUMxQixtQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0NoZWNrZWQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVGVtcGxhdGVSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnLi4vbW9kZWxzL0Zvcm1Hcm91cCc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnLi4vbW9kZWxzL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tICcuLi9wcm92aWRlcnMvZm9ybS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tICcuLi9jb3JlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRyb2xDb25maWcgfSBmcm9tICcuLi9tb2RlbHMvQ29udHJvbENvbmZpZyc7XHJcbmltcG9ydCB7IEZpZWxkVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2ZpZWxkLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Zvcm0tY29udHJvbCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuXHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmb3JtR3JvdXBcIj5cclxuICAgICAgICAgIDxmb3JtLWxhYmVsICpuZ0lmPVwic2hvd19sYWJlbFwiPjwvZm9ybS1sYWJlbD5cclxuXHJcbiAgICAgICAgICA8Zm9ybS1maWVsZD48L2Zvcm0tZmllbGQ+XHJcblxyXG4gICAgICAgICAgPGZvcm0tZmVlZGJhY2sgKm5nSWY9XCJzaG93X2ZlZWRiYWNrXCI+PC9mb3JtLWZlZWRiYWNrPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgYCxcclxuXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgICA6aG9zdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJsYWJlbCAgIGZpZWxkXCIgXCIuIGZlZWRiYWNrXCI7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA3ZnI7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICB6LWluZGV4OiA1MDtcclxuICAgICAgfVxyXG5cclxuICAgICAgOmhvc3QtY29udGV4dCguaGlkZS1sYWJlbCkge1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJmaWVsZFwiIFwiZmVlZGJhY2tcIjtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICA6aG9zdC1jb250ZXh0KC5oaWRlLWZlZWRiYWNrKSB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImxhYmVsICAgZmllbGRcIjtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDdmcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgOmhvc3QtY29udGV4dCguaGlkZS1sYWJlbC5oaWRlLWZlZWRiYWNrKSB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImZpZWxkXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDpob3N0LWNvbnRleHQoLmhpZGRlbikge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3JtLWxhYmVsIHtcclxuICAgICAgICAgIGdyaWQtYXJlYTogbGFiZWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvcm0tZmllbGQge1xyXG4gICAgICAgICAgZ3JpZC1hcmVhOiBmaWVsZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9ybS1mZWVkYmFjayB7XHJcbiAgICAgICAgICBncmlkLWFyZWE6IGZlZWRiYWNrO1xyXG4gICAgICB9XHJcbiAgYF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIEFmdGVyVmlld0NoZWNrZWQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuICBASW5wdXQoKSBuYW1lOiBhbnkgPSAnJztcclxuXHJcbiAgQElucHV0KCkgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcbiAgX2NvbnRyb2w6IEZvcm1Db250cm9sO1xyXG5cclxuICBmaWVsZFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBzaG93X2ZlZWRiYWNrOiBCb29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgc2hvd19sYWJlbDogQm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoRmllbGRUZW1wbGF0ZURpcmVjdGl2ZSkgcHJpdmF0ZSBfZmllbGRUZW1wbGF0ZURpcjtcclxuXHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfZm9ybVN2czogRm9ybVNlcnZpY2UsXHJcbiAgICBwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLFxyXG4gICAgQEhvc3QoKSBwcml2YXRlIF9wYXJlbnQ6IEZvcm1Db21wb25lbnRcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9wYXJlbnQuZm9ybUdyb3VwKSB7XHJcbiAgICAgIHRoaXMuZm9ybUdyb3VwID0gdGhpcy5fcGFyZW50LmZvcm1Hcm91cDtcclxuICAgICAgdGhpcy5wYXJzZUNvbnRleHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgcGFyc2VDb250ZXh0ID0gKCkgPT4ge1xyXG5cclxuICAgIHRoaXMuX2NoZWNrVGVtcGxhdGUoKTtcclxuXHJcbiAgICB0aGlzLl9jb250cm9sID0gdGhpcy5mb3JtR3JvdXAuZ2V0KHRoaXMubmFtZSk7XHJcblxyXG5cclxuICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnaWQnLCB0aGlzLm5hbWUpO1xyXG5cclxuICAgIGNvbnN0IHByb3BzID0gKDxDb250cm9sQ29uZmlnPnRoaXMuX2NvbnRyb2wuY29uZmlndXJhdGlvbikucHJvcHM7XHJcbiAgICBpZiAoXy5oYXMocHJvcHMsIFsnaGlkZGVuJ10pKSB7XHJcblxyXG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnaGlkZGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKF8uaGFzKHByb3BzLCBbJ2hpZGVMYWJlbCddKSkge1xyXG4gICAgICB0aGlzLnNob3dfbGFiZWwgPSBmYWxzZTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2hpZGUtbGFiZWwnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKF8uaGFzKHByb3BzLCBbJ2hpZGVGZWVkYmFjayddKSkge1xyXG4gICAgICB0aGlzLnNob3dfZmVlZGJhY2sgPSBmYWxzZTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2hpZGUtZmVlZGJhY2snKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH07XHJcblxyXG5cclxuICBwcml2YXRlIF9jaGVja1RlbXBsYXRlID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHRlbXBsYXRlRGF0YSA9IHRoaXMuX2ZpZWxkVGVtcGxhdGVEaXIgPyB0aGlzLl9maWVsZFRlbXBsYXRlRGlyIDogXy5maW5kKHRoaXMuX3BhcmVudC5fZmllbGRUZW1wbGF0ZURpckxpc3QudG9BcnJheSgpLCBbJ25hbWUnLCB0aGlzLm5hbWVdKTtcclxuXHJcbiAgICBpZiAodGVtcGxhdGVEYXRhKSB7XHJcblxyXG4gICAgICB0aGlzLmZpZWxkVGVtcGxhdGUgPSB0ZW1wbGF0ZURhdGEuX3RwbFJlZjtcclxuICAgIH1cclxuICB9O1xyXG59XHJcbiJdfQ==