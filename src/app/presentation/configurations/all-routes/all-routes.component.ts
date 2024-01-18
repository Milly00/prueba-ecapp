import { Component } from '@angular/core';
import { RegisterRoutesComponent } from '../register-routes/register-routes.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfigurationsRoutesModel } from 'src/domain/models/configuration-routes.model';
const PROJECT_DATA: ConfigurationsRoutesModel[] = [
  {
    areaId: 'MCR12345',

    nuap: '1',
    operationStartDate: '2023-10-05',
    name: 'Bodega 1',
    imageRoute: '../assets/images/products/s6.jpg',
    numMacro: '67S8',
  },
  {
    areaId: 'MCR12345',

    nuap: '1',
    operationStartDate: '2023-10-05',
    name: 'Bodega 1',
    imageRoute: '../assets/images/products/s6.jpg',
    numMacro: '67S8',
  },
  {
    areaId: 'MCR12345',

    nuap: '1',
    operationStartDate: '2023-10-05',
    name: 'Bodega 1',
    imageRoute: '../assets/images/products/s6.jpg',
    numMacro: '67S8',
  },
  {
    areaId: 'MCR12345',

    nuap: '1',
    operationStartDate: '2023-10-05',
    name: 'Bodega 1',
    imageRoute: '../assets/images/products/s6.jpg',
    numMacro: '67S8',
  },
  {
    areaId: 'MCR12345',

    nuap: '1',
    operationStartDate: '2023-10-05',
    name: 'Bodega 1',
    imageRoute: '../assets/images/products/s6.jpg',
    numMacro: '67S8',
  },
];
@Component({
  selector: 'app-all-routes',
  templateUrl: './all-routes.component.html',
  styleUrls: ['./all-routes.component.scss'],
})
export class AllRoutesComponent {
  statusDelivery: string = '';
  status = ['ACTIVE', 'INACTIVE', 'ALL'];
  displayedColumns = [
    'areaId',
    'nuap',
    'name',
    'numMacro',
    'operationStartDate',
    'action',
  ];

  data = PROJECT_DATA;
  constructor(private dialog: MatDialog, private router: Router) {}

  callDialog() {
     this.dialog.open(RegisterRoutesComponent, {
      width: '650px',
      enterAnimationDuration: '0',
      exitAnimationDuration: 0,
      disableClose: true,
    });
  }

  getId(event: any) {
    //console.log(event);
    this.router.navigateByUrl(`/configurations/route/${event}`);
  }
}
