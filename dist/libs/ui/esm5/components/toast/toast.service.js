/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import _ from 'lodash';
import uuid from 'uuid/v1';
import * as i0 from "@angular/core";
var IonarToastService = /** @class */ (function () {
    function IonarToastService() {
        var _this = this;
        this._messageList = [];
        this.newMessage$ = new Subject();
        this._duration = 2000;
        this.info = function (message, duration) {
            if (duration === void 0) { duration = _this._duration; }
            return _this.sendMessage({
                id: uuid(),
                text: message,
                type: 'info'
            }, duration);
        };
        this.success = function (message, duration) {
            if (duration === void 0) { duration = _this._duration; }
            return _this.sendMessage({
                id: uuid(),
                text: message,
                type: 'success'
            }, duration);
        };
        this.danger = function (message, duration) {
            if (duration === void 0) { duration = _this._duration; }
            return _this.sendMessage({
                id: uuid(),
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
        this._messageList = _.reject(this._messageList, ['id', id]);
        this.newMessage$.next(this._messageList);
    };
    IonarToastService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ IonarToastService.ngInjectableDef = i0.defineInjectable({ factory: function IonarToastService_Factory() { return new IonarToastService(); }, token: IonarToastService, providedIn: "root" });
    return IonarToastService;
}());
export { IonarToastService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdG9hc3QvdG9hc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUN2QixPQUFPLElBQUksTUFBTSxTQUFTLENBQUM7O0FBRTNCO0lBQUE7UUFBQSxpQkEyQ0M7UUF2Q1MsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFFbkIsZ0JBQVcsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRTNCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFrQnpCLFNBQUksR0FBRyxVQUFDLE9BQU8sRUFBRSxRQUFpQztZQUFqQyx5QkFBQSxFQUFBLFdBQW1CLEtBQUksQ0FBQyxTQUFTO1lBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDO2dCQUN0RSxFQUFFLEVBQUUsSUFBSSxFQUFFO2dCQUNWLElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRSxNQUFNO2FBQ2IsRUFBRSxRQUFRLENBQUM7UUFKMkMsQ0FJM0MsQ0FBQztRQUViLFlBQU8sR0FBRyxVQUFDLE9BQU8sRUFBRSxRQUFpQztZQUFqQyx5QkFBQSxFQUFBLFdBQW1CLEtBQUksQ0FBQyxTQUFTO1lBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDO2dCQUN6RSxFQUFFLEVBQUUsSUFBSSxFQUFFO2dCQUNWLElBQUksRUFBRSxPQUFPO2dCQUNiLElBQUksRUFBRSxTQUFTO2FBQ2hCLEVBQUUsUUFBUSxDQUFDO1FBSjhDLENBSTlDLENBQUM7UUFFYixXQUFNLEdBQUcsVUFBQyxPQUFPLEVBQUUsUUFBaUM7WUFBakMseUJBQUEsRUFBQSxXQUFtQixLQUFJLENBQUMsU0FBUztZQUFLLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQztnQkFDeEUsRUFBRSxFQUFFLElBQUksRUFBRTtnQkFDVixJQUFJLEVBQUUsT0FBTztnQkFDYixJQUFJLEVBQUUsUUFBUTthQUNmLEVBQUUsUUFBUSxDQUFDO1FBSjZDLENBSTdDLENBQUM7S0FDZDs7OztJQWpDQyx1Q0FBVzs7O0lBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBRUQsdUNBQVc7Ozs7O0lBQVgsVUFBWSxPQUFPLEVBQUUsUUFBUTtRQUE3QixpQkFLQztRQUhDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQTlCLENBQThCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFRCx5Q0FBYTs7OztJQUFiLFVBQWMsRUFBRTtRQUNkLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzNDLENBQUM7O2dCQXhCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7NEJBUEQ7Q0FnREMsQUEzQ0QsSUEyQ0M7U0F4Q1ksaUJBQWlCOzs7Ozs7SUFDNUIseUNBQTBCOztJQUUxQix3Q0FBbUM7Ozs7O0lBRW5DLHNDQUF5Qjs7SUFrQnpCLGlDQUlhOztJQUViLG9DQUlhOztJQUViLG1DQUlhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgdXVpZCBmcm9tICd1dWlkL3YxJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIElvbmFyVG9hc3RTZXJ2aWNlIHtcclxuICBwcml2YXRlIF9tZXNzYWdlTGlzdCA9IFtdO1xyXG5cclxuICBwdWJsaWMgbmV3TWVzc2FnZSQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBwcml2YXRlIF9kdXJhdGlvbiA9IDIwMDA7XHJcblxyXG4gIGdldE1lc3NhZ2VzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21lc3NhZ2VMaXN0O1xyXG4gIH1cclxuXHJcbiAgc2VuZE1lc3NhZ2UobWVzc2FnZSwgZHVyYXRpb24pIHtcclxuXHJcbiAgICB0aGlzLl9tZXNzYWdlTGlzdCA9IHRoaXMuX21lc3NhZ2VMaXN0LmNvbmNhdChtZXNzYWdlKTtcclxuICAgIHRoaXMubmV3TWVzc2FnZSQubmV4dCh0aGlzLl9tZXNzYWdlTGlzdCk7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuZGVsZXRlTWVzc2FnZShtZXNzYWdlLmlkKSwgZHVyYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlTWVzc2FnZShpZCkge1xyXG4gICAgdGhpcy5fbWVzc2FnZUxpc3QgPSBfLnJlamVjdCh0aGlzLl9tZXNzYWdlTGlzdCwgWydpZCcsIGlkXSk7XHJcbiAgICB0aGlzLm5ld01lc3NhZ2UkLm5leHQodGhpcy5fbWVzc2FnZUxpc3QpO1xyXG4gIH1cclxuXHJcbiAgaW5mbyA9IChtZXNzYWdlLCBkdXJhdGlvbjogbnVtYmVyID0gdGhpcy5fZHVyYXRpb24pID0+IHRoaXMuc2VuZE1lc3NhZ2Uoe1xyXG4gICAgaWQ6IHV1aWQoKSxcclxuICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICB0eXBlOiAnaW5mbydcclxuICB9LCBkdXJhdGlvbik7XHJcblxyXG4gIHN1Y2Nlc3MgPSAobWVzc2FnZSwgZHVyYXRpb246IG51bWJlciA9IHRoaXMuX2R1cmF0aW9uKSA9PiB0aGlzLnNlbmRNZXNzYWdlKHtcclxuICAgIGlkOiB1dWlkKCksXHJcbiAgICB0ZXh0OiBtZXNzYWdlLFxyXG4gICAgdHlwZTogJ3N1Y2Nlc3MnXHJcbiAgfSwgZHVyYXRpb24pO1xyXG5cclxuICBkYW5nZXIgPSAobWVzc2FnZSwgZHVyYXRpb246IG51bWJlciA9IHRoaXMuX2R1cmF0aW9uKSA9PiB0aGlzLnNlbmRNZXNzYWdlKHtcclxuICAgIGlkOiB1dWlkKCksXHJcbiAgICB0ZXh0OiBtZXNzYWdlLFxyXG4gICAgdHlwZTogJ2RhbmdlcidcclxuICB9LCBkdXJhdGlvbik7XHJcbn1cclxuIl19