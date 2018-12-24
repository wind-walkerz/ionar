/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding } from '@angular/core';
var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.collapsed = false;
        ///-----------------------------------------------  Main Functions  -----------------------------------------------///
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ContentComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
        this.display = this.collapsed ? 'none' : 'flex';
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ContentComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.display = this.collapsed ? 'none' : 'flex';
    };
    /**
     * @return {?}
     */
    ContentComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    ContentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'collapse-content',
                    template: "\n      <ng-content></ng-content>"
                }] }
    ];
    ContentComponent.propDecorators = {
        display: [{ type: HostBinding, args: ['style.display',] }]
    };
    return ContentComponent;
}());
export { ContentComponent };
if (false) {
    /** @type {?} */
    ContentComponent.prototype.collapsed;
    /** @type {?} */
    ContentComponent.prototype.display;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2NvbGxhcHNpYmxlL2NvbXBvbmVudHMvY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLFdBQVcsRUFBZ0MsTUFBTSxlQUFlLENBQUM7QUFFeEc7SUFBQTtRQU9FLGtIQUFrSDs7UUFFbEgsY0FBUyxHQUFZLEtBQUssQ0FBQztRQW9CM0Isc0hBQXNIO0lBRXhILENBQUM7SUFqQkMsd0hBQXdIOzs7OztJQUd4SCxtQ0FBUTs7Ozs7SUFBUjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxzQ0FBVzs7OztJQUFYLFVBQVksT0FBTztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7SUFDQSxDQUFDOztnQkExQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxtQ0FDb0I7aUJBQy9COzs7MEJBT0UsV0FBVyxTQUFDLGVBQWU7O0lBb0I5Qix1QkFBQztDQUFBLEFBL0JELElBK0JDO1NBMUJZLGdCQUFnQjs7O0lBSTNCLHFDQUEyQjs7SUFFM0IsbUNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgSG9zdEJpbmRpbmcsIE9uQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29sbGFwc2UtY29udGVudCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+YFxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG5cbiAgY29sbGFwc2VkOiBCb29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5kaXNwbGF5JykgZGlzcGxheTogc3RyaW5nO1xuXG5cbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG5cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmRpc3BsYXkgPSB0aGlzLmNvbGxhcHNlZCA/ICdub25lJyA6ICdmbGV4JztcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLmRpc3BsYXkgPSB0aGlzLmNvbGxhcHNlZCA/ICdub25lJyA6ICdmbGV4JztcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICB9XG5cblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTWFpbiBGdW5jdGlvbnMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG5cbn1cbiJdfQ==