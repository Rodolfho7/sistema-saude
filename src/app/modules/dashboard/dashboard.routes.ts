import { Routes } from '@angular/router';
import { AdministradoresComponent } from './pages/administradores/administradores.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './dashboard.component';
import { PacienteDetalhesComponent } from './pages/paciente-detalhes/paciente-detalhes.component';
import { ProfissionaisComponent } from './pages/profissionais/profissionais.component';

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
        path: 'administradores',
        component: AdministradoresComponent,
        pathMatch: 'full',
      },
      {
        path: 'profissionais',
        component: ProfissionaisComponent,
        pathMatch: 'full',
      },
      {
        path: 'pacientes',
        component: PacientesComponent,
        pathMatch: 'full',
      },
      {
        path: 'pacientes/:id',
        component: PacienteDetalhesComponent,
        pathMatch: 'full',
      },
    ],
  },
];
