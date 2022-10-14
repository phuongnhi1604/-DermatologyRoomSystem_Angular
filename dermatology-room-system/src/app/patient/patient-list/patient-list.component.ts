import {Component, OnInit} from '@angular/core';
import {IPatient} from '../../models/ipatient';
import {PatientService} from '../../service/patient.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-patient-list',
    templateUrl: './patient-list.component.html',
    styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
    patients: IPatient[] = [];
    patientDelete: IPatient = {};
    p = 1;
    name: string;
    config: any;
    searchPatientForm: FormGroup;

    constructor(private patientService: PatientService) {
    }

    ngOnInit(): void {
        this.patientService.getAll().subscribe(patients => {
            this.patients = patients;
        });
        this.searchPatientForm = new FormGroup({
            pa_name: new FormControl('')
        });
    }

    getAll() {
        this.patientService.getAll().subscribe(patients => {
            this.patients = patients;
            console.log(patients);
        });
    }

    getPatientByName(paName: string) {
        this.patientService.getPatientByName(paName).subscribe(patients => {
            this.patients = patients;
        });
    }

    searchPatient() {
        this.patientService.search(this.searchPatientForm.value.pa_name).subscribe(data => {
            return this.patients = data;
        });
    }

    getPatientDelete(patient: IPatient) {
        this.patientDelete = patient;
    }

    deletePatient(id: number) {
        this.patientService.deletePatient(id).subscribe(
            () => {
            },
            (e) => {
                console.log(e);
            },
            () => {
                alert('Xoá thành công');
                this.ngOnInit();
            });
    }
}
