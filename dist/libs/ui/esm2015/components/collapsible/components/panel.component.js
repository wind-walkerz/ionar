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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9jb2xsYXBzaWJsZS9jb21wb25lbnRzL3BhbmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFJVCxZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXJELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQVd2RCxNQUFNLE9BQU8sY0FBYztJQU96QjtJQUNBLENBQUM7Ozs7O0lBTUQsUUFBUTtRQUVOLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUMzQyxNQUFNLElBQUksS0FBSyxDQUFDLDJEQUEyRCxDQUFDLENBQUM7U0FDOUU7UUFFRCxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtZQUNoRSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1lBQzNELElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsV0FBVztJQUNYLENBQUM7Ozs7SUFFRCxlQUFlO0lBR2YsQ0FBQzs7O1lBekNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUU7Ozs7O0dBS1Q7YUFDRjs7Ozs7MEJBS0UsWUFBWSxTQUFDLGVBQWU7MkJBQzVCLFlBQVksU0FBQyxnQkFBZ0I7Ozs7Ozs7SUFEOUIscUNBQW1EOzs7OztJQUNuRCxzQ0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29udGVudENoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vaGVhZGVyLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyB1bnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bpb25hci91dGlsaXR5JztcclxuaW1wb3J0IHsgQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vY29udGVudC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb2xsYXBzZS1wYW5lbCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiY29sbGFwc2UtaGVhZGVyXCI+PC9uZy1jb250ZW50PlxyXG5cclxuICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiY29sbGFwc2UtY29udGVudFwiPjwvbmctY29udGVudD5cclxuXHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBAQ29udGVudENoaWxkKEhlYWRlckNvbXBvbmVudCkgcHJpdmF0ZSBfaGVhZGVyQ29tcDtcclxuICBAQ29udGVudENoaWxkKENvbnRlbnRDb21wb25lbnQpIHByaXZhdGUgX2NvbnRlbnRDb21wO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIGlmICghdGhpcy5faGVhZGVyQ29tcCB8fCAhdGhpcy5fY29udGVudENvbXApIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGAnY29sbGFwc2UtaGVhZGVyJyBvciAnY29sbGFwc2UtY29udGVudCcgIGNhbm5vdCBiZSBmb3VuZCFgKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9oZWFkZXJDb21wLnRvZ2dsZS5waXBlKHVudGlsRGVzdHJveWVkKHRoaXMpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLl9jb250ZW50Q29tcC5jb2xsYXBzZWQgPSAhdGhpcy5fY29udGVudENvbXAuY29sbGFwc2VkO1xyXG4gICAgICB0aGlzLl9jb250ZW50Q29tcC5uZ09uQ2hhbmdlcygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbn1cclxuIl19