import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegularExpressions } from 'src/app/global/regular_expressions';

@Component({
  selector: 'app-register-micro-routes',
  templateUrl: './register-micro-routes.component.html',
  styleUrls: ['./register-micro-routes.component.scss'],
})
export class RegisterMicroRoutesComponent {
  img: string | ArrayBuffer | null = '../assets/images/profile/user-1.jpg';

  expressionsR = RegularExpressions;

  registerFormGroup = this._formBuilder.group({
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
    return this.registerFormGroup.controls;
  }
  selectFile(event: any): void {
    if (!event.target.files[0] || event.target.files[0].length === 0) {
      return;
    }
    const mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reader.onload = (_event) => {
      this.img = reader.result;
    };
  }

}
