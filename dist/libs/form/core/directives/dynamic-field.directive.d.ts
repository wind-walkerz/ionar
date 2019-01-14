import { ComponentFactoryResolver, OnChanges, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { InputComponent, MenuComponent, TextareaComponent, UploadComponent } from '../../ui';
export declare class DynamicFieldDirective implements OnInit, OnDestroy, OnChanges {
    private _resolver;
    private _vcRef;
    private _name;
    private _root;
    private _control;
    private _template;
    private _events;
    private _compRef;
    components: {
        input: typeof InputComponent;
        textarea: typeof TextareaComponent;
        upload: typeof UploadComponent;
        menu: typeof MenuComponent;
    };
    constructor(_resolver: ComponentFactoryResolver, _vcRef: ViewContainerRef);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    createComponent: () => void;
    private _parseContext;
    private _initObservables;
    private _updateContext;
}
