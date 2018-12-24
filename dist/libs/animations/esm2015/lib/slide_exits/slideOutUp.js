/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';
/** @type {?} */
export const slideOutUpAnimation = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({
            transform: `translate3d(0, 0, 0)`
        }),
        style({
            transform: `translate3d(0, -100%, 0)`,
            visibility: 'hidden'
        })
    ]))
], { params: { timing: 1000, delay: 0 } });
/** @type {?} */
export const slideOutUp = trigger('slideOutUp', [
    transition('* => *', [
        useAnimation(slideOutUpAnimation)
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVPdXRVcC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci9hbmltYXRpb25zLyIsInNvdXJjZXMiOlsibGliL3NsaWRlX2V4aXRzL3NsaWRlT3V0VXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxPQUFPLEVBQ1AsU0FBUyxFQUdULFNBQVMsRUFDVCxLQUFLLEVBQ0wsVUFBVSxFQUNWLE9BQU8sRUFDUCxZQUFZLEVBQ2IsTUFBTSxxQkFBcUIsQ0FBQzs7QUFHN0IsTUFBTSxPQUFPLG1CQUFtQixHQUErQixTQUFTLENBQ3RFO0lBQ0UsT0FBTyxDQUNMLDhCQUE4QixFQUM5QixTQUFTLENBQUM7UUFDUixLQUFLLENBQUM7WUFDSixTQUFTLEVBQUUsc0JBQXNCO1NBQ2xDLENBQUM7UUFDRixLQUFLLENBQUM7WUFDSixTQUFTLEVBQUUsMEJBQTBCO1lBQ3JDLFVBQVUsRUFBRSxRQUFRO1NBQ3JCLENBQUM7S0FDSCxDQUFDLENBQ0g7Q0FDRixFQUVELEVBQUUsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FDdkM7O0FBRUQsTUFBTSxPQUFPLFVBQVUsR0FBNkIsT0FBTyxDQUFDLFlBQVksRUFBRTtJQUN4RSxVQUFVLENBQUMsUUFBUSxFQUFFO1FBQ25CLFlBQVksQ0FBQyxtQkFBbUIsQ0FBQztLQUNsQyxDQUFDO0NBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgYW5pbWF0ZSxcclxuICBhbmltYXRpb24sXHJcbiAgQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEsXHJcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhLFxyXG4gIGtleWZyYW1lcyxcclxuICBzdHlsZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIHRyaWdnZXIsXHJcbiAgdXNlQW5pbWF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHNsaWRlT3V0VXBBbmltYXRpb246IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0gYW5pbWF0aW9uKFxyXG4gIFtcclxuICAgIGFuaW1hdGUoXHJcbiAgICAgICd7eyB0aW1pbmcgfX1tcyB7eyBkZWxheSB9fW1zJyxcclxuICAgICAga2V5ZnJhbWVzKFtcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgwLCAwLCAwKWBcclxuICAgICAgICB9KSxcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMClgLFxyXG4gICAgICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbidcclxuICAgICAgICB9KVxyXG4gICAgICBdKVxyXG4gICAgKVxyXG4gIF1cclxuICAsXHJcbiAgeyBwYXJhbXM6IHsgdGltaW5nOiAxMDAwLCBkZWxheTogMCB9IH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzbGlkZU91dFVwOiBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEgPSB0cmlnZ2VyKCdzbGlkZU91dFVwJywgW1xyXG4gIHRyYW5zaXRpb24oJyogPT4gKicsIFtcclxuICAgIHVzZUFuaW1hdGlvbihzbGlkZU91dFVwQW5pbWF0aW9uKVxyXG4gIF0pXHJcbl0pO1xyXG5cclxuIl19