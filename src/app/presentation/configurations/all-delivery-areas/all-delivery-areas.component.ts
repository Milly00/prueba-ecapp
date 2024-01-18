import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterDeliveryAreasComponent } from '../register-delivery-areas/register-delivery-areas.component';
import { Router } from '@angular/router';
import { ConfigurationsDeliveryAreaModel } from 'src/domain/models/configuration-delivery-area.model';
const PROJECT_DATA: ConfigurationsDeliveryAreaModel[] = [
  {
    code: 'BOD12345',

    cityId: 'Bucaramanga',
    operationStartDate: '2023-10-05',
    name: 'Bodega 1',
    imageArea: '../assets/images/products/s6.jpg',
  },
  {
    code: 'BOD12345',

    cityId: 'Bucaramanga',
    operationStartDate: '2023-10-05',
    name: 'Bodega 1',
    imageArea: '../assets/images/products/s9.jpg',
  },
  {
    code: 'BOD12345',

    cityId: 'Bucaramanga',
    operationStartDate: '2023-10-05',
    name: 'Bodega 1',
    imageArea: '../assets/images/products/s7.jpg',
  },
  {
    code: 'BOD12345',

    cityId: 'Bucaramanga',
    operationStartDate: '2023-10-05',
    name: 'Bodega 1',
    imageArea: '../assets/images/products/s4.jpg',
  },
];
@Component({
  selector: 'app-all-delivery-areas',
  templateUrl: './all-delivery-areas.component.html',
  styleUrls: ['./all-delivery-areas.component.scss'],
})
export class AllDeliveryAreasComponent {
  displayedColumns = ['code', 'name', 'operationStartDate', 'cityId', 'action'];
  data = PROJECT_DATA;
  statusDelivery: string = '';
  status = ['ACTIVE', 'INACTIVE', 'ALL'];
  constructor(private dialog: MatDialog, private router: Router) {}

  callDialog() {
     this.dialog.open(RegisterDeliveryAreasComponent, {
      width: '650px',
      enterAnimationDuration: '0',
      exitAnimationDuration: 0,
      disableClose: true,
    });
  }

  getId(event: any) {
    //console.log(event);
    this.router.navigateByUrl(`/configurations/delivery-area/${event}`);
  }
}
