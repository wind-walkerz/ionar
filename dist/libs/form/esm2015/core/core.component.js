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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvY29yZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFLTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQUUsVUFBVSxFQUMzQixZQUFZLEVBRVosS0FBSyxFQUlMLE1BQU0sRUFFUyxTQUFTLEVBQ3pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHL0MsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQXlDL0UsTUFBTSxPQUFPLGFBQWE7Ozs7O0lBcUJ4QixZQUFzQixRQUFxQixFQUFZLEVBQXFCO1FBQXRELGFBQVEsR0FBUixRQUFRLENBQWE7UUFBWSxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQWhCbEUsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFZdEMsb0JBQWUsR0FBWSxLQUFLLENBQUM7UUF5QmpDLGlCQUFZLEdBQUcsR0FBRyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVyRCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUVsRCxJQUFJLElBQUksQ0FBQyxhQUFhO2dCQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7WUFFekQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLG9CQUFvQixFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFzQyxFQUFFLEVBQUU7Z0JBRW5KLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFFeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2lCQUNoRjtZQUdILENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO0lBckNGLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFFaEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBRWxCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztZQUM1QixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUM7YUFDOUY7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7SUFDWCxDQUFDOzs7WUE3RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E0QlQ7Z0JBSUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRSxDQUFDLFdBQVcsQ0FBQzt5QkFKZjs7R0FFUjthQUdGOzs7O1lBaERRLFdBQVc7WUFibEIsaUJBQWlCOzs7d0JBaUVoQixLQUFLO3dCQUVMLEtBQUs7cUJBQ0wsTUFBTTs0QkFFTixTQUFTLFNBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtvQ0FFM0MsZUFBZSxTQUFDLHNCQUFzQjs7OztJQVB2QyxrQ0FBOEI7O0lBRTlCLGtDQUEyQjs7SUFDM0IsK0JBQXNDOzs7OztJQUV0QyxzQ0FBc0U7O0lBRXRFLDhDQUErRDs7SUFFL0Qsc0NBQXdCOztJQUV4QixpQ0FBd0I7O0lBRXhCLHlDQUEwQjs7SUFFMUIsd0NBQWlDOzs7OztJQUVqQyxzQ0FBc0M7O0lBdUJ0QyxxQ0FpQkU7Ozs7O0lBdENVLGlDQUErQjs7Ozs7SUFBRSwyQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXHJcbiAgQWZ0ZXJDb250ZW50SW5pdCxcclxuICBBZnRlclZpZXdDaGVja2VkLFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbiwgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5qZWN0YWJsZSxcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFNpbXBsZUNoYW5nZXMsIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gJy4vcHJvdmlkZXJzL2Zvcm0uc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICcuL21vZGVscy9Gb3JtR3JvdXAnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJy4vbW9kZWxzL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IHsgQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb250cm9sLmNvbXBvbmVudCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IHVudGlsRGVzdHJveWVkIH0gZnJvbSAnQGlvbmFyL3V0aWxpdHknO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEZpZWxkVGVtcGxhdGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZmllbGQtdGVtcGxhdGUuZGlyZWN0aXZlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lvLWZvcm0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxuZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8bmctdGVtcGxhdGUgI2NvbnRlbnRWYz5cclxuICAgICAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ2aWV3SW5pdGlhbGl6ZWRcIj5cclxuXHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFkZWZhdWx0X3RlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY29udGVudFZjXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkZWZhdWx0X3RlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG5hbWUgb2YgY29udHJvbFJvc3RlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGZvcm0tY29udHJvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmFtZV09XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9mb3JtLWNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG5cclxuXHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcblxyXG4gIGBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByb3ZpZGVyczogW0Zvcm1TZXJ2aWNlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkLCBPbkRlc3Ryb3kge1xyXG5cclxuICBASW5wdXQoKSBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcbiAgQElucHV0KCkgbWVkaWFUeXBlOiBTdHJpbmc7XHJcbiAgQE91dHB1dCgpIHN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY29udGVudFZjJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIHByb3RlY3RlZCBfY29udGVudFZjUmVmO1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKEZpZWxkVGVtcGxhdGVEaXJlY3RpdmUpIF9maWVsZFRlbXBsYXRlRGlyTGlzdDtcclxuXHJcbiAgY29udHJvbFJvc3Rlcjogc3RyaW5nW107XHJcblxyXG4gIGNvbnRyb2xzOiBGb3JtQ29udHJvbFtdO1xyXG5cclxuICBkZWZhdWx0X3RlbXBsYXRlOiBCb29sZWFuO1xyXG5cclxuICB2aWV3SW5pdGlhbGl6ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJvdGVjdGVkIF9zdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIF9mb3JtU3ZzOiBGb3JtU2VydmljZSwgcHJvdGVjdGVkIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xyXG5cclxuICAgIGlmICh0aGlzLmZvcm1Hcm91cCkge1xyXG5cclxuICAgICAgdGhpcy5wYXJzZUNvbnRleHQoKTtcclxuICAgICAgdGhpcy52aWV3SW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgaWYgKCF0aGlzLmRlZmF1bHRfdGVtcGxhdGUpIHtcclxuICAgICAgICB0aGlzLmRlZmF1bHRfdGVtcGxhdGUgPSB0aGlzLl9jb250ZW50VmNSZWYubmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA9PT0gMDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcblxyXG4gIHBhcnNlQ29udGV4dCA9ICgpID0+IHtcclxuICAgIHRoaXMuX2Zvcm1TdnMuaW5pdGlhbGl6ZSh0aGlzLmZvcm1Hcm91cCk7XHJcbiAgICB0aGlzLmNvbnRyb2xSb3N0ZXIgPSBfLmtleXModGhpcy5mb3JtR3JvdXAuY29udHJvbHMpO1xyXG5cclxuICAgIHRoaXMuY29udHJvbHMgPSBfLnZhbHVlcyh0aGlzLmZvcm1Hcm91cC5jb250cm9scyk7XHJcblxyXG4gICAgaWYgKHRoaXMuX3N1YnNjcmlwdGlvbikgdGhpcy5fc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcblxyXG4gICAgdGhpcy5fc3Vic2NyaXB0aW9uID0gdGhpcy5mb3JtR3JvdXAubmdTdWJtaXQucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSwgZGlzdGluY3RVbnRpbENoYW5nZWQoKSkuc3Vic2NyaWJlKChkYXRhOiB7IHZhbHVlOiBhbnksIGluc3RhbnQ6IGJvb2xlYW4gfSkgPT4ge1xyXG5cclxuICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLnZhbGlkIHx8IGRhdGEuaW5zdGFudCkge1xyXG5cclxuICAgICAgICB0aGlzLnN1Ym1pdC5lbWl0KHRoaXMuX2Zvcm1TdnMuY29udmVydFRvTWVkaWFUeXBlKGRhdGEudmFsdWUsIHRoaXMubWVkaWFUeXBlKSk7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbn1cclxuIl19