/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild } from '@angular/core';
import { PanelComponent } from './components/panel.component';
import { HeaderComponent } from './components/header.component';
import { ContentComponent } from './components/content.component';
import { untilDestroyed } from '@ionar/utility';
var CollapsibleComponent = /** @class */ (function () {
    function CollapsibleComponent() {
        this.single = false;
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    CollapsibleComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._panelComp && (!this._headerComp || !this._contentComp)) {
            throw new Error("'collapse-header' or 'collapse-content'  cannot be found!");
        }
        if (!this._panelComp) {
            this.single = true;
            this._headerComp.toggle.pipe(untilDestroyed(this)).subscribe(function () {
                _this._contentComp.collapsed = !_this._contentComp.collapsed;
                _this._contentComp.ngOnChanges();
            });
        }
    };
    /**
     * @return {?}
     */
    CollapsibleComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    CollapsibleComponent.decorators = [
        { type: Component, args: [{
                    selector: 'io-collapsible',
                    template: "\n      <ng-container *ngIf=\"!single\">\n          <ng-content select=\"collapse-panel\"></ng-content>\n      </ng-container>\n\n      <ng-container *ngIf=\"single\">\n          <ng-content select=\"collapse-header\"></ng-content>\n\n          <ng-content select=\"collapse-content\"></ng-content>\n      </ng-container>\n  ",
                    styles: [":host{display:flex;flex-direction:column}:host ::ng-deep collapse-panel{background-color:#fff;border:1px solid rgba(0,0,0,.16);border-radius:.4rem;box-shadow:0 .3rem .6rem rgba(0,0,0,.16)}:host ::ng-deep collapse-header{border-bottom:1px solid rgba(0,0,0,.16);cursor:pointer;display:flex;align-items:center;font-size:2rem;font-weight:600;margin:.1rem 0;padding:.6rem 1rem}:host ::ng-deep collapse-header.collapsed{border-bottom:0}:host ::ng-deep collapse-content{padding:2rem}"]
                }] }
    ];
    /** @nocollapse */
    CollapsibleComponent.ctorParameters = function () { return []; };
    CollapsibleComponent.propDecorators = {
        _panelComp: [{ type: ContentChild, args: [PanelComponent,] }],
        _headerComp: [{ type: ContentChild, args: [HeaderComponent,] }],
        _contentComp: [{ type: ContentChild, args: [ContentComponent,] }]
    };
    return CollapsibleComponent;
}());
export { CollapsibleComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CollapsibleComponent.prototype._panelComp;
    /**
     * @type {?}
     * @private
     */
    CollapsibleComponent.prototype._headerComp;
    /**
     * @type {?}
     * @private
     */
    CollapsibleComponent.prototype._contentComp;
    /** @type {?} */
    CollapsibleComponent.prototype.single;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2libGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBSVQsWUFBWSxFQUdiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2hEO0lBMEJFO1FBRkEsV0FBTSxHQUFZLEtBQUssQ0FBQztJQUd4QixDQUFDO0lBRUQsd0hBQXdIOzs7OztJQUV4SCx1Q0FBUTs7Ozs7SUFBUjtRQUFBLGlCQWFDO1FBWkMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDakUsTUFBTSxJQUFJLEtBQUssQ0FBQywyREFBMkQsQ0FBQyxDQUFDO1NBQzlFO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDM0QsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztnQkFDM0QsS0FBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztTQUNKO0lBRUgsQ0FBQzs7OztJQUVELDBDQUFXOzs7SUFBWDtJQUNBLENBQUM7O2dCQS9DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLHVVQVVUOztpQkFFRjs7Ozs7NkJBS0UsWUFBWSxTQUFDLGNBQWM7OEJBRTNCLFlBQVksU0FBQyxlQUFlOytCQUM1QixZQUFZLFNBQUMsZ0JBQWdCOztJQThCaEMsMkJBQUM7Q0FBQSxBQXBERCxJQW9EQztTQXJDWSxvQkFBb0I7Ozs7OztJQUkvQiwwQ0FBaUQ7Ozs7O0lBRWpELDJDQUFtRDs7Ozs7SUFDbkQsNENBQXFEOztJQUVyRCxzQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDb250ZW50Q2hpbGQsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50UmVmLCBUZW1wbGF0ZVJlZiwgQWZ0ZXJWaWV3SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhbmVsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDb250ZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlbnQuY29tcG9uZW50JztcbmltcG9ydCB7IHVudGlsRGVzdHJveWVkIH0gZnJvbSAnQGlvbmFyL3V0aWxpdHknO1xuaW1wb3J0IHsgQ29udGVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyL3NyYy9yZW5kZXIzL3IzX2FzdCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lvLWNvbGxhcHNpYmxlJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc2luZ2xlXCI+XG4gICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiY29sbGFwc2UtcGFuZWxcIj48L25nLWNvbnRlbnQ+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNpbmdsZVwiPlxuICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImNvbGxhcHNlLWhlYWRlclwiPjwvbmctY29udGVudD5cblxuICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImNvbGxhcHNlLWNvbnRlbnRcIj48L25nLWNvbnRlbnQ+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgYCxcbiAgc3R5bGVVcmxzOiBbJy4vY29sbGFwc2libGUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xsYXBzaWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cblxuICBAQ29udGVudENoaWxkKFBhbmVsQ29tcG9uZW50KSBwcml2YXRlIF9wYW5lbENvbXA7XG5cbiAgQENvbnRlbnRDaGlsZChIZWFkZXJDb21wb25lbnQpIHByaXZhdGUgX2hlYWRlckNvbXA7XG4gIEBDb250ZW50Q2hpbGQoQ29udGVudENvbXBvbmVudCkgcHJpdmF0ZSBfY29udGVudENvbXA7XG5cbiAgc2luZ2xlOiBCb29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuX3BhbmVsQ29tcCAmJiAoIXRoaXMuX2hlYWRlckNvbXAgfHwgIXRoaXMuX2NvbnRlbnRDb21wKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAnY29sbGFwc2UtaGVhZGVyJyBvciAnY29sbGFwc2UtY29udGVudCcgIGNhbm5vdCBiZSBmb3VuZCFgKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3BhbmVsQ29tcCkge1xuICAgICAgdGhpcy5zaW5nbGUgPSB0cnVlO1xuICAgICAgdGhpcy5faGVhZGVyQ29tcC50b2dnbGUucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fY29udGVudENvbXAuY29sbGFwc2VkID0gIXRoaXMuX2NvbnRlbnRDb21wLmNvbGxhcHNlZDtcbiAgICAgICAgdGhpcy5fY29udGVudENvbXAubmdPbkNoYW5nZXMoKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gIH1cblxuXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cblxufVxuIl19