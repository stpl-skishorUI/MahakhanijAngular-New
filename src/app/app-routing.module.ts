import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: 'home', loadChildren: () => import('./before-login/before-login.module').then(m => m.BeforeLoginModule) },
  { path: 'after-login', loadChildren: () => import('./after-login/after-login.module').then(m => m.AfterLoginModule) }
  // { path: 'dashboard', loadChildren: () => import('./after-login/dashboard/').then(m => m.AfterLoginModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
