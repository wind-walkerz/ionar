/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding } from '@angular/core';
export class ContentComponent {
    constructor() {
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.collapsed = false;
        ///-----------------------------------------------  Main Functions  -----------------------------------------------///
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ngOnInit() {
        this.display = this.collapsed ? 'none' : 'flex';
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.display = this.collapsed ? 'none' : 'flex';
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
ContentComponent.decorators = [
    { type: Component, args: [{
                selector: 'collapse-content',
                template: `
      <ng-content></ng-content>`
            }] }
];
ContentComponent.propDecorators = {
    display: [{ type: HostBinding, args: ['style.display',] }]
};
if (false) {
    /** @type {?} */
    ContentComponent.prototype.collapsed;
    /** @type {?} */
    ContentComponent.prototype.display;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2NvbGxhcHNpYmxlL2NvbXBvbmVudHMvY29udGVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLFdBQVcsRUFBZ0MsTUFBTSxlQUFlLENBQUM7QUFPeEcsTUFBTSxPQUFPLGdCQUFnQjtJQUw3QjtRQU9FLGtIQUFrSDs7UUFFbEgsY0FBUyxHQUFZLEtBQUssQ0FBQztRQW9CM0Isc0hBQXNIO0lBRXhILENBQUM7Ozs7O0lBZEMsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDbEQsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBTztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCxXQUFXO0lBQ1gsQ0FBQzs7O1lBMUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Z0NBQ29CO2FBQy9COzs7c0JBT0UsV0FBVyxTQUFDLGVBQWU7Ozs7SUFGNUIscUNBQTJCOztJQUUzQixtQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBIb3N0QmluZGluZywgT25DaGFuZ2VzLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb2xsYXBzZS1jb250ZW50JyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5gXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cblxuICBjb2xsYXBzZWQ6IEJvb2xlYW4gPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmRpc3BsYXknKSBkaXNwbGF5OiBzdHJpbmc7XG5cblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cblxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuZGlzcGxheSA9IHRoaXMuY29sbGFwc2VkID8gJ25vbmUnIDogJ2ZsZXgnO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcyk6IHZvaWQge1xuICAgIHRoaXMuZGlzcGxheSA9IHRoaXMuY29sbGFwc2VkID8gJ25vbmUnIDogJ2ZsZXgnO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gIH1cblxuXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cblxufVxuIl19