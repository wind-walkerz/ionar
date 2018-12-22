/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { rotate_trigger } from '@aurora-ngx/animations';
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
                template: "<div id=\"value\">\r\n    <span *ngIf=\"!label\">Please select</span>\r\n    <span *ngIf=\"label\">{{label}}</span>\r\n</div>\r\n\r\n<div id=\"icon\" [@rotate]=\"{\r\n    value: show_menu ? 'animated' : 'default',\r\n    params: { deg: 90 }\r\n    }\">\r\n    <i class=\"fas fa-angle-right\"></i>\r\n</div>\r\n",
                animations: [rotate_trigger],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbInVpL2NvbXBvbmVudHMvc2VsZWN0L2NvbXBvbmVudHMvY29udHJvbC9jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBNkIsTUFBTSxlQUFlLENBQUM7QUFDckcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBU3hELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7SUFJM0IsWUFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUgzQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFVBQUssR0FBRyxJQUFJLENBQUM7UUFTUCxhQUFRLEdBQUcsQ0FBQyxDQUFDO0lBTjVCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixrVUFBdUM7Z0JBRXZDLFVBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQzs7YUFDN0I7Ozs7WUFUbUIsVUFBVTs7O3dCQVczQixLQUFLO29CQUNMLEtBQUs7dUJBU0wsV0FBVzs7OztJQVZaLHFDQUEyQjs7SUFDM0IsaUNBQXNCOztJQVN0QixvQ0FBNEI7Ozs7O0lBUGhCLGdDQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkluaXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHJvdGF0ZV90cmlnZ2VyIH0gZnJvbSAnQGF1cm9yYS1uZ3gvYW5pbWF0aW9ucyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb250cm9sJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY29udHJvbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29udHJvbC5jb21wb25lbnQuc2NzcyddLFxyXG4gIGFuaW1hdGlvbnM6IFtyb3RhdGVfdHJpZ2dlcl1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpIHNob3dfbWVudSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGxhYmVsID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlUmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuZVJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoKSB0YWJpbmRleCA9IDA7XHJcblxyXG59XHJcbiJdfQ==