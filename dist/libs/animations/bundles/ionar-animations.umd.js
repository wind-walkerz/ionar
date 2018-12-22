(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/animations')) :
    typeof define === 'function' && define.amd ? define('@ionar/animations', ['exports', '@angular/animations'], factory) :
    (factory((global.ionar = global.ionar || {}, global.ionar.animations = {}),global.ng.animations));
}(this, (function (exports,animations) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var base = {
        transform: 'translate3d(0, 0, 0)',
        animationTimingFunction: "cubicBezier(0.2125,0.610,0.355,1.000)"
    };
    /** @type {?} */
    var bounce = animations.animation(animations.animate('{{ timing }}ms {{ delay }}ms', animations.keyframes([
        animations.style({
            animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
            transform: 'translate3d(0, -30px, 0)',
            offset: 0.43
        }),
        animations.style(__assign({}, base, { offset: 0.53 })),
        animations.style({
            animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
            transform: 'translate3d(0, -15px, 0)',
            offset: 0.7
        }),
        animations.style(__assign({}, base, { offset: 0.8 })),
        animations.style({
            transform: 'translate3d(0, -4px, 0)',
            offset: 0.9
        }),
        animations.style(__assign({}, base, { offset: 1 }))
    ])), { params: { timing: 1000, delay: 0 } });
    /** @type {?} */
    var bounce_trigger = animations.trigger('bounce', [
        animations.transition('* => *', [
            animations.useAnimation(bounce)
        ])
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var flash = animations.animation([
        animations.animate('{{ timing }}ms {{ delay }}ms', animations.keyframes([
            animations.style({ opacity: 1 }),
            animations.style({ opacity: 0 }),
            animations.style({ opacity: 1 }),
            animations.style({ opacity: 0 }),
            animations.style({ opacity: 1 })
        ]))
    ], { params: { timing: 1000, delay: 0 } });
    /** @type {?} */
    var flash_trigger = animations.trigger('flash', [
        animations.transition('* => *', [
            animations.useAnimation(flash)
        ])
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var pulse = animations.animation([
        animations.animate('{{ timing }}ms {{ delay }}ms', animations.keyframes([
            animations.style({ transform: 'scale3d(1, 1, 1)' }),
            animations.style({ transform: 'scale3d({{ scale }}, {{ scale }}, {{ scale }})' }),
            animations.style({ transform: 'scale3d(1, 1, 1)' })
        ]))
    ], { params: { scale: 1.05, timing: 1000, delay: 0 } });
    /** @type {?} */
    var pulse_trigger = animations.trigger('pulse', [
        animations.transition('* => *', [
            animations.useAnimation(pulse)
        ])
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var rubber_band = animations.animation([
        animations.animate('{{ timing }}ms {{ delay }}ms', animations.keyframes([
            animations.style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
            animations.style({ transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3 }),
            animations.style({ transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4 }),
            animations.style({ transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5 }),
            animations.style({ transform: 'scale3d(0.95, 1.05, 1)', offset: 0.65 }),
            animations.style({ transform: 'scale3d(1.05, 0.95, 1)', offset: 0.75 }),
            animations.style({ transform: 'scale3d(1, 1, 1)', offset: 1 })
        ]))
    ], { params: { timing: 1000, delay: 0 } });
    /** @type {?} */
    var rubber_band_trigger = animations.trigger('rubber_band', [
        animations.transition('* => *', [
            animations.useAnimation(rubber_band)
        ])
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var rotate = animations.animation([
        animations.animate('{{ timings }}', animations.style({
            transform: 'rotate({{deg}}deg)'
        }))
    ]);
    /** @type {?} */
    var rotate_trigger = animations.trigger('rotate', [
        animations.state('default', animations.style({})),
        animations.state('animated', animations.style({
            transform: 'rotate({{deg}}deg)'
        }), { params: { deg: 0 } }),
        animations.transition('* => *', [
            animations.animate(300)
        ])
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var bounce_in = animations.animation([
        animations.animate('{{ timing }}ms {{ delay }}ms', animations.keyframes([
            animations.style({
                animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                transform: "scale3d(0.3, 0.3, 0.3)",
                offset: 0
            }),
            animations.style({
                animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                transform: 'scale3d(1.1, 1.1, 1.1)',
                offset: 0.2
            }),
            animations.style({
                animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                transform: 'scale3d(0.9, 0.9, 0.9)',
                offset: 0.4
            }),
            animations.style({
                animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                transform: 'scale3d(1.03, 1.03, 1.03)',
                offset: 0.6
            }),
            animations.style({
                animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                transform: 'scale3d(0.97, 0.97, 0.97)',
                offset: 0.8
            }),
            animations.style({
                animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                transform: "scale3d(1, 1, 1)",
                offset: 1
            })
        ]))
    ], { params: { timing: 750, delay: 0 } });
    /** @type {?} */
    var bounce_in_trigger = animations.trigger('bounce_in', [
        animations.transition('* => *', [
            animations.useAnimation(bounce_in)
        ])
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var bounce_in_down = animations.animation([
        animations.animate('{{ timing }}ms {{ delay }}ms', animations.keyframes([
            animations.style({
                animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                transform: "translate3d(0, -800%, 0)",
                offset: 0
            }),
            animations.style({
                animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                transform: 'translate3d(0, 2.5rem, 0)',
                offset: 0.6
            }),
            animations.style({
                animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                transform: 'translate3d(0, -1rem, 0)',
                offset: 0.75
            }),
            animations.style({
                animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                transform: 'translate3d(0, .5rem, 0)',
                offset: 0.9
            }),
            animations.style({
                animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
                transform: "translate3d(0, 0, 0)",
                offset: 1
            })
        ]))
    ], { params: { timing: 1000, delay: 0 } });
    /** @type {?} */
    var bounce_in_down_trigger = animations.trigger('bounce_in_down', [
        animations.transition('* => *', [
            animations.useAnimation(bounce_in_down)
        ])
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var bounce_out_up = animations.animation([
        animations.animate('{{ timing }}ms {{ delay }}ms', animations.keyframes([
            animations.style({
                transform: 'translate3d(0, -1rem, 0)',
                offset: 0.2
            }),
            animations.style({
                transform: 'translate3d(0, 2rem, 0)',
                offset: 0.4
            }),
            animations.style({
                transform: 'translate3d(0, 2rem, 0)',
                offset: 0.45
            }),
            animations.style({
                transform: "translate3d(0, -200%, 0)",
                offset: 1
            })
        ]))
    ], { params: { timing: 1000, delay: 0 } });
    /** @type {?} */
    var bounce_out_up_trigger = animations.trigger('bounce_out_up', [
        animations.transition('* => *', [
            animations.useAnimation(bounce_out_up)
        ])
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var fade_in = animations.animation([
        animations.animate('{{ timing }}ms {{ delay }}ms', animations.keyframes([
            animations.style({ opacity: 0 }),
            animations.style({ opacity: 1 })
        ]))
    ], { params: { timing: 1000, delay: 0 } });
    /** @type {?} */
    var fade_in_trigger = animations.trigger('fade_in', [
        animations.transition('* => *', [
            animations.useAnimation(fade_in)
        ])
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var fade_in_down = animations.animation([
        animations.animate('{{ timing }}ms {{ delay }}ms', animations.keyframes([
            animations.style({
                opacity: 0,
                transform: " translate3d(0, -100%, 0)"
            }),
            animations.style({
                opacity: 1,
                transform: "none"
            })
        ]))
    ], { params: { timing: 750, delay: 0 } });
    /** @type {?} */
    var fade_in_down_trigger = animations.trigger('fade_in_down', [
        animations.transition('* => *', [
            animations.useAnimation(fade_in_down)
        ])
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var fade_out_up = animations.animation([
        animations.animate('{{ timing }}ms {{ delay }}ms', animations.keyframes([
            animations.style({
                opacity: 1
            }),
            animations.style({
                opacity: 0,
                transform: "translate3d(0, -100%, 0)"
            })
        ]))
    ], { params: { timing: 750, delay: 0 } });
    /** @type {?} */
    var fade_out_up_trigger = animations.trigger('fade_out_up', [
        animations.transition('* => *', [
            animations.useAnimation(fade_out_up)
        ])
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var slideInLeftAnimation = animations.animation([
        animations.animate('{{ timing }}ms {{ delay }}ms', animations.keyframes([
            animations.style({
                transform: "translate3d(-100%, 0, 0)",
                visibility: 'visible'
            }),
            animations.style({
                transform: "translate3d(0, 0, 0)"
            })
        ]))
    ], { params: { timing: 1000, delay: 0 } });
    /** @type {?} */
    var slideInLeft = animations.trigger('slideInLeft', [
        animations.transition('* => *', [
            animations.useAnimation(slideInLeftAnimation)
        ])
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var slide_in_right = animations.animation([
        animations.animate('{{ timing }}ms {{ delay }}ms', animations.keyframes([
            animations.style({
                transform: "translate3d(100%, 0, 0)",
                visibility: 'visible'
            }),
            animations.style({
                transform: "translate3d(0, 0, 0)"
            })
        ]))
    ], { params: { timing: 1000, delay: 0 } });
    /** @type {?} */
    var slide_in_right_trigger = animations.trigger('slide_in_right', [
        animations.transition('* => *', [
            animations.useAnimation(slide_in_right)
        ])
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var slide_out_left = animations.animation([
        animations.animate('{{ timing }}ms {{ delay }}ms', animations.keyframes([
            animations.style({
                transform: "translate3d(0, 0, 0)"
            }),
            animations.style({
                transform: "translate3d(-100%, 0, 0)",
                visibility: 'hidden'
            })
        ]))
    ], { params: { timing: 1000, delay: 0 } });
    /** @type {?} */
    var slide_out_left_trigger = animations.trigger('slide_out_left', [
        animations.transition('* => *', [
            animations.useAnimation(slide_out_left)
        ])
    ]);

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var slide_out_right = animations.animation([
        animations.animate('{{ timing }}ms {{ delay }}ms', animations.keyframes([
            animations.style({
                transform: "translate3d(0, 0, 0)"
            }),
            animations.style({
                transform: "translate3d(100%, 0, 0)",
                visibility: 'hidden'
            })
        ]))
    ], { params: { timing: 1000, delay: 0 } });
    /** @type {?} */
    var slide_out_right_trigger = animations.trigger('slide_out_right', [
        animations.transition('* => *', [
            animations.useAnimation(slide_out_right)
        ])
    ]);

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

    exports.bounce = bounce;
    exports.bounce_trigger = bounce_trigger;
    exports.flash = flash;
    exports.flash_trigger = flash_trigger;
    exports.pulse = pulse;
    exports.pulse_trigger = pulse_trigger;
    exports.rubber_band = rubber_band;
    exports.rubber_band_trigger = rubber_band_trigger;
    exports.rotate = rotate;
    exports.rotate_trigger = rotate_trigger;
    exports.bounce_in = bounce_in;
    exports.bounce_in_trigger = bounce_in_trigger;
    exports.bounce_in_down = bounce_in_down;
    exports.bounce_in_down_trigger = bounce_in_down_trigger;
    exports.bounce_out_up = bounce_out_up;
    exports.bounce_out_up_trigger = bounce_out_up_trigger;
    exports.fade_in = fade_in;
    exports.fade_in_trigger = fade_in_trigger;
    exports.fade_in_down = fade_in_down;
    exports.fade_in_down_trigger = fade_in_down_trigger;
    exports.fade_out_up = fade_out_up;
    exports.fade_out_up_trigger = fade_out_up_trigger;
    exports.slideInLeftAnimation = slideInLeftAnimation;
    exports.slideInLeft = slideInLeft;
    exports.slide_in_right = slide_in_right;
    exports.slide_in_right_trigger = slide_in_right_trigger;
    exports.slide_out_left = slide_out_left;
    exports.slide_out_left_trigger = slide_out_left_trigger;
    exports.slide_out_right = slide_out_right;
    exports.slide_out_right_trigger = slide_out_right_trigger;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ionar-animations.umd.js.map