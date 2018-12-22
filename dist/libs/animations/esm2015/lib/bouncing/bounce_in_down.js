/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { animate, animation, keyframes, style, transition, trigger, useAnimation } from '@angular/animations';
/** @type {?} */
export const bounce_in_down = animation([
    animate('{{ timing }}ms {{ delay }}ms', keyframes([
        style({
            animationTimingFunction: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
            transform: `translate3d(0, -800%, 0)`,
            offset: 0
        }),
        style({
            animationTimingFunction: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
            transform: 'translate3d(0, 2.5rem, 0)',
            offset: 0.6
        }),
        style({
            animationTimingFunction: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
            transform: 'translate3d(0, -1rem, 0)',
            offset: 0.75
        }),
        style({
            animationTimingFunction: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
            transform: 'translate3d(0, .5rem, 0)',
            offset: 0.9
        }),
        style({
            animationTimingFunction: `cubic-bezier(0.215, 0.61, 0.355, 1)`,
            transform: `translate3d(0, 0, 0)`,
            offset: 1
        })
    ]))
], { params: { timing: 1000, delay: 0 } });
/** @type {?} */
export const bounce_in_down_trigger = trigger('bounce_in_down', [
    transition('* => *', [
        useAnimation(bounce_in_down)
    ])
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm91bmNlX2luX2Rvd24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvYW5pbWF0aW9ucy8iLCJzb3VyY2VzIjpbImxpYi9ib3VuY2luZy9ib3VuY2VfaW5fZG93bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxTQUFTLEVBR1QsU0FBUyxFQUNULEtBQUssRUFDTCxVQUFVLEVBQ1YsT0FBTyxFQUNQLFlBQVksRUFDYixNQUFNLHFCQUFxQixDQUFDOztBQUc3QixNQUFNLE9BQU8sY0FBYyxHQUErQixTQUFTLENBQ2pFO0lBQ0UsT0FBTyxDQUNMLDhCQUE4QixFQUM5QixTQUFTLENBQUM7UUFFUixLQUFLLENBQUM7WUFDSix1QkFBdUIsRUFBRSxxQ0FBcUM7WUFDOUQsU0FBUyxFQUFFLDBCQUEwQjtZQUNyQyxNQUFNLEVBQUUsQ0FBQztTQUNWLENBQUM7UUFDRixLQUFLLENBQUM7WUFDSix1QkFBdUIsRUFBRSxxQ0FBcUM7WUFDOUQsU0FBUyxFQUFFLDJCQUEyQjtZQUN0QyxNQUFNLEVBQUUsR0FBRztTQUNaLENBQUM7UUFDRixLQUFLLENBQUM7WUFDSix1QkFBdUIsRUFBRSxxQ0FBcUM7WUFDOUQsU0FBUyxFQUFFLDBCQUEwQjtZQUNyQyxNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUM7UUFDRixLQUFLLENBQUM7WUFDSix1QkFBdUIsRUFBRSxxQ0FBcUM7WUFDOUQsU0FBUyxFQUFFLDBCQUEwQjtZQUNyQyxNQUFNLEVBQUUsR0FBRztTQUNaLENBQUM7UUFDRixLQUFLLENBQUM7WUFDSix1QkFBdUIsRUFBRSxxQ0FBcUM7WUFDOUQsU0FBUyxFQUFFLHNCQUFzQjtZQUNqQyxNQUFNLEVBQUUsQ0FBQztTQUNWLENBQUM7S0FDSCxDQUFDLENBQ0g7Q0FDRixFQUVELEVBQUUsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FDdkM7O0FBRUQsTUFBTSxPQUFPLHNCQUFzQixHQUE2QixPQUFPLENBQUMsZ0JBQWdCLEVBQUU7SUFDeEYsVUFBVSxDQUFDLFFBQVEsRUFBRTtRQUNuQixZQUFZLENBQUMsY0FBYyxDQUFDO0tBQzdCLENBQUM7Q0FDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBhbmltYXRlLFxyXG4gIGFuaW1hdGlvbixcclxuICBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YSxcclxuICBBbmltYXRpb25UcmlnZ2VyTWV0YWRhdGEsXHJcbiAga2V5ZnJhbWVzLFxyXG4gIHN0eWxlLFxyXG4gIHRyYW5zaXRpb24sXHJcbiAgdHJpZ2dlcixcclxuICB1c2VBbmltYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgYm91bmNlX2luX2Rvd246IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0gYW5pbWF0aW9uKFxyXG4gIFtcclxuICAgIGFuaW1hdGUoXHJcbiAgICAgICd7eyB0aW1pbmcgfX1tcyB7eyBkZWxheSB9fW1zJyxcclxuICAgICAga2V5ZnJhbWVzKFtcclxuXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246IGBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKWAsXHJcbiAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgwLCAtODAwJSwgMClgLFxyXG4gICAgICAgICAgb2Zmc2V0OiAwXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246IGBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKWAsXHJcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAyLjVyZW0sIDApJyxcclxuICAgICAgICAgIG9mZnNldDogMC42XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246IGBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKWAsXHJcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAtMXJlbSwgMCknLFxyXG4gICAgICAgICAgb2Zmc2V0OiAwLjc1XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgc3R5bGUoe1xyXG4gICAgICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246IGBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEsIDAuMzU1LCAxKWAsXHJcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgwLCAuNXJlbSwgMCknLFxyXG4gICAgICAgICAgb2Zmc2V0OiAwLjlcclxuICAgICAgICB9KSxcclxuICAgICAgICBzdHlsZSh7XHJcbiAgICAgICAgICBhbmltYXRpb25UaW1pbmdGdW5jdGlvbjogYGN1YmljLWJlemllcigwLjIxNSwgMC42MSwgMC4zNTUsIDEpYCxcclxuICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZTNkKDAsIDAsIDApYCxcclxuICAgICAgICAgIG9mZnNldDogMVxyXG4gICAgICAgIH0pXHJcbiAgICAgIF0pXHJcbiAgICApXHJcbiAgXVxyXG4gICxcclxuICB7IHBhcmFtczogeyB0aW1pbmc6IDEwMDAsIGRlbGF5OiAwIH0gfVxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJvdW5jZV9pbl9kb3duX3RyaWdnZXI6IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ2JvdW5jZV9pbl9kb3duJywgW1xyXG4gIHRyYW5zaXRpb24oJyogPT4gKicsIFtcclxuICAgIHVzZUFuaW1hdGlvbihib3VuY2VfaW5fZG93bilcclxuICBdKVxyXG5dKTtcclxuXHJcbiJdfQ==