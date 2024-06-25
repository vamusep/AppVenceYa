import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated = !!localStorage.getItem('username'); //revisa si hay un usuario autenticado

    if (!isAuthenticated) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
