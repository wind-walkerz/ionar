/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ComponentFactoryResolver, ContentChildren, QueryList, ViewChild, ViewContainerRef } from '@angular/core';
import { SlideDirective } from './slide.directive';
import { AnimationBuilder, useAnimation } from '@angular/animations';
import { slide_in_left, slide_in_right, slide_out_left, slide_out_right } from '@aurora-ngx/animations';
import { SlideComponent } from './slide.component';
export class CarouselComponent {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    /**
     * @param {?} cd
     * @param {?} vcRef
     * @param {?} aniBuilder
     * @param {?} resolver
     */
    constructor(cd, vcRef, aniBuilder, resolver) {
        this.cd = cd;
        this.vcRef = vcRef;
        this.aniBuilder = aniBuilder;
        this.resolver = resolver;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.index = 0;
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.previousSlide = () => {
            if (this.index !== 0) {
                this.index -= 1;
                this.cd.markForCheck();
                /** @type {?} */
                const current_slide = this.slideCompRef;
                /** @type {?} */
                const prev_slide = this.slideCompRef = this.createSlideComponent(this.index);
                this.createAni(prev_slide, 'entrance', 'prev');
                this.createAni(current_slide, 'exit', 'prev');
            }
        };
        this.nextSlide = () => {
            if (this.index !== this.item_dir_list.toArray().length - 1) {
                this.index += 1;
                this.cd.markForCheck();
                /** @type {?} */
                const current_slide = this.slideCompRef;
                /** @type {?} */
                const next_slide = this.slideCompRef = this.createSlideComponent(this.index);
                this.createAni(current_slide, 'exit', 'next');
                this.createAni(next_slide, 'entrance', 'next');
            }
        };
        this.createSlideComponent = i => {
            /** @type {?} */
            const factory = this.resolver.resolveComponentFactory(SlideComponent);
            /** @type {?} */
            const compRef = this.carousel.createComponent(factory);
            compRef.instance.template = this.item_dir_list.toArray()[i].tplRef;
            compRef.instance.ngOnInit();
            return compRef;
        };
        this.createAni = (compRef, entrance = 'entrance', direction = 'next') => {
            /** @type {?} */
            const ani_factory = this.aniBuilder.build(this.getAniType(entrance, direction));
            this.ani_player = ani_factory.create(compRef.instance.el.nativeElement);
            this.ani_player.play();
            if (entrance === 'exit') {
                this.ani_player.onDone(() => {
                    compRef.destroy();
                });
            }
        };
        this.getAniType = (entrance = 'entrance', direction = 'next') => (entrance === 'entrance')
            ? (direction === 'next') ? useAnimation(slide_in_right, { params: { timing: 500 } }) : useAnimation(slide_in_left, { params: { timing: 500 } })
            : (direction === 'next') ? useAnimation(slide_out_left, { params: { timing: 500 } }) : useAnimation(slide_out_right, { params: { timing: 500 } });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.slideCompRef = this.createSlideComponent(this.index);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.slideCompRef.destroy();
    }
}
CarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-carousel',
                template: "<div class=\"arrow-left\" (click)=\"previousSlide()\">\r\n   <\r\n</div>\r\n\r\n<ng-container  #carousel>\r\n\r\n</ng-container>\r\n\r\n\r\n\r\n<div class=\"arrow-right\" (click)=\"nextSlide()\">\r\n    >\r\n</div>\r\n\r\n",
                styles: [":host{background-color:transparent;display:flex;position:relative;min-height:300px;min-width:700px}.arrow-left,.arrow-right{cursor:pointer;display:flex;align-items:center;font-size:2.5rem;position:absolute;height:100%;z-index:2;width:10rem}.arrow-left .fa-chevron-left,.arrow-left fa-chevron-right,.arrow-right .fa-chevron-left,.arrow-right fa-chevron-right{color:#000}.arrow-left{left:0}.arrow-right{right:0}"]
            }] }
];
/** @nocollapse */
CarouselComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ViewContainerRef },
    { type: AnimationBuilder },
    { type: ComponentFactoryResolver }
];
CarouselComponent.propDecorators = {
    item_dir_list: [{ type: ContentChildren, args: [SlideDirective,] }],
    carousel: [{ type: ViewChild, args: ['carousel', { read: ViewContainerRef },] }]
};
if (false) {
    /** @type {?} */
    CarouselComponent.prototype.item_dir_list;
    /** @type {?} */
    CarouselComponent.prototype.carousel;
    /** @type {?} */
    CarouselComponent.prototype.index;
    /**
     * @type {?}
     * @private
     */
    CarouselComponent.prototype.ani_player;
    /**
     * @type {?}
     * @private
     */
    CarouselComponent.prototype.slideCompRef;
    /** @type {?} */
    CarouselComponent.prototype.previousSlide;
    /** @type {?} */
    CarouselComponent.prototype.nextSlide;
    /** @type {?} */
    CarouselComponent.prototype.createSlideComponent;
    /** @type {?} */
    CarouselComponent.prototype.createAni;
    /** @type {?} */
    CarouselComponent.prototype.getAniType;
    /**
     * @type {?}
     * @private
     */
    CarouselComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    CarouselComponent.prototype.vcRef;
    /**
     * @type {?}
     * @private
     */
    CarouselComponent.prototype.aniBuilder;
    /**
     * @type {?}
     * @private
     */
    CarouselComponent.prototype.resolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsicGFja2FnZXMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCx3QkFBd0IsRUFFeEIsZUFBZSxFQUdmLFNBQVMsRUFDVCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsZ0JBQWdCLEVBSWhCLFlBQVksRUFDYixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFRbkQsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7Ozs7SUFZNUIsWUFDVSxFQUFxQixFQUNyQixLQUF1QixFQUN2QixVQUE0QixFQUM1QixRQUFrQztRQUhsQyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUEwQjs7UUFWNUMsVUFBSyxHQUFHLENBQUMsQ0FBQzs7UUE2QlYsa0JBQWEsR0FBRyxHQUFHLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7O3NCQUNqQixhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVk7O3NCQUNqQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDNUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDL0M7UUFFSCxDQUFDLENBQUM7UUFFRixjQUFTLEdBQUcsR0FBRyxFQUFFO1lBQ2YsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFFMUQsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7Z0JBRWhCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7O3NCQUNqQixhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVk7O3NCQUNqQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFHNUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDaEQ7UUFDSCxDQUFDLENBQUM7UUFHRix5QkFBb0IsR0FBRyxDQUFDLENBQUMsRUFBRTs7a0JBQ25CLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFNLGNBQWMsQ0FBQzs7a0JBQ3BFLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUM7WUFFdEQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDbkUsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUM1QixPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLENBQUM7UUFHRixjQUFTLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxHQUFHLFVBQVUsRUFBRSxTQUFTLEdBQUcsTUFBTSxFQUFFLEVBQUU7O2tCQUMzRCxXQUFXLEdBQXFCLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBRWpHLElBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4RSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRXZCLElBQUksUUFBUSxLQUFLLE1BQU0sRUFBRTtnQkFFdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFO29CQUMxQixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3BCLENBQUMsQ0FBQyxDQUFDO2FBQ0o7UUFFSCxDQUFDLENBQUM7UUFFRixlQUFVLEdBQUcsQ0FBQyxRQUFRLEdBQUcsVUFBVSxFQUFFLFNBQVMsR0FBRyxNQUFNLEVBQThCLEVBQUUsQ0FDckYsQ0FBQyxRQUFRLEtBQUssVUFBVSxDQUFDO1lBQ3ZCLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztZQUMvSSxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxjQUFjLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQXpFdEosQ0FBQzs7OztJQUVELFFBQVE7SUFFUixDQUFDOzs7O0lBR0QsZUFBZTtRQUNiLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7O1lBcENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsME9BQXdDOzthQUV6Qzs7OztZQTNCQyxpQkFBaUI7WUFTakIsZ0JBQWdCO1lBSWhCLGdCQUFnQjtZQVhoQix3QkFBd0I7Ozs0QkE0QnZCLGVBQWUsU0FBQyxjQUFjO3VCQUM5QixTQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOzs7O0lBRGpELDBDQUEwRTs7SUFDMUUscUNBQThFOztJQUc5RSxrQ0FBVTs7Ozs7SUFDVix1Q0FBb0M7Ozs7O0lBQ3BDLHlDQUFtRDs7SUEyQm5ELDBDQVVFOztJQUVGLHNDQWFFOztJQUdGLGlEQU9FOztJQUdGLHNDQWFFOztJQUVGLHVDQUdzSjs7Ozs7SUE5RXBKLCtCQUE2Qjs7Ozs7SUFDN0Isa0NBQStCOzs7OztJQUMvQix1Q0FBb0M7Ozs7O0lBQ3BDLHFDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIENvbXBvbmVudFJlZixcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBRdWVyeUxpc3QsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2xpZGVEaXJlY3RpdmUgfSBmcm9tICcuL3NsaWRlLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7XHJcbiAgQW5pbWF0aW9uQnVpbGRlcixcclxuICBBbmltYXRpb25GYWN0b3J5LFxyXG4gIEFuaW1hdGlvblBsYXllcixcclxuICBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YSxcclxuICB1c2VBbmltYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgc2xpZGVfaW5fbGVmdCwgc2xpZGVfaW5fcmlnaHQsIHNsaWRlX291dF9sZWZ0LCBzbGlkZV9vdXRfcmlnaHQgfSBmcm9tICdAYXVyb3JhLW5neC9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgU2xpZGVDb21wb25lbnQgfSBmcm9tICcuL3NsaWRlLmNvbXBvbmVudCc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpby1jYXJvdXNlbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihTbGlkZURpcmVjdGl2ZSkgaXRlbV9kaXJfbGlzdDogUXVlcnlMaXN0PFNsaWRlRGlyZWN0aXZlPjtcclxuICBAVmlld0NoaWxkKCdjYXJvdXNlbCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSBjYXJvdXNlbDogVmlld0NvbnRhaW5lclJlZjtcclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcbiAgaW5kZXggPSAwO1xyXG4gIHByaXZhdGUgYW5pX3BsYXllcjogQW5pbWF0aW9uUGxheWVyO1xyXG4gIHByaXZhdGUgc2xpZGVDb21wUmVmOiBDb21wb25lbnRSZWY8U2xpZGVDb21wb25lbnQ+O1xyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIGFuaUJ1aWxkZXI6IEFuaW1hdGlvbkJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNsaWRlQ29tcFJlZiA9IHRoaXMuY3JlYXRlU2xpZGVDb21wb25lbnQodGhpcy5pbmRleCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc2xpZGVDb21wUmVmLmRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIHByZXZpb3VzU2xpZGUgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5pbmRleCAhPT0gMCkge1xyXG4gICAgICB0aGlzLmluZGV4IC09IDE7XHJcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRfc2xpZGUgPSB0aGlzLnNsaWRlQ29tcFJlZjtcclxuICAgICAgY29uc3QgcHJldl9zbGlkZSA9IHRoaXMuc2xpZGVDb21wUmVmID0gdGhpcy5jcmVhdGVTbGlkZUNvbXBvbmVudCh0aGlzLmluZGV4KTtcclxuICAgICAgdGhpcy5jcmVhdGVBbmkocHJldl9zbGlkZSwgJ2VudHJhbmNlJywgJ3ByZXYnKTtcclxuICAgICAgdGhpcy5jcmVhdGVBbmkoY3VycmVudF9zbGlkZSwgJ2V4aXQnLCAncHJldicpO1xyXG4gICAgfVxyXG5cclxuICB9O1xyXG5cclxuICBuZXh0U2xpZGUgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5pbmRleCAhPT0gdGhpcy5pdGVtX2Rpcl9saXN0LnRvQXJyYXkoKS5sZW5ndGggLSAxKSB7XHJcblxyXG4gICAgICB0aGlzLmluZGV4ICs9IDE7XHJcblxyXG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICBjb25zdCBjdXJyZW50X3NsaWRlID0gdGhpcy5zbGlkZUNvbXBSZWY7XHJcbiAgICAgIGNvbnN0IG5leHRfc2xpZGUgPSB0aGlzLnNsaWRlQ29tcFJlZiA9IHRoaXMuY3JlYXRlU2xpZGVDb21wb25lbnQodGhpcy5pbmRleCk7XHJcblxyXG5cclxuICAgICAgdGhpcy5jcmVhdGVBbmkoY3VycmVudF9zbGlkZSwgJ2V4aXQnLCAnbmV4dCcpO1xyXG4gICAgICB0aGlzLmNyZWF0ZUFuaShuZXh0X3NsaWRlLCAnZW50cmFuY2UnLCAnbmV4dCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICBjcmVhdGVTbGlkZUNvbXBvbmVudCA9IGkgPT4ge1xyXG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55PihTbGlkZUNvbXBvbmVudCk7XHJcbiAgICBjb25zdCBjb21wUmVmID0gdGhpcy5jYXJvdXNlbC5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XHJcblxyXG4gICAgY29tcFJlZi5pbnN0YW5jZS50ZW1wbGF0ZSA9IHRoaXMuaXRlbV9kaXJfbGlzdC50b0FycmF5KClbaV0udHBsUmVmO1xyXG4gICAgY29tcFJlZi5pbnN0YW5jZS5uZ09uSW5pdCgpO1xyXG4gICAgcmV0dXJuIGNvbXBSZWY7XHJcbiAgfTtcclxuXHJcblxyXG4gIGNyZWF0ZUFuaSA9IChjb21wUmVmLCBlbnRyYW5jZSA9ICdlbnRyYW5jZScsIGRpcmVjdGlvbiA9ICduZXh0JykgPT4ge1xyXG4gICAgY29uc3QgYW5pX2ZhY3Rvcnk6IEFuaW1hdGlvbkZhY3RvcnkgPSB0aGlzLmFuaUJ1aWxkZXIuYnVpbGQodGhpcy5nZXRBbmlUeXBlKGVudHJhbmNlLCBkaXJlY3Rpb24pKTtcclxuXHJcbiAgICB0aGlzLmFuaV9wbGF5ZXIgPSBhbmlfZmFjdG9yeS5jcmVhdGUoY29tcFJlZi5pbnN0YW5jZS5lbC5uYXRpdmVFbGVtZW50KTtcclxuICAgIHRoaXMuYW5pX3BsYXllci5wbGF5KCk7XHJcblxyXG4gICAgaWYgKGVudHJhbmNlID09PSAnZXhpdCcpIHtcclxuXHJcbiAgICAgIHRoaXMuYW5pX3BsYXllci5vbkRvbmUoKCkgPT4ge1xyXG4gICAgICAgIGNvbXBSZWYuZGVzdHJveSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgfTtcclxuXHJcbiAgZ2V0QW5pVHlwZSA9IChlbnRyYW5jZSA9ICdlbnRyYW5jZScsIGRpcmVjdGlvbiA9ICduZXh0Jyk6IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0+XHJcbiAgICAoZW50cmFuY2UgPT09ICdlbnRyYW5jZScpXHJcbiAgICAgID8gKGRpcmVjdGlvbiA9PT0gJ25leHQnKSA/IHVzZUFuaW1hdGlvbihzbGlkZV9pbl9yaWdodCwgeyBwYXJhbXM6IHsgdGltaW5nOiA1MDAgfSB9KSA6IHVzZUFuaW1hdGlvbihzbGlkZV9pbl9sZWZ0LCB7IHBhcmFtczogeyB0aW1pbmc6IDUwMCB9IH0pXHJcbiAgICAgIDogKGRpcmVjdGlvbiA9PT0gJ25leHQnKSA/IHVzZUFuaW1hdGlvbihzbGlkZV9vdXRfbGVmdCwgeyBwYXJhbXM6IHsgdGltaW5nOiA1MDAgfSB9KSA6IHVzZUFuaW1hdGlvbihzbGlkZV9vdXRfcmlnaHQsIHsgcGFyYW1zOiB7IHRpbWluZzogNTAwIH0gfSk7XHJcblxyXG5cclxufVxyXG4iXX0=