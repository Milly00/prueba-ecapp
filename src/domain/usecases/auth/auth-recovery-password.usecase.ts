import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/data/services/auth.service';
import { AuthRecoveryPasswordModel } from 'src/domain/models/auth.model';
@Injectable({
  providedIn: 'root',
})
class AuthRecoveryPassword {
  private authService = new AuthService();
  private router = new Router();
  constructor() {}

  RecoveryPassword(body: AuthRecoveryPasswordModel): boolean {

    this.authService.RecoveryPassword(body);
    this.router.navigateByUrl('/auth/login');
    return true;
  }
}

export { AuthRecoveryPassword };
