/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { SpinnerComponent, SpinnerTemplate } from './spinner.component';
export class CircleComponent extends SpinnerComponent {
    constructor() {
        super(...arguments);
        this.baseClass = 'circle-spinner';
        this.childClass = 'circle';
        this.numItems = 12;
    }
}
CircleComponent.decorators = [
    { type: Component, args: [{
                selector: 'sk-circle',
                template: SpinnerTemplate,
                styles: [`
      .circle-spinner {
          position: relative;
          margin: 25px auto;
          width: 5rem;
          height: 5rem;
      }

      .circle-spinner > div {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: transparent !important;
      }

      .circle-spinner div:before {
          display: block;
          margin: 0 auto;
          width: 15%;
          height: 15%;
          border-radius: 100%;
          background-color: white;
          content: '';
          -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
          animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
      }

      .circle-spinner .circle2 {
          -webkit-transform: rotate(30deg);
          -ms-transform: rotate(30deg);
          transform: rotate(30deg);
      }

      .circle-spinner .circle3 {
          -webkit-transform: rotate(60deg);
          -ms-transform: rotate(60deg);
          transform: rotate(60deg);
      }

      .circle-spinner .circle4 {
          -webkit-transform: rotate(90deg);
          -ms-transform: rotate(90deg);
          transform: rotate(90deg);
      }

      .circle-spinner .circle5 {
          -webkit-transform: rotate(120deg);
          -ms-transform: rotate(120deg);
          transform: rotate(120deg);
      }

      .circle-spinner .circle6 {
          -webkit-transform: rotate(150deg);
          -ms-transform: rotate(150deg);
          transform: rotate(150deg);
      }

      .circle-spinner .circle7 {
          -webkit-transform: rotate(180deg);
          -ms-transform: rotate(180deg);
          transform: rotate(180deg);
      }

      .circle-spinner .circle8 {
          -webkit-transform: rotate(210deg);
          -ms-transform: rotate(210deg);
          transform: rotate(210deg);
      }

      .circle-spinner .circle9 {
          -webkit-transform: rotate(240deg);
          -ms-transform: rotate(240deg);
          transform: rotate(240deg);
      }

      .circle-spinner .circle10 {
          -webkit-transform: rotate(270deg);
          -ms-transform: rotate(270deg);
          transform: rotate(270deg);
      }

      .circle-spinner .circle11 {
          -webkit-transform: rotate(300deg);
          -ms-transform: rotate(300deg);
          transform: rotate(300deg);
      }

      .circle-spinner .circle12 {
          -webkit-transform: rotate(330deg);
          -ms-transform: rotate(330deg);
          transform: rotate(330deg);
      }

      .circle-spinner .circle2:before {
          -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s;
      }

      .circle-spinner .circle3:before {
          -webkit-animation-delay: -1s;
          animation-delay: -1s;
      }

      .circle-spinner .circle4:before {
          -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s;
      }

      .circle-spinner .circle5:before {
          -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s;
      }

      .circle-spinner .circle6:before {
          -webkit-animation-delay: -0.7s;
          animation-delay: -0.7s;
      }

      .circle-spinner .circle7:before {
          -webkit-animation-delay: -0.6s;
          animation-delay: -0.6s;
      }

      .circle-spinner .circle8:before {
          -webkit-animation-delay: -0.5s;
          animation-delay: -0.5s;
      }

      .circle-spinner .circle9:before {
          -webkit-animation-delay: -0.4s;
          animation-delay: -0.4s;
      }

      .circle-spinner .circle10:before {
          -webkit-animation-delay: -0.3s;
          animation-delay: -0.3s;
      }

      .circle-spinner .circle11:before {
          -webkit-animation-delay: -0.2s;
          animation-delay: -0.2s;
      }

      .circle-spinner .circle12:before {
          -webkit-animation-delay: -0.1s;
          animation-delay: -0.1s;
      }

      @-webkit-keyframes sk-circleBounceDelay {
          0%, 80%, 100% {
              -webkit-transform: scale(0);
              transform: scale(0);
          }
          40% {
              -webkit-transform: scale(1);
              transform: scale(1);
          }
      }

      @keyframes sk-circleBounceDelay {
          0%, 80%, 100% {
              -webkit-transform: scale(0);
              transform: scale(0);
          }
          40% {
              -webkit-transform: scale(1);
              transform: scale(1);
          }
      }
  `]
            }] }
];
if (false) {
    /** @type {?} */
    CircleComponent.prototype.baseClass;
    /** @type {?} */
    CircleComponent.prototype.childClass;
    /** @type {?} */
    CircleComponent.prototype.numItems;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9hZGluZy9zcGlubmVyL2NpcmNsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBbUx4RSxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxnQkFBZ0I7SUFqTHJEOztRQWtMUyxjQUFTLEdBQVcsZ0JBQWdCLENBQUM7UUFDckMsZUFBVSxHQUFXLFFBQVEsQ0FBQztRQUM5QixhQUFRLEdBQVcsRUFBRSxDQUFDO0lBQy9CLENBQUM7OztZQXJMQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBNktyQixRQUFRLEVBQUUsZUFBZTt5QkE1S2hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyS1I7YUFFRjs7OztJQUdDLG9DQUE0Qzs7SUFDNUMscUNBQXFDOztJQUNyQyxtQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNwaW5uZXJDb21wb25lbnQsIFNwaW5uZXJUZW1wbGF0ZSB9IGZyb20gJy4vc3Bpbm5lci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzay1jaXJjbGUnLFxuICBzdHlsZXM6IFtgXG4gICAgICAuY2lyY2xlLXNwaW5uZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICBtYXJnaW46IDI1cHggYXV0bztcbiAgICAgICAgICB3aWR0aDogNXJlbTtcbiAgICAgICAgICBoZWlnaHQ6IDVyZW07XG4gICAgICB9XG5cbiAgICAgIC5jaXJjbGUtc3Bpbm5lciA+IGRpdiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuY2lyY2xlLXNwaW5uZXIgZGl2OmJlZm9yZSB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgd2lkdGg6IDE1JTtcbiAgICAgICAgICBoZWlnaHQ6IDE1JTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1jaXJjbGVCb3VuY2VEZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzay1jaXJjbGVCb3VuY2VEZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG4gICAgICB9XG5cbiAgICAgIC5jaXJjbGUtc3Bpbm5lciAuY2lyY2xlMiB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gICAgICB9XG5cbiAgICAgIC5jaXJjbGUtc3Bpbm5lciAuY2lyY2xlMyB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XG4gICAgICB9XG5cbiAgICAgIC5jaXJjbGUtc3Bpbm5lciAuY2lyY2xlNCB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICB9XG5cbiAgICAgIC5jaXJjbGUtc3Bpbm5lciAuY2lyY2xlNSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XG4gICAgICB9XG5cbiAgICAgIC5jaXJjbGUtc3Bpbm5lciAuY2lyY2xlNiB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XG4gICAgICB9XG5cbiAgICAgIC5jaXJjbGUtc3Bpbm5lciAuY2lyY2xlNyB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICB9XG5cbiAgICAgIC5jaXJjbGUtc3Bpbm5lciAuY2lyY2xlOCB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpO1xuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XG4gICAgICB9XG5cbiAgICAgIC5jaXJjbGUtc3Bpbm5lciAuY2lyY2xlOSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XG4gICAgICB9XG5cbiAgICAgIC5jaXJjbGUtc3Bpbm5lciAuY2lyY2xlMTAge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAgICAgfVxuXG4gICAgICAuY2lyY2xlLXNwaW5uZXIgLmNpcmNsZTExIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwMGRlZyk7XG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMwMGRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcbiAgICAgIH1cblxuICAgICAgLmNpcmNsZS1zcGlubmVyIC5jaXJjbGUxMiB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7XG4gICAgICB9XG5cbiAgICAgIC5jaXJjbGUtc3Bpbm5lciAuY2lyY2xlMjpiZWZvcmUge1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xLjFzO1xuICAgICAgfVxuXG4gICAgICAuY2lyY2xlLXNwaW5uZXIgLmNpcmNsZTM6YmVmb3JlIHtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTFzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTFzO1xuICAgICAgfVxuXG4gICAgICAuY2lyY2xlLXNwaW5uZXIgLmNpcmNsZTQ6YmVmb3JlIHtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOXM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC45cztcbiAgICAgIH1cblxuICAgICAgLmNpcmNsZS1zcGlubmVyIC5jaXJjbGU1OmJlZm9yZSB7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjhzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XG4gICAgICB9XG5cbiAgICAgIC5jaXJjbGUtc3Bpbm5lciAuY2lyY2xlNjpiZWZvcmUge1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC43cztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjdzO1xuICAgICAgfVxuXG4gICAgICAuY2lyY2xlLXNwaW5uZXIgLmNpcmNsZTc6YmVmb3JlIHtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNnM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC42cztcbiAgICAgIH1cblxuICAgICAgLmNpcmNsZS1zcGlubmVyIC5jaXJjbGU4OmJlZm9yZSB7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjVzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG4gICAgICB9XG5cbiAgICAgIC5jaXJjbGUtc3Bpbm5lciAuY2lyY2xlOTpiZWZvcmUge1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xuICAgICAgfVxuXG4gICAgICAuY2lyY2xlLXNwaW5uZXIgLmNpcmNsZTEwOmJlZm9yZSB7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjNzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XG4gICAgICB9XG5cbiAgICAgIC5jaXJjbGUtc3Bpbm5lciAuY2lyY2xlMTE6YmVmb3JlIHtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuMnM7XG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcbiAgICAgIH1cblxuICAgICAgLmNpcmNsZS1zcGlubmVyIC5jaXJjbGUxMjpiZWZvcmUge1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC4xcztcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjFzO1xuICAgICAgfVxuXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgc2stY2lyY2xlQm91bmNlRGVsYXkge1xuICAgICAgICAgIDAlLCA4MCUsIDEwMCUge1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDQwJSB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgc2stY2lyY2xlQm91bmNlRGVsYXkge1xuICAgICAgICAgIDAlLCA4MCUsIDEwMCUge1xuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIDQwJSB7XG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gIGBdLFxuICB0ZW1wbGF0ZTogU3Bpbm5lclRlbXBsYXRlXG59KVxuXG5leHBvcnQgY2xhc3MgQ2lyY2xlQ29tcG9uZW50IGV4dGVuZHMgU3Bpbm5lckNvbXBvbmVudCB7XG4gIHB1YmxpYyBiYXNlQ2xhc3M6IHN0cmluZyA9ICdjaXJjbGUtc3Bpbm5lcic7XG4gIHB1YmxpYyBjaGlsZENsYXNzOiBzdHJpbmcgPSAnY2lyY2xlJztcbiAgcHVibGljIG51bUl0ZW1zOiBudW1iZXIgPSAxMjtcbn1cbiJdfQ==