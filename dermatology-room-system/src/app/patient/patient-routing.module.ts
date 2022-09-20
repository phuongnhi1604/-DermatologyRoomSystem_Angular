import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PatientListComponent} from './patient-list/patient-list.component';
import {PatientCreateComponent} from './patient-create/patient-create.component';
import {PatientUpdateComponent} from './patient-update/patient-update.component';


const routes: Routes = [
  {path: 'list', component: PatientListComponent},
  {path: 'create', component: PatientCreateComponent},
  {path: 'update', component: PatientUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
