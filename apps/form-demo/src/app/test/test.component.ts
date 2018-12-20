import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnDestroy {

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
