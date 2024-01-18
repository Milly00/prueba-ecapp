import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/data/services/auth.service";
import { AuthVerifyAccountModel } from "src/domain/models/auth.model";

@Injectable({
    providedIn: 'root',
  })
  export class AuthVerifyAccount {
    private authService = new AuthService();
    private router = new Router();

    constructor() {}
  
    VerifyAccount(body: AuthVerifyAccountModel): boolean {
     
  
      this.authService.VerifyAccount(body);
      this.router.navigateByUrl('/dashboard');

      return true;
    }
  }
  
  