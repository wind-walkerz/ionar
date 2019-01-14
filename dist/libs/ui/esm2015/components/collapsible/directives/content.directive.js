/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Directive, Host, Optional, SkipSelf, TemplateRef, ViewContainerRef } from '@angular/core';
import { CollapsibleDirective } from './collapsible.directive';
import { untilDestroyed } from '@ionar/utility';
export class ContentDirective {
    /**
     * @param {?} parent
     * @param {?} cd
     * @param {?} _vcRef
     * @param {?} _templateRef
     */
    constructor(parent, cd, _vcRef, _templateRef) {
        this.cd = cd;
        this._vcRef = _vcRef;
        this._templateRef = _templateRef;
        this._parent = parent;
    }
    ///-----------------------------------------------  Variables   -----------------------------------------------///
    /**
     * @param {?} collapsed
     * @return {?}
     */
    set collapsed(collapsed) {
        if (collapsed) {
            this._vcRef.clear();
        }
        else {
            this._vcRef.createEmbeddedView(this._templateRef);
        }
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ngOnInit() {
        this._vcRef.clear();
        this._parent.change$.pipe(untilDestroyed(this)).subscribe((collapsed) => {
            this.collapsed = collapsed;
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
ContentDirective.decorators = [
    { type: Directive, args: [{
                selector: '[collapseContent]'
            },] }
];
/** @nocollapse */
ContentDirective.ctorParameters = () => [
    { type: CollapsibleDirective, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] },
    { type: ChangeDetectorRef },
    { type: ViewContainerRef },
    { type: TemplateRef }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ContentDirective.prototype._parent;
    /**
     * @type {?}
     * @private
     */
    ContentDirective.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    ContentDirective.prototype._vcRef;
    /**
     * @type {?}
     * @private
     */
    ContentDirective.prototype._templateRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2NvbGxhcHNpYmxlL2RpcmVjdGl2ZXMvY29udGVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDb0IsaUJBQWlCLEVBQy9CLFNBQVMsRUFDcEIsSUFBSSxFQUtKLFFBQVEsRUFDUixRQUFRLEVBQUUsV0FBVyxFQUFFLGdCQUFnQixFQUN4QyxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPaEQsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7OztJQWUzQixZQUNrQyxNQUE0QixFQUNwRCxFQUFxQixFQUNyQixNQUF3QixFQUN4QixZQUE4QjtRQUY5QixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFFdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFDeEIsQ0FBQzs7Ozs7O0lBbEJELElBQUksU0FBUyxDQUFDLFNBQWtCO1FBQzlCLElBQUksU0FBUyxFQUFFO1lBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNyQjthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDOzs7OztJQWtCRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBa0IsRUFBRSxFQUFFO1lBQy9FLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQzs7OztJQUVELFdBQVc7SUFDWCxDQUFDOzs7WUF4Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7Ozs7WUFQUSxvQkFBb0IsdUJBd0J4QixRQUFRLFlBQUksSUFBSSxZQUFJLFFBQVE7WUFsQ04saUJBQWlCO1lBUW5CLGdCQUFnQjtZQUE3QixXQUFXOzs7Ozs7O0lBc0JyQixtQ0FBc0M7Ozs7O0lBS3BDLDhCQUE2Qjs7Ozs7SUFDN0Isa0NBQWdDOzs7OztJQUNoQyx3Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCwgRGlyZWN0aXZlLFxuICBIb3N0LFxuICBIb3N0QmluZGluZyxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbGxhcHNpYmxlRGlyZWN0aXZlIH0gZnJvbSAnLi9jb2xsYXBzaWJsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgdW50aWxEZXN0cm95ZWQgfSBmcm9tICdAaW9uYXIvdXRpbGl0eSc7XG5pbXBvcnQgeyBlbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvdGVzdGluZy9zcmMvYnJvd3Nlcl91dGlsJztcblxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY29sbGFwc2VDb250ZW50XSdcbn0pXG5leHBvcnQgY2xhc3MgQ29udGVudERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cblxuICBzZXQgY29sbGFwc2VkKGNvbGxhcHNlZDogQm9vbGVhbikge1xuICAgIGlmIChjb2xsYXBzZWQpIHtcbiAgICAgIHRoaXMuX3ZjUmVmLmNsZWFyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3ZjUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLl90ZW1wbGF0ZVJlZik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfcGFyZW50OiBDb2xsYXBzaWJsZURpcmVjdGl2ZTtcblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgQFNraXBTZWxmKCkgcGFyZW50OiBDb2xsYXBzaWJsZURpcmVjdGl2ZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF92Y1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PlxuICApIHtcbiAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gIH1cblxuXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5fdmNSZWYuY2xlYXIoKTtcbiAgICB0aGlzLl9wYXJlbnQuY2hhbmdlJC5waXBlKHVudGlsRGVzdHJveWVkKHRoaXMpKS5zdWJzY3JpYmUoKGNvbGxhcHNlZDogQm9vbGVhbikgPT4ge1xuICAgICAgdGhpcy5jb2xsYXBzZWQgPSBjb2xsYXBzZWQ7XG4gICAgfSk7XG5cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICB9XG5cblxufVxuIl19