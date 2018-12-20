import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef
} from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'io-upload',
  exportAs: 'io-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit, OnChanges {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  file_list = [];
  @Output() change = new EventEmitter();
  @Input() invalid: Boolean = false;
  @Input() type: string = 'input';
  @Input() template: TemplateRef<any>;
  @Input() multiple: Boolean = false;

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(private elRef: ElementRef) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ///-----------------------------------------------  Main Functions   -----------------------------------------------///
  onFileChanged(file_list) {
    this.file_list = this.file_list.concat(_.map(file_list));

    this.change.emit(this.multiple ? this.file_list : this.file_list[0]);

  }

};
