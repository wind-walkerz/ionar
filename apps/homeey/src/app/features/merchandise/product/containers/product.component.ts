import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

    ///-----------------------------------------------  Variables   -----------------------------------------------///


    constructor(public location: Location) {}

    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///

    ngOnInit() {

    }

    ngOnDestroy(): void {
    }



    ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
