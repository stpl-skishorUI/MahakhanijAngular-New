import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterLoginComponent } from './after-login.component'

const routes: Routes = [
    { path: '', component:AfterLoginComponent },
    {path:'after-login',  component: AfterLoginComponent},
    {path:'dashboard',  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
    {path:'user-register',  loadChildren: () => import('./masters/user-register/user-register.module').then(m => m.UserRegisterModule)},
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AfterLoginRoutingModule { }