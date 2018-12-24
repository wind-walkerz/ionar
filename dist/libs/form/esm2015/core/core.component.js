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
export class FormComponent {
    /**
     * @param {?} _formSvs
     * @param {?} cd
     */
    constructor(_formSvs, cd) {
        this._formSvs = _formSvs;
        this.cd = cd;
        this.submit = new EventEmitter();
        this.viewInitialized = false;
        this.parseContext = () => {
            this._formSvs.initialize(this.formGroup);
            this.controlRoster = _.keys(this.formGroup.controls);
            this.controls = _.values(this.formGroup.controls);
            if (this._subscription)
                this._subscription.unsubscribe();
            this._subscription = this.formGroup.ngSubmit.pipe(untilDestroyed(this), distinctUntilChanged()).subscribe((data) => {
                if (this.formGroup.valid || data.instant) {
                    this.submit.emit(this._formSvs.convertToMediaType(data.value, this.mediaType));
                }
            });
        };
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this.formGroup) {
            this.parseContext();
            this.viewInitialized = true;
            this.cd.detectChanges();
            if (!this.default_template) {
                this.default_template = this._contentVcRef.nativeElement.parentElement.children.length === 0;
            }
            this.cd.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
FormComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-form',
                template: `
      <ng-container>
          <ng-template #contentVc>
              <ng-content></ng-content>
          </ng-template>

          <ng-container *ngIf="viewInitialized">

              <ng-container *ngIf="!default_template">
                  <ng-container [ngTemplateOutlet]="contentVc"></ng-container>
              </ng-container>

              <ng-container *ngIf="default_template">
                  <ng-container *ngFor="let name of controlRoster">
                      <form-control
                              [name]="name"
                              [formGroup]="formGroup"
                      >
                      </form-control>
                  </ng-container>
              </ng-container>

          </ng-container>

      </ng-container>



  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [FormService],
                styles: [`

  `]
            }] }
];
/** @nocollapse */
FormComponent.ctorParameters = () => [
    { type: FormService },
    { type: ChangeDetectorRef }
];
FormComponent.propDecorators = {
    formGroup: [{ type: Input }],
    mediaType: [{ type: Input }],
    submit: [{ type: Output }],
    _contentVcRef: [{ type: ViewChild, args: ['contentVc', { read: ElementRef },] }],
    _fieldTemplateDirList: [{ type: ContentChildren, args: [FieldTemplateDirective,] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvY29yZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFLTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQUUsVUFBVSxFQUMzQixZQUFZLEVBRVosS0FBSyxFQUlMLE1BQU0sRUFFUyxTQUFTLEVBQ3pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHL0MsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQXlDL0UsTUFBTSxPQUFRLGFBQWE7Ozs7O0lBcUJ6QixZQUFzQixRQUFxQixFQUFZLEVBQXFCO1FBQXRELGFBQVEsR0FBUixRQUFRLENBQWE7UUFBWSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQWhCbEUsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFZdEMsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUF5QmpDLGlCQUFZLEdBQUcsR0FBRyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVyRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVsRCxJQUFJLElBQUksQ0FBQyxhQUFhO2dCQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFekQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFzQyxFQUFFLEVBQUU7Z0JBRW5KLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFFeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2lCQUNoRjtZQUdILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO0lBckNGLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFFaEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBRWxCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM1QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7YUFDOUY7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7SUFDWCxDQUFDOzs7WUE3RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0QlQ7Z0JBSUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt5QkFKZjs7R0FFUjthQUdGOzs7O1lBaERRLFdBQVc7WUFibEIsaUJBQWlCOzs7d0JBaUVoQixLQUFLO3dCQUVMLEtBQUs7cUJBQ0wsTUFBTTs0QkFFTixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtvQ0FFM0MsZUFBZSxTQUFDLHNCQUFzQjs7OztJQVB2QyxrQ0FBOEI7O0lBRTlCLGtDQUEyQjs7SUFDM0IsK0JBQXNDOzs7OztJQUV0QyxzQ0FBc0U7O0lBRXRFLDhDQUErRDs7SUFFL0Qsc0NBQXdCOztJQUV4QixpQ0FBd0I7O0lBRXhCLHlDQUEwQjs7SUFFMUIsd0NBQWlDOzs7OztJQUVqQyxzQ0FBc0M7O0lBdUJ0QyxxQ0FpQkU7Ozs7O0lBdENVLGlDQUErQjs7Ozs7SUFBRSwyQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBBZnRlclZpZXdDaGVja2VkLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbiwgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0YWJsZSxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL2Zvcm0uc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICcuL21vZGVscy9Gb3JtR3JvdXAnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJy4vbW9kZWxzL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVudGlsRGVzdHJveWVkIH0gZnJvbSAnQGlvbmFyL3V0aWxpdHknO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEZpZWxkVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZmllbGQtdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lvLWZvcm0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxuZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8bmctdGVtcGxhdGUgI2NvbnRlbnRWYz5cclxuICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ2aWV3SW5pdGlhbGl6ZWRcIj5cclxuXHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFkZWZhdWx0X3RlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFZjXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkZWZhdWx0X3RlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG5hbWUgb2YgY29udHJvbFJvc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGZvcm0tY29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmFtZV09XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9mb3JtLWNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG5cclxuXHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcblxyXG4gIGBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW0Zvcm1TZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0ICBjbGFzcyBGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCwgT25EZXN0cm95IHtcclxuXHJcbiAgQElucHV0KCkgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XHJcblxyXG4gIEBJbnB1dCgpIG1lZGlhVHlwZTogU3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBzdWJtaXQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnRWYycsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBwcm90ZWN0ZWQgX2NvbnRlbnRWY1JlZjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihGaWVsZFRlbXBsYXRlRGlyZWN0aXZlKSBfZmllbGRUZW1wbGF0ZURpckxpc3Q7XHJcblxyXG4gIGNvbnRyb2xSb3N0ZXI6IHN0cmluZ1tdO1xyXG5cclxuICBjb250cm9sczogRm9ybUNvbnRyb2xbXTtcclxuXHJcbiAgZGVmYXVsdF90ZW1wbGF0ZTogQm9vbGVhbjtcclxuXHJcbiAgdmlld0luaXRpYWxpemVkOiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHByb3RlY3RlZCBfc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfZm9ybVN2czogRm9ybVNlcnZpY2UsIHByb3RlY3RlZCBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAodGhpcy5mb3JtR3JvdXApIHtcclxuXHJcbiAgICAgIHRoaXMucGFyc2VDb250ZXh0KCk7XHJcbiAgICAgIHRoaXMudmlld0luaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIGlmICghdGhpcy5kZWZhdWx0X3RlbXBsYXRlKSB7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0X3RlbXBsYXRlID0gdGhpcy5fY29udGVudFZjUmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPT09IDA7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG5cclxuICBwYXJzZUNvbnRleHQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9mb3JtU3ZzLmluaXRpYWxpemUodGhpcy5mb3JtR3JvdXApO1xyXG4gICAgdGhpcy5jb250cm9sUm9zdGVyID0gXy5rZXlzKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzKTtcclxuXHJcbiAgICB0aGlzLmNvbnRyb2xzID0gXy52YWx1ZXModGhpcy5mb3JtR3JvdXAuY29udHJvbHMpO1xyXG5cclxuICAgIGlmICh0aGlzLl9zdWJzY3JpcHRpb24pIHRoaXMuX3N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG5cclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuZm9ybUdyb3VwLm5nU3VibWl0LnBpcGUodW50aWxEZXN0cm95ZWQodGhpcyksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpLnN1YnNjcmliZSgoZGF0YTogeyB2YWx1ZTogYW55LCBpbnN0YW50OiBib29sZWFuIH0pID0+IHtcclxuXHJcbiAgICAgIGlmICh0aGlzLmZvcm1Hcm91cC52YWxpZCB8fCBkYXRhLmluc3RhbnQpIHtcclxuXHJcbiAgICAgICAgdGhpcy5zdWJtaXQuZW1pdCh0aGlzLl9mb3JtU3ZzLmNvbnZlcnRUb01lZGlhVHlwZShkYXRhLnZhbHVlLCB0aGlzLm1lZGlhVHlwZSkpO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG59XHJcbiJdfQ==