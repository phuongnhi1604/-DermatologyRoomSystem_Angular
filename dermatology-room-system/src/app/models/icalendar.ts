import {IHours} from './ihours';
import {IPatient} from './ipatient';

export interface ICalendar {
    cal_id?: number;
    cal_date?: string;
    hours?: IHours;
    cal_status?: string;
    patient?: IPatient;
}
