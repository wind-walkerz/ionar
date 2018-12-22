/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';
/** @type {?} */
export var bounce_in = animation([
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
export var bounce_in_trigger = trigger('bounce_in', [
    transition('* => *', [
        useAnimation(bounce_in)
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm91bmNlX2luLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2FuaW1hdGlvbnMvIiwic291cmNlcyI6WyJsaWIvYm91bmNpbmcvYm91bmNlX2luLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLFNBQVMsRUFHVCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1AsWUFBWSxFQUNiLE1BQU0scUJBQXFCLENBQUM7O0FBRzdCLE1BQU0sS0FBTyxTQUFTLEdBQStCLFNBQVMsQ0FDNUQ7SUFDRSxPQUFPLENBQ0wsOEJBQThCLEVBQzlCLFNBQVMsQ0FBQztRQUNSLEtBQUssQ0FBQztZQUNKLHVCQUF1QixFQUFFLHFDQUFxQztZQUM5RCxTQUFTLEVBQUUsd0JBQXdCO1lBQ25DLE1BQU0sRUFBRSxDQUFDO1NBQ1YsQ0FBQztRQUNGLEtBQUssQ0FBQztZQUNKLHVCQUF1QixFQUFFLHFDQUFxQztZQUM5RCxTQUFTLEVBQUUsd0JBQXdCO1lBQ25DLE1BQU0sRUFBRSxHQUFHO1NBQ1osQ0FBQztRQUNGLEtBQUssQ0FBQztZQUNKLHVCQUF1QixFQUFFLHFDQUFxQztZQUM5RCxTQUFTLEVBQUUsd0JBQXdCO1lBQ25DLE1BQU0sRUFBRSxHQUFHO1NBQ1osQ0FBQztRQUNGLEtBQUssQ0FBQztZQUNKLHVCQUF1QixFQUFFLHFDQUFxQztZQUM5RCxTQUFTLEVBQUUsMkJBQTJCO1lBQ3RDLE1BQU0sRUFBRSxHQUFHO1NBQ1osQ0FBQztRQUNGLEtBQUssQ0FBQztZQUNKLHVCQUF1QixFQUFFLHFDQUFxQztZQUM5RCxTQUFTLEVBQUUsMkJBQTJCO1lBQ3RDLE1BQU0sRUFBRSxHQUFHO1NBQ1osQ0FBQztRQUNGLEtBQUssQ0FBQztZQUNKLHVCQUF1QixFQUFFLHFDQUFxQztZQUM5RCxTQUFTLEVBQUUsa0JBQWtCO1lBQzdCLE1BQU0sRUFBRSxDQUFDO1NBQ1YsQ0FBQztLQUNILENBQUMsQ0FDSDtDQUNGLEVBQ0QsRUFBRSxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUN0Qzs7QUFFRCxNQUFNLEtBQU8saUJBQWlCLEdBQTZCLE9BQU8sQ0FBQyxXQUFXLEVBQUU7SUFDOUUsVUFBVSxDQUFDLFFBQVEsRUFBRTtRQUNuQixZQUFZLENBQUMsU0FBUyxDQUFDO0tBQ3hCLENBQUM7Q0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBhbmltYXRlLFxyXG4gIGFuaW1hdGlvbixcclxuICBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YSxcclxuICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsXHJcbiAga2V5ZnJhbWVzLFxyXG4gIHN0eWxlLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgdHJpZ2dlcixcclxuICB1c2VBbmltYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYm91bmNlX2luOiBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YSA9IGFuaW1hdGlvbihcclxuICBbXHJcbiAgICBhbmltYXRlKFxyXG4gICAgICAne3sgdGltaW5nIH19bXMge3sgZGVsYXkgfX1tcycsXHJcbiAgICAgIGtleWZyYW1lcyhbXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246IGBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKWAsXHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGBzY2FsZTNkKDAuMywgMC4zLCAwLjMpYCxcclxuICAgICAgICAgIG9mZnNldDogMFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiBgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSlgLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLjEsIDEuMSwgMS4xKScsXHJcbiAgICAgICAgICBvZmZzZXQ6IDAuMlxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiBgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSlgLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUzZCgwLjksIDAuOSwgMC45KScsXHJcbiAgICAgICAgICBvZmZzZXQ6IDAuNFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiBgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSlgLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUzZCgxLjAzLCAxLjAzLCAxLjAzKScsXHJcbiAgICAgICAgICBvZmZzZXQ6IDAuNlxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiBgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSlgLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUzZCgwLjk3LCAwLjk3LCAwLjk3KScsXHJcbiAgICAgICAgICBvZmZzZXQ6IDAuOFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgIGFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uOiBgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSlgLFxyXG4gICAgICAgICAgdHJhbnNmb3JtOiBgc2NhbGUzZCgxLCAxLCAxKWAsXHJcbiAgICAgICAgICBvZmZzZXQ6IDFcclxuICAgICAgICB9KVxyXG4gICAgICBdKVxyXG4gICAgKVxyXG4gIF0sXHJcbiAgeyBwYXJhbXM6IHsgdGltaW5nOiA3NTAsIGRlbGF5OiAwIH0gfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJvdW5jZV9pbl90cmlnZ2VyOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCdib3VuY2VfaW4nLCBbXHJcbiAgdHJhbnNpdGlvbignKiA9PiAqJywgW1xyXG4gICAgdXNlQW5pbWF0aW9uKGJvdW5jZV9pbilcclxuICBdKVxyXG5dKTtcclxuXHJcbiJdfQ==