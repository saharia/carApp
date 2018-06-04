import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users';
declare var customJS: any;
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public user: Users;
  notifyObj: any;
  constructor() { 
    this.notifyObj = new customJS();
    this.user = new Users();
  }

  ngOnInit() {

  }

  onSubmit(event) {
    const params = [ this.user.firstName, this.user.email, this.user.password, 1, new Date() ];
    this.notifyObj.notify('bottom', 'left', '', 'danger', 'animated fadeInUp', 'animated fadeOutDown', 'Email already exists');
    this.user.insert(params);
  }

}
