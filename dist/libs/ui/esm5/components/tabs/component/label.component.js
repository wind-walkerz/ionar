/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
var TabLabelComponent = /** @class */ (function () {
    function TabLabelComponent() {
    }
    /**
     * @return {?}
     */
    TabLabelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.template) {
            this._vcRef.clear();
            this._vcRef.createEmbeddedView(this.template);
        }
    };
    /**
     * @return {?}
     */
    TabLabelComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    TabLabelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tab-label',
                    template: "\n      <ng-template #tpl>\n          <ng-content></ng-content>\n      </ng-template>\n\n      <ng-container *ngIf=\"text\">\n          {{text}}\n      </ng-container>\n      <ng-container #vcRef></ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    TabLabelComponent.ctorParameters = function () { return []; };
    TabLabelComponent.propDecorators = {
        text: [{ type: Input }],
        template: [{ type: Input }],
        _templateRef: [{ type: ViewChild, args: ['tpl', { read: TemplateRef },] }],
        _vcRef: [{ type: ViewChild, args: ['vcRef', { read: ViewContainerRef },] }]
    };
    return TabLabelComponent;
}());
export { TabLabelComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy90YWJzL2NvbXBvbmVudC9sYWJlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBR1QsS0FBSyxFQUVMLFdBQVcsRUFDWCxTQUFTLEVBQUUsZ0JBQWdCLEVBQzVCLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBcUJFO0lBQ0EsQ0FBQzs7OztJQUVELG9DQUFROzs7SUFBUjtRQUVFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQy9DO0lBRUgsQ0FBQzs7OztJQUVELDJDQUFlOzs7SUFBZjtJQUVBLENBQUM7O2dCQW5DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLFFBQVEsRUFBRSx5TkFTVDtpQkFDRjs7Ozs7dUJBR0UsS0FBSzsyQkFDTCxLQUFLOytCQUVMLFNBQVMsU0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3lCQUN0QyxTQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOztJQWlCaEQsd0JBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQXZCWSxpQkFBaUI7OztJQUU1QixpQ0FBbUI7O0lBQ25CLHFDQUFvQzs7SUFFcEMseUNBQXdFOzs7OztJQUN4RSxtQ0FBaUYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGFiLWxhYmVsJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8bmctdGVtcGxhdGUgI3RwbD5cclxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICB7e3RleHR9fVxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPG5nLWNvbnRhaW5lciAjdmNSZWY+PC9uZy1jb250YWluZXI+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFiTGFiZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xyXG5cclxuICBASW5wdXQoKSB0ZXh0OiBhbnk7XHJcbiAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3RwbCcsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSkgX3RlbXBsYXRlUmVmOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBWaWV3Q2hpbGQoJ3ZjUmVmJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIHByaXZhdGUgX3ZjUmVmOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIGlmICh0aGlzLnRlbXBsYXRlKSB7XHJcbiAgICAgIHRoaXMuX3ZjUmVmLmNsZWFyKCk7XHJcbiAgICAgIHRoaXMuX3ZjUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxufSJdfQ==