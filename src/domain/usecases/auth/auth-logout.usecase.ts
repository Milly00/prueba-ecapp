import { Injectable } from "@angular/core";
import { AuthService } from "src/data/services/auth.service";

@Injectable({
    providedIn: 'root',
  })
  export class AuthLogout {
    private authService = new AuthService();
    constructor() {}
  
    Logout(): boolean {
  
      this.authService.Logout();
  
      return true;
    }
  }
  