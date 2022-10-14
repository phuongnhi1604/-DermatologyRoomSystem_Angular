import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientDetailComponent} from './patient-detail/patient-detail.component';
import {CalendarDetailComponent} from './calendar-detail/calendar-detail.component';

const routes: Routes = [
    {path: 'info-detail/:id', component: PatientDetailComponent},
    {path: 'calendar-detail/:id', component: CalendarDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientInfoRoutingModule { }
