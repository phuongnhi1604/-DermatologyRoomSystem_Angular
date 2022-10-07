import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [DoctorListComponent],
    imports: [
        CommonModule,
        DoctorRoutingModule,
        FormsModule
    ]
})
export class DoctorModule { }
