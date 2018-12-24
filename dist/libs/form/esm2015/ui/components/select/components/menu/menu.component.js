/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class MenuComponent {
    constructor() {
        this.options = [];
        this.onSelectOption = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
MenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'menu',
                template: `
      <ng-container *ngFor="let option of options">
          <select-option
                  [data]="option"
                  (click)="this.onSelectOption.emit(option)"
          ></select-option>
      </ng-container>
  `,
                styles: [`
      :host {
          background-color: white;
          border-radius: 5px;
          box-sizing: border-box;
          border: 1px solid rgb(196, 202, 212);
          overflow-y: scroll;
          padding: 0 10px;
          position: absolute;
          top: 100%;
          z-index: 9999;
          width: 100%;
          max-height: 20rem;
      }
  `]
            }] }
];
/** @nocollapse */
MenuComponent.ctorParameters = () => [];
MenuComponent.propDecorators = {
    options: [{ type: Input }],
    onSelectOption: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    MenuComponent.prototype.options;
    /** @type {?} */
    MenuComponent.prototype.onSelectOption;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbInVpL2NvbXBvbmVudHMvc2VsZWN0L2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQTRCL0UsTUFBTSxPQUFPLGFBQWE7SUFJeEI7UUFIUyxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ1osbUJBQWMsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBR25ELENBQUM7Ozs7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7O1lBbENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsTUFBTTtnQkFDaEIsUUFBUSxFQUFFOzs7Ozs7O0dBT1Q7eUJBQ1E7Ozs7Ozs7Ozs7Ozs7O0dBY1I7YUFDRjs7Ozs7c0JBRUUsS0FBSzs2QkFDTCxNQUFNOzs7O0lBRFAsZ0NBQXNCOztJQUN0Qix1Q0FBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21lbnUnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnNcIj5cbiAgICAgICAgICA8c2VsZWN0LW9wdGlvblxuICAgICAgICAgICAgICAgICAgW2RhdGFdPVwib3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgIChjbGljayk9XCJ0aGlzLm9uU2VsZWN0T3B0aW9uLmVtaXQob3B0aW9uKVwiXG4gICAgICAgICAgPjwvc2VsZWN0LW9wdGlvbj5cbiAgICAgIDwvbmctY29udGFpbmVyPlxuICBgLFxuICBzdHlsZXM6IFtgXG4gICAgICA6aG9zdCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5NiwgMjAyLCAyMTIpO1xuICAgICAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMTAwJTtcbiAgICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDIwcmVtO1xuICAgICAgfVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgb3B0aW9ucyA9IFtdO1xuICBAT3V0cHV0KCkgb25TZWxlY3RPcHRpb24gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==