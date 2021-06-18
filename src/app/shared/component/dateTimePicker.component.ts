import { Component, Input, Output } from'@angular/core';
import { LocaleConfig, LocaleService } from 'ngx-daterangepicker-material';
import * as moment from 'moment';

@Component({
    selector: 'app-date-time-picker',
    templateUrl: './dateTimePicker.component.html',
    providers: [ LocaleService ]
})

export class DateTimePickerComponent {
    _config: any = {};
    calendarLocale: LocaleConfig;
    ranges: any;
    @Input() id: any;
    @Input() selectedRange: any;
    @Input() set config(value: any) {
        if (this._config != value) {
            this._config = value;
        }
    }
    constructor() {
        this.calendarLocale = {
          customRangeLabel: 'Custom Range',
          applyLabel: 'Apply',
          clearLabel: 'Clear',
          format: 'DD/MM/YYYY',
          daysOfWeek: ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'],
          monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          firstDay: 1
        };
        
        this.ranges = {
          'Current day': [moment(), moment()],
          'Current week': [moment().startOf('isoWeek'), moment().endOf('isoWeek')],
          'Next 2 days': [moment().add(1, 'days'), moment().add(2, 'days')],
          'Next 3 days': [moment().add(1, 'days'), moment().add(3, 'days')],
          'Next weekend': [this.getNextSaturday(), this.getNextSunday()]
        };
    
        this._config.calendarPlaceholder = 'All';
    
        this._config.minDate = moment();
        this._config.maxDate = moment().clone().add(10, 'years');
    }


    ngOnInit() {

    }
    getNextSaturday() {
      const dayINeed = 6; // for Saturday
      const today = moment().isoWeekday();
      if (today <= dayINeed) {
        return moment().isoWeekday(dayINeed);
      } else {
        return moment().add(1, 'weeks').isoWeekday(dayINeed);
      }
    }
  
    getNextSunday() {
      const dayINeed = 7; // for Sunday
      const today = moment().isoWeekday();
      if (today <= dayINeed) {
        return moment().isoWeekday(dayINeed);
      } else {
        return moment().add(1, 'weeks').isoWeekday(dayINeed);
      }
    }
}