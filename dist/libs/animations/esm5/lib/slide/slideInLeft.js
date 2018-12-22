/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';
/** @type {?} */
export var slideInLeftAnimation = animation([
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
export var slideInLeft = trigger('slideInLeft', [
    transition('* => *', [
        useAnimation(slideInLeftAnimation)
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVJbkxlZnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvYW5pbWF0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9zbGlkZS9zbGlkZUluTGVmdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxTQUFTLEVBR1QsU0FBUyxFQUNULEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNQLFlBQVksRUFDYixNQUFNLHFCQUFxQixDQUFDOztBQUc3QixNQUFNLEtBQU8sb0JBQW9CLEdBQStCLFNBQVMsQ0FDdkU7SUFDRSxPQUFPLENBQ0wsOEJBQThCLEVBQzlCLFNBQVMsQ0FBQztRQUNSLEtBQUssQ0FBQztZQUNKLFNBQVMsRUFBRSwwQkFBMEI7WUFDckMsVUFBVSxFQUFFLFNBQVM7U0FDdEIsQ0FBQztRQUNGLEtBQUssQ0FBQztZQUNKLFNBQVMsRUFBRSxzQkFBc0I7U0FDbEMsQ0FBQztLQUNILENBQUMsQ0FDSDtDQUNGLEVBRUQsRUFBRSxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUN2Qzs7QUFFRCxNQUFNLEtBQU8sV0FBVyxHQUE2QixPQUFPLENBQUMsYUFBYSxFQUFFO0lBQzFFLFVBQVUsQ0FBQyxRQUFRLEVBQUU7UUFDbkIsWUFBWSxDQUFDLG9CQUFvQixDQUFDO0tBQ25DLENBQUM7Q0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBhbmltYXRlLFxyXG4gIGFuaW1hdGlvbixcclxuICBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YSxcclxuICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsXHJcbiAga2V5ZnJhbWVzLFxyXG4gIHN0eWxlLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgdHJpZ2dlcixcclxuICB1c2VBbmltYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVJbkxlZnRBbmltYXRpb246IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0gYW5pbWF0aW9uKFxyXG4gIFtcclxuICAgIGFuaW1hdGUoXHJcbiAgICAgICd7eyB0aW1pbmcgfX1tcyB7eyBkZWxheSB9fW1zJyxcclxuICAgICAga2V5ZnJhbWVzKFtcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMClgLFxyXG4gICAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoMCwgMCwgMClgXHJcbiAgICAgICAgfSlcclxuICAgICAgXSlcclxuICAgIClcclxuICBdXHJcbiAgLFxyXG4gIHsgcGFyYW1zOiB7IHRpbWluZzogMTAwMCwgZGVsYXk6IDAgfSB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3Qgc2xpZGVJbkxlZnQ6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3NsaWRlSW5MZWZ0JywgW1xyXG4gIHRyYW5zaXRpb24oJyogPT4gKicsIFtcclxuICAgIHVzZUFuaW1hdGlvbihzbGlkZUluTGVmdEFuaW1hdGlvbilcclxuICBdKVxyXG5dKTtcclxuXHJcbiJdfQ==