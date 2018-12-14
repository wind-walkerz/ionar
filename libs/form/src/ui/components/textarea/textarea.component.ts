import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'io-textarea',
  template: `
      <textarea
              [name]="name"
              [value]="value"
              [class.invalid]="invalid"
              tabindex="0"
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
})
export class TextareaComponent implements OnInit, OnChanges {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  @Input() name: string = '';
  @Input() value: any = '';
  @Input() placeholder: any;
  @Output() change = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Input() invalid: Boolean = false;

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }


  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

}
