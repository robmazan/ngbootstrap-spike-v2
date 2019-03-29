import { Component, OnInit, ViewChild, Input, forwardRef } from '@angular/core';

import { FormControl, DefaultValueAccessor, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-my-input',
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.css'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyInputComponent),
      multi: true
    }
  ]

})
export class MyInputComponent implements OnInit, ControlValueAccessor {
  @Input() name;
  @Input() placeholder;
  control = new FormControl();
  @ViewChild(DefaultValueAccessor) cva: ControlValueAccessor;

  constructor() { }

  ngOnInit() {
    console.log(this.control, this.cva);
  }

  registerOnChange(fn) {
    this.cva.registerOnChange(fn);
  }

  registerOnTouched(fn) {
    this.cva.registerOnTouched(fn);
  }

  setDisabledState(s) {
    this.cva.setDisabledState(s);
  }

  writeValue(value) {
    this.cva.writeValue(value);
  }

}