/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, HostListener, Output, EventEmitter, HostBinding, ContentChild } from '@angular/core';
import { CollapseToggleDirective } from '../directives/collapse-toggle.directive';
import { untilDestroyed } from '@ionar/utility';
export class HeaderComponent {
    constructor() {
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.toggle = new EventEmitter();
        this.collapsed = false;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onClick($event) {
        if (!this._toggleDir) {
            this.toggle.emit();
            this.collapsed = !this.collapsed;
        }
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this._toggleDir) {
            this._toggleDir.toggle.pipe(untilDestroyed(this)).subscribe(() => {
                this.toggle.emit();
                this.collapsed = !this.collapsed;
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
HeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'collapse-header',
                exportAs: 'collapse-header',
                template: `    
          <ng-content></ng-content>
  `
            }] }
];
/** @nocollapse */
HeaderComponent.ctorParameters = () => [];
HeaderComponent.propDecorators = {
    toggle: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }],
    collapsed: [{ type: HostBinding, args: ['class.collapsed',] }],
    _toggleDir: [{ type: ContentChild, args: [CollapseToggleDirective,] }]
};
if (false) {
    /** @type {?} */
    HeaderComponent.prototype.toggle;
    /** @type {?} */
    HeaderComponent.prototype.collapsed;
    /**
     * @type {?}
     * @private
     */
    HeaderComponent.prototype._toggleDir;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29sbGFwc2libGUvY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULFlBQVksRUFDWixNQUFNLEVBQ04sWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBU2hELE1BQU0sT0FBTyxlQUFlO0lBaUIxQjs7UUFkVSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVdOLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFJM0QsQ0FBQzs7Ozs7SUFYRCxPQUFPLENBQUMsTUFBTTtRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7OztJQVVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQy9ELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFFSCxDQUFDOzs7O0lBRUQsV0FBVztJQUNYLENBQUM7OztZQXhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOztHQUVUO2FBQ0Y7Ozs7O3FCQUlFLE1BQU07c0JBR04sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzt3QkFRaEMsV0FBVyxTQUFDLGlCQUFpQjt5QkFFN0IsWUFBWSxTQUFDLHVCQUF1Qjs7OztJQWJyQyxpQ0FBc0M7O0lBV3RDLG9DQUEyRDs7Ozs7SUFFM0QscUNBQW1GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBIb3N0TGlzdGVuZXIsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0QmluZGluZyxcclxuICBDb250ZW50Q2hpbGQsIEFmdGVyVmlld0luaXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29sbGFwc2VUb2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuLi9kaXJlY3RpdmVzL2NvbGxhcHNlLXRvZ2dsZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyB1bnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bpb25hci91dGlsaXR5JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29sbGFwc2UtaGVhZGVyJyxcclxuICBleHBvcnRBczogJ2NvbGxhcHNlLWhlYWRlcicsXHJcbiAgdGVtcGxhdGU6IGAgICAgXHJcbiAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBAT3V0cHV0KCkgdG9nZ2xlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbJyRldmVudCddKVxyXG4gIG9uQ2xpY2soJGV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMuX3RvZ2dsZURpcikge1xyXG4gICAgICB0aGlzLnRvZ2dsZS5lbWl0KCk7XHJcbiAgICAgIHRoaXMuY29sbGFwc2VkID0gIXRoaXMuY29sbGFwc2VkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb2xsYXBzZWQnKSBjb2xsYXBzZWQ6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQENvbnRlbnRDaGlsZChDb2xsYXBzZVRvZ2dsZURpcmVjdGl2ZSkgcHJpdmF0ZSBfdG9nZ2xlRGlyOiBDb2xsYXBzZVRvZ2dsZURpcmVjdGl2ZTtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICh0aGlzLl90b2dnbGVEaXIpIHtcclxuICAgICAgdGhpcy5fdG9nZ2xlRGlyLnRvZ2dsZS5waXBlKHVudGlsRGVzdHJveWVkKHRoaXMpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudG9nZ2xlLmVtaXQoKTtcclxuICAgICAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTWFpbiBGdW5jdGlvbnMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcbn1cclxuIl19