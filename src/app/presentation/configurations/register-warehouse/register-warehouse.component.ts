import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegularExpressions } from 'src/app/global/regular_expressions';

@Component({
  selector: 'app-register-warehouse',
  templateUrl: './register-warehouse.component.html',
  styleUrls: ['./register-warehouse.component.scss'],
})
export class RegisterWarehouseComponent {
  img: string | ArrayBuffer | null = '../assets/images/profile/user-1.jpg';

  expressionsR = RegularExpressions;

  warehouseTypes = ['ECA', 'PA'];
  registerFormGroup = this._formBuilder.group({
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
    return this.registerFormGroup.controls;
  }

  selectFile(event: any): void {
    if (!event.target.files[0] || event.target.files[0].length === 0) {
      // this.msg = 'You must select an image';
      return;
    }
    const mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      // this.msg = "Only images are supported";
      return;
    }
    // tslint:disable-next-line - Disables all
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    // tslint:disable-next-line - Disables all
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reader.onload = (_event) => {
      // tslint:disable-next-line - Disables all
      this.img = reader.result;
    };
  }
}
