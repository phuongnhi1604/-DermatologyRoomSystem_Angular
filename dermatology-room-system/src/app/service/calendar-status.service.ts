import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICalendarStatus} from '../models/icalendar-status';

const API_URL = `${environment.apiUrl}`;
@Injectable({
    providedIn: 'root'
})
export class CalendarStatusService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<ICalendarStatus[]> {
        return this.http.get<ICalendarStatus[]>(API_URL + 'api/calendar-status');
    }
}
