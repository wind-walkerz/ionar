import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'form-control',
  template: `
      <form-label [name]="name"></form-label>

      <form-field [name]="name"></form-field>

      <form-feedback [name]="name"></form-feedback>
  `,

  styles: [`
      :host-context(.hidden) {
          display: none;
      }

      label {
          grid-area: label;
      }

      field {
          grid-area: field;
      }

      feedback {
          grid-area: feedback;
      }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlComponent implements OnInit, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  @Input() name = '';


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor() {
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
  }

}
