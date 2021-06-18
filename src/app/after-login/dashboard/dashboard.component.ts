import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../after-login.component.css']
})
export class DashboardComponent {
  title = "rupa";
  selectedRange = null;
  dateTimePickerConfig: any = {
    alwaysShowCalendars: true,
    showCustomRangeLabel:true,
    linkedCalendars:true,
    ranges:true,
    showClearButton:true,
    locale:true,
    minDate:true,
    placeholder:"dd-mm-yyyy",
    keepCalendarOpeningWithRange:true,
    maxDate:true
  }
  constructor(
  ) {
  }

  ngOnInit(): void {
  }
}
