/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animation, keyframes, query, style, transition, trigger, useAnimation } from '@angular/animations';
/** @type {?} */
export var slideInDownAnimation = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({
            transform: "translate3d(0, -100%, 0)",
            visibility: 'visible'
        }),
        style({
            transform: "translate3d(0, 0, 0)"
        })
    ]))
], { params: { timing: 1000, delay: 0 } });
/** @type {?} */
export var slideInDown = trigger('slideInDown', [
    transition('* => *', [
        query('*', useAnimation(slideInDownAnimation)),
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVJbkRvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvYW5pbWF0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9zbGlkZV9lbnRyYW5jZXMvc2xpZGVJbkRvd24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBRVAsU0FBUyxFQUlULFNBQVMsRUFDVCxLQUFLLEVBRUwsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1AsWUFBWSxFQUNiLE1BQU0scUJBQXFCLENBQUM7O0FBRzdCLE1BQU0sS0FBTyxvQkFBb0IsR0FBK0IsU0FBUyxDQUN2RTtJQUNFLE9BQU8sQ0FDTCw4QkFBOEIsRUFDOUIsU0FBUyxDQUFDO1FBQ1IsS0FBSyxDQUFDO1lBQ0osU0FBUyxFQUFFLDBCQUEwQjtZQUNyQyxVQUFVLEVBQUUsU0FBUztTQUN0QixDQUFDO1FBQ0YsS0FBSyxDQUFDO1lBQ0osU0FBUyxFQUFFLHNCQUFzQjtTQUNsQyxDQUFDO0tBQ0gsQ0FBQyxDQUNIO0NBQ0YsRUFFRCxFQUFFLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQ3ZDOztBQUVELE1BQU0sS0FBTyxXQUFXLEdBQTZCLE9BQU8sQ0FBQyxhQUFhLEVBQUU7SUFDMUUsVUFBVSxDQUFDLFFBQVEsRUFBRTtRQUNuQixLQUFLLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0tBQy9DLENBQUM7Q0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBhbmltYXRlLFxyXG4gIGFuaW1hdGVDaGlsZCxcclxuICBhbmltYXRpb24sXHJcbiAgQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEsXHJcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxyXG4gIGdyb3VwLFxyXG4gIGtleWZyYW1lcyxcclxuICBxdWVyeSxcclxuICBzdGFnZ2VyLFxyXG4gIHN0eWxlLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgdHJpZ2dlcixcclxuICB1c2VBbmltYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVJbkRvd25BbmltYXRpb246IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0gYW5pbWF0aW9uKFxyXG4gIFtcclxuICAgIGFuaW1hdGUoXHJcbiAgICAgICd7eyB0aW1pbmcgfX1tcyB7eyBkZWxheSB9fW1zJyxcclxuICAgICAga2V5ZnJhbWVzKFtcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMClgLFxyXG4gICAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoMCwgMCwgMClgXHJcbiAgICAgICAgfSlcclxuICAgICAgXSlcclxuICAgIClcclxuICBdXHJcbiAgLFxyXG4gIHsgcGFyYW1zOiB7IHRpbWluZzogMTAwMCwgZGVsYXk6IDAgfSB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVJbkRvd246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3NsaWRlSW5Eb3duJywgW1xyXG4gIHRyYW5zaXRpb24oJyogPT4gKicsIFtcclxuICAgIHF1ZXJ5KCcqJywgdXNlQW5pbWF0aW9uKHNsaWRlSW5Eb3duQW5pbWF0aW9uKSksXHJcbiAgXSlcclxuXSk7XHJcblxyXG4iXX0=