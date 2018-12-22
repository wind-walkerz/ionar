/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
export class TabLabelComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.template) {
            this._vcRef.clear();
            this._vcRef.createEmbeddedView(this.template);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
}
TabLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'tab-label',
                template: `
      <ng-template #tpl>
          <ng-content></ng-content>
      </ng-template>

      <ng-container *ngIf="text">
          {{text}}
      </ng-container>
      <ng-container #vcRef></ng-container>
  `
            }] }
];
/** @nocollapse */
TabLabelComponent.ctorParameters = () => [];
TabLabelComponent.propDecorators = {
    text: [{ type: Input }],
    template: [{ type: Input }],
    _templateRef: [{ type: ViewChild, args: ['tpl', { read: TemplateRef },] }],
    _vcRef: [{ type: ViewChild, args: ['vcRef', { read: ViewContainerRef },] }]
};
if (false) {
    /** @type {?} */
    TabLabelComponent.prototype.text;
    /** @type {?} */
    TabLabelComponent.prototype.template;
    /** @type {?} */
    TabLabelComponent.prototype._templateRef;
    /**
     * @type {?}
     * @private
     */
    TabLabelComponent.prototype._vcRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy90YWJzL2NvbXBvbmVudC9sYWJlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBR1QsS0FBSyxFQUVMLFdBQVcsRUFDWCxTQUFTLEVBQUUsZ0JBQWdCLEVBQzVCLE1BQU0sZUFBZSxDQUFDO0FBZXZCLE1BQU0sT0FBTyxpQkFBaUI7SUFRNUI7SUFDQSxDQUFDOzs7O0lBRUQsUUFBUTtRQUVOLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQy9DO0lBRUgsQ0FBQzs7OztJQUVELGVBQWU7SUFFZixDQUFDOzs7WUFuQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixRQUFRLEVBQUU7Ozs7Ozs7OztHQVNUO2FBQ0Y7Ozs7O21CQUdFLEtBQUs7dUJBQ0wsS0FBSzsyQkFFTCxTQUFTLFNBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtxQkFDdEMsU0FBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRTs7OztJQUo5QyxpQ0FBbUI7O0lBQ25CLHFDQUFvQzs7SUFFcEMseUNBQXdFOzs7OztJQUN4RSxtQ0FBaUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGFiLWxhYmVsJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8bmctdGVtcGxhdGUgI3RwbD5cclxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICB7e3RleHR9fVxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAjdmNSZWY+PC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFiTGFiZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBASW5wdXQoKSB0ZXh0OiBhbnk7XHJcbiAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3RwbCcsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBWaWV3Q2hpbGQoJ3ZjUmVmJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIHByaXZhdGUgX3ZjUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIGlmICh0aGlzLnRlbXBsYXRlKSB7XHJcbiAgICAgIHRoaXMuX3ZjUmVmLmNsZWFyKCk7XHJcbiAgICAgIHRoaXMuX3ZjUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxufSJdfQ==