/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var IonarLoadingService = /** @class */ (function () {
    function IonarLoadingService() {
        var _this = this;
        this.visibilityChange$ = new Subject();
        this.isDisabled = false;
        this.show = function () { return !_this.isDisabled && _this.visibilityChange$.next(true); };
        this.hide = function () { return !_this.isDisabled && _this.visibilityChange$.next(false); };
        this.disabled = function () { return _this.isDisabled = true; };
        this.enabled = function () { return _this.isDisabled = false; };
    }
    IonarLoadingService.decorators = [
        { type: Injectable }
    ];
    return IonarLoadingService;
}());
export { IonarLoadingService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CO0lBQUE7UUFBQSxpQkFlQztRQVhDLHNCQUFpQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFFbEMsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUU1QixTQUFJLEdBQUcsY0FBTSxPQUFBLENBQUMsS0FBSSxDQUFDLFVBQVUsSUFBSSxLQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFyRCxDQUFxRCxDQUFDO1FBRW5FLFNBQUksR0FBRyxjQUFNLE9BQUEsQ0FBQyxLQUFJLENBQUMsVUFBVSxJQUFJLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQXRELENBQXNELENBQUM7UUFFcEUsYUFBUSxHQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksRUFBdEIsQ0FBc0IsQ0FBQztRQUV4QyxZQUFPLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxFQUF2QixDQUF1QixDQUFDO0lBQzFDLENBQUM7O2dCQWZBLFVBQVU7O0lBZVgsMEJBQUM7Q0FBQSxBQWZELElBZUM7U0FiWSxtQkFBbUI7OztJQUU5QixnREFBa0M7O0lBRWxDLHlDQUE0Qjs7SUFFNUIsbUNBQW1FOztJQUVuRSxtQ0FBb0U7O0lBRXBFLHVDQUF3Qzs7SUFFeEMsc0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcblxyXG5leHBvcnQgY2xhc3MgSW9uYXJMb2FkaW5nU2VydmljZSB7XHJcblxyXG4gIHZpc2liaWxpdHlDaGFuZ2UkID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBzaG93ID0gKCkgPT4gIXRoaXMuaXNEaXNhYmxlZCAmJiB0aGlzLnZpc2liaWxpdHlDaGFuZ2UkLm5leHQodHJ1ZSk7XHJcblxyXG4gIGhpZGUgPSAoKSA9PiAhdGhpcy5pc0Rpc2FibGVkICYmIHRoaXMudmlzaWJpbGl0eUNoYW5nZSQubmV4dChmYWxzZSk7XHJcblxyXG4gIGRpc2FibGVkID0gKCkgPT4gdGhpcy5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuXHJcbiAgZW5hYmxlZCA9ICgpID0+IHRoaXMuaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG59Il19