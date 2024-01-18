import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.scss'],
})
export class AssociateComponent {
  selectedIdentity = 'All';
  gender = 'Other';
  maritalStatus = '';
  housingType = '';
  educationLevel = '';

  selectedFile!: File;
  expressionsR = RegularExpressions;

  typesIdenity: EnumIdentityType[] = [
    { status: IdentityType.CC },
    { status: IdentityType.CE },
    { status: IdentityType.Nit },
    { status: IdentityType.Pasaporte },
  ];

  genders: EnumGender[] = [
    { status: Gender.F },
    { status: Gender.M },
    { status: Gender.O },
  ];

  maritalsStatus: EnumMaritalStatus[] = [
    { status: MaritalStatus.Casado },
    { status: MaritalStatus.Divorciado },
    { status: MaritalStatus.Separado },
    { status: MaritalStatus.Soltero },
    { status: MaritalStatus.Union_Libre },
    { status: MaritalStatus.Viudo },
  ];

  housingTypes: EnumHousingType[] = [
    { status: HousingType.Arriendo },
    { status: HousingType.Familiar },
    { status: HousingType.Propia },
  ];

  educationLevels: EnumEducationLevel[] = [
    { status: EducationLevel.Bachiller },
    { status: EducationLevel.Especializacion },
    { status: EducationLevel.Tecnico },
    { status: EducationLevel.Profesional },
    { status: EducationLevel.Tecnologo },

    { status: EducationLevel.Ninguno },
  ];

  statusAssociate = ['ACTIVE', 'INACTIVE'];
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
    admisissionDate: [{ value: '', disabled: true }, [Validators.required]],
    typeIdentity: [{ value: '', disabled: true }, [Validators.required]],
    city: ['', [Validators.required]],
    gender: [{ value: '', disabled: true }, [Validators.required]],
    birthDate: [{ value: '', disabled: true }],
    phoneNumber: [
      '',
      [Validators.pattern(this.expressionsR.phone), Validators.minLength(7)],
    ],
    email: ['', [Validators.pattern(this.expressionsR.email)]],
    nationality: ['', [Validators.pattern(this.expressionsR.name)]],
    issueCity: [''],
    issueDate: [''],
    address: [
      '',
      [Validators.pattern(this.expressionsR.name), Validators.minLength(10)],
    ],
    status: [''],
    description: [''],
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
  get f2() {
    return this.secondFormGroup.controls;
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getCity(event: any) {
    //console.log(event);
  }

  uploadFile(): void {
    if (this.selectedFile) {
      // Aquí puedes realizar la lógica para subir el archivo.
      // Puedes utilizar servicios, HttpClient, etc.
     // console.log('Archivo seleccionado:', this.selectedFile);
      // Implementa la lógica de carga aquí.
    } else {
      //console.log('No se ha seleccionado ningún archivo.');
    }
  }
}
