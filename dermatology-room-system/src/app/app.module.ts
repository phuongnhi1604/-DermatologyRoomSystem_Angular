import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './share/navbar/navbar.component';
import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { PatientCreateComponent } from './patient/patient-create/patient-create.component';
import { PatientUpdateComponent } from './patient/patient-update/patient-update.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AdminCreateComponent } from './admin/admin-create/admin-create.component';
import { AdminUpdateComponent } from './admin/admin-update/admin-update.component';
import { MedicalListComponent } from './medical/medical-list/medical-list.component';
import { MedicalCreateComponent } from './medical/medical-create/medical-create.component';
import { MedicalUpdateComponent } from './medical/medical-update/medical-update.component';
import { FooterComponent } from './share/footer/footer.component';
import { HomeComponent } from './share/home/home.component';
import { HeaderComponent } from './share/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PatientListComponent,
    PatientCreateComponent,
    PatientUpdateComponent,
    AdminListComponent,
    AdminCreateComponent,
    AdminUpdateComponent,
    MedicalListComponent,
    MedicalCreateComponent,
    MedicalUpdateComponent,
    FooterComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
