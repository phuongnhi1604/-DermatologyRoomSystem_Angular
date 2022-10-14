import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPatient} from '../models/ipatient';
import {IPatientAccount} from '../models/i-patient-account';
import {IDoctorAccount} from '../models/i-doctor-account';

const API_URL = `${environment.apiUrl}`;

@Injectable({
    providedIn: 'root'
})
export class AccountServiceService {

    constructor(private http: HttpClient) {
    }

    saveAccountPatient(accountPatient): Observable<IPatientAccount> {
        return this.http.post<IPatientAccount>(API_URL + '/api/account/create-Patient', accountPatient);
    }
    getAllUsername(): Observable<string[]> {
        return this.http.get<string[]>(API_URL + '/api/account/list-Username');
    }
    saveAccountDoctor(accountDoctor): Observable<IDoctorAccount> {
        return this.http.post<IDoctorAccount>(API_URL + '/api/account/create-Doctor', accountDoctor);
    }
}
