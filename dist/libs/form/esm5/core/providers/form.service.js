"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var FormGroup_1 = require("../models/FormGroup");
var FormControl_1 = require("../models/FormControl");
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var FormArray_1 = require("../models/FormArray");
var FormService = /** @class */ (function () {
    function FormService() {
        var _this = this;
        this.mergeControls = function (controls, parent_name) {
            if (parent_name === void 0) { parent_name = null; }
            /** @type {?} */
            var result = [];
            //
            if (lodash_1.default.isPlainObject(controls)) {
                lodash_1.default.forOwn(controls, function (c, name) {
                    /** @type {?} */
                    var control_name = parent_name ? parent_name + "[" + name + "]" : name;
                    if (c instanceof FormControl_1.FormControl)
                        result.push(control_name);
                    if (c instanceof FormGroup_1.FormGroup)
                        result = result.concat(_this.mergeControls(c.controls, control_name));
                    if (c instanceof FormArray_1.FormArray)
                        result = result.concat(_this.mergeControls(c.controls, control_name));
                });
            }
            if (lodash_1.default.isArray(controls)) {
                lodash_1.default.each(controls, function (c, index) {
                    if (c instanceof FormControl_1.FormControl)
                        result.push(parent_name + "[" + index + "]");
                    if (c instanceof FormGroup_1.FormGroup)
                        result = result.concat(_this.mergeControls(c.controls, parent_name + "[" + index + "]"));
                    if (c instanceof FormArray_1.FormArray)
                        result = result.concat(_this.mergeControls(c.controls, parent_name + "[" + index + "]"));
                });
            }
            return result;
        };
        this.convertToFormData = function (data) {
            /** @type {?} */
            var form = new FormData();
            lodash_1.default.forOwn(data, function (value, key) {
                if (lodash_1.default.isArray(value)) {
                    lodash_1.default.each(value, function (file) { return form.append(key + "[]", file, file.name); });
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
        { type: core_1.Injectable }
    ];
    return FormService;
}());
exports.FormService = FormService;
if (false) {
    /** @type {?} */
    FormService.prototype.mergeControls;
    /** @type {?} */
    FormService.prototype.convertToFormData;
    /** @type {?} */
    FormService.prototype.convertToMediaType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL3Byb3ZpZGVycy9mb3JtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHNDQUF1RztBQUN2RyxpREFBZ0Q7QUFFaEQscURBQW9EO0FBQ3BELDBEQUF1QjtBQUN2QixpREFBZ0Q7QUFJaEQ7SUFBQTtRQUFBLGlCQTZFQztRQTVEQyxrQkFBYSxHQUFHLFVBQUMsUUFBeUMsRUFBRSxXQUEwQjtZQUExQiw0QkFBQSxFQUFBLGtCQUEwQjs7Z0JBQ2hGLE1BQU0sR0FBRyxFQUFFO1lBQ2YsRUFBRTtZQUdGLElBQUksZ0JBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzdCLGdCQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxVQUFDLENBQWtCLEVBQUUsSUFBWTs7d0JBQzVDLFlBQVksR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFJLFdBQVcsU0FBSSxJQUFJLE1BQUcsQ0FBQyxDQUFDLENBQUMsSUFBSTtvQkFFbkUsSUFBSSxDQUFDLFlBQVkseUJBQVc7d0JBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFFeEQsSUFBSSxDQUFDLFlBQVkscUJBQVM7d0JBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7b0JBRWpHLElBQUksQ0FBQyxZQUFZLHFCQUFTO3dCQUFFLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUNuRyxDQUFDLENBQUMsQ0FBQzthQUNKO1lBRUQsSUFBSSxnQkFBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDdkIsZ0JBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFVBQUMsQ0FBa0IsRUFBRSxLQUFLO29CQUV6QyxJQUFJLENBQUMsWUFBWSx5QkFBVzt3QkFBRSxNQUFNLENBQUMsSUFBSSxDQUFJLFdBQVcsU0FBSSxLQUFLLE1BQUcsQ0FBQyxDQUFDO29CQUV0RSxJQUFJLENBQUMsWUFBWSxxQkFBUzt3QkFBRSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUssV0FBVyxTQUFJLEtBQUssTUFBRyxDQUFDLENBQUMsQ0FBQztvQkFFL0csSUFBSSxDQUFDLFlBQVkscUJBQVM7d0JBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFLLFdBQVcsU0FBSSxLQUFLLE1BQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pILENBQUMsQ0FBQyxDQUFDO2FBQ0o7WUFFRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUM7UUFHRixzQkFBaUIsR0FBRyxVQUFBLElBQUk7O2dCQUNoQixJQUFJLEdBQUcsSUFBSSxRQUFRLEVBQUU7WUFFM0IsZ0JBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFVBQUMsS0FBSyxFQUFFLEdBQUc7Z0JBQ3hCLElBQUksZ0JBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3BCLGdCQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxNQUFNLENBQUksR0FBRyxPQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQyxDQUFDO2lCQUNqRTs7b0JBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFakMsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQztRQUVGLHVCQUFrQixHQUFHLFVBQUMsS0FBSyxFQUFFLFVBQVU7WUFFckMsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsUUFBUSxVQUFVLENBQUMsV0FBVyxFQUFFLEVBQUU7b0JBQ2hDLEtBQUssTUFBTTt3QkFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQy9CLEtBQUssV0FBVzt3QkFDZCxPQUFPLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdkM7d0JBQ0UsT0FBTyxLQUFLLENBQUM7aUJBQ2hCO2FBQ0Y7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQztJQUVKLENBQUM7Ozs7SUF6RUMscUNBQWU7OztJQUFmO0lBQ0EsQ0FBQzs7Ozs7SUFFRCxpQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7SUFDbEMsQ0FBQzs7OztJQUVELGlDQUFXOzs7SUFBWDtJQUNBLENBQUM7Ozs7SUFFRCw4QkFBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFkRixpQkFBVTs7SUE2RVgsa0JBQUM7Q0FBQSxBQTdFRCxJQTZFQztBQTNFWSxrQ0FBVzs7O0lBZXRCLG9DQTZCRTs7SUFHRix3Q0FXRTs7SUFFRix5Q0FhRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIEluamVjdGFibGUsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnLi4vbW9kZWxzL0Zvcm1Hcm91cCc7XHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCB9IGZyb20gJy4uL21vZGVscy9BYnN0cmFjdENvbnRyb2wnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCB9IGZyb20gJy4uL21vZGVscy9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEZvcm1BcnJheSB9IGZyb20gJy4uL21vZGVscy9Gb3JtQXJyYXknO1xyXG5pbXBvcnQgeyBGb3JtQXJyYXlTdGF0ZSwgRm9ybUdyb3VwU3RhdGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0Zvcm0nO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtU2VydmljZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcblxyXG4gIG1lcmdlQ29udHJvbHMgPSAoY29udHJvbHM6IEZvcm1Hcm91cFN0YXRlIHwgRm9ybUFycmF5U3RhdGUsIHBhcmVudF9uYW1lOiBzdHJpbmcgPSBudWxsKSA9PiB7XHJcbiAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAvL1xyXG5cclxuXHJcbiAgICBpZiAoXy5pc1BsYWluT2JqZWN0KGNvbnRyb2xzKSkge1xyXG4gICAgICBfLmZvck93bihjb250cm9scywgKGM6IEFic3RyYWN0Q29udHJvbCwgbmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY29udHJvbF9uYW1lID0gcGFyZW50X25hbWUgPyBgJHtwYXJlbnRfbmFtZX1bJHtuYW1lfV1gIDogbmFtZTtcclxuXHJcbiAgICAgICAgaWYgKGMgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCkgcmVzdWx0LnB1c2goY29udHJvbF9uYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKGMgaW5zdGFuY2VvZiBGb3JtR3JvdXApIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQodGhpcy5tZXJnZUNvbnRyb2xzKGMuY29udHJvbHMsIGNvbnRyb2xfbmFtZSkpO1xyXG5cclxuICAgICAgICBpZiAoYyBpbnN0YW5jZW9mIEZvcm1BcnJheSkgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdCh0aGlzLm1lcmdlQ29udHJvbHMoYy5jb250cm9scywgY29udHJvbF9uYW1lKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChfLmlzQXJyYXkoY29udHJvbHMpKSB7XHJcbiAgICAgIF8uZWFjaChjb250cm9scywgKGM6IEFic3RyYWN0Q29udHJvbCwgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKGMgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCkgcmVzdWx0LnB1c2goYCR7cGFyZW50X25hbWV9WyR7aW5kZXh9XWApO1xyXG5cclxuICAgICAgICBpZiAoYyBpbnN0YW5jZW9mIEZvcm1Hcm91cCkgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdCh0aGlzLm1lcmdlQ29udHJvbHMoYy5jb250cm9scywgYCR7cGFyZW50X25hbWV9WyR7aW5kZXh9XWApKTtcclxuXHJcbiAgICAgICAgaWYgKGMgaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQodGhpcy5tZXJnZUNvbnRyb2xzKGMuY29udHJvbHMsIGAke3BhcmVudF9uYW1lfVske2luZGV4fV1gKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnZlcnRUb0Zvcm1EYXRhID0gZGF0YSA9PiB7XHJcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgXy5mb3JPd24oZGF0YSwgKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgaWYgKF8uaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICBfLmVhY2godmFsdWUsIGZpbGUgPT4gZm9ybS5hcHBlbmQoYCR7a2V5fVtdYCwgZmlsZSwgZmlsZS5uYW1lKSk7XHJcbiAgICAgIH0gZWxzZSBmb3JtLmFwcGVuZChrZXksIHZhbHVlKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZm9ybTtcclxuICB9O1xyXG5cclxuICBjb252ZXJ0VG9NZWRpYVR5cGUgPSAodmFsdWUsIG1lZGlhX3R5cGUpID0+IHtcclxuXHJcbiAgICBpZiAobWVkaWFfdHlwZSkge1xyXG4gICAgICBzd2l0Y2ggKG1lZGlhX3R5cGUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgIGNhc2UgJ2pzb24nOlxyXG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuICAgICAgICBjYXNlICdmb3JtLWRhdGEnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29udmVydFRvRm9ybURhdGEodmFsdWUpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9O1xyXG5cclxufVxyXG5cclxuXHJcbiJdfQ==