import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsRecoveryRoutingModule } from './materials-recovery-routing.module';
import { AllMaterialComponent } from './all-material/all-material.component';
import { MaterialModule } from 'src/app/material/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { TableConfigurationsComponent } from 'src/app/components/table-configurations/table-configurations.component';
import { RegisterMaterialComponent } from './register-material/register-material.component';
import { ModalWarehousesComponent } from 'src/app/components/modal/modal-warehouses/modal-warehouses.component';
import { RegisterClientComponent } from '../clients/register-client/register-client.component';
import { ModalClientsComponent } from 'src/app/components/modal/modal-clients/modal-clients.component';
import { ModalAssociatesComponent } from 'src/app/components/modal/modal-associates/modal-associates.component';
import { ModalMaterialsComponent } from 'src/app/components/modal/modal-materials/modal-materials.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalRoutesComponent } from 'src/app/components/modal/modal-routes/modal-routes.component';
import { NameColumnTablePipe } from 'src/global/pipes/name-column-table.pipe';
import { ModalMicroroutesComponent } from 'src/app/components/modal/modal-microroutes/modal-microroutes.component';
import { ModalVehiclesComponent } from 'src/app/components/modal/modal-vehicles/modal-vehicles.component';
import { IdRecoveryMaterialsComponent } from './id-recovery-materials/id-recovery-materials.component';


@NgModule({
  declarations: [
    AllMaterialComponent,
    RegisterMaterialComponent,
    IdRecoveryMaterialsComponent
  ],
  imports: [
    CommonModule,
    MaterialsRecoveryRoutingModule,
    MaterialModule,
    TablerIconsModule,
    TableConfigurationsComponent,
    ModalWarehousesComponent,
    RegisterClientComponent,
    ModalClientsComponent,
    ModalAssociatesComponent,
    ModalMaterialsComponent,
    FormsModule,
    ReactiveFormsModule,
    ModalRoutesComponent,
    NameColumnTablePipe,
    ModalMicroroutesComponent,
    ModalVehiclesComponent
  ]
})
export class MaterialsRecoveryModule { }
