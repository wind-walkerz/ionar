/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import _ from 'lodash';
export class SelectComponent {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} eRef
     */
    constructor(eRef) {
        this.eRef = eRef;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.show_menu = false;
        this.selected_option = null;
        this.options = null;
        this.value = null;
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
        this.invalid = false;
        ///-----------------------------------------------  General Functions   -----------------------------------------------///
        this.onToggleMenu = () => {
            this.show_menu = !this.show_menu;
        };
        this.onChange = option => {
            this.options = _.map(this.options, (item) => {
                item.selected = _.isEqual(item, option);
                this.selected_option = item;
                return item;
            });
            this.show_menu = false;
            this.change.emit(this.selected_option.value);
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.value) {
            this.selected_option = _.find(this.options, ['value', this.value.toString()]);
        }
    }
    ///-----------------------------------------------  Host   -----------------------------------------------///
    /**
     * @param {?} event
     * @return {?}
     */
    clickout(event) {
        if (!this.eRef.nativeElement.contains(event.target)) {
            this.show_menu = false;
        }
    }
}
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-select',
                template: "<control\r\n        [label]=\"selected_option?.label\"\r\n        [show_menu]=\"show_menu\"\r\n        (click)=\"onToggleMenu()\"\r\n></control>\r\n\r\n<menu\r\n        [options]=\"options\"\r\n        (onSelectOption)=\"onChange($event)\"\r\n        *ngIf=\"show_menu\"\r\n></menu>",
                styles: [":host{display:flex;position:relative;flex:1}"]
            }] }
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [
    { type: ElementRef }
];
SelectComponent.propDecorators = {
    options: [{ type: Input }],
    value: [{ type: Input }],
    change: [{ type: Output }],
    blur: [{ type: Output }],
    invalid: [{ type: Input }],
    clickout: [{ type: HostListener, args: ['document:click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    SelectComponent.prototype.show_menu;
    /** @type {?} */
    SelectComponent.prototype.selected_option;
    /** @type {?} */
    SelectComponent.prototype.options;
    /** @type {?} */
    SelectComponent.prototype.value;
    /** @type {?} */
    SelectComponent.prototype.change;
    /** @type {?} */
    SelectComponent.prototype.blur;
    /** @type {?} */
    SelectComponent.prototype.invalid;
    /** @type {?} */
    SelectComponent.prototype.onToggleMenu;
    /** @type {?} */
    SelectComponent.prototype.onChange;
    /**
     * @type {?}
     * @private
     */
    SelectComponent.prototype.eRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9mb3JtLyIsInNvdXJjZXMiOlsidWkvY29tcG9uZW50cy9zZWxlY3QvY29udGFpbmVyL3NlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFTdkIsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBYzFCLFlBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7O1FBWHBDLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFDM0Isb0JBQWUsR0FBUSxJQUFJLENBQUM7UUFDbkIsWUFBTyxHQUFRLElBQUksQ0FBQztRQUNwQixVQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ1osV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0IsWUFBTyxHQUFZLEtBQUssQ0FBQzs7UUFpQmxDLGlCQUFZLEdBQUcsR0FBRyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ25DLENBQUMsQ0FBQztRQUdGLGFBQVEsR0FBRyxNQUFNLENBQUMsRUFBRTtZQUVsQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQW1ELEVBQUUsRUFBRTtnQkFDekYsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7Z0JBQzVCLE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUV2QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRS9DLENBQUMsQ0FBQztJQTNCRixDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQy9FO0lBQ0gsQ0FBQzs7Ozs7O0lBMEJELFFBQVEsQ0FBQyxLQUFLO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDeEI7SUFDSCxDQUFDOzs7WUF6REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixzU0FBc0M7O2FBRXZDOzs7O1lBUm1CLFVBQVU7OztzQkFlM0IsS0FBSztvQkFDTCxLQUFLO3FCQUNMLE1BQU07bUJBQ04sTUFBTTtzQkFDTixLQUFLO3VCQXFDTCxZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUEzQzFDLG9DQUEyQjs7SUFDM0IsMENBQTRCOztJQUM1QixrQ0FBNkI7O0lBQzdCLGdDQUFzQjs7SUFDdEIsaUNBQXNDOztJQUN0QywrQkFBb0M7O0lBQ3BDLGtDQUFrQzs7SUFpQmxDLHVDQUVFOztJQUdGLG1DQVdFOzs7OztJQTVCVSwrQkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lvLXNlbGVjdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vc2VsZWN0LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuICBzaG93X21lbnU6IEJvb2xlYW4gPSBmYWxzZTtcclxuICBzZWxlY3RlZF9vcHRpb246IGFueSA9IG51bGw7XHJcbiAgQElucHV0KCkgb3B0aW9uczogYW55ID0gbnVsbDtcclxuICBASW5wdXQoKSB2YWx1ZSA9IG51bGw7XHJcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCkgYmx1ciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBASW5wdXQoKSBpbnZhbGlkOiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlUmVmOiBFbGVtZW50UmVmKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRfb3B0aW9uID0gXy5maW5kKHRoaXMub3B0aW9ucywgWyd2YWx1ZScsIHRoaXMudmFsdWUudG9TdHJpbmcoKV0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIEdlbmVyYWwgRnVuY3Rpb25zICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcblxyXG4gIG9uVG9nZ2xlTWVudSA9ICgpID0+IHtcclxuICAgIHRoaXMuc2hvd19tZW51ID0gIXRoaXMuc2hvd19tZW51O1xyXG4gIH07XHJcblxyXG5cclxuICBvbkNoYW5nZSA9IG9wdGlvbiA9PiB7XHJcblxyXG4gICAgdGhpcy5vcHRpb25zID0gXy5tYXAodGhpcy5vcHRpb25zLCAoaXRlbTogeyB2YWx1ZTogYW55LCBsYWJlbDogYW55LCBzZWxlY3RlZDogQm9vbGVhbiB9KSA9PiB7XHJcbiAgICAgIGl0ZW0uc2VsZWN0ZWQgPSBfLmlzRXF1YWwoaXRlbSwgb3B0aW9uKTtcclxuICAgICAgdGhpcy5zZWxlY3RlZF9vcHRpb24gPSBpdGVtO1xyXG4gICAgICByZXR1cm4gaXRlbTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zaG93X21lbnUgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRfb3B0aW9uLnZhbHVlKTtcclxuXHJcbiAgfTtcclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIEhvc3QgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgY2xpY2tvdXQoZXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5lUmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICB0aGlzLnNob3dfbWVudSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==