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
import { Input } from '@angular/core';
import { trim } from 'lodash';
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
            this._name = trim(name);
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
        parent: [{ type: Input, args: ['parent',] }],
        name: [{ type: Input }]
    };
    return ControlContainer;
}());
export { ControlContainer };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbENvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9mb3JtLyIsInNvdXJjZXMiOlsiY29yZS9pbnRlcmZhY2VzL0NvbnRyb2xDb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBVUEsT0FBTyxFQUFvQyxLQUFLLEVBQW9DLE1BQU0sZUFBZSxDQUFDO0FBQzFHLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7OztBQVU5QjtJQXVERSwwQkFBbUIsRUFBcUI7UUFBckIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7Ozs7Ozs7UUFoRGhDLFlBQU8sR0FBNEIsSUFBSSxDQUFDOzs7Ozs7UUFpQnhDLFVBQUssR0FBa0IsSUFBSSxDQUFDO0lBZ0NwQyxDQUFDO0lBL0NELHNCQUFJLG9DQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzs7Ozs7UUFFRCxVQUE0QixLQUF1QjtZQUNqRCxJQUFJLEtBQUssWUFBWSxnQkFBZ0I7Z0JBQUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFFOUQsQ0FBQzs7O09BTEE7SUFlRCxzQkFBSSxrQ0FBSTs7OztRQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7Ozs7O1FBR0QsVUFBa0IsSUFBWTtZQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixDQUFDOzs7T0FMQTtJQUtBLENBQUM7SUFPRixzQkFBSSxrQ0FBSTtRQUpSOzs7V0FHRzs7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFPRCxzQkFBSSxrQ0FBSTtRQUxSOzs7O1dBSUc7Ozs7Ozs7UUFDSDtZQUVFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLGtCQUFLLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxHQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDOUYsQ0FBQzs7O09BQUE7Ozs7SUFNRCxtQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUVELHNDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtJQUNsQyxDQUFDOzs7O0lBRUQsMENBQWU7OztJQUFmO0lBQ0EsQ0FBQzs7eUJBcERBLEtBQUssU0FBQyxRQUFRO3VCQWtCZCxLQUFLOztJQW9DUix1QkFBQztDQUFBLEFBbkVELElBbUVDO1NBbkVxQixnQkFBZ0I7Ozs7Ozs7Ozs7SUFPcEMsbUNBQWdEOzs7Ozs7OztJQWlCaEQsaUNBQW9DOztJQStCeEIsOEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqL1xyXG5cclxuXHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJy4uL21vZGVscy9Gb3JtR3JvdXAnO1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRyaW0gfSBmcm9tICdsb2Rhc2gnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIGJhc2UgY2xhc3MgZm9yIGRpcmVjdGl2ZXMgdGhhdCBjb250YWluIG11bHRpcGxlIHJlZ2lzdGVyZWQgaW5zdGFuY2VzIG9mIGBJb0NvbnRyb2xgLlxyXG4gKiBPbmx5IHVzZWQgYnkgdGhlIGZvcm1zIG1vZHVsZS5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb250cm9sQ29udGFpbmVyIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIFRoZSBwYXJlbnQgZm9ybSBmb3IgdGhlIGNvbnRyb2wuXHJcbiAgICpcclxuICAgKiBAaW50ZXJuYWxcclxuICAgKi9cclxuICBwcml2YXRlIF9wYXJlbnQ6IENvbnRyb2xDb250YWluZXIgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgZ2V0IHBhcmVudCgpOiBDb250cm9sQ29udGFpbmVyIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdwYXJlbnQnKSBzZXQgcGFyZW50KHZhbHVlOiBDb250cm9sQ29udGFpbmVyKSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBDb250cm9sQ29udGFpbmVyKSB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBUcmFja3MgdGhlIG5hbWUgb2YgdGhlIENvbnRyb2wgYm91bmQgdG8gdGhlIGNvbXBvbmVudHMuIFRoZSBuYW1lIGNvcnJlc3BvbmRzXHJcbiAgICogdG8gYSBrZXkgaW4gdGhlIHBhcmVudCBgRm9ybUdyb3VwYCBvciBgRm9ybUFycmF5YC5cclxuICAgKi9cclxuXHJcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGdldCBuYW1lKCk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuXHJcbiAgQElucHV0KCkgc2V0IG5hbWUobmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gdHJpbShuYW1lKTtcclxuICB9O1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogVGhlIHRvcC1sZXZlbCBGb3JtR3JvdXAgZm9yIHRoaXMgZ3JvdXAgaWYgcHJlc2VudCwgb3RoZXJ3aXNlIG51bGwuXHJcbiAgICovXHJcbiAgZ2V0IHJvb3QoKTogRm9ybUdyb3VwIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5yb290IDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIFJldHVybnMgYW4gYXJyYXkgdGhhdCByZXByZXNlbnRzIHRoZSBwYXRoIGZyb20gdGhlIHRvcC1sZXZlbCBmb3JtIHRvIHRoaXMgY29udHJvbC5cclxuICAgKiBFYWNoIGluZGV4IGlzIHRoZSBzdHJpbmcgbmFtZSBvZiB0aGUgY29udHJvbCBvbiB0aGF0IGxldmVsLlxyXG4gICAqL1xyXG4gIGdldCBwYXRoKCk6IHN0cmluZ1tdIHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyBbLi4udGhpcy5wYXJlbnQucGF0aCwgdGhpcy5uYW1lLCAnY29udHJvbHMnXSA6IFt0aGlzLm5hbWUsICdjb250cm9scyddO1xyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbn1cclxuIl19