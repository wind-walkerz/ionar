/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ElementRef, Input, TemplateRef } from '@angular/core';
var SlideComponent = /** @class */ (function () {
    function SlideComponent(el, cd) {
        this.el = el;
        this.cd = cd;
    }
    /**
     * @return {?}
     */
    SlideComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.cd.detectChanges();
    };
    SlideComponent.decorators = [
        { type: Component, args: [{
                    selector: 'slide',
                    template: "\n      <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n  ",
                    styles: ["\n      :host {\n          display: flex;\n          position: absolute;\n          flex: 1;\n          width: 100%;\n          height: 100%;\n\n      }\n  "]
                }] }
    ];
    /** @nocollapse */
    SlideComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    SlideComponent.propDecorators = {
        template: [{ type: Input }]
    };
    return SlideComponent;
}());
export { SlideComponent };
if (false) {
    /** @type {?} */
    SlideComponent.prototype.template;
    /** @type {?} */
    SlideComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    SlideComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsicGFja2FnZXMvY2Fyb3VzZWwvc2xpZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQVUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3JHO0lBcUJFLHdCQUNTLEVBQWMsRUFDYixFQUFxQjtRQUR0QixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQ2IsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7SUFFL0IsQ0FBQzs7OztJQUVELGlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Z0JBN0JGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsT0FBTztvQkFDakIsUUFBUSxFQUFFLDBFQUVUOzZCQUNRLDhKQVNSO2lCQUNGOzs7O2dCQWxCc0MsVUFBVTtnQkFBeEMsaUJBQWlCOzs7MkJBcUJ2QixLQUFLOztJQWFSLHFCQUFDO0NBQUEsQUEvQkQsSUErQkM7U0FmWSxjQUFjOzs7SUFFekIsa0NBQW9DOztJQUlsQyw0QkFBcUI7Ozs7O0lBQ3JCLDRCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzbGlkZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInRlbXBsYXRlXCI+PC9uZy1jb250YWluZXI+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgICAgIDpob3N0IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICB9XHJcbiAgYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNsaWRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBlbDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19