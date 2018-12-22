/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
export class FieldTemplateDirective {
    /**
     * @param {?} _vcRef
     * @param {?} _tplRef
     */
    constructor(_vcRef, _tplRef) {
        this._vcRef = _vcRef;
        this._tplRef = _tplRef;
        this.name = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._vcRef.clear();
    }
}
FieldTemplateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[fieldTemplate]'
            },] }
];
/** @nocollapse */
FieldTemplateDirective.ctorParameters = () => [
    { type: ViewContainerRef },
    { type: TemplateRef }
];
FieldTemplateDirective.propDecorators = {
    name: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    FieldTemplateDirective.prototype.name;
    /**
     * @type {?}
     * @private
     */
    FieldTemplateDirective.prototype._vcRef;
    /**
     * @type {?}
     * @private
     */
    FieldTemplateDirective.prototype._tplRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQtdGVtcGxhdGUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL2RpcmVjdGl2ZXMvZmllbGQtdGVtcGxhdGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBR00sU0FBUyxFQUFFLEtBQUssRUFDbkIsV0FBVyxFQUFFLGdCQUFnQixFQUN0QyxNQUFNLGVBQWUsQ0FBQztBQU12QixNQUFNLE9BQU8sc0JBQXNCOzs7OztJQUlqQyxZQUNVLE1BQXdCLEVBQ3hCLE9BQXlCO1FBRHpCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBSjFCLFNBQUksR0FBUSxFQUFFLENBQUM7SUFNeEIsQ0FBQzs7OztJQUVELFFBQVE7SUFFUixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2FBQzVCOzs7O1lBTnNCLGdCQUFnQjtZQUE3QixXQUFXOzs7bUJBU2xCLEtBQUs7Ozs7SUFBTixzQ0FBd0I7Ozs7O0lBR3RCLHdDQUFnQzs7Ozs7SUFDaEMseUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCwgRGlyZWN0aXZlLCBJbnB1dCxcclxuICBPbkluaXQsIFRlbXBsYXRlUmVmLCBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZmllbGRUZW1wbGF0ZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBGaWVsZFRlbXBsYXRlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgQElucHV0KCkgbmFtZTogYW55ID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIF90cGxSZWY6IFRlbXBsYXRlUmVmPGFueT5cclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3ZjUmVmLmNsZWFyKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==