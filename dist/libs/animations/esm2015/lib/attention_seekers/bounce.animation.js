/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';
/** @type {?} */
const base = {
    transform: 'translate3d(0, 0, 0)',
    animationTimingFunction: `cubicBezier(0.2125,0.610,0.355,1.000)`
};
/** @type {?} */
export const bounce = animation(animate('{{ timing }}ms {{ delay }}ms', keyframes([
    style({
        animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        transform: 'translate3d(0, -30px, 0)',
        offset: 0.43
    }),
    style(Object.assign({}, base, { offset: 0.53 })),
    style({
        animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        transform: 'translate3d(0, -15px, 0)',
        offset: 0.7
    }),
    style(Object.assign({}, base, { offset: 0.8 })),
    style({
        transform: 'translate3d(0, -4px, 0)',
        offset: 0.9
    }),
    style(Object.assign({}, base, { offset: 1 }))
])), { params: { timing: 1000, delay: 0 } });
/** @type {?} */
export const bounce_trigger = trigger('bounce', [
    transition('* => *', [
        useAnimation(bounce)
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm91bmNlLmFuaW1hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9hbmltYXRpb25zLyIsInNvdXJjZXMiOlsibGliL2F0dGVudGlvbl9zZWVrZXJzL2JvdW5jZS5hbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsU0FBUyxFQUdULFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sRUFDUCxZQUFZLEVBQ2IsTUFBTSxxQkFBcUIsQ0FBQzs7TUFHdkIsSUFBSSxHQUFHO0lBQ1gsU0FBUyxFQUFFLHNCQUFzQjtJQUNqQyx1QkFBdUIsRUFBRSx1Q0FBdUM7Q0FDakU7O0FBRUQsTUFBTSxPQUFPLE1BQU0sR0FBK0IsU0FBUyxDQUN2RCxPQUFPLENBQ0wsOEJBQThCLEVBQzlCLFNBQVMsQ0FBQztJQUNSLEtBQUssQ0FBQztRQUNKLHVCQUF1QixFQUFFLHdDQUF3QztRQUNqRSxTQUFTLEVBQUUsMEJBQTBCO1FBQ3JDLE1BQU0sRUFBRSxJQUFJO0tBQ2IsQ0FBQztJQUNGLEtBQUssbUJBQ0EsSUFBSSxJQUNQLE1BQU0sRUFBRSxJQUFJLElBQ1o7SUFDRixLQUFLLENBQUM7UUFDSix1QkFBdUIsRUFBRSx3Q0FBd0M7UUFDakUsU0FBUyxFQUFFLDBCQUEwQjtRQUNyQyxNQUFNLEVBQUUsR0FBRztLQUNaLENBQUM7SUFDRixLQUFLLG1CQUNBLElBQUksSUFDUCxNQUFNLEVBQUUsR0FBRyxJQUNYO0lBQ0YsS0FBSyxDQUFDO1FBQ0osU0FBUyxFQUFFLHlCQUF5QjtRQUNwQyxNQUFNLEVBQUUsR0FBRztLQUNaLENBQUM7SUFDRixLQUFLLG1CQUNBLElBQUksSUFDUCxNQUFNLEVBQUUsQ0FBQyxJQUNUO0NBQ0gsQ0FBQyxDQUNILEVBRUgsRUFBRSxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUN2Qzs7QUFFRCxNQUFNLE9BQU8sY0FBYyxHQUE2QixPQUFPLENBQUMsUUFBUSxFQUFFO0lBQ3hFLFVBQVUsQ0FBQyxRQUFRLEVBQUU7UUFDbkIsWUFBWSxDQUFDLE1BQU0sQ0FBQztLQUNyQixDQUFDO0NBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgYW5pbWF0ZSxcclxuICBhbmltYXRpb24sXHJcbiAgQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEsXHJcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxyXG4gIGtleWZyYW1lcyxcclxuICBzdHlsZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIHRyaWdnZXIsXHJcbiAgdXNlQW5pbWF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5cclxuY29uc3QgYmFzZSA9IHtcclxuICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAwLCAwKScsXHJcbiAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246IGBjdWJpY0JlemllcigwLjIxMjUsMC42MTAsMC4zNTUsMS4wMDApYFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGJvdW5jZTogQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEgPSBhbmltYXRpb24oXHJcbiAgICBhbmltYXRlKFxyXG4gICAgICAne3sgdGltaW5nIH19bXMge3sgZGVsYXkgfX1tcycsXHJcbiAgICAgIGtleWZyYW1lcyhbXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246ICdjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KScsXHJcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAtMzBweCwgMCknLFxyXG4gICAgICAgICAgb2Zmc2V0OiAwLjQzXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgLi4uYmFzZSxcclxuICAgICAgICAgIG9mZnNldDogMC41M1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNiknLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgLTE1cHgsIDApJyxcclxuICAgICAgICAgIG9mZnNldDogMC43XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgLi4uYmFzZSxcclxuICAgICAgICAgIG9mZnNldDogMC44XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgLTRweCwgMCknLFxyXG4gICAgICAgICAgb2Zmc2V0OiAwLjlcclxuICAgICAgICB9KSxcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICAuLi5iYXNlLFxyXG4gICAgICAgICAgb2Zmc2V0OiAxXHJcbiAgICAgICAgfSlcclxuICAgICAgXSlcclxuICAgIClcclxuICAsXHJcbiAgeyBwYXJhbXM6IHsgdGltaW5nOiAxMDAwLCBkZWxheTogMCB9IH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBib3VuY2VfdHJpZ2dlcjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcignYm91bmNlJywgW1xyXG4gIHRyYW5zaXRpb24oJyogPT4gKicsIFtcclxuICAgIHVzZUFuaW1hdGlvbihib3VuY2UpXHJcbiAgXSlcclxuXSk7XHJcblxyXG4iXX0=