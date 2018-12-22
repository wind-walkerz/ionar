/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectorRef, Component, ComponentFactoryResolver, ContentChildren, QueryList, ViewChild, ViewContainerRef } from '@angular/core';
import { SlideDirective } from './slide.directive';
import { AnimationBuilder, useAnimation } from '@angular/animations';
import { slide_in_left, slide_in_right, slide_out_left, slide_out_right } from '@aurora-ngx/animations';
import { SlideComponent } from './slide.component';
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
            var factory = _this.resolver.resolveComponentFactory(SlideComponent);
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
                ? (direction === 'next') ? useAnimation(slide_in_right, { params: { timing: 500 } }) : useAnimation(slide_in_left, { params: { timing: 500 } })
                : (direction === 'next') ? useAnimation(slide_out_left, { params: { timing: 500 } }) : useAnimation(slide_out_right, { params: { timing: 500 } });
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
        { type: Component, args: [{
                    selector: 'io-carousel',
                    template: "<div class=\"arrow-left\" (click)=\"previousSlide()\">\r\n   <\r\n</div>\r\n\r\n<ng-container  #carousel>\r\n\r\n</ng-container>\r\n\r\n\r\n\r\n<div class=\"arrow-right\" (click)=\"nextSlide()\">\r\n    >\r\n</div>\r\n\r\n",
                    styles: [":host{background-color:transparent;display:flex;position:relative;min-height:300px;min-width:700px}.arrow-left,.arrow-right{cursor:pointer;display:flex;align-items:center;font-size:2.5rem;position:absolute;height:100%;z-index:2;width:10rem}.arrow-left .fa-chevron-left,.arrow-left fa-chevron-right,.arrow-right .fa-chevron-left,.arrow-right fa-chevron-right{color:#000}.arrow-left{left:0}.arrow-right{right:0}"]
                }] }
    ];
    /** @nocollapse */
    CarouselComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ViewContainerRef },
        { type: AnimationBuilder },
        { type: ComponentFactoryResolver }
    ]; };
    CarouselComponent.propDecorators = {
        item_dir_list: [{ type: ContentChildren, args: [SlideDirective,] }],
        carousel: [{ type: ViewChild, args: ['carousel', { read: ViewContainerRef },] }]
    };
    return CarouselComponent;
}());
export { CarouselComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL3VpLyIsInNvdXJjZXMiOlsicGFja2FnZXMvY2Fyb3VzZWwvY2Fyb3VzZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCx3QkFBd0IsRUFFeEIsZUFBZSxFQUdmLFNBQVMsRUFDVCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQ0wsZ0JBQWdCLEVBSWhCLFlBQVksRUFDYixNQUFNLHFCQUFxQixDQUFDO0FBQzdCLE9BQU8sRUFBRSxhQUFhLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFHbkQ7SUFlRSx3SEFBd0g7SUFFeEgsMkJBQ1UsRUFBcUIsRUFDckIsS0FBdUIsRUFDdkIsVUFBNEIsRUFDNUIsUUFBa0M7UUFKNUMsaUJBTUM7UUFMUyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixVQUFLLEdBQUwsS0FBSyxDQUFrQjtRQUN2QixlQUFVLEdBQVYsVUFBVSxDQUFrQjtRQUM1QixhQUFRLEdBQVIsUUFBUSxDQUEwQjs7UUFWNUMsVUFBSyxHQUFHLENBQUMsQ0FBQzs7UUE2QlYsa0JBQWEsR0FBRztZQUNkLElBQUksS0FBSSxDQUFDLEtBQUssS0FBSyxDQUFDLEVBQUU7Z0JBQ3BCLEtBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO2dCQUNoQixLQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDOztvQkFDakIsYUFBYSxHQUFHLEtBQUksQ0FBQyxZQUFZOztvQkFDakMsVUFBVSxHQUFHLEtBQUksQ0FBQyxZQUFZ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ZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgQ29tcG9uZW50UmVmLFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFF1ZXJ5TGlzdCxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0NvbnRhaW5lclJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTbGlkZURpcmVjdGl2ZSB9IGZyb20gJy4vc2xpZGUuZGlyZWN0aXZlJztcclxuaW1wb3J0IHtcclxuICBBbmltYXRpb25CdWlsZGVyLFxyXG4gIEFuaW1hdGlvbkZhY3RvcnksXHJcbiAgQW5pbWF0aW9uUGxheWVyLFxyXG4gIEFuaW1hdGlvblJlZmVyZW5jZU1ldGFkYXRhLFxyXG4gIHVzZUFuaW1hdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBzbGlkZV9pbl9sZWZ0LCBzbGlkZV9pbl9yaWdodCwgc2xpZGVfb3V0X2xlZnQsIHNsaWRlX291dF9yaWdodCB9IGZyb20gJ0BhdXJvcmEtbmd4L2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBTbGlkZUNvbXBvbmVudCB9IGZyb20gJy4vc2xpZGUuY29tcG9uZW50JztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lvLWNhcm91c2VsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2Nhcm91c2VsLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKFNsaWRlRGlyZWN0aXZlKSBpdGVtX2Rpcl9saXN0OiBRdWVyeUxpc3Q8U2xpZGVEaXJlY3RpdmU+O1xyXG4gIEBWaWV3Q2hpbGQoJ2Nhcm91c2VsJywgeyByZWFkOiBWaWV3Q29udGFpbmVyUmVmIH0pIGNhcm91c2VsOiBWaWV3Q29udGFpbmVyUmVmO1xyXG5cclxuICAvLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgVmFyaWFibGVzICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuICBpbmRleCA9IDA7XHJcbiAgcHJpdmF0ZSBhbmlfcGxheWVyOiBBbmltYXRpb25QbGF5ZXI7XHJcbiAgcHJpdmF0ZSBzbGlkZUNvbXBSZWY6IENvbXBvbmVudFJlZjxTbGlkZUNvbXBvbmVudD47XHJcblxyXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIHByaXZhdGUgYW5pQnVpbGRlcjogQW5pbWF0aW9uQnVpbGRlcixcclxuICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxyXG4gICkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gIH1cclxuXHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2xpZGVDb21wUmVmID0gdGhpcy5jcmVhdGVTbGlkZUNvbXBvbmVudCh0aGlzLmluZGV4KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5zbGlkZUNvbXBSZWYuZGVzdHJveSgpO1xyXG4gIH1cclxuXHJcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIE1haW4gRnVuY3Rpb25zICAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLy9cclxuXHJcbiAgcHJldmlvdXNTbGlkZSA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLmluZGV4ICE9PSAwKSB7XHJcbiAgICAgIHRoaXMuaW5kZXggLT0gMTtcclxuICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgY29uc3QgY3VycmVudF9zbGlkZSA9IHRoaXMuc2xpZGVDb21wUmVmO1xyXG4gICAgICBjb25zdCBwcmV2X3NsaWRlID0gdGhpcy5zbGlkZUNvbXBSZWYgPSB0aGlzLmNyZWF0ZVNsaWRlQ29tcG9uZW50KHRoaXMuaW5kZXgpO1xyXG4gICAgICB0aGlzLmNyZWF0ZUFuaShwcmV2X3NsaWRlLCAnZW50cmFuY2UnLCAncHJldicpO1xyXG4gICAgICB0aGlzLmNyZWF0ZUFuaShjdXJyZW50X3NsaWRlLCAnZXhpdCcsICdwcmV2Jyk7XHJcbiAgICB9XHJcblxyXG4gIH07XHJcblxyXG4gIG5leHRTbGlkZSA9ICgpID0+IHtcclxuICAgIGlmICh0aGlzLmluZGV4ICE9PSB0aGlzLml0ZW1fZGlyX2xpc3QudG9BcnJheSgpLmxlbmd0aCAtIDEpIHtcclxuXHJcbiAgICAgIHRoaXMuaW5kZXggKz0gMTtcclxuXHJcbiAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRfc2xpZGUgPSB0aGlzLnNsaWRlQ29tcFJlZjtcclxuICAgICAgY29uc3QgbmV4dF9zbGlkZSA9IHRoaXMuc2xpZGVDb21wUmVmID0gdGhpcy5jcmVhdGVTbGlkZUNvbXBvbmVudCh0aGlzLmluZGV4KTtcclxuXHJcblxyXG4gICAgICB0aGlzLmNyZWF0ZUFuaShjdXJyZW50X3NsaWRlLCAnZXhpdCcsICduZXh0Jyk7XHJcbiAgICAgIHRoaXMuY3JlYXRlQW5pKG5leHRfc2xpZGUsICdlbnRyYW5jZScsICduZXh0Jyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gIGNyZWF0ZVNsaWRlQ29tcG9uZW50ID0gaSA9PiB7XHJcbiAgICBjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeTxhbnk+KFNsaWRlQ29tcG9uZW50KTtcclxuICAgIGNvbnN0IGNvbXBSZWYgPSB0aGlzLmNhcm91c2VsLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcclxuXHJcbiAgICBjb21wUmVmLmluc3RhbmNlLnRlbXBsYXRlID0gdGhpcy5pdGVtX2Rpcl9saXN0LnRvQXJyYXkoKVtpXS50cGxSZWY7XHJcbiAgICBjb21wUmVmLmluc3RhbmNlLm5nT25Jbml0KCk7XHJcbiAgICByZXR1cm4gY29tcFJlZjtcclxuICB9O1xyXG5cclxuXHJcbiAgY3JlYXRlQW5pID0gKGNvbXBSZWYsIGVudHJhbmNlID0gJ2VudHJhbmNlJywgZGlyZWN0aW9uID0gJ25leHQnKSA9PiB7XHJcbiAgICBjb25zdCBhbmlfZmFjdG9yeTogQW5pbWF0aW9uRmFjdG9yeSA9IHRoaXMuYW5pQnVpbGRlci5idWlsZCh0aGlzLmdldEFuaVR5cGUoZW50cmFuY2UsIGRpcmVjdGlvbikpO1xyXG5cclxuICAgIHRoaXMuYW5pX3BsYXllciA9IGFuaV9mYWN0b3J5LmNyZWF0ZShjb21wUmVmLmluc3RhbmNlLmVsLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgdGhpcy5hbmlfcGxheWVyLnBsYXkoKTtcclxuXHJcbiAgICBpZiAoZW50cmFuY2UgPT09ICdleGl0Jykge1xyXG5cclxuICAgICAgdGhpcy5hbmlfcGxheWVyLm9uRG9uZSgoKSA9PiB7XHJcbiAgICAgICAgY29tcFJlZi5kZXN0cm95KCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICB9O1xyXG5cclxuICBnZXRBbmlUeXBlID0gKGVudHJhbmNlID0gJ2VudHJhbmNlJywgZGlyZWN0aW9uID0gJ25leHQnKTogQW5pbWF0aW9uUmVmZXJlbmNlTWV0YWRhdGEgPT5cclxuICAgIChlbnRyYW5jZSA9PT0gJ2VudHJhbmNlJylcclxuICAgICAgPyAoZGlyZWN0aW9uID09PSAnbmV4dCcpID8gdXNlQW5pbWF0aW9uKHNsaWRlX2luX3JpZ2h0LCB7IHBhcmFtczogeyB0aW1pbmc6IDUwMCB9IH0pIDogdXNlQW5pbWF0aW9uKHNsaWRlX2luX2xlZnQsIHsgcGFyYW1zOiB7IHRpbWluZzogNTAwIH0gfSlcclxuICAgICAgOiAoZGlyZWN0aW9uID09PSAnbmV4dCcpID8gdXNlQW5pbWF0aW9uKHNsaWRlX291dF9sZWZ0LCB7IHBhcmFtczogeyB0aW1pbmc6IDUwMCB9IH0pIDogdXNlQW5pbWF0aW9uKHNsaWRlX291dF9yaWdodCwgeyBwYXJhbXM6IHsgdGltaW5nOiA1MDAgfSB9KTtcclxuXHJcblxyXG59XHJcbiJdfQ==