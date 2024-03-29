import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';

import { SharedModule } from '@common/shared.module';
import { GridModule } from '@common/grid-components/grid.module';

import { LeftBarModule } from '../left-bar/left-bar.module';

import { FacultyRoutingModule } from './faculty-routing.module';

import { FacultyComponent } from './faculty.component';

import { FacultyDashboardComponent } from './dashboard/dashboard.component';
import { FacultyCourseConfigComponent } from './course-config/course-config.component';
import { FacultyProfileComponent } from './profile/profile.component';
import { FacultyMarksComponent } from './faculty-marks/faculty-marks.component';
import { FacultyReportsComponent } from './faculty-reports/faculty-reports.component';
@NgModule({
    declarations: [
        FacultyComponent,
        FacultyDashboardComponent,
        FacultyCourseConfigComponent, 
        FacultyProfileComponent, 
        FacultyMarksComponent, 
        FacultyReportsComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        LeftBarModule,
        FacultyRoutingModule,
        AgGridModule,
        SharedModule,
        GridModule,
    ],
    providers: [
    ]
})
export class FacultyModule { }
