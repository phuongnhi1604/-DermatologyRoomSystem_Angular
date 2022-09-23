import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPatient} from '../models/ipatient';
import {IHours} from '../models/ihours';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class HoursService {

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<IHours[]> {
        return this.http.get<IHours[]>(API_URL + '/api/patient');
    }
}
