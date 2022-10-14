import {IDoctor} from './idoctor';
import {IHours} from './ihours';

export interface IDoctorCalendar {
    doc_cal_id?: number;
    doctor_id?: IDoctor;
    hours_id?: IHours;
}
