import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CVehiclesFilter } from 'src/domain/usecases/configurations/configurations-filter.usecase';
import { MaterialModule } from 'src/app/material/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { SideNavService } from 'src/app/presentation/layouts/services/side-nav.service';
export interface productsData {
  id: number;
  code: string;
  vehicleType: string;
  imagePath: string;
  plate: string;
}
@Component({
  selector: 'app-modal-vehicles',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    TablerIconsModule,
    ReactiveFormsModule,
    NgScrollbarModule,
  ],
  templateUrl: './modal-vehicles.component.html',
  styleUrls: ['./modal-vehicles.component.scss'],
})
export class ModalVehiclesComponent implements OnInit {
  @Output() vehicle = new EventEmitter<any>();

  searchTerm = new FormControl();
  valueVehicle: string = '';

  allVehicles: productsData[] = [
    {
      id: 1,
      code: 'VH8900404',
      vehicleType: 'CARRETA',
      imagePath: 'assets/images/products/s6.jpg',
      plate: 'ASUDI89',
      
    },
    {
      id: 2,
      code: 'VH2900404',
      vehicleType: 'CARRETA',

      imagePath: 'assets/images/products/s6.jpg',
      plate: 'ASUDI89',
     
    },
    {
      id: 3,
      code: 'VH1900404',
      vehicleType: 'CARRETA',

      imagePath: 'assets/images/products/s6.jpg',
      plate: 'AOPDI89',
     
    },
    {
      id: 4,
      code: 'VH8900408',
      vehicleType: 'CARRETA',
      imagePath: 'assets/images/products/s6.jpg',
      plate: 'BNUDI89',
     
    },
    {
      id: 4,
      code: 'VH8900408',
      vehicleType: 'CARRETA',
      imagePath: 'assets/images/products/s6.jpg',
      plate: 'PODDI89',     
    },
    {
      id: 4,
      code: 'VH8900408',
      vehicleType: 'CARRETA',
      imagePath: 'assets/images/products/s6.jpg',
      plate: 'DJDDI89',     
    },
    {
      id: 4,
      code: 'VH8900408',
      vehicleType: 'CARRETA',
      imagePath: 'assets/images/products/s6.jpg',
      plate: 'ASUDI89',      
    },
  ];

  filterVehicles: productsData[] = [];
  opened: boolean = false;
  showModal: boolean = false;

  constructor(private filter: CVehiclesFilter,private sidebarService: SideNavService) {
    this.getAssociates();
  }

  ngOnInit(): void {
    this.searchUser();
  }

  openModal() {
    this.opened = !this.opened;
    this.showModal = !this.showModal;
    this.sidebarService.showModal.next(this.showModal);
  }

  getAssociates() {
    this.filterVehicles = this.allVehicles;
  }

  searchUser() {
    this.searchTerm.valueChanges.subscribe((query: string) => {
      //console.log(query);
      if (query.length > 2) {
        const filter = this.filter.filterVehicles(
          query.toLowerCase(),
          this.allVehicles
        );
        if (filter !== undefined) {
          this.filterVehicles = filter;
        } else {
          this.getAssociates();
        }
        //console.log(filter);
      } else {
        this.getAssociates();
      }
    });
  }

  sendVehicle(event: any) {
    //console.log(event);
    this.openModal();
    this.valueVehicle = event.code;
    this.vehicle.emit(event);
  }
}
