/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ContentChildren, QueryList } from '@angular/core';
import _ from 'lodash';
import { TabComponent } from '../component/tab.component';
var TabsComponent = /** @class */ (function () {
    function TabsComponent(cd) {
        var _this = this;
        this.cd = cd;
        this.selectTab = function (selected_index) {
            _.each(_this.contentList.toArray(), function (tab, i) {
                tab.active = i === selected_index;
            });
            _this.activeTab = _.find(_this.contentList.toArray(), ['active', true]);
        };
    }
    /**
     * @return {?}
     */
    TabsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    TabsComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.activeTab = this.contentList.toArray()[0];
        this.contentList.toArray()[0].active = true;
        this.cd.detectChanges();
    };
    TabsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'io-tabs',
                    template: "\n      <ng-template>\n          <ng-content></ng-content>\n      </ng-template>\n\n      <div class=\"label_container\">\n          <ng-container *ngFor=\"let tab of contentList; let i =index\">\n              <tab-label\n                      [ngClass]=\"tab.active && 'active'\"\n                      (click)=\"selectTab(i)\"\n                      [text]=\"tab.label\"\n                      [template]=\"tab._labelComp?._templateRef\"\n              >\n              </tab-label>\n          </ng-container>\n      </div>\n      <tab-content\n              *ngIf=\"activeTab\"\n              [template]=\"activeTab._contentComp ? activeTab._contentComp._templateRef : activeTab._tabTemplateRef\"\n      >\n      </tab-content>\n\n  ",
                    styles: [":host{display:flex;flex-direction:column;position:relative}:host ::ng-deep .label_container{display:flex}:host ::ng-deep .label_container tab-label{cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    TabsComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    TabsComponent.propDecorators = {
        contentList: [{ type: ContentChildren, args: [TabComponent,] }]
    };
    return TabsComponent;
}());
export { TabsComponent };
if (false) {
    /** @type {?} */
    TabsComponent.prototype.contentList;
    /** @type {?} */
    TabsComponent.prototype.activeTab;
    /** @type {?} */
    TabsComponent.prototype.selectTab;
    /**
     * @type {?}
     * @private
     */
    TabsComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RhYnMvY29udGFpbmVycy90YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUVmLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTFEO0lBZ0NFLHVCQUFvQixFQUFxQjtRQUF6QyxpQkFDQztRQURtQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQVl6QyxjQUFTLEdBQUcsVUFBQSxjQUFjO1lBQ3hCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxVQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUN4QyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxjQUFjLENBQUM7WUFDcEMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLENBQUMsQ0FBQztJQWhCRixDQUFDOzs7O0lBRUQsZ0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUVELHVDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDNUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDOztnQkExQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsbXVCQXNCVDs7aUJBRUY7Ozs7Z0JBbkNDLGlCQUFpQjs7OzhCQXFDaEIsZUFBZSxTQUFDLFlBQVk7O0lBc0IvQixvQkFBQztDQUFBLEFBbERELElBa0RDO1NBdkJZLGFBQWE7OztJQUN4QixvQ0FBb0U7O0lBRXBFLGtDQUF3Qjs7SUFjeEIsa0NBS0U7Ozs7O0lBakJVLDJCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIE9uSW5pdCxcclxuICBRdWVyeUxpc3RcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgVGFiQ29tcG9uZW50IH0gZnJvbSAnLi4vY29tcG9uZW50L3RhYi5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpby10YWJzJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8bmctdGVtcGxhdGU+XHJcbiAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwibGFiZWxfY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCB0YWIgb2YgY29udGVudExpc3Q7IGxldCBpID1pbmRleFwiPlxyXG4gICAgICAgICAgICAgIDx0YWItbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cInRhYi5hY3RpdmUgJiYgJ2FjdGl2ZSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cInNlbGVjdFRhYihpKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbdGV4dF09XCJ0YWIubGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cInRhYi5fbGFiZWxDb21wPy5fdGVtcGxhdGVSZWZcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8L3RhYi1sYWJlbD5cclxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHRhYi1jb250ZW50XHJcbiAgICAgICAgICAgICAgKm5nSWY9XCJhY3RpdmVUYWJcIlxyXG4gICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJhY3RpdmVUYWIuX2NvbnRlbnRDb21wID8gYWN0aXZlVGFiLl9jb250ZW50Q29tcC5fdGVtcGxhdGVSZWYgOiBhY3RpdmVUYWIuX3RhYlRlbXBsYXRlUmVmXCJcclxuICAgICAgPlxyXG4gICAgICA8L3RhYi1jb250ZW50PlxyXG5cclxuICBgLFxyXG4gIHN0eWxlVXJsczogWycuL3RhYnMuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQENvbnRlbnRDaGlsZHJlbihUYWJDb21wb25lbnQpIGNvbnRlbnRMaXN0OiBRdWVyeUxpc3Q8VGFiQ29tcG9uZW50PjtcclxuXHJcbiAgYWN0aXZlVGFiOiBUYWJDb21wb25lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZlVGFiID0gdGhpcy5jb250ZW50TGlzdC50b0FycmF5KClbMF07XHJcbiAgICB0aGlzLmNvbnRlbnRMaXN0LnRvQXJyYXkoKVswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RUYWIgPSBzZWxlY3RlZF9pbmRleCA9PiB7XHJcbiAgICBfLmVhY2godGhpcy5jb250ZW50TGlzdC50b0FycmF5KCksICh0YWIsIGkpID0+IHtcclxuICAgICAgdGFiLmFjdGl2ZSA9IGkgPT09IHNlbGVjdGVkX2luZGV4O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmFjdGl2ZVRhYiA9IF8uZmluZCh0aGlzLmNvbnRlbnRMaXN0LnRvQXJyYXkoKSwgWydhY3RpdmUnLCB0cnVlXSk7XHJcbiAgfTtcclxufVxyXG4iXX0=