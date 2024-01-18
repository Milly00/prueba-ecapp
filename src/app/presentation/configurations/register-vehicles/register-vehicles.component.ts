import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegularExpressions } from 'src/app/global/regular_expressions';
import {
  PropertyOf,
  VehicleType,
} from 'src/domain/models/configuration-vehicles.model';
interface EnumVehicleType {
  status: VehicleType;
  // Otras propiedades aquí
}
interface EnumPropertyOf {
  status: PropertyOf;
  // Otras propiedades aquí
}
@Component({
  selector: 'app-register-vehicles',
  templateUrl: './register-vehicles.component.html',
  styleUrls: ['./register-vehicles.component.scss'],
})
export class RegisterVehiclesComponent {
  expressionsR = RegularExpressions;
  img: string | ArrayBuffer | null = '../assets/images/profile/user-1.jpg';

  typesVehicle: EnumVehicleType[] = [
    { status: VehicleType.CARRETA },
    { status: VehicleType.COSTAL },
    { status: VehicleType.MOTOCARRO },
    { status: VehicleType.TRICICLO },
    { status: VehicleType.OTRO },
  ];

  propertyOf: EnumPropertyOf[] = [
    { status: PropertyOf.ASSOCIATE },
    { status: PropertyOf.WAREHOUSE },
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
    plate: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.alfanumeric),
        Validators.minLength(6),
      ],
    ],
    vehicleType: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.name),
        Validators.minLength(4),
      ],
    ],
    height: [0, [Validators.pattern(this.expressionsR.number)]],
    width: [0, [Validators.pattern(this.expressionsR.number)]],
    lenght: [0, [Validators.pattern(this.expressionsR.number)]],
    capacity: [0, [Validators.pattern(this.expressionsR.number)]],
    capacity_y: [0, [Validators.pattern(this.expressionsR.number)]],
    capacity_m: [0, [Validators.pattern(this.expressionsR.number)]],
    numAxles: [0, [Validators.pattern(this.expressionsR.number)]],
    propertyOf: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.name),
        Validators.minLength(4),
      ],
    ],
    ownerId: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.alfanumeric),
        Validators.minLength(4),
      ],
    ],
    warehouseId: [
      '',
      [
        Validators.required,
        Validators.pattern(this.expressionsR.alfanumeric),
        Validators.minLength(4),
      ],
    ],
  });

  constructor(private _formBuilder: FormBuilder) {}

  get f() {
    return this.firstFormGroup.controls;
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
