/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Directive, Host, HostListener, Optional, SkipSelf } from '@angular/core';
import { CollapsibleDirective } from './collapsible.directive';
export class ToggleDirective {
    /**
     * @param {?} parent
     * @param {?} cd
     */
    constructor(parent, cd) {
        this.cd = cd;
        this._parent = parent;
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onClick($event) {
        this._parent.change$.next(!this._parent.collapsed);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._parent.customToggler = true;
    }
}
ToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[collapseToggle]'
            },] }
];
/** @nocollapse */
ToggleDirective.ctorParameters = () => [
    { type: CollapsibleDirective, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] },
    { type: ChangeDetectorRef }
];
ToggleDirective.propDecorators = {
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    ToggleDirective.prototype._parent;
    /**
     * @type {?}
     * @private
     */
    ToggleDirective.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29sbGFwc2libGUvZGlyZWN0aXZlcy90b2dnbGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFFVCxJQUFJLEVBQ0osWUFBWSxFQUVaLFFBQVEsRUFFUixRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFNL0QsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBUzFCLFlBQ2tDLE1BQTRCLEVBQ3BELEVBQXFCO1FBQXJCLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBRTdCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLENBQUM7Ozs7O0lBVEQsT0FBTyxDQUFDLE1BQU07UUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7SUFTRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO0lBQ3BDLENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjthQUM3Qjs7OztZQUxRLG9CQUFvQix1QkFnQnhCLFFBQVEsWUFBSSxJQUFJLFlBQUksUUFBUTtZQTFCL0IsaUJBQWlCOzs7c0JBb0JoQixZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDOzs7Ozs7O0lBRmpDLGtDQUFzQzs7Ozs7SUFTcEMsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgU2tpcFNlbGYsIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29sbGFwc2libGVEaXJlY3RpdmUgfSBmcm9tICcuL2NvbGxhcHNpYmxlLmRpcmVjdGl2ZSc7XG5cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NvbGxhcHNlVG9nZ2xlXSdcbn0pXG5leHBvcnQgY2xhc3MgVG9nZ2xlRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcblxuICBwcml2YXRlIF9wYXJlbnQ6IENvbGxhcHNpYmxlRGlyZWN0aXZlO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcbiAgb25DbGljaygkZXZlbnQpIHtcbiAgICB0aGlzLl9wYXJlbnQuY2hhbmdlJC5uZXh0KCF0aGlzLl9wYXJlbnQuY29sbGFwc2VkKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgQFNraXBTZWxmKCkgcGFyZW50OiBDb2xsYXBzaWJsZURpcmVjdGl2ZSxcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gcGFyZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fcGFyZW50LmN1c3RvbVRvZ2dsZXIgPSB0cnVlO1xuICB9XG59XG4iXX0=