/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild } from '@angular/core';
import { HeaderComponent } from './header.component';
import { untilDestroyed } from '@ionar/utility';
import { ContentComponent } from './content.component';
var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    PanelComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._headerComp || !this._contentComp) {
            throw new Error("'collapse-header' or 'collapse-content'  cannot be found!");
        }
        this._headerComp.toggle.pipe(untilDestroyed(this)).subscribe(function () {
            _this._contentComp.collapsed = !_this._contentComp.collapsed;
            _this._contentComp.ngOnChanges();
        });
    };
    /**
     * @return {?}
     */
    PanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    PanelComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    PanelComponent.decorators = [
        { type: Component, args: [{
                    selector: 'collapse-panel',
                    template: "\n      <ng-content select=\"collapse-header\"></ng-content>\n\n      <ng-content select=\"collapse-content\"></ng-content>\n\n  "
                }] }
    ];
    /** @nocollapse */
    PanelComponent.ctorParameters = function () { return []; };
    PanelComponent.propDecorators = {
        _headerComp: [{ type: ContentChild, args: [HeaderComponent,] }],
        _contentComp: [{ type: ContentChild, args: [ContentComponent,] }]
    };
    return PanelComponent;
}());
export { PanelComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PanelComponent.prototype._headerComp;
    /**
     * @type {?}
     * @private
     */
    PanelComponent.prototype._contentComp;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9jb2xsYXBzaWJsZS9jb21wb25lbnRzL3BhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFJVCxZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RDtJQWdCRTtJQUNBLENBQUM7SUFHRCx3SEFBd0g7Ozs7O0lBR3hILGlDQUFROzs7OztJQUFSO1FBQUEsaUJBVUM7UUFSQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDM0MsTUFBTSxJQUFJLEtBQUssQ0FBQywyREFBMkQsQ0FBQyxDQUFDO1NBQzlFO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUMzRCxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsb0NBQVc7OztJQUFYO0lBQ0EsQ0FBQzs7OztJQUVELHdDQUFlOzs7SUFBZjtJQUdBLENBQUM7O2dCQXpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLG1JQUtUO2lCQUNGOzs7Ozs4QkFLRSxZQUFZLFNBQUMsZUFBZTsrQkFDNUIsWUFBWSxTQUFDLGdCQUFnQjs7SUFnQ2hDLHFCQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7U0FyQ1ksY0FBYzs7Ozs7O0lBSXpCLHFDQUFtRDs7Ozs7SUFDbkQsc0NBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29udGVudENoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9oZWFkZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgdW50aWxEZXN0cm95ZWQgfSBmcm9tICdAaW9uYXIvdXRpbGl0eSc7XG5pbXBvcnQgeyBDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb250ZW50LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbGxhcHNlLXBhbmVsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImNvbGxhcHNlLWhlYWRlclwiPjwvbmctY29udGVudD5cblxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiY29sbGFwc2UtY29udGVudFwiPjwvbmctY29udGVudD5cblxuICBgXG59KVxuZXhwb3J0IGNsYXNzIFBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuXG4gIEBDb250ZW50Q2hpbGQoSGVhZGVyQ29tcG9uZW50KSBwcml2YXRlIF9oZWFkZXJDb21wO1xuICBAQ29udGVudENoaWxkKENvbnRlbnRDb21wb25lbnQpIHByaXZhdGUgX2NvbnRlbnRDb21wO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cblxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgaWYgKCF0aGlzLl9oZWFkZXJDb21wIHx8ICF0aGlzLl9jb250ZW50Q29tcCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAnY29sbGFwc2UtaGVhZGVyJyBvciAnY29sbGFwc2UtY29udGVudCcgIGNhbm5vdCBiZSBmb3VuZCFgKTtcbiAgICB9XG5cbiAgICB0aGlzLl9oZWFkZXJDb21wLnRvZ2dsZS5waXBlKHVudGlsRGVzdHJveWVkKHRoaXMpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5fY29udGVudENvbXAuY29sbGFwc2VkID0gIXRoaXMuX2NvbnRlbnRDb21wLmNvbGxhcHNlZDtcbiAgICAgIHRoaXMuX2NvbnRlbnRDb21wLm5nT25DaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcblxuXG4gIH1cblxuXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cblxufVxuIl19