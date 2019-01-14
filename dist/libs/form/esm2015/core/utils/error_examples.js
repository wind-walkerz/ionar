/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/** @type {?} */
export const FormErrorExamples = {
    formControlName: `
    <io-form [formGroup]="myGroup">
      <form-control [name]=" 'firstName' "></form-control>
    </io-form>

    In your class:

    constructor( private _fb: IonarFormBuilder){}

    this.myGroup = this._fb.group({
        firstName: {
            component: 'input',
            props: {
                value: 'YourName'
            },
            validators: {
                required: true
            }
        }
    });`,
    formGroupName: `
    <div [formGroup]="myGroup">
       <div formGroupName="person">
          <input formControlName="firstName">
       </div>
    </div>

    In your class:

    this.myGroup = new FormGroup({
       person: new FormGroup({ firstName: new FormControl() })
    });`,
    formArrayName: `
    <div [formGroup]="myGroup">
      <div formArrayName="cities">
        <div *ngFor="let city of cityArray.controls; index as i">
          <input [formControlName]="i">
        </div>
      </div>
    </div>

    In your class:

    this.cityArray = new FormArray([new FormControl('SF')]);
    this.myGroup = new FormGroup({
      cities: this.cityArray
    });`,
    ngModelGroup: `
    <form>
       <div ngModelGroup="person">
          <input [(ngModel)]="person.name" name="firstName">
       </div>
    </form>`,
    ngModelWithFormGroup: `
    <div [formGroup]="myGroup">
       <input formControlName="firstName">
       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">
    </div>
  `
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JfZXhhbXBsZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AaW9uYXIvZm9ybS8iLCJzb3VyY2VzIjpbImNvcmUvdXRpbHMvZXJyb3JfZXhhbXBsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsTUFBTSxPQUFPLGlCQUFpQixHQUFHO0lBQy9CLGVBQWUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQW1CWDtJQUlOLGFBQWEsRUFBRTs7Ozs7Ozs7Ozs7UUFXVDtJQUVOLGFBQWEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7UUFjVDtJQUVOLFlBQVksRUFBRTs7Ozs7WUFLSjtJQUVWLG9CQUFvQixFQUFFOzs7OztHQUtyQjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvcm1FcnJvckV4YW1wbGVzID0ge1xyXG4gIGZvcm1Db250cm9sTmFtZTogYFxyXG4gICAgPGlvLWZvcm0gW2Zvcm1Hcm91cF09XCJteUdyb3VwXCI+XHJcbiAgICAgIDxmb3JtLWNvbnRyb2wgW25hbWVdPVwiICdmaXJzdE5hbWUnIFwiPjwvZm9ybS1jb250cm9sPlxyXG4gICAgPC9pby1mb3JtPlxyXG5cclxuICAgIEluIHlvdXIgY2xhc3M6XHJcblxyXG4gICAgY29uc3RydWN0b3IoIHByaXZhdGUgX2ZiOiBJb25hckZvcm1CdWlsZGVyKXt9XHJcblxyXG4gICAgdGhpcy5teUdyb3VwID0gdGhpcy5fZmIuZ3JvdXAoe1xyXG4gICAgICAgIGZpcnN0TmFtZToge1xyXG4gICAgICAgICAgICBjb21wb25lbnQ6ICdpbnB1dCcsXHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ1lvdXJOYW1lJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2YWxpZGF0b3JzOiB7XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7YCxcclxuXHJcblxyXG5cclxuICBmb3JtR3JvdXBOYW1lOiBgXHJcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwibXlHcm91cFwiPlxyXG4gICAgICAgPGRpdiBmb3JtR3JvdXBOYW1lPVwicGVyc29uXCI+XHJcbiAgICAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiZmlyc3ROYW1lXCI+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIEluIHlvdXIgY2xhc3M6XHJcblxyXG4gICAgdGhpcy5teUdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XHJcbiAgICAgICBwZXJzb246IG5ldyBGb3JtR3JvdXAoeyBmaXJzdE5hbWU6IG5ldyBGb3JtQ29udHJvbCgpIH0pXHJcbiAgICB9KTtgLFxyXG5cclxuICBmb3JtQXJyYXlOYW1lOiBgXHJcbiAgICA8ZGl2IFtmb3JtR3JvdXBdPVwibXlHcm91cFwiPlxyXG4gICAgICA8ZGl2IGZvcm1BcnJheU5hbWU9XCJjaXRpZXNcIj5cclxuICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBjaXR5IG9mIGNpdHlBcnJheS5jb250cm9sczsgaW5kZXggYXMgaVwiPlxyXG4gICAgICAgICAgPGlucHV0IFtmb3JtQ29udHJvbE5hbWVdPVwiaVwiPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIEluIHlvdXIgY2xhc3M6XHJcblxyXG4gICAgdGhpcy5jaXR5QXJyYXkgPSBuZXcgRm9ybUFycmF5KFtuZXcgRm9ybUNvbnRyb2woJ1NGJyldKTtcclxuICAgIHRoaXMubXlHcm91cCA9IG5ldyBGb3JtR3JvdXAoe1xyXG4gICAgICBjaXRpZXM6IHRoaXMuY2l0eUFycmF5XHJcbiAgICB9KTtgLFxyXG5cclxuICBuZ01vZGVsR3JvdXA6IGBcclxuICAgIDxmb3JtPlxyXG4gICAgICAgPGRpdiBuZ01vZGVsR3JvdXA9XCJwZXJzb25cIj5cclxuICAgICAgICAgIDxpbnB1dCBbKG5nTW9kZWwpXT1cInBlcnNvbi5uYW1lXCIgbmFtZT1cImZpcnN0TmFtZVwiPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+YCxcclxuXHJcbiAgbmdNb2RlbFdpdGhGb3JtR3JvdXA6IGBcclxuICAgIDxkaXYgW2Zvcm1Hcm91cF09XCJteUdyb3VwXCI+XHJcbiAgICAgICA8aW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwiZmlyc3ROYW1lXCI+XHJcbiAgICAgICA8aW5wdXQgWyhuZ01vZGVsKV09XCJzaG93TW9yZUNvbnRyb2xzXCIgW25nTW9kZWxPcHRpb25zXT1cIntzdGFuZGFsb25lOiB0cnVlfVwiPlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG59O1xyXG4iXX0=