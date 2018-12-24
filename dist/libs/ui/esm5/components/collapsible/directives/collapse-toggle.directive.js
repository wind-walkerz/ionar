/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
var CollapseToggleDirective = /** @class */ (function () {
    function CollapseToggleDirective() {
        this.toggle = new EventEmitter();
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    CollapseToggleDirective.prototype.onClick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.toggle.emit();
    };
    CollapseToggleDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[collapse-toggle]'
                },] }
    ];
    /** @nocollapse */
    CollapseToggleDirective.ctorParameters = function () { return []; };
    CollapseToggleDirective.propDecorators = {
        toggle: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    return CollapseToggleDirective;
}());
export { CollapseToggleDirective };
if (false) {
    /** @type {?} */
    CollapseToggleDirective.prototype.toggle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UtdG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29sbGFwc2libGUvZGlyZWN0aXZlcy9jb2xsYXBzZS10b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlFO0lBYUU7UUFSVSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVN0QyxDQUFDOzs7OztJQUxELHlDQUFPOzs7O0lBRFAsVUFDUSxNQUFNO1FBQ1osSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQixDQUFDOztnQkFYRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtpQkFDOUI7Ozs7O3lCQUdFLE1BQU07MEJBR04sWUFBWSxTQUFDLE9BQU87O0lBUXZCLDhCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FiWSx1QkFBdUI7OztJQUVsQyx5Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NvbGxhcHNlLXRvZ2dsZV0nXG59KVxuZXhwb3J0IGNsYXNzIENvbGxhcHNlVG9nZ2xlRGlyZWN0aXZlIHtcblxuICBAT3V0cHV0KCkgdG9nZ2xlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICBvbkNsaWNrKCRldmVudCkge1xuICAgIHRoaXMudG9nZ2xlLmVtaXQoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbn1cbiJdfQ==