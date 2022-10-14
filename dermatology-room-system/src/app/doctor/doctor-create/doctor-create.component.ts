import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountServiceService} from '../../service/account-service.service';
import {DoctorService} from '../../service/doctor.service';
import {checkAge} from '../../validate/customvalidator.validator';

@Component({
    selector: 'app-doctor-create',
    templateUrl: './doctor-create.component.html',
    styleUrls: ['./doctor-create.component.css']
})
export class DoctorCreateComponent implements OnInit {
    doctorCreateForm: FormGroup;
    confirmPassCheck: string;
    usernameList: string[] = [];
    usernameAlreadyExist: string;

    constructor(private doctor: DoctorService,
                private activatedRouter: ActivatedRoute,
                private accountService: AccountServiceService,
                private router: Router, private patientAccount: AccountServiceService, private formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.doctorCreateForm = this.formBuilder.group({
            doctor: this.formBuilder.group({
                doctor_name: ['', [Validators.required, Validators.maxLength(49), Validators.minLength(8), Validators.pattern('^[A-ZÀ|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|Ì|Í|Ị|Ỉ|Ĩ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|Ỳ|Ý|Ỵ|Ỷ|Ỹ|Đ][a-zà|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ì|í|ị|ỉ|ĩ|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ỳ|ý|ỵ|ỷ|ỹ]*([ ][A-ZÀ|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|Ì|Í|Ị|Ỉ|Ĩ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|Ỳ|Ý|Ỵ|Ỷ|Ỹ|Đ][a-zà|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ì|í|ị|ỉ|ĩ|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ỳ|ý|ỵ|ỷ|ỹ]*)*$')]],
                doctor_gender: ['', [Validators.required]],
                doctor_birthday: ['', [Validators.required, checkAge]],
                doctor_address: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(59)]],
                doctor_phone: ['', [Validators.required, Validators.pattern('^(0[3|5|7|8|9])+([0-9]{8})$')]],
                doctor_id_card: ['', [Validators.required, Validators.pattern('^[0-9]{12}$')]],
                doctor_email: ['', [Validators.required, Validators.maxLength(39), Validators.pattern('(\\W|^)[\\w.+\\-]*@gmail\\.com(\\W|$)')]],
            }),
            account: this.formBuilder.group({
                username: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(19), Validators.pattern('^[a-z0-9]{8,20}$')]],
                password: ['', [Validators.required, Validators.maxLength(19), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]],
                confirmPassword: ['', [Validators.required]]
            })
        });
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
        return this.doctorCreateForm.controls;
    }
    submit() {
        // console.log(JSON.stringify(this.patientCreateForm.value));
        const doctorAccount1 = this.doctorCreateForm.value;
        this.patientAccount.saveAccountDoctor(doctorAccount1).subscribe(() => {
            alert('Tạo thành công');
            this.doctorCreateForm.reset();
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
