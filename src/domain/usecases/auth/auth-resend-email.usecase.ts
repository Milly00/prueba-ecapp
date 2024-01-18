import { Injectable } from "@angular/core";
import { AuthService } from "src/data/services/auth.service";
import { AuthResendConfirmationModel } from "src/domain/models/auth.model";

@Injectable({
    providedIn: 'root',
  })
  export class AuthResendEmail {
    private authService = new AuthService();
    constructor() {}
  
    ResendEmail(body: AuthResendConfirmationModel): boolean {  
      this.authService.ResendEmail(body);
  
      return true;
    }
  }
  