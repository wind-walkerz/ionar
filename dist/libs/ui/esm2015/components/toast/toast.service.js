/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import _ from 'lodash';
import uuid from 'uuid/v1';
import * as i0 from "@angular/core";
export class IonarToastService {
    constructor() {
        this._messageList = [];
        this.newMessage$ = new Subject();
        this._duration = 2000;
        this.info = (message, duration = this._duration) => this.sendMessage({
            id: uuid(),
            text: message,
            type: 'info'
        }, duration);
        this.success = (message, duration = this._duration) => this.sendMessage({
            id: uuid(),
            text: message,
            type: 'success'
        }, duration);
        this.danger = (message, duration = this._duration) => this.sendMessage({
            id: uuid(),
            text: message,
            type: 'danger'
        }, duration);
    }
    /**
     * @return {?}
     */
    getMessages() {
        return this._messageList;
    }
    /**
     * @param {?} message
     * @param {?} duration
     * @return {?}
     */
    sendMessage(message, duration) {
        this._messageList = this._messageList.concat(message);
        this.newMessage$.next(this._messageList);
        setTimeout(() => this.deleteMessage(message.id), duration);
    }
    /**
     * @param {?} id
     * @return {?}
     */
    deleteMessage(id) {
        this._messageList = _.reject(this._messageList, ['id', id]);
        this.newMessage$.next(this._messageList);
    }
}
IonarToastService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ IonarToastService.ngInjectableDef = i0.defineInjectable({ factory: function IonarToastService_Factory() { return new IonarToastService(); }, token: IonarToastService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9hc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdG9hc3QvdG9hc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUN2QixPQUFPLElBQUksTUFBTSxTQUFTLENBQUM7O0FBSzNCLE1BQU0sT0FBTyxpQkFBaUI7SUFIOUI7UUFJVSxpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUVuQixnQkFBVyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFFM0IsY0FBUyxHQUFHLElBQUksQ0FBQztRQWtCekIsU0FBSSxHQUFHLENBQUMsT0FBTyxFQUFFLFdBQW1CLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDdEUsRUFBRSxFQUFFLElBQUksRUFBRTtZQUNWLElBQUksRUFBRSxPQUFPO1lBQ2IsSUFBSSxFQUFFLE1BQU07U0FDYixFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRWIsWUFBTyxHQUFHLENBQUMsT0FBTyxFQUFFLFdBQW1CLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDekUsRUFBRSxFQUFFLElBQUksRUFBRTtZQUNWLElBQUksRUFBRSxPQUFPO1lBQ2IsSUFBSSxFQUFFLFNBQVM7U0FDaEIsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUViLFdBQU0sR0FBRyxDQUFDLE9BQU8sRUFBRSxXQUFtQixJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ3hFLEVBQUUsRUFBRSxJQUFJLEVBQUU7WUFDVixJQUFJLEVBQUUsT0FBTztZQUNiLElBQUksRUFBRSxRQUFRO1NBQ2YsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNkOzs7O0lBakNDLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQU8sRUFBRSxRQUFRO1FBRTNCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3pDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxFQUFFO1FBQ2QsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0MsQ0FBQzs7O1lBeEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7SUFFQyx5Q0FBMEI7O0lBRTFCLHdDQUFtQzs7Ozs7SUFFbkMsc0NBQXlCOztJQWtCekIsaUNBSWE7O0lBRWIsb0NBSWE7O0lBRWIsbUNBSWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB1dWlkIGZyb20gJ3V1aWQvdjEnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSW9uYXJUb2FzdFNlcnZpY2Uge1xyXG4gIHByaXZhdGUgX21lc3NhZ2VMaXN0ID0gW107XHJcblxyXG4gIHB1YmxpYyBuZXdNZXNzYWdlJCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIHByaXZhdGUgX2R1cmF0aW9uID0gMjAwMDtcclxuXHJcbiAgZ2V0TWVzc2FnZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWVzc2FnZUxpc3Q7XHJcbiAgfVxyXG5cclxuICBzZW5kTWVzc2FnZShtZXNzYWdlLCBkdXJhdGlvbikge1xyXG5cclxuICAgIHRoaXMuX21lc3NhZ2VMaXN0ID0gdGhpcy5fbWVzc2FnZUxpc3QuY29uY2F0KG1lc3NhZ2UpO1xyXG4gICAgdGhpcy5uZXdNZXNzYWdlJC5uZXh0KHRoaXMuX21lc3NhZ2VMaXN0KTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kZWxldGVNZXNzYWdlKG1lc3NhZ2UuaWQpLCBkdXJhdGlvbik7XHJcbiAgfVxyXG5cclxuICBkZWxldGVNZXNzYWdlKGlkKSB7XHJcbiAgICB0aGlzLl9tZXNzYWdlTGlzdCA9IF8ucmVqZWN0KHRoaXMuX21lc3NhZ2VMaXN0LCBbJ2lkJywgaWRdKTtcclxuICAgIHRoaXMubmV3TWVzc2FnZSQubmV4dCh0aGlzLl9tZXNzYWdlTGlzdCk7XHJcbiAgfVxyXG5cclxuICBpbmZvID0gKG1lc3NhZ2UsIGR1cmF0aW9uOiBudW1iZXIgPSB0aGlzLl9kdXJhdGlvbikgPT4gdGhpcy5zZW5kTWVzc2FnZSh7XHJcbiAgICBpZDogdXVpZCgpLFxyXG4gICAgdGV4dDogbWVzc2FnZSxcclxuICAgIHR5cGU6ICdpbmZvJ1xyXG4gIH0sIGR1cmF0aW9uKTtcclxuXHJcbiAgc3VjY2VzcyA9IChtZXNzYWdlLCBkdXJhdGlvbjogbnVtYmVyID0gdGhpcy5fZHVyYXRpb24pID0+IHRoaXMuc2VuZE1lc3NhZ2Uoe1xyXG4gICAgaWQ6IHV1aWQoKSxcclxuICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICB0eXBlOiAnc3VjY2VzcydcclxuICB9LCBkdXJhdGlvbik7XHJcblxyXG4gIGRhbmdlciA9IChtZXNzYWdlLCBkdXJhdGlvbjogbnVtYmVyID0gdGhpcy5fZHVyYXRpb24pID0+IHRoaXMuc2VuZE1lc3NhZ2Uoe1xyXG4gICAgaWQ6IHV1aWQoKSxcclxuICAgIHRleHQ6IG1lc3NhZ2UsXHJcbiAgICB0eXBlOiAnZGFuZ2VyJ1xyXG4gIH0sIGR1cmF0aW9uKTtcclxufVxyXG4iXX0=