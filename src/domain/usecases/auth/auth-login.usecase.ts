import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/data/services/auth.service';
import { AuthLoginModel } from 'src/domain/models/auth.model';
@Injectable({
  providedIn: 'root',
})
class AuthLogin {
  private authService = new AuthService();
  private router = new Router();

  constructor() {}

  Login(body: AuthLoginModel): boolean {

    this.authService.Login(body);
    this.router.navigateByUrl("/associates/associates");
    return true;
  }
}

export { AuthLogin };
