import { Injectable } from '@angular/core';

import { Router } from "@angular/router";
import {AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class AuthService {

  user: Observable<firebase.User>;
  private log2 = new BehaviorSubject<boolean>(false);

  userdetails: firebase.User = null;

  get isLogged() {
    return this.log2.asObservable();
  }
  
  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;

    this._firebaseAuth.authState.subscribe(
      (user) => {
        if (user) {
          this.userdetails = user;
          this.log2.next(true);
          console.log(this.userdetails);
        }
        else {
          this.userdetails = null;
          this.log2.next(false);
        }
      }
    )
   }

   signInWithGoogle() {
     return this._firebaseAuth.auth.signInWithPopup(
       new firebase.auth.GoogleAuthProvider()
     ).then((suc)=>{
       this._firebaseAuth.authState.subscribe(
         (user) => {
           if(user) {
             this.userdetails = user;
             this.log2.next(true);
             console.log("@",this.userdetails);
           }
           else{
             console.log("-@");
             this.log2.next(false);
             this.userdetails = null;
           }
         }
       )
     }).catch((err)=>{
       this.userdetails  = null;
       console.log(err);
     });
   }

   isLoggedIn() {
     if (this.userdetails == null){
       return false;
     }
     return true;
   }

   logout() {
     this._firebaseAuth.auth.signOut().then((res) => {
      this.userdetails = null; 
      this.router.navigate(['/'])});
   }
}
