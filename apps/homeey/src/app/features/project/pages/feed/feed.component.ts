import {Component, OnInit, OnDestroy} from '@angular/core';
import moment from 'moment';

@Component({
    selector: 'feed',
    templateUrl: './feed.component.html',
    styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy {

    protected _moment = moment;

    ///-----------------------------------------------  Variables   -----------------------------------------------///

    chat_feed = {
        '2018-11-19': [
            {
                system: true,
                text: `
                  REMINDER:
                <br><br>
                Hi melissa. Thank you for making a booking with us. We will come back to you
                shortly regarding a suitable time.
                <br><br>
                In the meantime, help us complete this style questiner to better understand your needs.
                YESTERDAY
            `
            }
        ],

        '2018-12-1': [
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
                text: 'Etiam varius mauris arcu, nec tincidunt neque rutrum posuere. Donec a sapien neque. Interdum et malesuada fames ac ante ipsum primis in faucibus',
                image: null,
                created_at: '2018-11-19 03:14:44',
                user: {
                    id: 2,
                    first_name: 'Joe',
                    last_name: 'Toscano',
                    avatar: 'https://png.pngtree.com/element_origin_min_pic/17/02/11/bf3f8c533232b1e8322c34f9731aa9f9.jpg'
                }
            },
            {
                text: null,
                image: 'https://png.pngtree.com/element_origin_min_pic/17/02/11/bf3f8c533232b1e8322c34f9731aa9f9.jpg',
                created_at: '2018-11-19 03:14:44',
                user: {
                    id: 2,
                    first_name: 'Joe',
                    last_name: 'Toscano',
                    avatar: 'https://png.pngtree.com/element_origin_min_pic/17/02/11/bf3f8c533232b1e8322c34f9731aa9f9.jpg'
                }
            },
            {
                text: null,
                image: 'https://png.pngtree.com/element_origin_min_pic/17/02/11/bf3f8c533232b1e8322c34f9731aa9f9.jpg',
                created_at: '2018-11-19 03:14:44',
                user: {
                    id: 2,
                    first_name: 'Joe',
                    last_name: 'Toscano',
                    avatar: 'https://png.pngtree.com/element_origin_min_pic/17/02/11/bf3f8c533232b1e8322c34f9731aa9f9.jpg'
                }
            }
            ,
            {
                system: true,
                text: `
                  REMINDER:
                <br><br>
                Hi melissa. Thank you for making a booking with us. We will come back to you
                shortly regarding a suitable time.
                <br><br>
                In the meantime, help us complete this style questiner to better understand your needs.
                YESTERDAY
            `
            },
            {
                text: 'Etiam varius mauris arcu, nec tincidunt neque rutrum posuere. Donec a sapien neque. Interdum et malesuada fames ac ante ipsum primis in faucibus',
                image: null,
                created_at: '2018-11-19 03:14:44',
                user: {
                    id: 2,
                    first_name: 'Joe',
                    last_name: 'Toscano',
                    avatar: 'https://png.pngtree.com/element_origin_min_pic/17/02/11/bf3f8c533232b1e8322c34f9731aa9f9.jpg'
                }
            }
        ]
    };

    constructor() {
    }


    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///


    ngOnInit() {

    }

    ngOnDestroy(): void {
    }


    ///-----------------------------------------------  Main Functions  -----------------------------------------------///


}
