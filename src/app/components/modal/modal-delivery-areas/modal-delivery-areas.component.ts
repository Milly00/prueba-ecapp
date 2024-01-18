import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TablerIconsModule } from 'angular-tabler-icons';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MaterialModule } from 'src/app/material/material.module';
import { SideNavService } from 'src/app/presentation/layouts/services/side-nav.service';
import { ConfigurationsDeliveryAreaModel } from 'src/domain/models/configuration-delivery-area.model';
import { CDeliveryFilter } from 'src/domain/usecases/configurations/configurations-filter-delivery.usecase';

@Component({
  selector: 'app-modal-delivery-areas',
  templateUrl: './modal-delivery-areas.component.html',
  styleUrls: ['./modal-delivery-areas.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    TablerIconsModule,
    ReactiveFormsModule,
    NgScrollbarModule,
  ],
})
export class ModalDeliveryAreasComponent implements OnInit {
  @Output() area = new EventEmitter<any>();
  @Input() idArea: string = '' ;

  searchTerm = new FormControl();
  valueDelivery: string = '';

  allDelivery: ConfigurationsDeliveryAreaModel[] = [
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
      name: 'Bodega 2',
      imageArea: '../assets/images/products/s7.jpg',
    },
    {
      code: 'BOD12345',
  
      cityId: 'Bucaramanga',
      operationStartDate: '2023-10-05',
      name: 'CBodega 1',
      imageArea: '../assets/images/products/s4.jpg',
    },
  ];
  opened: boolean = false;
  filterDelivery: ConfigurationsDeliveryAreaModel[] = [];
  showModal: boolean = false;

  constructor(private filter: CDeliveryFilter,private sidebarService: SideNavService) {
    this.getWarehouses();
  }

  ngOnInit(): void {
    this.searchWarehouses();
    this.valueDelivery = this.idArea;
  }

  getWarehouses() {
    this.filterDelivery = this.allDelivery;
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
        const filter = this.filter.filterDeliveryAreas(
          query.toLowerCase(),
          this.allDelivery
        );
        if (filter !== undefined) {
          this.filterDelivery = filter;
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
    this.valueDelivery = event.name;
    this.area.emit(event);
  }
}
