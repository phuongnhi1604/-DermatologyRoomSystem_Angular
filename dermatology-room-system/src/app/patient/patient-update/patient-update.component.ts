import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PatientService} from '../../service/patient.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {IPatient} from '../../models/ipatient';

@Component({
    selector: 'app-patient-update',
    templateUrl: './patient-update.component.html',
    styleUrls: ['./patient-update.component.css']
})
export class PatientUpdateComponent implements OnInit {
<<<<<<< HEAD
  patientUpdateForm: FormGroup;
  id: number;
  patientUpdate: IPatient = {};
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
          pa_gender: new FormControl(patient.pa_gender),
          pa_birthday: new FormControl(patient.pa_birthday),
          pa_address: new FormControl(patient.pa_address),
          pa_phone: new FormControl(patient.pa_phone),
          pa_id_card: new FormControl(patient.pa_id_card),
          pa_email: new FormControl(patient.pa_email),
          username: new FormControl(patient.username)
      });
    });
  }
  ngOnInit(): void {
      this.getPatient(this.id);
  }
  updatePatient(id: number) {
    const patient = this.patientUpdateForm.value;
    this.patientService.updatePatient(id, patient).subscribe(() => {
      alert('Cập nhật thành công');
      this.router.navigateByUrl('/patient/list');
    });
  }
=======
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

    ngOnInit(): void {
    }

    updatePatient(id: number) {
        const patient = this.patientUpdateForm.value;
        this.patientService.updatePatient(id, patient).subscribe(() => {
            alert('Cập nhật thành công');
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
>>>>>>> a9b4569962975a408abfda27143a8b9afa8b3374
}
