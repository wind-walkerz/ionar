"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var loading_component_1 = require("./loading.component");
var spinner_component_1 = require("./spinner/spinner.component");
var circle_component_1 = require("./spinner/circle.component");
var LoadingModule = /** @class */ (function () {
    function LoadingModule() {
    }
    LoadingModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule
                    ],
                    declarations: [
                        loading_component_1.LoadingComponent,
                        spinner_component_1.SpinnerComponent,
                        circle_component_1.CircleComponent
                    ],
                    exports: [loading_component_1.LoadingComponent]
                },] }
    ];
    return LoadingModule;
}());
exports.LoadingModule = LoadingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2xvYWRpbmcvbG9hZGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0NBQXlDO0FBQ3pDLDBDQUErQztBQUUvQyx5REFBdUQ7QUFDdkQsaUVBQStEO0FBQy9ELCtEQUE2RDtBQUk3RDtJQUFBO0lBYUEsQ0FBQzs7Z0JBYkEsZUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFFUCxxQkFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osb0NBQWdCO3dCQUNoQixvQ0FBZ0I7d0JBQ2hCLGtDQUFlO3FCQUNoQjtvQkFDRCxPQUFPLEVBQUUsQ0FBQyxvQ0FBZ0IsQ0FBQztpQkFDNUI7O0lBRUQsb0JBQUM7Q0FBQSxBQWJELElBYUM7QUFEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBMb2FkaW5nQ29tcG9uZW50IH0gZnJvbSAnLi9sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTcGlubmVyQ29tcG9uZW50IH0gZnJvbSAnLi9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50JztcbmltcG9ydCB7IENpcmNsZUNvbXBvbmVudCB9IGZyb20gJy4vc3Bpbm5lci9jaXJjbGUuY29tcG9uZW50JztcbmltcG9ydCB7IElvbmFyTG9hZGluZ1NlcnZpY2UgfSBmcm9tICcuL2xvYWRpbmcuc2VydmljZSc7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIExvYWRpbmdDb21wb25lbnQsXG4gICAgU3Bpbm5lckNvbXBvbmVudCxcbiAgICBDaXJjbGVDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW0xvYWRpbmdDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIExvYWRpbmdNb2R1bGUge1xufVxuIl19