import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private router: Router, private authService: AuthService) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Promise<boolean>((resolve, reject) => {
      this.authService.checkAuth().then(
        (result) => {
          //console.log(result);
          if (result) {
            sessionStorage.setItem("jsessionid", JSON.stringify(result));
            resolve(true);
          } else {
            resolve(false);
            this.router.navigateByUrl('/login');
          }
        },
        (error) => {
          resolve(false);
        }
       )
    });
  }
  
}
