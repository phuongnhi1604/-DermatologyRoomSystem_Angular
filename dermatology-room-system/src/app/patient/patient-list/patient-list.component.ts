import { Component, OnInit } from '@angular/core';
import {IPatient} from '../../models/ipatient';
import {PatientService} from '../../service/patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patinets: IPatient[] = [];
  patientDelete: IPatient = {};
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.patientService.getAll().subscribe(patients => {
      this.patinets = patients;
      console.log(patients);
    });
  }
  getPatientDelete(patient: IPatient){
    this.patientDelete = patient;
  }
  deletePatient(id: number){
    this.patientService.deletePatient(id).subscribe(
      () => {
      },
      () => {
      },
      () => {
        alert('Xoá thành công');
        this.ngOnInit();
      });
  }
}
