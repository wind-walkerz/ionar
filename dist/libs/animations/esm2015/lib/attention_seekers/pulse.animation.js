/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';
/** @type {?} */
export const pulse = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({ transform: 'scale3d(1, 1, 1)' }),
        style({ transform: 'scale3d({{ scale }}, {{ scale }}, {{ scale }})' }),
        style({ transform: 'scale3d(1, 1, 1)' })
    ]))
], { params: { scale: 1.05, timing: 1000, delay: 0 } });
/** @type {?} */
export const pulse_trigger = trigger('pulse', [
    transition('* => *', [
        useAnimation(pulse)
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVsc2UuYW5pbWF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2FuaW1hdGlvbnMvIiwic291cmNlcyI6WyJsaWIvYXR0ZW50aW9uX3NlZWtlcnMvcHVsc2UuYW5pbWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLFNBQVMsRUFHVCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1AsWUFBWSxFQUNiLE1BQU0scUJBQXFCLENBQUM7O0FBRzdCLE1BQU0sT0FBTyxLQUFLLEdBQStCLFNBQVMsQ0FDeEQ7SUFDRSxPQUFPLENBQ0wsOEJBQThCLEVBQzlCLFNBQVMsQ0FBQztRQUNSLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO1FBQ3hDLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxnREFBZ0QsRUFBRSxDQUFDO1FBQ3RFLEtBQUssQ0FBQyxFQUFFLFNBQVMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0tBQ3pDLENBQUMsQ0FDSDtDQUNGLEVBQ0QsRUFBRSxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQ3BEOztBQUVELE1BQU0sT0FBTyxhQUFhLEdBQTZCLE9BQU8sQ0FBQyxPQUFPLEVBQUU7SUFDdEUsVUFBVSxDQUFDLFFBQVEsRUFBRTtRQUNuQixZQUFZLENBQUMsS0FBSyxDQUFDO0tBQ3BCLENBQUM7Q0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBhbmltYXRlLFxyXG4gIGFuaW1hdGlvbixcclxuICBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YSxcclxuICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsXHJcbiAga2V5ZnJhbWVzLFxyXG4gIHN0eWxlLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgdHJpZ2dlcixcclxuICB1c2VBbmltYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgcHVsc2U6IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0gYW5pbWF0aW9uKFxyXG4gIFtcclxuICAgIGFuaW1hdGUoXHJcbiAgICAgICd7eyB0aW1pbmcgfX1tcyB7eyBkZWxheSB9fW1zJyxcclxuICAgICAga2V5ZnJhbWVzKFtcclxuICAgICAgICBzdHlsZSh7IHRyYW5zZm9ybTogJ3NjYWxlM2QoMSwgMSwgMSknIH0pLFxyXG4gICAgICAgIHN0eWxlKHsgdHJhbnNmb3JtOiAnc2NhbGUzZCh7eyBzY2FsZSB9fSwge3sgc2NhbGUgfX0sIHt7IHNjYWxlIH19KScgfSksXHJcbiAgICAgICAgc3R5bGUoeyB0cmFuc2Zvcm06ICdzY2FsZTNkKDEsIDEsIDEpJyB9KVxyXG4gICAgICBdKVxyXG4gICAgKVxyXG4gIF0sXHJcbiAgeyBwYXJhbXM6IHsgc2NhbGU6IDEuMDUsIHRpbWluZzogMTAwMCwgZGVsYXk6IDAgfSB9XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgcHVsc2VfdHJpZ2dlcjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcigncHVsc2UnLCBbXHJcbiAgdHJhbnNpdGlvbignKiA9PiAqJywgW1xyXG4gICAgdXNlQW5pbWF0aW9uKHB1bHNlKVxyXG4gIF0pXHJcbl0pO1xyXG5cclxuIl19