/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef, ViewChild, HostListener, Output, EventEmitter } from '@angular/core';
var PageLinkComponent = /** @class */ (function () {
    function PageLinkComponent() {
        var _this = this;
        this.disabled = false;
        this.change = new EventEmitter();
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
        { type: Component, args: [{
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
        directionLinks: [{ type: Input }],
        boundaryLinks: [{ type: Input }],
        disabled: [{ type: Input }],
        change: [{ type: Output }],
        template: [{ type: Input }],
        tpl: [{ type: ViewChild, args: ['tpl',] }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    return PageLinkComponent;
}());
export { PageLinkComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnaW5hdGlvbi9jb21wb25lbnRzL3BhZ2UtbGluay9wYWdlLWxpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBNkJFO1FBQUEsaUJBQ0M7UUFmUSxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQ3pCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBT3RDLFlBQU8sR0FBRyxVQUFBLENBQUM7WUFDVCxJQUFJLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNwQjtRQUNILENBQUMsQ0FBQztJQUdGLENBQUM7SUFHRCx3SEFBd0g7Ozs7O0lBR3hILG9DQUFROzs7OztJQUFSO0lBRUEsQ0FBQzs7OztJQUVELHVDQUFXOzs7SUFBWDtJQUNBLENBQUM7O2dCQXpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFdBQVc7b0JBQ3JCLGlOQUF5QztvQkFFekMsSUFBSSxFQUFFO3dCQUNKLGtCQUFrQixFQUFFLFVBQVU7cUJBQy9COztpQkFDRjs7Ozs7aUNBS0UsS0FBSztnQ0FDTCxLQUFLOzJCQUVMLEtBQUs7eUJBQ0wsTUFBTTsyQkFFTixLQUFLO3NCQUVMLFNBQVMsU0FBQyxLQUFLOzBCQUVmLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBd0JuQyx3QkFBQztDQUFBLEFBOUNELElBOENDO1NBdENZLGlCQUFpQjs7O0lBSTVCLDJDQUF5Qzs7SUFDekMsMENBQXlDOztJQUV6QyxxQ0FBbUM7O0lBQ25DLG1DQUFzQzs7SUFFdEMscUNBQW9DOztJQUVwQyxnQ0FBd0M7O0lBRXhDLG9DQUtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBJbnB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGFnZS1saW5rJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZS1saW5rLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9wYWdlLWxpbmsuY29tcG9uZW50LnNjc3MnXSxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmRpc2FibGVkXSc6ICdkaXNhYmxlZCdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlTGlua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIEBJbnB1dCgpIGRpcmVjdGlvbkxpbmtzOiAncHJldicgfCAnbmV4dCc7XHJcbiAgQElucHV0KCkgYm91bmRhcnlMaW5rczogJ2ZpcnN0JyB8ICdsYXN0JztcclxuXHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgQFZpZXdDaGlsZCgndHBsJykgdHBsOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgb25DbGljayA9IGUgPT4ge1xyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuY2hhbmdlLmVtaXQoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gIH1cclxuXHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbn1cclxuIl19