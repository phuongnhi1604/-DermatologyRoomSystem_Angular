import {Component, OnInit} from '@angular/core';
import {IPatient} from '../../../models/ipatient';
import {PatientService} from '../../../service/patient.service';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
    selector: 'app-patient-detail',
    templateUrl: './patient-detail.component.html',
    styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
    id: number;
    patient: IPatient = {};

    constructor(private patientService: PatientService, private router: Router,
                private activatedRoute: ActivatedRoute) {
        this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
            this.id = +param.get('id');
            this.getPatient(this.id);
        });
    }

    ngOnInit(): void {
    }

    getPatient(id: number) {
        return this.patientService.findById(id).subscribe(patient => {
            this.patient = patient;
        });
    }
}
