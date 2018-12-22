(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@ionar/utility', ['exports', 'rxjs', 'rxjs/operators'], factory) :
    (factory((global.ionar = global.ionar || {}, global.ionar.utility = {}),global.rxjs,global.rxjs.operators));
}(this, (function (exports,rxjs,operators) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} value
     * @return {?}
     */
    function isFunction(value) {
        return typeof value === 'function';
    }
    /** @type {?} */
    var untilDestroyed = function (componentInstance, destroyMethodName) {
        if (destroyMethodName === void 0) {
            destroyMethodName = 'ngOnDestroy';
        }
        return function (source) {
            /** @type {?} */
            var originalDestroy = componentInstance[destroyMethodName];
            if (isFunction(originalDestroy) === false) {
                throw new Error(componentInstance.constructor.name + " is using untilDestroyed but doesn't implement " + destroyMethodName);
            }
            if (!componentInstance['__takeUntilDestroy']) {
                componentInstance['__takeUntilDestroy'] =
                    componentInstance['__takeUntilDestroy'] || new rxjs.Subject();
                componentInstance[destroyMethodName] = function () {
                    isFunction(originalDestroy) && originalDestroy.apply(this, arguments);
                    componentInstance['__takeUntilDestroy'].next(true);
                    componentInstance['__takeUntilDestroy'].complete();
                };
            }
            return source.pipe(operators.takeUntil(componentInstance['__takeUntilDestroy']));
        };
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.untilDestroyed = untilDestroyed;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ionar-utility.umd.js.map