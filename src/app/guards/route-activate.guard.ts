import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class CanActivateDashboard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<GuardResult> {
    const permission = localStorage.getItem('user-token');
    if (!permission) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
