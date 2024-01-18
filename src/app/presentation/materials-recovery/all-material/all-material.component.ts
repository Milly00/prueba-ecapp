import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyOf, VehicleType } from 'src/domain/models/configuration-vehicles.model';
import { MaterialsRecoveryModel } from 'src/domain/models/materials-recovery.model';
interface EnumVehicleType {
  status: VehicleType;
  // Otras propiedades aquí
}
interface EnumPropertyOf {
  status: PropertyOf;
  // Otras propiedades aquí
}
@Component({
  selector: 'app-all-material',
  templateUrl: './all-material.component.html',
  styleUrl: './all-material.component.scss',
})
export class AllMaterialComponent {
  displayedColumns = ['recoveredBy', 'totalWeight', 'totalValuePaid', 'paymentType','recoveryFrom','recoveryTo', 'action'];
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
    { status: PropertyOf.CLIENT },

  ];
  data: MaterialsRecoveryModel[] = [
    {
      recoveredBy: 'John Doe',
      recovererId: 'PSOE909',
      totalWeight: 100,
      totalValuePaid: 5000,
      paymentType: 'Credit Card',
      recoveryFrom: '2023-01-10',
      recoveryTo: '2023-01-15',
    },
    {
      recoveredBy: 'Jane Smith',
      recovererId: 'PSOE909',
      totalWeight: 150,
      totalValuePaid: 7500,
      paymentType: 'Cash',
      recoveryFrom: '2023-02-01',
      recoveryTo: '2023-02-10',
    },
    {
      recoveredBy: 'Mike Johnson',
      recovererId: 'PSOE909',
      totalWeight: 80,
      totalValuePaid: 4000,
      paymentType: 'Bank Transfer',
      recoveryFrom: '2023-03-05',
      recoveryTo: '2023-03-10',
    },
    {
      recoveredBy: 'Mike Johnson',
      recovererId: 'PSOE909',
      totalWeight: 80,
      totalValuePaid: 4000,
      paymentType: 'Bank Transfer',
      recoveryFrom: '2023-03-05',
      recoveryTo: '2023-03-10',
    },
    {
      recoveredBy: 'Mike Johnson',
      recovererId: 'PSOE909',
      totalWeight: 80,
      totalValuePaid: 4000,
      paymentType: 'Bank Transfer',
      recoveryFrom: '2023-03-05',
      recoveryTo: '2023-03-10',
    },
  ]; 
  constructor(private router: Router) {}
  getId(event: any) {
    //console.log(event);
    this.router.navigateByUrl(`materials-recovery/material/${event}`);
  }
}
