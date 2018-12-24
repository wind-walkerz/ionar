/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var SpinnerComponent = /** @class */ (function () {
    function SpinnerComponent() {
        this.visible = true;
        this.baseClass = 'chasing-dots-spinner';
        this.childClass = 'dot';
        this.numItems = 2;
        this.delay = 0;
        this.color = '#333';
    }
    Object.defineProperty(SpinnerComponent.prototype, "isRunning", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            if (!value) {
                this.cancel();
                this.visible = false;
                return;
            }
            if (this.timeout) {
                return;
            }
            this.timeout = setTimeout(function () {
                _this.visible = true;
                _this.cancel();
            }, this.delay);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    SpinnerComponent.prototype.cancel = /**
     * @private
     * @return {?}
     */
    function () {
        clearTimeout(this.timeout);
        this.timeout = undefined;
    };
    Object.defineProperty(SpinnerComponent.prototype, "items", {
        get: /**
         * @return {?}
         */
        function () {
            return Array(this.numItems);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SpinnerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.cancel();
    };
    SpinnerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'spinner',
                    template: ''
                }] }
    ];
    SpinnerComponent.propDecorators = {
        delay: [{ type: Input }],
        color: [{ type: Input }],
        isRunning: [{ type: Input }]
    };
    return SpinnerComponent;
}());
export { SpinnerComponent };
if (false) {
    /** @type {?} */
    SpinnerComponent.prototype.visible;
    /** @type {?} */
    SpinnerComponent.prototype.timeout;
    /** @type {?} */
    SpinnerComponent.prototype.baseClass;
    /** @type {?} */
    SpinnerComponent.prototype.childClass;
    /** @type {?} */
    SpinnerComponent.prototype.numItems;
    /** @type {?} */
    SpinnerComponent.prototype.delay;
    /** @type {?} */
    SpinnerComponent.prototype.color;
}
/** @type {?} */
export var SpinnerTemplate = "\n  <div [hidden]=\"!visible\" [ngClass]=\"baseClass\">\n      <div *ngFor=\"let item of items; let i = index\" [ngClass]=\"childClass + (i+1)\" [style.backgroundColor]=\"color\"></div>\n  </div>\n";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2xvYWRpbmcvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFFNUQ7SUFBQTtRQUtTLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsY0FBUyxHQUFXLHNCQUFzQixDQUFDO1FBQzNDLGVBQVUsR0FBVyxLQUFLLENBQUM7UUFDM0IsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLFVBQUssR0FBVyxNQUFNLENBQUM7SUFnQ2hDLENBQUM7SUE5QkMsc0JBQ1csdUNBQVM7Ozs7O1FBRHBCLFVBQ3FCLEtBQWM7WUFEbkMsaUJBZ0JDO1lBZEMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDVixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLE9BQU87YUFDUjtZQUVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDaEIsT0FBTzthQUNSO1lBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDaEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQixDQUFDOzs7T0FBQTs7Ozs7SUFFTyxpQ0FBTTs7OztJQUFkO1FBQ0UsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDO0lBRUQsc0JBQVcsbUNBQUs7Ozs7UUFBaEI7WUFDRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Z0JBOUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7Ozt3QkFRRSxLQUFLO3dCQUdMLEtBQUs7NEJBR0wsS0FBSzs7SUE4QlIsdUJBQUM7Q0FBQSxBQS9DRCxJQStDQztTQTNDWSxnQkFBZ0I7OztJQUMzQixtQ0FBK0I7O0lBQy9CLG1DQUFvQjs7SUFDcEIscUNBQWtEOztJQUNsRCxzQ0FBa0M7O0lBQ2xDLG9DQUE0Qjs7SUFFNUIsaUNBQ3lCOztJQUV6QixpQ0FDOEI7OztBQWtDaEMsTUFBTSxLQUFPLGVBQWUsR0FBRyx1TUFJOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3Bpbm5lcicsXG4gIHRlbXBsYXRlOiAnJ1xufSlcbmV4cG9ydCBjbGFzcyBTcGlubmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHVibGljIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgdGltZW91dDogYW55O1xuICBwdWJsaWMgYmFzZUNsYXNzOiBzdHJpbmcgPSAnY2hhc2luZy1kb3RzLXNwaW5uZXInO1xuICBwdWJsaWMgY2hpbGRDbGFzczogc3RyaW5nID0gJ2RvdCc7XG4gIHB1YmxpYyBudW1JdGVtczogbnVtYmVyID0gMjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZGVsYXk6IG51bWJlciA9IDA7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGNvbG9yOiBzdHJpbmcgPSAnIzMzMyc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBpc1J1bm5pbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudGltZW91dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfSwgdGhpcy5kZWxheSk7XG4gIH1cblxuICBwcml2YXRlIGNhbmNlbCgpOiB2b2lkIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB0aGlzLnRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGl0ZW1zKCkge1xuICAgIHJldHVybiBBcnJheSh0aGlzLm51bUl0ZW1zKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IGFueSB7XG4gICAgdGhpcy5jYW5jZWwoKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgU3Bpbm5lclRlbXBsYXRlID0gYFxuICA8ZGl2IFtoaWRkZW5dPVwiIXZpc2libGVcIiBbbmdDbGFzc109XCJiYXNlQ2xhc3NcIj5cbiAgICAgIDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXM7IGxldCBpID0gaW5kZXhcIiBbbmdDbGFzc109XCJjaGlsZENsYXNzICsgKGkrMSlcIiBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cImNvbG9yXCI+PC9kaXY+XG4gIDwvZGl2PlxuYDtcbiJdfQ==