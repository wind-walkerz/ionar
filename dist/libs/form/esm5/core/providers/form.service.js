/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import _ from 'lodash';
var FormService = /** @class */ (function () {
    function FormService() {
        var _this = this;
        this.$initialize = new Subject();
        this.initialize = function (formGroup) {
            _this.formGroup = formGroup;
            _this.$initialize.next(formGroup);
        };
        this.getFormGroup = function () { return _this.formGroup; };
        this.getControl = function (name) { return _this.formGroup.get(name); };
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
    /**
     * @type {?}
     * @private
     */
    FormService.prototype.formGroup;
    /** @type {?} */
    FormService.prototype.$initialize;
    /** @type {?} */
    FormService.prototype.initialize;
    /** @type {?} */
    FormService.prototype.getFormGroup;
    /** @type {?} */
    FormService.prototype.getControl;
    /** @type {?} */
    FormService.prototype.convertToFormData;
    /** @type {?} */
    FormService.prototype.convertToMediaType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL3Byb3ZpZGVycy9mb3JtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsVUFBVSxFQUErQyxNQUFNLGVBQWUsQ0FBQztBQUl2RyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUd2QjtJQUFBO1FBQUEsaUJBMkRDO1FBckRDLGdCQUFXLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQTtRQWdCM0IsZUFBVSxHQUFHLFVBQUMsU0FBb0I7WUFDaEMsS0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDM0IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDbEMsQ0FBQyxDQUFDO1FBR0YsaUJBQVksR0FBRyxjQUFpQixPQUFBLEtBQUksQ0FBQyxTQUFTLEVBQWQsQ0FBYyxDQUFDO1FBQy9DLGVBQVUsR0FBRyxVQUFDLElBQUksSUFBc0IsT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBeEIsQ0FBd0IsQ0FBQztRQUVqRSxzQkFBaUIsR0FBRyxVQUFBLElBQUk7O2dCQUNoQixJQUFJLEdBQUcsSUFBSSxRQUFRLEVBQUU7WUFFM0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsVUFBQyxLQUFLLEVBQUUsR0FBRztnQkFDeEIsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxNQUFNLENBQUksR0FBRyxPQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQyxDQUFDO2lCQUNqRTs7b0JBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFakMsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQztRQUVGLHVCQUFrQixHQUFHLFVBQUMsS0FBSyxFQUFFLFVBQVU7WUFFckMsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsUUFBUSxVQUFVLENBQUMsV0FBVyxFQUFFLEVBQUU7b0JBQ2hDLEtBQUssTUFBTTt3QkFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQy9CLEtBQUssV0FBVzt3QkFDZCxPQUFPLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdkM7d0JBQ0UsT0FBTyxLQUFLLENBQUM7aUJBQ2hCO2FBQ0Y7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQztJQUVKLENBQUM7Ozs7SUFsREMscUNBQWU7OztJQUFmO0lBQ0EsQ0FBQzs7Ozs7SUFFRCxpQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7SUFDbEMsQ0FBQzs7OztJQUVELGlDQUFXOzs7SUFBWDtJQUNBLENBQUM7Ozs7SUFFRCw4QkFBUTs7O0lBQVI7SUFDQSxDQUFDOztnQkFuQkYsVUFBVTs7SUEyRFgsa0JBQUM7Q0FBQSxBQTNERCxJQTJEQztTQXpEWSxXQUFXOzs7Ozs7SUFFdEIsZ0NBQTZCOztJQUU3QixrQ0FBMkI7O0lBZ0IzQixpQ0FHRTs7SUFHRixtQ0FBK0M7O0lBQy9DLGlDQUFpRTs7SUFFakUsd0NBV0U7O0lBRUYseUNBYUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBJbmplY3RhYmxlLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJy4uL21vZGVscy9Gb3JtR3JvdXAnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICcuLi9tb2RlbHMvQWJzdHJhY3RDb250cm9sJztcclxuaW1wb3J0IHsgVmFsaWRhdGlvbkNvbmZpZ3MgfSBmcm9tICcuLi9tb2RlbHMvVmFsaWRhdG9yJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuXHJcbmV4cG9ydCBjbGFzcyBGb3JtU2VydmljZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG5cclxuICBwcml2YXRlIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xyXG5cclxuICAkaW5pdGlhbGl6ZSA9IG5ldyBTdWJqZWN0KClcclxuXHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuXHJcbiAgaW5pdGlhbGl6ZSA9IChmb3JtR3JvdXA6IEZvcm1Hcm91cCkgPT4ge1xyXG4gICAgdGhpcy5mb3JtR3JvdXAgPSBmb3JtR3JvdXA7XHJcbiAgICB0aGlzLiRpbml0aWFsaXplLm5leHQoZm9ybUdyb3VwKVxyXG4gIH07XHJcblxyXG5cclxuICBnZXRGb3JtR3JvdXAgPSAoKTogRm9ybUdyb3VwID0+IHRoaXMuZm9ybUdyb3VwO1xyXG4gIGdldENvbnRyb2wgPSAobmFtZSk6IEFic3RyYWN0Q29udHJvbCA9PiB0aGlzLmZvcm1Hcm91cC5nZXQobmFtZSk7XHJcblxyXG4gIGNvbnZlcnRUb0Zvcm1EYXRhID0gZGF0YSA9PiB7XHJcbiAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgXy5mb3JPd24oZGF0YSwgKHZhbHVlLCBrZXkpID0+IHtcclxuICAgICAgaWYgKF8uaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICBfLmVhY2godmFsdWUsIGZpbGUgPT4gZm9ybS5hcHBlbmQoYCR7a2V5fVtdYCwgZmlsZSwgZmlsZS5uYW1lKSk7XHJcbiAgICAgIH0gZWxzZSBmb3JtLmFwcGVuZChrZXksIHZhbHVlKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZm9ybTtcclxuICB9O1xyXG5cclxuICBjb252ZXJ0VG9NZWRpYVR5cGUgPSAodmFsdWUsIG1lZGlhX3R5cGUpID0+IHtcclxuXHJcbiAgICBpZiAobWVkaWFfdHlwZSkge1xyXG4gICAgICBzd2l0Y2ggKG1lZGlhX3R5cGUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgIGNhc2UgJ2pzb24nOlxyXG4gICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcclxuICAgICAgICBjYXNlICdmb3JtLWRhdGEnOlxyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29udmVydFRvRm9ybURhdGEodmFsdWUpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9O1xyXG5cclxufVxyXG5cclxuXHJcbiJdfQ==