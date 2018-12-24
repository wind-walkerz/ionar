/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        var _this = this;
        this.options = [];
        this.name = '';
        this.value = null;
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
        this.enter = new EventEmitter();
        this.invalid = false;
        this.onSelectOption = function (option) {
            _this.change.emit(option.value);
            _this.blur.emit();
        };
    }
    /**
     * @return {?}
     */
    MenuComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MenuComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
    };
    MenuComponent.decorators = [
        { type: Component, args: [{
                    selector: 'io-menu',
                    template: "\n      <ng-container *ngFor=\"let option of options\">\n          <div\n                  class=\"option\"\n                  [class.active]=\"option.value === value\"\n                  (click)=\"onSelectOption(option)\"\n          >\n              {{option.label}}\n          </div>\n      </ng-container>\n  ",
                    styles: [":host{display:flex;flex-direction:column;width:100%}:host .option{border:0;cursor:pointer;font-size:1.6rem;margin:.5rem 0}:host .option.active,:host .option:hover{font-weight:700}"]
                }] }
    ];
    /** @nocollapse */
    MenuComponent.ctorParameters = function () { return []; };
    MenuComponent.propDecorators = {
        options: [{ type: Input }],
        name: [{ type: Input }],
        value: [{ type: Input }],
        change: [{ type: Output }],
        blur: [{ type: Output }],
        enter: [{ type: Output }],
        invalid: [{ type: Input }]
    };
    return MenuComponent;
}());
export { MenuComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbInVpL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXpHO0lBd0JFO1FBQUEsaUJBQ0M7UUFUUSxZQUFPLEdBQXNELEVBQUUsQ0FBQztRQUNoRSxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsVUFBSyxHQUFRLElBQUksQ0FBQztRQUNqQixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMxQixVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1QixZQUFPLEdBQVksS0FBSyxDQUFDO1FBV2xDLG1CQUFjLEdBQUcsVUFBQSxNQUFNO1lBQ3JCLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMvQixLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQztJQVhGLENBQUM7Ozs7SUFFRCxnQ0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUVELG1DQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtJQUNsQyxDQUFDOztnQkEvQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsMFRBVVQ7O2lCQUVGOzs7OzswQkFFRSxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxNQUFNO3VCQUNOLE1BQU07d0JBQ04sTUFBTTswQkFDTixLQUFLOztJQWdCUixvQkFBQztDQUFBLEFBdENELElBc0NDO1NBdkJZLGFBQWE7OztJQUN4QixnQ0FBeUU7O0lBQ3pFLDZCQUFtQjs7SUFDbkIsOEJBQTJCOztJQUMzQiwrQkFBc0M7O0lBQ3RDLDZCQUFvQzs7SUFDcEMsOEJBQXFDOztJQUNyQyxnQ0FBa0M7O0lBV2xDLHVDQUdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lvLW1lbnUnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnNcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzcz1cIm9wdGlvblwiXG4gICAgICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cIm9wdGlvbi52YWx1ZSA9PT0gdmFsdWVcIlxuICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uU2VsZWN0T3B0aW9uKG9wdGlvbilcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgICAge3tvcHRpb24ubGFiZWx9fVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG4gIHN0eWxlVXJsczogW2AuL21lbnUuY29tcG9uZW50LnNjc3NgXVxufSlcbmV4cG9ydCBjbGFzcyBNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBvcHRpb25zOiAoeyBsYWJlbDogYW55LCB2YWx1ZTogYW55LCBkaXNhYmxlPzogYm9vbGVhbiB9KVtdID0gW107XG4gIEBJbnB1dCgpIG5hbWUgPSAnJztcbiAgQElucHV0KCkgdmFsdWU6IGFueSA9IG51bGw7XG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBibHVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZW50ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIGludmFsaWQ6IEJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICB9XG5cbiAgb25TZWxlY3RPcHRpb24gPSBvcHRpb24gPT4ge1xuICAgIHRoaXMuY2hhbmdlLmVtaXQob3B0aW9uLnZhbHVlKTtcbiAgICB0aGlzLmJsdXIuZW1pdCgpO1xuICB9O1xuXG59XG4iXX0=