/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
export class MenuComponent {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.visible = false;
        this.visibilityChange$ = new Subject();
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
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
        this.visibilityChange$.next(this.visible);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
MenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'dropdown-menu',
                template: `
      <ng-content></ng-content>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      :host {
          display: flex;
          flex-shrink: 0;
      }
  `]
            }] }
];
/** @nocollapse */
MenuComponent.ctorParameters = () => [
    { type: ElementRef }
];
MenuComponent.propDecorators = {
    visible: [{ type: Input }],
    template: [{ type: Input }],
    tplRef: [{ type: ViewChild, args: ['tpl',] }],
    vcRef: [{ type: ViewChild, args: ['vc', { read: ViewContainerRef },] }]
};
if (false) {
    /** @type {?} */
    MenuComponent.prototype.visible;
    /** @type {?} */
    MenuComponent.prototype.template;
    /** @type {?} */
    MenuComponent.prototype.visibilityChange$;
    /** @type {?} */
    MenuComponent.prototype.tplRef;
    /** @type {?} */
    MenuComponent.prototype.vcRef;
    /** @type {?} */
    MenuComponent.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2Ryb3Bkb3duL2NvbXBvbmVudHMvbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBR0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQWMvQixNQUFNLE9BQU8sYUFBYTs7OztJQWF4QixZQUFtQixLQUFpQjtRQUFqQixVQUFLLEdBQUwsS0FBSyxDQUFZOztRQVQzQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBR2xDLHNCQUFpQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFPbEMsQ0FBQzs7Ozs7SUFLRCxRQUFRO0lBRVIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFHNUMsQ0FBQzs7OztJQUVELFdBQVc7SUFDWCxDQUFDOzs7WUExQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7Z0NBQ29CO2dCQU85QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFOdEM7Ozs7O0dBS1I7YUFFRjs7OztZQXJCQyxVQUFVOzs7c0JBMEJULEtBQUs7dUJBQ0wsS0FBSztxQkFJTCxTQUFTLFNBQUMsS0FBSztvQkFDZixTQUFTLFNBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOzs7O0lBTjNDLGdDQUFrQzs7SUFDbEMsaUNBQW9DOztJQUVwQywwQ0FBa0M7O0lBRWxDLCtCQUEyQzs7SUFDM0MsOEJBQXFFOztJQUd6RCw4QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LCBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Ryb3Bkb3duLW1lbnUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxyXG4gIHN0eWxlczogW2BcclxuICAgICAgOmhvc3Qge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICB9XHJcbiAgYF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIEBJbnB1dCgpIHZpc2libGU6IEJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgdmlzaWJpbGl0eUNoYW5nZSQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBAVmlld0NoaWxkKCd0cGwnKSB0cGxSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQFZpZXdDaGlsZCgndmMnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgdmNSZWY6IFZpZXdDb250YWluZXJSZWY7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYpIHtcclxuICB9XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpYmlsaXR5Q2hhbmdlJC5uZXh0KHRoaXMudmlzaWJsZSk7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbn1cclxuIl19