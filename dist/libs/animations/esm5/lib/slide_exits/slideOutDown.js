/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';
/** @type {?} */
export var slideOutDownAnimation = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({
            transform: "translate3d(0, 0, 0)"
        }),
        style({
            transform: "translate3d(0, 100%, 0)",
            visibility: 'hidden'
        })
    ]))
], { params: { timing: 1000, delay: 0 } });
/** @type {?} */
export var slideOutDown = trigger('slideOutDown', [
    transition('* => *', [
        useAnimation(slideOutDownAnimation)
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVPdXREb3duLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2FuaW1hdGlvbnMvIiwic291cmNlcyI6WyJsaWIvc2xpZGVfZXhpdHMvc2xpZGVPdXREb3duLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLFNBQVMsRUFHVCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1AsWUFBWSxFQUNiLE1BQU0scUJBQXFCLENBQUM7O0FBRzdCLE1BQU0sS0FBTyxxQkFBcUIsR0FBK0IsU0FBUyxDQUN4RTtJQUNFLE9BQU8sQ0FDTCw4QkFBOEIsRUFDOUIsU0FBUyxDQUFDO1FBQ1IsS0FBSyxDQUFDO1lBQ0osU0FBUyxFQUFFLHNCQUFzQjtTQUNsQyxDQUFDO1FBQ0YsS0FBSyxDQUFDO1lBQ0osU0FBUyxFQUFFLHlCQUF5QjtZQUNwQyxVQUFVLEVBQUUsUUFBUTtTQUNyQixDQUFDO0tBQ0gsQ0FBQyxDQUNIO0NBQ0YsRUFFRCxFQUFFLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQ3ZDOztBQUVELE1BQU0sS0FBTyxZQUFZLEdBQTZCLE9BQU8sQ0FBQyxjQUFjLEVBQUU7SUFDNUUsVUFBVSxDQUFDLFFBQVEsRUFBRTtRQUNuQixZQUFZLENBQUMscUJBQXFCLENBQUM7S0FDcEMsQ0FBQztDQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGFuaW1hdGUsXHJcbiAgYW5pbWF0aW9uLFxyXG4gIEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhLFxyXG4gIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSxcclxuICBrZXlmcmFtZXMsXHJcbiAgc3R5bGUsXHJcbiAgdHJhbnNpdGlvbixcclxuICB0cmlnZ2VyLFxyXG4gIHVzZUFuaW1hdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZU91dERvd25BbmltYXRpb246IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0gYW5pbWF0aW9uKFxyXG4gIFtcclxuICAgIGFuaW1hdGUoXHJcbiAgICAgICd7eyB0aW1pbmcgfX1tcyB7eyBkZWxheSB9fW1zJyxcclxuICAgICAga2V5ZnJhbWVzKFtcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgwLCAwLCAwKWBcclxuICAgICAgICB9KSxcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgwLCAxMDAlLCAwKWAsXHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIF0pXHJcbiAgICApXHJcbiAgXVxyXG4gICxcclxuICB7IHBhcmFtczogeyB0aW1pbmc6IDEwMDAsIGRlbGF5OiAwIH0gfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlT3V0RG93bjogQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhID0gdHJpZ2dlcignc2xpZGVPdXREb3duJywgW1xyXG4gIHRyYW5zaXRpb24oJyogPT4gKicsIFtcclxuICAgIHVzZUFuaW1hdGlvbihzbGlkZU91dERvd25BbmltYXRpb24pXHJcbiAgXSlcclxuXSk7XHJcblxyXG4iXX0=