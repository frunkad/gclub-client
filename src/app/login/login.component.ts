import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fireauth: AuthService) { }

  ngOnInit() {
  }

  signIn(){
    this.fireauth.signInWithGoogle();
  }

}
