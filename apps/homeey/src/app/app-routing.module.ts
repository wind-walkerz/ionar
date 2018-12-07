import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './features/auth/providers/auth.guard';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: './features/dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard]
  },
  { path: 'auth', loadChildren: './features/auth/auth.module#AuthModule' },
  { path: 'profile', loadChildren: './features/profile/profile.module#ProfileModule' },
  { path: 'project', loadChildren: './features/project/project.module#ProjectModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: environment.production })],
  exports: [RouterModule]
})

export class AppRoutingModule {
}


