import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';


@Component({
  selector: 'io-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit, OnChanges {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @Input() visible: Boolean;
  @Output() onCancel = new EventEmitter();
  @Output() onOk = new EventEmitter();
  @Output() close = new EventEmitter();

  @ViewChild('mask', { read: ElementRef }) private _maskElRef: ElementRef;

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.onClose();
  }


  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///
  constructor(private eRef: ElementRef) {
  }

  ngOnInit() {
  }


  ///-----------------------------------------------  Main Functions   -----------------------------------------------///

  onClose = () => {
    this.close.emit();
  };

  ngOnChanges(changes): void {


  }

}
