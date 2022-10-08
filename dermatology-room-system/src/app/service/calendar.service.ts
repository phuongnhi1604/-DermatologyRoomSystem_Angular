import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {ICalendar} from '../models/icalendar';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private http: HttpClient) { }

    getAll(): Observable<ICalendar[]> {
        return this.http.get<ICalendar[]>(API_URL+ '/api/calendar');
    }
    saveCalendar(calendar): Observable<ICalendar>{
      return this.http.post<ICalendar>(API_URL + '/api/calendar', calendar);
    }
    findById(id: number): Observable<ICalendar>{
      return this.http.get<ICalendar>(`${API_URL}/api/calendar/${id}`);
    }
    updateCalendar(id: number, calendar: ICalendar): Observable<ICalendar> {
        // @ts-ignore
        return this.http.put<ICalendar>(`${API_URL}/api/calendar/${id}`);
    }
}
