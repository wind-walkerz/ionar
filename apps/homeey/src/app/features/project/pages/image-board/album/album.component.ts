import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///


  constructor() {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {

  }

  ngOnDestroy(): void {
  }

  ///-----------------------------------------------  Main Functions  -----------------------------------------------///
}
