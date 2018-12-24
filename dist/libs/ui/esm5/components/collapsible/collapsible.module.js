/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollapsibleComponent } from './collapsible.component';
import { HeaderComponent } from './components/header.component';
import { ContentComponent } from './components/content.component';
import { PanelComponent } from './components/panel.component';
import { CollapseToggleDirective } from './directives/collapse-toggle.directive';
var CollapsibleModule = /** @class */ (function () {
    function CollapsibleModule() {
    }
    CollapsibleModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        CollapsibleComponent,
                        HeaderComponent,
                        ContentComponent,
                        PanelComponent,
                        CollapseToggleDirective
                    ],
                    exports: [
                        CollapsibleComponent,
                        HeaderComponent,
                        ContentComponent,
                        PanelComponent,
                        CollapseToggleDirective
                    ],
                    entryComponents: [
                        CollapsibleComponent,
                        HeaderComponent,
                        ContentComponent,
                        PanelComponent
                    ]
                },] }
    ];
    return CollapsibleModule;
}());
export { CollapsibleModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2libGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsiY29tcG9uZW50cy9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQW9CLE1BQU0sZUFBZSxDQUFDO0FBQzNELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBR2pGO0lBQUE7SUE2QkEsQ0FBQzs7Z0JBN0JBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osb0JBQW9CO3dCQUNwQixlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsY0FBYzt3QkFDZCx1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxvQkFBb0I7d0JBQ3BCLGVBQWU7d0JBQ2YsZ0JBQWdCO3dCQUNoQixjQUFjO3dCQUVkLHVCQUF1QjtxQkFDeEI7b0JBRUQsZUFBZSxFQUFFO3dCQUNmLG9CQUFvQjt3QkFDcEIsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLGNBQWM7cUJBRWY7aUJBQ0Y7O0lBRUQsd0JBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQURZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBDb2xsYXBzaWJsZUNvbXBvbmVudCB9IGZyb20gJy4vY29sbGFwc2libGUuY29tcG9uZW50JztcbmltcG9ydCB7IEhlYWRlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9oZWFkZXIuY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ29udGVudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb250ZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQYW5lbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9wYW5lbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29sbGFwc2VUb2dnbGVEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvY29sbGFwc2UtdG9nZ2xlLmRpcmVjdGl2ZSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBDb2xsYXBzaWJsZUNvbXBvbmVudCxcbiAgICBIZWFkZXJDb21wb25lbnQsXG4gICAgQ29udGVudENvbXBvbmVudCxcbiAgICBQYW5lbENvbXBvbmVudCxcbiAgICBDb2xsYXBzZVRvZ2dsZURpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQ29sbGFwc2libGVDb21wb25lbnQsXG4gICAgSGVhZGVyQ29tcG9uZW50LFxuICAgIENvbnRlbnRDb21wb25lbnQsXG4gICAgUGFuZWxDb21wb25lbnQsXG5cbiAgICBDb2xsYXBzZVRvZ2dsZURpcmVjdGl2ZVxuICBdLFxuXG4gIGVudHJ5Q29tcG9uZW50czogW1xuICAgIENvbGxhcHNpYmxlQ29tcG9uZW50LFxuICAgIEhlYWRlckNvbXBvbmVudCxcbiAgICBDb250ZW50Q29tcG9uZW50LFxuICAgIFBhbmVsQ29tcG9uZW50XG5cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBDb2xsYXBzaWJsZU1vZHVsZSB7XG59XG4iXX0=