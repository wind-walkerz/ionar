/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener, Output, EventEmitter, HostBinding, ContentChild } from '@angular/core';
import { CollapseToggleDirective } from '../directives/collapse-toggle.directive';
import { untilDestroyed } from '@ionar/utility';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.toggle = new EventEmitter();
        this.collapsed = false;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    HeaderComponent.prototype.onClick = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        if (!this._toggleDir) {
            this.toggle.emit();
            this.collapsed = !this.collapsed;
        }
    };
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._toggleDir) {
            this._toggleDir.toggle.pipe(untilDestroyed(this)).subscribe(function () {
                _this.toggle.emit();
                _this.collapsed = !_this.collapsed;
            });
        }
    };
    /**
     * @return {?}
     */
    HeaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    HeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'collapse-header',
                    exportAs: 'collapse-header',
                    template: "    \n          <ng-content></ng-content>\n  "
                }] }
    ];
    /** @nocollapse */
    HeaderComponent.ctorParameters = function () { return []; };
    HeaderComponent.propDecorators = {
        toggle: [{ type: Output }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
        collapsed: [{ type: HostBinding, args: ['class.collapsed',] }],
        _toggleDir: [{ type: ContentChild, args: [CollapseToggleDirective,] }]
    };
    return HeaderComponent;
}());
export { HeaderComponent };
if (false) {
    /** @type {?} */
    HeaderComponent.prototype.toggle;
    /** @type {?} */
    HeaderComponent.prototype.collapsed;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype._toggleDir;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29sbGFwc2libGUvY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULFlBQVksRUFDWixNQUFNLEVBQ04sWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhEO0lBd0JFOztRQWRVLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBV04sY0FBUyxHQUFZLEtBQUssQ0FBQztJQUkzRCxDQUFDOzs7OztJQVhELGlDQUFPOzs7O0lBRFAsVUFDUSxNQUFNO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUNsQztJQUNILENBQUM7SUFRRCx3SEFBd0g7Ozs7O0lBRXhILGtDQUFROzs7OztJQUFSO1FBQUEsaUJBUUM7UUFQQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDMUQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDbkIsS0FBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUVILENBQUM7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7SUFDQSxDQUFDOztnQkF4Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFFBQVEsRUFBRSwrQ0FFVDtpQkFDRjs7Ozs7eUJBSUUsTUFBTTswQkFHTixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzRCQVFoQyxXQUFXLFNBQUMsaUJBQWlCOzZCQUU3QixZQUFZLFNBQUMsdUJBQXVCOztJQW9CdkMsc0JBQUM7Q0FBQSxBQTNDRCxJQTJDQztTQXBDWSxlQUFlOzs7SUFHMUIsaUNBQXNDOztJQVd0QyxvQ0FBMkQ7Ozs7O0lBRTNELHFDQUFtRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIEhvc3RMaXN0ZW5lcixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBDb250ZW50Q2hpbGQsIEFmdGVyVmlld0luaXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb2xsYXBzZVRvZ2dsZURpcmVjdGl2ZSB9IGZyb20gJy4uL2RpcmVjdGl2ZXMvY29sbGFwc2UtdG9nZ2xlLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyB1bnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bpb25hci91dGlsaXR5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29sbGFwc2UtaGVhZGVyJyxcbiAgZXhwb3J0QXM6ICdjb2xsYXBzZS1oZWFkZXInLFxuICB0ZW1wbGF0ZTogYCAgICBcbiAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cblxuICBAT3V0cHV0KCkgdG9nZ2xlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBvbkNsaWNrKCRldmVudCkge1xuICAgIGlmICghdGhpcy5fdG9nZ2xlRGlyKSB7XG4gICAgICB0aGlzLnRvZ2dsZS5lbWl0KCk7XG4gICAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcbiAgICB9XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNvbGxhcHNlZCcpIGNvbGxhcHNlZDogQm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBDb250ZW50Q2hpbGQoQ29sbGFwc2VUb2dnbGVEaXJlY3RpdmUpIHByaXZhdGUgX3RvZ2dsZURpcjogQ29sbGFwc2VUb2dnbGVEaXJlY3RpdmU7XG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMuX3RvZ2dsZURpcikge1xuICAgICAgdGhpcy5fdG9nZ2xlRGlyLnRvZ2dsZS5waXBlKHVudGlsRGVzdHJveWVkKHRoaXMpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnRvZ2dsZS5lbWl0KCk7XG4gICAgICAgIHRoaXMuY29sbGFwc2VkID0gIXRoaXMuY29sbGFwc2VkO1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgfVxuXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cbn1cbiJdfQ==