import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuarryRegisterComponent } from './quarry-register.component';
const routes: Routes = [
    { path: '', component:QuarryRegisterComponent  }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ]
})

export class QuarryRegisterRoutingModule { }