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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bpb25hci91aS8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9hZGluZy9zcGlubmVyL2NpcmNsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBbUx4RSxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxnQkFBZ0I7SUFqTHJEOztRQWtMUyxjQUFTLEdBQVcsZ0JBQWdCLENBQUM7UUFDckMsZUFBVSxHQUFXLFFBQVEsQ0FBQztRQUM5QixhQUFRLEdBQVcsRUFBRSxDQUFDO0lBQy9CLENBQUM7OztZQXJMQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBNktyQixRQUFRLEVBQUUsZUFBZTt5QkE1S2hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyS1I7YUFFRjs7OztJQUdDLG9DQUE0Qzs7SUFDNUMscUNBQXFDOztJQUNyQyxtQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3Bpbm5lckNvbXBvbmVudCwgU3Bpbm5lclRlbXBsYXRlIH0gZnJvbSAnLi9zcGlubmVyLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NrLWNpcmNsZScsXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgICAuY2lyY2xlLXNwaW5uZXIge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgbWFyZ2luOiAyNXB4IGF1dG87XHJcbiAgICAgICAgICB3aWR0aDogNXJlbTtcclxuICAgICAgICAgIGhlaWdodDogNXJlbTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNpcmNsZS1zcGlubmVyID4gZGl2IHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jaXJjbGUtc3Bpbm5lciBkaXY6YmVmb3JlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNSU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1jaXJjbGVCb3VuY2VEZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNrLWNpcmNsZUJvdW5jZURlbGF5IDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQgYm90aDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNpcmNsZS1zcGlubmVyIC5jaXJjbGUyIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNpcmNsZS1zcGlubmVyIC5jaXJjbGUzIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNjBkZWcpO1xyXG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNpcmNsZS1zcGlubmVyIC5jaXJjbGU0IHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xyXG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNpcmNsZS1zcGlubmVyIC5jaXJjbGU1IHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcclxuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNpcmNsZS1zcGlubmVyIC5jaXJjbGU2IHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcclxuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTUwZGVnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNpcmNsZS1zcGlubmVyIC5jaXJjbGU3IHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNpcmNsZS1zcGlubmVyIC5jaXJjbGU4IHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcclxuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjEwZGVnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNpcmNsZS1zcGlubmVyIC5jaXJjbGU5IHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcclxuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMjQwZGVnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNpcmNsZS1zcGlubmVyIC5jaXJjbGUxMCB7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgICAgICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jaXJjbGUtc3Bpbm5lciAuY2lyY2xlMTEge1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xyXG4gICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMwMGRlZyk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2lyY2xlLXNwaW5uZXIgLmNpcmNsZTEyIHtcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcclxuICAgICAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzMzBkZWcpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNpcmNsZS1zcGlubmVyIC5jaXJjbGUyOmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMXM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xLjFzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2lyY2xlLXNwaW5uZXIgLmNpcmNsZTM6YmVmb3JlIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMXM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0xcztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNpcmNsZS1zcGlubmVyIC5jaXJjbGU0OmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuOXM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2lyY2xlLXNwaW5uZXIgLmNpcmNsZTU6YmVmb3JlIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jaXJjbGUtc3Bpbm5lciAuY2lyY2xlNjpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjdzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC43cztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNpcmNsZS1zcGlubmVyIC5jaXJjbGU3OmJlZm9yZSB7XHJcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNnM7XHJcbiAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjZzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2lyY2xlLXNwaW5uZXIgLmNpcmNsZTg6YmVmb3JlIHtcclxuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcclxuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jaXJjbGUtc3Bpbm5lciAuY2lyY2xlOTpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjRzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNpcmNsZS1zcGlubmVyIC5jaXJjbGUxMDpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjNzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4zcztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNpcmNsZS1zcGlubmVyIC5jaXJjbGUxMTpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjJzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4ycztcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNpcmNsZS1zcGlubmVyIC5jaXJjbGUxMjpiZWZvcmUge1xyXG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjFzO1xyXG4gICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC4xcztcclxuICAgICAgfVxyXG5cclxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIHNrLWNpcmNsZUJvdW5jZURlbGF5IHtcclxuICAgICAgICAgIDAlLCA4MCUsIDEwMCUge1xyXG4gICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgNDAlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgQGtleWZyYW1lcyBzay1jaXJjbGVCb3VuY2VEZWxheSB7XHJcbiAgICAgICAgICAwJSwgODAlLCAxMDAlIHtcclxuICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDQwJSB7XHJcbiAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICBgXSxcclxuICB0ZW1wbGF0ZTogU3Bpbm5lclRlbXBsYXRlXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2lyY2xlQ29tcG9uZW50IGV4dGVuZHMgU3Bpbm5lckNvbXBvbmVudCB7XHJcbiAgcHVibGljIGJhc2VDbGFzczogc3RyaW5nID0gJ2NpcmNsZS1zcGlubmVyJztcclxuICBwdWJsaWMgY2hpbGRDbGFzczogc3RyaW5nID0gJ2NpcmNsZSc7XHJcbiAgcHVibGljIG51bUl0ZW1zOiBudW1iZXIgPSAxMjtcclxufVxyXG4iXX0=