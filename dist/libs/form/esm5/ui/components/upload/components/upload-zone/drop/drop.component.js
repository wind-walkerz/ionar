/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, HostBinding, HostListener, Input, Output, TemplateRef } from '@angular/core';
var DropComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function DropComponent() {
        var _this = this;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.change = new EventEmitter();
        this.multiple = false;
        this.drop_hover = false;
        this.onDrop = function ($event) {
            event.preventDefault();
            _this.change.emit($event.dataTransfer.files);
            _this.drop_hover = false;
        };
        this.onDragOver = function ($event) {
            event.preventDefault();
            _this.drop_hover = true;
        };
        this.onDragLeave = function ($event) {
            event.preventDefault();
            _this.drop_hover = false;
        };
    }
    /**
     * @return {?}
     */
    DropComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    DropComponent.decorators = [
        { type: Component, args: [{
                    selector: 'drop',
                    template: "<ng-container *ngTemplateOutlet=\"template\"></ng-container>\r\n\r\n\r\n<input\r\n        type=\"file\"\r\n        [multiple]=\"multiple\"\r\n        (change)=\"$event.stopPropagation();change.emit($event.target.files)\"\r\n>",
                    styles: [":host{background-color:#fff;border:1px dashed #d9d9d9;border-radius:.4rem;color:rgba(0,0,0,.65);display:flex;align-items:center;justify-content:center;outline:0;position:relative;transition:.3s;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host.drop_hover{border:2px dashed #40a9ff;color:#40a9ff}:host.drop_hover p{color:#40a9ff}:host p{transition:.3s cubic-bezier(.645,.045,.355,1)}:host:focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff;color:#40a9ff}:host:hover p{color:#40a9ff}:host.invalid{border-color:#f5222d}:host.invalid:focus{border-color:#ff4d4f;outline:0;box-shadow:0 0 0 2px rgba(245,34,45,.2)}input{border:1px solid red;display:flex;outline:0;opacity:0;position:absolute;width:100%;height:100%;z-index:1}"]
                }] }
    ];
    /** @nocollapse */
    DropComponent.ctorParameters = function () { return []; };
    DropComponent.propDecorators = {
        change: [{ type: Output }],
        multiple: [{ type: Input }],
        template: [{ type: Input }],
        drop_hover: [{ type: HostBinding, args: ['class.drop_hover',] }],
        onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }],
        onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
        onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }]
    };
    return DropComponent;
}());
export { DropComponent };
if (false) {
    /** @type {?} */
    DropComponent.prototype.change;
    /** @type {?} */
    DropComponent.prototype.multiple;
    /** @type {?} */
    DropComponent.prototype.template;
    /** @type {?} */
    DropComponent.prototype.drop_hover;
    /** @type {?} */
    DropComponent.prototype.onDrop;
    /** @type {?} */
    DropComponent.prototype.onDragOver;
    /** @type {?} */
    DropComponent.prototype.onDragLeave;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbInVpL2NvbXBvbmVudHMvdXBsb2FkL2NvbXBvbmVudHMvdXBsb2FkLXpvbmUvZHJvcC9kcm9wLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV2SDtJQWlDRSx3SEFBd0g7SUFDeEg7UUFBQSxpQkFDQzs7UUEzQlMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDN0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUdGLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFHN0QsV0FBTSxHQUFHLFVBQUEsTUFBTTtZQUNiLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzVDLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUMsQ0FBQztRQUdGLGVBQVUsR0FBRyxVQUFBLE1BQU07WUFDakIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsQ0FBQztRQUdGLGdCQUFXLEdBQUcsVUFBQSxNQUFNO1lBQ2xCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDLENBQUM7SUFJRixDQUFDOzs7O0lBRUQsZ0NBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7Z0JBdENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsTUFBTTtvQkFDaEIsNk9BQW9DOztpQkFFckM7Ozs7O3lCQUlFLE1BQU07MkJBQ04sS0FBSzsyQkFDTCxLQUFLOzZCQUVMLFdBQVcsU0FBQyxrQkFBa0I7eUJBRTlCLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7NkJBTy9CLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7OEJBTW5DLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBZ0J2QyxvQkFBQztDQUFBLEFBM0NELElBMkNDO1NBdENZLGFBQWE7OztJQUd4QiwrQkFBc0M7O0lBQ3RDLGlDQUFtQzs7SUFDbkMsaUNBQW9DOztJQUVwQyxtQ0FBNkQ7O0lBRTdELCtCQUtFOztJQUVGLG1DQUlFOztJQUVGLG9DQUlFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZHJvcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcm9wLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZHJvcC5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERyb3BDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cblxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBtdWx0aXBsZTogQm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRyb3BfaG92ZXInKSBkcm9wX2hvdmVyOiBCb29sZWFuID0gZmFsc2U7XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXG4gIG9uRHJvcCA9ICRldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmNoYW5nZS5lbWl0KCRldmVudC5kYXRhVHJhbnNmZXIuZmlsZXMpO1xuICAgIHRoaXMuZHJvcF9ob3ZlciA9IGZhbHNlO1xuICB9O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSlcbiAgb25EcmFnT3ZlciA9ICRldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmRyb3BfaG92ZXIgPSB0cnVlO1xuICB9O1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIFsnJGV2ZW50J10pXG4gIG9uRHJhZ0xlYXZlID0gJGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuZHJvcF9ob3ZlciA9IGZhbHNlO1xuICB9O1xuXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTWFpbiBGdW5jdGlvbnMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuXG59XG4iXX0=