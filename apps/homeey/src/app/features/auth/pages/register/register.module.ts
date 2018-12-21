import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../../../../shared/shared.module";
import {RegisterComponent} from "./register.component";
import { IonarLoadingService } from '@ionar/ui';


@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        SharedModule,

        RouterModule.forChild([{
            path: '', component: RegisterComponent
        }])
    ],
    // providers: [IonarLoadingService]

})
export class RegisterModule {
}
