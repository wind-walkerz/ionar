/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, forwardRef, Input, Output, QueryList, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormService } from './providers/form.service';
import { FormGroup } from './models/FormGroup';
import { untilDestroyed } from '@ionar/utility';
import { distinctUntilChanged } from 'rxjs/operators';
import { ControlContainer } from './interfaces/ControlContainer';
import { ReactiveErrors } from './utils/reactive_errors';
import { isFormArray, isFormControl, isFormGroup } from './utils/helpers';
import { IonarTemplateDirective, isEmptyTemplate } from '@ionar/ui';
/** @type {?} */
export const formProvider = {
    provide: ControlContainer,
    useExisting: forwardRef(() => FormComponent)
};
export class FormComponent extends ControlContainer {
    /**
     * @param {?} _formSvs
     * @param {?} _elRef
     * @param {?} cd
     */
    constructor(_formSvs, _elRef, cd) {
        super(cd);
        this._formSvs = _formSvs;
        this._elRef = _elRef;
        /**
         * \@description
         * Tracks the `FormGroup` bound to this components.
         */
        this.form = null;
        /**
         * \@description
         * Emits an event when the form submission has been triggered.
         */
        this.submit = new EventEmitter();
        this.isFormControl = isFormControl;
        this.isFormGroup = isFormGroup;
        this.isFormArray = isFormArray;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this._checkFormPresent();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        this._checkFormPresent();
        if (!changes.form.previousValue && changes.form.currentValue) {
            this.form.ngSubmit
                .pipe(untilDestroyed(this), distinctUntilChanged())
                .subscribe((data) => {
                if (this.form.valid || data.instant) {
                    this.submit.emit(this._formSvs.convertToMediaType(data.value, this.mediaType));
                }
            });
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.default_template = isEmptyTemplate(this._elRef);
        this.cd.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    /**
     * \@description
     * Returns the `FormGroup` bound to whole module.
     * @return {?}
     */
    get root() {
        return this.form;
    }
    /**
     * \@description
     * Returns an array representing the path to this group. Because this components
     * always lives at the top level of a form, it always an empty array.
     * @return {?}
     */
    get path() {
        return [];
    }
    /**
     * @private
     * @return {?}
     */
    _checkFormPresent() {
        if (!this.form) {
            ReactiveErrors.missingFormException();
        }
    }
}
FormComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-form',
                template: `
      <ng-container>

          <ng-container *ngIf="!default_template">
              <ng-content></ng-content>
          </ng-container>


          <ng-container *ngIf="default_template">
              <ng-container
                      *ngFor="let item of form.controls | keyvalue"
                      [ngTemplateOutlet]="controlTemplate"
                      [ngTemplateOutletContext]="{$implicit: item, parent: this}"
              ></ng-container>
          </ng-container>

          <ng-template #controlTemplate let-data let-parent="parent">
              <ng-container *ngIf="isFormControl(data.value)">
                  <form-control [parent]="parent" [name]="data.key"></form-control>
              </ng-container>

              <ng-container *ngIf="isFormArray(data.value)">
                  <form-array
                          [name]="data.key"
                          [parent]="parent"
                  >

                  </form-array>
              </ng-container>

              <ng-container *ngIf="isFormGroup(data.value)">
                  <form-group
                          [name]="data.key"
                          [parent]="parent"
                  >
                  </form-group>
              </ng-container>
          </ng-template>

      </ng-container>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [FormService, formProvider],
                styles: [`

  `]
            }] }
];
/** @nocollapse */
FormComponent.ctorParameters = () => [
    { type: FormService },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
FormComponent.propDecorators = {
    form: [{ type: Input, args: ['formGroup',] }],
    mediaType: [{ type: Input }],
    submit: [{ type: Output }],
    _contentVcRef: [{ type: ViewChild, args: ['contentVc', { read: ViewContainerRef },] }],
    controlTemplate: [{ type: ViewChild, args: ['controlTemplate',] }],
    ioTemplateDirList: [{ type: ContentChildren, args: [IonarTemplateDirective,] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvY29yZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxlQUFlLEVBQ2YsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBQ00sV0FBVyxFQUMxQixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUxRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDOztBQUdwRSxNQUFNLE9BQU8sWUFBWSxHQUFRO0lBQy9CLE9BQU8sRUFBRSxnQkFBZ0I7SUFDekIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7Q0FDN0M7QUFvREQsTUFBTSxPQUFPLGFBQWMsU0FBUSxnQkFBZ0I7Ozs7OztJQWdDakQsWUFDVSxRQUFxQixFQUNyQixNQUFrQixFQUMxQixFQUFxQjtRQUVyQixLQUFLLENBQUMsRUFBRSxDQUFDLENB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dGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgU2ltcGxlQ2hhbmdlcywgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tICcuL3Byb3ZpZGVycy9mb3JtLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICcuL21vZGVscy9Gb3JtR3JvdXAnO1xyXG5pbXBvcnQgeyB1bnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bpb25hci91dGlsaXR5JztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyBDb250cm9sQ29udGFpbmVyIH0gZnJvbSAnLi9pbnRlcmZhY2VzL0NvbnRyb2xDb250YWluZXInO1xyXG5pbXBvcnQgeyBSZWFjdGl2ZUVycm9ycyB9IGZyb20gJy4vdXRpbHMvcmVhY3RpdmVfZXJyb3JzJztcclxuXHJcbmltcG9ydCB7IGlzRm9ybUFycmF5LCBpc0Zvcm1Db250cm9sLCBpc0Zvcm1Hcm91cCB9IGZyb20gJy4vdXRpbHMvaGVscGVycyc7XHJcblxyXG5pbXBvcnQgeyBJb25hclRlbXBsYXRlRGlyZWN0aXZlLCBpc0VtcHR5VGVtcGxhdGUgfSBmcm9tICdAaW9uYXIvdWknO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtUHJvdmlkZXI6IGFueSA9IHtcclxuICBwcm92aWRlOiBDb250cm9sQ29udGFpbmVyLFxyXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEZvcm1Db21wb25lbnQpXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lvLWZvcm0nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxuZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFkZWZhdWx0X3RlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkZWZhdWx0X3RlbXBsYXRlXCI+XHJcbiAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZm9ybS5jb250cm9scyB8IGtleXZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRyb2xUZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyRpbXBsaWNpdDogaXRlbSwgcGFyZW50OiB0aGlzfVwiXHJcbiAgICAgICAgICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgPG5nLXRlbXBsYXRlICNjb250cm9sVGVtcGxhdGUgbGV0LWRhdGEgbGV0LXBhcmVudD1cInBhcmVudFwiPlxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0Zvcm1Db250cm9sKGRhdGEudmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxmb3JtLWNvbnRyb2wgW3BhcmVudF09XCJwYXJlbnRcIiBbbmFtZV09XCJkYXRhLmtleVwiPjwvZm9ybS1jb250cm9sPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNGb3JtQXJyYXkoZGF0YS52YWx1ZSlcIj5cclxuICAgICAgICAgICAgICAgICAgPGZvcm0tYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbbmFtZV09XCJkYXRhLmtleVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW3BhcmVudF09XCJwYXJlbnRcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8L2Zvcm0tYXJyYXk+XHJcbiAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0Zvcm1Hcm91cChkYXRhLnZhbHVlKVwiPlxyXG4gICAgICAgICAgICAgICAgICA8Zm9ybS1ncm91cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtuYW1lXT1cImRhdGEua2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBbcGFyZW50XT1cInBhcmVudFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPC9mb3JtLWdyb3VwPlxyXG4gICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG5cclxuICBgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcm92aWRlcnM6IFtGb3JtU2VydmljZSwgZm9ybVByb3ZpZGVyXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1Db21wb25lbnQgZXh0ZW5kcyBDb250cm9sQ29udGFpbmVyIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIFRyYWNrcyB0aGUgYEZvcm1Hcm91cGAgYm91bmQgdG8gdGhpcyBjb21wb25lbnRzLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgnZm9ybUdyb3VwJykgZm9ybTogRm9ybUdyb3VwID0gbnVsbDtcclxuXHJcbiAgQElucHV0KCkgbWVkaWFUeXBlOiBTdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIEVtaXRzIGFuIGV2ZW50IHdoZW4gdGhlIGZvcm0gc3VibWlzc2lvbiBoYXMgYmVlbiB0cmlnZ2VyZWQuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHN1Ym1pdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY29udGVudFZjJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIHByaXZhdGUgX2NvbnRlbnRWY1JlZjogVmlld0NvbnRhaW5lclJlZjtcclxuXHJcbiAgQFZpZXdDaGlsZCgnY29udHJvbFRlbXBsYXRlJykgY29udHJvbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKElvbmFyVGVtcGxhdGVEaXJlY3RpdmUpIGlvVGVtcGxhdGVEaXJMaXN0OiBRdWVyeUxpc3Q8SW9uYXJUZW1wbGF0ZURpcmVjdGl2ZT47XHJcblxyXG4gIC8vIEBDb250ZW50Q2hpbGRyZW4oQ29udHJvbENvbnRhaW5lcikgcHJpdmF0ZSBfY29udHJvbENvbnRhaW5lckxpc3Q6IFF1ZXJ5TGlzdDxDb250cm9sQ29udGFpbmVyPjtcclxuICAvL1xyXG4gIC8vIEBDb250ZW50Q2hpbGRyZW4oSW9Db250cm9sKSBwcml2YXRlIF9pb0NvbnRyb2xMaXN0OiBRdWVyeUxpc3Q8SW9Db250cm9sPjtcclxuXHJcbiAgZGVmYXVsdF90ZW1wbGF0ZTogQm9vbGVhbjtcclxuXHJcbiAgaXNGb3JtQ29udHJvbCA9IGlzRm9ybUNvbnRyb2w7XHJcbiAgaXNGb3JtR3JvdXAgPSBpc0Zvcm1Hcm91cDtcclxuICBpc0Zvcm1BcnJheSA9IGlzRm9ybUFycmF5O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2Zvcm1TdnM6IEZvcm1TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHN1cGVyKGNkKTtcclxuICB9XHJcblxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcbiAgICB0aGlzLl9jaGVja0Zvcm1QcmVzZW50KCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcclxuICAgIHRoaXMuX2NoZWNrRm9ybVByZXNlbnQoKTtcclxuXHJcbiAgICBpZiAoIWNoYW5nZXMuZm9ybS5wcmV2aW91c1ZhbHVlICYmIGNoYW5nZXMuZm9ybS5jdXJyZW50VmFsdWUpIHtcclxuXHJcbiAgICAgIHRoaXMuZm9ybS5uZ1N1Ym1pdFxyXG4gICAgICAgIC5waXBlKHVudGlsRGVzdHJveWVkKHRoaXMpLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKGRhdGE6IHsgdmFsdWU6IGFueSwgaW5zdGFudDogYm9vbGVhbiB9KSA9PiB7XHJcblxyXG4gICAgICAgICAgaWYgKHRoaXMuZm9ybS52YWxpZCB8fCBkYXRhLmluc3RhbnQpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0LmVtaXQodGhpcy5fZm9ybVN2cy5jb252ZXJ0VG9NZWRpYVR5cGUoZGF0YS52YWx1ZSwgdGhpcy5tZWRpYVR5cGUpKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdBZnRlclZpZXdJbml0KCk7XHJcbiAgICB0aGlzLmRlZmF1bHRfdGVtcGxhdGUgPSBpc0VtcHR5VGVtcGxhdGUodGhpcy5fZWxSZWYpO1xyXG5cclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBSZXR1cm5zIHRoZSBgRm9ybUdyb3VwYCBib3VuZCB0byB3aG9sZSBtb2R1bGUuXHJcbiAgICovXHJcbiAgZ2V0IHJvb3QoKTogRm9ybUdyb3VwIHtcclxuICAgIHJldHVybiB0aGlzLmZvcm07XHJcbiAgfVxyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogUmV0dXJucyBhbiBhcnJheSByZXByZXNlbnRpbmcgdGhlIHBhdGggdG8gdGhpcyBncm91cC4gQmVjYXVzZSB0aGlzIGNvbXBvbmVudHNcclxuICAgKiBhbHdheXMgbGl2ZXMgYXQgdGhlIHRvcCBsZXZlbCBvZiBhIGZvcm0sIGl0IGFsd2F5cyBhbiBlbXB0eSBhcnJheS5cclxuICAgKi9cclxuICBnZXQgcGF0aCgpOiBzdHJpbmdbXSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jaGVja0Zvcm1QcmVzZW50KCkge1xyXG4gICAgaWYgKCF0aGlzLmZvcm0pIHtcclxuICAgICAgUmVhY3RpdmVFcnJvcnMubWlzc2luZ0Zvcm1FeGNlcHRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==