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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2libGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBSVQsWUFBWSxFQUdiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBa0JoRCxNQUFNLE9BQU8sb0JBQW9CO0lBVy9CO1FBRkEsV0FBTSxHQUFZLEtBQUssQ0FBQztJQUd4QixDQUFDOzs7OztJQUlELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUNqRSxNQUFNLElBQUksS0FBSyxDQUFDLDJEQUEyRCxDQUFDLENBQUM7U0FDOUU7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtnQkFDaEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztnQkFDM0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNsQyxDQUFDLENBQUMsQ0FBQztTQUNKO0lBRUgsQ0FBQzs7OztJQUVELFdBQVc7SUFDWCxDQUFDOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7OztHQVVUOzthQUVGOzs7Ozt5QkFLRSxZQUFZLFNBQUMsY0FBYzswQkFFM0IsWUFBWSxTQUFDLGVBQWU7MkJBQzVCLFlBQVksU0FBQyxnQkFBZ0I7Ozs7Ozs7SUFIOUIsMENBQWlEOzs7OztJQUVqRCwyQ0FBbUQ7Ozs7O0lBQ25ELDRDQUFxRDs7SUFFckQsc0NBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgQ29udGVudENoaWxkLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZiwgVGVtcGxhdGVSZWYsIEFmdGVyVmlld0luaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2hlYWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyB1bnRpbERlc3Ryb3llZCB9IGZyb20gJ0Bpb25hci91dGlsaXR5JztcbmltcG9ydCB7IENvbnRlbnQgfSBmcm9tICdAYW5ndWxhci9jb21waWxlci9zcmMvcmVuZGVyMy9yM19hc3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpby1jb2xsYXBzaWJsZScsXG4gIHRlbXBsYXRlOiBgXG4gICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXNpbmdsZVwiPlxuICAgICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImNvbGxhcHNlLXBhbmVsXCI+PC9uZy1jb250ZW50PlxuICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaW5nbGVcIj5cbiAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJjb2xsYXBzZS1oZWFkZXJcIj48L25nLWNvbnRlbnQ+XG5cbiAgICAgICAgICA8bmctY29udGVudCBzZWxlY3Q9XCJjb2xsYXBzZS1jb250ZW50XCI+PC9uZy1jb250ZW50PlxuICAgICAgPC9uZy1jb250YWluZXI+XG4gIGAsXG4gIHN0eWxlVXJsczogWycuL2NvbGxhcHNpYmxlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ29sbGFwc2libGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG5cbiAgQENvbnRlbnRDaGlsZChQYW5lbENvbXBvbmVudCkgcHJpdmF0ZSBfcGFuZWxDb21wO1xuXG4gIEBDb250ZW50Q2hpbGQoSGVhZGVyQ29tcG9uZW50KSBwcml2YXRlIF9oZWFkZXJDb21wO1xuICBAQ29udGVudENoaWxkKENvbnRlbnRDb21wb25lbnQpIHByaXZhdGUgX2NvbnRlbnRDb21wO1xuXG4gIHNpbmdsZTogQm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICB9XG5cbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLl9wYW5lbENvbXAgJiYgKCF0aGlzLl9oZWFkZXJDb21wIHx8ICF0aGlzLl9jb250ZW50Q29tcCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJ2NvbGxhcHNlLWhlYWRlcicgb3IgJ2NvbGxhcHNlLWNvbnRlbnQnICBjYW5ub3QgYmUgZm91bmQhYCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9wYW5lbENvbXApIHtcbiAgICAgIHRoaXMuc2luZ2xlID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2hlYWRlckNvbXAudG9nZ2xlLnBpcGUodW50aWxEZXN0cm95ZWQodGhpcykpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2NvbnRlbnRDb21wLmNvbGxhcHNlZCA9ICF0aGlzLl9jb250ZW50Q29tcC5jb2xsYXBzZWQ7XG4gICAgICAgIHRoaXMuX2NvbnRlbnRDb21wLm5nT25DaGFuZ2VzKCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICB9XG5cblxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTWFpbiBGdW5jdGlvbnMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG5cbn1cbiJdfQ==