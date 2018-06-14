import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

  constructor(private authser: AuthService) { }

  ngOnInit() {
  }

  signIn(){
    this.authser.signInWithGoogle();
  }

}
