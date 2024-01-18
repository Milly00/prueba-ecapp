import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OptionDialogService } from 'src/app/components/modal/option-dialog/option-dialog.service';
import { RegularExpressions } from 'src/app/global/regular_expressions';
import { CoreService } from 'src/data/services/core.service';
import { AuthVerifyAccountModel } from 'src/domain/models/auth.model';
import { AuthVerifyAccount } from 'src/domain/usecases/auth/auth-verify-account.usecase';

@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss'],
})
export class VerifyAccountComponent {
  options = this.settings.getOptions();
  expression = RegularExpressions;
  constructor(
    private settings: CoreService,
    private router: Router,
    private dialogService: OptionDialogService,
    private auth: AuthVerifyAccount
  ) {}

  form = new FormGroup({
    city: new FormControl('', [Validators.required, Validators.minLength(6)]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(this.expression.phone),
    ]),
    legalRepresentative: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern(this.expression.name),
    ]),
    user: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(this.expression.user),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(this.expression.password),
    ]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    const text = 'Ya esta todo listo para que puedas usar nuestros servicios';

    this.dialogService.modalSucces(text, '¡Verificación Éxitosa!');
    const requestBody: AuthVerifyAccountModel = {
      city: this.form.value.city!,
      contact: {
        mobileNumber: this.form.value.phone!,
        responsibleName: this.form.value.legalRepresentative!,
      },
      accessData: {
        userName: this.form.value.user!,
        password: this.form.value.password!,
      },
    };
    this.auth.VerifyAccount(requestBody);
  }
}
