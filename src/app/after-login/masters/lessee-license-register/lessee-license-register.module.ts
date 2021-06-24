import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LesseeLicenseRegisterComponent } from './lessee-license-register.component';
import { LesseeLicenseRegisterRoutingModule } from './lessee-license-register-routing.module'
import { NgxSelectModule } from 'ngx-select-ex';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        LesseeLicenseRegisterRoutingModule,
        NgxSelectModule
    ],
    declarations: [
        LesseeLicenseRegisterComponent
    ],
    exports: [
        LesseeLicenseRegisterComponent
    ]
})

export class LesseeLicenseRegisterModule { }