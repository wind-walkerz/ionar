/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostBinding, HostListener, Input } from '@angular/core';
export class OptionComponent {
    constructor() {
        this.data = null;
        this.selected = false;
        this.disabled = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.selected = this.data.selected;
        this.disabled = this.data.disabled;
    }
    /**
     * @param {?} btn
     * @return {?}
     */
    onClick(btn) {
    }
}
OptionComponent.decorators = [
    { type: Component, args: [{
                selector: 'select-option',
                template: `
      <p>
          {{data.label}}
      </p>`,
                styles: [":host{color:rgba(0,0,0,.65);cursor:pointer;display:flex;justify-content:flex-start;font-weight:400;line-height:22px;overflow:hidden;padding:5px 12px;position:relative;text-overflow:ellipsis;transition:background .3s;white-space:nowrap;width:100%}:host:hover{background-color:#e6f7ff}:host.selected{background-color:#fafafa;font-weight:600;color:rgba(0,0,0,.65)}:host.disabled{color:rgba(0,0,0,.25);cursor:not-allowed;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host.disabled:hover{background-color:transparent}"]
            }] }
];
/** @nocollapse */
OptionComponent.ctorParameters = () => [];
OptionComponent.propDecorators = {
    data: [{ type: Input }],
    selected: [{ type: HostBinding, args: ['class.selected',] }],
    disabled: [{ type: HostBinding, args: ['class.disabled',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event.target'],] }]
};
if (false) {
    /** @type {?} */
    OptionComponent.prototype.data;
    /** @type {?} */
    OptionComponent.prototype.selected;
    /** @type {?} */
    OptionComponent.prototype.disabled;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9mb3JtLyIsInNvdXJjZXMiOlsidWkvY29tcG9uZW50cy9zZWxlY3QvY29tcG9uZW50cy9tZW51L29wdGlvbi9vcHRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQWlCLFNBQVMsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQVVuRyxNQUFNLE9BQU8sZUFBZTtJQUcxQjtRQUZTLFNBQUksR0FBRyxJQUFJLENBQUM7UUFXVSxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGFBQVEsR0FBWSxLQUFLLENBQUM7SUFUekQsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFNeUMsT0FBTyxDQUFDLEdBQUc7SUFFckQsQ0FBQzs7O1lBekJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7V0FHRDs7YUFFVjs7Ozs7bUJBRUUsS0FBSzt1QkFXTCxXQUFXLFNBQUMsZ0JBQWdCO3VCQUM1QixXQUFXLFNBQUMsZ0JBQWdCO3NCQUU1QixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDOzs7O0lBZHhDLCtCQUFxQjs7SUFXckIsbUNBQXlEOztJQUN6RCxtQ0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2VsZWN0LW9wdGlvbicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPHA+XHJcbiAgICAgICAgICB7e2RhdGEubGFiZWx9fVxyXG4gICAgICA8L3A+YCxcclxuICBzdHlsZVVybHM6IFsnLi9vcHRpb24uY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgT3B0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBkYXRhID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLmRhdGEuc2VsZWN0ZWQ7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gdGhpcy5kYXRhLmRpc2FibGVkO1xyXG4gIH1cclxuXHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3Muc2VsZWN0ZWQnKSBzZWxlY3RlZDogQm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZGlzYWJsZWQnKSBkaXNhYmxlZDogQm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50LnRhcmdldCddKSBvbkNsaWNrKGJ0bikge1xyXG5cclxuICB9XHJcblxyXG59XHJcbiJdfQ==