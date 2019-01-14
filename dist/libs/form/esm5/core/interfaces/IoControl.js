/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ControlContainer } from './ControlContainer';
/**
 * \@description
 * A base class that all control `FormControl`-based directives extend. It binds a `FormControl`
 * object to a DOM element.
 *
 * \@publicApi
 * @abstract
 */
var /**
 * \@description
 * A base class that all control `FormControl`-based directives extend. It binds a `FormControl`
 * object to a DOM element.
 *
 * \@publicApi
 * @abstract
 */
IoControl = /** @class */ (function (_super) {
    tslib_1.__extends(IoControl, _super);
    function IoControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(IoControl.prototype, "control", {
        /**
         * @description
         * Tracks the `FormControl` instance bound to the directive.
         */
        get: /**
         * \@description
         * Tracks the `FormControl` instance bound to the directive.
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.root.get(this.path)));
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(IoControl.prototype, "path", {
        /**
         * @description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         */
        get: /**
         * \@description
         * Returns an array that represents the path from the top-level form to this control.
         * Each index is the string name of the control on that level.
         * @return {?}
         */
        function () {
            return this.parent ? tslib_1.__spread(this.parent.path, [this.name]) : [];
        },
        enumerable: true,
        configurable: true
    });
    return IoControl;
}(ControlContainer));
/**
 * \@description
 * A base class that all control `FormControl`-based directives extend. It binds a `FormControl`
 * object to a DOM element.
 *
 * \@publicApi
 * @abstract
 */
export { IoControl };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW9Db250cm9sLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL2ludGVyZmFjZXMvSW9Db250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQU9BLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7QUFjdEQ7Ozs7Ozs7OztJQUF3QyxxQ0FBZ0I7SUFBeEQ7O0lBcUJBLENBQUM7SUFmQyxzQkFBVyw4QkFBTztRQUpsQjs7O1dBR0c7Ozs7OztRQUNIO1lBRUUsT0FBTyxtQkFBYSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUEsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUFBLENBQUM7SUFRRixzQkFBSSwyQkFBSTtRQUxSOzs7O1dBSUc7Ozs7Ozs7UUFDSDtZQUVFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGtCQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFFLElBQUksQ0FBQyxJQUFJLEdBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM3RCxDQUFDOzs7T0FBQTtJQUNILGdCQUFDO0FBQUQsQ0FBQyxBQXJCRCxDQUF3QyxnQkFBZ0IsR0FxQnZEIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqL1xyXG5pbXBvcnQgeyBDb250cm9sQ29udGFpbmVyIH0gZnJvbSAnLi9Db250cm9sQ29udGFpbmVyJztcclxuXHJcbmltcG9ydCB7IEZvcm1Db250cm9sfSBmcm9tICcuLi9tb2RlbHMvRm9ybUNvbnRyb2wnXHJcblxyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIGJhc2UgY2xhc3MgdGhhdCBhbGwgY29udHJvbCBgRm9ybUNvbnRyb2xgLWJhc2VkIGRpcmVjdGl2ZXMgZXh0ZW5kLiBJdCBiaW5kcyBhIGBGb3JtQ29udHJvbGBcclxuICogb2JqZWN0IHRvIGEgRE9NIGVsZW1lbnQuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcblxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIElvQ29udHJvbCBleHRlbmRzIENvbnRyb2xDb250YWluZXIge1xyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBUcmFja3MgdGhlIGBGb3JtQ29udHJvbGAgaW5zdGFuY2UgYm91bmQgdG8gdGhlIGRpcmVjdGl2ZS5cclxuICAgKi9cclxuICBwdWJsaWMgZ2V0IGNvbnRyb2woKTogRm9ybUNvbnRyb2wge1xyXG5cclxuICAgIHJldHVybiA8Rm9ybUNvbnRyb2w+dGhpcy5yb290LmdldCh0aGlzLnBhdGgpO1xyXG4gIH07XHJcblxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBSZXR1cm5zIGFuIGFycmF5IHRoYXQgcmVwcmVzZW50cyB0aGUgcGF0aCBmcm9tIHRoZSB0b3AtbGV2ZWwgZm9ybSB0byB0aGlzIGNvbnRyb2wuXHJcbiAgICogRWFjaCBpbmRleCBpcyB0aGUgc3RyaW5nIG5hbWUgb2YgdGhlIGNvbnRyb2wgb24gdGhhdCBsZXZlbC5cclxuICAgKi9cclxuICBnZXQgcGF0aCgpOiBzdHJpbmdbXSB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gWy4uLnRoaXMucGFyZW50LnBhdGgsIHRoaXMubmFtZV0gOiBbXTtcclxuICB9XHJcbn1cclxuIl19