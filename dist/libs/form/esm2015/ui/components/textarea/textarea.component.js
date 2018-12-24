/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class TextareaComponent {
    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
    constructor() {
        ///-----------------------------------------------  Variables   -----------------------------------------------///
        this.name = '';
        this.value = '';
        this.placeholder = '';
        this.change = new EventEmitter();
        this.blur = new EventEmitter();
        this.invalid = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
    }
}
TextareaComponent.decorators = [
    { type: Component, args: [{
                selector: 'io-textarea',
                template: `
      <textarea
              [name]="name"
              [value]="value"
              [class.invalid]="invalid"
              cols="1" rows="1"
              [placeholder]="placeholder"
              
              (change)="$event.stopPropagation(); change.emit($event.target.value);"
              (blur)="blur.emit()"
      ></textarea>
  `,
                styles: [`
      :host {
          display: flex;
          flex: 1;
      }

      textarea {
          border: none;
          font-size: 1.5rem;
          padding: 1rem;
          width: 100%;
          max-width: 100%;
          overflow-y: scroll;
      }
  `]
            }] }
];
/** @nocollapse */
TextareaComponent.ctorParameters = () => [];
TextareaComponent.propDecorators = {
    name: [{ type: Input }],
    value: [{ type: Input }],
    placeholder: [{ type: Input }],
    change: [{ type: Output }],
    blur: [{ type: Output }],
    invalid: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TextareaComponent.prototype.name;
    /** @type {?} */
    TextareaComponent.prototype.value;
    /** @type {?} */
    TextareaComponent.prototype.placeholder;
    /** @type {?} */
    TextareaComponent.prototype.change;
    /** @type {?} */
    TextareaComponent.prototype.blur;
    /** @type {?} */
    TextareaComponent.prototype.invalid;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGlvbmFyL2Zvcm0vIiwic291cmNlcyI6WyJ1aS9jb21wb25lbnRzL3RleHRhcmVhL3RleHRhcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBZ0N6RyxNQUFNLE9BQU8saUJBQWlCOztJQVc1Qjs7UUFUUyxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFDaEIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFDckIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUIsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDM0IsWUFBTyxHQUFZLEtBQUssQ0FBQztJQUtsQyxDQUFDOzs7O0lBRUQsUUFBUTtJQUVSLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO0lBRWxDLENBQUM7OztZQWxERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7R0FXVDt5QkFDUTs7Ozs7Ozs7Ozs7Ozs7R0FjUjthQUNGOzs7OzttQkFHRSxLQUFLO29CQUNMLEtBQUs7MEJBQ0wsS0FBSztxQkFDTCxNQUFNO21CQUNOLE1BQU07c0JBQ04sS0FBSzs7OztJQUxOLGlDQUEyQjs7SUFDM0Isa0NBQXlCOztJQUN6Qix3Q0FBK0I7O0lBQy9CLG1DQUFzQzs7SUFDdEMsaUNBQW9DOztJQUNwQyxvQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW8tdGV4dGFyZWEnLFxuICB0ZW1wbGF0ZTogYFxuICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIFtuYW1lXT1cIm5hbWVcIlxuICAgICAgICAgICAgICBbdmFsdWVdPVwidmFsdWVcIlxuICAgICAgICAgICAgICBbY2xhc3MuaW52YWxpZF09XCJpbnZhbGlkXCJcbiAgICAgICAgICAgICAgY29scz1cIjFcIiByb3dzPVwiMVwiXG4gICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJwbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAoY2hhbmdlKT1cIiRldmVudC5zdG9wUHJvcGFnYXRpb24oKTsgY2hhbmdlLmVtaXQoJGV2ZW50LnRhcmdldC52YWx1ZSk7XCJcbiAgICAgICAgICAgICAgKGJsdXIpPVwiYmx1ci5lbWl0KClcIlxuICAgICAgPjwvdGV4dGFyZWE+XG4gIGAsXG4gIHN0eWxlczogW2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG5cbiAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICAgICAgfVxuICBgXVxufSlcbmV4cG9ydCBjbGFzcyBUZXh0YXJlYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgLy8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gIFZhcmlhYmxlcyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSB2YWx1ZTogYW55ID0gJyc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBhbnkgPSAnJztcbiAgQE91dHB1dCgpIGNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIGludmFsaWQ6IEJvb2xlYW4gPSBmYWxzZTtcblxuXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBMaWZlIEN5Y2xlIEhvb2sgICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuXG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG5cbiAgfVxuXG4gIC8vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICBNYWluIEZ1bmN0aW9ucyAgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8vXG5cbn1cbiJdfQ==