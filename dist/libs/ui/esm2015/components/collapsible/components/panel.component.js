/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild } from '@angular/core';
import { HeaderComponent } from './header.component';
import { untilDestroyed } from '@ionar/utility';
import { ContentComponent } from './content.component';
export class PanelComponent {
    constructor() {
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this._headerComp || !this._contentComp) {
            throw new Error(`'collapse-header' or 'collapse-content'  cannot be found!`);
        }
        this._headerComp.toggle.pipe(untilDestroyed(this)).subscribe(() => {
            this._contentComp.collapsed = !this._contentComp.collapsed;
            this._contentComp.ngOnChanges();
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
}
PanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'collapse-panel',
                template: `
      <ng-content select="collapse-header"></ng-content>

      <ng-content select="collapse-content"></ng-content>

  `
            }] }
];
/** @nocollapse */
PanelComponent.ctorParameters = () => [];
PanelComponent.propDecorators = {
    _headerComp: [{ type: ContentChild, args: [HeaderComponent,] }],
    _contentComp: [{ type: ContentChild, args: [ContentComponent,] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    PanelComponent.prototype._headerComp;
    /**
     * @type {?}
     * @private
     */
    PanelComponent.prototype._contentComp;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9jb2xsYXBzaWJsZS9jb21wb25lbnRzL3BhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFJVCxZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVd2RCxNQUFNLE9BQU8sY0FBYztJQU96QjtJQUNBLENBQUM7Ozs7O0lBTUQsUUFBUTtRQUVOLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUMzQyxNQUFNLElBQUksS0FBSyxDQUFDLDJEQUEyRCxDQUFDLENBQUM7U0FDOUU7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNoRSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1lBQzNELElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztJQUNYLENBQUM7Ozs7SUFFRCxlQUFlO0lBR2YsQ0FBQzs7O1lBekNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7O0dBS1Q7YUFDRjs7Ozs7MEJBS0UsWUFBWSxTQUFDLGVBQWU7MkJBQzVCLFlBQVksU0FBQyxnQkFBZ0I7Ozs7Ozs7SUFEOUIscUNBQW1EOzs7OztJQUNuRCxzQ0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBBZnRlclZpZXdJbml0LFxuICBDb250ZW50Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyB1bnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bpb25hci91dGlsaXR5JztcbmltcG9ydCB7IENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbnRlbnQuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29sbGFwc2UtcGFuZWwnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiY29sbGFwc2UtaGVhZGVyXCI+PC9uZy1jb250ZW50PlxuXG4gICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJjb2xsYXBzZS1jb250ZW50XCI+PC9uZy1jb250ZW50PlxuXG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG5cbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG5cbiAgQENvbnRlbnRDaGlsZChIZWFkZXJDb21wb25lbnQpIHByaXZhdGUgX2hlYWRlckNvbXA7XG4gIEBDb250ZW50Q2hpbGQoQ29udGVudENvbXBvbmVudCkgcHJpdmF0ZSBfY29udGVudENvbXA7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuXG5cbiAgbmdPbkluaXQoKSB7XG5cbiAgICBpZiAoIXRoaXMuX2hlYWRlckNvbXAgfHwgIXRoaXMuX2NvbnRlbnRDb21wKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYCdjb2xsYXBzZS1oZWFkZXInIG9yICdjb2xsYXBzZS1jb250ZW50JyAgY2Fubm90IGJlIGZvdW5kIWApO1xuICAgIH1cblxuICAgIHRoaXMuX2hlYWRlckNvbXAudG9nZ2xlLnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLl9jb250ZW50Q29tcC5jb2xsYXBzZWQgPSAhdGhpcy5fY29udGVudENvbXAuY29sbGFwc2VkO1xuICAgICAgdGhpcy5fY29udGVudENvbXAubmdPbkNoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuXG5cbiAgfVxuXG5cbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1haW4gRnVuY3Rpb25zICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuXG59XG4iXX0=