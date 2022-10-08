import { Component, OnInit } from '@angular/core';
import {IDoctor} from '../../models/idoctor';

@Component({
    selector: 'app-doctor-list',
    templateUrl: './doctor-list.component.html',
    styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {
    doctors: IDoctor[] = [];
    name: string;
    constructor() { }

    ngOnInit(): void {
    }

    GetAll() {
    }
}
