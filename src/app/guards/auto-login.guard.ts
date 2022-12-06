import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
@Injectable({
  providedIn: 'root'
})
export class AutoLoginGuard implements CanLoad {
  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) { }
  canLoad(): boolean {
    if (this.authService.getData('token') != 'undefined' && this.authService.getData('token') != null) {
      console.log('set token: ', this.authService.getData('token'));
      this.router.navigateByUrl('/home');
      return true;
    } else {
      return true;
    }
  }
}