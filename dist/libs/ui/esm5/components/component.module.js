"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_module_1 = require("./modal/modal.module");
var collapsible_module_1 = require("./collapsible/collapsible.module");
var tabs_module_1 = require("./tabs/tabs.module");
var dropdown_module_1 = require("./dropdown/dropdown.module");
var loading_module_1 = require("./loading/loading.module");
var pagination_module_1 = require("./pagination/pagination.module");
var toast_module_1 = require("./toast/toast.module");
var ComponentModule = /** @class */ (function () {
    function ComponentModule() {
    }
    ComponentModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        modal_module_1.ModalModule, collapsible_module_1.CollapsibleModule, tabs_module_1.TabsModule, dropdown_module_1.DropdownModule, loading_module_1.LoadingModule, pagination_module_1.PaginationModule, toast_module_1.ToastModule
                    ],
                    exports: [
                        modal_module_1.ModalModule, collapsible_module_1.CollapsibleModule, tabs_module_1.TabsModule, dropdown_module_1.DropdownModule, loading_module_1.LoadingModule, pagination_module_1.PaginationModule, toast_module_1.ToastModule
                    ]
                },] }
    ];
    return ComponentModule;
}());
exports.ComponentModule = ComponentModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29tcG9uZW50Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMscURBQW1EO0FBQ25ELHVFQUFxRTtBQUNyRSxrREFBZ0Q7QUFDaEQsOERBQTREO0FBQzVELDJEQUF5RDtBQUN6RCxvRUFBa0U7QUFDbEUscURBQW1EO0FBR25EO0lBQUE7SUFTQSxDQUFDOztnQkFUQSxlQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLDBCQUFXLEVBQUUsc0NBQWlCLEVBQUUsd0JBQVUsRUFBRSxnQ0FBYyxFQUFFLDhCQUFhLEVBQUUsb0NBQWdCLEVBQUUsMEJBQVc7cUJBQ3pHO29CQUNELE9BQU8sRUFBRTt3QkFDUCwwQkFBVyxFQUFFLHNDQUFpQixFQUFFLHdCQUFVLEVBQUUsZ0NBQWMsRUFBRSw4QkFBYSxFQUFFLG9DQUFnQixFQUFFLDBCQUFXO3FCQUN6RztpQkFDRjs7SUFFRCxzQkFBQztDQUFBLEFBVEQsSUFTQztBQURZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTW9kYWxNb2R1bGUgfSBmcm9tICcuL21vZGFsL21vZGFsLm1vZHVsZSc7XHJcbmltcG9ydCB7IENvbGxhcHNpYmxlTW9kdWxlIH0gZnJvbSAnLi9jb2xsYXBzaWJsZS9jb2xsYXBzaWJsZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBUYWJzTW9kdWxlIH0gZnJvbSAnLi90YWJzL3RhYnMubW9kdWxlJztcclxuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGUgfSBmcm9tICcuL2Ryb3Bkb3duL2Ryb3Bkb3duLm1vZHVsZSc7XHJcbmltcG9ydCB7IExvYWRpbmdNb2R1bGUgfSBmcm9tICcuL2xvYWRpbmcvbG9hZGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnLi9wYWdpbmF0aW9uL3BhZ2luYXRpb24ubW9kdWxlJztcclxuaW1wb3J0IHsgVG9hc3RNb2R1bGUgfSBmcm9tICcuL3RvYXN0L3RvYXN0Lm1vZHVsZSc7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbXHJcbiAgICBNb2RhbE1vZHVsZSwgQ29sbGFwc2libGVNb2R1bGUsIFRhYnNNb2R1bGUsIERyb3Bkb3duTW9kdWxlLCBMb2FkaW5nTW9kdWxlLCBQYWdpbmF0aW9uTW9kdWxlLCBUb2FzdE1vZHVsZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgTW9kYWxNb2R1bGUsIENvbGxhcHNpYmxlTW9kdWxlLCBUYWJzTW9kdWxlLCBEcm9wZG93bk1vZHVsZSwgTG9hZGluZ01vZHVsZSwgUGFnaW5hdGlvbk1vZHVsZSwgVG9hc3RNb2R1bGVcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnRNb2R1bGUge1xyXG59XHJcbiJdfQ==