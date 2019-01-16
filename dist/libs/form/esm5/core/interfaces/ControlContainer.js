"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var core_1 = require("@angular/core");
var lodash_1 = require("lodash");
/**
 * \@description
 * A base class for directives that contain multiple registered instances of `IoControl`.
 * Only used by the forms module.
 *
 * \@publicApi
 * @abstract
 */
var ControlContainer = /** @class */ (function () {
    function ControlContainer(cd) {
        this.cd = cd;
        /**
         * \@description
         * The parent form for the control.
         *
         * \@internal
         */
        this._parent = null;
        /**
         * \@description
         * Tracks the name of the Control bound to the components. The name corresponds
         * to a key in the parent `FormGroup` or `FormArray`.
         */
        this._name = null;
    }
    Object.defineProperty(ControlContainer.prototype, "parent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._parent;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof ControlContainer)
                this._parent = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlContainer.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            return this._name;
        },
        set: /**
         * @param {?} name
         * @return {?}
         */
        function (name) {
            this._name = lodash_1.trim(name);
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ControlContainer.prototype, "root", {
        /**
         * @description
         * The top-level FormGroup for this group if present, otherwise null.
         */
        get: /**
         * \@description
         * The top-level FormGroup for this group if present, otherwise null.
         * @return {?}
         */
        function () {
            return this.parent ? this.parent.root : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ControlContainer.prototype, "path", {
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
            return this.parent ? tslib_1.__spread(this.parent.path, [this.name, 'controls']) : [this.name, 'controls'];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ControlContainer.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ControlContainer.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    /**
     * @return {?}
     */
    ControlContainer.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
    };
    ControlContainer.propDecorators = {
        parent: [{ type: core_1.Input, args: ['parent',] }],
        name: [{ type: core_1.Input }]
    };
    return ControlContainer;
}());
exports.ControlContainer = ControlContainer;
if (false) {
    /**
     * \@description
     * The parent form for the control.
     *
     * \@internal
     * @type {?}
     * @private
     */
    ControlContainer.prototype._parent;
    /**
     * \@description
     * Tracks the name of the Control bound to the components. The name corresponds
     * to a key in the parent `FormGroup` or `FormArray`.
     * @type {?}
     * @private
     */
    ControlContainer.prototype._name;
    /** @type {?} */
    ControlContainer.prototype.cd;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbENvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9mb3JtLyIsInNvdXJjZXMiOlsiY29yZS9pbnRlcmZhY2VzL0NvbnRyb2xDb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFVQSxzQ0FBMEc7QUFDMUcsaUNBQThCOzs7Ozs7Ozs7QUFVOUI7SUF1REUsMEJBQW1CLEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1COzs7Ozs7O1FBaERoQyxZQUFPLEdBQTRCLElBQUksQ0FBQzs7Ozs7O1FBaUJ4QyxVQUFLLEdBQWtCLElBQUksQ0FBQztJQWdDcEMsQ0FBQztJQS9DRCxzQkFBSSxvQ0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7Ozs7O1FBRUQsVUFBNEIsS0FBdUI7WUFDakQsSUFBSSxLQUFLLFlBQVksZ0JBQWdCO2dCQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBRTlELENBQUM7OztPQUxBO0lBZUQsc0JBQUksa0NBQUk7Ozs7UUFBUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7OztRQUdELFVBQWtCLElBQVk7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsQ0FBQzs7O09BTEE7SUFLQSxDQUFDO0lBT0Ysc0JBQUksa0NBQUk7UUFKUjs7O1dBR0c7Ozs7OztRQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQy9DLENBQUM7OztPQUFBO0lBT0Qsc0JBQUksa0NBQUk7UUFMUjs7OztXQUlHOzs7Ozs7O1FBQ0g7WUFFRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxrQkFBSyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRSxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsR0FBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQzlGLENBQUM7OztPQUFBOzs7O0lBTUQsbUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Ozs7SUFFRCxzQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7SUFDbEMsQ0FBQzs7OztJQUVELDBDQUFlOzs7SUFBZjtJQUNBLENBQUM7O3lCQXBEQSxZQUFLLFNBQUMsUUFBUTt1QkFrQmQsWUFBSzs7SUFvQ1IsdUJBQUM7Q0FBQSxBQW5FRCxJQW1FQztBQW5FcUIsNENBQWdCOzs7Ozs7Ozs7O0lBT3BDLG1DQUFnRDs7Ozs7Ozs7SUFpQmhELGlDQUFvQzs7SUErQnhCLDhCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4gKi9cclxuXHJcblxyXG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICcuLi9tb2RlbHMvRm9ybUdyb3VwJztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0cmltIH0gZnJvbSAnbG9kYXNoJztcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBiYXNlIGNsYXNzIGZvciBkaXJlY3RpdmVzIHRoYXQgY29udGFpbiBtdWx0aXBsZSByZWdpc3RlcmVkIGluc3RhbmNlcyBvZiBgSW9Db250cm9sYC5cclxuICogT25seSB1c2VkIGJ5IHRoZSBmb3JtcyBtb2R1bGUuXHJcbiAqXHJcbiAqIEBwdWJsaWNBcGlcclxuICovXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29udHJvbENvbnRhaW5lciBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBUaGUgcGFyZW50IGZvcm0gZm9yIHRoZSBjb250cm9sLlxyXG4gICAqXHJcbiAgICogQGludGVybmFsXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfcGFyZW50OiBDb250cm9sQ29udGFpbmVyIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGdldCBwYXJlbnQoKTogQ29udHJvbENvbnRhaW5lciB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhcmVudDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgncGFyZW50Jykgc2V0IHBhcmVudCh2YWx1ZTogQ29udHJvbENvbnRhaW5lcikge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQ29udHJvbENvbnRhaW5lcikgdGhpcy5fcGFyZW50ID0gdmFsdWU7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogVHJhY2tzIHRoZSBuYW1lIG9mIHRoZSBDb250cm9sIGJvdW5kIHRvIHRoZSBjb21wb25lbnRzLiBUaGUgbmFtZSBjb3JyZXNwb25kc1xyXG4gICAqIHRvIGEga2V5IGluIHRoZSBwYXJlbnQgYEZvcm1Hcm91cGAgb3IgYEZvcm1BcnJheWAuXHJcbiAgICovXHJcblxyXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG5cclxuICBnZXQgbmFtZSgpOiBzdHJpbmcgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcblxyXG4gIEBJbnB1dCgpIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbmFtZSA9IHRyaW0obmFtZSk7XHJcbiAgfTtcclxuXHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIFRoZSB0b3AtbGV2ZWwgRm9ybUdyb3VwIGZvciB0aGlzIGdyb3VwIGlmIHByZXNlbnQsIG90aGVyd2lzZSBudWxsLlxyXG4gICAqL1xyXG4gIGdldCByb290KCk6IEZvcm1Hcm91cCB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gdGhpcy5wYXJlbnQucm9vdCA6IG51bGw7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBSZXR1cm5zIGFuIGFycmF5IHRoYXQgcmVwcmVzZW50cyB0aGUgcGF0aCBmcm9tIHRoZSB0b3AtbGV2ZWwgZm9ybSB0byB0aGlzIGNvbnRyb2wuXHJcbiAgICogRWFjaCBpbmRleCBpcyB0aGUgc3RyaW5nIG5hbWUgb2YgdGhlIGNvbnRyb2wgb24gdGhhdCBsZXZlbC5cclxuICAgKi9cclxuICBnZXQgcGF0aCgpOiBzdHJpbmdbXSB7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucGFyZW50ID8gWy4uLnRoaXMucGFyZW50LnBhdGgsIHRoaXMubmFtZSwgJ2NvbnRyb2xzJ10gOiBbdGhpcy5uYW1lLCAnY29udHJvbHMnXTtcclxuICB9XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==