import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TablerIconsModule } from 'angular-tabler-icons';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MaterialModule } from 'src/app/material/material.module';
import { SideNavService } from 'src/app/presentation/layouts/services/side-nav.service';
import { ClientsModel } from 'src/domain/models/clients.model';
import { ClientsFilter } from 'src/domain/usecases/clients/clients-filter.usecase';

@Component({
  selector: 'app-modal-clients',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    TablerIconsModule,
    ReactiveFormsModule,
    NgScrollbarModule,
  ],
  templateUrl: './modal-clients.component.html',
  styleUrl: './modal-clients.component.scss',
})
export class ModalClientsComponent implements OnInit{

  valueClient: string = '';
  opened: boolean = false;

  @Output() Client = new EventEmitter<ClientsModel>();
  @Input() idClient: string = '' ;

  searchTerm = new FormControl();

  allClients: ClientsModel[] = [
    {
      identityType: 'CC',
      identity: '123456789',
      name: 'Juan Perez',
      clientType: 'PERSONA_NATURAL',
      phoneNumber: '555-1234',
      email: 'juan@example.com',
      industrySector: 'AGROINDUSTRIA',
      cityId: 'Bogota',
      address: 'Calle 123, No. 456',
      registerWarehouseId: 'WRH789',
    },
    {
      identityType: 'CC',
      identity: '987654321',
      name: 'Maria Rodriguez',
      clientType: 'PERSONA_NATURAL',
      phoneNumber: '555-5678',
      email: 'maria@example.com',
      industrySector: 'TECNOLOGIA',
      cityId: 'Medellin',
      address: 'Avenida 456, No. 789',
      registerWarehouseId: 'WRH456',
    },
  ];
  filterClient: ClientsModel[] = [];
  showModal: boolean = false;

  constructor(private filter: ClientsFilter,private sidebarService: SideNavService) {
    this.getClients();
  }

  ngOnInit(): void {
    this.searchClients();
    this.valueClient = this.idClient;
  }

  getClients() {
    this.filterClient = this.allClients;
  }
  openModal() {
    this.opened = !this.opened;
    this.showModal = !this.showModal;
    this.sidebarService.showModal.next(this.showModal);
  }
  searchClients() {
    this.searchTerm.valueChanges.subscribe((query: string) => {
      //console.log(query);
      if (query.length > 2) {
        const filter = this.filter.filterClients(
          query.toLowerCase(),
          this.allClients
        );
        if (filter !== undefined) {
          this.filterClient = filter;
        } else {
          this.getClients();
        }
        //console.log(filter);
      } else {
        this.getClients();
      }
    });
  }

  sendClients(event: ClientsModel) {
    //console.log(event);
    this.openModal();
    this.valueClient = event.name;
    this.Client.emit(event);
  }
}
