/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class ControlContainer {
    /**
     * @param {?} cd
     */
    constructor(cd) {
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
    /**
     * @return {?}
     */
    get parent() {
        return this._parent;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set parent(value) {
        if (value instanceof ControlContainer)
            this._parent = value;
    }
    /**
     * @return {?}
     */
    get name() {
        return this._name;
    }
    /**
     * @param {?} name
     * @return {?}
     */
    set name(name) {
        this._name = trim(name);
    }
    ;
    /**
     * \@description
     * The top-level FormGroup for this group if present, otherwise null.
     * @return {?}
     */
    get root() {
        return this.parent ? this.parent.root : null;
    }
    /**
     * \@description
     * Returns an array that represents the path from the top-level form to this control.
     * Each index is the string name of the control on that level.
     * @return {?}
     */
    get path() {
        return this.parent ? [...this.parent.path, this.name, 'controls'] : [this.name, 'controls'];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
    ngAfterViewInit() {
    }
}
ControlContainer.propDecorators = {
    parent: [{ type: Input, args: ['parent',] }],
    name: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udHJvbENvbnRhaW5lci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9mb3JtLyIsInNvdXJjZXMiOlsiY29yZS9pbnRlcmZhY2VzL0NvbnRyb2xDb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFVQSxPQUFPLEVBQW9DLEtBQUssRUFBb0MsTUFBTSxlQUFlLENBQUM7QUFDMUcsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQzs7Ozs7Ozs7O0FBVTlCLE1BQU0sT0FBZ0IsZ0JBQWdCOzs7O0lBdURwQyxZQUFtQixFQUFxQjtRQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjs7Ozs7OztRQWhEaEMsWUFBTyxHQUE0QixJQUFJLENBQUM7Ozs7OztRQWlCeEMsVUFBSyxHQUFrQixJQUFJLENBQUM7SUFnQ3BDLENBQUM7Ozs7SUEvQ0QsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsSUFBcUIsTUFBTSxDQUFDLEtBQXVCO1FBQ2pELElBQUksS0FBSyxZQUFZLGdCQUFnQjtZQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBRTlELENBQUM7Ozs7SUFVRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFHRCxJQUFhLElBQUksQ0FBQyxJQUFZO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFBQSxDQUFDOzs7Ozs7SUFPRixJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDL0MsQ0FBQzs7Ozs7OztJQU9ELElBQUksSUFBSTtRQUVOLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQztJQUM5RixDQUFDOzs7O0lBTUQsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO0lBQ2xDLENBQUM7Ozs7SUFFRCxlQUFlO0lBQ2YsQ0FBQzs7O3FCQXBEQSxLQUFLLFNBQUMsUUFBUTttQkFrQmQsS0FBSzs7Ozs7Ozs7Ozs7SUF4Qk4sbUNBQWdEOzs7Ozs7OztJQWlCaEQsaUNBQW9DOztJQStCeEIsOEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqL1xyXG5cclxuXHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJy4uL21vZGVscy9Gb3JtR3JvdXAnO1xyXG5pbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDaGFuZ2VEZXRlY3RvclJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRyaW0gfSBmcm9tICdsb2Rhc2gnO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIGJhc2UgY2xhc3MgZm9yIGRpcmVjdGl2ZXMgdGhhdCBjb250YWluIG11bHRpcGxlIHJlZ2lzdGVyZWQgaW5zdGFuY2VzIG9mIGBJb0NvbnRyb2xgLlxyXG4gKiBPbmx5IHVzZWQgYnkgdGhlIGZvcm1zIG1vZHVsZS5cclxuICpcclxuICogQHB1YmxpY0FwaVxyXG4gKi9cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb250cm9sQ29udGFpbmVyIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQge1xyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIFRoZSBwYXJlbnQgZm9ybSBmb3IgdGhlIGNvbnRyb2wuXHJcbiAgICpcclxuICAgKiBAaW50ZXJuYWxcclxuICAgKi9cclxuICBwcml2YXRlIF9wYXJlbnQ6IENvbnRyb2xDb250YWluZXIgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgZ2V0IHBhcmVudCgpOiBDb250cm9sQ29udGFpbmVyIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdwYXJlbnQnKSBzZXQgcGFyZW50KHZhbHVlOiBDb250cm9sQ29udGFpbmVyKSB7XHJcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBDb250cm9sQ29udGFpbmVyKSB0aGlzLl9wYXJlbnQgPSB2YWx1ZTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBUcmFja3MgdGhlIG5hbWUgb2YgdGhlIENvbnRyb2wgYm91bmQgdG8gdGhlIGNvbXBvbmVudHMuIFRoZSBuYW1lIGNvcnJlc3BvbmRzXHJcbiAgICogdG8gYSBrZXkgaW4gdGhlIHBhcmVudCBgRm9ybUdyb3VwYCBvciBgRm9ybUFycmF5YC5cclxuICAgKi9cclxuXHJcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIGdldCBuYW1lKCk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuXHJcbiAgQElucHV0KCkgc2V0IG5hbWUobmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gdHJpbShuYW1lKTtcclxuICB9O1xyXG5cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogVGhlIHRvcC1sZXZlbCBGb3JtR3JvdXAgZm9yIHRoaXMgZ3JvdXAgaWYgcHJlc2VudCwgb3RoZXJ3aXNlIG51bGwuXHJcbiAgICovXHJcbiAgZ2V0IHJvb3QoKTogRm9ybUdyb3VwIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyB0aGlzLnBhcmVudC5yb290IDogbnVsbDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIFJldHVybnMgYW4gYXJyYXkgdGhhdCByZXByZXNlbnRzIHRoZSBwYXRoIGZyb20gdGhlIHRvcC1sZXZlbCBmb3JtIHRvIHRoaXMgY29udHJvbC5cclxuICAgKiBFYWNoIGluZGV4IGlzIHRoZSBzdHJpbmcgbmFtZSBvZiB0aGUgY29udHJvbCBvbiB0aGF0IGxldmVsLlxyXG4gICAqL1xyXG4gIGdldCBwYXRoKCk6IHN0cmluZ1tdIHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5wYXJlbnQgPyBbLi4udGhpcy5wYXJlbnQucGF0aCwgdGhpcy5uYW1lLCAnY29udHJvbHMnXSA6IFt0aGlzLm5hbWUsICdjb250cm9scyddO1xyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcbn1cclxuIl19