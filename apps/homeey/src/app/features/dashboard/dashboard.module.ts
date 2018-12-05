import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardComponent} from './containers/dashboard.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from '../home/pages/home.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: '', component: DashboardComponent
        }])
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule {
}
