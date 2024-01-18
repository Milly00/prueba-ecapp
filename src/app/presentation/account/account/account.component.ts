import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegularExpressions } from 'src/app/global/regular_expressions';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  expressionsR = RegularExpressions;
  img: string | ArrayBuffer | null = '../assets/images/profile/user-1.jpg';

  warehouseTypes = ['ECA', 'PA'];
  registerFormGroup = this._formBuilder.group({
    associationType: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.alfanumeric),
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
    reader.onload = () => {
      // tslint:disable-next-line - Disables all
      this.img = reader.result;
    };
  }
}
