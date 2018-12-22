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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1udW1iZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9wYWdpbmF0aW9uL2NvbXBvbmVudHMvcGFnZS1udW1iZXIvcGFnZS1udW1iZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUdaLFlBQVksRUFBRSxXQUFXLEVBQzFCLE1BQU0sZUFBZSxDQUFDO0FBV3ZCLE1BQU0sT0FBTyxtQkFBbUI7SUFQaEM7UUFTVyxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRXZCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3RDLFlBQU8sR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUM7UUFHRixnQkFBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzFCLENBQUMsQ0FBQztRQUdGLGNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNkLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDM0IsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsQ0FBQyxDQUFDO1FBRzJCLGlCQUFZLEdBQVksS0FBSyxDQUFDO1FBQy9CLGdCQUFXLEdBQVksS0FBSyxDQUFDO0lBVTNELENBQUM7Ozs7SUFSQyxRQUFRO0lBRVIsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDdkQsQ0FBQzs7O1lBekNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsUUFBUSxFQUFFOztHQUVUOzthQUVGOzs7cUJBR0UsS0FBSzswQkFDTCxLQUFLO3FCQUVMLE1BQU07c0JBRU4sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzswQkFLaEMsWUFBWSxTQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQzt3QkFLcEMsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzsyQkFRbEMsV0FBVyxTQUFDLGNBQWM7MEJBQzFCLFdBQVcsU0FBQyxhQUFhOzs7O0lBeEIxQixxQ0FBNEI7O0lBQzVCLDBDQUFpQzs7SUFFakMscUNBQXNDOztJQUV0QyxzQ0FHRTs7SUFFRiwwQ0FHRTs7SUFFRix3Q0FLRTs7SUFHRiwyQ0FBMkQ7O0lBQzNELDBDQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBPbkNoYW5nZXMsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBIb3N0TGlzdGVuZXIsIEhvc3RCaW5kaW5nXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIHRpbWVyIH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3BhZ2UtbnVtYmVyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICB7e251bWJlcn19XHJcbiAgYCxcclxuICBzdHlsZVVybHM6IFtgLi9wYWdlLW51bWJlci5jb21wb25lbnQuc2Nzc2BdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdlTnVtYmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBASW5wdXQoKSBudW1iZXI6IG51bWJlciA9IDA7XHJcbiAgQElucHV0KCkgY3VycmVudFBhZ2U6IG51bWJlciA9IDA7XHJcblxyXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICBvbkNsaWNrID0gZSA9PiB7XHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMubnVtYmVyKTtcclxuICB9O1xyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZWRvd24nLCBbJyRldmVudCddKVxyXG4gIG9uTW91c2VEb3duID0gZSA9PiB7XHJcbiAgICB0aGlzLl9mb2N1c1N0eWxlID0gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBASG9zdExpc3RlbmVyKCdtb3VzZXVwJywgWyckZXZlbnQnXSlcclxuICBvbk1vdXNlVXAgPSBlID0+IHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLl9mb2N1c1N0eWxlID0gZmFsc2U7XHJcbiAgICB9LCAzMDApO1xyXG4gIH07XHJcblxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpIF9hY3RpdmVTdHlsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZm9jdXMnKSBfZm9jdXNTdHlsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB0aGlzLl9hY3RpdmVTdHlsZSA9IHRoaXMubnVtYmVyID09PSB0aGlzLmN1cnJlbnRQYWdlO1xyXG4gIH1cclxuXHJcbn1cclxuIl19