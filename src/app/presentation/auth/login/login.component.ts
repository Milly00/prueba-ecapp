import { Component, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreService } from '../../../../data/services/core.service';
import { AuthLogin } from 'src/domain/usecases/auth/auth-login.usecase';
import {
  AuthLoginModel,
  AuthResendConfirmationModel,
} from 'src/domain/models/auth.model';
import { AlertService } from 'src/app/components/notifications/alerts/alert.service';
import { RegularExpressions } from 'src/app/global/regular_expressions';
import { AuthResendEmail } from 'src/domain/usecases/auth/auth-resend-email.usecase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  options = this.settings.getOptions();
  expressions = RegularExpressions;
  constructor(
    private settings: CoreService,
    private router: Router,
    private alertService: AlertService,
    viewRef: ViewContainerRef,
    private auth: AuthLogin,
    private resendEmail: AuthResendEmail
  ) {
    //this.alertService.viewRef = viewRef;
  }

  form = new FormGroup({
    codeAccount: new FormControl('', [
      Validators.required,
      Validators.minLength(12),
      Validators.maxLength(12),
      Validators.pattern(this.expressions.alfanumeric),
    ]),
    user: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(this.expressions.user),
    ]),
    password: new FormControl('', [Validators.required]),
  });

  formResend = new FormGroup({
    codeSui: new FormControl('', [
      Validators.required,
      Validators.minLength(12),
      Validators.maxLength(12),
      Validators.pattern(this.expressions.alfanumeric),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.expressions.email),
    ]),
  });
  get f() {
    return this.form.controls;
  }
  get fResend() {
    return this.formResend.controls;
  }
  submit() {
    //console.log(this.form.value);
    const requestBody: AuthLoginModel = {
      codeAccount: this.form.value.codeAccount!,
      user: this.form.value.user!,
      password: this.form.value.password!,
    };

    const response = this.auth.Login(requestBody);

    if (response) {
      this.alertService.sucess(
        'Inicio de sesión exitoso',
        'Se te redireccionara al inicio en segundos...'
      );
    }
  }

  submitResend() {
    const requestBody: AuthResendConfirmationModel = {
      codeSui: this.formResend.value.codeSui!,
      email: this.formResend.value.email!,
    };

    this.resendEmail.ResendEmail(requestBody);
  }
}
