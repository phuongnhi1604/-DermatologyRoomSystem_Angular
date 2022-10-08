import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PatientService} from '../../service/patient.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ComparePassword} from '../../validate/customvalidator.validator';

@Component({
    selector: 'app-patient-create',
    templateUrl: './patient-create.component.html',
    styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {
    patientCreateForm = new FormGroup({
        pa_name: new FormControl('', [Validators.required]),
        pa_birthday: new FormControl('', [Validators.required]),
        pa_gender: new FormControl('', [Validators.required]),
        pa_address: new FormControl('', [Validators.required]),
        pa_phone: new FormControl('', [Validators.required]),
        pa_id_card: new FormControl('', [Validators.required]),
        pa_email: new FormControl('', [Validators.required]),
        username: new FormControl('', [Validators.required]),
        pass: new FormGroup({
            password: new FormControl('', [Validators.required]),
            confirmPassword: new FormControl('', [Validators.required])
        }, ComparePassword)
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
