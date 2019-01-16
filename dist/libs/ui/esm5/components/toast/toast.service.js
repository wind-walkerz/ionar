"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var v1_1 = tslib_1.__importDefault(require("uuid/v1"));
var i0 = tslib_1.__importStar(require("@angular/core"));
var IonarToastService = /** @class */ (function () {
    function IonarToastService() {
        var _this = this;
        this._messageList = [];
        this.newMessage$ = new rxjs_1.Subject();
        this._duration = 2000;
        this.info = function (message, duration) {
            if (duration === void 0) { duration = _this._duration; }
            return _this.sendMessage({
                id: v1_1.default(),
                text: message,
                type: 'info'
            }, duration);
        };
        this.success = function (message, duration) {
            if (duration === void 0) { duration = _this._duration; }
            return _this.sendMessage({
                id: v1_1.default(),
                text: message,
                type: 'success'
            }, duration);
        };
        this.danger = function (message, duration) {
            if (duration === void 0) { duration = _this._duration; }
            return _this.sendMessage({
                id: v1_1.default(),
                text: message,
                type: 'danger'
            }, duration);
        };
    }
    /**
     * @return {?}
     */
    IonarToastService.prototype.getMessages = /**
     * @return {?}
     */
    function () {
        return this._messageList;
    };
    /**
     * @param {?} message
     * @param {?} duration
     * @return {?}
     */
    IonarToastService.prototype.sendMessage = /**
     * @param {?} message
     * @param {?} duration
     * @return {?}
     */
    function (message, duration) {
        var _this = this;
        this._messageList = this._messageList.concat(message);
        this.newMessage$.next(this._messageList);
        setTimeout(function () { return _this.deleteMessage(message.id); }, duration);
    };
    /**
     * @param {?} id
     * @return {?}
     */
    IonarToastService.prototype.deleteMessage = /**
     * @param {?} id
     * @return {?}
     */
    function (id) {
        this._messageList = lodash_1.default.reject(this._messageList, ['id', id]);
        this.newMessage$.next(this._messageList);
    };
    IonarToastService.decorators = [
        { type: core_1.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ IonarToastService.ngInjectableDef = i0.defineInjectable({ factory: function IonarToastService_Factory() { return new IonarToastService(); }, token: IonarToastService, providedIn: "root" });
    return IonarToastService;
}());
exports.IonarToastService = IonarToastService;
if (false) {
    /**
     * @type {?}
     * @private
     */
    IonarToastService.prototype._messageList;
    /** @type {?} */
    IonarToastService.prototype.newMessage$;
    /**
     * @type {?}
     * @private
     */
    IonarToastService.prototype._duration;
    /** @type {?} */
    IonarToastService.prototype.info;
    /** @type {?} */
    IonarToastService.prototype.success;
    /** @type {?} */
    IonarToastService.prototype.danger;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdG9hc3QvdG9hc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsc0NBQXFEO0FBQ3JELDZCQUErQjtBQUMvQiwwREFBdUI7QUFDdkIsdURBQTJCOztBQUUzQjtJQUFBO1FBQUEsaUJBMkNDO1FBdkNTLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRW5CLGdCQUFXLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUUzQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBa0J6QixTQUFJLEdBQUcsVUFBQyxPQUFPLEVBQUUsUUFBaUM7WUFBakMseUJBQUEsRUFBQSxXQUFtQixLQUFJLENBQUMsU0FBUztZQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQztnQkFDdEUsRUFBRSxFQUFFLFlBQUksRUFBRTtnQkFDVixJQUFJLEVBQUUsT0FBTztnQkFDYixJQUFJLEVBQUUsTUFBTTthQUNiLEVBQUUsUUFBUSxDQUFDO1FBSjJDLENBSTNDLENBQUM7UUFFYixZQUFPLEdBQUcsVUFBQyxPQUFPLEVBQUUsUUFBaUM7WUFBakMseUJBQUEsRUFBQSxXQUFtQixLQUFJLENBQUMsU0FBUztZQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQztnQkFDekUsRUFBRSxFQUFFLFlBQUksRUFBRTtnQkFDVixJQUFJLEVBQUUsT0FBTztnQkFDYixJQUFJLEVBQUUsU0FBUzthQUNoQixFQUFFLFFBQVEsQ0FBQztRQUo4QyxDQUk5QyxDQUFDO1FBRWIsV0FBTSxHQUFHLFVBQUMsT0FBTyxFQUFFLFFBQWlDO1lBQWpDLHlCQUFBLEVBQUEsV0FBbUIsS0FBSSxDQUFDLFNBQVM7WUFBSyxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQ3hFLEVBQUUsRUFBRSxZQUFJLEVBQUU7Z0JBQ1YsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsSUFBSSxFQUFFLFFBQVE7YUFDZixFQUFFLFFBQVEsQ0FBQztRQUo2QyxDQUk3QyxDQUFDO0tBQ2Q7Ozs7SUFqQ0MsdUNBQVc7OztJQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Ozs7OztJQUVELHVDQUFXOzs7OztJQUFYLFVBQVksT0FBTyxFQUFFLFFBQVE7UUFBN0IsaUJBS0M7UUFIQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6QyxVQUFVLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUE5QixDQUE4QixFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7O0lBRUQseUNBQWE7Ozs7SUFBYixVQUFjLEVBQUU7UUFDZCxJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Z0JBeEJGLGlCQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7NEJBUEQ7Q0FnREMsQUEzQ0QsSUEyQ0M7QUF4Q1ksOENBQWlCOzs7Ozs7SUFDNUIseUNBQTBCOztJQUUxQix3Q0FBbUM7Ozs7O0lBRW5DLHNDQUF5Qjs7SUFrQnpCLGlDQUlhOztJQUViLG9DQUlhOztJQUViLG1DQUlhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3YxJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIElvbmFyVG9hc3RTZXJ2aWNlIHtcclxuICBwcml2YXRlIF9tZXNzYWdlTGlzdCA9IFtdO1xyXG5cclxuICBwdWJsaWMgbmV3TWVzc2FnZSQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcml2YXRlIF9kdXJhdGlvbiA9IDIwMDA7XHJcblxyXG4gIGdldE1lc3NhZ2VzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2VMaXN0O1xyXG4gIH1cclxuXHJcbiAgc2VuZE1lc3NhZ2UobWVzc2FnZSwgZHVyYXRpb24pIHtcclxuXHJcbiAgICB0aGlzLl9tZXNzYWdlTGlzdCA9IHRoaXMuX21lc3NhZ2VMaXN0LmNvbmNhdChtZXNzYWdlKTtcclxuICAgIHRoaXMubmV3TWVzc2FnZSQubmV4dCh0aGlzLl9tZXNzYWdlTGlzdCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGVsZXRlTWVzc2FnZShtZXNzYWdlLmlkKSwgZHVyYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlTWVzc2FnZShpZCkge1xyXG4gICAgdGhpcy5fbWVzc2FnZUxpc3QgPSBfLnJlamVjdCh0aGlzLl9tZXNzYWdlTGlzdCwgWydpZCcsIGlkXSk7XHJcbiAgICB0aGlzLm5ld01lc3NhZ2UkLm5leHQodGhpcy5fbWVzc2FnZUxpc3QpO1xyXG4gIH1cclxuXHJcbiAgaW5mbyA9IChtZXNzYWdlLCBkdXJhdGlvbjogbnVtYmVyID0gdGhpcy5fZHVyYXRpb24pID0+IHRoaXMuc2VuZE1lc3NhZ2Uoe1xyXG4gICAgaWQ6IHV1aWQoKSxcclxuICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICB0eXBlOiAnaW5mbydcclxuICB9LCBkdXJhdGlvbik7XHJcblxyXG4gIHN1Y2Nlc3MgPSAobWVzc2FnZSwgZHVyYXRpb246IG51bWJlciA9IHRoaXMuX2R1cmF0aW9uKSA9PiB0aGlzLnNlbmRNZXNzYWdlKHtcclxuICAgIGlkOiB1dWlkKCksXHJcbiAgICB0ZXh0OiBtZXNzYWdlLFxyXG4gICAgdHlwZTogJ3N1Y2Nlc3MnXHJcbiAgfSwgZHVyYXRpb24pO1xyXG5cclxuICBkYW5nZXIgPSAobWVzc2FnZSwgZHVyYXRpb246IG51bWJlciA9IHRoaXMuX2R1cmF0aW9uKSA9PiB0aGlzLnNlbmRNZXNzYWdlKHtcclxuICAgIGlkOiB1dWlkKCksXHJcbiAgICB0ZXh0OiBtZXNzYWdlLFxyXG4gICAgdHlwZTogJ2RhbmdlcidcclxuICB9LCBkdXJhdGlvbik7XHJcbn1cclxuIl19