/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';
/** @type {?} */
export var slideOutLeftAnimation = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({
            transform: "translate3d(0, 0, 0)"
        }),
        style({
            transform: "translate3d(-100%, 0, 0)",
            visibility: 'hidden'
        })
    ]))
], { params: { timing: 1000, delay: 0 } });
/** @type {?} */
export var slideOutLeft = trigger('slideOutLeft', [
    transition('* => *', [
        useAnimation(slideOutLeftAnimation)
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVPdXRMZWZ0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2FuaW1hdGlvbnMvIiwic291cmNlcyI6WyJsaWIvc2xpZGVfZXhpdHMvc2xpZGVPdXRMZWZ0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsT0FBTyxFQUNQLFNBQVMsRUFHVCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1AsWUFBWSxFQUNiLE1BQU0scUJBQXFCLENBQUM7O0FBRzdCLE1BQU0sS0FBTyxxQkFBcUIsR0FBK0IsU0FBUyxDQUN4RTtJQUNFLE9BQU8sQ0FDTCw4QkFBOEIsRUFDOUIsU0FBUyxDQUFDO1FBQ1IsS0FBSyxDQUFDO1lBQ0osU0FBUyxFQUFFLHNCQUFzQjtTQUNsQyxDQUFDO1FBQ0YsS0FBSyxDQUFDO1lBQ0osU0FBUyxFQUFFLDBCQUEwQjtZQUNyQyxVQUFVLEVBQUUsUUFBUTtTQUNyQixDQUFDO0tBQ0gsQ0FBQyxDQUNIO0NBQ0YsRUFFRCxFQUFFLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQ3ZDOztBQUVELE1BQU0sS0FBTyxZQUFZLEdBQTZCLE9BQU8sQ0FBQyxjQUFjLEVBQUU7SUFDNUUsVUFBVSxDQUFDLFFBQVEsRUFBRTtRQUNuQixZQUFZLENBQUMscUJBQXFCLENBQUM7S0FDcEMsQ0FBQztDQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIGFuaW1hdGUsXHJcbiAgYW5pbWF0aW9uLFxyXG4gIEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhLFxyXG4gIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSxcclxuICBrZXlmcmFtZXMsXHJcbiAgc3R5bGUsXHJcbiAgdHJhbnNpdGlvbixcclxuICB0cmlnZ2VyLFxyXG4gIHVzZUFuaW1hdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZU91dExlZnRBbmltYXRpb246IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0gYW5pbWF0aW9uKFxyXG4gIFtcclxuICAgIGFuaW1hdGUoXHJcbiAgICAgICd7eyB0aW1pbmcgfX1tcyB7eyBkZWxheSB9fW1zJyxcclxuICAgICAga2V5ZnJhbWVzKFtcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgwLCAwLCAwKWBcclxuICAgICAgICB9KSxcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMClgLFxyXG4gICAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbidcclxuICAgICAgICB9KVxyXG4gICAgICBdKVxyXG4gICAgKVxyXG4gIF1cclxuICAsXHJcbiAgeyBwYXJhbXM6IHsgdGltaW5nOiAxMDAwLCBkZWxheTogMCB9IH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZU91dExlZnQ6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3NsaWRlT3V0TGVmdCcsIFtcclxuICB0cmFuc2l0aW9uKCcqID0+IConLCBbXHJcbiAgICB1c2VBbmltYXRpb24oc2xpZGVPdXRMZWZ0QW5pbWF0aW9uKVxyXG4gIF0pXHJcbl0pO1xyXG5cclxuIl19