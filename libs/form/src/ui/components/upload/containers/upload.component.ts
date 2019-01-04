import {
  AfterViewChecked, ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef, ViewChild
} from '@angular/core';
import _ from 'lodash';
import { IoFormFieldUI } from '../../../interfaces/IoFormFieldUI';

@Component({
  selector: 'io-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent extends IoFormFieldUI {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  file_list = [];
  @Output() change = new EventEmitter();
  @Input() invalid: Boolean = false;
  @Input() type: string = 'input';
  @Input() template: TemplateRef<any>;
  @Input() multiple: Boolean = false;
  @Input() title: any = '';


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(
    cd: ChangeDetectorRef,
    el: ElementRef
  ) {
    super(cd, el);
  }


  ///-----------------------------------------------  Main Functions   -----------------------------------------------///
  onFileChanged(file_list) {
    this.file_list = this.file_list.concat(_.map(file_list));

    this.change.emit(this.multiple ? this.file_list : this.file_list[0]);

  }

};
