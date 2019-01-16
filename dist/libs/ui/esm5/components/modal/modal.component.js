"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ModalComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function ModalComponent(eRef) {
        var _this = this;
        this.eRef = eRef;
        this.onCancel = new core_1.EventEmitter();
        this.onOk = new core_1.EventEmitter();
        this.close = new core_1.EventEmitter();
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.onClose = function () {
            _this.close.emit();
        };
    }
    /**
     * @param {?} event
     * @return {?}
     */
    ModalComponent.prototype.onKeydownHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onClose();
    };
    /**
     * @return {?}
     */
    ModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ModalComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    ModalComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'io-modal',
                    template: "<div class=\"mask\" *ngIf=\"visible\" (click)=\"onClose()\">\r\n\r\n</div>\r\n\r\n<div class=\"content\" *ngIf=\"visible\">\r\n    <ng-content></ng-content>\r\n</div>\r\n\r\n",
                    styles: [".mask{display:flex;align-items:center;justify-content:center;position:fixed;top:0;right:0;left:0;bottom:0;background-color:rgba(0,0,0,.65);height:100%;z-index:399}:host{display:flex;justify-content:center}:host .content{display:flex;flex-direction:column;position:relative;background-color:#fff;border:0;border-radius:4px;background-clip:padding-box;box-shadow:0 4px 12px rgba(0,0,0,.15);width:52rem;height:52rem;z-index:400}"]
                }] }
    ];
    /** @nocollapse */
    ModalComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef }
    ]; };
    ModalComponent.propDecorators = {
        visible: [{ type: core_1.Input }],
        onCancel: [{ type: core_1.Output }],
        onOk: [{ type: core_1.Output }],
        close: [{ type: core_1.Output }],
        _maskElRef: [{ type: core_1.ViewChild, args: ['mask', { read: core_1.ElementRef },] }],
        onKeydownHandler: [{ type: core_1.HostListener, args: ['document:keydown.escape', ['$event'],] }]
    };
    return ModalComponent;
}());
exports.ModalComponent = ModalComponent;
if (false) {
    /** @type {?} */
    ModalComponent.prototype.visible;
    /** @type {?} */
    ModalComponent.prototype.onCancel;
    /** @type {?} */
    ModalComponent.prototype.onOk;
    /** @type {?} */
    ModalComponent.prototype.close;
    /**
     * @type {?}
     * @private
     */
    ModalComponent.prototype._maskElRef;
    /** @type {?} */
    ModalComponent.prototype.onClose;
    /**
     * @type {?}
     * @private
     */
    ModalComponent.prototype.eRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9tb2RhbC9tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0NBVXVCO0FBR3ZCO0lBc0JFLHdIQUF3SDtJQUN4SCx3QkFBb0IsSUFBZ0I7UUFBcEMsaUJBQ0M7UUFEbUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQWIxQixhQUFRLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDOUIsU0FBSSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBQzFCLFVBQUssR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQzs7UUFvQnJDLFlBQU8sR0FBRztZQUNSLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDO0lBVkYsQ0FBQzs7Ozs7SUFQRCx5Q0FBZ0I7Ozs7SUFEaEIsVUFDaUIsS0FBb0I7UUFDbkMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2pCLENBQUM7Ozs7SUFPRCxpQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQVNELG9DQUFXOzs7O0lBQVgsVUFBWSxPQUFPO0lBR25CLENBQUM7O2dCQXZDRixnQkFBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQiwwTEFBcUM7O2lCQUd0Qzs7OztnQkFoQkMsaUJBQVU7OzswQkFvQlQsWUFBSzsyQkFDTCxhQUFNO3VCQUNOLGFBQU07d0JBQ04sYUFBTTs2QkFFTixnQkFBUyxTQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxpQkFBVSxFQUFFO21DQUV0QyxtQkFBWSxTQUFDLHlCQUF5QixFQUFFLENBQUMsUUFBUSxDQUFDOztJQXlCckQscUJBQUM7Q0FBQSxBQXpDRCxJQXlDQztBQW5DWSx3Q0FBYzs7O0lBR3pCLGlDQUEwQjs7SUFDMUIsa0NBQXdDOztJQUN4Qyw4QkFBb0M7O0lBQ3BDLCtCQUFxQzs7Ozs7SUFFckMsb0NBQXdFOztJQWtCeEUsaUNBRUU7Ozs7O0lBWFUsOEJBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaW8tbW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbW9kYWwuY29tcG9uZW50LnNjc3MnXVxyXG4gIC8vIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgQElucHV0KCkgdmlzaWJsZTogQm9vbGVhbjtcclxuICBAT3V0cHV0KCkgb25DYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIG9uT2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdtYXNrJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIHByaXZhdGUgX21hc2tFbFJlZjogRWxlbWVudFJlZjtcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bi5lc2NhcGUnLCBbJyRldmVudCddKVxyXG4gIG9uS2V5ZG93bkhhbmRsZXIoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIHRoaXMub25DbG9zZSgpO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZVJlZjogRWxlbWVudFJlZikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1haW4gRnVuY3Rpb25zICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgb25DbG9zZSA9ICgpID0+IHtcclxuICAgIHRoaXMuY2xvc2UuZW1pdCgpO1xyXG4gIH07XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpOiB2b2lkIHtcclxuXHJcblxyXG4gIH1cclxuXHJcbn1cclxuIl19