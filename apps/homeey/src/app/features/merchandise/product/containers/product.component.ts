import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

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
