/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class SpinnerComponent {
    constructor() {
        this.visible = true;
        this.baseClass = 'chasing-dots-spinner';
        this.childClass = 'dot';
        this.numItems = 2;
        this.delay = 0;
        this.color = '#333';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isRunning(value) {
        if (!value) {
            this.cancel();
            this.visible = false;
            return;
        }
        if (this.timeout) {
            return;
        }
        this.timeout = setTimeout(() => {
            this.visible = true;
            this.cancel();
        }, this.delay);
    }
    /**
     * @private
     * @return {?}
     */
    cancel() {
        clearTimeout(this.timeout);
        this.timeout = undefined;
    }
    /**
     * @return {?}
     */
    get items() {
        return Array(this.numItems);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.cancel();
    }
}
SpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'spinner',
                template: ''
            }] }
];
SpinnerComponent.propDecorators = {
    delay: [{ type: Input }],
    color: [{ type: Input }],
    isRunning: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    SpinnerComponent.prototype.visible;
    /** @type {?} */
    SpinnerComponent.prototype.timeout;
    /** @type {?} */
    SpinnerComponent.prototype.baseClass;
    /** @type {?} */
    SpinnerComponent.prototype.childClass;
    /** @type {?} */
    SpinnerComponent.prototype.numItems;
    /** @type {?} */
    SpinnerComponent.prototype.delay;
    /** @type {?} */
    SpinnerComponent.prototype.color;
}
/** @type {?} */
export const SpinnerTemplate = `
  <div [hidden]="!visible" [ngClass]="baseClass">
      <div *ngFor="let item of items; let i = index" [ngClass]="childClass + (i+1)" [style.backgroundColor]="color"></div>
  </div>
`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvdWkvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2xvYWRpbmcvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFNNUQsTUFBTSxPQUFPLGdCQUFnQjtJQUo3QjtRQUtTLFlBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsY0FBUyxHQUFXLHNCQUFzQixDQUFDO1FBQzNDLGVBQVUsR0FBVyxLQUFLLENBQUM7UUFDM0IsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUdyQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR2xCLFVBQUssR0FBVyxNQUFNLENBQUM7SUFnQ2hDLENBQUM7Ozs7O0lBOUJDLElBQ1csU0FBUyxDQUFDLEtBQWM7UUFDakMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUNkLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLE9BQU87U0FDUjtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2hCLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakIsQ0FBQzs7Ozs7SUFFTyxNQUFNO1FBQ1osWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsSUFBVyxLQUFLO1FBQ2QsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7OztZQTlDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLFFBQVEsRUFBRSxFQUFFO2FBQ2I7OztvQkFRRSxLQUFLO29CQUdMLEtBQUs7d0JBR0wsS0FBSzs7OztJQVpOLG1DQUErQjs7SUFDL0IsbUNBQW9COztJQUNwQixxQ0FBa0Q7O0lBQ2xELHNDQUFrQzs7SUFDbEMsb0NBQTRCOztJQUU1QixpQ0FDeUI7O0lBRXpCLGlDQUM4Qjs7O0FBa0NoQyxNQUFNLE9BQU8sZUFBZSxHQUFHOzs7O0NBSTlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NwaW5uZXInLFxuICB0ZW1wbGF0ZTogJydcbn0pXG5leHBvcnQgY2xhc3MgU3Bpbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIHB1YmxpYyB2aXNpYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIHRpbWVvdXQ6IGFueTtcbiAgcHVibGljIGJhc2VDbGFzczogc3RyaW5nID0gJ2NoYXNpbmctZG90cy1zcGlubmVyJztcbiAgcHVibGljIGNoaWxkQ2xhc3M6IHN0cmluZyA9ICdkb3QnO1xuICBwdWJsaWMgbnVtSXRlbXM6IG51bWJlciA9IDI7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGRlbGF5OiBudW1iZXIgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjb2xvcjogc3RyaW5nID0gJyMzMzMnO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaXNSdW5uaW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5jYW5jZWwoKTtcbiAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRpbWVvdXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XG4gICAgICB0aGlzLmNhbmNlbCgpO1xuICAgIH0sIHRoaXMuZGVsYXkpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYW5jZWwoKTogdm9pZCB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgdGhpcy50aW1lb3V0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIGdldCBpdGVtcygpIHtcbiAgICByZXR1cm4gQXJyYXkodGhpcy5udW1JdGVtcyk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiBhbnkge1xuICAgIHRoaXMuY2FuY2VsKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFNwaW5uZXJUZW1wbGF0ZSA9IGBcbiAgPGRpdiBbaGlkZGVuXT1cIiF2aXNpYmxlXCIgW25nQ2xhc3NdPVwiYmFzZUNsYXNzXCI+XG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBpdGVtIG9mIGl0ZW1zOyBsZXQgaSA9IGluZGV4XCIgW25nQ2xhc3NdPVwiY2hpbGRDbGFzcyArIChpKzEpXCIgW3N0eWxlLmJhY2tncm91bmRDb2xvcl09XCJjb2xvclwiPjwvZGl2PlxuICA8L2Rpdj5cbmA7XG4iXX0=