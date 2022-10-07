import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {path: 'patient', loadChildren: () => import('./patient/patient.module').then(module => module.PatientModule)},
    {path: 'calendar', loadChildren: () => import('./calendar/calendar.module').then(module => module.CalendarModule)},
    {path: 'doctor', loadChildren: () => import('./doctor/doctor.module').then(module => module.DoctorModule)},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
