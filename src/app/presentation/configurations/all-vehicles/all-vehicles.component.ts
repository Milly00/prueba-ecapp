import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
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
  selector: 'app-all-vehicles',
  templateUrl: './all-vehicles.component.html',
  styleUrls: ['./all-vehicles.component.scss'],
})
export class AllVehiclesComponent {
  statusMaterial: string = '';
  status = ['ACTIVE', 'INACTIVE', 'ALL'];

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

  //Data Table
  displayedColumns = ['code', 'vehicleType', 'plate', 'capacity', 'action'];

  data = [
    {
      code: 'ABC123',
      vehicleType: 'car',
      plate: 'XYZ789',
      capacity: 5,
    },
    {
      code: 'DEF456',
      vehicleType: 'truck',
      plate: 'LMN012',
      capacity: 5,
    },
    {
      code: 'GHI789',
      vehicleType: 'motorcycle',
      plate: 'QRS345',
      capacity: 1,
    },
  ];
  constructor(private dialog: MatDialog, private router: Router) {}

  registerVehicel() {
    this.router.navigateByUrl(`/configurations/vehicles/register`);
  }

  getId(event: any) {
    //console.log(event);
    this.router.navigateByUrl(`/configurations/vehicles/${event}`);
  }
}
