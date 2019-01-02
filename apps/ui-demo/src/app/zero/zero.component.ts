import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'zero',
    templateUrl: './zero.component.html',
    styleUrls: ['./zero.component.scss']
})
export class ZeroComponent implements OnInit, OnDestroy {

    ///-----------------------------------------------  Variables   -----------------------------------------------///

    constructor() {
    }


    ///-----------------------------------------------  Life Cycle Hook   -----------------------------------------------///



    ngOnInit() {
        console.log('sdlkfjsdl')

    }

    ngOnDestroy(): void {
    }



    ///-----------------------------------------------  Main Functions  -----------------------------------------------///

}
