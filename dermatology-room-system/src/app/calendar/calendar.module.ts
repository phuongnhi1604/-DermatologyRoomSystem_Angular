import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarListComponent } from './calendar-list/calendar-list.component';
import { CalendarCreateComponent } from './calendar-create/calendar-create.component';
import { CalendarUpdateComponent } from './calendar-update/calendar-update.component';


@NgModule({
  declarations: [CalendarListComponent, CalendarCreateComponent, CalendarUpdateComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule
  ]
})
export class CalendarModule { }
