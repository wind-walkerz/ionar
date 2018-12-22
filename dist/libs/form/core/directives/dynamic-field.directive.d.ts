import { ComponentFactoryResolver, OnChanges, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { InputComponent, MenuComponent, TextareaComponent, UploadComponent } from '../../ui';
export declare class DynamicFieldDirective implements OnInit, OnDestroy, OnChanges {
    private _resolver;
    private _vcRef;
    private _readonly;
    private _controlConfig;
    private _events;
    private _invalid;
    private _value;
    private _options;
    private _template;
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
    private initContext;
    private updateContext;
    private parseContext;
}
