import { Component, OnInit } from '@angular/core';
import { Member, MOCKMEMBERS} from '../member';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  members= MOCKMEMBERS;
  selectedMember: Member;
  
  constructor() { }

  ngOnInit() {
  }

  onSelect(member: Member){

    this.selectedMember = member;

  }

}
