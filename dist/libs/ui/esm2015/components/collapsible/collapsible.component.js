/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChild } from '@angular/core';
import { PanelComponent } from './components/panel.component';
import { HeaderComponent } from './components/header.component';
import { ContentComponent } from './components/content.component';
import { untilDestroyed } from '@ionar/utility';
export class CollapsibleComponent {
    constructor() {
        this.single = false;
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this._panelComp && (!this._headerComp || !this._contentComp)) {
            throw new Error(`'collapse-header' or 'collapse-content'  cannot be found!`);
        }
        if (!this._panelComp) {
            this.single = true;
            this._headerComp.toggle.pipe(untilDestroyed(this)).subscribe(() => {
                this._contentComp.collapsed = !this._contentComp.collapsed;
                this._contentComp.ngOnChanges();
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
CollapsibleComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-collapsible',
                template: `
      <ng-container *ngIf="!single">
          <ng-content select="collapse-panel"></ng-content>
      </ng-container>

      <ng-container *ngIf="single">
          <ng-content select="collapse-header"></ng-content>

          <ng-content select="collapse-content"></ng-content>
      </ng-container>
  `,
                styles: [":host{display:flex;flex-direction:column}:host ::ng-deep collapse-panel{background-color:#fff;border:1px solid rgba(0,0,0,.16);border-radius:.4rem;box-shadow:0 .3rem .6rem rgba(0,0,0,.16)}:host ::ng-deep collapse-header{border-bottom:1px solid rgba(0,0,0,.16);cursor:pointer;display:flex;align-items:center;font-size:2rem;font-weight:600;margin:.1rem 0;padding:.6rem 1rem}:host ::ng-deep collapse-header.collapsed{border-bottom:0}:host ::ng-deep collapse-content{padding:2rem}"]
            }] }
];
/** @nocollapse */
CollapsibleComponent.ctorParameters = () => [];
CollapsibleComponent.propDecorators = {
    _panelComp: [{ type: ContentChild, args: [PanelComponent,] }],
    _headerComp: [{ type: ContentChild, args: [HeaderComponent,] }],
    _contentComp: [{ type: ContentChild, args: [ContentComponent,] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    CollapsibleComponent.prototype._panelComp;
    /**
     * @type {?}
     * @private
     */
    CollapsibleComponent.prototype._headerComp;
    /**
     * @type {?}
     * @private
     */
    CollapsibleComponent.prototype._contentComp;
    /** @type {?} */
    CollapsibleComponent.prototype.single;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2libGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBSVQsWUFBWSxFQUdiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBa0JoRCxNQUFNLE9BQU8sb0JBQW9CO0lBVy9CO1FBRkEsV0FBTSxHQUFZLEtBQUssQ0FBQztJQUd4QixDQUFDOzs7OztJQUlELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUNqRSxNQUFNLElBQUksS0FBSyxDQUFDLDJEQUEyRCxDQUFDLENBQUM7U0FDOUU7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDaEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztTQUNKO0lBRUgsQ0FBQzs7OztJQUVELFdBQVc7SUFDWCxDQUFDOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7OztHQVVUOzthQUVGOzs7Ozt5QkFLRSxZQUFZLFNBQUMsY0FBYzswQkFFM0IsWUFBWSxTQUFDLGVBQWU7MkJBQzVCLFlBQVksU0FBQyxnQkFBZ0I7Ozs7Ozs7SUFIOUIsMENBQWlEOzs7OztJQUVqRCwyQ0FBbUQ7Ozs7O0lBQ25ELDRDQUFxRDs7SUFFckQsc0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIE9uRGVzdHJveSxcclxuICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgQ29tcG9uZW50UmVmLCBUZW1wbGF0ZVJlZiwgQWZ0ZXJWaWV3SW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYW5lbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvaGVhZGVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbnRlbnRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udGVudC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB1bnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bpb25hci91dGlsaXR5JztcclxuaW1wb3J0IHsgQ29udGVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyL3NyYy9yZW5kZXIzL3IzX2FzdCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lvLWNvbGxhcHNpYmxlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXNpbmdsZVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiY29sbGFwc2UtcGFuZWxcIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNpbmdsZVwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiY29sbGFwc2UtaGVhZGVyXCI+PC9uZy1jb250ZW50PlxyXG5cclxuICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImNvbGxhcHNlLWNvbnRlbnRcIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gIGAsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY29sbGFwc2libGUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29sbGFwc2libGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBAQ29udGVudENoaWxkKFBhbmVsQ29tcG9uZW50KSBwcml2YXRlIF9wYW5lbENvbXA7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoSGVhZGVyQ29tcG9uZW50KSBwcml2YXRlIF9oZWFkZXJDb21wO1xyXG4gIEBDb250ZW50Q2hpbGQoQ29udGVudENvbXBvbmVudCkgcHJpdmF0ZSBfY29udGVudENvbXA7XHJcblxyXG4gIHNpbmdsZTogQm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICghdGhpcy5fcGFuZWxDb21wICYmICghdGhpcy5faGVhZGVyQ29tcCB8fCAhdGhpcy5fY29udGVudENvbXApKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJ2NvbGxhcHNlLWhlYWRlcicgb3IgJ2NvbGxhcHNlLWNvbnRlbnQnICBjYW5ub3QgYmUgZm91bmQhYCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLl9wYW5lbENvbXApIHtcclxuICAgICAgdGhpcy5zaW5nbGUgPSB0cnVlO1xyXG4gICAgICB0aGlzLl9oZWFkZXJDb21wLnRvZ2dsZS5waXBlKHVudGlsRGVzdHJveWVkKHRoaXMpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2NvbnRlbnRDb21wLmNvbGxhcHNlZCA9ICF0aGlzLl9jb250ZW50Q29tcC5jb2xsYXBzZWQ7XHJcbiAgICAgICAgdGhpcy5fY29udGVudENvbXAubmdPbkNoYW5nZXMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgfVxyXG5cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1haW4gRnVuY3Rpb25zICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxufVxyXG4iXX0=