import { AfterViewInit, ChangeDetectorRef, ComponentFactoryResolver, ComponentRef, OnDestroy, OnInit, QueryList, ViewContainerRef } from '@angular/core';
import { SlideDirective } from './slide.directive';
import { AnimationBuilder, AnimationReferenceMetadata } from '@angular/animations';
export declare class CarouselComponent implements OnInit, AfterViewInit, OnDestroy {
    private cd;
    private vcRef;
    private aniBuilder;
    private resolver;
    item_dir_list: QueryList<SlideDirective>;
    carousel: ViewContainerRef;
    index: number;
    private ani_player;
    private slideCompRef;
    constructor(cd: ChangeDetectorRef, vcRef: ViewContainerRef, aniBuilder: AnimationBuilder, resolver: ComponentFactoryResolver);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    previousSlide: () => void;
    nextSlide: () => void;
    createSlideComponent: (i: any) => ComponentRef<any>;
    createAni: (compRef: any, entrance?: string, direction?: string) => void;
    getAniType: (entrance?: string, direction?: string) => AnimationReferenceMetadata;
}
