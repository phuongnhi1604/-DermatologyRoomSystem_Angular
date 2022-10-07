import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CalendarService} from '../../service/calendar.service';
import {PatientService} from '../../service/patient.service';
import {HoursService} from '../../service/hours.service';
import {ActivatedRoute, Router} from '@angular/router';
import {IPatient} from '../../models/ipatient';
import {IHours} from '../../models/ihours';

@Component({
    selector: 'app-calendar-create',
    templateUrl: './calendar-create.component.html',
    styleUrls: ['./calendar-create.component.css']
})
export class CalendarCreateComponent implements OnInit {
    patient: IPatient[] = [];
    hours: IHours[] = [];
    calendarCreateForm = new FormGroup({
        cal_date: new FormControl(),
        hours: new FormControl(),
        cal_status: new FormControl(),
        patient: new FormControl(),
    });
    constructor(private calendarService: CalendarService,
                private patientService: PatientService,
                private hoursService: HoursService,
                private activatedRouter: ActivatedRoute,
                private router: Router) { }

    ngOnInit(): void {
        this.getAllPatient();
        this.getAllHours();
    }

    submit() {
        const calendar = this.calendarCreateForm.value;
        this.calendarService.saveCalendar(calendar).subscribe(() => {
            alert('Tạo thành công');
            this.calendarCreateForm.reset();
            this.router.navigate(['/calendar/list']);
        }, e => console.log(e));
    }
    getAllPatient() {
        this.patientService.getAll().subscribe(patient => {
            this.patient = patient;
            console.log(patient);
        });
    }
    getAllHours() {
        this.hoursService.getAll().subscribe(hours => {
            this.hours = hours;
            console.log(hours);
        });
    }

}
