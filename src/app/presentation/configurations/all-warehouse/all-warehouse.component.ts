import { Component } from '@angular/core';
import { RegisterWarehouseComponent } from '../register-warehouse/register-warehouse.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfigurationsWarehouseModel } from 'src/domain/models/configuration-warehouses.model';
const PROJECT_DATA: ConfigurationsWarehouseModel[] = [
  {
    code: 'WR12345',
    operationStartDate: '2023-10-05',
    name: 'Bodega 1',
    imageWarehouse: '../assets/images/products/s6.jpg',
    warehouseType: '67S8',
  },
  {
    code: 'WR12345',
    operationStartDate: '2023-10-05',
    name: 'Bodega 1',
    imageWarehouse: '../assets/images/products/s6.jpg',
    warehouseType: '67S8',
  },
  {
    code: 'WR12345',
    operationStartDate: '2023-10-05',
    name: 'Bodega 1',
    imageWarehouse: '../assets/images/products/s6.jpg',
    warehouseType: '67S8',
  },
  {
    code: 'WR12345',
    operationStartDate: '2023-10-05',
    name: 'Bodega 1',
    imageWarehouse: '../assets/images/products/s6.jpg',
    warehouseType: '67S8',
  },
  {
    code: 'WR12345',
    operationStartDate: '2023-10-05',
    name: 'Bodega 1',
    imageWarehouse: '../assets/images/products/s6.jpg',
    warehouseType: '67S8',
  },
  {
    code: 'WR12345',
    operationStartDate: '2023-10-05',
    name: 'Bodega 1',
    imageWarehouse: '../assets/images/products/s6.jpg',
    warehouseType: '67S8',
  },
];
@Component({
  selector: 'app-all-warehouse',
  templateUrl: './all-warehouse.component.html',
  styleUrls: ['./all-warehouse.component.scss'],
})
export class AllWarehouseComponent {
  displayedColumns = [
    'code',
    'name',
    'warehouseType',
    'operationStartDate',
    'action',
  ];

  data = PROJECT_DATA;
  statusWarehouse: string = '';
  typeWarehouse: string[] = ['ECA', 'PA', 'ALL'];
  valueTypeWarehouse: string = '';
  status = ['ACTIVE', 'INACTIVE', 'ALL'];
  constructor(private dialog: MatDialog, private router: Router) {}

  callDialog() {
    this.dialog.open(RegisterWarehouseComponent, {
      width: '650px',
      enterAnimationDuration: '0',
      exitAnimationDuration: 0,
      disableClose: true,
    });
  }

  getId(event: any) {
    //console.log(event);
    this.router.navigateByUrl(`/configurations/warehouse/${event}`);
  }
}
