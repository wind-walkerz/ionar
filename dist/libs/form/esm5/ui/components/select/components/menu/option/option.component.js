/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, HostListener, Input } from '@angular/core';
var OptionComponent = /** @class */ (function () {
    function OptionComponent() {
        this.data = null;
        this.selected = false;
        this.disabled = false;
    }
    /**
     * @return {?}
     */
    OptionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.selected = this.data.selected;
        this.disabled = this.data.disabled;
    };
    /**
     * @param {?} btn
     * @return {?}
     */
    OptionComponent.prototype.onClick = /**
     * @param {?} btn
     * @return {?}
     */
    function (btn) {
    };
    OptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'select-option',
                    template: "\n      <p>\n          {{data.label}}\n      </p>",
                    styles: [":host{color:rgba(0,0,0,.65);cursor:pointer;display:flex;justify-content:flex-start;font-weight:400;line-height:22px;overflow:hidden;padding:5px 12px;position:relative;text-overflow:ellipsis;transition:background .3s;white-space:nowrap;width:100%}:host:hover{background-color:#e6f7ff}:host.selected{background-color:#fafafa;font-weight:600;color:rgba(0,0,0,.65)}:host.disabled{color:rgba(0,0,0,.25);cursor:not-allowed;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host.disabled:hover{background-color:transparent}"]
                }] }
    ];
    /** @nocollapse */
    OptionComponent.ctorParameters = function () { return []; };
    OptionComponent.propDecorators = {
        data: [{ type: Input }],
        selected: [{ type: HostBinding, args: ['class.selected',] }],
        disabled: [{ type: HostBinding, args: ['class.disabled',] }],
        onClick: [{ type: HostListener, args: ['click', ['$event.target'],] }]
    };
    return OptionComponent;
}());
export { OptionComponent };
if (false) {
    /** @type {?} */
    OptionComponent.prototype.data;
    /** @type {?} */
    OptionComponent.prototype.selected;
    /** @type {?} */
    OptionComponent.prototype.disabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9mb3JtLyIsInNvdXJjZXMiOlsidWkvY29tcG9uZW50cy9zZWxlY3QvY29tcG9uZW50cy9tZW51L29wdGlvbi9vcHRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVuRztJQVdFO1FBRlMsU0FBSSxHQUFHLElBQUksQ0FBQztRQVdVLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztJQVR6RCxDQUFDOzs7O0lBRUQsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBTXlDLGlDQUFPOzs7O0lBQWpELFVBQWtELEdBQUc7SUFFckQsQ0FBQzs7Z0JBekJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsUUFBUSxFQUFFLG1EQUdEOztpQkFFVjs7Ozs7dUJBRUUsS0FBSzsyQkFXTCxXQUFXLFNBQUMsZ0JBQWdCOzJCQUM1QixXQUFXLFNBQUMsZ0JBQWdCOzBCQUU1QixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDOztJQUkxQyxzQkFBQztDQUFBLEFBM0JELElBMkJDO1NBbkJZLGVBQWU7OztJQUMxQiwrQkFBcUI7O0lBV3JCLG1DQUF5RDs7SUFDekQsbUNBQXlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NlbGVjdC1vcHRpb24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxwPlxyXG4gICAgICAgICAge3tkYXRhLmxhYmVsfX1cclxuICAgICAgPC9wPmAsXHJcbiAgc3R5bGVVcmxzOiBbJy4vb3B0aW9uLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE9wdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZGF0YSA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gdGhpcy5kYXRhLnNlbGVjdGVkO1xyXG4gICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuZGF0YS5kaXNhYmxlZDtcclxuICB9XHJcblxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNlbGVjdGVkJykgc2VsZWN0ZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRpc2FibGVkJykgZGlzYWJsZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudC50YXJnZXQnXSkgb25DbGljayhidG4pIHtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=