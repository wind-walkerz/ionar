"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var loading_service_1 = require("./loading.service");
var utility_1 = require("@ionar/utility");
var LoadingComponent = /** @class */ (function () {
    function LoadingComponent(_loadingSvs, cd) {
        this._loadingSvs = _loadingSvs;
        this.cd = cd;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.visible = false;
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    LoadingComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    LoadingComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._subscription)
            this._subscription.unsubscribe();
        this._subscription = this._loadingSvs.visibilityChange$.pipe(utility_1.untilDestroyed(this)).subscribe(function (visible) {
            _this.visible = visible;
            _this.cd.markForCheck();
        });
    };
    /**
     * @return {?}
     */
    LoadingComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    LoadingComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'io-loading',
                    template: "<div class=\"content\" *ngIf=\"visible\">\r\n    <sk-circle></sk-circle>\r\n</div>",
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    styles: [":host .content{background-color:rgba(51,51,51,.8);display:flex;align-items:center;justify-content:center;position:fixed;top:0;left:0;right:0;bottom:0;z-index:100!important}"]
                }] }
    ];
    /** @nocollapse */
    LoadingComponent.ctorParameters = function () { return [
        { type: loading_service_1.IonarLoadingService },
        { type: core_1.ChangeDetectorRef }
    ]; };
    return LoadingComponent;
}());
exports.LoadingComponent = LoadingComponent;
if (false) {
    /** @type {?} */
    LoadingComponent.prototype.visible;
    /**
     * @type {?}
     * @private
     */
    LoadingComponent.prototype._subscription;
    /**
     * @type {?}
     * @private
     */
    LoadingComponent.prototype._loadingSvs;
    /**
     * @type {?}
     * @private
     */
    LoadingComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0NBT3VCO0FBQ3ZCLHFEQUF3RDtBQUN4RCwwQ0FBZ0Q7QUFHaEQ7SUFlRSwwQkFBb0IsV0FBZ0MsRUFBVyxFQUFxQjtRQUFoRSxnQkFBVyxHQUFYLFdBQVcsQ0FBcUI7UUFBVyxPQUFFLEdBQUYsRUFBRSxDQUFtQjs7UUFKcEYsWUFBTyxHQUFZLEtBQUssQ0FBQztJQUt6QixDQUFDO0lBRUQsd0hBQXdIOzs7OztJQUV4SCxtQ0FBUTs7Ozs7SUFBUjtJQUVBLENBQUM7Ozs7SUFFRCw2Q0FBa0I7OztJQUFsQjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxJQUFJLENBQUMsYUFBYTtZQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFekQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyx3QkFBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsT0FBZ0I7WUFDNUcsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsS0FBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7SUFDQSxDQUFDOztnQkFsQ0YsZ0JBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsOEZBQXVDO29CQUV2QyxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTs7aUJBRWhEOzs7O2dCQVZRLHFDQUFtQjtnQkFMMUIsd0JBQWlCOztJQWdEbkIsdUJBQUM7Q0FBQSxBQXZDRCxJQXVDQztBQWhDWSw0Q0FBZ0I7OztJQUkzQixtQ0FBeUI7Ozs7O0lBRXpCLHlDQUFvQzs7Ozs7SUFFeEIsdUNBQXdDOzs7OztJQUFFLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElvbmFyTG9hZGluZ1NlcnZpY2UgfSBmcm9tICcuL2xvYWRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyB1bnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bpb25hci91dGlsaXR5JztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpby1sb2FkaW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvYWRpbmcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2FkaW5nLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0NoZWNrZWQsIE9uRGVzdHJveSB7XG5cbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG5cbiAgdmlzaWJsZTogQm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX3N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2xvYWRpbmdTdnM6IElvbmFyTG9hZGluZ1NlcnZpY2UsIHByaXZhdGUgIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG5cbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc3Vic2NyaXB0aW9uKSB0aGlzLl9zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcblxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbiA9IHRoaXMuX2xvYWRpbmdTdnMudmlzaWJpbGl0eUNoYW5nZSQucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSkuc3Vic2NyaWJlKCh2aXNpYmxlOiBCb29sZWFuKSA9PiB7XG4gICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICB9XG5cblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTWFpbiBGdW5jdGlvbnMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG5cbn1cbiJdfQ==