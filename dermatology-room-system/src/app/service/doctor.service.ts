import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {IDoctor} from '../models/idoctor';

const API_URL = `${environment.apiUrl}`;
@Injectable({
    providedIn: 'root'
})
export class DoctorService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<IDoctor[]> {
        return this.http.get<IDoctor[]>(API_URL + '/api/doctor');
    }

    saveDoctor(doctor): Observable<IDoctor> {
        return this.http.post<IDoctor>(API_URL + 'api/doctor', doctor);
    }

    getDoctorByName(docName: string): Observable<IDoctor[]>{
        return this.http.get<IDoctor[]>(`${API_URL}/api/doctor/search?doctor_name=${docName}`);
    }
    findById(id: number): Observable<IDoctor>{
        return this.http.get<IDoctor>(`${API_URL}/api/patient/${id}`);
    }

    updateDoctor(id: number, doctor: IDoctor): Observable<IDoctor>{
        return this.http.put<IDoctor>(`${API_URL}/api/doctor/${id}`, doctor);
    }
    deleteDoctor(id: number): Observable<IDoctor> {
        return this.http.delete<IDoctor>(`${API_URL}/api/doctor/${id}`);
    }
}
