import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { CanLoad, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) { }
  canLoad(): boolean {
    if (this.authService.getData('token') != 'undefined' && this.authService.getData('token') != null) {
      console.log('set token: ', this.authService.getData('token'));
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return true;
    }
  }
}