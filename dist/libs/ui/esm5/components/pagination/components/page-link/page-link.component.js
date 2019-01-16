"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var PageLinkComponent = /** @class */ (function () {
    function PageLinkComponent() {
        var _this = this;
        this.disabled = false;
        this.change = new core_1.EventEmitter();
        this.onClick = function (e) {
            if (!_this.disabled) {
                _this.change.emit();
            }
        };
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    PageLinkComponent.prototype.ngOnInit = 
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    PageLinkComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
    };
    PageLinkComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'page-link',
                    template: "<ng-template #tpl>\r\n    <ng-content></ng-content>\r\n</ng-template>\r\n\r\n<ng-container *ngIf=\"template\">\r\n    <ng-container *ngTemplateOutlet=\"template\"></ng-container>\r\n</ng-container>",
                    host: {
                        '[class.disabled]': 'disabled'
                    },
                    styles: [":host{background-color:#fff;border:1px solid #dee2e6;color:#007bff;cursor:pointer;display:flex;justify-content:center;align-items:center;margin-left:-1px;padding:1rem;transition:.3s;z-index:1}:host:hover{background-color:#e9ecef;color:#0056b3}:host.active{background-color:#007bff;border-color:#007bff;color:#fff}:host.focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25);z-index:3}:host.disabled{cursor:not-allowed;opacity:.5}"]
                }] }
    ];
    /** @nocollapse */
    PageLinkComponent.ctorParameters = function () { return []; };
    PageLinkComponent.propDecorators = {
        directionLinks: [{ type: core_1.Input }],
        boundaryLinks: [{ type: core_1.Input }],
        disabled: [{ type: core_1.Input }],
        change: [{ type: core_1.Output }],
        template: [{ type: core_1.Input }],
        tpl: [{ type: core_1.ViewChild, args: ['tpl',] }],
        onClick: [{ type: core_1.HostListener, args: ['click', ['$event'],] }]
    };
    return PageLinkComponent;
}());
exports.PageLinkComponent = PageLinkComponent;
if (false) {
    /** @type {?} */
    PageLinkComponent.prototype.directionLinks;
    /** @type {?} */
    PageLinkComponent.prototype.boundaryLinks;
    /** @type {?} */
    PageLinkComponent.prototype.disabled;
    /** @type {?} */
    PageLinkComponent.prototype.change;
    /** @type {?} */
    PageLinkComponent.prototype.template;
    /** @type {?} */
    PageLinkComponent.prototype.tpl;
    /** @type {?} */
    PageLinkComponent.prototype.onClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnaW5hdGlvbi9jb21wb25lbnRzL3BhZ2UtbGluay9wYWdlLWxpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNDQVV1QjtBQUV2QjtJQTZCRTtRQUFBLGlCQUNDO1FBZlEsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUN6QixXQUFNLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFPdEMsWUFBTyxHQUFHLFVBQUEsQ0FBQztZQUNULElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNsQixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3BCO1FBQ0gsQ0FBQyxDQUFDO0lBR0YsQ0FBQztJQUdELHdIQUF3SDs7Ozs7SUFHeEgsb0NBQVE7Ozs7O0lBQVI7SUFFQSxDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYO0lBQ0EsQ0FBQzs7Z0JBekNGLGdCQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLGlOQUF5QztvQkFFekMsSUFBSSxFQUFFO3dCQUNKLGtCQUFrQixFQUFFLFVBQVU7cUJBQy9COztpQkFDRjs7Ozs7aUNBS0UsWUFBSztnQ0FDTCxZQUFLOzJCQUVMLFlBQUs7eUJBQ0wsYUFBTTsyQkFFTixZQUFLO3NCQUVMLGdCQUFTLFNBQUMsS0FBSzswQkFFZixtQkFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUF3Qm5DLHdCQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7QUF0Q1ksOENBQWlCOzs7SUFJNUIsMkNBQXlDOztJQUN6QywwQ0FBeUM7O0lBRXpDLHFDQUFtQzs7SUFDbkMsbUNBQXNDOztJQUV0QyxxQ0FBb0M7O0lBRXBDLGdDQUF3Qzs7SUFFeEMsb0NBS0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBJbnB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgSG9zdExpc3RlbmVyLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGFnZS1saW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2UtbGluay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BhZ2UtbGluay5jb21wb25lbnQuc2NzcyddLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5kaXNhYmxlZF0nOiAnZGlzYWJsZWQnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgUGFnZUxpbmtDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG5cbiAgQElucHV0KCkgZGlyZWN0aW9uTGlua3M6ICdwcmV2JyB8ICduZXh0JztcbiAgQElucHV0KCkgYm91bmRhcnlMaW5rczogJ2ZpcnN0JyB8ICdsYXN0JztcblxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBWaWV3Q2hpbGQoJ3RwbCcpIHRwbDogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIG9uQ2xpY2sgPSBlID0+IHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuXG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICB9XG5cblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTWFpbiBGdW5jdGlvbnMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG5cbn1cbiJdfQ==