"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
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
        { type: core_1.Component, args: [{
                    selector: 'spinner',
                    template: ''
                }] }
    ];
    SpinnerComponent.propDecorators = {
        delay: [{ type: core_1.Input }],
        color: [{ type: core_1.Input }],
        isRunning: [{ type: core_1.Input }]
    };
    return SpinnerComponent;
}());
exports.SpinnerComponent = SpinnerComponent;
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
exports.SpinnerTemplate = "\n  <div [hidden]=\"!visible\" [ngClass]=\"baseClass\">\n      <div *ngFor=\"let item of items; let i = index\" [ngClass]=\"childClass + (i+1)\" [style.backgroundColor]=\"color\"></div>\n  </div>\n";
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2xvYWRpbmcvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzQ0FBNEQ7QUFFNUQ7SUFBQTtRQUtTLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsY0FBUyxHQUFXLHNCQUFzQixDQUFDO1FBQzNDLGVBQVUsR0FBVyxLQUFLLENBQUM7UUFDM0IsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLFVBQUssR0FBVyxNQUFNLENBQUM7SUFnQ2hDLENBQUM7SUE5QkMsc0JBQ1csdUNBQVM7Ozs7O1FBRHBCLFVBQ3FCLEtBQWM7WUFEbkMsaUJBZ0JDO1lBZEMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDVixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ2QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLE9BQU87YUFDUjtZQUVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDaEIsT0FBTzthQUNSO1lBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDaEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQixDQUFDOzs7T0FBQTs7Ozs7SUFFTyxpQ0FBTTs7OztJQUFkO1FBQ0UsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDO0lBRUQsc0JBQVcsbUNBQUs7Ozs7UUFBaEI7WUFDRSxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQzs7Z0JBOUNGLGdCQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLFFBQVEsRUFBRSxFQUFFO2lCQUNiOzs7d0JBUUUsWUFBSzt3QkFHTCxZQUFLOzRCQUdMLFlBQUs7O0lBOEJSLHVCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7QUEzQ1ksNENBQWdCOzs7SUFDM0IsbUNBQStCOztJQUMvQixtQ0FBb0I7O0lBQ3BCLHFDQUFrRDs7SUFDbEQsc0NBQWtDOztJQUNsQyxvQ0FBNEI7O0lBRTVCLGlDQUN5Qjs7SUFFekIsaUNBQzhCOzs7QUFrQ25CLFFBQUEsZUFBZSxHQUFHLHVNQUk5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzcGlubmVyJyxcbiAgdGVtcGxhdGU6ICcnXG59KVxuZXhwb3J0IGNsYXNzIFNwaW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBwdWJsaWMgdmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyB0aW1lb3V0OiBhbnk7XG4gIHB1YmxpYyBiYXNlQ2xhc3M6IHN0cmluZyA9ICdjaGFzaW5nLWRvdHMtc3Bpbm5lcic7XG4gIHB1YmxpYyBjaGlsZENsYXNzOiBzdHJpbmcgPSAnZG90JztcbiAgcHVibGljIG51bUl0ZW1zOiBudW1iZXIgPSAyO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkZWxheTogbnVtYmVyID0gMDtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgY29sb3I6IHN0cmluZyA9ICcjMzMzJztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGlzUnVubmluZyh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50aW1lb3V0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xuICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICB9LCB0aGlzLmRlbGF5KTtcbiAgfVxuXG4gIHByaXZhdGUgY2FuY2VsKCk6IHZvaWQge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIHRoaXMudGltZW91dCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXRlbXMoKSB7XG4gICAgcmV0dXJuIEFycmF5KHRoaXMubnVtSXRlbXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogYW55IHtcbiAgICB0aGlzLmNhbmNlbCgpO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBTcGlubmVyVGVtcGxhdGUgPSBgXG4gIDxkaXYgW2hpZGRlbl09XCIhdmlzaWJsZVwiIFtuZ0NsYXNzXT1cImJhc2VDbGFzc1wiPlxuICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGkgPSBpbmRleFwiIFtuZ0NsYXNzXT1cImNoaWxkQ2xhc3MgKyAoaSsxKVwiIFtzdHlsZS5iYWNrZ3JvdW5kQ29sb3JdPVwiY29sb3JcIj48L2Rpdj5cbiAgPC9kaXY+XG5gO1xuIl19