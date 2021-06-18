import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DateTimePickerModule } from '../../shared/component/dateTimePicker.module';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        DashboardRoutingModule,
        DateTimePickerModule
    ],
    declarations: [
        DashboardComponent
    ],
    exports: [
        DashboardComponent
    ]
})

export class DashboardModule { 
    
}