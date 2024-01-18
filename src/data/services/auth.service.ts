/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  AuthLoginModel,
  AuthRecoveryPasswordModel,
  AuthRegisterModel,
  AuthResendConfirmationModel,
  AuthVerifyAccountModel,
} from 'src/domain/models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private route = new Router();
  
  constructor() {}

  Login(body: AuthLoginModel) {
    console.log(body);

  }

  Register(body: AuthRegisterModel) {
    //console.log(body);
    this.route.navigateByUrl('/auth/verify-account');
  }

  RecoveryPassword(body: AuthRecoveryPasswordModel) {
    //console.log(body);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  VerifyAccount(body: AuthVerifyAccountModel) {
    //console.log(body);
  }
  VerifyHash(){
    
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ResendEmail(body: AuthResendConfirmationModel) {
    //console.log(body);
  }

  Logout(){

  }
}
