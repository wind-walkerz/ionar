/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, HostBinding, HostListener, Input, Output, TemplateRef } from '@angular/core';
export class DropComponent {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    constructor() {
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.change = new EventEmitter();
        this.multiple = false;
        this.drop_hover = false;
        this.onDrop = $event => {
            event.preventDefault();
            this.change.emit($event.dataTransfer.files);
            this.drop_hover = false;
        };
        this.onDragOver = $event => {
            event.preventDefault();
            this.drop_hover = true;
        };
        this.onDragLeave = $event => {
            event.preventDefault();
            this.drop_hover = false;
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
DropComponent.decorators = [
    { type: Component, args: [{
                selector: 'drop',
                template: "<ng-container *ngTemplateOutlet=\"template\"></ng-container>\r\n\r\n\r\n<input\r\n        type=\"file\"\r\n        [multiple]=\"multiple\"\r\n        (change)=\"$event.stopPropagation();change.emit($event.target.files)\"\r\n>",
                styles: [":host{background-color:#fff;border:1px dashed #d9d9d9;border-radius:.4rem;color:rgba(0,0,0,.65);display:flex;align-items:center;justify-content:center;outline:0;position:relative;transition:.3s;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host.drop_hover{border:2px dashed #40a9ff;color:#40a9ff}:host.drop_hover p{color:#40a9ff}:host p{transition:.3s cubic-bezier(.645,.045,.355,1)}:host:focus{border-color:#40a9ff;outline:0;box-shadow:0 0 0 2px rgba(24,144,255,.2);border-right-width:1px!important}:host:hover{border-color:#40a9ff;color:#40a9ff}:host:hover p{color:#40a9ff}:host.invalid{border-color:#f5222d}:host.invalid:focus{border-color:#ff4d4f;outline:0;box-shadow:0 0 0 2px rgba(245,34,45,.2)}input{border:1px solid red;display:flex;outline:0;opacity:0;position:absolute;width:100%;height:100%;z-index:1}"]
            }] }
];
/** @nocollapse */
DropComponent.ctorParameters = () => [];
DropComponent.propDecorators = {
    change: [{ type: Output }],
    multiple: [{ type: Input }],
    template: [{ type: Input }],
    drop_hover: [{ type: HostBinding, args: ['class.drop_hover',] }],
    onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }],
    onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
    onDragLeave: [{ type: HostListener, args: ['dragleave', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbInVpL2NvbXBvbmVudHMvdXBsb2FkL2NvbXBvbmVudHMvdXBsb2FkLXpvbmUvZHJvcC9kcm9wLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU92SCxNQUFNLE9BQU8sYUFBYTs7SUE2QnhCOztRQTFCVSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM3QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBR0YsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUc3RCxXQUFNLEdBQUcsTUFBTSxDQUFDLEVBQUU7WUFDaEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDMUIsQ0FBQyxDQUFDO1FBR0YsZUFBVSxHQUFHLE1BQU0sQ0FBQyxFQUFFO1lBQ3BCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLENBQUM7UUFHRixnQkFBVyxHQUFHLE1BQU0sQ0FBQyxFQUFFO1lBQ3JCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDLENBQUM7SUFJRixDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7OztZQXRDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLDZPQUFvQzs7YUFFckM7Ozs7O3FCQUlFLE1BQU07dUJBQ04sS0FBSzt1QkFDTCxLQUFLO3lCQUVMLFdBQVcsU0FBQyxrQkFBa0I7cUJBRTlCLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7eUJBTy9CLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7MEJBTW5DLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFuQnJDLCtCQUFzQzs7SUFDdEMsaUNBQW1DOztJQUNuQyxpQ0FBb0M7O0lBRXBDLG1DQUE2RDs7SUFFN0QsK0JBS0U7O0lBRUYsbUNBSUU7O0lBRUYsb0NBSUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSG9zdEJpbmRpbmcsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkcm9wJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Ryb3AuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kcm9wLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHJvcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIG11bHRpcGxlOiBCb29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuZHJvcF9ob3ZlcicpIGRyb3BfaG92ZXI6IEJvb2xlYW4gPSBmYWxzZTtcblxuICBASG9zdExpc3RlbmVyKCdkcm9wJywgWyckZXZlbnQnXSlcbiAgb25Ecm9wID0gJGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuY2hhbmdlLmVtaXQoJGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcyk7XG4gICAgdGhpcy5kcm9wX2hvdmVyID0gZmFsc2U7XG4gIH07XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKVxuICBvbkRyYWdPdmVyID0gJGV2ZW50ID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuZHJvcF9ob3ZlciA9IHRydWU7XG4gIH07XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ2xlYXZlJywgWyckZXZlbnQnXSlcbiAgb25EcmFnTGVhdmUgPSAkZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5kcm9wX2hvdmVyID0gZmFsc2U7XG4gIH07XG5cbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG5cbn1cbiJdfQ==