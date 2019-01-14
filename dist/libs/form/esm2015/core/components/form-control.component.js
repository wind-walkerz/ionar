/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, forwardRef, Host, HostBinding, Optional, SkipSelf } from '@angular/core';
import _ from 'lodash';
import { IoControl } from '../interfaces/IoControl';
import { ControlContainer } from '../interfaces/ControlContainer';
import { IonarTemplateDirective } from '@ionar/ui';
/** @type {?} */
export const controlNameBinding = {
    provide: IoControl,
    useExisting: forwardRef(() => FormControlComponent)
};
export class FormControlComponent extends IoControl {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} parent
     * @param {?} cd
     */
    constructor(parent, cd) {
        super(cd);
        this.parent = parent;
    }
    ///-----------------------------------------------  Variables   -----------------------------------------------///
    /**
     * @return {?}
     */
    get controlTemplateDir() {
        /** @type {?} */
        const parent = (/** @type {?} */ (this.parent));
        /** @type {?} */
        const state = (/** @type {?} */ (this.control.state));
        if (this._ioTemplateDir)
            return this._ioTemplateDir;
        if (parent.ioTemplateDirList)
            return _.find(parent.ioTemplateDirList.toArray(), ['name', this.name])
                || _.find(parent.ioTemplateDirList.toArray(), ['component', state.component]);
    }
    ;
    /**
     * @return {?}
     */
    get attribute() {
        return this.name;
    }
    /**
     * @return {?}
     */
    get hiddenStyle() {
        return _.get(this.control.options, ['hidden']);
    }
    /**
     * @return {?}
     */
    get isHideLabel() {
        return _.get(this.control.options, ['hideLabel']);
    }
    /**
     * @return {?}
     */
    get isHideFeedback() {
        return _.get(this.control.options, ['hideFeedback']);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
    }
}
FormControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'form-control',
                template: `
      <form-label *ngIf="!isHideLabel"></form-label>

      <form-field></form-field>

      <form-feedback *ngIf="!isHideFeedback"></form-feedback>
  `,
                providers: [controlNameBinding],
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
FormControlComponent.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] },
    { type: ChangeDetectorRef }
];
FormControlComponent.propDecorators = {
    _ioTemplateDir: [{ type: ContentChild, args: [IonarTemplateDirective,] }],
    attribute: [{ type: HostBinding, args: ['attr.id',] }],
    hiddenStyle: [{ type: HostBinding, args: ['class.hidden',] }],
    isHideLabel: [{ type: HostBinding, args: ['class.hideLabel',] }],
    isHideFeedback: [{ type: HostBinding, args: ['class.hideFeedback',] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormControlComponent.prototype._ioTemplateDir;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9mb3JtLyIsInNvdXJjZXMiOlsiY29yZS9jb21wb25lbnRzL2Zvcm0tY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLElBQUksRUFDSixXQUFXLEVBR1gsUUFBUSxFQUVSLFFBQVEsRUFDVCxNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBR2xFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFFbkQsTUFBTSxPQUFPLGtCQUFrQixHQUFRO0lBQ3JDLE9BQU8sRUFBRSxTQUFTO0lBQ2xCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Q0FDcEQ7QUE0REQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFNBQVM7Ozs7OztJQTJDakQsWUFDbUMsTUFBd0IsRUFDekQsRUFBcUI7UUFFckIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ1YsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUE3Q0QsSUFBSSxrQkFBa0I7O2NBRWQsTUFBTSxHQUFHLG1CQUFlLElBQUksQ0FBQyxNQUFNLEVBQUE7O2NBQ3ZDLEtBQUssR0FBRyxtQkFBa0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUE7UUFFOUMsSUFBSSxJQUFJLENBQUMsY0FBYztZQUFFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUVwRCxJQUFJLE1BQU0sQ0FBQyxpQkFBaUI7WUFDMUIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7bUJBQ2pFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBRXBGLENBQUM7SUFBQSxDQUFDOzs7O0lBS0YsSUFDSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxJQUNJLFdBQVc7UUFFYixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7SUFHRCxJQUNJLFdBQVc7UUFDYixPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFFRCxJQUNJLGNBQWM7UUFDaEIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7O0lBV0QsUUFBUTtJQUVSLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELGtCQUFrQjtJQUVsQixDQUFDOzs7WUF0SEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7OztHQU1UO2dCQTRDRCxTQUFTLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDL0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07eUJBM0N0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F5Q1I7YUFHRjs7OztZQWpFUSxnQkFBZ0IsdUJBZ0hwQixRQUFRLFlBQUksSUFBSSxZQUFJLFFBQVE7WUFqSS9CLGlCQUFpQjs7OzZCQXNHaEIsWUFBWSxTQUFDLHNCQUFzQjt3QkFHbkMsV0FBVyxTQUFDLFNBQVM7MEJBS3JCLFdBQVcsU0FBQyxjQUFjOzBCQU8xQixXQUFXLFNBQUMsaUJBQWlCOzZCQUs3QixXQUFXLFNBQUMsb0JBQW9COzs7Ozs7O0lBcEJqQyw4Q0FBNkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0NoZWNrZWQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBmb3J3YXJkUmVmLFxyXG4gIEhvc3QsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFNraXBTZWxmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSW9Db250cm9sIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Jb0NvbnRyb2wnO1xyXG5pbXBvcnQgeyBDb250cm9sQ29udGFpbmVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Db250cm9sQ29udGFpbmVyJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2xTdGF0ZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvRm9ybSc7XHJcblxyXG5pbXBvcnQgeyBJb25hclRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnQGlvbmFyL3VpJztcclxuXHJcbmV4cG9ydCBjb25zdCBjb250cm9sTmFtZUJpbmRpbmc6IGFueSA9IHtcclxuICBwcm92aWRlOiBJb0NvbnRyb2wsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRm9ybUNvbnRyb2xDb21wb25lbnQpXHJcbn07XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmb3JtLWNvbnRyb2wnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxmb3JtLWxhYmVsICpuZ0lmPVwiIWlzSGlkZUxhYmVsXCI+PC9mb3JtLWxhYmVsPlxyXG5cclxuICAgICAgPGZvcm0tZmllbGQ+PC9mb3JtLWZpZWxkPlxyXG5cclxuICAgICAgPGZvcm0tZmVlZGJhY2sgKm5nSWY9XCIhaXNIaWRlRmVlZGJhY2tcIj48L2Zvcm0tZmVlZGJhY2s+XHJcbiAgYCxcclxuXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgICA6aG9zdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJsYWJlbCAgIGZpZWxkXCIgXCIuIGZlZWRiYWNrXCI7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA3ZnI7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciBhdXRvO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICB6LWluZGV4OiA1MDtcclxuICAgICAgfVxyXG5cclxuICAgICAgOmhvc3QtY29udGV4dCguaGlkZS1sYWJlbCkge1xyXG4gICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJmaWVsZFwiIFwiZmVlZGJhY2tcIjtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICA6aG9zdC1jb250ZXh0KC5oaWRlLWZlZWRiYWNrKSB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImxhYmVsICAgZmllbGRcIjtcclxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDdmcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgOmhvc3QtY29udGV4dCguaGlkZS1sYWJlbC5oaWRlLWZlZWRiYWNrKSB7XHJcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImZpZWxkXCI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDpob3N0LWNvbnRleHQoLmhpZGRlbikge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmb3JtLWxhYmVsIHtcclxuICAgICAgICAgIGdyaWQtYXJlYTogbGFiZWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvcm0tZmllbGQge1xyXG4gICAgICAgICAgZ3JpZC1hcmVhOiBmaWVsZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9ybS1mZWVkYmFjayB7XHJcbiAgICAgICAgICBncmlkLWFyZWE6IGZlZWRiYWNrO1xyXG4gICAgICB9XHJcbiAgYF0sXHJcbiAgcHJvdmlkZXJzOiBbY29udHJvbE5hbWVCaW5kaW5nXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtQ29udHJvbENvbXBvbmVudCBleHRlbmRzIElvQ29udHJvbCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdDaGVja2VkIHtcclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcblxyXG4gIGdldCBjb250cm9sVGVtcGxhdGVEaXIoKTogSW9uYXJUZW1wbGF0ZURpcmVjdGl2ZSB7XHJcblxyXG4gICAgY29uc3QgcGFyZW50ID0gPEZvcm1Db21wb25lbnQ+dGhpcy5wYXJlbnQsXHJcbiAgICAgIHN0YXRlID0gPEZvcm1Db250cm9sU3RhdGU+dGhpcy5jb250cm9sLnN0YXRlO1xyXG5cclxuICAgIGlmICh0aGlzLl9pb1RlbXBsYXRlRGlyKSByZXR1cm4gdGhpcy5faW9UZW1wbGF0ZURpcjtcclxuXHJcbiAgICBpZiAocGFyZW50LmlvVGVtcGxhdGVEaXJMaXN0KVxyXG4gICAgICByZXR1cm4gXy5maW5kKHBhcmVudC5pb1RlbXBsYXRlRGlyTGlzdC50b0FycmF5KCksIFsnbmFtZScsIHRoaXMubmFtZV0pXHJcbiAgICAgICAgfHwgXy5maW5kKHBhcmVudC5pb1RlbXBsYXRlRGlyTGlzdC50b0FycmF5KCksIFsnY29tcG9uZW50Jywgc3RhdGUuY29tcG9uZW50XSk7XHJcblxyXG4gIH07XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoSW9uYXJUZW1wbGF0ZURpcmVjdGl2ZSkgcHJpdmF0ZSBfaW9UZW1wbGF0ZURpcjtcclxuXHJcblxyXG4gIEBIb3N0QmluZGluZygnYXR0ci5pZCcpXHJcbiAgZ2V0IGF0dHJpYnV0ZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGlkZGVuJylcclxuICBnZXQgaGlkZGVuU3R5bGUoKTogQm9vbGVhbiB7XHJcblxyXG4gICAgcmV0dXJuIF8uZ2V0KHRoaXMuY29udHJvbC5vcHRpb25zLCBbJ2hpZGRlbiddKTtcclxuICB9XHJcblxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmhpZGVMYWJlbCcpXHJcbiAgZ2V0IGlzSGlkZUxhYmVsKCk6IEJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIF8uZ2V0KHRoaXMuY29udHJvbC5vcHRpb25zLCBbJ2hpZGVMYWJlbCddKTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaGlkZUZlZWRiYWNrJylcclxuICBnZXQgaXNIaWRlRmVlZGJhY2soKTogQm9vbGVhbiB7XHJcbiAgICByZXR1cm4gXy5nZXQodGhpcy5jb250cm9sLm9wdGlvbnMsIFsnaGlkZUZlZWRiYWNrJ10pO1xyXG4gIH1cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIEBTa2lwU2VsZigpICBwYXJlbnQ6IENvbnRyb2xDb250YWluZXIsXHJcbiAgICBjZDogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHtcclxuICAgIHN1cGVyKGNkKTtcclxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl19