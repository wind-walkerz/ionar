import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

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
