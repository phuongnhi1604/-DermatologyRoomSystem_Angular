import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {PatientService} from '../../service/patient.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountServiceService} from '../../service/account-service.service';
import {IPatient} from '../../models/ipatient';
import {IAccount} from '../../models/i-account';
import {checkAge} from '../../validate/customvalidator.validator';

@Component({
    selector: 'app-patient-create',
    templateUrl: './patient-create.component.html',
    styleUrls: ['./patient-create.component.css']
})
export class PatientCreateComponent implements OnInit {
    patientCreateForm: FormGroup;
    confirmPassCheck: string;
    usernameList: string[] = [];
    usernameAlreadyExist: string;

    constructor(private patient: PatientService,
                private activatedRouter: ActivatedRoute,
                private accountService: AccountServiceService,
                private router: Router, private patientAccount: AccountServiceService, private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.patientCreateForm = this.formBuilder.group({
            patient: this.formBuilder.group({
                pa_name: ['', [Validators.required, Validators.maxLength(49), Validators.minLength(8), Validators.pattern('^[A-ZÀ|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|Ì|Í|Ị|Ỉ|Ĩ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|Ỳ|Ý|Ỵ|Ỷ|Ỹ|Đ][a-zà|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ì|í|ị|ỉ|ĩ|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ỳ|ý|ỵ|ỷ|ỹ]*([ ][A-ZÀ|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|Ì|Í|Ị|Ỉ|Ĩ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|Ỳ|Ý|Ỵ|Ỷ|Ỹ|Đ][a-zà|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ì|í|ị|ỉ|ĩ|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ỳ|ý|ỵ|ỷ|ỹ]*)*$')]],
                pa_gender: ['', [Validators.required]],
                pa_birthday: ['', [Validators.required, checkAge]],
                pa_address: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(59)]],
                pa_phone: ['', [Validators.required, Validators.pattern('^(0[3|5|7|8|9])+([0-9]{8})$')]],
                pa_id_card: ['', [Validators.required, Validators.pattern('^[0-9]{12}$')]],
                pa_email: ['', [Validators.required, Validators.maxLength(39), Validators.pattern('(\\W|^)[\\w.+\\-]*@gmail\\.com(\\W|$)')]],
            }),
            account: this.formBuilder.group({
                username: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(19), Validators.pattern('^[a-z0-9]{8,20}$')]],
                password: ['', [Validators.required, Validators.maxLength(19), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
                confirmPassword: ['', [Validators.required]]
            })
        });
        // @ts-ignore
        this.patientCreateForm.setValidators(this.passValidator(this.patientCreateForm.get('account').get('password'), this.patientCreateForm.get('account').get('confirmPassword')));
        this.getAllUsername();
    }
    getAllUsername() {
        return this.accountService.getAllUsername().subscribe(data => {
            this.usernameList = data;
        });
    }
    passValidator(control: AbstractControl, controlTwo: AbstractControl): () => (string | null) {
        return () => {
            if (control.value !== controlTwo.value) {
                return this.confirmPassCheck = 'Nhập lại mật khẩu chưa đúng.';
            }
            return this.confirmPassCheck = '';
        };
    }
    get form() {
        return this.patientCreateForm.controls;
    }
    submit() {
        // console.log(JSON.stringify(this.patientCreateForm.value));
        const patientAccount1 = this.patientCreateForm.value;
        this.patientAccount.saveAccountPatient(patientAccount1).subscribe(() => {
            alert('Tạo thành công');
            this.patientCreateForm.reset();
            this.router.navigate(['']);
        }, e => console.log(e));
    }

    checkUsername(username: string) {
        if (this.usernameList.indexOf(username) > -1) {
            this.usernameAlreadyExist = 'Tên đăng nhập đã tồn tại.';
        } else {
            this.usernameAlreadyExist = '';
        }
    }
}
