import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const authRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule',
    data: { animation: 'auth/login' }
  },
  {
    path: 'register',
    loadChildren: './pages/register/register.module#RegisterModule',
    data: { animation: 'auth/register' }
  },
  {
    path: 'forgot-password',
    loadChildren: './pages/forgot-password/forgot-password.module#ForgotPasswordModule',
    data: { animation: 'forgot-password' }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ]

})
export class AuthModule {
}
