import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'io-upload',
  exportAs: 'io-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  ///-----------------------------------------------  Variables   -----------------------------------------------///
  file_list = [];
  @Output() change = new EventEmitter();
  @Input() invalid: Boolean = false;
  @Input() type: string = 'input';

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(private elRef: ElementRef) {
  }

  ngOnInit() {
  }


  ///-----------------------------------------------  Main Functions   -----------------------------------------------///
  onFileChanged(file_list) {
    this.file_list = this.file_list.concat(_.map(file_list));

    this.change.emit(this.file_list);
  }

};