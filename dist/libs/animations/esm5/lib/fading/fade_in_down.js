/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';
/** @type {?} */
export var fade_in_down = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({
            opacity: 0,
            transform: " translate3d(0, -100%, 0)"
        }),
        style({
            opacity: 1,
            transform: "none"
        })
    ]))
], { params: { timing: 750, delay: 0 } });
/** @type {?} */
export var fade_in_down_trigger = trigger('fade_in_down', [
    transition('* => *', [
        useAnimation(fade_in_down)
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFkZV9pbl9kb3duLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2FuaW1hdGlvbnMvIiwic291cmNlcyI6WyJsaWIvZmFkaW5nL2ZhZGVfaW5fZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxTQUFTLEVBR1QsU0FBUyxFQUNULEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNQLFlBQVksRUFDYixNQUFNLHFCQUFxQixDQUFDOztBQUc3QixNQUFNLEtBQU8sWUFBWSxHQUErQixTQUFTLENBQy9EO0lBQ0UsT0FBTyxDQUNMLDhCQUE4QixFQUM5QixTQUFTLENBQUM7UUFDUixLQUFLLENBQUM7WUFDSixPQUFPLEVBQUUsQ0FBQztZQUNWLFNBQVMsRUFBRSwyQkFBMkI7U0FDdkMsQ0FBQztRQUNGLEtBQUssQ0FBQztZQUNKLE9BQU8sRUFBRSxDQUFDO1lBQ1YsU0FBUyxFQUFFLE1BQU07U0FDbEIsQ0FBQztLQUNILENBQUMsQ0FDSDtDQUNGLEVBRUQsRUFBRSxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUN2Qzs7QUFFRCxNQUFNLEtBQU8sb0JBQW9CLEdBQTZCLE9BQU8sQ0FBQyxjQUFjLEVBQUU7SUFDcEYsVUFBVSxDQUFDLFFBQVEsRUFBRTtRQUNuQixZQUFZLENBQUMsWUFBWSxDQUFDO0tBQzNCLENBQUM7Q0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBhbmltYXRlLFxyXG4gIGFuaW1hdGlvbixcclxuICBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YSxcclxuICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsXHJcbiAga2V5ZnJhbWVzLFxyXG4gIHN0eWxlLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgdHJpZ2dlcixcclxuICB1c2VBbmltYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZmFkZV9pbl9kb3duOiBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YSA9IGFuaW1hdGlvbihcclxuICBbXHJcbiAgICBhbmltYXRlKFxyXG4gICAgICAne3sgdGltaW5nIH19bXMge3sgZGVsYXkgfX1tcycsXHJcbiAgICAgIGtleWZyYW1lcyhbXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgIHRyYW5zZm9ybTogYCB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMClgXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICAgIHRyYW5zZm9ybTogYG5vbmVgXHJcbiAgICAgICAgfSlcclxuICAgICAgXSlcclxuICAgIClcclxuICBdXHJcbiAgLFxyXG4gIHsgcGFyYW1zOiB7IHRpbWluZzogNzUwICwgZGVsYXk6IDAgfSB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgZmFkZV9pbl9kb3duX3RyaWdnZXI6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ2ZhZGVfaW5fZG93bicsIFtcclxuICB0cmFuc2l0aW9uKCcqID0+IConLCBbXHJcbiAgICB1c2VBbmltYXRpb24oZmFkZV9pbl9kb3duKVxyXG4gIF0pXHJcbl0pO1xyXG5cclxuIl19