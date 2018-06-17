import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, Router} from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from './user.service';


@Injectable()
export class FireShieldGuard implements CanActivate {

  constructor(
    public afAuth: AngularFireAuth,
    public userService: UserService,
    private router: Router
  ) {}

  canActivate(): Promise<boolean>{
    
    return new Promise((resolve, reject) => {
      this.userService.getCurrentUser()
      .then(user => {
        console.log("yuip")
        console.log(user);
        return resolve(true);
      }, err => {
        console.log("noey");
        console.log(err);
        return resolve(false);
      })
    })
  }
}