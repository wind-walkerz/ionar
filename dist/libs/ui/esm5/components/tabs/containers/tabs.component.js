"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var tab_component_1 = require("../component/tab.component");
var TabsComponent = /** @class */ (function () {
    function TabsComponent(cd) {
        var _this = this;
        this.cd = cd;
        this.selectTab = function (selected_index) {
            lodash_1.default.each(_this.contentList.toArray(), function (tab, i) {
                tab.active = i === selected_index;
            });
            _this.activeTab = lodash_1.default.find(_this.contentList.toArray(), ['active', true]);
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
        { type: core_1.Component, args: [{
                    selector: 'io-tabs',
                    template: "\n      <ng-template>\n          <ng-content></ng-content>\n      </ng-template>\n\n      <div class=\"label_container\">\n          <ng-container *ngFor=\"let tab of contentList; let i =index\">\n              <tab-label\n                      [ngClass]=\"tab.active && 'active'\"\n                      (click)=\"selectTab(i)\"\n                      [text]=\"tab.label\"\n                      [template]=\"tab._labelComp?._templateRef\"\n              >\n              </tab-label>\n          </ng-container>\n      </div>\n      \n      <tab-content\n              *ngIf=\"activeTab\"\n              [template]=\"activeTab._contentComp ? activeTab._contentComp._templateRef : activeTab._tabTemplateRef\"\n      >\n      </tab-content>\n    \n\n  ",
                    styles: [":host{display:flex;flex-direction:column;position:relative}:host ::ng-deep .label_container{display:flex}:host ::ng-deep .label_container tab-label{cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    TabsComponent.ctorParameters = function () { return [
        { type: core_1.ChangeDetectorRef }
    ]; };
    TabsComponent.propDecorators = {
        contentList: [{ type: core_1.ContentChildren, args: [tab_component_1.TabComponent,] }]
    };
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RhYnMvY29udGFpbmVycy90YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBT3VCO0FBQ3ZCLDBEQUF1QjtBQUN2Qiw0REFBMEQ7QUFFMUQ7SUFrQ0UsdUJBQW9CLEVBQXFCO1FBQXpDLGlCQUNDO1FBRG1CLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBWXpDLGNBQVMsR0FBRyxVQUFBLGNBQWM7WUFDeEIsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxVQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUN4QyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxjQUFjLENBQUM7WUFDcEMsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsU0FBUyxHQUFHLGdCQUFDLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN4RSxDQUFDLENBQUM7SUFoQkYsQ0FBQzs7OztJQUVELGdDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCx1Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzVDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Z0JBNUNGLGdCQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSxpdkJBd0JUOztpQkFFRjs7OztnQkFyQ0Msd0JBQWlCOzs7OEJBdUNoQixzQkFBZSxTQUFDLDRCQUFZOztJQXNCL0Isb0JBQUM7Q0FBQSxBQXBERCxJQW9EQztBQXZCWSxzQ0FBYTs7O0lBQ3hCLG9DQUFvRTs7SUFFcEUsa0NBQXdCOztJQWN4QixrQ0FLRTs7Ozs7SUFqQlUsMkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgT25Jbml0LFxyXG4gIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBUYWJDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnQvdGFiLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lvLXRhYnMnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxuZy10ZW1wbGF0ZT5cclxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbF9jb250YWluZXJcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHRhYiBvZiBjb250ZW50TGlzdDsgbGV0IGkgPWluZGV4XCI+XHJcbiAgICAgICAgICAgICAgPHRhYi1sYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwidGFiLmFjdGl2ZSAmJiAnYWN0aXZlJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0VGFiKGkpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFt0ZXh0XT1cInRhYi5sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwidGFiLl9sYWJlbENvbXA/Ll90ZW1wbGF0ZVJlZlwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDwvdGFiLWxhYmVsPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBcclxuICAgICAgPHRhYi1jb250ZW50XHJcbiAgICAgICAgICAgICAgKm5nSWY9XCJhY3RpdmVUYWJcIlxyXG4gICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJhY3RpdmVUYWIuX2NvbnRlbnRDb21wID8gYWN0aXZlVGFiLl9jb250ZW50Q29tcC5fdGVtcGxhdGVSZWYgOiBhY3RpdmVUYWIuX3RhYlRlbXBsYXRlUmVmXCJcclxuICAgICAgPlxyXG4gICAgICA8L3RhYi1jb250ZW50PlxyXG4gICAgXHJcblxyXG4gIGAsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGFicy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICBAQ29udGVudENoaWxkcmVuKFRhYkNvbXBvbmVudCkgY29udGVudExpc3Q6IFF1ZXJ5TGlzdDxUYWJDb21wb25lbnQ+O1xyXG5cclxuICBhY3RpdmVUYWI6IFRhYkNvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmVUYWIgPSB0aGlzLmNvbnRlbnRMaXN0LnRvQXJyYXkoKVswXTtcclxuICAgIHRoaXMuY29udGVudExpc3QudG9BcnJheSgpWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFRhYiA9IHNlbGVjdGVkX2luZGV4ID0+IHtcclxuICAgIF8uZWFjaCh0aGlzLmNvbnRlbnRMaXN0LnRvQXJyYXkoKSwgKHRhYiwgaSkgPT4ge1xyXG4gICAgICB0YWIuYWN0aXZlID0gaSA9PT0gc2VsZWN0ZWRfaW5kZXg7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuYWN0aXZlVGFiID0gXy5maW5kKHRoaXMuY29udGVudExpc3QudG9BcnJheSgpLCBbJ2FjdGl2ZScsIHRydWVdKTtcclxuICB9O1xyXG59XHJcbiJdfQ==