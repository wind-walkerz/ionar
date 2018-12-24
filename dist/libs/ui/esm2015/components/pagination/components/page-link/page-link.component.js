/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef, ViewChild, HostListener, Output, EventEmitter } from '@angular/core';
export class PageLinkComponent {
    constructor() {
        this.disabled = false;
        this.change = new EventEmitter();
        this.onClick = e => {
            if (!this.disabled) {
                this.change.emit();
            }
        };
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
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
PageLinkComponent.ctorParameters = () => [];
PageLinkComponent.propDecorators = {
    directionLinks: [{ type: Input }],
    boundaryLinks: [{ type: Input }],
    disabled: [{ type: Input }],
    change: [{ type: Output }],
    template: [{ type: Input }],
    tpl: [{ type: ViewChild, args: ['tpl',] }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcGFnaW5hdGlvbi9jb21wb25lbnRzL3BhZ2UtbGluay9wYWdlLWxpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULFlBQVksRUFDWixNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBVXZCLE1BQU0sT0FBTyxpQkFBaUI7SUFxQjVCO1FBZFMsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUN6QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU90QyxZQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNwQjtRQUNILENBQUMsQ0FBQztJQUdGLENBQUM7Ozs7O0lBTUQsUUFBUTtJQUVSLENBQUM7Ozs7SUFFRCxXQUFXO0lBQ1gsQ0FBQzs7O1lBekNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsaU5BQXlDO2dCQUV6QyxJQUFJLEVBQUU7b0JBQ0osa0JBQWtCLEVBQUUsVUFBVTtpQkFDL0I7O2FBQ0Y7Ozs7OzZCQUtFLEtBQUs7NEJBQ0wsS0FBSzt1QkFFTCxLQUFLO3FCQUNMLE1BQU07dUJBRU4sS0FBSztrQkFFTCxTQUFTLFNBQUMsS0FBSztzQkFFZixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBVmpDLDJDQUF5Qzs7SUFDekMsMENBQXlDOztJQUV6QyxxQ0FBbUM7O0lBQ25DLG1DQUFzQzs7SUFFdEMscUNBQW9DOztJQUVwQyxnQ0FBd0M7O0lBRXhDLG9DQUtFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgSW5wdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIEhvc3RMaXN0ZW5lcixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtbGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlLWxpbmsuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYWdlLWxpbmsuY29tcG9uZW50LnNjc3MnXSxcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuZGlzYWJsZWRdJzogJ2Rpc2FibGVkJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VMaW5rQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuXG4gIEBJbnB1dCgpIGRpcmVjdGlvbkxpbmtzOiAncHJldicgfCAnbmV4dCc7XG4gIEBJbnB1dCgpIGJvdW5kYXJ5TGlua3M6ICdmaXJzdCcgfCAnbGFzdCc7XG5cbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAVmlld0NoaWxkKCd0cGwnKSB0cGw6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBvbkNsaWNrID0gZSA9PiB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmNoYW5nZS5lbWl0KCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cblxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgfVxuXG5cbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1haW4gRnVuY3Rpb25zICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuXG59XG4iXX0=