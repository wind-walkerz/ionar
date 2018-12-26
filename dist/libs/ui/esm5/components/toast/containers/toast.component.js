/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding } from '@angular/core';
import { IonarToastService } from '../toast.service';
import { untilDestroyed } from '@ionar/utility';
var ToastComponent = /** @class */ (function () {
    function ToastComponent(_toast) {
        var _this = this;
        this._toast = _toast;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.message_list = [];
        ///-----------------------------------------------  Main Functions  -----------------------------------------------///
        this.deleteMessage = function (index) {
            _this._toast.deleteMessage(index);
        };
    }
    Object.defineProperty(ToastComponent.prototype, "_showToastContainer", {
        get: /**
         * @return {?}
         */
        function () {
            return this.message_list.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ToastComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.message_list = this._toast.getMessages();
        this._toast.newMessage$.pipe(untilDestroyed(this)).subscribe(function (message_list) {
            _this.message_list = message_list;
            _this.ngOnChanges(null);
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ToastComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.message_list.length > 0) {
        }
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    ToastComponent.decorators = [
        { type: Component, args: [{
                    selector: 'io-toast',
                    template: "<ng-container *ngFor=\"let message of message_list\">\r\n    <div class=\"toast-message\" [ngClass]=\"message.type\">\r\n        {{message.text}}\r\n\r\n        <div class=\"delete\" (click)=\"deleteMessage(message.id)\">x</div>\r\n    </div>\r\n\r\n</ng-container>",
                    styles: [":host{display:none;position:fixed;top:0;right:0;bottom:0;padding:1.6rem 1.6rem 0 0;width:25%;z-index:90}:host .toast-message{color:#fff;padding:1rem 1.6rem;border-radius:.4rem;box-shadow:0 .4rem 1.2rem rgba(0,0,0,.15);background:#fff;line-height:1.5;position:relative;margin-bottom:1.3rem;overflow:hidden}:host .toast-message.success{background-color:#23d160}:host .toast-message.info{background-color:#209cee}:host .toast-message.danger{background-color:#ff3860}:host .toast-message .delete{background-color:rgba(10,10,10,.2);border-radius:100%;cursor:pointer;display:flex;justify-content:center;align-items:center;font-size:.7rem;pointer-events:auto;position:absolute;top:.4rem;right:.4rem;flex-shrink:0;height:1.4rem;width:1.4rem}:host .toast-message .delete:hover{background-color:rgba(10,10,10,.5)}:host-context(.show){display:block}"]
                }] }
    ];
    /** @nocollapse */
    ToastComponent.ctorParameters = function () { return [
        { type: IonarToastService }
    ]; };
    ToastComponent.propDecorators = {
        _showToastContainer: [{ type: HostBinding, args: ['class.show',] }]
    };
    return ToastComponent;
}());
export { ToastComponent };
if (false) {
    /** @type {?} */
    ToastComponent.prototype.message_list;
    /** @type {?} */
    ToastComponent.prototype.deleteMessage;
    /**
     * @type {?}
     * @private
     */
    ToastComponent.prototype._toast;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy90b2FzdC9jb250YWluZXJzL3RvYXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBK0MsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRDtJQWVFLHdCQUFvQixNQUF5QjtRQUE3QyxpQkFDQztRQURtQixXQUFNLEdBQU4sTUFBTSxDQUFtQjs7UUFON0MsaUJBQVksR0FBRyxFQUFFLENBQUM7O1FBaUNsQixrQkFBYSxHQUFHLFVBQUEsS0FBSztZQUNuQixLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUM7SUE1QkYsQ0FBQztJQUxELHNCQUErQiwrQ0FBbUI7Ozs7UUFBbEQ7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTtJQUFBLENBQUM7SUFLRix3SEFBd0g7Ozs7O0lBRXhILGlDQUFROzs7OztJQUFSO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFDLFlBQWlCO1lBQzdFLEtBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1lBQ2pDLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekIsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDOzs7OztJQUVELG9DQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtTQUVqQztJQUNILENBQUM7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7SUFDQSxDQUFDOztnQkFyQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixxUkFBcUM7O2lCQUV0Qzs7OztnQkFQUSxpQkFBaUI7OztzQ0FjdkIsV0FBVyxTQUFDLFlBQVk7O0lBbUMzQixxQkFBQztDQUFBLEFBOUNELElBOENDO1NBekNZLGNBQWM7OztJQUl6QixzQ0FBa0I7O0lBaUNsQix1Q0FFRTs7Ozs7SUE3QlUsZ0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJb25hclRvYXN0U2VydmljZSB9IGZyb20gJy4uL3RvYXN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyB1bnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bpb25hci91dGlsaXR5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaW8tdG9hc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90b2FzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdG9hc3QuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVG9hc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIG1lc3NhZ2VfbGlzdCA9IFtdO1xyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNob3cnKSBnZXQgX3Nob3dUb2FzdENvbnRhaW5lcigpIHtcclxuICAgIHJldHVybiB0aGlzLm1lc3NhZ2VfbGlzdC5sZW5ndGggPiAwO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3RvYXN0OiBJb25hclRvYXN0U2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5tZXNzYWdlX2xpc3QgPSB0aGlzLl90b2FzdC5nZXRNZXNzYWdlcygpO1xyXG5cclxuICAgIHRoaXMuX3RvYXN0Lm5ld01lc3NhZ2UkLnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZSgobWVzc2FnZV9saXN0OiBhbnkpID0+IHtcclxuICAgICAgdGhpcy5tZXNzYWdlX2xpc3QgPSBtZXNzYWdlX2xpc3Q7XHJcbiAgICAgIHRoaXMubmdPbkNoYW5nZXMobnVsbCk7XHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tZXNzYWdlX2xpc3QubGVuZ3RoID4gMCkge1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgZGVsZXRlTWVzc2FnZSA9IGluZGV4ID0+IHtcclxuICAgIHRoaXMuX3RvYXN0LmRlbGV0ZU1lc3NhZ2UoaW5kZXgpO1xyXG4gIH07XHJcblxyXG59XHJcbiJdfQ==