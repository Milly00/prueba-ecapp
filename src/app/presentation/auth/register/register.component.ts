import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OptionDialogService } from 'src/app/components/modal/option-dialog/option-dialog.service';
import { RegularExpressions } from 'src/app/global/regular_expressions';
import { CoreService } from 'src/data/services/core.service';
import { AuthRegisterModel } from 'src/domain/models/auth.model';
import { AuthRegister } from 'src/domain/usecases/auth/auth-register.usecase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  options = this.settings.getOptions();
  expressions = RegularExpressions;

  organizationTypes = ['Organización 1','Organización 2'];

  constructor(
    private settings: CoreService,
    private router: Router,
    private dialogService: OptionDialogService,
    private auth: AuthRegister
  ) {}

  form = new FormGroup({
    organizationType: new FormControl('', [
      Validators.required,
    ]),
    nit: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(this.expressions.nit),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(this.expressions.email),
    ]),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern(this.expressions.name),
    ]),
  });

  get f() {
    return this.form.controls;
  }

  submit() {

    const text =
      'Su cuenta se creo con exito. Por favor revisar su correo electrónico para continuar con la verificación de su cuenta.';

    this.dialogService.modalSucces(text, '¡Registro Éxitoso!');
    const requestBody: AuthRegisterModel = {
      
      name: this.form.value.name!,
      nit: this.form.value.nit!,
      email: this.form.value.email!,
    };
    this.auth.Register(requestBody);
  }
}
