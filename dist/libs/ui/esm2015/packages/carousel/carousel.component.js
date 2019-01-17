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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsicGFja2FnZXMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCx3QkFBd0IsRUFFeEIsZUFBZSxFQUdmLFNBQVMsRUFDVCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsZ0JBQWdCLEVBSWhCLFlBQVksRUFDYixNQUFNLHFCQUFxQixDQUFDO0FBRTdCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLHFCQUFxQixFQUNyQixxQkFBcUIsRUFDckIsc0JBQXNCLEVBQ3ZCLE1BQU0sbUJBQW1CLENBQUM7QUFTM0IsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7Ozs7SUFZNUIsWUFDVSxFQUFxQixFQUNyQixLQUF1QixFQUN2QixVQUE0QixFQUM1QixRQUFrQztRQUhsQyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUEwQjs7UUFWNUMsVUFBSyxHQUFHLENBQUMsQ0FBQzs7UUE2QlYsa0JBQWEsR0FBRyxHQUFHLEVBQUU7WUFDbkIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLENBQUMsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7O3NCQUNqQixhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVk7O3NCQUNqQyxV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QUMsQ0FBQyxZQUFZLENBQUMscUJBQXFCLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBekVwSyxDQUFDOzs7O0lBRUQsUUFBUTtJQUVSLENBQUM7Ozs7SUFHRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM5QixDQUFDOzs7WUFwQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QiwwT0FBd0M7O2FBRXpDOzs7O1lBbENDLGlCQUFpQjtZQVNqQixnQkFBZ0I7WUFJaEIsZ0JBQWdCO1lBWGhCLHdCQUF3Qjs7OzRCQW1DdkIsZUFBZSxTQUFDLGNBQWM7dUJBQzlCLFNBQVMsU0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUU7Ozs7SUFEakQsMENBQTBFOztJQUMxRSxxQ0FBOEU7O0lBRzlFLGtDQUFVOzs7OztJQUNWLHVDQUFvQzs7Ozs7SUFDcEMseUNBQW1EOztJQTJCbkQsMENBVUU7O0lBRUYsc0NBYUU7O0lBR0YsaURBT0U7O0lBR0Ysc0NBYUU7O0lBRUYsdUNBR29LOzs7OztJQTlFbEssK0JBQTZCOzs7OztJQUM3QixrQ0FBK0I7Ozs7O0lBQy9CLHVDQUFvQzs7Ozs7SUFDcEMscUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTbGlkZURpcmVjdGl2ZSB9IGZyb20gJy4vc2xpZGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtcclxuICBBbmltYXRpb25CdWlsZGVyLFxyXG4gIEFuaW1hdGlvbkZhY3RvcnksXHJcbiAgQW5pbWF0aW9uUGxheWVyLFxyXG4gIEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhLFxyXG4gIHVzZUFuaW1hdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuaW1wb3J0IHsgU2xpZGVDb21wb25lbnQgfSBmcm9tICcuL3NsaWRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7XHJcbiAgc2xpZGVJbkxlZnRBbmltYXRpb24sXHJcbiAgc2xpZGVJblJpZ2h0QW5pbWF0aW9uLFxyXG4gIHNsaWRlT3V0TGVmdEFuaW1hdGlvbixcclxuICBzbGlkZU91dFJpZ2h0QW5pbWF0aW9uXHJcbn0gZnJvbSAnQGlvbmFyL2FuaW1hdGlvbnMnO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lvLWNhcm91c2VsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKFNsaWRlRGlyZWN0aXZlKSBpdGVtX2Rpcl9saXN0OiBRdWVyeUxpc3Q8U2xpZGVEaXJlY3RpdmU+O1xyXG4gIEBWaWV3Q2hpbGQoJ2Nhcm91c2VsJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIGNhcm91c2VsOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuICBpbmRleCA9IDA7XHJcbiAgcHJpdmF0ZSBhbmlfcGxheWVyOiBBbmltYXRpb25QbGF5ZXI7XHJcbiAgcHJpdmF0ZSBzbGlkZUNvbXBSZWY6IENvbXBvbmVudFJlZjxTbGlkZUNvbXBvbmVudD47XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgYW5pQnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlcixcclxuICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2xpZGVDb21wUmVmID0gdGhpcy5jcmVhdGVTbGlkZUNvbXBvbmVudCh0aGlzLmluZGV4KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5zbGlkZUNvbXBSZWYuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1haW4gRnVuY3Rpb25zICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgcHJldmlvdXNTbGlkZSA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLmluZGV4ICE9PSAwKSB7XHJcbiAgICAgIHRoaXMuaW5kZXggLT0gMTtcclxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgY29uc3QgY3VycmVudF9zbGlkZSA9IHRoaXMuc2xpZGVDb21wUmVmO1xyXG4gICAgICBjb25zdCBwcmV2X3NsaWRlID0gdGhpcy5zbGlkZUNvbXBSZWYgPSB0aGlzLmNyZWF0ZVNsaWRlQ29tcG9uZW50KHRoaXMuaW5kZXgpO1xyXG4gICAgICB0aGlzLmNyZWF0ZUFuaShwcmV2X3NsaWRlLCAnZW50cmFuY2UnLCAncHJldicpO1xyXG4gICAgICB0aGlzLmNyZWF0ZUFuaShjdXJyZW50X3NsaWRlLCAnZXhpdCcsICdwcmV2Jyk7XHJcbiAgICB9XHJcblxyXG4gIH07XHJcblxyXG4gIG5leHRTbGlkZSA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLmluZGV4ICE9PSB0aGlzLml0ZW1fZGlyX2xpc3QudG9BcnJheSgpLmxlbmd0aCAtIDEpIHtcclxuXHJcbiAgICAgIHRoaXMuaW5kZXggKz0gMTtcclxuXHJcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRfc2xpZGUgPSB0aGlzLnNsaWRlQ29tcFJlZjtcclxuICAgICAgY29uc3QgbmV4dF9zbGlkZSA9IHRoaXMuc2xpZGVDb21wUmVmID0gdGhpcy5jcmVhdGVTbGlkZUNvbXBvbmVudCh0aGlzLmluZGV4KTtcclxuXHJcblxyXG4gICAgICB0aGlzLmNyZWF0ZUFuaShjdXJyZW50X3NsaWRlLCAnZXhpdCcsICduZXh0Jyk7XHJcbiAgICAgIHRoaXMuY3JlYXRlQW5pKG5leHRfc2xpZGUsICdlbnRyYW5jZScsICduZXh0Jyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gIGNyZWF0ZVNsaWRlQ29tcG9uZW50ID0gaSA9PiB7XHJcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxhbnk+KFNsaWRlQ29tcG9uZW50KTtcclxuICAgIGNvbnN0IGNvbXBSZWYgPSB0aGlzLmNhcm91c2VsLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcclxuXHJcbiAgICBjb21wUmVmLmluc3RhbmNlLnRlbXBsYXRlID0gdGhpcy5pdGVtX2Rpcl9saXN0LnRvQXJyYXkoKVtpXS50cGxSZWY7XHJcbiAgICBjb21wUmVmLmluc3RhbmNlLm5nT25Jbml0KCk7XHJcbiAgICByZXR1cm4gY29tcFJlZjtcclxuICB9O1xyXG5cclxuXHJcbiAgY3JlYXRlQW5pID0gKGNvbXBSZWYsIGVudHJhbmNlID0gJ2VudHJhbmNlJywgZGlyZWN0aW9uID0gJ25leHQnKSA9PiB7XHJcbiAgICBjb25zdCBhbmlfZmFjdG9yeTogQW5pbWF0aW9uRmFjdG9yeSA9IHRoaXMuYW5pQnVpbGRlci5idWlsZCh0aGlzLmdldEFuaVR5cGUoZW50cmFuY2UsIGRpcmVjdGlvbikpO1xyXG5cclxuICAgIHRoaXMuYW5pX3BsYXllciA9IGFuaV9mYWN0b3J5LmNyZWF0ZShjb21wUmVmLmluc3RhbmNlLmVsLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgdGhpcy5hbmlfcGxheWVyLnBsYXkoKTtcclxuXHJcbiAgICBpZiAoZW50cmFuY2UgPT09ICdleGl0Jykge1xyXG5cclxuICAgICAgdGhpcy5hbmlfcGxheWVyLm9uRG9uZSgoKSA9PiB7XHJcbiAgICAgICAgY29tcFJlZi5kZXN0cm95KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICB9O1xyXG5cclxuICBnZXRBbmlUeXBlID0gKGVudHJhbmNlID0gJ2VudHJhbmNlJywgZGlyZWN0aW9uID0gJ25leHQnKTogQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEgPT5cclxuICAgIChlbnRyYW5jZSA9PT0gJ2VudHJhbmNlJylcclxuICAgICAgPyAoZGlyZWN0aW9uID09PSAnbmV4dCcpID8gdXNlQW5pbWF0aW9uKHNsaWRlSW5SaWdodEFuaW1hdGlvbiwgeyBwYXJhbXM6IHsgdGltaW5nOiA1MDAgfSB9KSA6IHVzZUFuaW1hdGlvbihzbGlkZUluTGVmdEFuaW1hdGlvbiwgeyBwYXJhbXM6IHsgdGltaW5nOiA1MDAgfSB9KVxyXG4gICAgICA6IChkaXJlY3Rpb24gPT09ICduZXh0JykgPyB1c2VBbmltYXRpb24oc2xpZGVPdXRMZWZ0QW5pbWF0aW9uLCB7IHBhcmFtczogeyB0aW1pbmc6IDUwMCB9IH0pIDogdXNlQW5pbWF0aW9uKHNsaWRlT3V0UmlnaHRBbmltYXRpb24sIHsgcGFyYW1zOiB7IHRpbWluZzogNTAwIH0gfSk7XHJcblxyXG5cclxufVxyXG4iXX0=