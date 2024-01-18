import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CWarehousesFilter } from 'src/domain/usecases/configurations/configurations-filter-warehouses.usecase';
import { ConfigurationsWarehouseModel } from 'src/domain/models/configuration-warehouses.model';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { SideNavService } from 'src/app/presentation/layouts/services/side-nav.service';

@Component({
  selector: 'app-modal-warehouses',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    TablerIconsModule,
    ReactiveFormsModule,
    NgScrollbarModule,
  ],
  templateUrl: './modal-warehouses.component.html',
  styleUrls: ['./modal-warehouses.component.scss'],
})
export class ModalWarehousesComponent implements OnInit {
  @Output() warehouse = new EventEmitter<any>();

  searchTerm = new FormControl();
  valueWarehouse: string = '';

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
  opened: boolean = false;
  showModal: boolean = false;
  filterWarehouses: ConfigurationsWarehouseModel[] = [];

  constructor(private filter: CWarehousesFilter , private sidebarService: SideNavService) {
    this.getWarehouses();
  }

  ngOnInit(): void {
    this.searchWarehouses();
  }

  getWarehouses() {
    this.filterWarehouses = this.allWarehouses;
  }
  openModal() {
    this.opened = !this.opened;
    this.showModal = !this.showModal;
    this.sidebarService.showModal.next(this.showModal);
  }
  searchWarehouses() {
    this.searchTerm.valueChanges.subscribe((query: string) => {
      //console.log(query);
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

  sendWarehouse(event: any) {
    //console.log(event);
    this.openModal();
    this.valueWarehouse = event.name;
    this.warehouse.emit(event);
  }
}
