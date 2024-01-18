import { Component, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/components/notifications/alerts/alert.service';
import { RegularExpressions } from 'src/app/global/regular_expressions';
import { CoreService } from 'src/data/services/core.service';
import { AuthRecoveryPasswordModel } from 'src/domain/models/auth.model';
import { AuthRecoveryPassword } from 'src/domain/usecases/auth/auth-recovery-password.usecase';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.component.html',
  styleUrls: ['./recovery-password.component.scss'],
})
export class RecoveryPasswordComponent  {
  options = this.settings.getOptions();
  expression = RegularExpressions;
  constructor(
    private settings: CoreService,
    private router: Router,
    private alert: AlertService,
    viewRef: ViewContainerRef,
    private auth: AuthRecoveryPassword
  ) {}

  

  form = new FormGroup({
    codeSui: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(this.expression.alfanumeric),
    ]),
    user: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(this.expression.user),
    ]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    // console.log(this.form.value);
    const requestBody: AuthRecoveryPasswordModel = {
      codeSui: this.form.value.codeSui!,
      user: this.form.value.user!,
    };
    this.alert.openModal1('success', 'Enviamos su solicitud');

    this.auth.RecoveryPassword(requestBody);
  }
}
