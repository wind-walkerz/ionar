/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormGroup } from '../models/FormGroup';
import { FormControl } from '../models/FormControl';
import _ from 'lodash';
import { FormArray } from '../models/FormArray';
var FormService = /** @class */ (function () {
    function FormService() {
        var _this = this;
        this.mergeControls = function (controls, parent_name) {
            if (parent_name === void 0) { parent_name = null; }
            /** @type {?} */
            var result = [];
            //
            if (_.isPlainObject(controls)) {
                _.forOwn(controls, function (c, name) {
                    /** @type {?} */
                    var control_name = parent_name ? parent_name + "[" + name + "]" : name;
                    if (c instanceof FormControl)
                        result.push(control_name);
                    if (c instanceof FormGroup)
                        result = result.concat(_this.mergeControls(c.controls, control_name));
                    if (c instanceof FormArray)
                        result = result.concat(_this.mergeControls(c.controls, control_name));
                });
            }
            if (_.isArray(controls)) {
                _.each(controls, function (c, index) {
                    if (c instanceof FormControl)
                        result.push(parent_name + "[" + index + "]");
                    if (c instanceof FormGroup)
                        result = result.concat(_this.mergeControls(c.controls, parent_name + "[" + index + "]"));
                    if (c instanceof FormArray)
                        result = result.concat(_this.mergeControls(c.controls, parent_name + "[" + index + "]"));
                });
            }
            return result;
        };
        this.convertToFormData = function (data) {
            /** @type {?} */
            var form = new FormData();
            _.forOwn(data, function (value, key) {
                if (_.isArray(value)) {
                    _.each(value, function (file) { return form.append(key + "[]", file, file.name); });
                }
                else
                    form.append(key, value);
            });
            return form;
        };
        this.convertToMediaType = function (value, media_type) {
            if (media_type) {
                switch (media_type.toLowerCase()) {
                    case 'json':
                        return JSON.stringify(value);
                    case 'form-data':
                        return _this.convertToFormData(value);
                    default:
                        return value;
                }
            }
            return value;
        };
    }
    /**
     * @return {?}
     */
    FormService.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FormService.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    /**
     * @return {?}
     */
    FormService.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    FormService.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    FormService.decorators = [
        { type: Injectable }
    ];
    return FormService;
}());
export { FormService };
if (false) {
    /** @type {?} */
    FormService.prototype.mergeControls;
    /** @type {?} */
    FormService.prototype.convertToFormData;
    /** @type {?} */
    FormService.prototype.convertToMediaType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL3Byb3ZpZGVycy9mb3JtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsVUFBVSxFQUErQyxNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFJaEQ7SUFBQTtRQUFBLGlCQTZFQztRQTVEQyxrQkFBYSxHQUFHLFVBQUMsUUFBeUMsRUFBRSxXQUEwQjtZQUExQiw0QkFBQSxFQUFBLGtCQUEwQjs7Z0JBQ2hGLE1BQU0sR0FBRyxFQUFFO1lBQ2YsRUFBRTtZQUdGLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDN0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsVUFBQyxDQUFrQixFQUFFLElBQVk7O3dCQUM1QyxZQUFZLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBSSxXQUFXLFNBQUksSUFBSSxNQUFHLENBQUMsQ0FBQyxDQUFDLElBQUk7b0JBRW5FLElBQUksQ0FBQyxZQUFZLFdBQVc7d0JBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFFeEQsSUFBSSxDQUFDLFlBQVksU0FBUzt3QkFBRSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztvQkFFakcsSUFBSSxDQUFDLFlBQVksU0FBUzt3QkFBRSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDbkcsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUVELElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDdkIsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBQyxDQUFrQixFQUFFLEtBQUs7b0JBRXpDLElBQUksQ0FBQyxZQUFZLFdBQVc7d0JBQUUsTUFBTSxDQUFDLElBQUksQ0FBSSxXQUFXLFNBQUksS0FBSyxNQUFHLENBQUMsQ0FBQztvQkFFdEUsSUFBSSxDQUFDLFlBQVksU0FBUzt3QkFBRSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUssV0FBVyxTQUFJLEtBQUssTUFBRyxDQUFDLENBQUMsQ0FBQztvQkFFL0csSUFBSSxDQUFDLFlBQVksU0FBUzt3QkFBRSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUssV0FBVyxTQUFJLEtBQUssTUFBRyxDQUFDLENBQUMsQ0FBQztnQkFDakgsQ0FBQyxDQUFDLENBQUM7YUFDSjtZQUVELE9BQU8sTUFBTSxDQUFDO1FBQ2hCLENBQUMsQ0FBQztRQUdGLHNCQUFpQixHQUFHLFVBQUEsSUFBSTs7Z0JBQ2hCLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRTtZQUUzQixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxVQUFDLEtBQUssRUFBRSxHQUFHO2dCQUN4QixJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3BCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE1BQU0sQ0FBSSxHQUFHLE9BQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQUM7aUJBQ2pFOztvQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUVqQyxDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDO1FBRUYsdUJBQWtCLEdBQUcsVUFBQyxLQUFLLEVBQUUsVUFBVTtZQUVyQyxJQUFJLFVBQVUsRUFBRTtnQkFDZCxRQUFRLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRTtvQkFDaEMsS0FBSyxNQUFNO3dCQUNULE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDL0IsS0FBSyxXQUFXO3dCQUNkLE9BQU8sS0FBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUN2Qzt3QkFDRSxPQUFPLEtBQUssQ0FBQztpQkFDaEI7YUFDRjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxDQUFDO0lBRUosQ0FBQzs7OztJQXpFQyxxQ0FBZTs7O0lBQWY7SUFDQSxDQUFDOzs7OztJQUVELGlDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtJQUNsQyxDQUFDOzs7O0lBRUQsaUNBQVc7OztJQUFYO0lBQ0EsQ0FBQzs7OztJQUVELDhCQUFROzs7SUFBUjtJQUNBLENBQUM7O2dCQWRGLFVBQVU7O0lBNkVYLGtCQUFDO0NBQUEsQUE3RUQsSUE2RUM7U0EzRVksV0FBVzs7O0lBZXRCLG9DQTZCRTs7SUFHRix3Q0FXRTs7SUFFRix5Q0FhRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIEluamVjdGFibGUsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnLi4vbW9kZWxzL0Zvcm1Hcm91cCc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJy4uL21vZGVscy9BYnN0cmFjdENvbnRyb2wnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJy4uL21vZGVscy9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEZvcm1BcnJheSB9IGZyb20gJy4uL21vZGVscy9Gb3JtQXJyYXknO1xyXG5pbXBvcnQgeyBGb3JtQXJyYXlTdGF0ZSwgRm9ybUdyb3VwU3RhdGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0Zvcm0nO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtU2VydmljZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcblxyXG4gIG1lcmdlQ29udHJvbHMgPSAoY29udHJvbHM6IEZvcm1Hcm91cFN0YXRlIHwgRm9ybUFycmF5U3RhdGUsIHBhcmVudF9uYW1lOiBzdHJpbmcgPSBudWxsKSA9PiB7XHJcbiAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAvL1xyXG5cclxuXHJcbiAgICBpZiAoXy5pc1BsYWluT2JqZWN0KGNvbnRyb2xzKSkge1xyXG4gICAgICBfLmZvck93bihjb250cm9scywgKGM6IEFic3RyYWN0Q29udHJvbCwgbmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29udHJvbF9uYW1lID0gcGFyZW50X25hbWUgPyBgJHtwYXJlbnRfbmFtZX1bJHtuYW1lfV1gIDogbmFtZTtcclxuXHJcbiAgICAgICAgaWYgKGMgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCkgcmVzdWx0LnB1c2goY29udHJvbF9uYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKGMgaW5zdGFuY2VvZiBGb3JtR3JvdXApIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQodGhpcy5tZXJnZUNvbnRyb2xzKGMuY29udHJvbHMsIGNvbnRyb2xfbmFtZSkpO1xyXG5cclxuICAgICAgICBpZiAoYyBpbnN0YW5jZW9mIEZvcm1BcnJheSkgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdCh0aGlzLm1lcmdlQ29udHJvbHMoYy5jb250cm9scywgY29udHJvbF9uYW1lKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChfLmlzQXJyYXkoY29udHJvbHMpKSB7XHJcbiAgICAgIF8uZWFjaChjb250cm9scywgKGM6IEFic3RyYWN0Q29udHJvbCwgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKGMgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCkgcmVzdWx0LnB1c2goYCR7cGFyZW50X25hbWV9WyR7aW5kZXh9XWApO1xyXG5cclxuICAgICAgICBpZiAoYyBpbnN0YW5jZW9mIEZvcm1Hcm91cCkgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdCh0aGlzLm1lcmdlQ29udHJvbHMoYy5jb250cm9scywgYCR7cGFyZW50X25hbWV9WyR7aW5kZXh9XWApKTtcclxuXHJcbiAgICAgICAgaWYgKGMgaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQodGhpcy5tZXJnZUNvbnRyb2xzKGMuY29udHJvbHMsIGAke3BhcmVudF9uYW1lfVske2luZGV4fV1gKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnZlcnRUb0Zvcm1EYXRhID0gZGF0YSA9PiB7XHJcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgXy5mb3JPd24oZGF0YSwgKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgaWYgKF8uaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICBfLmVhY2godmFsdWUsIGZpbGUgPT4gZm9ybS5hcHBlbmQoYCR7a2V5fVtdYCwgZmlsZSwgZmlsZS5uYW1lKSk7XHJcbiAgICAgIH0gZWxzZSBmb3JtLmFwcGVuZChrZXksIHZhbHVlKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZm9ybTtcclxuICB9O1xyXG5cclxuICBjb252ZXJ0VG9NZWRpYVR5cGUgPSAodmFsdWUsIG1lZGlhX3R5cGUpID0+IHtcclxuXHJcbiAgICBpZiAobWVkaWFfdHlwZSkge1xyXG4gICAgICBzd2l0Y2ggKG1lZGlhX3R5cGUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgIGNhc2UgJ2pzb24nOlxyXG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuICAgICAgICBjYXNlICdmb3JtLWRhdGEnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29udmVydFRvRm9ybURhdGEodmFsdWUpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9O1xyXG5cclxufVxyXG5cclxuXHJcbiJdfQ==