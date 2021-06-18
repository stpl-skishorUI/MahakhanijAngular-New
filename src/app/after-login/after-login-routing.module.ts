import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterLoginComponent } from './after-login.component'
import { UserRegisterComponent } from './masters/user-register/user-register.component'

const routes: Routes = [
    { path: '', component:AfterLoginComponent },
    {path:'after-login',  component: AfterLoginComponent},
    {path:'dashboard',  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
    {path:'user-register',  component: UserRegisterComponent},
    // { path: 'masters/user-register', loadChildren: () => import('./masters/user-register/user-register.component').then(m => m.UserRegisterComponent) }
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