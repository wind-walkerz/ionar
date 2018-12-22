import { __assign } from 'tslib';
import { animate, animation, keyframes, style, transition, trigger, useAnimation, state } from '@angular/animations';

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
var bounce = animation(animate('{{ timing }}ms {{ delay }}ms', keyframes([
    style({
        animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        transform: 'translate3d(0, -30px, 0)',
        offset: 0.43
    }),
    style(__assign({}, base, { offset: 0.53 })),
    style({
        animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        transform: 'translate3d(0, -15px, 0)',
        offset: 0.7
    }),
    style(__assign({}, base, { offset: 0.8 })),
    style({
        transform: 'translate3d(0, -4px, 0)',
        offset: 0.9
    }),
    style(__assign({}, base, { offset: 1 }))
])), { params: { timing: 1000, delay: 0 } });
/** @type {?} */
var bounce_trigger = trigger('bounce', [
    transition('* => *', [
        useAnimation(bounce)
    ])
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var flash = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({ opacity: 1 }),
        style({ opacity: 0 }),
        style({ opacity: 1 }),
        style({ opacity: 0 }),
        style({ opacity: 1 })
    ]))
], { params: { timing: 1000, delay: 0 } });
/** @type {?} */
var flash_trigger = trigger('flash', [
    transition('* => *', [
        useAnimation(flash)
    ])
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var pulse = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({ transform: 'scale3d(1, 1, 1)' }),
        style({ transform: 'scale3d({{ scale }}, {{ scale }}, {{ scale }})' }),
        style({ transform: 'scale3d(1, 1, 1)' })
    ]))
], { params: { scale: 1.05, timing: 1000, delay: 0 } });
/** @type {?} */
var pulse_trigger = trigger('pulse', [
    transition('* => *', [
        useAnimation(pulse)
    ])
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var rubber_band = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({ transform: 'scale3d(1, 1, 1)', offset: 0 }),
        style({ transform: 'scale3d(1.25, 0.75, 1)', offset: 0.3 }),
        style({ transform: 'scale3d(0.75, 1.25, 1)', offset: 0.4 }),
        style({ transform: 'scale3d(1.15, 0.85, 1)', offset: 0.5 }),
        style({ transform: 'scale3d(0.95, 1.05, 1)', offset: 0.65 }),
        style({ transform: 'scale3d(1.05, 0.95, 1)', offset: 0.75 }),
        style({ transform: 'scale3d(1, 1, 1)', offset: 1 })
    ]))
], { params: { timing: 1000, delay: 0 } });
/** @type {?} */
var rubber_band_trigger = trigger('rubber_band', [
    transition('* => *', [
        useAnimation(rubber_band)
    ])
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var rotate = animation([
    animate('{{ timings }}', style({
        transform: 'rotate({{deg}}deg)'
    }))
]);
/** @type {?} */
var rotate_trigger = trigger('rotate', [
    state('default', style({})),
    state('animated', style({
        transform: 'rotate({{deg}}deg)'
    }), { params: { deg: 0 } }),
    transition('* => *', [
        animate(300)
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
var bounce_in = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({
            animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            transform: "scale3d(0.3, 0.3, 0.3)",
            offset: 0
        }),
        style({
            animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            transform: 'scale3d(1.1, 1.1, 1.1)',
            offset: 0.2
        }),
        style({
            animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            transform: 'scale3d(0.9, 0.9, 0.9)',
            offset: 0.4
        }),
        style({
            animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            transform: 'scale3d(1.03, 1.03, 1.03)',
            offset: 0.6
        }),
        style({
            animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            transform: 'scale3d(0.97, 0.97, 0.97)',
            offset: 0.8
        }),
        style({
            animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            transform: "scale3d(1, 1, 1)",
            offset: 1
        })
    ]))
], { params: { timing: 750, delay: 0 } });
/** @type {?} */
var bounce_in_trigger = trigger('bounce_in', [
    transition('* => *', [
        useAnimation(bounce_in)
    ])
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var bounce_in_down = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({
            animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            transform: "translate3d(0, -800%, 0)",
            offset: 0
        }),
        style({
            animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            transform: 'translate3d(0, 2.5rem, 0)',
            offset: 0.6
        }),
        style({
            animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            transform: 'translate3d(0, -1rem, 0)',
            offset: 0.75
        }),
        style({
            animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            transform: 'translate3d(0, .5rem, 0)',
            offset: 0.9
        }),
        style({
            animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
            transform: "translate3d(0, 0, 0)",
            offset: 1
        })
    ]))
], { params: { timing: 1000, delay: 0 } });
/** @type {?} */
var bounce_in_down_trigger = trigger('bounce_in_down', [
    transition('* => *', [
        useAnimation(bounce_in_down)
    ])
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var bounce_out_up = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({
            transform: 'translate3d(0, -1rem, 0)',
            offset: 0.2
        }),
        style({
            transform: 'translate3d(0, 2rem, 0)',
            offset: 0.4
        }),
        style({
            transform: 'translate3d(0, 2rem, 0)',
            offset: 0.45
        }),
        style({
            transform: "translate3d(0, -200%, 0)",
            offset: 1
        })
    ]))
], { params: { timing: 1000, delay: 0 } });
/** @type {?} */
var bounce_out_up_trigger = trigger('bounce_out_up', [
    transition('* => *', [
        useAnimation(bounce_out_up)
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
var fade_in = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({ opacity: 0 }),
        style({ opacity: 1 })
    ]))
], { params: { timing: 1000, delay: 0 } });
/** @type {?} */
var fade_in_trigger = trigger('fade_in', [
    transition('* => *', [
        useAnimation(fade_in)
    ])
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var fade_in_down = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({
            opacity: 0,
            transform: " translate3d(0, -100%, 0)"
        }),
        style({
            opacity: 1,
            transform: "none"
        })
    ]))
], { params: { timing: 750, delay: 0 } });
/** @type {?} */
var fade_in_down_trigger = trigger('fade_in_down', [
    transition('* => *', [
        useAnimation(fade_in_down)
    ])
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var fade_out_up = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({
            opacity: 1
        }),
        style({
            opacity: 0,
            transform: "translate3d(0, -100%, 0)"
        })
    ]))
], { params: { timing: 750, delay: 0 } });
/** @type {?} */
var fade_out_up_trigger = trigger('fade_out_up', [
    transition('* => *', [
        useAnimation(fade_out_up)
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
var slideInLeftAnimation = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({
            transform: "translate3d(-100%, 0, 0)",
            visibility: 'visible'
        }),
        style({
            transform: "translate3d(0, 0, 0)"
        })
    ]))
], { params: { timing: 1000, delay: 0 } });
/** @type {?} */
var slideInLeft = trigger('slideInLeft', [
    transition('* => *', [
        useAnimation(slideInLeftAnimation)
    ])
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var slide_in_right = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({
            transform: "translate3d(100%, 0, 0)",
            visibility: 'visible'
        }),
        style({
            transform: "translate3d(0, 0, 0)"
        })
    ]))
], { params: { timing: 1000, delay: 0 } });
/** @type {?} */
var slide_in_right_trigger = trigger('slide_in_right', [
    transition('* => *', [
        useAnimation(slide_in_right)
    ])
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var slide_out_left = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({
            transform: "translate3d(0, 0, 0)"
        }),
        style({
            transform: "translate3d(-100%, 0, 0)",
            visibility: 'hidden'
        })
    ]))
], { params: { timing: 1000, delay: 0 } });
/** @type {?} */
var slide_out_left_trigger = trigger('slide_out_left', [
    transition('* => *', [
        useAnimation(slide_out_left)
    ])
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var slide_out_right = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({
            transform: "translate3d(0, 0, 0)"
        }),
        style({
            transform: "translate3d(100%, 0, 0)",
            visibility: 'hidden'
        })
    ]))
], { params: { timing: 1000, delay: 0 } });
/** @type {?} */
var slide_out_right_trigger = trigger('slide_out_right', [
    transition('* => *', [
        useAnimation(slide_out_right)
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

export { bounce, bounce_trigger, flash, flash_trigger, pulse, pulse_trigger, rubber_band, rubber_band_trigger, rotate, rotate_trigger, bounce_in, bounce_in_trigger, bounce_in_down, bounce_in_down_trigger, bounce_out_up, bounce_out_up_trigger, fade_in, fade_in_trigger, fade_in_down, fade_in_down_trigger, fade_out_up, fade_out_up_trigger, slideInLeftAnimation, slideInLeft, slide_in_right, slide_in_right_trigger, slide_out_left, slide_out_left_trigger, slide_out_right, slide_out_right_trigger };

//# sourceMappingURL=ionar-animations.js.map