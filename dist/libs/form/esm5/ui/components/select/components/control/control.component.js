/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { rotate_trigger } from '@aurora-ngx/animations';
var ControlComponent = /** @class */ (function () {
    function ControlComponent(eRef) {
        this.eRef = eRef;
        this.show_menu = false;
        this.label = null;
        this.tabindex = 0;
    }
    /**
     * @return {?}
     */
    ControlComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.eRef.nativeElement.focus();
    };
    ControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'control',
                    template: "<div id=\"value\">\r\n    <span *ngIf=\"!label\">Please select</span>\r\n    <span *ngIf=\"label\">{{label}}</span>\r\n</div>\r\n\r\n<div id=\"icon\" [@rotate]=\"{\r\n    value: show_menu ? 'animated' : 'default',\r\n    params: { deg: 90 }\r\n    }\">\r\n    <i class=\"fas fa-angle-right\"></i>\r\n</div>\r\n",
                    animations: [rotate_trigger],
                    styles: [":host{background-color:#fff;border-radius:5px;box-sizing:border-box;border:1px solid #d9d9d9;cursor:pointer;display:flex;align-items:center;justify-content:space-between;font-size:1.5rem;outline:0;padding:0 1rem;transition:.3s cubic-bezier(.645,.045,.355,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%;height:40px;z-index:1}:host:focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff}:host .fa-angle-right{font-size:2rem}"]
                }] }
    ];
    /** @nocollapse */
    ControlComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ControlComponent.propDecorators = {
        show_menu: [{ type: Input }],
        label: [{ type: Input }],
        tabindex: [{ type: HostBinding }]
    };
    return ControlComponent;
}());
export { ControlComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbInVpL2NvbXBvbmVudHMvc2VsZWN0L2NvbXBvbmVudHMvY29udHJvbC9jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBNkIsTUFBTSxlQUFlLENBQUM7QUFDckcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBR3hEO0lBVUUsMEJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFIM0IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBU1AsYUFBUSxHQUFHLENBQUMsQ0FBQztJQU41QixDQUFDOzs7O0lBRUQsbUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Z0JBZkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixrVUFBdUM7b0JBRXZDLFVBQVUsRUFBRSxDQUFDLGNBQWMsQ0FBQzs7aUJBQzdCOzs7O2dCQVRtQixVQUFVOzs7NEJBVzNCLEtBQUs7d0JBQ0wsS0FBSzsyQkFTTCxXQUFXOztJQUVkLHVCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FiWSxnQkFBZ0I7OztJQUMzQixxQ0FBMkI7O0lBQzNCLGlDQUFzQjs7SUFTdEIsb0NBQTRCOzs7OztJQVBoQixnQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyByb3RhdGVfdHJpZ2dlciB9IGZyb20gJ0BhdXJvcmEtbmd4L2FuaW1hdGlvbnMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29udHJvbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NvbnRyb2wuY29tcG9uZW50LnNjc3MnXSxcclxuICBhbmltYXRpb25zOiBbcm90YXRlX3RyaWdnZXJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBzaG93X21lbnUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBsYWJlbCA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZVJlZjogRWxlbWVudFJlZikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmVSZWYubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCkgdGFiaW5kZXggPSAwO1xyXG5cclxufVxyXG4iXX0=