"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var slide_directive_1 = require("./slide.directive");
var animations_1 = require("@angular/animations");
var slide_component_1 = require("./slide.component");
var animations_2 = require("@ionar/animations");
var CarouselComponent = /** @class */ (function () {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    function CarouselComponent(cd, vcRef, aniBuilder, resolver) {
        var _this = this;
        this.cd = cd;
        this.vcRef = vcRef;
        this.aniBuilder = aniBuilder;
        this.resolver = resolver;
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.index = 0;
        ///-----------------------------------------------  Main Functions   -----------------------------------------------///
        this.previousSlide = function () {
            if (_this.index !== 0) {
                _this.index -= 1;
                _this.cd.markForCheck();
                /** @type {?} */
                var current_slide = _this.slideCompRef;
                /** @type {?} */
                var prev_slide = _this.slideCompRef = _this.createSlideComponent(_this.index);
                _this.createAni(prev_slide, 'entrance', 'prev');
                _this.createAni(current_slide, 'exit', 'prev');
            }
        };
        this.nextSlide = function () {
            if (_this.index !== _this.item_dir_list.toArray().length - 1) {
                _this.index += 1;
                _this.cd.markForCheck();
                /** @type {?} */
                var current_slide = _this.slideCompRef;
                /** @type {?} */
                var next_slide = _this.slideCompRef = _this.createSlideComponent(_this.index);
                _this.createAni(current_slide, 'exit', 'next');
                _this.createAni(next_slide, 'entrance', 'next');
            }
        };
        this.createSlideComponent = function (i) {
            /** @type {?} */
            var factory = _this.resolver.resolveComponentFactory(slide_component_1.SlideComponent);
            /** @type {?} */
            var compRef = _this.carousel.createComponent(factory);
            compRef.instance.template = _this.item_dir_list.toArray()[i].tplRef;
            compRef.instance.ngOnInit();
            return compRef;
        };
        this.createAni = function (compRef, entrance, direction) {
            if (entrance === void 0) { entrance = 'entrance'; }
            if (direction === void 0) { direction = 'next'; }
            /** @type {?} */
            var ani_factory = _this.aniBuilder.build(_this.getAniType(entrance, direction));
            _this.ani_player = ani_factory.create(compRef.instance.el.nativeElement);
            _this.ani_player.play();
            if (entrance === 'exit') {
                _this.ani_player.onDone(function () {
                    compRef.destroy();
                });
            }
        };
        this.getAniType = function (entrance, direction) {
            if (entrance === void 0) { entrance = 'entrance'; }
            if (direction === void 0) { direction = 'next'; }
            return (entrance === 'entrance')
                ? (direction === 'next') ? animations_1.useAnimation(animations_2.slideInRightAnimation, { params: { timing: 500 } }) : animations_1.useAnimation(animations_2.slideInLeftAnimation, { params: { timing: 500 } })
                : (direction === 'next') ? animations_1.useAnimation(animations_2.slideOutLeftAnimation, { params: { timing: 500 } }) : animations_1.useAnimation(animations_2.slideOutRightAnimation, { params: { timing: 500 } });
        };
    }
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.slideCompRef = this.createSlideComponent(this.index);
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.slideCompRef.destroy();
    };
    CarouselComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'io-carousel',
                    template: "<div class=\"arrow-left\" (click)=\"previousSlide()\">\r\n   <\r\n</div>\r\n\r\n<ng-container  #carousel>\r\n\r\n</ng-container>\r\n\r\n\r\n\r\n<div class=\"arrow-right\" (click)=\"nextSlide()\">\r\n    >\r\n</div>\r\n\r\n",
                    styles: [":host{background-color:transparent;display:flex;position:relative;min-height:300px;min-width:700px}.arrow-left,.arrow-right{cursor:pointer;display:flex;align-items:center;font-size:2.5rem;position:absolute;height:100%;z-index:2;width:10rem}.arrow-left .fa-chevron-left,.arrow-left fa-chevron-right,.arrow-right .fa-chevron-left,.arrow-right fa-chevron-right{color:#000}.arrow-left{left:0}.arrow-right{right:0}"]
                }] }
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: core_1.ChangeDetectorRef },
        { type: core_1.ViewContainerRef },
        { type: animations_1.AnimationBuilder },
        { type: core_1.ComponentFactoryResolver }
    ]; };
    CarouselComponent.propDecorators = {
        item_dir_list: [{ type: core_1.ContentChildren, args: [slide_directive_1.SlideDirective,] }],
        carousel: [{ type: core_1.ViewChild, args: ['carousel', { read: core_1.ViewContainerRef },] }]
    };
    return CarouselComponent;
}());
exports.CarouselComponent = CarouselComponent;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsicGFja2FnZXMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNDQVl1QjtBQUN2QixxREFBbUQ7QUFDbkQsa0RBTTZCO0FBRTdCLHFEQUFtRDtBQUNuRCxnREFLMkI7QUFHM0I7SUFlRSx3SEFBd0g7SUFFeEgsMkJBQ1UsRUFBcUIsRUFDckIsS0FBdUIsRUFDdkIsVUFBNEIsRUFDNUIsUUFBa0M7UUFKNUMsaUJBTUM7UUFMUyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUEwQjs7UUFWNUMsVUFBSyxHQUFHLENBQUMsQ0FBQzs7UUE2QlYsa0JBQWEsR0FBRztZQUNkLElBQUksS0FBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7Z0JBQ3BCLEtBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO2dCQUNoQixLQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDOztvQkFDakIsYUFBYSxHQUFHLEtBQUksQ0FBQyxZQUFZOztvQkFDakMsVUFBVSxHQUFHLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQzVFLEtBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDL0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQy9DO1FBRUgsQ0FBQyxDQUFDO1FBRUYsY0FBUyxHQUFHO1lBQ1YsSUFBSSxLQUFJLENBQUMsS0FBSyxLQUFLLEtBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFFMUQsS0FBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7Z0JBRWhCLEtBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUM7O29CQUNqQixhQUFhLEdBQUcsS0FBSSxDQUFDLFlBQVk7O29CQUNqQyxVQUFVLEdBQUcsS0FBSSxDQUFDLFlBQVksR0FBRyxLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQztnQkFHNUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUM5QyxLQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDaEQ7UUFDSCxDQUFDLENBQUM7UUFHRix5QkFBb0IsR0FBRyxVQUFBLENBQUM7O2dCQUNoQixPQUFPLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBTSxnQ0FBYyxDQUFDOztnQkFDcEUsT0FBTyxHQUFHLEtBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQztZQUV0RCxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUNuRSxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzVCLE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUMsQ0FBQztRQUdGLGNBQVMsR0FBRyxVQUFDLE9BQU8sRUFBRSxRQUFxQixFQUFFLFNBQWtCO1lBQXpDLHlCQUFBLEVBQUEscUJBQXFCO1lBQUUsMEJBQUEsRUFBQSxrQkFBa0I7O2dCQUN2RCxXQUFXLEdBQXFCLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBRWpHLEtBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN4RSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRXZCLElBQUksUUFBUSxLQUFLLE1BQU0sRUFBRTtnQkFFdkIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7b0JBQ3JCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDcEIsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUVILENBQUMsQ0FBQztRQUVGLGVBQVUsR0FBRyxVQUFDLFFBQXFCLEVBQUUsU0FBa0I7WUFBekMseUJBQUEsRUFBQSxxQkFBcUI7WUFBRSwwQkFBQSxFQUFBLGtCQUFrQjtZQUNyRCxPQUFBLENBQUMsUUFBUSxLQUFLLFVBQVUsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyx5QkFBWSxDQUFDLGtDQUFxQixFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMseUJBQVksQ0FBQyxpQ0FBb0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO2dCQUM3SixDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLHlCQUFZLENBQUMsa0NBQXFCLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyx5QkFBWSxDQUFDLG1DQUFzQixFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7UUFGakssQ0FFaUssQ0FBQztJQXpFcEssQ0FBQzs7OztJQUVELG9DQUFROzs7SUFBUjtJQUVBLENBQUM7Ozs7SUFHRCwyQ0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELHVDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7Z0JBcENGLGdCQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLDBPQUF3Qzs7aUJBRXpDOzs7O2dCQWpDQyx3QkFBaUI7Z0JBU2pCLHVCQUFnQjtnQkFJaEIsNkJBQWdCO2dCQVhoQiwrQkFBd0I7OztnQ0FrQ3ZCLHNCQUFlLFNBQUMsZ0NBQWM7MkJBQzlCLGdCQUFTLFNBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLHVCQUFnQixFQUFFOztJQTJGbkQsd0JBQUM7Q0FBQSxBQW5HRCxJQW1HQztBQTlGWSw4Q0FBaUI7OztJQUU1QiwwQ0FBMEU7O0lBQzFFLHFDQUE4RTs7SUFHOUUsa0NBQVU7Ozs7O0lBQ1YsdUNBQW9DOzs7OztJQUNwQyx5Q0FBbUQ7O0lBMkJuRCwwQ0FVRTs7SUFFRixzQ0FhRTs7SUFHRixpREFPRTs7SUFHRixzQ0FhRTs7SUFFRix1Q0FHb0s7Ozs7O0lBOUVsSywrQkFBNkI7Ozs7O0lBQzdCLGtDQUErQjs7Ozs7SUFDL0IsdUNBQW9DOzs7OztJQUNwQyxxQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICBDb21wb25lbnRSZWYsXHJcbiAgQ29udGVudENoaWxkcmVuLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNsaWRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zbGlkZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1xyXG4gIEFuaW1hdGlvbkJ1aWxkZXIsXHJcbiAgQW5pbWF0aW9uRmFjdG9yeSxcclxuICBBbmltYXRpb25QbGF5ZXIsXHJcbiAgQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEsXHJcbiAgdXNlQW5pbWF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5pbXBvcnQgeyBTbGlkZUNvbXBvbmVudCB9IGZyb20gJy4vc2xpZGUuY29tcG9uZW50JztcclxuaW1wb3J0IHtcclxuICBzbGlkZUluTGVmdEFuaW1hdGlvbixcclxuICBzbGlkZUluUmlnaHRBbmltYXRpb24sXHJcbiAgc2xpZGVPdXRMZWZ0QW5pbWF0aW9uLFxyXG4gIHNsaWRlT3V0UmlnaHRBbmltYXRpb25cclxufSBmcm9tICdAaW9uYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpby1jYXJvdXNlbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhcm91c2VsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jYXJvdXNlbC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgQENvbnRlbnRDaGlsZHJlbihTbGlkZURpcmVjdGl2ZSkgaXRlbV9kaXJfbGlzdDogUXVlcnlMaXN0PFNsaWRlRGlyZWN0aXZlPjtcclxuICBAVmlld0NoaWxkKCdjYXJvdXNlbCcsIHsgcmVhZDogVmlld0NvbnRhaW5lclJlZiB9KSBjYXJvdXNlbDogVmlld0NvbnRhaW5lclJlZjtcclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcbiAgaW5kZXggPSAwO1xyXG4gIHByaXZhdGUgYW5pX3BsYXllcjogQW5pbWF0aW9uUGxheWVyO1xyXG4gIHByaXZhdGUgc2xpZGVDb21wUmVmOiBDb21wb25lbnRSZWY8U2xpZGVDb21wb25lbnQ+O1xyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgTGlmZSBDeWNsZSBIb29rICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIGFuaUJ1aWxkZXI6IEFuaW1hdGlvbkJ1aWxkZXIsXHJcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcclxuICApIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICB9XHJcblxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNsaWRlQ29tcFJlZiA9IHRoaXMuY3JlYXRlU2xpZGVDb21wb25lbnQodGhpcy5pbmRleCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc2xpZGVDb21wUmVmLmRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXHJcblxyXG4gIHByZXZpb3VzU2xpZGUgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5pbmRleCAhPT0gMCkge1xyXG4gICAgICB0aGlzLmluZGV4IC09IDE7XHJcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRfc2xpZGUgPSB0aGlzLnNsaWRlQ29tcFJlZjtcclxuICAgICAgY29uc3QgcHJldl9zbGlkZSA9IHRoaXMuc2xpZGVDb21wUmVmID0gdGhpcy5jcmVhdGVTbGlkZUNvbXBvbmVudCh0aGlzLmluZGV4KTtcclxuICAgICAgdGhpcy5jcmVhdGVBbmkocHJldl9zbGlkZSwgJ2VudHJhbmNlJywgJ3ByZXYnKTtcclxuICAgICAgdGhpcy5jcmVhdGVBbmkoY3VycmVudF9zbGlkZSwgJ2V4aXQnLCAncHJldicpO1xyXG4gICAgfVxyXG5cclxuICB9O1xyXG5cclxuICBuZXh0U2xpZGUgPSAoKSA9PiB7XHJcbiAgICBpZiAodGhpcy5pbmRleCAhPT0gdGhpcy5pdGVtX2Rpcl9saXN0LnRvQXJyYXkoKS5sZW5ndGggLSAxKSB7XHJcblxyXG4gICAgICB0aGlzLmluZGV4ICs9IDE7XHJcblxyXG4gICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICBjb25zdCBjdXJyZW50X3NsaWRlID0gdGhpcy5zbGlkZUNvbXBSZWY7XHJcbiAgICAgIGNvbnN0IG5leHRfc2xpZGUgPSB0aGlzLnNsaWRlQ29tcFJlZiA9IHRoaXMuY3JlYXRlU2xpZGVDb21wb25lbnQodGhpcy5pbmRleCk7XHJcblxyXG5cclxuICAgICAgdGhpcy5jcmVhdGVBbmkoY3VycmVudF9zbGlkZSwgJ2V4aXQnLCAnbmV4dCcpO1xyXG4gICAgICB0aGlzLmNyZWF0ZUFuaShuZXh0X3NsaWRlLCAnZW50cmFuY2UnLCAnbmV4dCcpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICBjcmVhdGVTbGlkZUNvbXBvbmVudCA9IGkgPT4ge1xyXG4gICAgY29uc3QgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3Rvcnk8YW55PihTbGlkZUNvbXBvbmVudCk7XHJcbiAgICBjb25zdCBjb21wUmVmID0gdGhpcy5jYXJvdXNlbC5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XHJcblxyXG4gICAgY29tcFJlZi5pbnN0YW5jZS50ZW1wbGF0ZSA9IHRoaXMuaXRlbV9kaXJfbGlzdC50b0FycmF5KClbaV0udHBsUmVmO1xyXG4gICAgY29tcFJlZi5pbnN0YW5jZS5uZ09uSW5pdCgpO1xyXG4gICAgcmV0dXJuIGNvbXBSZWY7XHJcbiAgfTtcclxuXHJcblxyXG4gIGNyZWF0ZUFuaSA9IChjb21wUmVmLCBlbnRyYW5jZSA9ICdlbnRyYW5jZScsIGRpcmVjdGlvbiA9ICduZXh0JykgPT4ge1xyXG4gICAgY29uc3QgYW5pX2ZhY3Rvcnk6IEFuaW1hdGlvbkZhY3RvcnkgPSB0aGlzLmFuaUJ1aWxkZXIuYnVpbGQodGhpcy5nZXRBbmlUeXBlKGVudHJhbmNlLCBkaXJlY3Rpb24pKTtcclxuXHJcbiAgICB0aGlzLmFuaV9wbGF5ZXIgPSBhbmlfZmFjdG9yeS5jcmVhdGUoY29tcFJlZi5pbnN0YW5jZS5lbC5uYXRpdmVFbGVtZW50KTtcclxuICAgIHRoaXMuYW5pX3BsYXllci5wbGF5KCk7XHJcblxyXG4gICAgaWYgKGVudHJhbmNlID09PSAnZXhpdCcpIHtcclxuXHJcbiAgICAgIHRoaXMuYW5pX3BsYXllci5vbkRvbmUoKCkgPT4ge1xyXG4gICAgICAgIGNvbXBSZWYuZGVzdHJveSgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgfTtcclxuXHJcbiAgZ2V0QW5pVHlwZSA9IChlbnRyYW5jZSA9ICdlbnRyYW5jZScsIGRpcmVjdGlvbiA9ICduZXh0Jyk6IEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhID0+XHJcbiAgICAoZW50cmFuY2UgPT09ICdlbnRyYW5jZScpXHJcbiAgICAgID8gKGRpcmVjdGlvbiA9PT0gJ25leHQnKSA/IHVzZUFuaW1hdGlvbihzbGlkZUluUmlnaHRBbmltYXRpb24sIHsgcGFyYW1zOiB7IHRpbWluZzogNTAwIH0gfSkgOiB1c2VBbmltYXRpb24oc2xpZGVJbkxlZnRBbmltYXRpb24sIHsgcGFyYW1zOiB7IHRpbWluZzogNTAwIH0gfSlcclxuICAgICAgOiAoZGlyZWN0aW9uID09PSAnbmV4dCcpID8gdXNlQW5pbWF0aW9uKHNsaWRlT3V0TGVmdEFuaW1hdGlvbiwgeyBwYXJhbXM6IHsgdGltaW5nOiA1MDAgfSB9KSA6IHVzZUFuaW1hdGlvbihzbGlkZU91dFJpZ2h0QW5pbWF0aW9uLCB7IHBhcmFtczogeyB0aW1pbmc6IDUwMCB9IH0pO1xyXG5cclxuXHJcbn1cclxuIl19