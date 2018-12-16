import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './features/auth/providers/auth.guard';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: './features/dashboard/dashboard.module#DashboardModule',
    data: { animation: 'dashboard' },
    canActivate: [AuthGuard]
  },
  { path: 'auth', loadChildren: './features/auth/auth.module#AuthModule',  data: { animation: 'auth' } },
  { path: 'profile', loadChildren: './features/profile/profile.module#ProfileModule',   data: { animation: 'profile' }   },
  { path: 'project', loadChildren: './features/project/project.module#ProjectModule' },
  { path: 'product', loadChildren: './features/products/products.module#ProductsModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: environment.production })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}


