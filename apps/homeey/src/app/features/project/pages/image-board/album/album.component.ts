import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  @ViewChild('upload', { read: ElementRef }) uload_ref;

  upload_width = 0;

  constructor() {}

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {
    this.upload_width = this.uload_ref.nativeElement.offsetWidth;
  }

  ngOnDestroy(): void {}

  ///-----------------------------------------------  Main Functions  -----------------------------------------------///
}
