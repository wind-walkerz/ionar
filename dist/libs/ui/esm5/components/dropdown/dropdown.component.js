"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var menu_component_1 = require("./components/menu.component");
var toggle_component_1 = require("./components/toggle.component");
var utility_1 = require("@ionar/utility");
var DropdownComponent = /** @class */ (function () {
    function DropdownComponent(_elRef, cd) {
        this._elRef = _elRef;
        this.cd = cd;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.viewInitialized = false;
        this.visible = false;
        this.showDropdownMenu = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    DropdownComponent.prototype.onClickOutside = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this._elRef.nativeElement.contains(e.target) && !this._menuComp.elRef.nativeElement.contains(e.target)) {
            this.showDropdownMenu = false;
        }
    };
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    DropdownComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._menuComp.visibilityChange$.pipe(utility_1.untilDestroyed(this)).subscribe(function (visible) {
            _this.visible = visible;
            _this.cd.markForCheck();
        });
    };
    /**
     * @return {?}
     */
    DropdownComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.viewInitialized = true;
        this._toggleComp.change.subscribe(function () {
            _this.showDropdownMenu = !_this.showDropdownMenu;
        });
        this._menuComp.change.subscribe(function () {
            _this.showDropdownMenu = !_this.showDropdownMenu;
        });
        this.cd.detectChanges();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DropdownComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    /**
     * @return {?}
     */
    DropdownComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    DropdownComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'io-dropdown',
                    template: "\n      <ng-content select=\"dropdown-toggle\"></ng-content>\n\n      <ng-container *ngIf=\"showDropdownMenu && visible\">\n          <ng-content select=\"dropdown-menu\"></ng-content>\n      </ng-container>\n  ",
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DropdownComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: core_1.ChangeDetectorRef }
    ]; };
    DropdownComponent.propDecorators = {
        _menuComp: [{ type: core_1.ContentChild, args: [menu_component_1.MenuComponent,] }],
        _toggleComp: [{ type: core_1.ContentChild, args: [toggle_component_1.ToggleComponent,] }],
        onClickOutside: [{ type: core_1.HostListener, args: ['document:click', ['$event'],] }]
    };
    return DropdownComponent;
}());
exports.DropdownComponent = DropdownComponent;
if (false) {
    /** @type {?} */
    DropdownComponent.prototype.viewInitialized;
    /** @type {?} */
    DropdownComponent.prototype.visible;
    /** @type {?} */
    DropdownComponent.prototype.showDropdownMenu;
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype._menuComp;
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype._toggleComp;
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype._elRef;
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0NBWXVCO0FBQ3ZCLDhEQUE0RDtBQUM1RCxrRUFBZ0U7QUFDaEUsMENBQWdEO0FBRWhEO0lBK0JFLDJCQUFvQixNQUFrQixFQUFVLEVBQXFCO1FBQWpELFdBQU0sR0FBTixNQUFNLENBQVk7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFtQjs7UUFqQnJFLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBRWpDLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIscUJBQWdCLEdBQVksS0FBSyxDQUFDO0lBY2xDLENBQUM7Ozs7O0lBUEQsMENBQWM7Ozs7SUFEZCxVQUNlLENBQVE7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMzRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQUtELHdIQUF3SDs7Ozs7SUFFeEgsb0NBQVE7Ozs7O0lBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHdCQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxPQUFPO1lBQzNFLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBRXZCLEtBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsMkNBQWU7OztJQUFmO1FBQUEsaUJBV0M7UUFWQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDaEMsS0FBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCx1Q0FBVzs7OztJQUFYLFVBQVksT0FBc0I7SUFFbEMsQ0FBQzs7OztJQUVELHVDQUFXOzs7SUFBWDtJQUNBLENBQUM7O2dCQTlERixnQkFBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QixRQUFRLEVBQUUscU5BTVQ7b0JBQ0QsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQXJCQyxpQkFBVTtnQkFIVix3QkFBaUI7Ozs0QkFrQ2hCLG1CQUFZLFNBQUMsOEJBQWE7OEJBRTFCLG1CQUFZLFNBQUMsa0NBQWU7aUNBRTVCLG1CQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBeUM1Qyx3QkFBQztDQUFBLEFBakVELElBaUVDO0FBdERZLDhDQUFpQjs7O0lBRzVCLDRDQUFpQzs7SUFFakMsb0NBQXlCOztJQUV6Qiw2Q0FBa0M7Ozs7O0lBRWxDLHNDQUErQzs7Ozs7SUFFL0Msd0NBQW1EOzs7OztJQVN2QyxtQ0FBMEI7Ozs7O0lBQUUsK0JBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGQsXHJcbiAgRWxlbWVudFJlZixcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL21lbnUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVG9nZ2xlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3RvZ2dsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB1bnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bpb25hci91dGlsaXR5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaW8tZHJvcGRvd24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImRyb3Bkb3duLXRvZ2dsZVwiPjwvbmctY29udGVudD5cclxuXHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93RHJvcGRvd25NZW51ICYmIHZpc2libGVcIj5cclxuICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImRyb3Bkb3duLW1lbnVcIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGAsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIERyb3Bkb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG4gIHZpZXdJbml0aWFsaXplZDogQm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICB2aXNpYmxlOiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHNob3dEcm9wZG93bk1lbnU6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChNZW51Q29tcG9uZW50KSBwcml2YXRlIF9tZW51Q29tcDtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChUb2dnbGVDb21wb25lbnQpIHByaXZhdGUgX3RvZ2dsZUNvbXA7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcclxuICBvbkNsaWNrT3V0c2lkZShlOiBFdmVudCkge1xyXG4gICAgaWYgKCF0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSAmJiAhdGhpcy5fbWVudUNvbXAuZWxSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpIHtcclxuICAgICAgdGhpcy5zaG93RHJvcGRvd25NZW51ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICB9XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuX21lbnVDb21wLnZpc2liaWxpdHlDaGFuZ2UkLnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZSh2aXNpYmxlID0+IHtcclxuICAgICAgdGhpcy52aXNpYmxlID0gdmlzaWJsZTtcclxuXHJcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudmlld0luaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgIHRoaXMuX3RvZ2dsZUNvbXAuY2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2hvd0Ryb3Bkb3duTWVudSA9ICF0aGlzLnNob3dEcm9wZG93bk1lbnU7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9tZW51Q29tcC5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5zaG93RHJvcGRvd25NZW51ID0gIXRoaXMuc2hvd0Ryb3Bkb3duTWVudTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==