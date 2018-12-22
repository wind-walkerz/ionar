/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
export class IonarLoadingService {
    constructor() {
        this.visibilityChange$ = new Subject();
        this.isDisabled = false;
        this.show = () => !this.isDisabled && this.visibilityChange$.next(true);
        this.hide = () => !this.isDisabled && this.visibilityChange$.next(false);
        this.disabled = () => this.isDisabled = true;
        this.enabled = () => this.isDisabled = false;
    }
}
IonarLoadingService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    IonarLoadingService.prototype.visibilityChange$;
    /** @type {?} */
    IonarLoadingService.prototype.isDisabled;
    /** @type {?} */
    IonarLoadingService.prototype.show;
    /** @type {?} */
    IonarLoadingService.prototype.hide;
    /** @type {?} */
    IonarLoadingService.prototype.disabled;
    /** @type {?} */
    IonarLoadingService.prototype.enabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSS9CLE1BQU0sT0FBTyxtQkFBbUI7SUFGaEM7UUFJRSxzQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRWxDLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFFNUIsU0FBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRW5FLFNBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVwRSxhQUFRLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFFeEMsWUFBTyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQzFDLENBQUM7OztZQWZBLFVBQVU7Ozs7SUFJVCxnREFBa0M7O0lBRWxDLHlDQUE0Qjs7SUFFNUIsbUNBQW1FOztJQUVuRSxtQ0FBb0U7O0lBRXBFLHVDQUF3Qzs7SUFFeEMsc0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcblxyXG5leHBvcnQgY2xhc3MgSW9uYXJMb2FkaW5nU2VydmljZSB7XHJcblxyXG4gIHZpc2liaWxpdHlDaGFuZ2UkID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBzaG93ID0gKCkgPT4gIXRoaXMuaXNEaXNhYmxlZCAmJiB0aGlzLnZpc2liaWxpdHlDaGFuZ2UkLm5leHQodHJ1ZSk7XHJcblxyXG4gIGhpZGUgPSAoKSA9PiAhdGhpcy5pc0Rpc2FibGVkICYmIHRoaXMudmlzaWJpbGl0eUNoYW5nZSQubmV4dChmYWxzZSk7XHJcblxyXG4gIGRpc2FibGVkID0gKCkgPT4gdGhpcy5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgZW5hYmxlZCA9ICgpID0+IHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG59Il19