import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FireShieldGuard implements CanActivate {

  constructor(private router: Router, private fireauth: AuthService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log(next);
      if(next.data.pageLogin === "yes" && !this.fireauth.isLoggedIn()){
        return true;
      }
    if (this.fireauth.isLoggedIn()) {
      return true;
    }
    // this.router.navigate(['/login']);
    return false;
  }
}
