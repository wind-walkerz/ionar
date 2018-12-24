/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ComponentFactoryResolver, ContentChildren, QueryList, ViewChild, ViewContainerRef } from '@angular/core';
import { SlideDirective } from './slide.directive';
import { AnimationBuilder, useAnimation } from '@angular/animations';
import { SlideComponent } from './slide.component';
import { slideInLeftAnimation, slideInRightAnimation, slideOutLeftAnimation, slideOutRightAnimation } from '@ionar/animations';
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
            ? (direction === 'next') ? useAnimation(slideInRightAnimation, { params: { timing: 500 } }) : useAnimation(slideInLeftAnimation, { params: { timing: 500 } })
            : (direction === 'next') ? useAnimation(slideOutLeftAnimation, { params: { timing: 500 } }) : useAnimation(slideOutRightAnimation, { params: { timing: 500 } });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsicGFja2FnZXMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCx3QkFBd0IsRUFFeEIsZUFBZSxFQUdmLFNBQVMsRUFDVCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsZ0JBQWdCLEVBSWhCLFlBQVksRUFDYixNQUFNLHFCQUFxQixDQUFDO0FBRTdCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLHFCQUFxQixFQUNyQixxQkFBcUIsRUFDckIsc0JBQXNCLEVBQ3ZCLE1BQU0sbUJBQW1CLENBQUM7QUFRM0IsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7Ozs7SUFZNUIsWUFDVSxFQUFxQixFQUNyQixLQUF1QixFQUN2QixVQUE0QixFQUM1QixRQUFrQztRQUhsQyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUEwQjs7UUFWNUMsVUFBSyxHQUFHLENBQUMsQ0FBQzs7UUE2QlYsa0JBQWEsR0FBRyxHQUFHLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7O3NCQUNqQixhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVk7O3NCQUNqQyxV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QUMsQ0FBQyxZQUFZLENBQUMscUJBQXFCLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBekVwSyxDQUFDOzs7O0lBRUQsUUFBUTtJQUVSLENBQUM7Ozs7SUFHRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7WUFwQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QiwwT0FBd0M7O2FBRXpDOzs7O1lBakNDLGlCQUFpQjtZQVNqQixnQkFBZ0I7WUFJaEIsZ0JBQWdCO1lBWGhCLHdCQUF3Qjs7OzRCQWtDdkIsZUFBZSxTQUFDLGNBQWM7dUJBQzlCLFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7Ozs7SUFEakQsMENBQTBFOztJQUMxRSxxQ0FBOEU7O0lBRzlFLGtDQUFVOzs7OztJQUNWLHVDQUFvQzs7Ozs7SUFDcEMseUNBQW1EOztJQTJCbkQsMENBVUU7O0lBRUYsc0NBYUU7O0lBR0YsaURBT0U7O0lBR0Ysc0NBYUU7O0lBRUYsdUNBR29LOzs7OztJQTlFbEssK0JBQTZCOzs7OztJQUM3QixrQ0FBK0I7Ozs7O0lBQy9CLHVDQUFvQzs7Ozs7SUFDcEMscUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTbGlkZURpcmVjdGl2ZSB9IGZyb20gJy4vc2xpZGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtcclxuICBBbmltYXRpb25CdWlsZGVyLFxyXG4gIEFuaW1hdGlvbkZhY3RvcnksXHJcbiAgQW5pbWF0aW9uUGxheWVyLFxyXG4gIEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhLFxyXG4gIHVzZUFuaW1hdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgU2xpZGVDb21wb25lbnQgfSBmcm9tICcuL3NsaWRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7XHJcbiAgc2xpZGVJbkxlZnRBbmltYXRpb24sXHJcbiAgc2xpZGVJblJpZ2h0QW5pbWF0aW9uLFxyXG4gIHNsaWRlT3V0TGVmdEFuaW1hdGlvbixcclxuICBzbGlkZU91dFJpZ2h0QW5pbWF0aW9uXHJcbn0gZnJvbSAnQGlvbmFyL2FuaW1hdGlvbnMnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnaW8tY2Fyb3VzZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY2Fyb3VzZWwuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIEBDb250ZW50Q2hpbGRyZW4oU2xpZGVEaXJlY3RpdmUpIGl0ZW1fZGlyX2xpc3Q6IFF1ZXJ5TGlzdDxTbGlkZURpcmVjdGl2ZT47XHJcbiAgQFZpZXdDaGlsZCgnY2Fyb3VzZWwnLCB7IHJlYWQ6IFZpZXdDb250YWluZXJSZWYgfSkgY2Fyb3VzZWw6IFZpZXdDb250YWluZXJSZWY7XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBWYXJpYWJsZXMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG4gIGluZGV4ID0gMDtcclxuICBwcml2YXRlIGFuaV9wbGF5ZXI6IEFuaW1hdGlvblBsYXllcjtcclxuICBwcml2YXRlIHNsaWRlQ29tcFJlZjogQ29tcG9uZW50UmVmPFNsaWRlQ29tcG9uZW50PjtcclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIExpZmUgQ3ljbGUgSG9vayAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHZjUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSBhbmlCdWlsZGVyOiBBbmltYXRpb25CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyXHJcbiAgKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zbGlkZUNvbXBSZWYgPSB0aGlzLmNyZWF0ZVNsaWRlQ29tcG9uZW50KHRoaXMuaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnNsaWRlQ29tcFJlZi5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTWFpbiBGdW5jdGlvbnMgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBwcmV2aW91c1NsaWRlID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuaW5kZXggIT09IDApIHtcclxuICAgICAgdGhpcy5pbmRleCAtPSAxO1xyXG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICBjb25zdCBjdXJyZW50X3NsaWRlID0gdGhpcy5zbGlkZUNvbXBSZWY7XHJcbiAgICAgIGNvbnN0IHByZXZfc2xpZGUgPSB0aGlzLnNsaWRlQ29tcFJlZiA9IHRoaXMuY3JlYXRlU2xpZGVDb21wb25lbnQodGhpcy5pbmRleCk7XHJcbiAgICAgIHRoaXMuY3JlYXRlQW5pKHByZXZfc2xpZGUsICdlbnRyYW5jZScsICdwcmV2Jyk7XHJcbiAgICAgIHRoaXMuY3JlYXRlQW5pKGN1cnJlbnRfc2xpZGUsICdleGl0JywgJ3ByZXYnKTtcclxuICAgIH1cclxuXHJcbiAgfTtcclxuXHJcbiAgbmV4dFNsaWRlID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMuaW5kZXggIT09IHRoaXMuaXRlbV9kaXJfbGlzdC50b0FycmF5KCkubGVuZ3RoIC0gMSkge1xyXG5cclxuICAgICAgdGhpcy5pbmRleCArPSAxO1xyXG5cclxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgY29uc3QgY3VycmVudF9zbGlkZSA9IHRoaXMuc2xpZGVDb21wUmVmO1xyXG4gICAgICBjb25zdCBuZXh0X3NsaWRlID0gdGhpcy5zbGlkZUNvbXBSZWYgPSB0aGlzLmNyZWF0ZVNsaWRlQ29tcG9uZW50KHRoaXMuaW5kZXgpO1xyXG5cclxuXHJcbiAgICAgIHRoaXMuY3JlYXRlQW5pKGN1cnJlbnRfc2xpZGUsICdleGl0JywgJ25leHQnKTtcclxuICAgICAgdGhpcy5jcmVhdGVBbmkobmV4dF9zbGlkZSwgJ2VudHJhbmNlJywgJ25leHQnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgY3JlYXRlU2xpZGVDb21wb25lbnQgPSBpID0+IHtcclxuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5PGFueT4oU2xpZGVDb21wb25lbnQpO1xyXG4gICAgY29uc3QgY29tcFJlZiA9IHRoaXMuY2Fyb3VzZWwuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xyXG5cclxuICAgIGNvbXBSZWYuaW5zdGFuY2UudGVtcGxhdGUgPSB0aGlzLml0ZW1fZGlyX2xpc3QudG9BcnJheSgpW2ldLnRwbFJlZjtcclxuICAgIGNvbXBSZWYuaW5zdGFuY2UubmdPbkluaXQoKTtcclxuICAgIHJldHVybiBjb21wUmVmO1xyXG4gIH07XHJcblxyXG5cclxuICBjcmVhdGVBbmkgPSAoY29tcFJlZiwgZW50cmFuY2UgPSAnZW50cmFuY2UnLCBkaXJlY3Rpb24gPSAnbmV4dCcpID0+IHtcclxuICAgIGNvbnN0IGFuaV9mYWN0b3J5OiBBbmltYXRpb25GYWN0b3J5ID0gdGhpcy5hbmlCdWlsZGVyLmJ1aWxkKHRoaXMuZ2V0QW5pVHlwZShlbnRyYW5jZSwgZGlyZWN0aW9uKSk7XHJcblxyXG4gICAgdGhpcy5hbmlfcGxheWVyID0gYW5pX2ZhY3RvcnkuY3JlYXRlKGNvbXBSZWYuaW5zdGFuY2UuZWwubmF0aXZlRWxlbWVudCk7XHJcbiAgICB0aGlzLmFuaV9wbGF5ZXIucGxheSgpO1xyXG5cclxuICAgIGlmIChlbnRyYW5jZSA9PT0gJ2V4aXQnKSB7XHJcblxyXG4gICAgICB0aGlzLmFuaV9wbGF5ZXIub25Eb25lKCgpID0+IHtcclxuICAgICAgICBjb21wUmVmLmRlc3Ryb3koKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gIH07XHJcblxyXG4gIGdldEFuaVR5cGUgPSAoZW50cmFuY2UgPSAnZW50cmFuY2UnLCBkaXJlY3Rpb24gPSAnbmV4dCcpOiBBbmltYXRpb25SZWZlcmVuY2VNZXRhZGF0YSA9PlxyXG4gICAgKGVudHJhbmNlID09PSAnZW50cmFuY2UnKVxyXG4gICAgICA/IChkaXJlY3Rpb24gPT09ICduZXh0JykgPyB1c2VBbmltYXRpb24oc2xpZGVJblJpZ2h0QW5pbWF0aW9uLCB7IHBhcmFtczogeyB0aW1pbmc6IDUwMCB9IH0pIDogdXNlQW5pbWF0aW9uKHNsaWRlSW5MZWZ0QW5pbWF0aW9uLCB7IHBhcmFtczogeyB0aW1pbmc6IDUwMCB9IH0pXHJcbiAgICAgIDogKGRpcmVjdGlvbiA9PT0gJ25leHQnKSA/IHVzZUFuaW1hdGlvbihzbGlkZU91dExlZnRBbmltYXRpb24sIHsgcGFyYW1zOiB7IHRpbWluZzogNTAwIH0gfSkgOiB1c2VBbmltYXRpb24oc2xpZGVPdXRSaWdodEFuaW1hdGlvbiwgeyBwYXJhbXM6IHsgdGltaW5nOiA1MDAgfSB9KTtcclxuXHJcblxyXG59XHJcbiJdfQ==