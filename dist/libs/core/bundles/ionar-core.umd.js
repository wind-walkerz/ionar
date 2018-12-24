(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ionar/ui'), require('@ionar/form')) :
    typeof define === 'function' && define.amd ? define('@ionar/core', ['exports', '@angular/core', '@ionar/ui', '@ionar/form'], factory) :
    (factory((global.ionar = global.ionar || {}, global.ionar.core = {}),global.ng.core,global.ui,global.form));
}(this, (function (exports,core,ui,form) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var IonarModule = /** @class */ (function () {
        function IonarModule() {
        }
        IonarModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            ui.IonarUI,
                            form.IonarFormModule
                        ],
                        exports: [
                            ui.IonarUI,
                            form.IonarFormModule
                        ]
                    },] }
        ];
        return IonarModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.IonarModule = IonarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ionar-core.umd.js.map