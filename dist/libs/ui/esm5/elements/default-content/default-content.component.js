"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils_1 = require("../../utils");
var DefaultContentComponent = /** @class */ (function () {
    function DefaultContentComponent(_elRef, _vcRef, cd) {
        this._elRef = _elRef;
        this._vcRef = _vcRef;
        this.cd = cd;
        this.isHostRemoved = false;
    }
    Object.defineProperty(DefaultContentComponent.prototype, "template", {
        set: /**
         * @param {?} view
         * @return {?}
         */
        function (view) {
            this._vcRef.clear();
            this._vcRef.createEmbeddedView(view.template, view.context);
        },
        enumerable: true,
        configurable: true
    });
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    DefaultContentComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    DefaultContentComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.context) {
            this.template = {
                template: this._vcRef['_view'].context.defaultContent,
                context: { $implicit: this.context }
            };
            if (!this.isHostRemoved) {
                utils_1.removeHost(this._elRef);
            }
            this.isHostRemoved = true;
            this.cd.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    DefaultContentComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    DefaultContentComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'default-content',
                    template: ""
                }] }
    ];
    /** @nocollapse */
    DefaultContentComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef },
        { type: core_1.ViewContainerRef },
        { type: core_1.ChangeDetectorRef }
    ]; };
    DefaultContentComponent.propDecorators = {
        context: [{ type: core_1.Input }]
    };
    return DefaultContentComponent;
}());
exports.DefaultContentComponent = DefaultContentComponent;
if (false) {
    /** @type {?} */
    DefaultContentComponent.prototype.context;
    /** @type {?} */
    DefaultContentComponent.prototype.isHostRemoved;
    /**
     * @type {?}
     * @private
     */
    DefaultContentComponent.prototype._elRef;
    /**
     * @type {?}
     * @private
     */
    DefaultContentComponent.prototype._vcRef;
    /**
     * @type {?}
     * @private
     */
    DefaultContentComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1jb250ZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImVsZW1lbnRzL2RlZmF1bHQtY29udGVudC9kZWZhdWx0LWNvbnRlbnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNDQVd1QjtBQUN2QixxQ0FBeUM7QUFJekM7SUFvQkUsaUNBQ1UsTUFBa0IsRUFDbEIsTUFBd0IsRUFDeEIsRUFBcUI7UUFGckIsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQWIvQixrQkFBYSxHQUFZLEtBQUssQ0FBQztJQWUvQixDQUFDO0lBYkQsc0JBQUksNkNBQVE7Ozs7O1FBQVosVUFBYSxJQUVaO1lBQ0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlELENBQUM7OztPQUFBO0lBV0Qsd0hBQXdIOzs7OztJQUV4SCwwQ0FBUTs7Ozs7SUFBUjtJQUdBLENBQUM7Ozs7O0lBRUQsNkNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHO2dCQUNkLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjO2dCQUNyRCxPQUFPLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRTthQUNyQyxDQUFDO1lBR0YsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ3ZCLGtCQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3pCO1lBQ0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN6QjtJQUVILENBQUM7Ozs7SUFHRCw2Q0FBVzs7O0lBQVg7SUFDQSxDQUFDOztnQkF0REYsZ0JBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsRUFBRTtpQkFDYjs7OztnQkFmQyxpQkFBVTtnQkFDVix1QkFBZ0I7Z0JBRWhCLHdCQUFpQjs7OzBCQWlCaEIsWUFBSzs7SUFtRFIsOEJBQUM7Q0FBQSxBQTNERCxJQTJEQztBQXZEWSwwREFBdUI7OztJQUlsQywwQ0FBbUM7O0lBRW5DLGdEQUErQjs7Ozs7SUFXN0IseUNBQTBCOzs7OztJQUMxQix5Q0FBZ0M7Ozs7O0lBQ2hDLHFDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgRWxlbWVudFJlZixcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHJlbW92ZUhvc3QgfSBmcm9tICcuLi8uLi91dGlscyc7XHJcbmltcG9ydCB7IENvbXBvbmVudENvbnRleHQgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL0lvQWJzdHJhY3RVSSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkZWZhdWx0LWNvbnRlbnQnLFxyXG4gIHRlbXBsYXRlOiBgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdENvbnRlbnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIEBJbnB1dCgpIGNvbnRleHQ6IENvbXBvbmVudENvbnRleHQ7XHJcblxyXG4gIGlzSG9zdFJlbW92ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgc2V0IHRlbXBsYXRlKHZpZXc6IHtcclxuICAgIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+LCBjb250ZXh0PzogYW55XHJcbiAgfSkge1xyXG4gICAgdGhpcy5fdmNSZWYuY2xlYXIoKTtcclxuICAgIHRoaXMuX3ZjUmVmLmNyZWF0ZUVtYmVkZGVkVmlldyh2aWV3LnRlbXBsYXRlLCB2aWV3LmNvbnRleHQpO1xyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIF92Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuXHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jb250ZXh0KSB7XHJcbiAgICAgIHRoaXMudGVtcGxhdGUgPSB7XHJcbiAgICAgICAgdGVtcGxhdGU6IHRoaXMuX3ZjUmVmWydfdmlldyddLmNvbnRleHQuZGVmYXVsdENvbnRlbnQsXHJcbiAgICAgICAgY29udGV4dDogeyAkaW1wbGljaXQ6IHRoaXMuY29udGV4dCB9XHJcbiAgICAgIH07XHJcblxyXG5cclxuICAgICAgaWYgKCF0aGlzLmlzSG9zdFJlbW92ZWQpIHtcclxuICAgICAgICByZW1vdmVIb3N0KHRoaXMuX2VsUmVmKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmlzSG9zdFJlbW92ZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1haW4gRnVuY3Rpb25zICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxufVxyXG4iXX0=