/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostBinding, Input } from '@angular/core';
export class ControlComponent {
    /**
     * @param {?} eRef
     */
    constructor(eRef) {
        this.eRef = eRef;
        this.show_menu = false;
        this.label = null;
        this.tabindex = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.eRef.nativeElement.focus();
    }
}
ControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'control',
                template: "<div id=\"value\">\n    <span *ngIf=\"!label\">Please select</span>\n    <span *ngIf=\"label\">{{label}}</span>\n</div>\n\n<div id=\"icon\">\n    <i class=\"fas fa-angle-right\"></i>\n</div>\n",
                styles: [":host{background-color:#fff;border-radius:5px;box-sizing:border-box;border:1px solid #d9d9d9;cursor:pointer;display:flex;align-items:center;justify-content:space-between;font-size:1.5rem;outline:0;padding:0 1rem;transition:.3s cubic-bezier(.645,.045,.355,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%;height:40px;z-index:1}:host:focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff}:host .fa-angle-right{font-size:2rem}"]
            }] }
];
/** @nocollapse */
ControlComponent.ctorParameters = () => [
    { type: ElementRef }
];
ControlComponent.propDecorators = {
    show_menu: [{ type: Input }],
    label: [{ type: Input }],
    tabindex: [{ type: HostBinding }]
};
if (false) {
    /** @type {?} */
    ControlComponent.prototype.show_menu;
    /** @type {?} */
    ControlComponent.prototype.label;
    /** @type {?} */
    ControlComponent.prototype.tabindex;
    /**
     * @type {?}
     * @private
     */
    ControlComponent.prototype.eRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbInVpL2NvbXBvbmVudHMvc2VsZWN0L2NvbXBvbmVudHMvY29udHJvbC9jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBNkIsTUFBTSxlQUFlLENBQUM7QUFVckcsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUkzQixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBSDNCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsVUFBSyxHQUFHLElBQUksQ0FBQztRQVNQLGFBQVEsR0FBRyxDQUFDLENBQUM7SUFONUIsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7WUFmRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLDRNQUF1Qzs7YUFHeEM7Ozs7WUFUbUIsVUFBVTs7O3dCQVczQixLQUFLO29CQUNMLEtBQUs7dUJBU0wsV0FBVzs7OztJQVZaLHFDQUEyQjs7SUFDM0IsaUNBQXNCOztJQVN0QixvQ0FBNEI7Ozs7O0lBUGhCLGdDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb250cm9sJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jb250cm9sLmNvbXBvbmVudC5zY3NzJ10sXG5cbn0pXG5leHBvcnQgY2xhc3MgQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIHNob3dfbWVudSA9IGZhbHNlO1xuICBASW5wdXQoKSBsYWJlbCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlUmVmOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmVSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCkgdGFiaW5kZXggPSAwO1xuXG59XG4iXX0=