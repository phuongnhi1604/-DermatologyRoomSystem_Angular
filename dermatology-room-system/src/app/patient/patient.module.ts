import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientSearchComponent } from './patient-search/patient-search.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PatientRoutingModule
  ]
})
export class PatientModule { }
