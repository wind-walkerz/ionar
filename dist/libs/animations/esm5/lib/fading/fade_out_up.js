/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';
/** @type {?} */
export var fade_out_up = animation([
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
export var fade_out_up_trigger = trigger('fade_out_up', [
    transition('* => *', [
        useAnimation(fade_out_up)
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFkZV9vdXRfdXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvYW5pbWF0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9mYWRpbmcvZmFkZV9vdXRfdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsU0FBUyxFQUdULFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sRUFDUCxZQUFZLEVBQ2IsTUFBTSxxQkFBcUIsQ0FBQzs7QUFHN0IsTUFBTSxLQUFPLFdBQVcsR0FBK0IsU0FBUyxDQUM5RDtJQUNFLE9BQU8sQ0FDTCw4QkFBOEIsRUFDOUIsU0FBUyxDQUFDO1FBQ1IsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUM7U0FDWCxDQUFDO1FBQ0YsS0FBSyxDQUFDO1lBQ0osT0FBTyxFQUFFLENBQUM7WUFDVixTQUFTLEVBQUUsMEJBQTBCO1NBQ3RDLENBQUM7S0FDSCxDQUFDLENBQ0g7Q0FDRixFQUVELEVBQUUsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FDdEM7O0FBRUQsTUFBTSxLQUFPLG1CQUFtQixHQUE2QixPQUFPLENBQUMsYUFBYSxFQUFFO0lBQ2xGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7UUFDbkIsWUFBWSxDQUFDLFdBQVcsQ0FBQztLQUMxQixDQUFDO0NBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgYW5pbWF0ZSxcclxuICBhbmltYXRpb24sXHJcbiAgQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEsXHJcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxyXG4gIGtleWZyYW1lcyxcclxuICBzdHlsZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIHRyaWdnZXIsXHJcbiAgdXNlQW5pbWF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGZhZGVfb3V0X3VwOiBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YSA9IGFuaW1hdGlvbihcclxuICBbXHJcbiAgICBhbmltYXRlKFxyXG4gICAgICAne3sgdGltaW5nIH19bXMge3sgZGVsYXkgfX1tcycsXHJcbiAgICAgIGtleWZyYW1lcyhbXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMClgXHJcbiAgICAgICAgfSlcclxuICAgICAgXSlcclxuICAgIClcclxuICBdXHJcbiAgLFxyXG4gIHsgcGFyYW1zOiB7IHRpbWluZzogNzUwLCBkZWxheTogMCB9IH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBmYWRlX291dF91cF90cmlnZ2VyOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCdmYWRlX291dF91cCcsIFtcclxuICB0cmFuc2l0aW9uKCcqID0+IConLCBbXHJcbiAgICB1c2VBbmltYXRpb24oZmFkZV9vdXRfdXApXHJcbiAgXSlcclxuXSk7XHJcblxyXG4iXX0=