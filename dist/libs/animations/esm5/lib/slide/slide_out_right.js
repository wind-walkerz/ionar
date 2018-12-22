/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';
/** @type {?} */
export var slide_out_right = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({
            transform: "translate3d(0, 0, 0)"
        }),
        style({
            transform: "translate3d(100%, 0, 0)",
            visibility: 'hidden'
        })
    ]))
], { params: { timing: 1000, delay: 0 } });
/** @type {?} */
export var slide_out_right_trigger = trigger('slide_out_right', [
    transition('* => *', [
        useAnimation(slide_out_right)
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVfb3V0X3JpZ2h0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2FuaW1hdGlvbnMvIiwic291cmNlcyI6WyJsaWIvc2xpZGUvc2xpZGVfb3V0X3JpZ2h0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLFNBQVMsRUFHVCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1AsWUFBWSxFQUNiLE1BQU0scUJBQXFCLENBQUM7O0FBRzdCLE1BQU0sS0FBTyxlQUFlLEdBQStCLFNBQVMsQ0FDbEU7SUFDRSxPQUFPLENBQ0wsOEJBQThCLEVBQzlCLFNBQVMsQ0FBQztRQUNSLEtBQUssQ0FBQztZQUNKLFNBQVMsRUFBRSxzQkFBc0I7U0FDbEMsQ0FBQztRQUNGLEtBQUssQ0FBQztZQUNKLFNBQVMsRUFBRSx5QkFBeUI7WUFDcEMsVUFBVSxFQUFFLFFBQVE7U0FDckIsQ0FBQztLQUNILENBQUMsQ0FDSDtDQUNGLEVBRUQsRUFBRSxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUN2Qzs7QUFFRCxNQUFNLEtBQU8sdUJBQXVCLEdBQTZCLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtJQUMxRixVQUFVLENBQUMsUUFBUSxFQUFFO1FBQ25CLFlBQVksQ0FBQyxlQUFlLENBQUM7S0FDOUIsQ0FBQztDQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGFuaW1hdGUsXHJcbiAgYW5pbWF0aW9uLFxyXG4gIEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhLFxyXG4gIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSxcclxuICBrZXlmcmFtZXMsXHJcbiAgc3R5bGUsXHJcbiAgdHJhbnNpdGlvbixcclxuICB0cmlnZ2VyLFxyXG4gIHVzZUFuaW1hdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZV9vdXRfcmlnaHQ6IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0gYW5pbWF0aW9uKFxyXG4gIFtcclxuICAgIGFuaW1hdGUoXHJcbiAgICAgICd7eyB0aW1pbmcgfX1tcyB7eyBkZWxheSB9fW1zJyxcclxuICAgICAga2V5ZnJhbWVzKFtcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgwLCAwLCAwKWBcclxuICAgICAgICB9KSxcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKWAsXHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIF0pXHJcbiAgICApXHJcbiAgXVxyXG4gICxcclxuICB7IHBhcmFtczogeyB0aW1pbmc6IDEwMDAsIGRlbGF5OiAwIH0gfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlX291dF9yaWdodF90cmlnZ2VyOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCdzbGlkZV9vdXRfcmlnaHQnLCBbXHJcbiAgdHJhbnNpdGlvbignKiA9PiAqJywgW1xyXG4gICAgdXNlQW5pbWF0aW9uKHNsaWRlX291dF9yaWdodClcclxuICBdKVxyXG5dKTtcclxuXHJcbiJdfQ==