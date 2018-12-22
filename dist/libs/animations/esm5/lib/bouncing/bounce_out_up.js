/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';
/** @type {?} */
export var bounce_out_up = animation([
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
export var bounce_out_up_trigger = trigger('bounce_out_up', [
    transition('* => *', [
        useAnimation(bounce_out_up)
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm91bmNlX291dF91cC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9hbmltYXRpb25zLyIsInNvdXJjZXMiOlsibGliL2JvdW5jaW5nL2JvdW5jZV9vdXRfdXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsU0FBUyxFQUdULFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sRUFDUCxZQUFZLEVBQ2IsTUFBTSxxQkFBcUIsQ0FBQzs7QUFHN0IsTUFBTSxLQUFPLGFBQWEsR0FBK0IsU0FBUyxDQUNoRTtJQUNFLE9BQU8sQ0FDTCw4QkFBOEIsRUFDOUIsU0FBUyxDQUFDO1FBQ1IsS0FBSyxDQUFDO1lBQ0osU0FBUyxFQUFFLDBCQUEwQjtZQUNyQyxNQUFNLEVBQUUsR0FBRztTQUNaLENBQUM7UUFDRixLQUFLLENBQUM7WUFDSixTQUFTLEVBQUUseUJBQXlCO1lBQ3BDLE1BQU0sRUFBRSxHQUFHO1NBQ1osQ0FBQztRQUNGLEtBQUssQ0FBQztZQUNKLFNBQVMsRUFBRSx5QkFBeUI7WUFDcEMsTUFBTSxFQUFFLElBQUk7U0FDYixDQUFDO1FBQ0YsS0FBSyxDQUFDO1lBQ0osU0FBUyxFQUFFLDBCQUEwQjtZQUNyQyxNQUFNLEVBQUUsQ0FBQztTQUNWLENBQUM7S0FDSCxDQUFDLENBQ0g7Q0FDRixFQUVELEVBQUUsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FDdkM7O0FBRUQsTUFBTSxLQUFPLHFCQUFxQixHQUE2QixPQUFPLENBQUMsZUFBZSxFQUFFO0lBQ3RGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7UUFDbkIsWUFBWSxDQUFDLGFBQWEsQ0FBQztLQUM1QixDQUFDO0NBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgYW5pbWF0ZSxcclxuICBhbmltYXRpb24sXHJcbiAgQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEsXHJcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxyXG4gIGtleWZyYW1lcyxcclxuICBzdHlsZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIHRyaWdnZXIsXHJcbiAgdXNlQW5pbWF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGJvdW5jZV9vdXRfdXA6IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0gYW5pbWF0aW9uKFxyXG4gIFtcclxuICAgIGFuaW1hdGUoXHJcbiAgICAgICd7eyB0aW1pbmcgfX1tcyB7eyBkZWxheSB9fW1zJyxcclxuICAgICAga2V5ZnJhbWVzKFtcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAtMXJlbSwgMCknLFxyXG4gICAgICAgICAgb2Zmc2V0OiAwLjJcclxuICAgICAgICB9KSxcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAycmVtLCAwKScsXHJcbiAgICAgICAgICBvZmZzZXQ6IDAuNFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKDAsIDJyZW0sIDApJyxcclxuICAgICAgICAgIG9mZnNldDogMC40NVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKDAsIC0yMDAlLCAwKWAsXHJcbiAgICAgICAgICBvZmZzZXQ6IDFcclxuICAgICAgICB9KVxyXG4gICAgICBdKVxyXG4gICAgKVxyXG4gIF1cclxuICAsXHJcbiAgeyBwYXJhbXM6IHsgdGltaW5nOiAxMDAwLCBkZWxheTogMCB9IH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBib3VuY2Vfb3V0X3VwX3RyaWdnZXI6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ2JvdW5jZV9vdXRfdXAnLCBbXHJcbiAgdHJhbnNpdGlvbignKiA9PiAqJywgW1xyXG4gICAgdXNlQW5pbWF0aW9uKGJvdW5jZV9vdXRfdXApXHJcbiAgXSlcclxuXSk7XHJcblxyXG4iXX0=