import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterMicroRoutesComponent } from '../register-micro-routes/register-micro-routes.component';
import { ConfigurationsMicroroutesModel } from 'src/domain/models/configuration-microroutes.model';
const PROJECT_DATA: ConfigurationsMicroroutesModel[] = [
  {
    code: 'MCR12345',

    macroRouteId: '1',
    operationStartDate: '2023-10-05',
    name: 'Bodega 1',
    imageMicroRoute: '../assets/images/products/s6.jpg',
    microRouteType: 'T2',
  },
  {
    code: 'MCR12345',

    macroRouteId: '1',
    operationStartDate: '2023-10-05',
    name: 'Bodega 1',
    imageMicroRoute: '../assets/images/products/s6.jpg',
    microRouteType: 'T2',
  },
  {
    code: 'MCR12345',

    macroRouteId: '1',
    operationStartDate: '2023-10-05',
    name: 'Bodega 1',
    imageMicroRoute: '../assets/images/products/s6.jpg',
    microRouteType: 'T2',
  },
  {
    code: 'MCR12345',

    macroRouteId: '1',
    operationStartDate: '2023-10-05',
    name: 'Bodega 1',
    imageMicroRoute: '../assets/images/products/s6.jpg',
    microRouteType: 'T2',
  },
  {
    code: 'MCR12345',

    macroRouteId: '1',
    operationStartDate: '2023-10-05',
    name: 'Bodega 1',
    imageMicroRoute: '../assets/images/products/s6.jpg',
    microRouteType: 'T2',
  },
];
@Component({
  selector: 'app-all-micro-routes',
  templateUrl: './all-micro-routes.component.html',
  styleUrls: ['./all-micro-routes.component.scss'],
})
export class AllMicroRoutesComponent {
  displayedColumns = [
    'code',
    'macroRouteId',
    'name',
    'microRouteType',
    'operationStartDate',
    'action',
  ];
  statusRoute: string = '';
  typeMicro: string = '';
  status = ['ACTIVE', 'INACTIVE', 'ALL'];
  data = PROJECT_DATA;
  constructor(private dialog: MatDialog, private router: Router) {}

  callDialog() {
    this.dialog.open(RegisterMicroRoutesComponent, {
      width: '650px',
      enterAnimationDuration: '0',
      exitAnimationDuration: 0,
      disableClose: true,
    });
  }

  getId(event: any) {
    //console.log(event);
    this.router.navigateByUrl(`/configurations/micro-route/${event}`);
  }
}
