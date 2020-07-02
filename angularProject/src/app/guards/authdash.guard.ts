import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthdashGuard implements CanActivate {
  routes: any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    //for dashboard superadmin
    if (localStorage.getItem('userdashboard') != null) {
      return true;
    } else {
      this.routes.navigate(['/dashboard']);
      return false;
    }
  }
}
