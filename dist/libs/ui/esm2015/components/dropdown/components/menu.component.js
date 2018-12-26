/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
export class MenuComponent {
    /**
     * @param {?} elRef
     */
    constructor(elRef) {
        this.elRef = elRef;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.visible = false;
        this.visibilityChange$ = new Subject();
        this.change = new EventEmitter();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onClick(e) {
        if (e.target instanceof HTMLElement)
            this.change.emit();
    }
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.visibilityChange$.next(this.visible);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
    }
}
MenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'dropdown-menu',
                template: `
      <ng-content></ng-content>`,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      :host {
          display: flex;
          flex-shrink: 0;
      }
  `]
            }] }
];
/** @nocollapse */
MenuComponent.ctorParameters = () => [
    { type: ElementRef }
];
MenuComponent.propDecorators = {
    visible: [{ type: Input }],
    template: [{ type: Input }],
    tplRef: [{ type: ViewChild, args: ['tpl',] }],
    vcRef: [{ type: ViewChild, args: ['vc', { read: ViewContainerRef },] }],
    change: [{ type: Output }],
    onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    MenuComponent.prototype.visible;
    /** @type {?} */
    MenuComponent.prototype.template;
    /** @type {?} */
    MenuComponent.prototype.visibilityChange$;
    /** @type {?} */
    MenuComponent.prototype.tplRef;
    /** @type {?} */
    MenuComponent.prototype.vcRef;
    /** @type {?} */
    MenuComponent.prototype.change;
    /** @type {?} */
    MenuComponent.prototype.elRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2Ryb3Bkb3duL2NvbXBvbmVudHMvbWVudS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUN0QyxLQUFLLEVBRUcsTUFBTSxFQUNkLFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFjL0IsTUFBTSxPQUFPLGFBQWE7Ozs7SUFxQnhCLFlBQW1CLEtBQWlCO1FBQWpCLFVBQUssR0FBTCxLQUFLLENBQVk7O1FBakIzQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBR2xDLHNCQUFpQixHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFLeEIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFVdEMsQ0FBQzs7Ozs7SUFQRCxPQUFPLENBQUMsQ0FBUTtRQUVkLElBQUksQ0FBQyxDQUFDLE1BQU0sWUFBWSxXQUFXO1lBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxRCxDQUFDOzs7OztJQVNELFFBQVE7SUFFUixDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsV0FBVztJQUNYLENBQUM7OztZQWhERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTtnQ0FDb0I7Z0JBTzlCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO3lCQU50Qzs7Ozs7R0FLUjthQUVGOzs7O1lBckJDLFVBQVU7OztzQkEwQlQsS0FBSzt1QkFDTCxLQUFLO3FCQUlMLFNBQVMsU0FBQyxLQUFLO29CQUNmLFNBQVMsU0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7cUJBRTFDLE1BQU07c0JBRU4sWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQVZqQyxnQ0FBa0M7O0lBQ2xDLGlDQUFvQzs7SUFFcEMsMENBQWtDOztJQUVsQywrQkFBMkM7O0lBQzNDLDhCQUFxRTs7SUFFckUsK0JBQXNDOztJQVMxQiw4QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCwgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Ryb3Bkb3duLW1lbnUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5gLFxyXG4gIHN0eWxlczogW2BcclxuICAgICAgOmhvc3Qge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICB9XHJcbiAgYF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIEBJbnB1dCgpIHZpc2libGU6IEJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgdmlzaWJpbGl0eUNoYW5nZSQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBAVmlld0NoaWxkKCd0cGwnKSB0cGxSZWY6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQFZpZXdDaGlsZCgndmMnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgdmNSZWY6IFZpZXdDb250YWluZXJSZWY7XHJcblxyXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICBvbkNsaWNrKGU6IEV2ZW50KSB7XHJcblxyXG4gICAgaWYgKGUudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHRoaXMuY2hhbmdlLmVtaXQoKTtcclxuICB9XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxSZWY6IEVsZW1lbnRSZWYpIHtcclxuICB9XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgdGhpcy52aXNpYmlsaXR5Q2hhbmdlJC5uZXh0KHRoaXMudmlzaWJsZSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICB9XHJcblxyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTWFpbiBGdW5jdGlvbnMgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG59XHJcbiJdfQ==