/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ContentChildren, QueryList } from '@angular/core';
import _ from 'lodash';
import { TabComponent } from '../component/tab.component';
export class TabsComponent {
    /**
     * @param {?} cd
     */
    constructor(cd) {
        this.cd = cd;
        this.selectTab = selected_index => {
            _.each(this.contentList.toArray(), (tab, i) => {
                tab.active = i === selected_index;
            });
            this.activeTab = _.find(this.contentList.toArray(), ['active', true]);
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.activeTab = this.contentList.toArray()[0];
        this.contentList.toArray()[0].active = true;
        this.cd.detectChanges();
    }
}
TabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-tabs',
                template: `
      <ng-template>
          <ng-content></ng-content>
      </ng-template>

      <div class="label_container">
          <ng-container *ngFor="let tab of contentList; let i =index">
              <tab-label
                      [ngClass]="tab.active && 'active'"
                      (click)="selectTab(i)"
                      [text]="tab.label"
                      [template]="tab._labelComp?._templateRef"
              >
              </tab-label>
          </ng-container>
      </div>
      <tab-content
              *ngIf="activeTab"
              [template]="activeTab._contentComp ? activeTab._contentComp._templateRef : activeTab._tabTemplateRef"
      >
      </tab-content>

  `,
                styles: [":host{display:flex;flex-direction:column;position:relative}:host ::ng-deep .label_container{display:flex}:host ::ng-deep .label_container tab-label{cursor:pointer}"]
            }] }
];
/** @nocollapse */
TabsComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
TabsComponent.propDecorators = {
    contentList: [{ type: ContentChildren, args: [TabComponent,] }]
};
if (false) {
    /** @type {?} */
    TabsComponent.prototype.contentList;
    /** @type {?} */
    TabsComponent.prototype.activeTab;
    /** @type {?} */
    TabsComponent.prototype.selectTab;
    /**
     * @type {?}
     * @private
     */
    TabsComponent.prototype.cd;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL3RhYnMvY29udGFpbmVycy90YWJzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUVmLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBNkIxRCxNQUFNLE9BQU8sYUFBYTs7OztJQUt4QixZQUFvQixFQUFxQjtRQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQVl6QyxjQUFTLEdBQUcsY0FBYyxDQUFDLEVBQUU7WUFDM0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUM1QyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsS0FBSyxjQUFjLENBQUM7WUFDcEMsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3hFLENBQUMsQ0FBQztJQWhCRixDQUFDOzs7O0lBRUQsUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUM1QyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQTFDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCVDs7YUFFRjs7OztZQW5DQyxpQkFBaUI7OzswQkFxQ2hCLGVBQWUsU0FBQyxZQUFZOzs7O0lBQTdCLG9DQUFvRTs7SUFFcEUsa0NBQXdCOztJQWN4QixrQ0FLRTs7Ozs7SUFqQlUsMkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgT25Jbml0LFxyXG4gIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBUYWJDb21wb25lbnQgfSBmcm9tICcuLi9jb21wb25lbnQvdGFiLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lvLXRhYnMnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICAgIDxuZy10ZW1wbGF0ZT5cclxuICAgICAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbF9jb250YWluZXJcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHRhYiBvZiBjb250ZW50TGlzdDsgbGV0IGkgPWluZGV4XCI+XHJcbiAgICAgICAgICAgICAgPHRhYi1sYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwidGFiLmFjdGl2ZSAmJiAnYWN0aXZlJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0VGFiKGkpXCJcclxuICAgICAgICAgICAgICAgICAgICAgIFt0ZXh0XT1cInRhYi5sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVdPVwidGFiLl9sYWJlbENvbXA/Ll90ZW1wbGF0ZVJlZlwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDwvdGFiLWxhYmVsPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dGFiLWNvbnRlbnRcclxuICAgICAgICAgICAgICAqbmdJZj1cImFjdGl2ZVRhYlwiXHJcbiAgICAgICAgICAgICAgW3RlbXBsYXRlXT1cImFjdGl2ZVRhYi5fY29udGVudENvbXAgPyBhY3RpdmVUYWIuX2NvbnRlbnRDb21wLl90ZW1wbGF0ZVJlZiA6IGFjdGl2ZVRhYi5fdGFiVGVtcGxhdGVSZWZcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvdGFiLWNvbnRlbnQ+XHJcblxyXG4gIGAsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGFicy5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcclxuICBAQ29udGVudENoaWxkcmVuKFRhYkNvbXBvbmVudCkgY29udGVudExpc3Q6IFF1ZXJ5TGlzdDxUYWJDb21wb25lbnQ+O1xyXG5cclxuICBhY3RpdmVUYWI6IFRhYkNvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmVUYWIgPSB0aGlzLmNvbnRlbnRMaXN0LnRvQXJyYXkoKVswXTtcclxuICAgIHRoaXMuY29udGVudExpc3QudG9BcnJheSgpWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFRhYiA9IHNlbGVjdGVkX2luZGV4ID0+IHtcclxuICAgIF8uZWFjaCh0aGlzLmNvbnRlbnRMaXN0LnRvQXJyYXkoKSwgKHRhYiwgaSkgPT4ge1xyXG4gICAgICB0YWIuYWN0aXZlID0gaSA9PT0gc2VsZWN0ZWRfaW5kZXg7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuYWN0aXZlVGFiID0gXy5maW5kKHRoaXMuY29udGVudExpc3QudG9BcnJheSgpLCBbJ2FjdGl2ZScsIHRydWVdKTtcclxuICB9O1xyXG59XHJcbiJdfQ==