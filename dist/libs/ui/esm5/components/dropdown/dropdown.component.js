/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, HostListener } from '@angular/core';
import { MenuComponent } from './components/menu.component';
import { ToggleComponent } from './components/toggle.component';
import { untilDestroyed } from '@ionar/utility';
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
        this._menuComp.visibilityChange$.pipe(untilDestroyed(this)).subscribe(function (visible) {
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
        { type: Component, args: [{
                    selector: 'io-dropdown',
                    template: "\n      <ng-content select=\"dropdown-toggle\"></ng-content>\n\n      <ng-container *ngIf=\"showDropdownMenu && visible\">\n          <ng-content select=\"dropdown-menu\"></ng-content>\n      </ng-container>\n  ",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    DropdownComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    DropdownComponent.propDecorators = {
        _menuComp: [{ type: ContentChild, args: [MenuComponent,] }],
        _toggleComp: [{ type: ContentChild, args: [ToggleComponent,] }],
        onClickOutside: [{ type: HostListener, args: ['document:click', ['$event'],] }]
    };
    return DropdownComponent;
}());
export { DropdownComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFLYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRDtJQStCRSwyQkFBb0IsTUFBa0IsRUFBVSxFQUFxQjtRQUFqRCxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7O1FBakJyRSxvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUVqQyxZQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztJQWNsQyxDQUFDOzs7OztJQVBELDBDQUFjOzs7O0lBRGQsVUFDZSxDQUFRO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDM0csSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztTQUMvQjtJQUNILENBQUM7SUFLRCx3SEFBd0g7Ozs7O0lBRXhILG9DQUFROzs7OztJQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxPQUFPO1lBQzNFLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBRXZCLEtBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsMkNBQWU7OztJQUFmO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7WUFDaEMsS0FBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELHVDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtJQUVsQyxDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYO0lBQ0EsQ0FBQzs7Z0JBekRGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLHFOQU1UO29CQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFyQkMsVUFBVTtnQkFIVixpQkFBaUI7Ozs0QkFrQ2hCLFlBQVksU0FBQyxhQUFhOzhCQUUxQixZQUFZLFNBQUMsZUFBZTtpQ0FFNUIsWUFBWSxTQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDOztJQW9DNUMsd0JBQUM7Q0FBQSxBQTVERCxJQTREQztTQWpEWSxpQkFBaUI7OztJQUc1Qiw0Q0FBaUM7O0lBRWpDLG9DQUF5Qjs7SUFFekIsNkNBQWtDOzs7OztJQUVsQyxzQ0FBK0M7Ozs7O0lBRS9DLHdDQUFtRDs7Ozs7SUFTdkMsbUNBQTBCOzs7OztJQUFFLCtCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWVudUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9tZW51LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvZ2dsZUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy90b2dnbGUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgdW50aWxEZXN0cm95ZWQgfSBmcm9tICdAaW9uYXIvdXRpbGl0eSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lvLWRyb3Bkb3duJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJkcm9wZG93bi10b2dnbGVcIj48L25nLWNvbnRlbnQ+XHJcblxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd0Ryb3Bkb3duTWVudSAmJiB2aXNpYmxlXCI+XHJcbiAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJkcm9wZG93bi1tZW51XCI+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuICB2aWV3SW5pdGlhbGl6ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgdmlzaWJsZTogQm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBzaG93RHJvcGRvd25NZW51OiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoTWVudUNvbXBvbmVudCkgcHJpdmF0ZSBfbWVudUNvbXA7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoVG9nZ2xlQ29tcG9uZW50KSBwcml2YXRlIF90b2dnbGVDb21wO1xyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgb25DbGlja091dHNpZGUoZTogRXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5fZWxSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyhlLnRhcmdldCkgJiYgIXRoaXMuX21lbnVDb21wLmVsUmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XHJcbiAgICAgIHRoaXMuc2hvd0Ryb3Bkb3duTWVudSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgfVxyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLl9tZW51Q29tcC52aXNpYmlsaXR5Q2hhbmdlJC5waXBlKHVudGlsRGVzdHJveWVkKHRoaXMpKS5zdWJzY3JpYmUodmlzaWJsZSA9PiB7XHJcbiAgICAgIHRoaXMudmlzaWJsZSA9IHZpc2libGU7XHJcblxyXG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpZXdJbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICB0aGlzLl90b2dnbGVDb21wLmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNob3dEcm9wZG93bk1lbnUgPSAhdGhpcy5zaG93RHJvcGRvd25NZW51O1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=