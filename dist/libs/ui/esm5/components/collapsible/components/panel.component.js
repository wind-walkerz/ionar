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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9jb2xsYXBzaWJsZS9jb21wb25lbnRzL3BhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFJVCxZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUV2RDtJQWdCRTtJQUNBLENBQUM7SUFHRCx3SEFBd0g7Ozs7O0lBR3hILGlDQUFROzs7OztJQUFSO1FBQUEsaUJBVUM7UUFSQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDM0MsTUFBTSxJQUFJLEtBQUssQ0FBQywyREFBMkQsQ0FBQyxDQUFDO1NBQzlFO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztZQUMzRCxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1lBQzNELEtBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsb0NBQVc7OztJQUFYO0lBQ0EsQ0FBQzs7OztJQUVELHdDQUFlOzs7SUFBZjtJQUdBLENBQUM7O2dCQXpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLG1JQUtUO2lCQUNGOzs7Ozs4QkFLRSxZQUFZLFNBQUMsZUFBZTsrQkFDNUIsWUFBWSxTQUFDLGdCQUFnQjs7SUFnQ2hDLHFCQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7U0FyQ1ksY0FBYzs7Ozs7O0lBSXpCLHFDQUFtRDs7Ozs7SUFDbkQsc0NBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENvbnRlbnRDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgdW50aWxEZXN0cm95ZWQgfSBmcm9tICdAaW9uYXIvdXRpbGl0eSc7XHJcbmltcG9ydCB7IENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29sbGFwc2UtcGFuZWwnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImNvbGxhcHNlLWhlYWRlclwiPjwvbmctY29udGVudD5cclxuXHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImNvbGxhcHNlLWNvbnRlbnRcIj48L25nLWNvbnRlbnQ+XHJcblxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgQENvbnRlbnRDaGlsZChIZWFkZXJDb21wb25lbnQpIHByaXZhdGUgX2hlYWRlckNvbXA7XHJcbiAgQENvbnRlbnRDaGlsZChDb250ZW50Q29tcG9uZW50KSBwcml2YXRlIF9jb250ZW50Q29tcDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICBpZiAoIXRoaXMuX2hlYWRlckNvbXAgfHwgIXRoaXMuX2NvbnRlbnRDb21wKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJ2NvbGxhcHNlLWhlYWRlcicgb3IgJ2NvbGxhcHNlLWNvbnRlbnQnICBjYW5ub3QgYmUgZm91bmQhYCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5faGVhZGVyQ29tcC50b2dnbGUucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5fY29udGVudENvbXAuY29sbGFwc2VkID0gIXRoaXMuX2NvbnRlbnRDb21wLmNvbGxhcHNlZDtcclxuICAgICAgdGhpcy5fY29udGVudENvbXAubmdPbkNoYW5nZXMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcblxyXG5cclxuICB9XHJcblxyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTWFpbiBGdW5jdGlvbnMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG59XHJcbiJdfQ==