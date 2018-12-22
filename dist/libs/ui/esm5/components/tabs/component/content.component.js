/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
var TabContentComponent = /** @class */ (function () {
    function TabContentComponent() {
        var _this = this;
        this.createView = function () {
            if (_this.template) {
                _this._vcRef.clear();
                _this._vcRef.createEmbeddedView(_this.template);
            }
        };
    }
    /**
     * @return {?}
     */
    TabContentComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.createView();
    };
    /**
     * @return {?}
     */
    TabContentComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TabContentComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.createView();
    };
    TabContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'tab-content',
                    template: "\n      <ng-template #content>\n          <ng-content></ng-content>\n      </ng-template>\n    \n    <ng-container #vcRef>\n        \n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    TabContentComponent.ctorParameters = function () { return []; };
    TabContentComponent.propDecorators = {
        template: [{ type: Input }],
        _templateRef: [{ type: ViewChild, args: ['content', { read: TemplateRef },] }],
        _vcRef: [{ type: ViewChild, args: ['vcRef', { read: ViewContainerRef },] }]
    };
    return TabContentComponent;
}());
export { TabContentComponent };
if (false) {
    /** @type {?} */
    TabContentComponent.prototype.template;
    /** @type {?} */
    TabContentComponent.prototype._templateRef;
    /**
     * @type {?}
     * @private
     */
    TabContentComponent.prototype._vcRef;
    /** @type {?} */
    TabContentComponent.prototype.createView;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RhYnMvY29tcG9uZW50L2NvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULEtBQUssRUFHTCxXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQWtCRTtRQUFBLGlCQUNDO1FBZUQsZUFBVSxHQUFHO1lBRVgsSUFBSSxLQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNwQixLQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMvQztRQUNILENBQUMsQ0FBQztJQXJCRixDQUFDOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCw2Q0FBZTs7O0lBQWY7SUFFQSxDQUFDOzs7OztJQUVELHlDQUFXOzs7O0lBQVgsVUFBWSxPQUFPO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOztnQkEvQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUsK0pBUVQ7aUJBQ0Y7Ozs7OzJCQUdFLEtBQUs7K0JBQ0wsU0FBUyxTQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7eUJBQzFDLFNBQVMsU0FBQyxPQUFPLEVBQUUsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUM7O0lBMEI5QywwQkFBQztDQUFBLEFBMUNELElBMENDO1NBOUJZLG1CQUFtQjs7O0lBRTlCLHVDQUFvQzs7SUFDcEMsMkNBQTRFOzs7OztJQUM1RSxxQ0FBOEU7O0lBa0I5RSx5Q0FNRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0YWItY29udGVudCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPG5nLXRlbXBsYXRlICNjb250ZW50PlxyXG4gICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgXHJcbiAgICA8bmctY29udGFpbmVyICN2Y1JlZj5cclxuICAgICAgICBcclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYkNvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAVmlld0NoaWxkKCd2Y1JlZicsIHtyZWFkOiBWaWV3Q29udGFpbmVyUmVmfSkgcHJpdmF0ZSBfdmNSZWY6IFZpZXdDb250YWluZXJSZWZcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuY3JlYXRlVmlldygpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpOiB2b2lkIHtcclxuICAgIHRoaXMuY3JlYXRlVmlldygpO1xyXG4gIH1cclxuXHJcblxyXG4gIGNyZWF0ZVZpZXcgPSAoKSA9PiB7XHJcblxyXG4gICAgaWYgKHRoaXMudGVtcGxhdGUpIHtcclxuICAgICAgdGhpcy5fdmNSZWYuY2xlYXIoKTtcclxuICAgICAgdGhpcy5fdmNSZWYuY3JlYXRlRW1iZWRkZWRWaWV3KHRoaXMudGVtcGxhdGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG59Il19