/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Host, Optional, SkipSelf } from '@angular/core';
import { FormControlComponent } from '../form-control.component';
export class FieldComponent {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} cd
     * @param {?} parent
     */
    constructor(cd, parent) {
        this.cd = cd;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        /**
         * \@description
         * The parent  for the components
         *
         * \@internal
         */
        this._parent = null;
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.onChanged = e => {
            this._parent.control.setValue(e);
        };
        this.onTouched = () => {
            this._parent.control.markAsTouched();
        };
        this.onEntered = () => {
            // this.formSvs._onEntered()
            // if (this.name === 'password') this.focus = true;
        };
        this._parent = parent;
    }
    /**
     * @return {?}
     */
    get template() {
        return this._parent.controlTemplateDir && this._parent.controlTemplateDir.templateRef;
    }
    ;
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
}
FieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'form-field',
                template: `
      <ng-container *ngIf="_parent.control">
          <ng-container
                  dynamic_field
                  [name]="_parent.name"
                  [control]="_parent.control"
                  [root]="_parent.root"
                  [events]="{
                    change: onChanged,
                    blur: onTouched,
                    enter: onEntered
              }"
                  [template]="template"
          >
          </ng-container>
      </ng-container>

  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      :host {
          display: flex;
          width: 100%;
          height: 100%;
      }
  `]
            }] }
];
/** @nocollapse */
FieldComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: FormControlComponent, decorators: [{ type: Optional }, { type: Host }, { type: SkipSelf }] }
];
if (false) {
    /**
     * \@description
     * The parent  for the components
     *
     * \@internal
     * @type {?}
     */
    FieldComponent.prototype._parent;
    /** @type {?} */
    FieldComponent.prototype.onChanged;
    /** @type {?} */
    FieldComponent.prototype.onTouched;
    /** @type {?} */
    FieldComponent.prototype.onEntered;
    /**
     * @type {?}
     * @private
     */
    FieldComponent.prototype.cd;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmllbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL2NvbXBvbmVudHMvY29udHJvbC9maWVsZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxJQUFJLEVBQ0ksUUFBUSxFQUFFLFFBQVEsRUFDM0IsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFpQ2pFLE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFrQnpCLFlBQ1UsRUFBcUIsRUFDSSxNQUE0QjtRQURyRCxPQUFFLEdBQUYsRUFBRSxDQUFtQjs7Ozs7Ozs7UUFWL0IsWUFBTyxHQUFnQyxJQUFJLENBQUM7O1FBMkI1QyxjQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDO1FBRUYsY0FBUyxHQUFHLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQztRQUVGLGNBQVMsR0FBRyxHQUFHLEVBQUU7WUFDZiw0QkFBNEI7WUFDNUIsbURBQW1EO1FBQ3JELENBQUMsQ0FBQztRQXhCQSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUN4QixDQUFDOzs7O0lBYkQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsV0FBVyxDQUFDO0lBQ3hGLENBQUM7SUFBQSxDQUFDOzs7O0lBYUYsUUFBUTtJQUVSLENBQUM7Ozs7SUFFRCxlQUFlO0lBRWYsQ0FBQzs7O1lBOURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCVDtnQkFTRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFQdEM7Ozs7OztHQU1SO2FBRUY7Ozs7WUF0Q0MsaUJBQWlCO1lBTVYsb0JBQW9CLHVCQXFEeEIsUUFBUSxZQUFJLElBQUksWUFBSSxRQUFROzs7Ozs7Ozs7O0lBWC9CLGlDQUE0Qzs7SUEyQjVDLG1DQUVFOztJQUVGLG1DQUVFOztJQUVGLG1DQUdFOzs7OztJQTVCQSw0QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEhvc3QsXHJcbiAgT25Jbml0LCBPcHRpb25hbCwgU2tpcFNlbGYsIFRlbXBsYXRlUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBGb3JtQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2Zvcm0tY29udHJvbC5jb21wb25lbnQnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIl9wYXJlbnQuY29udHJvbFwiPlxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICBkeW5hbWljX2ZpZWxkXHJcbiAgICAgICAgICAgICAgICAgIFtuYW1lXT1cIl9wYXJlbnQubmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgIFtjb250cm9sXT1cIl9wYXJlbnQuY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgIFtyb290XT1cIl9wYXJlbnQucm9vdFwiXHJcbiAgICAgICAgICAgICAgICAgIFtldmVudHNdPVwie1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZTogb25DaGFuZ2VkLFxyXG4gICAgICAgICAgICAgICAgICAgIGJsdXI6IG9uVG91Y2hlZCxcclxuICAgICAgICAgICAgICAgICAgICBlbnRlcjogb25FbnRlcmVkXHJcbiAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZV09XCJ0ZW1wbGF0ZVwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIGAsXHJcblxyXG4gIHN0eWxlczogW2BcclxuICAgICAgOmhvc3Qge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgYF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEZpZWxkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogVGhlIHBhcmVudCAgZm9yIHRoZSBjb21wb25lbnRzXHJcbiAgICpcclxuICAgKiBAaW50ZXJuYWxcclxuICAgKi9cclxuICBfcGFyZW50OiBGb3JtQ29udHJvbENvbXBvbmVudCB8IG51bGwgPSBudWxsO1xyXG5cclxuICBnZXQgdGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50LmNvbnRyb2xUZW1wbGF0ZURpciAmJiB0aGlzLl9wYXJlbnQuY29udHJvbFRlbXBsYXRlRGlyLnRlbXBsYXRlUmVmO1xyXG4gIH07XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBPcHRpb25hbCgpIEBIb3N0KCkgQFNraXBTZWxmKCkgIHBhcmVudDogRm9ybUNvbnRyb2xDb21wb25lbnRcclxuICApIHtcclxuXHJcbiAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcblxyXG4gIH1cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1haW4gRnVuY3Rpb25zICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgb25DaGFuZ2VkID0gZSA9PiB7XHJcbiAgICB0aGlzLl9wYXJlbnQuY29udHJvbC5zZXRWYWx1ZShlKTtcclxuICB9O1xyXG5cclxuICBvblRvdWNoZWQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9wYXJlbnQuY29udHJvbC5tYXJrQXNUb3VjaGVkKCk7XHJcbiAgfTtcclxuXHJcbiAgb25FbnRlcmVkID0gKCkgPT4ge1xyXG4gICAgLy8gdGhpcy5mb3JtU3ZzLl9vbkVudGVyZWQoKVxyXG4gICAgLy8gaWYgKHRoaXMubmFtZSA9PT0gJ3Bhc3N3b3JkJykgdGhpcy5mb2N1cyA9IHRydWU7XHJcbiAgfTtcclxuXHJcblxyXG59XHJcbiJdfQ==