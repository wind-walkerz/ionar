/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';
/** @type {?} */
export var flash = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({ opacity: 1 }),
        style({ opacity: 0 }),
        style({ opacity: 1 }),
        style({ opacity: 0 }),
        style({ opacity: 1 })
    ]))
], { params: { timing: 1000, delay: 0 } });
/** @type {?} */
export var flash_trigger = trigger('flash', [
    transition('* => *', [
        useAnimation(flash)
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhc2guYW5pbWF0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2FuaW1hdGlvbnMvIiwic291cmNlcyI6WyJsaWIvYXR0ZW50aW9uX3NlZWtlcnMvZmxhc2guYW5pbWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLFNBQVMsRUFHVCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1AsWUFBWSxFQUNiLE1BQU0scUJBQXFCLENBQUM7O0FBRzdCLE1BQU0sS0FBTyxLQUFLLEdBQStCLFNBQVMsQ0FDeEQ7SUFDRSxPQUFPLENBQ0wsOEJBQThCLEVBQzlCLFNBQVMsQ0FBQztRQUNSLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNyQixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDckIsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3JCLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUNyQixLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUM7S0FDdEIsQ0FBQyxDQUNIO0NBQ0YsRUFDRCxFQUFFLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQ3ZDOztBQUVELE1BQU0sS0FBTyxhQUFhLEdBQTZCLE9BQU8sQ0FBQyxPQUFPLEVBQUU7SUFDdEUsVUFBVSxDQUFDLFFBQVEsRUFBRTtRQUNuQixZQUFZLENBQUMsS0FBSyxDQUFDO0tBQ3BCLENBQUM7Q0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBhbmltYXRlLFxyXG4gIGFuaW1hdGlvbixcclxuICBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YSxcclxuICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsXHJcbiAga2V5ZnJhbWVzLFxyXG4gIHN0eWxlLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgdHJpZ2dlcixcclxuICB1c2VBbmltYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZmxhc2g6IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0gYW5pbWF0aW9uKFxyXG4gIFtcclxuICAgIGFuaW1hdGUoXHJcbiAgICAgICd7eyB0aW1pbmcgfX1tcyB7eyBkZWxheSB9fW1zJyxcclxuICAgICAga2V5ZnJhbWVzKFtcclxuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDEgfSksXHJcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwIH0pLFxyXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogMSB9KSxcclxuICAgICAgICBzdHlsZSh7IG9wYWNpdHk6IDAgfSksXHJcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAxIH0pXHJcbiAgICAgIF0pXHJcbiAgICApXHJcbiAgXSxcclxuICB7IHBhcmFtczogeyB0aW1pbmc6IDEwMDAsIGRlbGF5OiAwIH0gfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZsYXNoX3RyaWdnZXI6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ2ZsYXNoJywgW1xyXG4gIHRyYW5zaXRpb24oJyogPT4gKicsIFtcclxuICAgIHVzZUFuaW1hdGlvbihmbGFzaClcclxuICBdKVxyXG5dKTtcclxuXHJcbiJdfQ==