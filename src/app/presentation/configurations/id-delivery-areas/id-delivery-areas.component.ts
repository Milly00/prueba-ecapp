import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegularExpressions } from 'src/app/global/regular_expressions';

@Component({
  selector: 'app-id-delivery-areas',
  templateUrl: './id-delivery-areas.component.html',
  styleUrls: ['./id-delivery-areas.component.scss'],
})
export class IdDeliveryAreasComponent {
  statusDA: string = 'Inactivo';

  status = ['Activo', 'Inactivo'];

  expressionsR = RegularExpressions;

  updateFormGroup = this._formBuilder.group({
    code: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.alfanumeric),
        Validators.minLength(4),
      ],
    ],
    city: [
      '',
      [Validators.pattern(this.expressionsR.name), Validators.minLength(4)],
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
