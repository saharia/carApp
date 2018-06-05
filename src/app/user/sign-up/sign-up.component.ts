import { Component, OnInit } from '@angular/core';
import { Users } from '../../models/users';
import { Router } from "@angular/router";
declare var customJS: any;
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public user: Users;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  notifyObj: any;
  constructor(private router: Router) { 
    this.notifyObj = new customJS();
    this.user = new Users();
  }

  ngOnInit() {

  }

  onSubmit(event) {
    this.user.insert(this.user).then(
      (result) => {
        if(result[0] && result[0]['msg']) {
          this.notifyObj.notifyBottomLeft('success', result[0]['msg']);
          this.router.navigateByUrl('/login');
        }
      },
      (error) => {
        if (error.msg) {
          this.notifyObj.notifyBottomLeft('danger', error.msg);
        }
      }
    );
  }

}
