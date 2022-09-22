import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PatientService} from '../../service/patient.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-patient-update',
  templateUrl: './patient-update.component.html',
  styleUrls: ['./patient-update.component.css']
})
export class PatientUpdateComponent implements OnInit {
  patientUpdateForm: FormGroup;
  id: number;

  constructor(private patientService: PatientService,
              private activatedRouter: ActivatedRoute,
              private router: Router) {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.getPatient(this.id);
    });
  }
  private getPatient(id: number) {
    return this.patientService.findById(id).subscribe(patient => {
      this.patientUpdateForm = new FormGroup({
        pa_name: new FormControl(patient.pa_name),
        pa_birthday: new FormControl(patient.pa_birthday),
        pa_gender: new FormControl(patient.pa_gender),
        pa_address: new FormControl(patient.pa_address),
        pa_phone: new FormControl(patient.pa_phone),
        pa_id_card: new FormControl(patient.pa_id_card),
        pa_email: new FormControl(patient.pa_email),
        username: new FormControl(patient.username),
      });
    });
  }

  ngOnInit(): void {
  }
  updatePatient(id: number){
    const patient = this.patientUpdateForm.value;
    this.patientService.updatePatient(id, patient).subscribe(() =>{
      alert('Cập nhật thành công');
    });
  }
}
