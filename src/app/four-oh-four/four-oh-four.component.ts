import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-four-oh-four',
  templateUrl: './four-oh-four.component.html',
  styleUrls: ['./four-oh-four.component.css']
})
export class FourOhFourComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
