/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { FieldComponent } from './components/control/field.component';
import { SubmitDirective } from './directives/submit.directive';
import { FormControlComponent } from './components/form-control.component';
import { LabelComponent } from './components/control/label.component';
import { FeedbackComponent } from './components/control/feedback.component';
import { FormComponent } from './core.component';
import { FormArrayComponent } from './components/form-array.component';
import { FormGroupComponent } from './components/form-group.component';
import { IonarUI } from '@ionar/ui';
export class CoreModule {
}
CoreModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    FormComponent,
                    FieldComponent, FormControlComponent, LabelComponent, FeedbackComponent,
                    FormArrayComponent,
                    FormGroupComponent,
                    DynamicFieldDirective, SubmitDirective
                ],
                imports: [CommonModule, IonarUI],
                exports: [
                    FormComponent,
                    FieldComponent,
                    FormControlComponent,
                    FormArrayComponent,
                    FormGroupComponent,
                    LabelComponent, FeedbackComponent,
                    SubmitDirective
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTdFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUV0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBMEJwQyxNQUFNLE9BQU8sVUFBVTs7O1lBdkJ0QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGFBQWE7b0JBQ2IsY0FBYyxFQUFFLG9CQUFvQixFQUFFLGNBQWMsRUFBRSxpQkFBaUI7b0JBQ3ZFLGtCQUFrQjtvQkFDbEIsa0JBQWtCO29CQUVsQixxQkFBcUIsRUFBRSxlQUFlO2lCQUN2QztnQkFFRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxDQUFDO2dCQUNoQyxPQUFPLEVBQUU7b0JBQ1AsYUFBYTtvQkFDYixjQUFjO29CQUVkLG9CQUFvQjtvQkFDcEIsa0JBQWtCO29CQUNsQixrQkFBa0I7b0JBQ2xCLGNBQWMsRUFBRSxpQkFBaUI7b0JBRWpDLGVBQWU7aUJBQ2hCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBEeW5hbWljRmllbGREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZHluYW1pYy1maWVsZC5kaXJlY3RpdmUnO1xyXG5cclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udHJvbC9maWVsZC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgU3VibWl0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3N1Ym1pdC5kaXJlY3RpdmUnO1xyXG5cclxuXHJcbmltcG9ydCB7IEZvcm1Db250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0tY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYWJlbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb250cm9sL2xhYmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZlZWRiYWNrQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRyb2wvZmVlZGJhY2suY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29yZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3JtQXJyYXlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS1hcnJheS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJb25hclVJIH0gZnJvbSAnQGlvbmFyL3VpJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRm9ybUNvbXBvbmVudCxcclxuICAgIEZpZWxkQ29tcG9uZW50LCBGb3JtQ29udHJvbENvbXBvbmVudCwgTGFiZWxDb21wb25lbnQsIEZlZWRiYWNrQ29tcG9uZW50LFxyXG4gICAgRm9ybUFycmF5Q29tcG9uZW50LFxyXG4gICAgRm9ybUdyb3VwQ29tcG9uZW50LFxyXG5cclxuICAgIER5bmFtaWNGaWVsZERpcmVjdGl2ZSwgU3VibWl0RGlyZWN0aXZlXHJcbiAgXSxcclxuXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSW9uYXJVSV0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRm9ybUNvbXBvbmVudCxcclxuICAgIEZpZWxkQ29tcG9uZW50LFxyXG5cclxuICAgIEZvcm1Db250cm9sQ29tcG9uZW50LFxyXG4gICAgRm9ybUFycmF5Q29tcG9uZW50LFxyXG4gICAgRm9ybUdyb3VwQ29tcG9uZW50LFxyXG4gICAgTGFiZWxDb21wb25lbnQsIEZlZWRiYWNrQ29tcG9uZW50LFxyXG5cclxuICAgIFN1Ym1pdERpcmVjdGl2ZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xyXG59XHJcbiJdfQ==