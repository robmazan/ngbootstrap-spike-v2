import { Component, ViewChild, ViewEncapsulation, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { NgbDateParserFormatter, NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true
    }
  ]
})
export class DatepickerComponent implements ControlValueAccessor {
  @ViewChild('calendar') calendar;
  @Input() disabled;
  @Input() placeholder;

  registerOnChange(fn) {
    this.calendar.registerOnChange(value => {
      value = `${value.year}-${String(value.month).padStart(2, '0')}-${String(value.day).padStart(2, '0')}`;
      fn(value);
    });
  }
  registerOnTouched(fn) {
    this.calendar.registerOnTouched(fn);
  }
  setDisabledState(isDisabled) {
    this.calendar.setDisabledState(isDisabled);
  }
  writeValue(value) {
    if (value) {
      const [year, month, day] = value.split('-');
      this.calendar.manualDateChange(`${day} / ${month} / ${year}`, true);
    } else {
      this.calendar.writeValue(null);
    }
  }
}