/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding } from '@angular/core';
import { IonarToastService } from '../toast.service';
import { untilDestroyed } from '@ionar/utility';
export class ToastComponent {
    /**
     * @param {?} _toast
     */
    constructor(_toast) {
        this._toast = _toast;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.message_list = [];
        ///-----------------------------------------------  Main Functions  -----------------------------------------------///
        this.deleteMessage = index => {
            this._toast.deleteMessage(index);
        };
    }
    /**
     * @return {?}
     */
    get _showToastContainer() {
        return this.message_list.length > 0;
    }
    ;
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ngOnInit() {
        this.message_list = this._toast.getMessages();
        this._toast.newMessage$.pipe(untilDestroyed(this)).subscribe((message_list) => {
            this.message_list = message_list;
            this.ngOnChanges(null);
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.message_list.length > 0) {
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
ToastComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-toast',
                template: "<ng-container *ngFor=\"let message of message_list\">\r\n    <div class=\"toast-message\" [ngClass]=\"message.type\">\r\n        {{message.text}}\r\n\r\n        <div class=\"delete\" (click)=\"deleteMessage(message.id)\">x</div>\r\n    </div>\r\n\r\n</ng-container>",
                styles: [":host{display:none;position:fixed;top:0;right:0;bottom:0;padding:1.6rem 1.6rem 0 0;width:25%;z-index:90}:host .toast-message{color:#fff;padding:1rem 1.6rem;border-radius:.4rem;box-shadow:0 .4rem 1.2rem rgba(0,0,0,.15);background:#fff;line-height:1.5;position:relative;margin-bottom:1.3rem;overflow:hidden}:host .toast-message.success{background-color:#23d160}:host .toast-message.info{background-color:#209cee}:host .toast-message.danger{background-color:#ff3860}:host .toast-message .delete{background-color:rgba(10,10,10,.2);border-radius:100%;cursor:pointer;display:flex;justify-content:center;align-items:center;font-size:.7rem;pointer-events:auto;position:absolute;top:.4rem;right:.4rem;flex-shrink:0;height:1.4rem;width:1.4rem}:host .toast-message .delete:hover{background-color:rgba(10,10,10,.5)}:host-context(.show){display:block}"]
            }] }
];
/** @nocollapse */
ToastComponent.ctorParameters = () => [
    { type: IonarToastService }
];
ToastComponent.propDecorators = {
    _showToastContainer: [{ type: HostBinding, args: ['class.show',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy90b2FzdC9jb250YWluZXJzL3RvYXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBK0MsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU9oRCxNQUFNLE9BQU8sY0FBYzs7OztJQVV6QixZQUFvQixNQUF5QjtRQUF6QixXQUFNLEdBQU4sTUFBTSxDQUFtQjs7UUFON0MsaUJBQVksR0FBRyxFQUFFLENBQUM7O1FBaUNsQixrQkFBYSxHQUFHLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQztJQTVCRixDQUFDOzs7O0lBTEQsSUFBK0IsbUJBQW1CO1FBQ2hELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFBQSxDQUFDOzs7OztJQU9GLFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFOUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQWlCLEVBQUUsRUFBRTtZQUNqRixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztZQUNqQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7U0FFakM7SUFDSCxDQUFDOzs7O0lBRUQsV0FBVztJQUNYLENBQUM7OztZQXJDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLHFSQUFxQzs7YUFFdEM7Ozs7WUFQUSxpQkFBaUI7OztrQ0FjdkIsV0FBVyxTQUFDLFlBQVk7Ozs7SUFGekIsc0NBQWtCOztJQWlDbEIsdUNBRUU7Ozs7O0lBN0JVLGdDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW9uYXJUb2FzdFNlcnZpY2UgfSBmcm9tICcuLi90b2FzdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgdW50aWxEZXN0cm95ZWQgfSBmcm9tICdAaW9uYXIvdXRpbGl0eSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lvLXRvYXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdG9hc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RvYXN0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFRvYXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBtZXNzYWdlX2xpc3QgPSBbXTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaG93JykgZ2V0IF9zaG93VG9hc3RDb250YWluZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tZXNzYWdlX2xpc3QubGVuZ3RoID4gMDtcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF90b2FzdDogSW9uYXJUb2FzdFNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMubWVzc2FnZV9saXN0ID0gdGhpcy5fdG9hc3QuZ2V0TWVzc2FnZXMoKTtcclxuXHJcbiAgICB0aGlzLl90b2FzdC5uZXdNZXNzYWdlJC5waXBlKHVudGlsRGVzdHJveWVkKHRoaXMpKS5zdWJzY3JpYmUoKG1lc3NhZ2VfbGlzdDogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMubWVzc2FnZV9saXN0ID0gbWVzc2FnZV9saXN0O1xyXG4gICAgICB0aGlzLm5nT25DaGFuZ2VzKG51bGwpO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMubWVzc2FnZV9saXN0Lmxlbmd0aCA+IDApIHtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTWFpbiBGdW5jdGlvbnMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIGRlbGV0ZU1lc3NhZ2UgPSBpbmRleCA9PiB7XHJcbiAgICB0aGlzLl90b2FzdC5kZWxldGVNZXNzYWdlKGluZGV4KTtcclxuICB9O1xyXG5cclxufVxyXG4iXX0=