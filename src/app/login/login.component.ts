import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fireauth: AuthService,private router: Router) {
  }

  ngOnInit() {
    console.log(this.fireauth.isLoggedIn())
    
  }

  signIn(){
    this.fireauth.signInWithGoogle().then((success) => {
        this.router.navigate(["/dashboard"]);
           
    }).catch((err)=>{
      console.log(err);
    });
  }

  lout() {
    console.log(this.fireauth.isLoggedIn());
  }

  

}
