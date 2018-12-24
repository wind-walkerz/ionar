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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29sbGFwc2libGUvY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUdULFlBQVksRUFDWixNQUFNLEVBQ04sWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBU2hELE1BQU0sT0FBTyxlQUFlO0lBaUIxQjs7UUFkVSxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVdOLGNBQVMsR0FBWSxLQUFLLENBQUM7SUFJM0QsQ0FBQzs7Ozs7SUFYRCxPQUFPLENBQUMsTUFBTTtRQUNaLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7OztJQVVELFFBQVE7UUFDTixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQy9ELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ25DLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFFSCxDQUFDOzs7O0lBRUQsV0FBVztJQUNYLENBQUM7OztZQXhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFOztHQUVUO2FBQ0Y7Ozs7O3FCQUlFLE1BQU07c0JBR04sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzt3QkFRaEMsV0FBVyxTQUFDLGlCQUFpQjt5QkFFN0IsWUFBWSxTQUFDLHVCQUF1Qjs7OztJQWJyQyxpQ0FBc0M7O0lBV3RDLG9DQUEyRDs7Ozs7SUFFM0QscUNBQW1GIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgSG9zdExpc3RlbmVyLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIENvbnRlbnRDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgVGVtcGxhdGVSZWYsIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbGxhcHNlVG9nZ2xlRGlyZWN0aXZlIH0gZnJvbSAnLi4vZGlyZWN0aXZlcy9jb2xsYXBzZS10b2dnbGUuZGlyZWN0aXZlJztcbmltcG9ydCB7IHVudGlsRGVzdHJveWVkIH0gZnJvbSAnQGlvbmFyL3V0aWxpdHknO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb2xsYXBzZS1oZWFkZXInLFxuICBleHBvcnRBczogJ2NvbGxhcHNlLWhlYWRlcicsXG4gIHRlbXBsYXRlOiBgICAgIFxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuXG4gIEBPdXRwdXQoKSB0b2dnbGUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIG9uQ2xpY2soJGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLl90b2dnbGVEaXIpIHtcbiAgICAgIHRoaXMudG9nZ2xlLmVtaXQoKTtcbiAgICAgIHRoaXMuY29sbGFwc2VkID0gIXRoaXMuY29sbGFwc2VkO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29sbGFwc2VkJykgY29sbGFwc2VkOiBCb29sZWFuID0gZmFsc2U7XG5cbiAgQENvbnRlbnRDaGlsZChDb2xsYXBzZVRvZ2dsZURpcmVjdGl2ZSkgcHJpdmF0ZSBfdG9nZ2xlRGlyOiBDb2xsYXBzZVRvZ2dsZURpcmVjdGl2ZTtcbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5fdG9nZ2xlRGlyKSB7XG4gICAgICB0aGlzLl90b2dnbGVEaXIudG9nZ2xlLnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMudG9nZ2xlLmVtaXQoKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWQgPSAhdGhpcy5jb2xsYXBzZWQ7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICB9XG5cbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1haW4gRnVuY3Rpb25zICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xufVxuIl19