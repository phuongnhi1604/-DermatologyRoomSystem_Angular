import {IHours} from './ihours';
import {IPatient} from './ipatient';
import {ICalendarStatus} from './icalendar-status';
import {IDoctor} from './idoctor';

export interface ICalendar {
    cal_id?: number;
    cal_date?: string;
    cal_status?: ICalendarStatus;
    patient?: IPatient;
    doctor?: IDoctor;
}
