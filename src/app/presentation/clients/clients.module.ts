import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientComponent } from './client/client.component';
import { AllClientsComponent } from './all-clients/all-clients.component';
import { MaterialModule } from 'src/app/material/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalWarehousesComponent } from 'src/app/components/modal/modal-warehouses/modal-warehouses.component';
import { ModalCitiesComponent } from 'src/app/components/modal/modal-cities/modal-cities.component';
import { TableUsersComponent } from 'src/app/components/table-users/table-users.component';
import { AppBreadcrumbComponent } from '../layouts/full/shared/breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    ClientComponent,
    AllClientsComponent,
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    MaterialModule,
    TablerIconsModule,
    FormsModule,
    ReactiveFormsModule,
    ModalWarehousesComponent,
    ModalCitiesComponent,
    TableUsersComponent,
    AppBreadcrumbComponent
  ],
})
export class ClientsModule { }
