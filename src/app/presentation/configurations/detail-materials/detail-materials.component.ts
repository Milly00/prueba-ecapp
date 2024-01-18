import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfigurationMaterialsModel } from 'src/domain/models/configuration-materials.model';
import { ConfigurationsWarehouseModel } from 'src/domain/models/configuration-warehouses.model';
import { CWarehousesFilter } from 'src/domain/usecases/configurations/configurations-filter-warehouses.usecase';
import { RegisterMaterialWarehouseComponent } from '../register-material-warehouse/register-material-warehouse.component';
import { EditMaterialWarehousesComponent } from '../edit-material-warehouses/edit-material-warehouses.component';

@Component({
  selector: 'app-detail-materials',
  templateUrl: './detail-materials.component.html',
  styleUrls: ['./detail-materials.component.scss'],
})
export class DetailMaterialsComponent implements OnInit {
  statusMaterial: string = '';
  codeMaterial: string = '';
  nameMaterial: string = '';
  groupMaterial: string = '';
  textTooltip: string = 'Ocultar lista de materiales';

  status = ['ACTIVE', 'INACTIVE', 'ALL'];
  material: ConfigurationMaterialsModel = {
    materialId: 1,
    code: 'ABC123',
    name: 'Material1',
    description: 'Descripción del Material 1',
    purchasePrice: 50.99,
    img: 'assets/images/products/s6.jpg',
  };
  allWarehouses: ConfigurationsWarehouseModel[] = [
    {
      code: 'VH8900404',
      warehouseType: 'CARRETA',
      imageWarehouse: 'assets/images/products/s6.jpg',
      operationStartDate: '2023-09-20',
      name: 'Bodega 1',
    },
    {
      code: 'VH8900404',
      warehouseType: 'CARRETA',
      imageWarehouse: 'assets/images/products/s6.jpg',
      operationStartDate: '2023-09-20',
      name: 'Bodega 1',
    },
    {
      code: 'VH8900404',
      warehouseType: 'CARRETA',
      imageWarehouse: 'assets/images/products/s6.jpg',
      operationStartDate: '2023-09-20',
      name: 'Bodega WK',
    },
    {
      code: 'VH8900404',
      warehouseType: 'CARRETA',
      imageWarehouse: 'assets/images/products/s6.jpg',
      operationStartDate: '2023-09-20',
      name: 'Bodega 1',
    },
    {
      code: 'VH8900404',
      warehouseType: 'CARRETA',
      imageWarehouse: 'assets/images/products/s6.jpg',
      operationStartDate: '2023-09-20',
      name: 'Bodega EK',
    },
    {
      code: 'VH8900404',
      warehouseType: 'CARRETA',
      imageWarehouse: 'assets/images/products/s6.jpg',
      operationStartDate: '2023-09-20',
      name: 'Bodega JA',
    },
  ];
  sidePanelOpened = true;
  searchTerm = new FormControl();

  filterWarehouses: ConfigurationsWarehouseModel[] = [];
  allMaterialWarehouse: ConfigurationsWarehouseModel[] = [
    {
      code: 'VH8900404',
      warehouseType: 'CARRETA',
      imageWarehouse: 'assets/images/products/s6.jpg',
      operationStartDate: '2023-09-20',
      name: 'Bodega 1',
    },
  ];

  constructor(private filter: CWarehousesFilter, private dialog: MatDialog) {
    this.getWarehouses();
  }

  ngOnInit(): void {
    this.searchWarehouses();
  }

  getWarehouses() {
    this.filterWarehouses = this.allWarehouses;
  }
  openDialog(warehouse: ConfigurationsWarehouseModel) {
    const dialogRef = this.dialog.open(RegisterMaterialWarehouseComponent, {
      width: '550px',
      enterAnimationDuration: '0',
      exitAnimationDuration: 0,
      disableClose: true,
      data: {
        accountMaterialId: this.material.materialId,
        price: this.material.purchasePrice,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
       // console.log(result);

        this.addMaterialWarehouse(warehouse);
      }
    });
  }

  openDEditMaterialWarehouse() {
    const dialogRef = this.dialog.open(EditMaterialWarehousesComponent, {
      width: '550px',
      enterAnimationDuration: '0',
      exitAnimationDuration: 0,
      disableClose: true,
      data: {
        accountMaterialId: this.material.materialId,
        price: this.material.purchasePrice,
        purchasePrice: this.material.purchasePrice,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        //console.log(result);
      }
    });
  }
  searchWarehouses() {
    this.searchTerm.valueChanges.subscribe((query: string) => {
     // console.log(query);
      if (query.length > 2) {
        const filter = this.filter.filterWarehouses(
          query.toLowerCase(),
          this.allWarehouses
        );
        if (filter !== undefined) {
          this.filterWarehouses = filter;
        } else {
          this.getWarehouses();
        }
        //console.log(filter);
      } else {
        this.getWarehouses();
      }
    });
  }

  addMaterialWarehouse(warehouse: any) {
    this.allMaterialWarehouse.push(warehouse);
  }
  close() {
    this.sidePanelOpened = !this.sidePanelOpened;

    if(this.sidePanelOpened === true){
      this.textTooltip = 'Ocultar lista de materiales'
    }else{
      this.textTooltip = 'Mostrar lista de materiales'
    }
  }
}
