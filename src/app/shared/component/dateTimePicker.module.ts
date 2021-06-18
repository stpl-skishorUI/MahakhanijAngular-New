import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DateTimePickerComponent } from './dateTimePicker.component';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        NgxDaterangepickerMd.forRoot()
    ],
    declarations: [
        DateTimePickerComponent
    ],
    exports: [
        DateTimePickerComponent
    ]
})

export class DateTimePickerModule {}