"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var dynamic_field_directive_1 = require("./directives/dynamic-field.directive");
var field_component_1 = require("./components/control/field.component");
var submit_directive_1 = require("./directives/submit.directive");
var form_control_component_1 = require("./components/form-control.component");
var label_component_1 = require("./components/control/label.component");
var feedback_component_1 = require("./components/control/feedback.component");
var core_component_1 = require("./core.component");
var form_array_component_1 = require("./components/form-array.component");
var form_group_component_1 = require("./components/form-group.component");
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        core_component_1.FormComponent,
                        field_component_1.FieldComponent, form_control_component_1.FormControlComponent, label_component_1.LabelComponent, feedback_component_1.FeedbackComponent,
                        form_array_component_1.FormArrayComponent,
                        form_group_component_1.FormGroupComponent,
                        dynamic_field_directive_1.DynamicFieldDirective, submit_directive_1.SubmitDirective
                    ],
                    imports: [common_1.CommonModule],
                    exports: [
                        core_component_1.FormComponent,
                        field_component_1.FieldComponent,
                        form_control_component_1.FormControlComponent,
                        form_array_component_1.FormArrayComponent,
                        form_group_component_1.FormGroupComponent,
                        label_component_1.LabelComponent, feedback_component_1.FeedbackComponent,
                        submit_directive_1.SubmitDirective
                    ]
                },] }
    ];
    return CoreModule;
}());
exports.CoreModule = CoreModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUMvQyxnRkFBNkU7QUFFN0Usd0VBQXNFO0FBRXRFLGtFQUFnRTtBQUdoRSw4RUFBMkU7QUFDM0Usd0VBQXNFO0FBQ3RFLDhFQUE0RTtBQUM1RSxtREFBaUQ7QUFDakQsMEVBQXVFO0FBQ3ZFLDBFQUF1RTtBQUd2RTtJQUFBO0lBd0JBLENBQUM7O2dCQXhCQSxlQUFRLFNBQUM7b0JBQ1IsWUFBWSxFQUFFO3dCQUNaLDhCQUFhO3dCQUNiLGdDQUFjLEVBQUUsNkNBQW9CLEVBQUUsZ0NBQWMsRUFBRSxzQ0FBaUI7d0JBQ3ZFLHlDQUFrQjt3QkFDbEIseUNBQWtCO3dCQUVsQiwrQ0FBcUIsRUFBRSxrQ0FBZTtxQkFDdkM7b0JBRUQsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztvQkFDdkIsT0FBTyxFQUFFO3dCQUNQLDhCQUFhO3dCQUNiLGdDQUFjO3dCQUVkLDZDQUFvQjt3QkFDcEIseUNBQWtCO3dCQUNsQix5Q0FBa0I7d0JBQ2xCLGdDQUFjLEVBQUUsc0NBQWlCO3dCQUVqQyxrQ0FBZTtxQkFDaEI7aUJBQ0Y7O0lBRUQsaUJBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQURZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRHluYW1pY0ZpZWxkRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL2R5bmFtaWMtZmllbGQuZGlyZWN0aXZlJztcclxuXHJcbmltcG9ydCB7IEZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRyb2wvZmllbGQuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IFN1Ym1pdERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9zdWJtaXQuZGlyZWN0aXZlJztcclxuXHJcblxyXG5pbXBvcnQgeyBGb3JtQ29udHJvbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtLWNvbnRyb2wuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTGFiZWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udHJvbC9sYWJlbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGZWVkYmFja0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb250cm9sL2ZlZWRiYWNrLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZvcm1Db21wb25lbnQgfSBmcm9tICcuL2NvcmUuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybUFycmF5Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0tYXJyYXkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybUdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0tZ3JvdXAuY29tcG9uZW50JztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRm9ybUNvbXBvbmVudCxcclxuICAgIEZpZWxkQ29tcG9uZW50LCBGb3JtQ29udHJvbENvbXBvbmVudCwgTGFiZWxDb21wb25lbnQsIEZlZWRiYWNrQ29tcG9uZW50LFxyXG4gICAgRm9ybUFycmF5Q29tcG9uZW50LFxyXG4gICAgRm9ybUdyb3VwQ29tcG9uZW50LFxyXG5cclxuICAgIER5bmFtaWNGaWVsZERpcmVjdGl2ZSwgU3VibWl0RGlyZWN0aXZlXHJcbiAgXSxcclxuXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRm9ybUNvbXBvbmVudCxcclxuICAgIEZpZWxkQ29tcG9uZW50LFxyXG5cclxuICAgIEZvcm1Db250cm9sQ29tcG9uZW50LFxyXG4gICAgRm9ybUFycmF5Q29tcG9uZW50LFxyXG4gICAgRm9ybUdyb3VwQ29tcG9uZW50LFxyXG4gICAgTGFiZWxDb21wb25lbnQsIEZlZWRiYWNrQ29tcG9uZW50LFxyXG5cclxuICAgIFN1Ym1pdERpcmVjdGl2ZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xyXG59XHJcbiJdfQ==