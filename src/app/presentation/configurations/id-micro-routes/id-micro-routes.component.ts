import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegularExpressions } from 'src/app/global/regular_expressions';

@Component({
  selector: 'app-id-micro-routes',
  templateUrl: './id-micro-routes.component.html',
  styleUrls: ['./id-micro-routes.component.scss'],
})
export class IdMicroRoutesComponent {
  statusMR: string = 'Inactivo';

  status = ['Activo', 'Inactivo'];

  expressionsR = RegularExpressions;

  updateFormGroup = this._formBuilder.group({
    macroRouteId: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.alfanumeric),
        Validators.minLength(4),
      ],
    ],

    microRouteType: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.alfanumeric),
        Validators.minLength(4),
      ],
    ],
    code: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.nit),
        Validators.minLength(4),
      ],
    ],
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.name),
        Validators.minLength(4),
      ],
    ],
    date: ['', [Validators.required]],
  });

  constructor(private _formBuilder: FormBuilder) {}

  get f() {
    return this.updateFormGroup.controls;
  }
}
