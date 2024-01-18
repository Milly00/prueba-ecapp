import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssociatesRoutingModule } from './associates-routing.module';
import { AssociatesComponent } from './associates/associates.component';
import { AssociateComponent } from './associate/associate.component';
import { RegisterAssociateComponent } from './register-associate/register-associate.component';
import { MaterialModule } from 'src/app/material/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { TableUsersComponent } from 'src/app/components/table-users/table-users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalAssociatesComponent } from 'src/app/components/modal/modal-associates/modal-associates.component';
import { ModalVehiclesComponent } from 'src/app/components/modal/modal-vehicles/modal-vehicles.component';
import { ModalRoutesComponent } from 'src/app/components/modal/modal-routes/modal-routes.component';
import { ModalMicroroutesComponent } from 'src/app/components/modal/modal-microroutes/modal-microroutes.component';
import { ModalCitiesComponent } from 'src/app/components/modal/modal-cities/modal-cities.component';


@NgModule({
  declarations: [
    AssociatesComponent,
    AssociateComponent,
    RegisterAssociateComponent,
  ],
  imports: [
    CommonModule,
    AssociatesRoutingModule,
    MaterialModule,
    TablerIconsModule,
    TableUsersComponent,
    ReactiveFormsModule,
    ModalAssociatesComponent,
    ModalVehiclesComponent,
    ModalRoutesComponent,
    ModalMicroroutesComponent,
    ModalCitiesComponent
  ]
})
export class AssociatesModule { }
