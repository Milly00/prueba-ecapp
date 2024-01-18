import { BreakpointObserver } from '@angular/cdk/layout';
import { StepperOrientation } from '@angular/cdk/stepper';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { RegularExpressions } from 'src/app/global/regular_expressions';
import {
  EducationLevel,
  Gender,
  HousingType,
  IdentityType,
  MaritalStatus,
} from 'src/domain/models/associates.model';
interface EnumIdentityType {
  status: IdentityType;
  // Otras propiedades aquí
}

interface EnumGender {
  status: Gender;
  // Otras propiedades aquí
}

interface EnumMaritalStatus {
  status: MaritalStatus;
  // Otras propiedades aquí
}

interface EnumHousingType {
  status: HousingType;
  // Otras propiedades aquí
}

interface EnumEducationLevel {
  status: EducationLevel;
  // Otras propiedades aquí
}
@Component({
  selector: 'app-register-associate',
  templateUrl: './register-associate.component.html',
  styleUrls: ['./register-associate.component.scss'],
})
export class RegisterAssociateComponent {
  selectedIdentity = 'All';
  gender = 'Other';
  maritalStatus = '';
  housingType = '';
  educationLevel = '';
  selectedFile!: File;
  expressionsR = RegularExpressions;

  stepperLinear: boolean = false;

  cities = ['Montería', 'Cereté', 'San Carlos', 'Sahagún'];
  typesIdenity: EnumIdentityType[] = [
    { status: IdentityType.CC },
    { status: IdentityType.CE },
    { status: IdentityType.Nit },
    { status: IdentityType.Pasaporte },
  ];
  educationLevels: EnumEducationLevel[] = [
    { status: EducationLevel.Bachiller },
    { status: EducationLevel.Especializacion },
    { status: EducationLevel.Tecnico },
    { status: EducationLevel.Profesional },
    { status: EducationLevel.Tecnologo },

    { status: EducationLevel.Ninguno },
  ];
  genders: EnumGender[] = [
    { status: Gender.F },
    { status: Gender.M },
    { status: Gender.O },
  ];
  housingTypes: EnumHousingType[] = [
    { status: HousingType.Arriendo },
    { status: HousingType.Familiar },
    { status: HousingType.Propia },
  ];
  maritalsStatus: EnumMaritalStatus[] = [
    { status: MaritalStatus.Casado },
    { status: MaritalStatus.Divorciado },
    { status: MaritalStatus.Separado },
    { status: MaritalStatus.Soltero },
    { status: MaritalStatus.Union_Libre },
    { status: MaritalStatus.Viudo },
  ];
  firstFormGroup = this._formBuilder.group({
    code: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.alfanumeric),
        Validators.minLength(4),
      ],
    ],
    identity: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.nit),
        Validators.minLength(6),
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
    surname: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.name),
        Validators.minLength(4),
      ],
    ],
    admisissionDate: ['', [Validators.required]],
    typeIdentity: ['', [Validators.required]],
    city: ['', [Validators.required]],
    gender: ['', [Validators.required]],
  });
  secondFormGroup = this._formBuilder.group({
    address: [
      '',
      [Validators.pattern(this.expressionsR.name), Validators.minLength(10)],
    ],
    birthDate: [''],
    phoneNumber: [
      '',
      [Validators.pattern(this.expressionsR.phone), Validators.minLength(7)],
    ],
    email: ['', [Validators.pattern(this.expressionsR.email)]],
    issueCity: [''],
    issueDate: [''],
    nationality: ['', [Validators.pattern(this.expressionsR.name)]],
  });

  thirdFormGroup = this._formBuilder.group({
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

  stepperOrientation!: Observable<StepperOrientation>;

  constructor(private _formBuilder: FormBuilder,breakpointObserver: BreakpointObserver) {
    this.stepperOrientation = breakpointObserver
    .observe('(min-width: 800px)')
    .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  get f() {
    return this.firstFormGroup.controls;
  }

  get f2() {
    return this.secondFormGroup.controls;
  }
  get f3() {
    return this.thirdFormGroup.controls;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getCity(event: any) {
    //console.log(event);
    this.f.city.setValue('hh');
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getCityExpedition(event: any) {
    //console.log(event);
    this.f.city.setValue('hh');
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadFile(): void {
    if (this.selectedFile) {
      // Aquí puedes realizar la lógica para subir el archivo.
      // Puedes utilizar servicios, HttpClient, etc.
      //console.log('Archivo seleccionado:', this.selectedFile);
      // Implementa la lógica de carga aquí.
    } else {
      //console.log('No se ha seleccionado ningún archivo.');
    }
  }
}
