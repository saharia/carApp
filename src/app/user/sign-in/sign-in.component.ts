import { Component, OnInit } from '@angular/core';
import * as path from 'path';

import * as electron from 'electron';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(UserName, Password) {
  	console.log(UserName, Password)
  }

}
