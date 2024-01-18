import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationsRoutingModule } from './configurations-routing.module';
import { AllDeliveryAreasComponent } from './all-delivery-areas/all-delivery-areas.component';
import { IdDeliveryAreasComponent } from './id-delivery-areas/id-delivery-areas.component';
import { TableConfigurationsComponent } from 'src/app/components/table-configurations/table-configurations.component';
import { MaterialModule } from 'src/app/material/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllRoutesComponent } from './all-routes/all-routes.component';
import { IdRoutesComponent } from './id-routes/id-routes.component';
import { RegisterRoutesComponent } from './register-routes/register-routes.component';
import { AllMicroRoutesComponent } from './all-micro-routes/all-micro-routes.component';
import { IdMicroRoutesComponent } from './id-micro-routes/id-micro-routes.component';
import { RegisterMicroRoutesComponent } from './register-micro-routes/register-micro-routes.component';
import { RegisterWarehouseComponent } from './register-warehouse/register-warehouse.component';
import { IdWarehouseComponent } from './id-warehouse/id-warehouse.component';
import { AllWarehouseComponent } from './all-warehouse/all-warehouse.component';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NameColumnTablePipe } from 'src/global/pipes/name-column-table.pipe';
import { AllMaterialsComponent } from './all-materials/all-materials.component';
import { EditMaterialsComponent } from './edit-materials/edit-materials.component';
import { DetailMaterialsComponent } from './detail-materials/detail-materials.component';
import { RegisterMaterialWarehouseComponent } from './register-material-warehouse/register-material-warehouse.component';
import { AllVehiclesComponent } from './all-vehicles/all-vehicles.component';
import { RegisterVehiclesComponent } from './register-vehicles/register-vehicles.component';
import { ModalAssociatesComponent } from 'src/app/components/modal/modal-associates/modal-associates.component';
import { ModalWarehousesComponent } from 'src/app/components/modal/modal-warehouses/modal-warehouses.component';
import { IdVehiclesComponent } from './id-vehicles/id-vehicles.component';
import { ModalDeliveryAreasComponent } from 'src/app/components/modal/modal-delivery-areas/modal-delivery-areas.component';
import { ModalRoutesComponent } from 'src/app/components/modal/modal-routes/modal-routes.component';
import { EditMaterialWarehousesComponent } from './edit-material-warehouses/edit-material-warehouses.component';
import { ModalCitiesComponent } from 'src/app/components/modal/modal-cities/modal-cities.component';
import { provideClientHydration } from '@angular/platform-browser';


@NgModule({
  declarations: [
    AllDeliveryAreasComponent,
    IdDeliveryAreasComponent,
    AllRoutesComponent,
    IdRoutesComponent,
    RegisterRoutesComponent,
    AllMicroRoutesComponent,
    IdMicroRoutesComponent,
    RegisterMicroRoutesComponent,
    RegisterWarehouseComponent,
    IdWarehouseComponent,
    AllWarehouseComponent,
    AllMaterialsComponent,
    EditMaterialsComponent,
    DetailMaterialsComponent,
    RegisterMaterialWarehouseComponent,
    AllVehiclesComponent,
    RegisterVehiclesComponent,
    IdVehiclesComponent,
    EditMaterialWarehousesComponent,
  ],
  imports: [
    CommonModule,
    ConfigurationsRoutingModule,
    TableConfigurationsComponent,
    MaterialModule,
    TablerIconsModule,
    ReactiveFormsModule,
    FormsModule,
    NgScrollbarModule,
    NameColumnTablePipe,
    ModalAssociatesComponent,
    ModalWarehousesComponent,
    ModalDeliveryAreasComponent,
    ModalRoutesComponent,
    ModalCitiesComponent
  ],
  providers: [provideClientHydration()]
})
export class ConfigurationsModule { }
