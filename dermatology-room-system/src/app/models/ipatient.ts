import {ICalendar} from './icalendar';

export interface IPatient {
  pa_id?: number;
  pa_name?: string;
  pa_gender?: boolean;
  pa_birthday?: string;
  pa_address?: string;
  pa_phone?: string;
  pa_id_card?: string;
  pa_email?: string;
  username?: string;
}
