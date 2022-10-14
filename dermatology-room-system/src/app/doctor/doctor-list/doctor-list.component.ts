import { Component, OnInit } from '@angular/core';
import {IDoctor} from '../../models/idoctor';
import {DoctorService} from '../../service/doctor.service';

@Component({
    selector: 'app-doctor-list',
    templateUrl: './doctor-list.component.html',
    styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
    doctors: IDoctor[] = [];
    doctorDelete: IDoctor = {};
    name: string;

    constructor(private doctorService: DoctorService) {
    }


    ngOnInit(): void {
        this.getAll();
    }

    getAll() {
        this.doctorService.getAll().subscribe(doctors => {
            this.doctors = doctors;
            console.log(doctors);
        });
    }

    getDoctorByName(docName: string) {
        this.doctorService.getDoctorByName(docName).subscribe(doctors => {
            this.doctors = doctors;
        });
    }

    searchDoctor(docName: string) {
        this.doctorService.getDoctorByName(name);
    }

    getDoctorDelete(doctor: IDoctor) {
        this.doctorDelete = doctor;
    }

    deleteDoctor(id: number) {
        this.doctorService.deleteDoctor(id).subscribe(
            () => {
            },
            () => {
            },
            () => {
                alert('Xoá thành công');
                this.ngOnInit();
            });
    }
}
