"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
        { type: core_1.Component, args: [{
                    selector: 'tab-label',
                    template: "\n      <ng-template #tpl>\n          <ng-content></ng-content>\n      </ng-template>\n\n      <ng-container *ngIf=\"text\">\n          {{text}}\n      </ng-container>\n      <ng-container #vcRef></ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    TabLabelComponent.ctorParameters = function () { return []; };
    TabLabelComponent.propDecorators = {
        text: [{ type: core_1.Input }],
        template: [{ type: core_1.Input }],
        _templateRef: [{ type: core_1.ViewChild, args: ['tpl', { read: core_1.TemplateRef },] }],
        _vcRef: [{ type: core_1.ViewChild, args: ['vcRef', { read: core_1.ViewContainerRef },] }]
    };
    return TabLabelComponent;
}());
exports.TabLabelComponent = TabLabelComponent;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy90YWJzL2NvbXBvbmVudC9sYWJlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0NBU3VCO0FBRXZCO0lBcUJFO0lBQ0EsQ0FBQzs7OztJQUVELG9DQUFROzs7SUFBUjtRQUVFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQy9DO0lBRUgsQ0FBQzs7OztJQUVELDJDQUFlOzs7SUFBZjtJQUVBLENBQUM7O2dCQW5DRixnQkFBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQixRQUFRLEVBQUUseU5BU1Q7aUJBQ0Y7Ozs7O3VCQUdFLFlBQUs7MkJBQ0wsWUFBSzsrQkFFTCxnQkFBUyxTQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxrQkFBVyxFQUFFO3lCQUN0QyxnQkFBUyxTQUFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSx1QkFBZ0IsRUFBRTs7SUFpQmhELHdCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7QUF2QlksOENBQWlCOzs7SUFFNUIsaUNBQW1COztJQUNuQixxQ0FBb0M7O0lBRXBDLHlDQUF3RTs7Ozs7SUFDeEUsbUNBQWlGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLCBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3RhYi1sYWJlbCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPG5nLXRlbXBsYXRlICN0cGw+XHJcbiAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGV4dFwiPlxyXG4gICAgICAgICAge3t0ZXh0fX1cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgI3ZjUmVmPjwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYkxhYmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQElucHV0KCkgdGV4dDogYW55O1xyXG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBAVmlld0NoaWxkKCd0cGwnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAVmlld0NoaWxkKCd2Y1JlZicsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSBwcml2YXRlIF92Y1JlZjogVmlld0NvbnRhaW5lclJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICBpZiAodGhpcy50ZW1wbGF0ZSkge1xyXG4gICAgICB0aGlzLl92Y1JlZi5jbGVhcigpO1xyXG4gICAgICB0aGlzLl92Y1JlZi5jcmVhdGVFbWJlZGRlZFZpZXcodGhpcy50ZW1wbGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG5cclxuICB9XHJcbn0iXX0=