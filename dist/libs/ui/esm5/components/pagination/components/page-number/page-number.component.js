/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';
var PageNumberComponent = /** @class */ (function () {
    function PageNumberComponent() {
        var _this = this;
        this.number = 0;
        this.currentPage = 0;
        this.change = new EventEmitter();
        this.onClick = function (e) {
            _this.change.emit(_this.number);
        };
        this.onMouseDown = function (e) {
            _this._focusStyle = true;
        };
        this.onMouseUp = function (e) {
            setTimeout(function () {
                _this._focusStyle = false;
            }, 300);
        };
        this._activeStyle = false;
        this._focusStyle = false;
    }
    /**
     * @return {?}
     */
    PageNumberComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    PageNumberComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this._activeStyle = this.number === this.currentPage;
    };
    PageNumberComponent.decorators = [
        { type: Component, args: [{
                    selector: 'page-number',
                    template: "\n      {{number}}\n  ",
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
    return PageNumberComponent;
}());
export { PageNumberComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1udW1iZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9wYWdpbmF0aW9uL2NvbXBvbmVudHMvcGFnZS1udW1iZXIvcGFnZS1udW1iZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUdaLFlBQVksRUFBRSxXQUFXLEVBQzFCLE1BQU0sZUFBZSxDQUFDO0FBSXZCO0lBQUE7UUFBQSxpQkEyQ0M7UUFsQ1UsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUV2QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUd0QyxZQUFPLEdBQUcsVUFBQSxDQUFDO1lBQ1QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQztRQUdGLGdCQUFXLEdBQUcsVUFBQSxDQUFDO1lBQ2IsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDMUIsQ0FBQyxDQUFDO1FBR0YsY0FBUyxHQUFHLFVBQUEsQ0FBQztZQUNYLFVBQVUsQ0FBQztnQkFDVCxLQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUMzQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDVixDQUFDLENBQUM7UUFHMkIsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDL0IsZ0JBQVcsR0FBWSxLQUFLLENBQUM7SUFVM0QsQ0FBQzs7OztJQVJDLHNDQUFROzs7SUFBUjtJQUVBLENBQUM7Ozs7O0lBRUQseUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3ZELENBQUM7O2dCQXpDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLFFBQVEsRUFBRSx3QkFFVDs7aUJBRUY7Ozt5QkFHRSxLQUFLOzhCQUNMLEtBQUs7eUJBRUwsTUFBTTswQkFFTixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzhCQUtoQyxZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOzRCQUtwQyxZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDOytCQVFsQyxXQUFXLFNBQUMsY0FBYzs4QkFDMUIsV0FBVyxTQUFDLGFBQWE7O0lBVTVCLDBCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7U0FwQ1ksbUJBQW1COzs7SUFFOUIscUNBQTRCOztJQUM1QiwwQ0FBaUM7O0lBRWpDLHFDQUFzQzs7SUFFdEMsc0NBR0U7O0lBRUYsMENBR0U7O0lBRUYsd0NBS0U7O0lBR0YsMkNBQTJEOztJQUMzRCwwQ0FBeUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgSG9zdExpc3RlbmVyLCBIb3N0QmluZGluZ1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwYWdlLW51bWJlcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgICB7e251bWJlcn19XG4gIGAsXG4gIHN0eWxlVXJsczogW2AuL3BhZ2UtbnVtYmVyLmNvbXBvbmVudC5zY3NzYF1cbn0pXG5leHBvcnQgY2xhc3MgUGFnZU51bWJlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBudW1iZXI6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGN1cnJlbnRQYWdlOiBudW1iZXIgPSAwO1xuXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxuICBvbkNsaWNrID0gZSA9PiB7XG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLm51bWJlcik7XG4gIH07XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcbiAgb25Nb3VzZURvd24gPSBlID0+IHtcbiAgICB0aGlzLl9mb2N1c1N0eWxlID0gdHJ1ZTtcbiAgfTtcblxuICBASG9zdExpc3RlbmVyKCdtb3VzZXVwJywgWyckZXZlbnQnXSlcbiAgb25Nb3VzZVVwID0gZSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9mb2N1c1N0eWxlID0gZmFsc2U7XG4gICAgfSwgMzAwKTtcbiAgfTtcblxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYWN0aXZlJykgX2FjdGl2ZVN0eWxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuZm9jdXMnKSBfZm9jdXNTdHlsZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgdGhpcy5fYWN0aXZlU3R5bGUgPSB0aGlzLm51bWJlciA9PT0gdGhpcy5jdXJyZW50UGFnZTtcbiAgfVxuXG59XG4iXX0=