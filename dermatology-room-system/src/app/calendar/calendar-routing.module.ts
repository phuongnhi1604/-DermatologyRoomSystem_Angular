import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CalendarListComponent} from './calendar-list/calendar-list.component';
import {CalendarCreateComponent} from './calendar-create/calendar-create.component';
import {CalendarUpdateComponent} from './calendar-update/calendar-update.component';


const routes: Routes = [
    {path: 'list', component: CalendarListComponent},
    {path: 'create', component: CalendarCreateComponent},
    {path: 'update/:id', component: CalendarUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
