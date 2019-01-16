"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
        { type: core_1.Component, args: [{
                    selector: 'tab-content',
                    template: "\n      <ng-template #content>\n          <ng-content></ng-content>\n      </ng-template>\n    \n    <ng-container #vcRef>\n        \n    </ng-container>\n  "
                }] }
    ];
    /** @nocollapse */
    TabContentComponent.ctorParameters = function () { return []; };
    TabContentComponent.propDecorators = {
        template: [{ type: core_1.Input }],
        _templateRef: [{ type: core_1.ViewChild, args: ['content', { read: core_1.TemplateRef },] }],
        _vcRef: [{ type: core_1.ViewChild, args: ['vcRef', { read: core_1.ViewContainerRef },] }]
    };
    return TabContentComponent;
}());
exports.TabContentComponent = TabContentComponent;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RhYnMvY29tcG9uZW50L2NvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNDQVN1QjtBQUV2QjtJQWtCRTtRQUFBLGlCQUNDO1FBZUQsZUFBVSxHQUFHO1lBRVgsSUFBSSxLQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNwQixLQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMvQztRQUNILENBQUMsQ0FBQztJQXJCRixDQUFDOzs7O0lBRUQsc0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7SUFFRCw2Q0FBZTs7O0lBQWY7SUFFQSxDQUFDOzs7OztJQUVELHlDQUFXOzs7O0lBQVgsVUFBWSxPQUFPO1FBQ2pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDOztnQkEvQkYsZ0JBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLCtKQVFUO2lCQUNGOzs7OzsyQkFHRSxZQUFLOytCQUNMLGdCQUFTLFNBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLGtCQUFXLEVBQUU7eUJBQzFDLGdCQUFTLFNBQUMsT0FBTyxFQUFFLEVBQUMsSUFBSSxFQUFFLHVCQUFnQixFQUFDOztJQTBCOUMsMEJBQUM7Q0FBQSxBQTFDRCxJQTBDQztBQTlCWSxrREFBbUI7OztJQUU5Qix1Q0FBb0M7O0lBQ3BDLDJDQUE0RTs7Ozs7SUFDNUUscUNBQThFOztJQWtCOUUseUNBTUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGFiLWNvbnRlbnQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjY29udGVudD5cclxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIFxyXG4gICAgPG5nLWNvbnRhaW5lciAjdmNSZWY+XHJcbiAgICAgICAgXHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAVmlld0NoaWxkKCdjb250ZW50JywgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBfdGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQFZpZXdDaGlsZCgndmNSZWYnLCB7cmVhZDogVmlld0NvbnRhaW5lclJlZn0pIHByaXZhdGUgX3ZjUmVmOiBWaWV3Q29udGFpbmVyUmVmXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmNyZWF0ZVZpZXcoKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLmNyZWF0ZVZpZXcoKTtcclxuICB9XHJcblxyXG5cclxuICBjcmVhdGVWaWV3ID0gKCkgPT4ge1xyXG5cclxuICAgIGlmICh0aGlzLnRlbXBsYXRlKSB7XHJcbiAgICAgIHRoaXMuX3ZjUmVmLmNsZWFyKCk7XHJcbiAgICAgIHRoaXMuX3ZjUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLnRlbXBsYXRlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxufSJdfQ==