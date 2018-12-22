import { ChangeDetectorRef, ElementRef, OnInit, TemplateRef } from '@angular/core';
export declare class SlideComponent implements OnInit {
    el: ElementRef;
    private cd;
    template: TemplateRef<any>;
    constructor(el: ElementRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
}
