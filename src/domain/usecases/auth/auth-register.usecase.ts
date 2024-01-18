import { Injectable } from '@angular/core';
import { AuthService } from 'src/data/services/auth.service';
import { AuthRegisterModel } from 'src/domain/models/auth.model';
@Injectable({
  providedIn: 'root',
})
class AuthRegister {
  private authService = new AuthService();
  constructor() {}

  Register(body: AuthRegisterModel): boolean {

    this.authService.Register(body);

    return true;
  }
}

export { AuthRegister };
