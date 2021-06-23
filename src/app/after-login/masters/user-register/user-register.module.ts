import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { UserRegisterComponent } from './user-register.component';
import {UserRegisterRoutingModule} from './user-register-routing.module';
import { NgxSelectModule } from 'ngx-select-ex';
@NgModule({
    imports: [
        CommonModule,
        UserRegisterRoutingModule,
        NgxSelectModule
    ],
    declarations: [
        UserRegisterComponent
    ],
    providers: [],
    exports: [
        UserRegisterComponent
    ]
})

export class UserRegisterModule { }