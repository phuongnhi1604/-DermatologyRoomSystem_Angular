import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientListComponent} from '../patient/patient-list/patient-list.component';
import {PatientCreateComponent} from '../patient/patient-create/patient-create.component';
import {PatientUpdateComponent} from '../patient/patient-update/patient-update.component';
import {DoctorCreateComponent} from './doctor-create/doctor-create.component';
import {DoctorListComponent} from './doctor-list/doctor-list.component';


const routes: Routes = [
    {path: 'list', component: DoctorListComponent},
    {path: 'create', component: DoctorCreateComponent},
    {path: 'update/:id', component: PatientUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
