import { Component, OnInit } from '@angular/core';
import * as path from 'path';
import { Users } from '../../models/users';
import { Router } from "@angular/router";
declare var customJS: any;

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public user: Users;
  notifyObj: any;
  constructor(private router: Router) {
    this.notifyObj = new customJS();
    this.user = new Users();
  }

  ngOnInit() {
  }

  onSubmit(email, password) {
    const params = { email: email, password: password };
    this.user.checkLogin(params).then(
      (result) => {
        if(result[0] && result[0]['msg']) {
          this.notifyObj.notifyBottomLeft('success', result[0]['msg']);
          this.router.navigateByUrl('/home');
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
