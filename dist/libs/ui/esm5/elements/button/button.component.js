"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ButtonComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function ButtonComponent() {
        var _this = this;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.animated = false;
        this.disabled = false;
        this.type = '';
        this.isDisabled = false;
        this.onClick = function () {
            if (!_this.disabled) {
                _this.animated = true;
                setTimeout(function () { return _this.animated = false; }, 100);
            }
        };
    }
    /**
     * @return {?}
     */
    ButtonComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        switch (this.type) {
            case 'primary':
                this.primary_style = true;
                break;
            case 'danger':
                this.danger_style = true;
                break;
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ButtonComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // console.log(this.disabled);
        this.isDisabled = this.disabled;
    };
    ButtonComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'io-btn',
                    template: "\n      <ng-content></ng-content>\n  ",
                    styles: [":host{background-color:#fff;border:1px solid #d9d9d9;border-radius:.4rem;box-shadow:0 .2rem 0 rgba(0,0,0,.015);color:rgba(0,0,0,.65);cursor:pointer;display:flex;align-items:center;justify-content:center;flex:0;font-size:1.4rem;font-weight:400;margin:0 auto;outline:0;padding:.5rem 1.5rem;position:relative;text-align:center;touch-action:manipulation;transition:.3s cubic-bezier(.645,.045,.355,1);text-shadow:0 -1px 0 rgba(0,0,0,.12);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:nowrap;height:3.2rem}:host:hover{border-color:#40a9ff;color:#40a9ff}:host:active{border-color:#096dd9;color:#096dd9}:host.disabled{cursor:not-allowed}:host-context(.primary){background-color:#1890ff;border-color:#1890ff;box-shadow:0 .2rem 0 rgba(0,0,0,.015);color:#fff}:host-context(.primary):hover{background-color:#40a9ff;border-color:#40a9ff}:host-context(.primary):active{background-color:#096dd9;border-color:#096dd9}:host-context(.danger){background-color:#f5222d;border-color:#f5222d;box-shadow:0 .2rem 0 rgba(0,0,0,.015);color:#fff}:host-context(.danger):hover{background-color:#ff5654;border-color:#ff5654}:host-context(.danger):active{background-color:#cb2d35;border-color:#cb2d35}"]
                }] }
    ];
    /** @nocollapse */
    ButtonComponent.ctorParameters = function () { return []; };
    ButtonComponent.propDecorators = {
        disabled: [{ type: core_1.Input }],
        type: [{ type: core_1.Input }],
        primary_style: [{ type: core_1.HostBinding, args: ['class.primary',] }],
        danger_style: [{ type: core_1.HostBinding, args: ['class.danger',] }],
        isDisabled: [{ type: core_1.HostBinding, args: ['class.disabled',] }],
        onClick: [{ type: core_1.HostListener, args: ['click',] }]
    };
    return ButtonComponent;
}());
exports.ButtonComponent = ButtonComponent;
if (false) {
    /** @type {?} */
    ButtonComponent.prototype.animated;
    /** @type {?} */
    ButtonComponent.prototype.disabled;
    /** @type {?} */
    ButtonComponent.prototype.type;
    /** @type {?} */
    ButtonComponent.prototype.primary_style;
    /** @type {?} */
    ButtonComponent.prototype.danger_style;
    /** @type {?} */
    ButtonComponent.prototype.isDisabled;
    /** @type {?} */
    ButtonComponent.prototype.onClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNDQUErRjtBQUUvRjtJQTJCRSx3SEFBd0g7SUFDeEg7UUFBQSxpQkFDQzs7UUFwQkQsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUNqQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFLSSxlQUFVLEdBQVksS0FBSyxDQUFDO1FBRzNELFlBQU8sR0FBRztZQUNSLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFO2dCQUVsQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztnQkFDckIsVUFBVSxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssRUFBckIsQ0FBcUIsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUM5QztRQUNILENBQUMsQ0FBQztJQUlGLENBQUM7Ozs7SUFFRCxrQ0FBUTs7O0lBQVI7UUFDRSxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDakIsS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO2dCQUMxQixNQUFNO1lBQ1IsS0FBSyxRQUFRO2dCQUNYLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixNQUFNO1NBQ1Q7SUFDSCxDQUFDOzs7OztJQUVELHFDQUFXOzs7O0lBQVgsVUFBWSxPQUFPO1FBQ2pCLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDbEMsQ0FBQzs7Z0JBN0NGLGdCQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFFBQVEsRUFBRSx1Q0FFVDs7aUJBRUY7Ozs7OzJCQUlFLFlBQUs7dUJBQ0wsWUFBSztnQ0FHTCxrQkFBVyxTQUFDLGVBQWU7K0JBQzNCLGtCQUFXLFNBQUMsY0FBYzs2QkFDMUIsa0JBQVcsU0FBQyxnQkFBZ0I7MEJBRTVCLG1CQUFZLFNBQUMsT0FBTzs7SUFpQ3ZCLHNCQUFDO0NBQUEsQUFuREQsSUFtREM7QUE1Q1ksMENBQWU7OztJQUUxQixtQ0FBMEI7O0lBQzFCLG1DQUFtQzs7SUFDbkMsK0JBQTJCOztJQUczQix3Q0FBcUQ7O0lBQ3JELHVDQUFtRDs7SUFDbkQscUNBQTJEOztJQUUzRCxrQ0FPRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lvLWJ0bicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIGAsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYnV0dG9uLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuICBhbmltYXRlZDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBCb29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdHlwZTogU3RyaW5nID0gJyc7XHJcblxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnByaW1hcnknKSBwcmltYXJ5X3N0eWxlOiBCb29sZWFuO1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGFuZ2VyJykgZGFuZ2VyX3N0eWxlOiBCb29sZWFuO1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGlzYWJsZWQnKSBpc0Rpc2FibGVkOiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcclxuICBvbkNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcblxyXG4gICAgICB0aGlzLmFuaW1hdGVkID0gdHJ1ZTtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmFuaW1hdGVkID0gZmFsc2UsIDEwMCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XHJcbiAgICAgIGNhc2UgJ3ByaW1hcnknOlxyXG4gICAgICAgIHRoaXMucHJpbWFyeV9zdHlsZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ2Rhbmdlcic6XHJcbiAgICAgICAgdGhpcy5kYW5nZXJfc3R5bGUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlcyk6IHZvaWQge1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5kaXNhYmxlZCk7XHJcbiAgICB0aGlzLmlzRGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG5cclxufVxyXG4iXX0=