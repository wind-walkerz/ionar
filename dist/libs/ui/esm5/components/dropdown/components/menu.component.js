/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
var MenuComponent = /** @class */ (function () {
    function MenuComponent(elRef) {
        this.elRef = elRef;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.visible = false;
        this.visibilityChange$ = new Subject();
        this.change = new EventEmitter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    MenuComponent.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.target instanceof HTMLElement)
            this.change.emit();
    };
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    MenuComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MenuComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.visibilityChange$.next(this.visible);
    };
    /**
     * @return {?}
     */
    MenuComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    MenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dropdown-menu',
                    template: "\n      <ng-content></ng-content>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["\n      :host {\n          display: flex;\n          flex-shrink: 0;\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    MenuComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    MenuComponent.propDecorators = {
        visible: [{ type: Input }],
        template: [{ type: Input }],
        tplRef: [{ type: ViewChild, args: ['tpl',] }],
        vcRef: [{ type: ViewChild, args: ['vc', { read: ViewContainerRef },] }],
        change: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return MenuComponent;
}());
export { MenuComponent };
if (false) {
    /** @type {?} */
    MenuComponent.prototype.visible;
    /** @type {?} */
    MenuComponent.prototype.template;
    /** @type {?} */
    MenuComponent.prototype.visibilityChange$;
    /** @type {?} */
    MenuComponent.prototype.tplRef;
    /** @type {?} */
    MenuComponent.prototype.vcRef;
    /** @type {?} */
    MenuComponent.prototype.change;
    /** @type {?} */
    MenuComponent.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2Ryb3Bkb3duL2NvbXBvbmVudHMvbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUN0QyxLQUFLLEVBRUcsTUFBTSxFQUNkLFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0I7SUFpQ0UsdUJBQW1CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7O1FBakIzQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBR2xDLHNCQUFpQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFLeEIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFVdEMsQ0FBQzs7Ozs7SUFQRCwrQkFBTzs7OztJQURQLFVBQ1EsQ0FBUTtRQUVkLElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBWSxXQUFXO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxRCxDQUFDO0lBTUQsd0hBQXdIOzs7OztJQUd4SCxnQ0FBUTs7Ozs7SUFBUjtJQUVBLENBQUM7Ozs7O0lBRUQsbUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzVDLENBQUM7Ozs7SUFFRCxtQ0FBVzs7O0lBQVg7SUFDQSxDQUFDOztnQkFoREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6QixRQUFRLEVBQUUsbUNBQ29CO29CQU85QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs2QkFOdEMsbUZBS1I7aUJBRUY7Ozs7Z0JBckJDLFVBQVU7OzswQkEwQlQsS0FBSzsyQkFDTCxLQUFLO3lCQUlMLFNBQVMsU0FBQyxLQUFLO3dCQUNmLFNBQVMsU0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7eUJBRTFDLE1BQU07MEJBRU4sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUEyQm5DLG9CQUFDO0NBQUEsQUFyREQsSUFxREM7U0F6Q1ksYUFBYTs7O0lBSXhCLGdDQUFrQzs7SUFDbEMsaUNBQW9DOztJQUVwQywwQ0FBa0M7O0lBRWxDLCtCQUEyQzs7SUFDM0MsOEJBQXFFOztJQUVyRSwrQkFBc0M7O0lBUzFCLDhCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LCBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZHJvcGRvd24tbWVudScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgICA6aG9zdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgIH1cclxuICBgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWVudUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgQElucHV0KCkgdmlzaWJsZTogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICB2aXNpYmlsaXR5Q2hhbmdlJCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3RwbCcpIHRwbFJlZjogVGVtcGxhdGVSZWY8YW55PjtcclxuICBAVmlld0NoaWxkKCd2YycsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZjtcclxuXHJcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIG9uQ2xpY2soZTogRXZlbnQpIHtcclxuXHJcbiAgICBpZiAoZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkgdGhpcy5jaGFuZ2UuZW1pdCgpO1xyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbFJlZjogRWxlbWVudFJlZikge1xyXG4gIH1cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLnZpc2liaWxpdHlDaGFuZ2UkLm5leHQodGhpcy52aXNpYmxlKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbn1cclxuIl19