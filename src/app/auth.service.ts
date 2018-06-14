import { Injectable } from '@angular/core';

import { Router } from "@angular/router";
import {AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<firebase.User>;
  private userdetails: firebase.User = null;
  
  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;

    this.user.subscribe(
      (user) => {
        if (user) {
          this.userdetails = user;
          console.log(this.userdetails);
        }
        else {
          this.userdetails = null;
        }
      }
    )
   }

   signInWithGoogle() {
     return this._firebaseAuth.auth.signInWithPopup(
       new firebase.auth.GoogleAuthProvider()
     )
   }

   isLoggedIn() {
     if (this.userdetails == null){
       return false;
     }
     return true;
   }

   logout() {
     this._firebaseAuth.auth.signOut().then((res) => this.router.navigate(['/']));
   }
}
