import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PatientService} from '../../service/patient.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-patient-create',
    templateUrl: './patient-create.component.html',
    styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {
    patientCreateForm = new FormGroup({
        pa_name: new FormControl(),
        pa_birthday: new FormControl(),
        pa_gender: new FormControl(),
        pa_address: new FormControl(),
        pa_phone: new FormControl(),
        pa_id_card: new FormControl(),
        pa_email: new FormControl(),
        username: new FormControl(),
    });
    constructor(private patient: PatientService,
                private activatedRouter: ActivatedRoute,
                private router: Router) { }

    ngOnInit(): void {
    }
    submit() {
        const patient = this.patientCreateForm.value;
        this.patient.savePatient(patient).subscribe(() => {
            alert('Tạo thành công');
            this.patientCreateForm.reset();
            this.router.navigate(['']);
        }, e => console.log(e));
    }

}
