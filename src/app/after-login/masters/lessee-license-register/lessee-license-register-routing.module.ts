import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LesseeLicenseRegisterComponent } from './lessee-license-register.component';
const routes: Routes = [
    { path: '', component:LesseeLicenseRegisterComponent  }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})

export class LesseeLicenseRegisterRoutingModule { }