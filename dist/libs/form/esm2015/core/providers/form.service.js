/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import _ from 'lodash';
export class FormService {
    constructor() {
        this.$initialize = new Subject();
        this.initialize = (formGroup) => {
            this.formGroup = formGroup;
            this.$initialize.next(formGroup);
        };
        this.getFormGroup = () => this.formGroup;
        this.getControl = (name) => this.formGroup.get(name);
        this.convertToFormData = data => {
            /** @type {?} */
            const form = new FormData();
            _.forOwn(data, (value, key) => {
                if (_.isArray(value)) {
                    _.each(value, file => form.append(`${key}[]`, file, file.name));
                }
                else
                    form.append(key, value);
            });
            return form;
        };
        this.convertToMediaType = (value, media_type) => {
            if (media_type) {
                switch (media_type.toLowerCase()) {
                    case 'json':
                        return JSON.stringify(value);
                    case 'form-data':
                        return this.convertToFormData(value);
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
    ngAfterViewInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FormService.decorators = [
    { type: Injectable }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL3Byb3ZpZGVycy9mb3JtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsVUFBVSxFQUErQyxNQUFNLGVBQWUsQ0FBQztBQUl2RyxPQUFPLEVBQWMsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzNDLE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUt2QixNQUFNLE9BQU8sV0FBVztJQUZ4QjtRQU1FLGdCQUFXLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQTtRQWdCM0IsZUFBVSxHQUFHLENBQUMsU0FBb0IsRUFBRSxFQUFFO1lBQ3BDLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ2xDLENBQUMsQ0FBQztRQUdGLGlCQUFZLEdBQUcsR0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMvQyxlQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVqRSxzQkFBaUIsR0FBRyxJQUFJLENBQUMsRUFBRTs7a0JBQ25CLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRTtZQUUzQixDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUNwQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7aUJBQ2pFOztvQkFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUVqQyxDQUFDLENBQUMsQ0FBQztZQUVILE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDO1FBRUYsdUJBQWtCLEdBQUcsQ0FBQyxLQUFLLEVBQUUsVUFBVSxFQUFFLEVBQUU7WUFFekMsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsUUFBUSxVQUFVLENBQUMsV0FBVyxFQUFFLEVBQUU7b0JBQ2hDLEtBQUssTUFBTTt3QkFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQy9CLEtBQUssV0FBVzt3QkFDZCxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdkM7d0JBQ0UsT0FBTyxLQUFLLENBQUM7aUJBQ2hCO2FBQ0Y7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsQ0FBQztJQUVKLENBQUM7Ozs7SUFsREMsZUFBZTtJQUNmLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO0lBQ2xDLENBQUM7Ozs7SUFFRCxXQUFXO0lBQ1gsQ0FBQzs7OztJQUVELFFBQVE7SUFDUixDQUFDOzs7WUFuQkYsVUFBVTs7Ozs7OztJQUlULGdDQUE2Qjs7SUFFN0Isa0NBQTJCOztJQWdCM0IsaUNBR0U7O0lBR0YsbUNBQStDOztJQUMvQyxpQ0FBaUU7O0lBRWpFLHdDQVdFOztJQUVGLHlDQWFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgSW5qZWN0YWJsZSwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICcuLi9tb2RlbHMvRm9ybUdyb3VwJztcclxuaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnLi4vbW9kZWxzL0Fic3RyYWN0Q29udHJvbCc7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25Db25maWdzIH0gZnJvbSAnLi4vbW9kZWxzL1ZhbGlkYXRvcic7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybVNlcnZpY2UgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgcHJpdmF0ZSBmb3JtR3JvdXA6IEZvcm1Hcm91cDtcclxuXHJcbiAgJGluaXRpYWxpemUgPSBuZXcgU3ViamVjdCgpXHJcblxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcblxyXG4gIGluaXRpYWxpemUgPSAoZm9ybUdyb3VwOiBGb3JtR3JvdXApID0+IHtcclxuICAgIHRoaXMuZm9ybUdyb3VwID0gZm9ybUdyb3VwO1xyXG4gICAgdGhpcy4kaW5pdGlhbGl6ZS5uZXh0KGZvcm1Hcm91cClcclxuICB9O1xyXG5cclxuXHJcbiAgZ2V0Rm9ybUdyb3VwID0gKCk6IEZvcm1Hcm91cCA9PiB0aGlzLmZvcm1Hcm91cDtcclxuICBnZXRDb250cm9sID0gKG5hbWUpOiBBYnN0cmFjdENvbnRyb2wgPT4gdGhpcy5mb3JtR3JvdXAuZ2V0KG5hbWUpO1xyXG5cclxuICBjb252ZXJ0VG9Gb3JtRGF0YSA9IGRhdGEgPT4ge1xyXG4gICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgIF8uZm9yT3duKGRhdGEsICh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgIGlmIChfLmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgXy5lYWNoKHZhbHVlLCBmaWxlID0+IGZvcm0uYXBwZW5kKGAke2tleX1bXWAsIGZpbGUsIGZpbGUubmFtZSkpO1xyXG4gICAgICB9IGVsc2UgZm9ybS5hcHBlbmQoa2V5LCB2YWx1ZSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm07XHJcbiAgfTtcclxuXHJcbiAgY29udmVydFRvTWVkaWFUeXBlID0gKHZhbHVlLCBtZWRpYV90eXBlKSA9PiB7XHJcblxyXG4gICAgaWYgKG1lZGlhX3R5cGUpIHtcclxuICAgICAgc3dpdGNoIChtZWRpYV90eXBlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICBjYXNlICdqc29uJzpcclxuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICAgICAgY2FzZSAnZm9ybS1kYXRhJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRUb0Zvcm1EYXRhKHZhbHVlKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfTtcclxuXHJcbn1cclxuXHJcblxyXG4iXX0=