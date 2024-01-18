import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegularExpressions } from 'src/app/global/regular_expressions';

@Component({
  selector: 'app-register-routes',
  templateUrl: './register-routes.component.html',
  styleUrls: ['./register-routes.component.scss'],
})
export class RegisterRoutesComponent {
  action: string = '';
  img: string | ArrayBuffer | null = '../assets/images/profile/user-1.jpg';
  areaId: string = '';
  nuap: string = '';
  numMacro: string = '';
  name: string = '';
  operationStartDate!: string;
  expressionsR = RegularExpressions;

  registerFormGroup = this._formBuilder.group({
    areaId: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.alfanumeric),
        Validators.minLength(4),
      ],
    ],

    nuap: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.alfanumeric),
        Validators.minLength(4),
      ],
    ],
    numMacro: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.alfanumeric),
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

  sendInformation() {}
}
