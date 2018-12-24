/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';
/** @type {?} */
export var slideOutRightAnimation = animation([
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
export var slideOutRight = trigger('slideOutRight', [
    transition('* => *', [
        useAnimation(slideOutRightAnimation)
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVPdXRSaWdodC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9hbmltYXRpb25zLyIsInNvdXJjZXMiOlsibGliL3NsaWRlX2V4aXRzL3NsaWRlT3V0UmlnaHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsU0FBUyxFQUdULFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sRUFDUCxZQUFZLEVBQ2IsTUFBTSxxQkFBcUIsQ0FBQzs7QUFHN0IsTUFBTSxLQUFPLHNCQUFzQixHQUErQixTQUFTLENBQ3pFO0lBQ0UsT0FBTyxDQUNMLDhCQUE4QixFQUM5QixTQUFTLENBQUM7UUFDUixLQUFLLENBQUM7WUFDSixTQUFTLEVBQUUsc0JBQXNCO1NBQ2xDLENBQUM7UUFDRixLQUFLLENBQUM7WUFDSixTQUFTLEVBQUUseUJBQXlCO1lBQ3BDLFVBQVUsRUFBRSxRQUFRO1NBQ3JCLENBQUM7S0FDSCxDQUFDLENBQ0g7Q0FDRixFQUVELEVBQUUsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FDdkM7O0FBRUQsTUFBTSxLQUFPLGFBQWEsR0FBNkIsT0FBTyxDQUFDLGVBQWUsRUFBRTtJQUM5RSxVQUFVLENBQUMsUUFBUSxFQUFFO1FBQ25CLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQztLQUNyQyxDQUFDO0NBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgYW5pbWF0ZSxcclxuICBhbmltYXRpb24sXHJcbiAgQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEsXHJcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxyXG4gIGtleWZyYW1lcyxcclxuICBzdHlsZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIHRyaWdnZXIsXHJcbiAgdXNlQW5pbWF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlT3V0UmlnaHRBbmltYXRpb246IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0gYW5pbWF0aW9uKFxyXG4gIFtcclxuICAgIGFuaW1hdGUoXHJcbiAgICAgICd7eyB0aW1pbmcgfX1tcyB7eyBkZWxheSB9fW1zJyxcclxuICAgICAga2V5ZnJhbWVzKFtcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgwLCAwLCAwKWBcclxuICAgICAgICB9KSxcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKWAsXHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIF0pXHJcbiAgICApXHJcbiAgXVxyXG4gICxcclxuICB7IHBhcmFtczogeyB0aW1pbmc6IDEwMDAsIGRlbGF5OiAwIH0gfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlT3V0UmlnaHQ6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3NsaWRlT3V0UmlnaHQnLCBbXHJcbiAgdHJhbnNpdGlvbignKiA9PiAqJywgW1xyXG4gICAgdXNlQW5pbWF0aW9uKHNsaWRlT3V0UmlnaHRBbmltYXRpb24pXHJcbiAgXSlcclxuXSk7XHJcblxyXG4iXX0=