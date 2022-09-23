import { Component, OnInit } from '@angular/core';
import {ICalendar} from '../../models/icalendar';
import {CalendarService} from '../../service/calendar.service';

@Component({
  selector: 'app-calendar-list',
  templateUrl: './calendar-list.component.html',
  styleUrls: ['./calendar-list.component.css']
})
export class CalendarListComponent implements OnInit {
    calendars: ICalendar[] = [];
  constructor(private calendarService: CalendarService) { }

    config: any;
  p = 1;
  ngOnInit(): void {
  }
    getAll(){
      this.calendarService.getAll().subscribe(calendars => {
          this.calendars = calendars;
      });
    }
}
