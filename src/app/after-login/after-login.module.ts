import { NgModule } from '@angular/core';
import { AfterLoginComponent } from './after-login.component';
import { AfterLoginRoutingModule } from './after-login-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    imports: [
        AfterLoginRoutingModule
    ],
    declarations: [
        AfterLoginComponent,
        HeaderComponent,
        SidebarComponent,
        DashboardComponent
    ],
    providers: [],
    exports: [
        AfterLoginComponent
    ]
})

export class AfterLoginModule { }