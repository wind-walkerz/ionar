/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Host, Optional, SkipSelf } from '@angular/core';
import _ from 'lodash';
import { FormControlComponent } from '../form-control.component';
export class LabelComponent {
    /**
     * @param {?} cd
     * @param {?} parent
     */
    constructor(cd, parent) {
        this.cd = cd;
        /**
         * \@description
         * The parent  for the components
         *
         * \@internal
         */
        this._parent = null;
        this._parent = parent;
    }
    /**
     * @return {?}
     */
    get label() {
        /** @type {?} */
        const props = ((/** @type {?} */ (this._control.state))).props;
        return (props && props.label) ? props.label : _.startCase(this._parent.name);
    }
    /**
     * @private
     * @return {?}
     */
    get _control() {
        return this._parent.control;
    }
    ;
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.cd.detach();
    }
}
LabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'form-label',
                template: `
      {{ label}}
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      :host {
          display: flex;
          align-items: center;
          color: rgba(0, 0, 0, 0.85);
          font-size: 1.6rem;
          font-weight: 700;
          position: relative
      }
  `]
            }] }
];
/** @nocollapse */
LabelComponent.ctorParameters = () => [
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
    LabelComponent.prototype._parent;
    /**
     * @type {?}
     * @private
     */
    LabelComponent.prototype.cd;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFiZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJjb3JlL2NvbXBvbmVudHMvY29udHJvbC9sYWJlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxJQUFJLEVBQ08sUUFBUSxFQUFFLFFBQVEsRUFDOUIsTUFBTSxlQUFlLENBQUM7QUFJdkIsT0FBTyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBb0JqRSxNQUFNLE9BQU8sY0FBYzs7Ozs7SUFzQnpCLFlBQ1UsRUFBcUIsRUFDSSxNQUE0QjtRQURyRCxPQUFFLEdBQUYsRUFBRSxDQUFtQjs7Ozs7OztRQWhCL0IsWUFBTyxHQUFnQyxJQUFJLENBQUM7UUFtQjFDLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFsQkQsSUFBSSxLQUFLOztjQUVELEtBQUssR0FBRyxDQUFDLG1CQUFrQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBQSxDQUFDLENBQUMsS0FBSztRQUUzRCxPQUFPLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRS9FLENBQUM7Ozs7O0lBRUQsSUFBWSxRQUFRO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFDOUIsQ0FBQztJQUFBLENBQUM7Ozs7SUFXRixXQUFXO1FBQ1QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7WUFqREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixRQUFRLEVBQUU7O0dBRVQ7Z0JBV0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07eUJBVnRDOzs7Ozs7Ozs7R0FTUjthQUVGOzs7O1lBOUJDLGlCQUFpQjtZQVdWLG9CQUFvQix1QkE0Q3hCLFFBQVEsWUFBSSxJQUFJLFlBQUksUUFBUTs7Ozs7Ozs7OztJQWpCL0IsaUNBQTRDOzs7OztJQWdCMUMsNEJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdCxcclxuICBPbkRlc3Ryb3ksIE9wdGlvbmFsLCBTa2lwU2VsZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICcuLi8uLi9tb2RlbHMvRm9ybUNvbnRyb2wnO1xyXG5cclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmltcG9ydCB7IEZvcm1Db250cm9sU3RhdGUgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL0Zvcm0nO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4uL2Zvcm0tY29udHJvbC5jb21wb25lbnQnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZm9ybS1sYWJlbCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAge3sgbGFiZWx9fVxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgICA6aG9zdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlXHJcbiAgICAgIH1cclxuICBgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGFiZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIFRoZSBwYXJlbnQgIGZvciB0aGUgY29tcG9uZW50c1xyXG4gICAqXHJcbiAgICogQGludGVybmFsXHJcbiAgICovXHJcbiAgX3BhcmVudDogRm9ybUNvbnRyb2xDb21wb25lbnQgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgZ2V0IGxhYmVsKCk6IHN0cmluZyB7XHJcblxyXG4gICAgY29uc3QgcHJvcHMgPSAoPEZvcm1Db250cm9sU3RhdGU+dGhpcy5fY29udHJvbC5zdGF0ZSkucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIChwcm9wcyAmJiBwcm9wcy5sYWJlbCkgPyBwcm9wcy5sYWJlbCA6IF8uc3RhcnRDYXNlKHRoaXMuX3BhcmVudC5uYW1lKTtcclxuXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldCBfY29udHJvbCgpOiBGb3JtQ29udHJvbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFyZW50LmNvbnRyb2w7XHJcbiAgfTtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBASG9zdCgpIEBTa2lwU2VsZigpICBwYXJlbnQ6IEZvcm1Db250cm9sQ29tcG9uZW50XHJcbiAgKSB7XHJcbiAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkLmRldGFjaCgpO1xyXG4gIH1cclxufVxyXG4iXX0=