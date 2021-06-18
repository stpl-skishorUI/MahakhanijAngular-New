import { NgModule } from '@angular/core';
import { AfterLoginComponent } from './after-login.component';
import { AfterLoginRoutingModule } from './after-login-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserRegisterComponent } from './masters/user-register/user-register.component';

@NgModule({
    imports: [
        AfterLoginRoutingModule
    ],
    declarations: [
        AfterLoginComponent,
        HeaderComponent,
        SidebarComponent,
        UserRegisterComponent
    ],
    providers: [],
    exports: [
        AfterLoginComponent
    ]
})

export class AfterLoginModule { }