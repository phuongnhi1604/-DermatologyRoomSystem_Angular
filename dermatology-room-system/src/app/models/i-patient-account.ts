import {IAccount} from './i-account';
import {IPatient} from './ipatient';

export interface IPatientAccount {
    pa_id?: number;
    pa_name?: string;
    pa_gender?: string;
    pa_birthday?: string;
    pa_address?: string;
    pa_phone?: string;
    pa_id_card?: string;
    pa_email?: string;
    username?: number;
    password?: string;
    // patient: IPatient;
    // account: IAccount;
}
