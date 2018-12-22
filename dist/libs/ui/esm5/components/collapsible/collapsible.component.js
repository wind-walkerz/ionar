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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2libGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBSVQsWUFBWSxFQUdiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2hEO0lBMEJFO1FBRkEsV0FBTSxHQUFZLEtBQUssQ0FBQztJQUd4QixDQUFDO0lBRUQsd0hBQXdIOzs7OztJQUV4SCx1Q0FBUTs7Ozs7SUFBUjtRQUFBLGlCQWFDO1FBWkMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDakUsTUFBTSxJQUFJLEtBQUssQ0FBQywyREFBMkQsQ0FBQyxDQUFDO1NBQzlFO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDM0QsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztnQkFDM0QsS0FBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztTQUNKO0lBRUgsQ0FBQzs7OztJQUVELDBDQUFXOzs7SUFBWDtJQUNBLENBQUM7O2dCQS9DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLHVVQVVUOztpQkFFRjs7Ozs7NkJBS0UsWUFBWSxTQUFDLGNBQWM7OEJBRTNCLFlBQVksU0FBQyxlQUFlOytCQUM1QixZQUFZLFNBQUMsZ0JBQWdCOztJQThCaEMsMkJBQUM7Q0FBQSxBQXBERCxJQW9EQztTQXJDWSxvQkFBb0I7Ozs7OztJQUkvQiwwQ0FBaUQ7Ozs7O0lBRWpELDJDQUFtRDs7Ozs7SUFDbkQsNENBQXFEOztJQUVyRCxzQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBDb21wb25lbnRSZWYsIFRlbXBsYXRlUmVmLCBBZnRlclZpZXdJbml0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhbmVsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhbmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb250ZW50LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHVudGlsRGVzdHJveWVkIH0gZnJvbSAnQGlvbmFyL3V0aWxpdHknO1xyXG5pbXBvcnQgeyBDb250ZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXIvc3JjL3JlbmRlcjMvcjNfYXN0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaW8tY29sbGFwc2libGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc2luZ2xlXCI+XHJcbiAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJjb2xsYXBzZS1wYW5lbFwiPjwvbmctY29udGVudD5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2luZ2xlXCI+XHJcbiAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJjb2xsYXBzZS1oZWFkZXJcIj48L25nLWNvbnRlbnQ+XHJcblxyXG4gICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiY29sbGFwc2UtY29udGVudFwiPjwvbmctY29udGVudD5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgYCxcclxuICBzdHlsZVVybHM6IFsnLi9jb2xsYXBzaWJsZS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb2xsYXBzaWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIEBDb250ZW50Q2hpbGQoUGFuZWxDb21wb25lbnQpIHByaXZhdGUgX3BhbmVsQ29tcDtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChIZWFkZXJDb21wb25lbnQpIHByaXZhdGUgX2hlYWRlckNvbXA7XHJcbiAgQENvbnRlbnRDaGlsZChDb250ZW50Q29tcG9uZW50KSBwcml2YXRlIF9jb250ZW50Q29tcDtcclxuXHJcbiAgc2luZ2xlOiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKCF0aGlzLl9wYW5lbENvbXAgJiYgKCF0aGlzLl9oZWFkZXJDb21wIHx8ICF0aGlzLl9jb250ZW50Q29tcCkpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGAnY29sbGFwc2UtaGVhZGVyJyBvciAnY29sbGFwc2UtY29udGVudCcgIGNhbm5vdCBiZSBmb3VuZCFgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuX3BhbmVsQ29tcCkge1xyXG4gICAgICB0aGlzLnNpbmdsZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuX2hlYWRlckNvbXAudG9nZ2xlLnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fY29udGVudENvbXAuY29sbGFwc2VkID0gIXRoaXMuX2NvbnRlbnRDb21wLmNvbGxhcHNlZDtcclxuICAgICAgICB0aGlzLl9jb250ZW50Q29tcC5uZ09uQ2hhbmdlcygpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTWFpbiBGdW5jdGlvbnMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG59XHJcbiJdfQ==