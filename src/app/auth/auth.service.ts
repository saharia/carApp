import { Injectable } from '@angular/core';
import { Users } from '../models/users';

@Injectable()
export class AuthService {
  public user: Users;
  constructor() {
    this.user = new Users();
  }

  checkAuth() {
    return this.user.checkAuth();
  }

}
