/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animateChild, animation, group, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';
/** @type {?} */
export const slideInUpAnimation = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({
            transform: `translate3d(0, 100%, 0)`,
            visibility: 'visible'
        }),
        style({
            transform: `translate3d(0, 0, 0)`
        })
    ]))
], { params: { timing: 1000, delay: 0 } });
/** @type {?} */
export const slideInUp = trigger('slideInUp', [
    transition('* => *', [
        group([
            useAnimation(slideInUpAnimation),
            animateChild()
        ])
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVJblVwLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2FuaW1hdGlvbnMvIiwic291cmNlcyI6WyJsaWIvc2xpZGVfZW50cmFuY2VzL3NsaWRlSW5VcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxZQUFZLEVBQ1osU0FBUyxFQUdULEtBQUssRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1AsWUFBWSxFQUNiLE1BQU0scUJBQXFCLENBQUM7O0FBRzdCLE1BQU0sT0FBTyxrQkFBa0IsR0FBK0IsU0FBUyxDQUNyRTtJQUNFLE9BQU8sQ0FDTCw4QkFBOEIsRUFDOUIsU0FBUyxDQUFDO1FBQ1IsS0FBSyxDQUFDO1lBQ0osU0FBUyxFQUFFLHlCQUF5QjtZQUNwQyxVQUFVLEVBQUUsU0FBUztTQUN0QixDQUFDO1FBQ0YsS0FBSyxDQUFDO1lBQ0osU0FBUyxFQUFFLHNCQUFzQjtTQUNsQyxDQUFDO0tBQ0gsQ0FBQyxDQUNIO0NBQ0YsRUFFRCxFQUFFLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQ3ZDOztBQUVELE1BQU0sT0FBTyxTQUFTLEdBQTZCLE9BQU8sQ0FBQyxXQUFXLEVBQUU7SUFDdEUsVUFBVSxDQUFDLFFBQVEsRUFBRTtRQUNuQixLQUFLLENBQUM7WUFDSixZQUFZLENBQUMsa0JBQWtCLENBQUM7WUFDaEMsWUFBWSxFQUFFO1NBQ2YsQ0FBQztLQUNILENBQUM7Q0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBhbmltYXRlLFxyXG4gIGFuaW1hdGVDaGlsZCxcclxuICBhbmltYXRpb24sXHJcbiAgQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEsXHJcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxyXG4gIGdyb3VwLFxyXG4gIGtleWZyYW1lcyxcclxuICBzdHlsZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIHRyaWdnZXIsXHJcbiAgdXNlQW5pbWF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlSW5VcEFuaW1hdGlvbjogQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEgPSBhbmltYXRpb24oXHJcbiAgW1xyXG4gICAgYW5pbWF0ZShcclxuICAgICAgJ3t7IHRpbWluZyB9fW1zIHt7IGRlbGF5IH19bXMnLFxyXG4gICAgICBrZXlmcmFtZXMoW1xyXG4gICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApYCxcclxuICAgICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJ1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIHN0eWxlKHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKDAsIDAsIDApYFxyXG4gICAgICAgIH0pXHJcbiAgICAgIF0pXHJcbiAgICApXHJcbiAgXVxyXG4gICxcclxuICB7IHBhcmFtczogeyB0aW1pbmc6IDEwMDAsIGRlbGF5OiAwIH0gfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlSW5VcDogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcignc2xpZGVJblVwJywgW1xyXG4gIHRyYW5zaXRpb24oJyogPT4gKicsIFtcclxuICAgIGdyb3VwKFtcclxuICAgICAgdXNlQW5pbWF0aW9uKHNsaWRlSW5VcEFuaW1hdGlvbiksXHJcbiAgICAgIGFuaW1hdGVDaGlsZCgpXHJcbiAgICBdKVxyXG4gIF0pXHJcbl0pO1xyXG4iXX0=