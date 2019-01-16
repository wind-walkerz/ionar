"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
        { type: core_1.Component, args: [{
                    selector: 'control',
                    template: "<div id=\"value\">\n    <span *ngIf=\"!label\">Please select</span>\n    <span *ngIf=\"label\">{{label}}</span>\n</div>\n\n<div id=\"icon\">\n    <i class=\"fas fa-angle-right\"></i>\n</div>\n",
                    styles: [":host{background-color:#fff;border-radius:5px;box-sizing:border-box;border:1px solid #d9d9d9;cursor:pointer;display:flex;align-items:center;justify-content:space-between;font-size:1.5rem;outline:0;padding:0 1rem;transition:.3s cubic-bezier(.645,.045,.355,1);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:100%;height:40px;z-index:1}:host:focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff}:host .fa-angle-right{font-size:2rem}"]
                }] }
    ];
    /** @nocollapse */
    ControlComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef }
    ]; };
    ControlComponent.propDecorators = {
        show_menu: [{ type: core_1.Input }],
        label: [{ type: core_1.Input }],
        tabindex: [{ type: core_1.HostBinding }]
    };
    return ControlComponent;
}());
exports.ControlComponent = ControlComponent;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbInVpL2NvbXBvbmVudHMvc2VsZWN0L2NvbXBvbmVudHMvY29udHJvbC9jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzQ0FBcUc7QUFJckc7SUFVRSwwQkFBb0IsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUgzQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFVBQUssR0FBRyxJQUFJLENBQUM7UUFTUCxhQUFRLEdBQUcsQ0FBQyxDQUFDO0lBTjVCLENBQUM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQyxDQUFDOztnQkFmRixnQkFBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQiw0TUFBdUM7O2lCQUd4Qzs7OztnQkFUbUIsaUJBQVU7Ozs0QkFXM0IsWUFBSzt3QkFDTCxZQUFLOzJCQVNMLGtCQUFXOztJQUVkLHVCQUFDO0NBQUEsQUFuQkQsSUFtQkM7QUFiWSw0Q0FBZ0I7OztJQUMzQixxQ0FBMkI7O0lBQzNCLGlDQUFzQjs7SUFTdEIsb0NBQTRCOzs7OztJQVBoQixnQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29udHJvbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250cm9sLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY29udHJvbC5jb21wb25lbnQuc2NzcyddLFxuXG59KVxuZXhwb3J0IGNsYXNzIENvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBzaG93X21lbnUgPSBmYWxzZTtcbiAgQElucHV0KCkgbGFiZWwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZVJlZjogRWxlbWVudFJlZikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5lUmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygpIHRhYmluZGV4ID0gMDtcblxufVxuIl19