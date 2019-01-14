/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { FormGroup } from '../models/FormGroup';
import { FormControl } from '../models/FormControl';
import _ from 'lodash';
import { FormArray } from '../models/FormArray';
export class FormService {
    constructor() {
        this.mergeControls = (controls, parent_name = null) => {
            /** @type {?} */
            let result = [];
            //
            if (_.isPlainObject(controls)) {
                _.forOwn(controls, (c, name) => {
                    /** @type {?} */
                    const control_name = parent_name ? `${parent_name}[${name}]` : name;
                    if (c instanceof FormControl)
                        result.push(control_name);
                    if (c instanceof FormGroup)
                        result = result.concat(this.mergeControls(c.controls, control_name));
                    if (c instanceof FormArray)
                        result = result.concat(this.mergeControls(c.controls, control_name));
                });
            }
            if (_.isArray(controls)) {
                _.each(controls, (c, index) => {
                    if (c instanceof FormControl)
                        result.push(`${parent_name}[${index}]`);
                    if (c instanceof FormGroup)
                        result = result.concat(this.mergeControls(c.controls, `${parent_name}[${index}]`));
                    if (c instanceof FormArray)
                        result = result.concat(this.mergeControls(c.controls, `${parent_name}[${index}]`));
                });
            }
            return result;
        };
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
    /** @type {?} */
    FormService.prototype.mergeControls;
    /** @type {?} */
    FormService.prototype.convertToFormData;
    /** @type {?} */
    FormService.prototype.convertToMediaType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL3Byb3ZpZGVycy9mb3JtLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsVUFBVSxFQUErQyxNQUFNLGVBQWUsQ0FBQztBQUN2RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFaEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sQ0FBQyxNQUFNLFFBQVEsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFNaEQsTUFBTSxPQUFPLFdBQVc7SUFGeEI7UUFpQkUsa0JBQWEsR0FBRyxDQUFDLFFBQXlDLEVBQUUsY0FBc0IsSUFBSSxFQUFFLEVBQUU7O2dCQUNwRixNQUFNLEdBQUcsRUFBRTtZQUNmLEVBQUU7WUFHRixJQUFJLENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzdCLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBa0IsRUFBRSxJQUFZLEVBQUUsRUFBRTs7MEJBQ2hELFlBQVksR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJO29CQUVuRSxJQUFJLENBQUMsWUFBWSxXQUFXO3dCQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBRXhELElBQUksQ0FBQyxZQUFZLFNBQVM7d0JBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7b0JBRWpHLElBQUksQ0FBQyxZQUFZLFNBQVM7d0JBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ25HLENBQUMsQ0FBQyxDQUFDO2FBQ0o7WUFFRCxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3ZCLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBa0IsRUFBRSxLQUFLLEVBQUUsRUFBRTtvQkFFN0MsSUFBSSxDQUFDLFlBQVksV0FBVzt3QkFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBVyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBRXRFLElBQUksQ0FBQyxZQUFZLFNBQVM7d0JBQUUsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsV0FBVyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFFL0csSUFBSSxDQUFDLFlBQVksU0FBUzt3QkFBRSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxXQUFXLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNqSCxDQUFDLENBQUMsQ0FBQzthQUNKO1lBRUQsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDO1FBR0Ysc0JBQWlCLEdBQUcsSUFBSSxDQUFDLEVBQUU7O2tCQUNuQixJQUFJLEdBQUcsSUFBSSxRQUFRLEVBQUU7WUFFM0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDcEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUNqRTs7b0JBQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFakMsQ0FBQyxDQUFDLENBQUM7WUFFSCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsQ0FBQztRQUVGLHVCQUFrQixHQUFHLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBRSxFQUFFO1lBRXpDLElBQUksVUFBVSxFQUFFO2dCQUNkLFFBQVEsVUFBVSxDQUFDLFdBQVcsRUFBRSxFQUFFO29CQUNoQyxLQUFLLE1BQU07d0JBQ1QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMvQixLQUFLLFdBQVc7d0JBQ2QsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3ZDO3dCQUNFLE9BQU8sS0FBSyxDQUFDO2lCQUNoQjthQUNGO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDLENBQUM7SUFFSixDQUFDOzs7O0lBekVDLGVBQWU7SUFDZixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtJQUNsQyxDQUFDOzs7O0lBRUQsV0FBVztJQUNYLENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBZEYsVUFBVTs7OztJQWlCVCxvQ0E2QkU7O0lBR0Ysd0NBV0U7O0lBRUYseUNBYUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBJbmplY3RhYmxlLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJy4uL21vZGVscy9Gb3JtR3JvdXAnO1xyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICcuLi9tb2RlbHMvQWJzdHJhY3RDb250cm9sJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICcuLi9tb2RlbHMvRm9ybUNvbnRyb2wnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBGb3JtQXJyYXkgfSBmcm9tICcuLi9tb2RlbHMvRm9ybUFycmF5JztcclxuaW1wb3J0IHsgRm9ybUFycmF5U3RhdGUsIEZvcm1Hcm91cFN0YXRlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Gb3JtJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybVNlcnZpY2UgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG5cclxuICBtZXJnZUNvbnRyb2xzID0gKGNvbnRyb2xzOiBGb3JtR3JvdXBTdGF0ZSB8IEZvcm1BcnJheVN0YXRlLCBwYXJlbnRfbmFtZTogc3RyaW5nID0gbnVsbCkgPT4ge1xyXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgLy9cclxuXHJcblxyXG4gICAgaWYgKF8uaXNQbGFpbk9iamVjdChjb250cm9scykpIHtcclxuICAgICAgXy5mb3JPd24oY29udHJvbHMsIChjOiBBYnN0cmFjdENvbnRyb2wsIG5hbWU6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvbnRyb2xfbmFtZSA9IHBhcmVudF9uYW1lID8gYCR7cGFyZW50X25hbWV9WyR7bmFtZX1dYCA6IG5hbWU7XHJcblxyXG4gICAgICAgIGlmIChjIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wpIHJlc3VsdC5wdXNoKGNvbnRyb2xfbmFtZSk7XHJcblxyXG4gICAgICAgIGlmIChjIGluc3RhbmNlb2YgRm9ybUdyb3VwKSByZXN1bHQgPSByZXN1bHQuY29uY2F0KHRoaXMubWVyZ2VDb250cm9scyhjLmNvbnRyb2xzLCBjb250cm9sX25hbWUpKTtcclxuXHJcbiAgICAgICAgaWYgKGMgaW5zdGFuY2VvZiBGb3JtQXJyYXkpIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQodGhpcy5tZXJnZUNvbnRyb2xzKGMuY29udHJvbHMsIGNvbnRyb2xfbmFtZSkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoXy5pc0FycmF5KGNvbnRyb2xzKSkge1xyXG4gICAgICBfLmVhY2goY29udHJvbHMsIChjOiBBYnN0cmFjdENvbnRyb2wsIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChjIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wpIHJlc3VsdC5wdXNoKGAke3BhcmVudF9uYW1lfVske2luZGV4fV1gKTtcclxuXHJcbiAgICAgICAgaWYgKGMgaW5zdGFuY2VvZiBGb3JtR3JvdXApIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQodGhpcy5tZXJnZUNvbnRyb2xzKGMuY29udHJvbHMsIGAke3BhcmVudF9uYW1lfVske2luZGV4fV1gKSk7XHJcblxyXG4gICAgICAgIGlmIChjIGluc3RhbmNlb2YgRm9ybUFycmF5KSByZXN1bHQgPSByZXN1bHQuY29uY2F0KHRoaXMubWVyZ2VDb250cm9scyhjLmNvbnRyb2xzLCBgJHtwYXJlbnRfbmFtZX1bJHtpbmRleH1dYCkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH07XHJcblxyXG5cclxuICBjb252ZXJ0VG9Gb3JtRGF0YSA9IGRhdGEgPT4ge1xyXG4gICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSgpO1xyXG5cclxuICAgIF8uZm9yT3duKGRhdGEsICh2YWx1ZSwga2V5KSA9PiB7XHJcbiAgICAgIGlmIChfLmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgXy5lYWNoKHZhbHVlLCBmaWxlID0+IGZvcm0uYXBwZW5kKGAke2tleX1bXWAsIGZpbGUsIGZpbGUubmFtZSkpO1xyXG4gICAgICB9IGVsc2UgZm9ybS5hcHBlbmQoa2V5LCB2YWx1ZSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm07XHJcbiAgfTtcclxuXHJcbiAgY29udmVydFRvTWVkaWFUeXBlID0gKHZhbHVlLCBtZWRpYV90eXBlKSA9PiB7XHJcblxyXG4gICAgaWYgKG1lZGlhX3R5cGUpIHtcclxuICAgICAgc3dpdGNoIChtZWRpYV90eXBlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICBjYXNlICdqc29uJzpcclxuICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XHJcbiAgICAgICAgY2FzZSAnZm9ybS1kYXRhJzpcclxuICAgICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRUb0Zvcm1EYXRhKHZhbHVlKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfTtcclxuXHJcbn1cclxuXHJcblxyXG4iXX0=