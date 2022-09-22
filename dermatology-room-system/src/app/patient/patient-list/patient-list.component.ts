import { Component, OnInit } from '@angular/core';
import {IPatient} from '../../models/ipatient';
import {PatientService} from '../../service/patient.service';

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
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.patientService.getAll().subscribe(patients => {
      this.patients = patients;
      console.log(patients);
    });
  }
  getPatientByName(paName: string) {
    this.patientService.getPatientByName(paName).subscribe(patients =>{
      this.patients = patients;
    });
  }
  searchPatient(paName: string) {
    this.patientService.getPatientByName(paName);
  }
  getPatientDelete(patient: IPatient){
    this.patientDelete = patient;
  }
  deletePatient(id: number) {
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
