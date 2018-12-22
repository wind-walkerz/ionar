/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
export class CollapseToggleDirective {
    constructor() {
        this.toggle = new EventEmitter();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onClick($event) {
        this.toggle.emit();
    }
}
CollapseToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[collapse-toggle]'
            },] }
];
/** @nocollapse */
CollapseToggleDirective.ctorParameters = () => [];
CollapseToggleDirective.propDecorators = {
    toggle: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click',] }]
};
if (false) {
    /** @type {?} */
    CollapseToggleDirective.prototype.toggle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UtdG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29sbGFwc2libGUvZGlyZWN0aXZlcy9jb2xsYXBzZS10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzlFLE1BQU0sT0FBTyx1QkFBdUI7SUFVbEM7UUFSVSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVN0QyxDQUFDOzs7OztJQUxELE9BQU8sQ0FBQyxNQUFNO1FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7WUFYRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjthQUM5Qjs7Ozs7cUJBR0UsTUFBTTtzQkFHTixZQUFZLFNBQUMsT0FBTzs7OztJQUhyQix5Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2NvbGxhcHNlLXRvZ2dsZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb2xsYXBzZVRvZ2dsZURpcmVjdGl2ZSB7XHJcblxyXG4gIEBPdXRwdXQoKSB0b2dnbGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgb25DbGljaygkZXZlbnQpIHtcclxuICAgIHRoaXMudG9nZ2xlLmVtaXQoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19