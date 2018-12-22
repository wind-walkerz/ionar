/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';
/** @type {?} */
var base = {
    transform: 'translate3d(0, 0, 0)',
    animationTimingFunction: "cubicBezier(0.2125,0.610,0.355,1.000)"
};
/** @type {?} */
export var bounce = animation(animate('{{ timing }}ms {{ delay }}ms', keyframes([
    style({
        animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        transform: 'translate3d(0, -30px, 0)',
        offset: 0.43
    }),
    style(tslib_1.__assign({}, base, { offset: 0.53 })),
    style({
        animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        transform: 'translate3d(0, -15px, 0)',
        offset: 0.7
    }),
    style(tslib_1.__assign({}, base, { offset: 0.8 })),
    style({
        transform: 'translate3d(0, -4px, 0)',
        offset: 0.9
    }),
    style(tslib_1.__assign({}, base, { offset: 1 }))
])), { params: { timing: 1000, delay: 0 } });
/** @type {?} */
export var bounce_trigger = trigger('bounce', [
    transition('* => *', [
        useAnimation(bounce)
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm91bmNlLmFuaW1hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9hbmltYXRpb25zLyIsInNvdXJjZXMiOlsibGliL2F0dGVudGlvbl9zZWVrZXJzL2JvdW5jZS5hbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLFNBQVMsRUFHVCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1AsWUFBWSxFQUNiLE1BQU0scUJBQXFCLENBQUM7O0lBR3ZCLElBQUksR0FBRztJQUNYLFNBQVMsRUFBRSxzQkFBc0I7SUFDakMsdUJBQXVCLEVBQUUsdUNBQXVDO0NBQ2pFOztBQUVELE1BQU0sS0FBTyxNQUFNLEdBQStCLFNBQVMsQ0FDdkQsT0FBTyxDQUNMLDhCQUE4QixFQUM5QixTQUFTLENBQUM7SUFDUixLQUFLLENBQUM7UUFDSix1QkFBdUIsRUFBRSx3Q0FBd0M7UUFDakUsU0FBUyxFQUFFLDBCQUEwQjtRQUNyQyxNQUFNLEVBQUUsSUFBSTtLQUNiLENBQUM7SUFDRixLQUFLLHNCQUNBLElBQUksSUFDUCxNQUFNLEVBQUUsSUFBSSxJQUNaO0lBQ0YsS0FBSyxDQUFDO1FBQ0osdUJBQXVCLEVBQUUsd0NBQXdDO1FBQ2pFLFNBQVMsRUFBRSwwQkFBMEI7UUFDckMsTUFBTSxFQUFFLEdBQUc7S0FDWixDQUFDO0lBQ0YsS0FBSyxzQkFDQSxJQUFJLElBQ1AsTUFBTSxFQUFFLEdBQUcsSUFDWDtJQUNGLEtBQUssQ0FBQztRQUNKLFNBQVMsRUFBRSx5QkFBeUI7UUFDcEMsTUFBTSxFQUFFLEdBQUc7S0FDWixDQUFDO0lBQ0YsS0FBSyxzQkFDQSxJQUFJLElBQ1AsTUFBTSxFQUFFLENBQUMsSUFDVDtDQUNILENBQUMsQ0FDSCxFQUVILEVBQUUsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FDdkM7O0FBRUQsTUFBTSxLQUFPLGNBQWMsR0FBNkIsT0FBTyxDQUFDLFFBQVEsRUFBRTtJQUN4RSxVQUFVLENBQUMsUUFBUSxFQUFFO1FBQ25CLFlBQVksQ0FBQyxNQUFNLENBQUM7S0FDckIsQ0FBQztDQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGFuaW1hdGUsXHJcbiAgYW5pbWF0aW9uLFxyXG4gIEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhLFxyXG4gIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSxcclxuICBrZXlmcmFtZXMsXHJcbiAgc3R5bGUsXHJcbiAgdHJhbnNpdGlvbixcclxuICB0cmlnZ2VyLFxyXG4gIHVzZUFuaW1hdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuXHJcbmNvbnN0IGJhc2UgPSB7XHJcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgMCwgMCknLFxyXG4gIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiBgY3ViaWNCZXppZXIoMC4yMTI1LDAuNjEwLDAuMzU1LDEuMDAwKWBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBib3VuY2U6IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0gYW5pbWF0aW9uKFxyXG4gICAgYW5pbWF0ZShcclxuICAgICAgJ3t7IHRpbWluZyB9fW1zIHt7IGRlbGF5IH19bXMnLFxyXG4gICAgICBrZXlmcmFtZXMoW1xyXG4gICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiAnY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNiknLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlM2QoMCwgLTMwcHgsIDApJyxcclxuICAgICAgICAgIG9mZnNldDogMC40M1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgIC4uLmJhc2UsXHJcbiAgICAgICAgICBvZmZzZXQ6IDAuNTNcclxuICAgICAgICB9KSxcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogJ2N1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpJyxcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKScsXHJcbiAgICAgICAgICBvZmZzZXQ6IDAuN1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgIC4uLmJhc2UsXHJcbiAgICAgICAgICBvZmZzZXQ6IDAuOFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIC00cHgsIDApJyxcclxuICAgICAgICAgIG9mZnNldDogMC45XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgLi4uYmFzZSxcclxuICAgICAgICAgIG9mZnNldDogMVxyXG4gICAgICAgIH0pXHJcbiAgICAgIF0pXHJcbiAgICApXHJcbiAgLFxyXG4gIHsgcGFyYW1zOiB7IHRpbWluZzogMTAwMCwgZGVsYXk6IDAgfSB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgYm91bmNlX3RyaWdnZXI6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ2JvdW5jZScsIFtcclxuICB0cmFuc2l0aW9uKCcqID0+IConLCBbXHJcbiAgICB1c2VBbmltYXRpb24oYm91bmNlKVxyXG4gIF0pXHJcbl0pO1xyXG5cclxuIl19