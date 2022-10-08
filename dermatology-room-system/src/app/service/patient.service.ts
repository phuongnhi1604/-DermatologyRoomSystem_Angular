import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {IPatient} from '../models/ipatient';
import {HttpClient} from '@angular/common/http';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IPatient[]> {
    return this.http.get<IPatient[]>(API_URL + '/api/patient');
  }

  savePatient(patient): Observable<IPatient> {
    return this.http.post<IPatient>(API_URL + '/api/patient', patient);
  }
  getPatientByName(paName: string): Observable<IPatient[]> {
    return this.http.get<IPatient[]>(`${API_URL}/api/patient/search?pa_name=${paName}`);
  }
  findById(id: number): Observable<IPatient> {
    return this.http.get<IPatient>(`${API_URL}/api/patient/${id}`);
  }
  updatePatient(id: number, patient: IPatient): Observable<IPatient> {
    return this.http.put<IPatient>(`${API_URL}/api/patient/${id}`, patient);
  }

  deletePatient(id: number): Observable<IPatient> {
    return this.http.delete<IPatient>(`${API_URL}/api/patient/${id}`);
  }
}
