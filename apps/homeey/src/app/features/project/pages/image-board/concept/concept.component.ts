import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import moment from 'moment';


@Component({
  selector: 'concept',
  templateUrl: './concept.component.html',
  styleUrls: ['./concept.component.scss']
})
export class ConceptComponent implements OnInit, OnDestroy {
  ///-----------------------------------------------  Variables   -----------------------------------------------///

  _moment = moment;

  marker_list = [
    {
      coordinate: `316, 200`,
      user_name: 'Tony',
      message: 'Phasellus ac dui id lectus venenatis laoreet ac eu ex.Phasellus ac dui id lectus venenatis laoreet ac eu ex.Phasellus ac dui id lectus venenatis laoreet ac eu ex.Phasellus ac dui id lectus venenatis laoreet ac eu ex.Phasellus ac dui id lectus venenatis laoreet ac eu ex.'
    },
    {
      coordinate: `670, 340`,
      user_name: 'Tony',
      message: 'Phasellus ac dui id lectus venenatis laoreet ac eu ex.'
    }
  ];


  comment_list = [
    {
      text: 'Hello',
      image: null,
      created_at: '2018-11-19 03:14:44',
      user: {
        id: 1,
        first_name: 'Joe',
        last_name: 'Toscano',
        avatar: 'https://png.pngtree.com/element_origin_min_pic/17/02/11/bf3f8c533232b1e8322c34f9731aa9f9.jpg'
      }
    },
    {
      text: '  Phasellus ac dui id lectus venenatis laoreet ac eu ex. Donec luctus felis quis massa posuere iaculis. Donec porta ante ac felis sagittis, sit amet rutrum urna placerat. Sed nec malesuada lorem, vitae tincidunt odio.\n',
      image: null,
      created_at: '2018-11-19 03:14:44',
      user: {
        id: 1,
        first_name: 'Joe',
        last_name: 'Toscano',
        avatar: 'https://png.pngtree.com/element_origin_min_pic/17/02/11/bf3f8c533232b1e8322c34f9731aa9f9.jpg'
      }
    }
  ];
  constructor(public location: Location) {
  }

  ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

  ///-----------------------------------------------  Main Functions  -----------------------------------------------///
}
