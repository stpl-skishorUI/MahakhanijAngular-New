import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { QuarryRegisterComponent } from './quarry-register.component';
import {QuarryRegisterRoutingModule} from './quarry-register-routing.module';
import { NgxSelectModule } from 'ngx-select-ex';
@NgModule({
    imports: [
        CommonModule,
        QuarryRegisterRoutingModule,
        NgxSelectModule
    ],
    declarations: [
        QuarryRegisterComponent
    ],
    providers: [],
    exports: [
        QuarryRegisterComponent
    ]
})

export class QuarryRegisterModule { }