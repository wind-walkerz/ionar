"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var IonarLoadingService = /** @class */ (function () {
    function IonarLoadingService() {
        var _this = this;
        this.visibilityChange$ = new rxjs_1.Subject();
        this.isDisabled = false;
        this.show = function () { return !_this.isDisabled && _this.visibilityChange$.next(true); };
        this.hide = function () { return !_this.isDisabled && _this.visibilityChange$.next(false); };
        this.disabled = function () { return _this.isDisabled = true; };
        this.enabled = function () { return _this.isDisabled = false; };
    }
    IonarLoadingService.decorators = [
        { type: core_1.Injectable }
    ];
    return IonarLoadingService;
}());
exports.IonarLoadingService = IonarLoadingService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9sb2FkaW5nL2xvYWRpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzQ0FBMkM7QUFDM0MsNkJBQStCO0FBRS9CO0lBQUE7UUFBQSxpQkFlQztRQVhDLHNCQUFpQixHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFFbEMsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUU1QixTQUFJLEdBQUcsY0FBTSxPQUFBLENBQUMsS0FBSSxDQUFDLFVBQVUsSUFBSSxLQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFyRCxDQUFxRCxDQUFDO1FBRW5FLFNBQUksR0FBRyxjQUFNLE9BQUEsQ0FBQyxLQUFJLENBQUMsVUFBVSxJQUFJLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQXRELENBQXNELENBQUM7UUFFcEUsYUFBUSxHQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksRUFBdEIsQ0FBc0IsQ0FBQztRQUV4QyxZQUFPLEdBQUcsY0FBTSxPQUFBLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxFQUF2QixDQUF1QixDQUFDO0lBQzFDLENBQUM7O2dCQWZBLGlCQUFVOztJQWVYLDBCQUFDO0NBQUEsQUFmRCxJQWVDO0FBYlksa0RBQW1COzs7SUFFOUIsZ0RBQWtDOztJQUVsQyx5Q0FBNEI7O0lBRTVCLG1DQUFtRTs7SUFFbkUsbUNBQW9FOztJQUVwRSx1Q0FBd0M7O0lBRXhDLHNDQUF3QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5cclxuZXhwb3J0IGNsYXNzIElvbmFyTG9hZGluZ1NlcnZpY2Uge1xyXG5cclxuICB2aXNpYmlsaXR5Q2hhbmdlJCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgc2hvdyA9ICgpID0+ICF0aGlzLmlzRGlzYWJsZWQgJiYgdGhpcy52aXNpYmlsaXR5Q2hhbmdlJC5uZXh0KHRydWUpO1xyXG5cclxuICBoaWRlID0gKCkgPT4gIXRoaXMuaXNEaXNhYmxlZCAmJiB0aGlzLnZpc2liaWxpdHlDaGFuZ2UkLm5leHQoZmFsc2UpO1xyXG5cclxuICBkaXNhYmxlZCA9ICgpID0+IHRoaXMuaXNEaXNhYmxlZCA9IHRydWU7XHJcblxyXG4gIGVuYWJsZWQgPSAoKSA9PiB0aGlzLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxufSJdfQ==