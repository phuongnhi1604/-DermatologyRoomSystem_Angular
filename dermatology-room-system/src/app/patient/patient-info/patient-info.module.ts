import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientInfoRoutingModule } from './patient-info-routing.module';
import { CalendarDetailComponent } from './calendar-detail/calendar-detail.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';


@NgModule({
  declarations: [CalendarDetailComponent, PatientDetailComponent],
  imports: [
    CommonModule,
    PatientInfoRoutingModule
  ]
})
export class PatientInfoModule { }
