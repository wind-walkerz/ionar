/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';
/** @type {?} */
export const slideInLeftAnimation = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({
            transform: `translate3d(-100%, 0, 0)`,
            visibility: 'visible'
        }),
        style({
            transform: `translate3d(0, 0, 0)`
        })
    ]))
], { params: { timing: 1000, delay: 0 } });
/** @type {?} */
export const slideInLeft = trigger('slideInLeft', [
    transition('* => *', [
        useAnimation(slideInLeftAnimation)
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVJbkxlZnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvYW5pbWF0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9zbGlkZV9lbnRyYW5jZXMvc2xpZGVJbkxlZnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsU0FBUyxFQUdULFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sRUFDUCxZQUFZLEVBQ2IsTUFBTSxxQkFBcUIsQ0FBQzs7QUFHN0IsTUFBTSxPQUFPLG9CQUFvQixHQUErQixTQUFTLENBQ3ZFO0lBQ0UsT0FBTyxDQUNMLDhCQUE4QixFQUM5QixTQUFTLENBQUM7UUFDUixLQUFLLENBQUM7WUFDSixTQUFTLEVBQUUsMEJBQTBCO1lBQ3JDLFVBQVUsRUFBRSxTQUFTO1NBQ3RCLENBQUM7UUFDRixLQUFLLENBQUM7WUFDSixTQUFTLEVBQUUsc0JBQXNCO1NBQ2xDLENBQUM7S0FDSCxDQUFDLENBQ0g7Q0FDRixFQUVELEVBQUUsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FDdkM7O0FBRUQsTUFBTSxPQUFPLFdBQVcsR0FBNkIsT0FBTyxDQUFDLGFBQWEsRUFBRTtJQUMxRSxVQUFVLENBQUMsUUFBUSxFQUFFO1FBQ25CLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQztLQUNuQyxDQUFDO0NBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgYW5pbWF0ZSxcclxuICBhbmltYXRpb24sXHJcbiAgQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEsXHJcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxyXG4gIGtleWZyYW1lcyxcclxuICBzdHlsZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIHRyaWdnZXIsXHJcbiAgdXNlQW5pbWF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlSW5MZWZ0QW5pbWF0aW9uOiBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YSA9IGFuaW1hdGlvbihcclxuICBbXHJcbiAgICBhbmltYXRlKFxyXG4gICAgICAne3sgdGltaW5nIH19bXMge3sgZGVsYXkgfX1tcycsXHJcbiAgICAgIGtleWZyYW1lcyhbXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApYCxcclxuICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJ1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKDAsIDAsIDApYFxyXG4gICAgICAgIH0pXHJcbiAgICAgIF0pXHJcbiAgICApXHJcbiAgXVxyXG4gICxcclxuICB7IHBhcmFtczogeyB0aW1pbmc6IDEwMDAsIGRlbGF5OiAwIH0gfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlSW5MZWZ0OiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCdzbGlkZUluTGVmdCcsIFtcclxuICB0cmFuc2l0aW9uKCcqID0+IConLCBbXHJcbiAgICB1c2VBbmltYXRpb24oc2xpZGVJbkxlZnRBbmltYXRpb24pXHJcbiAgXSlcclxuXSk7XHJcblxyXG4iXX0=