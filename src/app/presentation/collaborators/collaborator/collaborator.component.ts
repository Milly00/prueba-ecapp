import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegularExpressions } from 'src/app/global/regular_expressions';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent {
  selectedFile!: File;
  expressionsR = RegularExpressions;
  firstFormGroup = this._formBuilder.group({
    password:['', [Validators.required]],
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.name),
        Validators.minLength(4),
      ],
    ],
    surname: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.name),
        Validators.minLength(4),
      ],
    ],
    phoneNumber: [
      '',
      [Validators.pattern(this.expressionsR.phone), Validators.minLength(7)],
    ],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', [Validators.required]],
    relationShip: [''],
    phoneNumber: [
      '',
      [Validators.pattern(this.expressionsR.phone), Validators.minLength(6)],
    ],
    eps: [
      '',
      [Validators.pattern(this.expressionsR.name), Validators.minLength(3)],
    ],
    afp: [
      '',
      [Validators.pattern(this.expressionsR.name), Validators.minLength(3)],
    ],
    shirt: ['', [Validators.maxLength(4)]],
    pants: ['', [Validators.maxLength(4)]],
    footwear: ['', [Validators.maxLength(4)]],
    bank: [''],
    accountType: ['', [Validators.minLength(5)]],
    accountNumber: ['', [Validators.pattern(this.expressionsR.nit)]],
  });
  constructor(private _formBuilder: FormBuilder) {}

  get f() {
    return this.firstFormGroup.controls;
  }
}
