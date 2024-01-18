import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegularExpressions } from 'src/app/global/regular_expressions';

@Component({
  selector: 'app-id-warehouse',
  templateUrl: './id-warehouse.component.html',
  styleUrls: ['./id-warehouse.component.scss'],
})
export class IdWarehouseComponent {
  expressionsR = RegularExpressions;
  warehouseTypes = ['ECA', 'PA'];

  statusW: string = 'Inactivo';

  status = ['Activo', 'Inactivo'];
  updateFormGroup = this._formBuilder.group({
    warehouseType: [
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
    address: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.alfanumeric),
        Validators.minLength(4),
      ],
    ],
    lat: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.phone),
        Validators.minLength(4),
      ],
    ],
    lng: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.phone),
        Validators.minLength(4),
      ],
    ],
    contactName: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.name),
        Validators.minLength(4),
      ],
    ],
    phoneNumber: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.phone),
        Validators.minLength(4),
      ],
    ],
    collaboratorId: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.alfanumeric),
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
