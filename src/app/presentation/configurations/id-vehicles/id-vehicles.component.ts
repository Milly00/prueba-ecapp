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
  selector: 'app-id-vehicles',
  templateUrl: './id-vehicles.component.html',
  styleUrls: ['./id-vehicles.component.scss'],
})
export class IdVehiclesComponent {
  expressionsR = RegularExpressions;
  img: string | ArrayBuffer | null = '../assets/images/profile/user-1.jpg';
  statusVehicle: string = 'Inactivo';
 
  status = ['Activo', 'Inactivo'];
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
    numAxles: [0, [Validators.pattern(this.expressionsR.number)]],
  });
  secondFormGroup = this._formBuilder.group({
    height: [0, [Validators.pattern(this.expressionsR.number)]],
    width: [0, [Validators.pattern(this.expressionsR.number)]],
    lenght: [0, [Validators.pattern(this.expressionsR.number)]],
    capacity: [0, [Validators.pattern(this.expressionsR.number)]],
    capacity_y: [0, [Validators.pattern(this.expressionsR.number)]],
    capacity_m: [0, [Validators.pattern(this.expressionsR.number)]],
  });
  constructor(private _formBuilder: FormBuilder) {}

  get f() {
    return this.firstFormGroup.controls;
  }
  get f2() {
    return this.secondFormGroup.controls;
  }
}
