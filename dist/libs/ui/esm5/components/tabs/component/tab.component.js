"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var label_component_1 = require("./label.component");
var content_component_1 = require("./content.component");
var TabComponent = /** @class */ (function () {
    function TabComponent() {
        this.active = false;
    }
    /**
     * @return {?}
     */
    TabComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.label && !this._labelComp) {
            throw new Error("Missing Tab's label");
        }
        if ((this._labelComp && !this._contentComp) || (!this._labelComp && this._contentComp))
            throw new Error("Missing " + ((!this._labelComp && this._contentComp) ? "<tab-label></tab-label>" : "<tab-content></tab-content>"));
    };
    /**
     * @return {?}
     */
    TabComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    TabComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'tab',
                    template: "\n      <ng-template #tab>\n          <ng-content></ng-content>\n      </ng-template>\n  "
                }] }
    ];
    /** @nocollapse */
    TabComponent.ctorParameters = function () { return []; };
    TabComponent.propDecorators = {
        label: [{ type: core_1.Input }],
        _tabTemplateRef: [{ type: core_1.ViewChild, args: ['tab', { read: core_1.TemplateRef },] }],
        _labelComp: [{ type: core_1.ContentChild, args: [label_component_1.TabLabelComponent,] }],
        _contentComp: [{ type: core_1.ContentChild, args: [content_component_1.TabContentComponent,] }]
    };
    return TabComponent;
}());
exports.TabComponent = TabComponent;
if (false) {
    /** @type {?} */
    TabComponent.prototype.label;
    /** @type {?} */
    TabComponent.prototype._tabTemplateRef;
    /** @type {?} */
    TabComponent.prototype._labelComp;
    /** @type {?} */
    TabComponent.prototype._contentComp;
    /** @type {?} */
    TabComponent.prototype.active;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGFicy9jb21wb25lbnQvdGFiLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzQ0FTdUI7QUFDdkIscURBQXNEO0FBQ3RELHlEQUEwRDtBQUUxRDtJQWtCRTtRQUZBLFdBQU0sR0FBWSxLQUFLLENBQUM7SUFHeEIsQ0FBQzs7OztJQUVELCtCQUFROzs7SUFBUjtRQUVFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQyxNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUM7U0FDeEM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3BGLE1BQU0sSUFBSSxLQUFLLENBQUMsY0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQyw2QkFBNkIsQ0FBRSxDQUFDLENBQUM7SUFFdEksQ0FBQzs7OztJQUVELHNDQUFlOzs7SUFBZjtJQUVBLENBQUM7O2dCQWxDRixnQkFBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxLQUFLO29CQUNmLFFBQVEsRUFBRSwyRkFJVDtpQkFDRjs7Ozs7d0JBRUUsWUFBSztrQ0FFTCxnQkFBUyxTQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxrQkFBVyxFQUFFOzZCQUN0QyxtQkFBWSxTQUFDLG1DQUFpQjsrQkFDOUIsbUJBQVksU0FBQyx1Q0FBbUI7O0lBc0JuQyxtQkFBQztDQUFBLEFBbkNELElBbUNDO0FBM0JZLG9DQUFZOzs7SUFDdkIsNkJBQW9COztJQUVwQix1Q0FBMkU7O0lBQzNFLGtDQUErRDs7SUFDL0Qsb0NBQXFFOztJQUdyRSw4QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUYWJMYWJlbENvbXBvbmVudCB9IGZyb20gJy4vbGFiZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVGFiQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0YWInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxuZy10ZW1wbGF0ZSAjdGFiPlxyXG4gICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L25nLXRlbXBsYXRlPlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XHJcbiAgQElucHV0KCkgbGFiZWw6IGFueTtcclxuXHJcbiAgQFZpZXdDaGlsZCgndGFiJywgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBfdGFiVGVtcGxhdGVSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQENvbnRlbnRDaGlsZChUYWJMYWJlbENvbXBvbmVudCkgX2xhYmVsQ29tcDogVGFiTGFiZWxDb21wb25lbnQ7XHJcbiAgQENvbnRlbnRDaGlsZChUYWJDb250ZW50Q29tcG9uZW50KSBfY29udGVudENvbXA6IFRhYkNvbnRlbnRDb21wb25lbnQ7XHJcblxyXG5cclxuICBhY3RpdmU6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICBpZiAoIXRoaXMubGFiZWwgJiYgIXRoaXMuX2xhYmVsQ29tcCkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgVGFiJ3MgbGFiZWxgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoKHRoaXMuX2xhYmVsQ29tcCAmJiAhdGhpcy5fY29udGVudENvbXApIHx8ICghdGhpcy5fbGFiZWxDb21wICYmIHRoaXMuX2NvbnRlbnRDb21wKSlcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBNaXNzaW5nICR7KCF0aGlzLl9sYWJlbENvbXAgJiYgdGhpcy5fY29udGVudENvbXApID8gYDx0YWItbGFiZWw+PC90YWItbGFiZWw+YCA6IGA8dGFiLWNvbnRlbnQ+PC90YWItY29udGVudD5gfWApO1xyXG5cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG59Il19