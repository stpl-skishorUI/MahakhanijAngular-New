import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterLoginComponent } from './after-login.component'
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: '', component:AfterLoginComponent },
    {path:'after-login',  component: AfterLoginComponent},
    {path:'dashboard',  component: DashboardComponent}
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