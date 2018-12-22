/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFieldDirective } from './directives/dynamic-field.directive';
import { FieldComponent } from './components/field.component';
import { SubmitDirective } from './directives/submit.directive';
import { ControlComponent } from './components/control.component';
import { LabelComponent } from './components/label.component';
import { FeedbackComponent } from './components/feedback.component';
import { FormComponent } from './core.component';
import { FieldTemplateDirective } from './directives/field-template.directive';
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        FormComponent,
                        FieldComponent, ControlComponent, LabelComponent, FeedbackComponent, FieldTemplateDirective,
                        DynamicFieldDirective, SubmitDirective
                    ],
                    imports: [CommonModule],
                    exports: [
                        FormComponent,
                        FieldComponent,
                        SubmitDirective,
                        ControlComponent,
                        LabelComponent, FeedbackComponent, FieldTemplateDirective
                    ]
                },] }
    ];
    return CoreModule;
}());
export { CoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTdFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFHaEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUcvRTtJQUFBO0lBaUJBLENBQUM7O2dCQWpCQSxRQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLGFBQWE7d0JBQ2IsY0FBYyxFQUFFLGdCQUFnQixFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxzQkFBc0I7d0JBQzNGLHFCQUFxQixFQUFFLGVBQWU7cUJBQ3ZDO29CQUVELE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsY0FBYzt3QkFDZCxlQUFlO3dCQUNmLGdCQUFnQjt3QkFDaEIsY0FBYyxFQUFFLGlCQUFpQixFQUFFLHNCQUFzQjtxQkFDMUQ7aUJBQ0Y7O0lBRUQsaUJBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQURZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBEeW5hbWljRmllbGREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZHluYW1pYy1maWVsZC5kaXJlY3RpdmUnO1xyXG5cclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmllbGQuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IFN1Ym1pdERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9zdWJtaXQuZGlyZWN0aXZlJztcclxuXHJcblxyXG5pbXBvcnQgeyBDb250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGFiZWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvbGFiZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRmVlZGJhY2tDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZmVlZGJhY2suY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29yZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGaWVsZFRlbXBsYXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2ZpZWxkLXRlbXBsYXRlLmRpcmVjdGl2ZSc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEZvcm1Db21wb25lbnQsXHJcbiAgICBGaWVsZENvbXBvbmVudCwgQ29udHJvbENvbXBvbmVudCwgTGFiZWxDb21wb25lbnQsIEZlZWRiYWNrQ29tcG9uZW50LCBGaWVsZFRlbXBsYXRlRGlyZWN0aXZlLFxyXG4gICAgRHluYW1pY0ZpZWxkRGlyZWN0aXZlLCBTdWJtaXREaXJlY3RpdmVcclxuICBdLFxyXG5cclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBGb3JtQ29tcG9uZW50LFxyXG4gICAgRmllbGRDb21wb25lbnQsXHJcbiAgICBTdWJtaXREaXJlY3RpdmUsXHJcbiAgICBDb250cm9sQ29tcG9uZW50LFxyXG4gICAgTGFiZWxDb21wb25lbnQsIEZlZWRiYWNrQ29tcG9uZW50LCBGaWVsZFRlbXBsYXRlRGlyZWN0aXZlXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29yZU1vZHVsZSB7XHJcbn1cclxuIl19