import { Routes } from '@angular/router';
import { AdministratorsComponent } from './pages/administrators/administrators.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './dashboard.component';
import { PatientsDetailsComponent } from './pages/patients-details/patients-details.component';
import { ProfessionalsComponent } from './pages/professionals/professionals.component';

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'administrators',
        component: AdministratorsComponent,
        pathMatch: 'full',
      },
      {
        path: 'professionals',
        component: ProfessionalsComponent,
        pathMatch: 'full',
      },
      {
        path: 'patients',
        component: PatientsComponent,
        pathMatch: 'full',
      },
      {
        path: 'patients/:id',
        component: PatientsDetailsComponent,
        pathMatch: 'full',
      },
    ],
  },
];
