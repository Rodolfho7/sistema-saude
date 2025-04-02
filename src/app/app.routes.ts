import { Routes } from '@angular/router';
import { CanActivateDashboard } from './guards/route-activate.guard';
import { SignedInGuard } from './guards/signed-in.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./modules/login/login.component').then((m) => m.LoginComponent),
    canActivate: [SignedInGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.routes').then(
        (m) => m.dashboardRoutes
      ),
    canActivate: [CanActivateDashboard],
  },
];
