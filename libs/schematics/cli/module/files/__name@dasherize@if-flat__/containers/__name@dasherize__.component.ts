import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: '<%= dasherize(name) %>',
    templateUrl: './<%= dasherize(name) %>.components.html',
    styleUrls: ['./<%= dasherize(name) %>.components.scss']
})
export class <%= classify(name) %>Component implements OnInit, OnDestroy {

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
