import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
declare var customJS: any;
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public user: User;
  notifyObj: any;
  constructor() { 
    this.notifyObj = new customJS();
    this.user = new User();
  }

  ngOnInit() {

  }

  onSubmit(event) {
     console.log(this.notifyObj)
     this.notifyObj.notify('bottom', 'left', '', 'danger', 'animated fadeInUp', 'animated fadeOutDown', 'Email already exists');
  }

}
