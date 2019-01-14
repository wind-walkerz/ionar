import { TemplateRef } from '@angular/core';
export declare class IonarTemplateDirective {
    templateRef: TemplateRef<any>;
    name: any;
    component: 'input' | 'select' | 'textarea' | 'radio' | 'upload' | 'menu';
    constructor(templateRef: TemplateRef<any>);
}
