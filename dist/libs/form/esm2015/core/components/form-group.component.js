/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, forwardRef, Host, HostBinding, Optional, QueryList, SkipSelf, ViewContainerRef } from '@angular/core';
import { ControlContainer } from '../interfaces/ControlContainer';
import { isEmptyTemplate } from '@ionar/ui';
import { IoControl } from '../interfaces/IoControl';
/** @type {?} */
export const formGroupProvider = {
    provide: ControlContainer,
    useExisting: forwardRef(() => FormGroupComponent)
};
export class FormGroupComponent extends ControlContainer {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} parent
     * @param {?} _vcRef
     * @param {?} _elRef
     * @param {?} cd
     */
    constructor(parent, _vcRef, _elRef, cd) {
        super(cd);
        this._vcRef = _vcRef;
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
    ngOnInit() {
        super.ngOnInit();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.isDefaultTemplate = isEmptyTemplate(this._elRef);
        this.cd.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
FormGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'form-group',
                exportAs: 'form-group',
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
                providers: [formGroupProvider],
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`

  `]
            }] }
];
/** @nocollapse */
FormGroupComponent.ctorParameters = () => [
    { type: ControlContainer, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] },
    { type: ViewContainerRef },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
FormGroupComponent.propDecorators = {
    attribute: [{ type: HostBinding, args: ['attr.id',] }],
    _controlContainerList: [{ type: ContentChildren, args: [ControlContainer,] }],
    _ioControlList: [{ type: ContentChildren, args: [IoControl,] }]
};
if (false) {
    /** @type {?} */
    FormGroupComponent.prototype.isDefaultTemplate;
    /**
     * @type {?}
     * @private
     */
    FormGroupComponent.prototype._controlContainerList;
    /**
     * @type {?}
     * @private
     */
    FormGroupComponent.prototype._ioControlList;
    /**
     * @type {?}
     * @private
     */
    FormGroupComponent.prototype._vcRef;
    /**
     * @type {?}
     * @private
     */
    FormGroupComponent.prototype._elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1ncm91cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvY29tcG9uZW50cy9mb3JtLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUFFLGlCQUFpQixFQUMxQyxTQUFTLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFDdEMsVUFBVSxFQUNWLElBQUksRUFDSixXQUFXLEVBR1gsUUFBUSxFQUFFLFNBQVMsRUFDbkIsUUFBUSxFQUNSLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBRzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFJcEQsTUFBTSxPQUFPLGlCQUFpQixHQUFRO0lBQ3BDLE9BQU8sRUFBRSxnQkFBZ0I7SUFDekIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztDQUNsRDtBQTBCRCxNQUFNLE9BQU8sa0JBQW1CLFNBQVEsZ0JBQWdCOzs7Ozs7OztJQTBCdEQsWUFDbUMsTUFBd0IsRUFDakQsTUFBd0IsRUFDeEIsTUFBa0IsRUFDMUIsRUFBcUI7UUFFckIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBSkYsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUkxQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUN2QixDQUFDOzs7O0lBN0JELElBQUksZUFBZTtRQUNqQixPQUFPLENBQUMsbUJBQWUsSUFBSSxDQUFDLE1BQU0sRUFBQSxDQUFDLENBQUMsZUFBZSxDQUFDO0lBQ3RELENBQUM7Ozs7SUFFRCxJQUNJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sbUJBQXFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBQSxDQUFDO0lBQ3ZFLENBQUM7Ozs7SUFxQkQsUUFBUTtRQUNOLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBR0QsZUFBZTtRQUNiLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxXQUFXO0lBQ1gsQ0FBQzs7O1lBekVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7R0FXVDtnQkFNRCxTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQkFDOUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07eUJBTHRDOztHQUVSO2FBSUY7Ozs7WUFwQ1EsZ0JBQWdCLHVCQWdFcEIsUUFBUSxZQUFJLElBQUksWUFBSSxRQUFRO1lBbEUvQixnQkFBZ0I7WUFSWSxVQUFVO1lBRGIsaUJBQWlCOzs7d0JBeUR6QyxXQUFXLFNBQUMsU0FBUztvQ0FVckIsZUFBZSxTQUFDLGdCQUFnQjs2QkFFaEMsZUFBZSxTQUFDLFNBQVM7Ozs7SUFsQjFCLCtDQUEyQjs7Ozs7SUFnQjNCLG1EQUE4Rjs7Ozs7SUFFOUYsNENBQXlFOzs7OztJQU92RSxvQ0FBZ0M7Ozs7O0lBQ2hDLG9DQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LCBDb250ZW50Q2hpbGRyZW4sIEVsZW1lbnRSZWYsXHJcbiAgZm9yd2FyZFJlZixcclxuICBIb3N0LFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsIFF1ZXJ5TGlzdCxcclxuICBTa2lwU2VsZiwgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sQ29udGFpbmVyIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Db250cm9sQ29udGFpbmVyJztcclxuaW1wb3J0IHsgaXNFbXB0eVRlbXBsYXRlIH0gZnJvbSAnQGlvbmFyL3VpJztcclxuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJy4uL2NvcmUuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IElvQ29udHJvbCB9IGZyb20gJy4uL2ludGVyZmFjZXMvSW9Db250cm9sJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnLi4vbW9kZWxzL0Fic3RyYWN0Q29udHJvbCc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1Hcm91cFByb3ZpZGVyOiBhbnkgPSB7XHJcbiAgcHJvdmlkZTogQ29udHJvbENvbnRhaW5lcixcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBGb3JtR3JvdXBDb21wb25lbnQpXHJcbn07XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdmb3JtLWdyb3VwJyxcclxuICBleHBvcnRBczogJ2Zvcm0tZ3JvdXAnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0RlZmF1bHRUZW1wbGF0ZVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjb250cm9sIHwga2V5dmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjb250cm9sVGVtcGxhdGVcIlxyXG4gICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwieyRpbXBsaWNpdDogaXRlbSwgcGFyZW50OiB0aGlzfVwiXHJcbiAgICAgICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzRGVmYXVsdFRlbXBsYXRlXCI+XHJcbiAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGAsXHJcblxyXG4gIHN0eWxlczogW2BcclxuXHJcbiAgYF0sXHJcblxyXG4gIHByb3ZpZGVyczogW2Zvcm1Hcm91cFByb3ZpZGVyXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRm9ybUdyb3VwQ29tcG9uZW50IGV4dGVuZHMgQ29udHJvbENvbnRhaW5lciBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgaXNEZWZhdWx0VGVtcGxhdGU6IEJvb2xlYW47XHJcblxyXG4gIGdldCBjb250cm9sVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICByZXR1cm4gKDxGb3JtQ29tcG9uZW50PnRoaXMucGFyZW50KS5jb250cm9sVGVtcGxhdGU7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxyXG4gIGdldCBhdHRyaWJ1dGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgfVxyXG5cclxuICBnZXQgY29udHJvbCgpIHtcclxuICAgIHJldHVybiA8eyBbbmFtZTogc3RyaW5nXTogQWJzdHJhY3RDb250cm9sIH0+dGhpcy5yb290LmdldCh0aGlzLnBhdGgpO1xyXG4gIH1cclxuXHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oQ29udHJvbENvbnRhaW5lcikgcHJpdmF0ZSBfY29udHJvbENvbnRhaW5lckxpc3Q6IFF1ZXJ5TGlzdDxDb250cm9sQ29udGFpbmVyPjtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihJb0NvbnRyb2wpIHByaXZhdGUgX2lvQ29udHJvbExpc3Q6IFF1ZXJ5TGlzdDxJb0NvbnRyb2w+O1xyXG5cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgQE9wdGlvbmFsKCkgQEhvc3QoKSBAU2tpcFNlbGYoKSAgcGFyZW50OiBDb250cm9sQ29udGFpbmVyLFxyXG4gICAgcHJpdmF0ZSBfdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIF9lbFJlZjogRWxlbWVudFJlZixcclxuICAgIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgc3VwZXIoY2QpO1xyXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nQWZ0ZXJWaWV3SW5pdCgpO1xyXG4gICAgdGhpcy5pc0RlZmF1bHRUZW1wbGF0ZSA9IGlzRW1wdHlUZW1wbGF0ZSh0aGlzLl9lbFJlZik7XHJcblxyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuIl19