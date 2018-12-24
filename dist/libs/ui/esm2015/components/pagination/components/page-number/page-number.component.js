/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';
export class PageNumberComponent {
    constructor() {
        this.number = 0;
        this.currentPage = 0;
        this.change = new EventEmitter();
        this.onClick = e => {
            this.change.emit(this.number);
        };
        this.onMouseDown = e => {
            this._focusStyle = true;
        };
        this.onMouseUp = e => {
            setTimeout(() => {
                this._focusStyle = false;
            }, 300);
        };
        this._activeStyle = false;
        this._focusStyle = false;
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
        this._activeStyle = this.number === this.currentPage;
    }
}
PageNumberComponent.decorators = [
    { type: Component, args: [{
                selector: 'page-number',
                template: `
      {{number}}
  `,
                styles: [":host{background-color:#fff;border:1px solid #dee2e6;color:#007bff;cursor:pointer;display:flex;justify-content:center;align-items:center;margin-left:-1px;padding:1rem;transition:.3s;z-index:1}:host:hover{background-color:#e9ecef;color:#0056b3}:host.active{background-color:#007bff;border-color:#007bff;color:#fff}:host.focus{outline:0;box-shadow:0 0 0 .2rem rgba(0,123,255,.25);z-index:3}"]
            }] }
];
PageNumberComponent.propDecorators = {
    number: [{ type: Input }],
    currentPage: [{ type: Input }],
    change: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    onMouseDown: [{ type: HostListener, args: ['mousedown', ['$event'],] }],
    onMouseUp: [{ type: HostListener, args: ['mouseup', ['$event'],] }],
    _activeStyle: [{ type: HostBinding, args: ['class.active',] }],
    _focusStyle: [{ type: HostBinding, args: ['class.focus',] }]
};
if (false) {
    /** @type {?} */
    PageNumberComponent.prototype.number;
    /** @type {?} */
    PageNumberComponent.prototype.currentPage;
    /** @type {?} */
    PageNumberComponent.prototype.change;
    /** @type {?} */
    PageNumberComponent.prototype.onClick;
    /** @type {?} */
    PageNumberComponent.prototype.onMouseDown;
    /** @type {?} */
    PageNumberComponent.prototype.onMouseUp;
    /** @type {?} */
    PageNumberComponent.prototype._activeStyle;
    /** @type {?} */
    PageNumberComponent.prototype._focusStyle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1udW1iZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9wYWdpbmF0aW9uL2NvbXBvbmVudHMvcGFnZS1udW1iZXIvcGFnZS1udW1iZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUdaLFlBQVksRUFBRSxXQUFXLEVBQzFCLE1BQU0sZUFBZSxDQUFDO0FBV3ZCLE1BQU0sT0FBTyxtQkFBbUI7SUFQaEM7UUFTVyxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRXZCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3RDLFlBQU8sR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUM7UUFHRixnQkFBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzFCLENBQUMsQ0FBQztRQUdGLGNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNkLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDM0IsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsQ0FBQyxDQUFDO1FBRzJCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQy9CLGdCQUFXLEdBQVksS0FBSyxDQUFDO0lBVTNELENBQUM7Ozs7SUFSQyxRQUFRO0lBRVIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDdkQsQ0FBQzs7O1lBekNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOztHQUVUOzthQUVGOzs7cUJBR0UsS0FBSzswQkFDTCxLQUFLO3FCQUVMLE1BQU07c0JBRU4sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzswQkFLaEMsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzt3QkFLcEMsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzsyQkFRbEMsV0FBVyxTQUFDLGNBQWM7MEJBQzFCLFdBQVcsU0FBQyxhQUFhOzs7O0lBeEIxQixxQ0FBNEI7O0lBQzVCLDBDQUFpQzs7SUFFakMscUNBQXNDOztJQUV0QyxzQ0FHRTs7SUFFRiwwQ0FHRTs7SUFFRix3Q0FLRTs7SUFHRiwyQ0FBMkQ7O0lBQzNELDBDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2UtbnVtYmVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICAgIHt7bnVtYmVyfX1cbiAgYCxcbiAgc3R5bGVVcmxzOiBbYC4vcGFnZS1udW1iZXIuY29tcG9uZW50LnNjc3NgXVxufSlcbmV4cG9ydCBjbGFzcyBQYWdlTnVtYmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIG51bWJlcjogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgY3VycmVudFBhZ2U6IG51bWJlciA9IDA7XG5cbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIG9uQ2xpY2sgPSBlID0+IHtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMubnVtYmVyKTtcbiAgfTtcblxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxuICBvbk1vdXNlRG93biA9IGUgPT4ge1xuICAgIHRoaXMuX2ZvY3VzU3R5bGUgPSB0cnVlO1xuICB9O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNldXAnLCBbJyRldmVudCddKVxuICBvbk1vdXNlVXAgPSBlID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuX2ZvY3VzU3R5bGUgPSBmYWxzZTtcbiAgICB9LCAzMDApO1xuICB9O1xuXG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKSBfYWN0aXZlU3R5bGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5mb2N1cycpIF9mb2N1c1N0eWxlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLl9hY3RpdmVTdHlsZSA9IHRoaXMubnVtYmVyID09PSB0aGlzLmN1cnJlbnRQYWdlO1xuICB9XG5cbn1cbiJdfQ==