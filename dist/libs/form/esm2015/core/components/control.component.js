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
                this.field_template = templateData._tplRef;
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
          <form-label
                  [name]="name"
                  [formGroup]="formGroup"
                  *ngIf="show_label"
          ></form-label>

          <form-field
                  [name]="name"
                  [formGroup]="formGroup"
                  [template]="field_template"
          ></form-field>

          <form-feedback
                  [name]="name"
                  [formGroup]="formGroup"
                  *ngIf="show_feedback"
          ></form-feedback>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvY29tcG9uZW50cy9jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUFFLFlBQVksRUFDdkIsVUFBVSxFQUFFLElBQUksRUFFaEIsS0FBSyxFQUlMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXhELE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUF3RWhGLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7OztJQWlCM0IsWUFDVSxRQUFxQixFQUN0QixFQUFxQixFQUNwQixTQUFvQixFQUNwQixNQUFrQixFQUNWLE9BQXNCO1FBSjlCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFDdEIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQ1YsWUFBTyxHQUFQLE9BQU8sQ0FBZTs7UUFwQi9CLFNBQUksR0FBUSxFQUFFLENBQUM7UUFPeEIsa0JBQWEsR0FBWSxJQUFJLENBQUM7UUFFOUIsZUFBVSxHQUFZLElBQUksQ0FBQztRQW9DM0IsaUJBQVksR0FBRyxHQUFHLEVBQUU7WUFFbEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBRXRCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMs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OztJQUM3Qiw4QkFBNEI7Ozs7O0lBQzVCLHFDQUE0Qjs7Ozs7SUFDNUIsa0NBQTBCOzs7OztJQUMxQixtQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0NoZWNrZWQsXHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgQ29udGVudENoaWxkcmVuLFxyXG4gIEVsZW1lbnRSZWYsIEhvc3QsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyLCBUZW1wbGF0ZVJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICcuLi9tb2RlbHMvRm9ybUdyb3VwJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICcuLi9tb2RlbHMvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gJy4uL3Byb3ZpZGVycy9mb3JtLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udHJvbENvbmZpZyB9IGZyb20gJy4uL21vZGVscy9Db250cm9sQ29uZmlnJztcclxuaW1wb3J0IHsgRmllbGRUZW1wbGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvZmllbGQtdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm9ybS1jb250cm9sJyxcclxuICB0ZW1wbGF0ZTogYFxyXG5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZvcm1Hcm91cFwiPlxyXG4gICAgICAgICAgPGZvcm0tbGFiZWxcclxuICAgICAgICAgICAgICAgICAgW25hbWVdPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJzaG93X2xhYmVsXCJcclxuICAgICAgICAgID48L2Zvcm0tbGFiZWw+XHJcblxyXG4gICAgICAgICAgPGZvcm0tZmllbGRcclxuICAgICAgICAgICAgICAgICAgW25hbWVdPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cImZpZWxkX3RlbXBsYXRlXCJcclxuICAgICAgICAgID48L2Zvcm0tZmllbGQ+XHJcblxyXG4gICAgICAgICAgPGZvcm0tZmVlZGJhY2tcclxuICAgICAgICAgICAgICAgICAgW25hbWVdPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIFtmb3JtR3JvdXBdPVwiZm9ybUdyb3VwXCJcclxuICAgICAgICAgICAgICAgICAgKm5nSWY9XCJzaG93X2ZlZWRiYWNrXCJcclxuICAgICAgICAgID48L2Zvcm0tZmVlZGJhY2s+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICBgLFxyXG5cclxuICBzdHlsZXM6IFtgXHJcbiAgICAgIDpob3N0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImxhYmVsICAgZmllbGRcIiBcIi4gZmVlZGJhY2tcIjtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDdmcjtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICAgIHotaW5kZXg6IDUwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICA6aG9zdC1jb250ZXh0KC5oaWRlLWxhYmVsKSB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImZpZWxkXCIgXCJmZWVkYmFja1wiO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDpob3N0LWNvbnRleHQoLmhpZGUtZmVlZGJhY2spIHtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibGFiZWwgICBmaWVsZFwiO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgN2ZyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICA6aG9zdC1jb250ZXh0KC5oaWRlLWxhYmVsLmhpZGUtZmVlZGJhY2spIHtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiZmllbGRcIjtcclxuICAgICAgfVxyXG5cclxuICAgICAgOmhvc3QtY29udGV4dCguaGlkZGVuKSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvcm0tbGFiZWwge1xyXG4gICAgICAgICAgZ3JpZC1hcmVhOiBsYWJlbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9ybS1maWVsZCB7XHJcbiAgICAgICAgICBncmlkLWFyZWE6IGZpZWxkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3JtLWZlZWRiYWNrIHtcclxuICAgICAgICAgIGdyaWQtYXJlYTogZmVlZGJhY2s7XHJcbiAgICAgIH1cclxuICBgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG4gIEBJbnB1dCgpIG5hbWU6IGFueSA9ICcnO1xyXG5cclxuICBASW5wdXQoKSBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuICBfY29udHJvbDogRm9ybUNvbnRyb2w7XHJcblxyXG4gIGZpZWxkX3RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBzaG93X2ZlZWRiYWNrOiBCb29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgc2hvd19sYWJlbDogQm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoRmllbGRUZW1wbGF0ZURpcmVjdGl2ZSkgcHJpdmF0ZSBfZmllbGRUZW1wbGF0ZURpcjtcclxuXHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfZm9ybVN2czogRm9ybVNlcnZpY2UsXHJcbiAgICBwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLFxyXG4gICAgQEhvc3QoKSBwcml2YXRlIF9wYXJlbnQ6IEZvcm1Db21wb25lbnRcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9wYXJlbnQuZm9ybUdyb3VwKSB7XHJcbiAgICAgIHRoaXMuZm9ybUdyb3VwID0gdGhpcy5fcGFyZW50LmZvcm1Hcm91cDtcclxuICAgICAgdGhpcy5wYXJzZUNvbnRleHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgcGFyc2VDb250ZXh0ID0gKCkgPT4ge1xyXG5cclxuICAgIHRoaXMuX2NoZWNrVGVtcGxhdGUoKTtcclxuXHJcbiAgICB0aGlzLl9jb250cm9sID0gdGhpcy5mb3JtR3JvdXAuZ2V0KHRoaXMubmFtZSk7XHJcblxyXG5cclxuICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnaWQnLCB0aGlzLm5hbWUpO1xyXG5cclxuICAgIGNvbnN0IHByb3BzID0gKDxDb250cm9sQ29uZmlnPnRoaXMuX2NvbnRyb2wuY29uZmlndXJhdGlvbikucHJvcHM7XHJcbiAgICBpZiAoXy5oYXMocHJvcHMsIFsnaGlkZGVuJ10pKSB7XHJcblxyXG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCAnaGlkZGVuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKF8uaGFzKHByb3BzLCBbJ2hpZGVMYWJlbCddKSkge1xyXG4gICAgICB0aGlzLnNob3dfbGFiZWwgPSBmYWxzZTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2hpZGUtbGFiZWwnKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKF8uaGFzKHByb3BzLCBbJ2hpZGVGZWVkYmFjayddKSkge1xyXG4gICAgICB0aGlzLnNob3dfZmVlZGJhY2sgPSBmYWxzZTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudCwgJ2hpZGUtZmVlZGJhY2snKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH07XHJcblxyXG5cclxuICBwcml2YXRlIF9jaGVja1RlbXBsYXRlID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHRlbXBsYXRlRGF0YSA9IHRoaXMuX2ZpZWxkVGVtcGxhdGVEaXIgPyB0aGlzLl9maWVsZFRlbXBsYXRlRGlyIDogXy5maW5kKHRoaXMuX3BhcmVudC5fZmllbGRUZW1wbGF0ZURpckxpc3QudG9BcnJheSgpLCBbJ25hbWUnLCB0aGlzLm5hbWVdKTtcclxuXHJcbiAgICBpZiAodGVtcGxhdGVEYXRhKSB7XHJcblxyXG4gICAgICB0aGlzLmZpZWxkX3RlbXBsYXRlID0gdGVtcGxhdGVEYXRhLl90cGxSZWY7XHJcbiAgICB9XHJcbiAgfTtcclxufVxyXG4iXX0=