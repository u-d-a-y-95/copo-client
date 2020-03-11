import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { FacultyComponent } from './faculty/faculty.component';

const appRoutes: Routes = [
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'faculty',
        component: FacultyComponent
    }
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(
            appRoutes,
            {
                enableTracing: true
            }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
