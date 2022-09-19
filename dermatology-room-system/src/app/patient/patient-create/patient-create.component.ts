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
    paName: new FormControl(),
    paGender: new FormControl(),
    paAddress: new FormControl(),
    paPhone: new FormControl(),
    paIdCard: new FormControl(),
    paEmail: new FormControl(),
    paUserName: new FormControl(),
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
      this.router.navigate(['/patient/list']);
    }, e => console.log(e));
  }

}
