/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animateChild, animation, group, keyframes, query, style, transition, trigger, useAnimation } from '@angular/animations';
/** @type {?} */
export const slideInRightAnimation = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({
            transform: `translate3d(100%, 0, 0)`,
            visibility: 'visible'
        }),
        style({
            transform: `translate3d(0, 0, 0)`
        })
    ]))
], { params: { timing: 1000, delay: 0 } });
/** @type {?} */
export const slideInRight = trigger('slideInRight', [
    transition('* => *', [
        group([
            query('*', useAnimation(slideInRightAnimation)),
            query('*', animateChild())
        ])
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVJblJpZ2h0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2FuaW1hdGlvbnMvIiwic291cmNlcyI6WyJsaWIvc2xpZGVfZW50cmFuY2VzL3NsaWRlSW5SaWdodC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxZQUFZLEVBQ1osU0FBUyxFQUdULEtBQUssRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNQLFlBQVksRUFDYixNQUFNLHFCQUFxQixDQUFDOztBQUc3QixNQUFNLE9BQU8scUJBQXFCLEdBQStCLFNBQVMsQ0FDeEU7SUFDRSxPQUFPLENBQ0wsOEJBQThCLEVBQzlCLFNBQVMsQ0FBQztRQUNSLEtBQUssQ0FBQztZQUNKLFNBQVMsRUFBRSx5QkFBeUI7WUFDcEMsVUFBVSxFQUFFLFNBQVM7U0FDdEIsQ0FBQztRQUNGLEtBQUssQ0FBQztZQUNKLFNBQVMsRUFBRSxzQkFBc0I7U0FDbEMsQ0FBQztLQUNILENBQUMsQ0FDSDtDQUNGLEVBRUQsRUFBRSxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUN2Qzs7QUFFRCxNQUFNLE9BQU8sWUFBWSxHQUE2QixPQUFPLENBQUMsY0FBYyxFQUFFO0lBQzVFLFVBQVUsQ0FBQyxRQUFRLEVBQUU7UUFDbkIsS0FBSyxDQUFDO1lBQ0osS0FBSyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUMvQyxLQUFLLENBQUMsR0FBRyxFQUFFLFlBQVksRUFBRSxDQUFDO1NBQzNCLENBQUM7S0FDSCxDQUFDO0NBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgYW5pbWF0ZSxcclxuICBhbmltYXRlQ2hpbGQsXHJcbiAgYW5pbWF0aW9uLFxyXG4gIEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhLFxyXG4gIEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSxcclxuICBncm91cCxcclxuICBrZXlmcmFtZXMsXHJcbiAgcXVlcnksXHJcbiAgc3R5bGUsXHJcbiAgdHJhbnNpdGlvbixcclxuICB0cmlnZ2VyLFxyXG4gIHVzZUFuaW1hdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZUluUmlnaHRBbmltYXRpb246IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0gYW5pbWF0aW9uKFxyXG4gIFtcclxuICAgIGFuaW1hdGUoXHJcbiAgICAgICd7eyB0aW1pbmcgfX1tcyB7eyBkZWxheSB9fW1zJyxcclxuICAgICAga2V5ZnJhbWVzKFtcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKWAsXHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZSdcclxuICAgICAgICB9KSxcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgwLCAwLCAwKWBcclxuICAgICAgICB9KVxyXG4gICAgICBdKVxyXG4gICAgKVxyXG4gIF1cclxuICAsXHJcbiAgeyBwYXJhbXM6IHsgdGltaW5nOiAxMDAwLCBkZWxheTogMCB9IH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZUluUmlnaHQ6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ3NsaWRlSW5SaWdodCcsIFtcclxuICB0cmFuc2l0aW9uKCcqID0+IConLCBbXHJcbiAgICBncm91cChbXHJcbiAgICAgIHF1ZXJ5KCcqJywgdXNlQW5pbWF0aW9uKHNsaWRlSW5SaWdodEFuaW1hdGlvbikpLFxyXG4gICAgICBxdWVyeSgnKicsIGFuaW1hdGVDaGlsZCgpKVxyXG4gICAgXSlcclxuICBdKVxyXG5dKTtcclxuXHJcbiJdfQ==