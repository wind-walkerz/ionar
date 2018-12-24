/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { FormGroup } from '../models/FormGroup';
export class SubmitDirective {
    /**
     * @param {?} _elRef
     */
    constructor(_elRef) {
        this._elRef = _elRef;
        this.disabled = false;
        this.onClick = (e) => {
            if (!this.disabled) {
                this._formGr.submit();
            }
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // console.log(this._formGr)
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        // console.log(this._formGr)
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
SubmitDirective.decorators = [
    { type: Directive, args: [{
                selector: '[submitForm]'
            },] }
];
/** @nocollapse */
SubmitDirective.ctorParameters = () => [
    { type: ElementRef }
];
SubmitDirective.propDecorators = {
    _formGr: [{ type: Input, args: ['submitForm',] }],
    disabled: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    SubmitDirective.prototype._formGr;
    /** @type {?} */
    SubmitDirective.prototype.disabled;
    /** @type {?} */
    SubmitDirective.prototype.onClick;
    /**
     * @type {?}
     * @private
     */
    SubmitDirective.prototype._elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWl0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9mb3JtLyIsInNvdXJjZXMiOlsiY29yZS9kaXJlY3RpdmVzL3N1Ym1pdC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWdDLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUtoRCxNQUFNLE9BQU8sZUFBZTs7OztJQWUxQixZQUFvQixNQUFrQjtRQUFsQixXQUFNLEdBQU4sTUFBTSxDQUFZO1FBWjdCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFHbkMsWUFBTyxHQUFHLENBQUMsQ0FBYSxFQUFFLEVBQUU7WUFFMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBRWxCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDdkI7UUFFSCxDQUFDLENBQUM7SUFJRixDQUFDOzs7O0lBR0QsUUFBUTtRQUNOLDRCQUE0QjtJQUM5QixDQUFDOzs7O0lBRUQsV0FBVztRQUNULDRCQUE0QjtJQUM5QixDQUFDOzs7O0lBRUQsV0FBVztJQUVYLENBQUM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7YUFDekI7Ozs7WUFMbUIsVUFBVTs7O3NCQVEzQixLQUFLLFNBQUMsWUFBWTt1QkFDbEIsS0FBSztzQkFFTCxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7O0lBSGpDLGtDQUFnRDs7SUFDaEQsbUNBQW1DOztJQUVuQyxrQ0FRRTs7Ozs7SUFFVSxpQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJy4uL21vZGVscy9Gb3JtR3JvdXAnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc3VibWl0Rm9ybV0nXG59KVxuZXhwb3J0IGNsYXNzIFN1Ym1pdERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgnc3VibWl0Rm9ybScpIHByaXZhdGUgX2Zvcm1HcjogRm9ybUdyb3VwO1xuICBASW5wdXQoKSBkaXNhYmxlZDogQm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgb25DbGljayA9IChlOiBNb3VzZUV2ZW50KSA9PiB7XG5cbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcblxuICAgICAgdGhpcy5fZm9ybUdyLnN1Ym1pdCgpO1xuICAgIH1cblxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmKSB7XG5cbiAgfVxuXG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5fZm9ybUdyKVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5fZm9ybUdyKVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG5cbiAgfVxuXG5cbn1cbiJdfQ==