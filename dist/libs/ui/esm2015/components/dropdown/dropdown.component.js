/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, HostListener } from '@angular/core';
import { MenuComponent } from './components/menu.component';
import { ToggleComponent } from './components/toggle.component';
import { untilDestroyed } from '@ionar/utility';
export class DropdownComponent {
    /**
     * @param {?} _elRef
     * @param {?} cd
     */
    constructor(_elRef, cd) {
        this._elRef = _elRef;
        this.cd = cd;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.viewInitialized = false;
        this.visible = false;
        this.showDropdownMenu = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClickOutside(e) {
        if (!this._elRef.nativeElement.contains(e.target) && !this._menuComp.elRef.nativeElement.contains(e.target)) {
            this.showDropdownMenu = false;
        }
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ngOnInit() {
        this._menuComp.visibilityChange$.pipe(untilDestroyed(this)).subscribe(visible => {
            this.visible = visible;
            this.cd.markForCheck();
        });
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.viewInitialized = true;
        this._toggleComp.change.subscribe(() => {
            this.showDropdownMenu = !this.showDropdownMenu;
        });
        this._menuComp.change.subscribe(() => {
            this.showDropdownMenu = !this.showDropdownMenu;
        });
        this.cd.detectChanges();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
DropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-dropdown',
                template: `
      <ng-content select="dropdown-toggle"></ng-content>

      <ng-container *ngIf="showDropdownMenu && visible">
          <ng-content select="dropdown-menu"></ng-content>
      </ng-container>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
DropdownComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
DropdownComponent.propDecorators = {
    _menuComp: [{ type: ContentChild, args: [MenuComponent,] }],
    _toggleComp: [{ type: ContentChild, args: [ToggleComponent,] }],
    onClickOutside: [{ type: HostListener, args: ['document:click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    DropdownComponent.prototype.viewInitialized;
    /** @type {?} */
    DropdownComponent.prototype.visible;
    /** @type {?} */
    DropdownComponent.prototype.showDropdownMenu;
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype._menuComp;
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype._toggleComp;
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype._elRef;
    /**
     * @type {?}
     * @private
     */
    DropdownComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcGRvd24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9kcm9wZG93bi9kcm9wZG93bi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFLYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQWFoRCxNQUFNLE9BQU8saUJBQWlCOzs7OztJQW9CNUIsWUFBb0IsTUFBa0IsRUFBVSxFQUFxQjtRQUFqRCxXQUFNLEdBQU4sTUFBTSxDQUFZO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7O1FBakJyRSxvQkFBZSxHQUFZLEtBQUssQ0FBQztRQUVqQyxZQUFPLEdBQVksS0FBSyxDQUFDO1FBRXpCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztJQWNsQyxDQUFDOzs7OztJQVBELGNBQWMsQ0FBQyxDQUFRO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDM0csSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztTQUMvQjtJQUNILENBQUM7Ozs7O0lBT0QsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUM5RSxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUV2QixJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3pCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtJQUVsQyxDQUFDOzs7O0lBRUQsV0FBVztJQUNYLENBQUM7OztZQTlERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7O0dBTVQ7Z0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFyQkMsVUFBVTtZQUhWLGlCQUFpQjs7O3dCQWtDaEIsWUFBWSxTQUFDLGFBQWE7MEJBRTFCLFlBQVksU0FBQyxlQUFlOzZCQUU1QixZQUFZLFNBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFWMUMsNENBQWlDOztJQUVqQyxvQ0FBeUI7O0lBRXpCLDZDQUFrQzs7Ozs7SUFFbEMsc0NBQStDOzs7OztJQUUvQyx3Q0FBbUQ7Ozs7O0lBU3ZDLG1DQUEwQjs7Ozs7SUFBRSwrQkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1lbnVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUb2dnbGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdG9nZ2xlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHVudGlsRGVzdHJveWVkIH0gZnJvbSAnQGlvbmFyL3V0aWxpdHknO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpby1kcm9wZG93bicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiZHJvcGRvd24tdG9nZ2xlXCI+PC9uZy1jb250ZW50PlxyXG5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dEcm9wZG93bk1lbnUgJiYgdmlzaWJsZVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiZHJvcGRvd24tbWVudVwiPjwvbmctY29udGVudD5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJvcGRvd25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcbiAgdmlld0luaXRpYWxpemVkOiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG4gIHZpc2libGU6IEJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgc2hvd0Ryb3Bkb3duTWVudTogQm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAQ29udGVudENoaWxkKE1lbnVDb21wb25lbnQpIHByaXZhdGUgX21lbnVDb21wO1xyXG5cclxuICBAQ29udGVudENoaWxkKFRvZ2dsZUNvbXBvbmVudCkgcHJpdmF0ZSBfdG9nZ2xlQ29tcDtcclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6Y2xpY2snLCBbJyRldmVudCddKVxyXG4gIG9uQ2xpY2tPdXRzaWRlKGU6IEV2ZW50KSB7XHJcbiAgICBpZiAoIXRoaXMuX2VsUmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpICYmICF0aGlzLl9tZW51Q29tcC5lbFJlZi5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xyXG4gICAgICB0aGlzLnNob3dEcm9wZG93bk1lbnUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2VsUmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gIH1cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5fbWVudUNvbXAudmlzaWJpbGl0eUNoYW5nZSQucGlwZSh1bnRpbERlc3Ryb3llZCh0aGlzKSkuc3Vic2NyaWJlKHZpc2libGUgPT4ge1xyXG4gICAgICB0aGlzLnZpc2libGUgPSB2aXNpYmxlO1xyXG5cclxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy52aWV3SW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5fdG9nZ2xlQ29tcC5jaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5zaG93RHJvcGRvd25NZW51ID0gIXRoaXMuc2hvd0Ryb3Bkb3duTWVudTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX21lbnVDb21wLmNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnNob3dEcm9wZG93bk1lbnUgPSAhdGhpcy5zaG93RHJvcGRvd25NZW51O1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19