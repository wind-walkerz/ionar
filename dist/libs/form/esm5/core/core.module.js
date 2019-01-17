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
var ui_1 = require("@ionar/ui");
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
                    imports: [common_1.CommonModule, ui_1.IonarUI],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvY29yZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUMvQyxnRkFBNkU7QUFFN0Usd0VBQXNFO0FBRXRFLGtFQUFnRTtBQUdoRSw4RUFBMkU7QUFDM0Usd0VBQXNFO0FBQ3RFLDhFQUE0RTtBQUM1RSxtREFBaUQ7QUFDakQsMEVBQXVFO0FBQ3ZFLDBFQUF1RTtBQUN2RSxnQ0FBb0M7QUFHcEM7SUFBQTtJQXdCQSxDQUFDOztnQkF4QkEsZUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRTt3QkFDWiw4QkFBYTt3QkFDYixnQ0FBYyxFQUFFLDZDQUFvQixFQUFFLGdDQUFjLEVBQUUsc0NBQWlCO3dCQUN2RSx5Q0FBa0I7d0JBQ2xCLHlDQUFrQjt3QkFFbEIsK0NBQXFCLEVBQUUsa0NBQWU7cUJBQ3ZDO29CQUVELE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUsWUFBTyxDQUFDO29CQUNoQyxPQUFPLEVBQUU7d0JBQ1AsOEJBQWE7d0JBQ2IsZ0NBQWM7d0JBRWQsNkNBQW9CO3dCQUNwQix5Q0FBa0I7d0JBQ2xCLHlDQUFrQjt3QkFDbEIsZ0NBQWMsRUFBRSxzQ0FBaUI7d0JBRWpDLGtDQUFlO3FCQUNoQjtpQkFDRjs7SUFFRCxpQkFBQztDQUFBLEFBeEJELElBd0JDO0FBRFksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBEeW5hbWljRmllbGREaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvZHluYW1pYy1maWVsZC5kaXJlY3RpdmUnO1xyXG5cclxuaW1wb3J0IHsgRmllbGRDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvY29udHJvbC9maWVsZC5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgU3VibWl0RGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmVzL3N1Ym1pdC5kaXJlY3RpdmUnO1xyXG5cclxuXHJcbmltcG9ydCB7IEZvcm1Db250cm9sQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0tY29udHJvbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMYWJlbENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jb250cm9sL2xhYmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEZlZWRiYWNrQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NvbnRyb2wvZmVlZGJhY2suY29tcG9uZW50JztcclxuaW1wb3J0IHsgRm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29yZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3JtQXJyYXlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS1hcnJheS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBGb3JtR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJb25hclVJIH0gZnJvbSAnQGlvbmFyL3VpJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgRm9ybUNvbXBvbmVudCxcclxuICAgIEZpZWxkQ29tcG9uZW50LCBGb3JtQ29udHJvbENvbXBvbmVudCwgTGFiZWxDb21wb25lbnQsIEZlZWRiYWNrQ29tcG9uZW50LFxyXG4gICAgRm9ybUFycmF5Q29tcG9uZW50LFxyXG4gICAgRm9ybUdyb3VwQ29tcG9uZW50LFxyXG5cclxuICAgIER5bmFtaWNGaWVsZERpcmVjdGl2ZSwgU3VibWl0RGlyZWN0aXZlXHJcbiAgXSxcclxuXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSW9uYXJVSV0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgRm9ybUNvbXBvbmVudCxcclxuICAgIEZpZWxkQ29tcG9uZW50LFxyXG5cclxuICAgIEZvcm1Db250cm9sQ29tcG9uZW50LFxyXG4gICAgRm9ybUFycmF5Q29tcG9uZW50LFxyXG4gICAgRm9ybUdyb3VwQ29tcG9uZW50LFxyXG4gICAgTGFiZWxDb21wb25lbnQsIEZlZWRiYWNrQ29tcG9uZW50LFxyXG5cclxuICAgIFN1Ym1pdERpcmVjdGl2ZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvcmVNb2R1bGUge1xyXG59XHJcbiJdfQ==