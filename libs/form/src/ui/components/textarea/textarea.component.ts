import {
  ChangeDetectorRef,
  Component, ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import { IoFormFieldUI } from '../../interfaces/IoFormFieldUI';

@Component({
  selector: 'io-textarea',
  templateUrl: `./textarea.component.html`,
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent extends IoFormFieldUI {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  @Input() name: string = '';
  @Input() value: any = '';
  @Input() placeholder: any = '';


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(
    cd: ChangeDetectorRef,
    el: ElementRef
  ) {
    super(cd, el);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.setContext({
      name: this.name,
      value: this.value,
      placeholder: this.placeholder
    });
  }

  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

}
