/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class MenuComponent {
    constructor() {
        this.options = [];
        this.name = '';
        this.value = null;
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
        this.enter = new EventEmitter();
        this.invalid = false;
        this.onSelectOption = option => {
            this.change.emit(option.value);
            this.blur.emit();
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
}
MenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-menu',
                template: `
      <ng-container *ngFor="let option of options">
          <div
                  class="option"
                  [class.active]="option.value === value"
                  (click)="onSelectOption(option)"
          >
              {{option.label}}
          </div>
      </ng-container>
  `,
                styles: [":host{display:flex;flex-direction:column;width:100%}:host .option{border:0;cursor:pointer;font-size:1.6rem;margin:.5rem 0}:host .option.active,:host .option:hover{font-weight:700}"]
            }] }
];
/** @nocollapse */
MenuComponent.ctorParameters = () => [];
MenuComponent.propDecorators = {
    options: [{ type: Input }],
    name: [{ type: Input }],
    value: [{ type: Input }],
    change: [{ type: Output }],
    blur: [{ type: Output }],
    enter: [{ type: Output }],
    invalid: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MenuComponent.prototype.options;
    /** @type {?} */
    MenuComponent.prototype.name;
    /** @type {?} */
    MenuComponent.prototype.value;
    /** @type {?} */
    MenuComponent.prototype.change;
    /** @type {?} */
    MenuComponent.prototype.blur;
    /** @type {?} */
    MenuComponent.prototype.enter;
    /** @type {?} */
    MenuComponent.prototype.invalid;
    /** @type {?} */
    MenuComponent.prototype.onSelectOption;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbInVpL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBaUJ6RyxNQUFNLE9BQU8sYUFBYTtJQVN4QjtRQVJTLFlBQU8sR0FBc0QsRUFBRSxDQUFDO1FBQ2hFLFNBQUksR0FBRyxFQUFFLENBQUM7UUFDVixVQUFLLEdBQVEsSUFBSSxDQUFDO1FBQ2pCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFCLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFXbEMsbUJBQWMsR0FBRyxNQUFNLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNuQixDQUFDLENBQUM7SUFYRixDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO0lBQ2xDLENBQUM7OztZQS9CRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRTs7Ozs7Ozs7OztHQVVUOzthQUVGOzs7OztzQkFFRSxLQUFLO21CQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxNQUFNO21CQUNOLE1BQU07b0JBQ04sTUFBTTtzQkFDTixLQUFLOzs7O0lBTk4sZ0NBQXlFOztJQUN6RSw2QkFBbUI7O0lBQ25CLDhCQUEyQjs7SUFDM0IsK0JBQXNDOztJQUN0Qyw2QkFBb0M7O0lBQ3BDLDhCQUFxQzs7SUFDckMsZ0NBQWtDOztJQVdsQyx1Q0FHRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpby1tZW51JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBvcHRpb24gb2Ygb3B0aW9uc1wiPlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cIm9wdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwib3B0aW9uLnZhbHVlID09PSB2YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJvblNlbGVjdE9wdGlvbihvcHRpb24pXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7e29wdGlvbi5sYWJlbH19XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgYCxcclxuICBzdHlsZVVybHM6IFtgLi9tZW51LmNvbXBvbmVudC5zY3NzYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgb3B0aW9uczogKHsgbGFiZWw6IGFueSwgdmFsdWU6IGFueSwgZGlzYWJsZT86IGJvb2xlYW4gfSlbXSA9IFtdO1xyXG4gIEBJbnB1dCgpIG5hbWUgPSAnJztcclxuICBASW5wdXQoKSB2YWx1ZTogYW55ID0gbnVsbDtcclxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBibHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoKSBlbnRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBASW5wdXQoKSBpbnZhbGlkOiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICBvblNlbGVjdE9wdGlvbiA9IG9wdGlvbiA9PiB7XHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KG9wdGlvbi52YWx1ZSk7XHJcbiAgICB0aGlzLmJsdXIuZW1pdCgpO1xyXG4gIH07XHJcblxyXG59XHJcbiJdfQ==