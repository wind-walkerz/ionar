/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, forwardRef, Host, HostBinding, Optional, QueryList, SkipSelf } from '@angular/core';
import { ControlContainer } from '../interfaces/ControlContainer';
import { isEmptyTemplate } from '@ionar/ui';
/** @type {?} */
export const formArrayProvider = {
    provide: ControlContainer,
    useExisting: forwardRef(() => FormArrayComponent)
};
export class FormArrayComponent extends ControlContainer {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} parent
     * @param {?} _elRef
     * @param {?} cd
     */
    constructor(parent, _elRef, cd) {
        super(cd);
        this._elRef = _elRef;
        this.parent = parent;
    }
    /**
     * @return {?}
     */
    get controlTemplate() {
        return ((/** @type {?} */ (this.parent))).controlTemplate;
    }
    /**
     * @return {?}
     */
    get attribute() {
        return this.name;
    }
    /**
     * @return {?}
     */
    get control() {
        return (/** @type {?} */ (this.root.get(this.path)));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.isDefaultTemplate = isEmptyTemplate(this._elRef);
        this.cd.detectChanges();
    }
}
FormArrayComponent.decorators = [
    { type: Component, args: [{
                selector: 'form-array',
                exportAs: 'form-array',
                template: `
      <ng-container *ngIf="isDefaultTemplate">
          <ng-container
                  *ngFor="let item of control | keyvalue"
                  [ngTemplateOutlet]="controlTemplate"
                  [ngTemplateOutletContext]="{$implicit: item, parent: this}"
          ></ng-container>
      </ng-container>
      <ng-container *ngIf="!isDefaultTemplate">
          <ng-content></ng-content>
      </ng-container>
  `,
                providers: [formArrayProvider],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`

  `]
            }] }
];
/** @nocollapse */
FormArrayComponent.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
FormArrayComponent.propDecorators = {
    attribute: [{ type: HostBinding, args: ['attr.id',] }],
    _controlContainers: [{ type: ContentChildren, args: [ControlContainer,] }]
};
if (false) {
    /** @type {?} */
    FormArrayComponent.prototype.isDefaultTemplate;
    /**
     * @type {?}
     * @private
     */
    FormArrayComponent.prototype._controlContainers;
    /**
     * @type {?}
     * @private
     */
    FormArrayComponent.prototype._elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1hcnJheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvY29tcG9uZW50cy9mb3JtLWFycmF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsVUFBVSxFQUNWLElBQUksRUFDSixXQUFXLEVBQ1gsUUFBUSxFQUNSLFNBQVMsRUFDVCxRQUFRLEVBRVQsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQzs7QUFJNUMsTUFBTSxPQUFPLGlCQUFpQixHQUFRO0lBQ3BDLE9BQU8sRUFBRSxnQkFBZ0I7SUFDekIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztDQUNsRDtBQXdCRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsZ0JBQWdCOzs7Ozs7O0lBc0J0RCxZQUNtQyxNQUF3QixFQUNqRCxNQUFrQixFQUMxQixFQUFxQjtRQUVyQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7UUFIRixXQUFNLEdBQU4sTUFBTSxDQUFZO1FBSzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUF6QkQsSUFBSSxlQUFlO1FBQ2pCLE9BQU8sQ0FBQyxtQkFBZSxJQUFJLENBQUMsTUFBTSxFQUFBLENBQUMsQ0FBQyxlQUFlLENBQUM7SUFDdEQsQ0FBQzs7OztJQUVELElBQ0ksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxtQkFBbUIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFBLENBQUM7SUFDckQsQ0FBQzs7OztJQWlCRCxlQUFlO1FBQ2IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXRELElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7O1lBNURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7R0FXVDtnQkFLRCxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDOUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07eUJBSnRDOztHQUVSO2FBR0Y7Ozs7WUFoQ1EsZ0JBQWdCLHVCQXdEcEIsUUFBUSxZQUFJLElBQUksWUFBSSxRQUFRO1lBbEUvQixVQUFVO1lBSFYsaUJBQWlCOzs7d0JBdURoQixXQUFXLFNBQUMsU0FBUztpQ0FTckIsZUFBZSxTQUFDLGdCQUFnQjs7OztJQWZqQywrQ0FBMkI7Ozs7O0lBZTNCLGdEQUEyRjs7Ozs7SUFNekYsb0NBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBmb3J3YXJkUmVmLFxyXG4gIEhvc3QsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgT3B0aW9uYWwsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFNraXBTZWxmLFxyXG4gIFRlbXBsYXRlUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDb250cm9sQ29udGFpbmVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Db250cm9sQ29udGFpbmVyJztcclxuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgaXNFbXB0eVRlbXBsYXRlIH0gZnJvbSAnQGlvbmFyL3VpJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnLi4vbW9kZWxzL0Fic3RyYWN0Q29udHJvbCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1BcnJheVByb3ZpZGVyOiBhbnkgPSB7XHJcbiAgcHJvdmlkZTogQ29udHJvbENvbnRhaW5lcixcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBGb3JtQXJyYXlDb21wb25lbnQpXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Zvcm0tYXJyYXknLFxyXG4gIGV4cG9ydEFzOiAnZm9ybS1hcnJheScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzRGVmYXVsdFRlbXBsYXRlXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBpdGVtIG9mIGNvbnRyb2wgfCBrZXl2YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImNvbnRyb2xUZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7JGltcGxpY2l0OiBpdGVtLCBwYXJlbnQ6IHRoaXN9XCJcclxuICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNEZWZhdWx0VGVtcGxhdGVcIj5cclxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgYCxcclxuXHJcbiAgc3R5bGVzOiBbYFxyXG5cclxuICBgXSxcclxuICBwcm92aWRlcnM6IFtmb3JtQXJyYXlQcm92aWRlcl0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEZvcm1BcnJheUNvbXBvbmVudCBleHRlbmRzIENvbnRyb2xDb250YWluZXIgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgaXNEZWZhdWx0VGVtcGxhdGU6IEJvb2xlYW47XHJcblxyXG4gIGdldCBjb250cm9sVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICByZXR1cm4gKDxGb3JtQ29tcG9uZW50PnRoaXMucGFyZW50KS5jb250cm9sVGVtcGxhdGU7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxyXG4gIGdldCBhdHRyaWJ1dGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgfVxyXG5cclxuICBnZXQgY29udHJvbCgpIHtcclxuICAgIHJldHVybiA8QWJzdHJhY3RDb250cm9sW10+dGhpcy5yb290LmdldCh0aGlzLnBhdGgpO1xyXG4gIH1cclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihDb250cm9sQ29udGFpbmVyKSBwcml2YXRlIF9jb250cm9sQ29udGFpbmVyczogUXVlcnlMaXN0PENvbnRyb2xDb250YWluZXI+O1xyXG5cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIEBTa2lwU2VsZigpICBwYXJlbnQ6IENvbnRyb2xDb250YWluZXIsXHJcbiAgICBwcml2YXRlIF9lbFJlZjogRWxlbWVudFJlZixcclxuICAgIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIoY2QpO1xyXG5cclxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gIH1cclxuXHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xyXG4gICAgdGhpcy5pc0RlZmF1bHRUZW1wbGF0ZSA9IGlzRW1wdHlUZW1wbGF0ZSh0aGlzLl9lbFJlZik7XHJcblxyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbiJdfQ==