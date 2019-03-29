import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { NgbDateCustomParserFormatter } from './datepicker/dateformat';
import { MyInputComponent } from './my-input/my-input.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, NgbModule ],
  declarations: [ AppComponent, HelloComponent, DatepickerComponent, MyInputComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    {provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter}
  ]
})
export class AppModule { }
