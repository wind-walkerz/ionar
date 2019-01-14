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
var CoreModule = /** @class */ (function () {
    function CoreModule() {
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
                    imports: [CommonModule],
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
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTdFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUV0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHaEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUd2RTtJQUFBO0lBd0JBLENBQUM7O2dCQXhCQSxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGFBQWE7d0JBQ2IsY0FBYyxFQUFFLG9CQUFvQixFQUFFLGNBQWMsRUFBRSxpQkFBaUI7d0JBQ3ZFLGtCQUFrQjt3QkFDbEIsa0JBQWtCO3dCQUVsQixxQkFBcUIsRUFBRSxlQUFlO3FCQUN2QztvQkFFRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLE9BQU8sRUFBRTt3QkFDUCxhQUFhO3dCQUNiLGNBQWM7d0JBRWQsb0JBQW9CO3dCQUNwQixrQkFBa0I7d0JBQ2xCLGtCQUFrQjt3QkFDbEIsY0FBYyxFQUFFLGlCQUFpQjt3QkFFakMsZUFBZTtxQkFDaEI7aUJBQ0Y7O0lBRUQsaUJBQUM7Q0FBQSxBQXhCRCxJQXdCQztTQURZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBEeW5hbWljRmllbGREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZHluYW1pYy1maWVsZC5kaXJlY3RpdmUnO1xyXG5cclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udHJvbC9maWVsZC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgU3VibWl0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3N1Ym1pdC5kaXJlY3RpdmUnO1xyXG5cclxuXHJcbmltcG9ydCB7IEZvcm1Db250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0tY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYWJlbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb250cm9sL2xhYmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZlZWRiYWNrQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRyb2wvZmVlZGJhY2suY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29yZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3JtQXJyYXlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS1hcnJheS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS1ncm91cC5jb21wb25lbnQnO1xyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBGb3JtQ29tcG9uZW50LFxyXG4gICAgRmllbGRDb21wb25lbnQsIEZvcm1Db250cm9sQ29tcG9uZW50LCBMYWJlbENvbXBvbmVudCwgRmVlZGJhY2tDb21wb25lbnQsXHJcbiAgICBGb3JtQXJyYXlDb21wb25lbnQsXHJcbiAgICBGb3JtR3JvdXBDb21wb25lbnQsXHJcblxyXG4gICAgRHluYW1pY0ZpZWxkRGlyZWN0aXZlLCBTdWJtaXREaXJlY3RpdmVcclxuICBdLFxyXG5cclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBGb3JtQ29tcG9uZW50LFxyXG4gICAgRmllbGRDb21wb25lbnQsXHJcblxyXG4gICAgRm9ybUNvbnRyb2xDb21wb25lbnQsXHJcbiAgICBGb3JtQXJyYXlDb21wb25lbnQsXHJcbiAgICBGb3JtR3JvdXBDb21wb25lbnQsXHJcbiAgICBMYWJlbENvbXBvbmVudCwgRmVlZGJhY2tDb21wb25lbnQsXHJcblxyXG4gICAgU3VibWl0RGlyZWN0aXZlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XHJcbn1cclxuIl19