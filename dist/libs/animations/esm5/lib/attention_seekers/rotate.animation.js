/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animation, state, style, transition, trigger } from '@angular/animations';
/** @type {?} */
export var rotate = animation([
    animate('{{ timings }}', style({
        transform: 'rotate({{deg}}deg)'
    }))
]);
/** @type {?} */
export var rotate_trigger = trigger('rotate', [
    state('default', style({})),
    state('animated', style({
        transform: 'rotate({{deg}}deg)'
    }), { params: { deg: 0 } }),
    transition('* => *', [
        animate(300)
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm90YXRlLmFuaW1hdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9hbmltYXRpb25zLyIsInNvdXJjZXMiOlsibGliL2F0dGVudGlvbl9zZWVrZXJzL3JvdGF0ZS5hbmltYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsU0FBUyxFQUdULEtBQUssRUFDTCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sRUFDUixNQUFNLHFCQUFxQixDQUFDOztBQUc3QixNQUFNLEtBQU8sTUFBTSxHQUErQixTQUFTLENBQUM7SUFFMUQsT0FBTyxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUM7UUFDN0IsU0FBUyxFQUFFLG9CQUFvQjtLQUNoQyxDQUFDLENBQUM7Q0FDSixDQUFDOztBQUVGLE1BQU0sS0FBTyxjQUFjLEdBQTZCLE9BQU8sQ0FBQyxRQUFRLEVBQUU7SUFDeEUsS0FBSyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDM0IsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7UUFDdEIsU0FBUyxFQUFFLG9CQUFvQjtLQUNoQyxDQUFDLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUMzQixVQUFVLENBQUMsUUFBUSxFQUFFO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUM7S0FDYixDQUFDO0NBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgYW5pbWF0ZSxcclxuICBhbmltYXRpb24sXHJcbiAgQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEsXHJcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxyXG4gIHN0YXRlLFxyXG4gIHN0eWxlLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgdHJpZ2dlclxyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCByb3RhdGU6IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0gYW5pbWF0aW9uKFtcclxuXHJcbiAgYW5pbWF0ZSgne3sgdGltaW5ncyB9fScsIHN0eWxlKHtcclxuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSh7e2RlZ319ZGVnKSdcclxuICB9KSlcclxuXSk7XHJcblxyXG5leHBvcnQgY29uc3Qgcm90YXRlX3RyaWdnZXI6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3JvdGF0ZScsIFtcclxuICBzdGF0ZSgnZGVmYXVsdCcsIHN0eWxlKHt9KSksXHJcbiAgc3RhdGUoJ2FuaW1hdGVkJywgc3R5bGUoe1xyXG4gICAgdHJhbnNmb3JtOiAncm90YXRlKHt7ZGVnfX1kZWcpJ1xyXG4gIH0pLCB7IHBhcmFtczogeyBkZWc6IDAgfSB9KSxcclxuICB0cmFuc2l0aW9uKCcqID0+IConLCBbXHJcbiAgICBhbmltYXRlKDMwMClcclxuICBdKVxyXG5dKTsiXX0=