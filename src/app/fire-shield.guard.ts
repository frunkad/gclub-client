import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FireShieldGuard implements CanActivate {

  constructor(private router: Router, private fireauth: AuthService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      console.log("gonna print",this.fireauth.isLogged       // {1}
        .pipe(
          take(1),                              // {2} 
          map((isLoggedIn: boolean) => {    
            console.log("lolololol",isLoggedIn);     // {3}
            if (!isLoggedIn){
              this.router.navigate(['/login']);  // {4}
              return false;
            }
            return true;
          })
        ));
    console.log("fe",this.fireauth.isLogged);
    console.log(this.fireauth.isLoggedIn())
    console.log(this.fireauth.user);
    this.fireauth.user.pipe(tap(_=>{
      console.log("tap",_);
    }));
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
