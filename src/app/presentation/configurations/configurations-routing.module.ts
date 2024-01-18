import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllDeliveryAreasComponent } from './all-delivery-areas/all-delivery-areas.component';
import { IdDeliveryAreasComponent } from './id-delivery-areas/id-delivery-areas.component';
import { AllRoutesComponent } from './all-routes/all-routes.component';
import { IdRoutesComponent } from './id-routes/id-routes.component';
import { AllMicroRoutesComponent } from './all-micro-routes/all-micro-routes.component';
import { IdMicroRoutesComponent } from './id-micro-routes/id-micro-routes.component';
import { AllWarehouseComponent } from './all-warehouse/all-warehouse.component';
import { IdWarehouseComponent } from './id-warehouse/id-warehouse.component';
import { AllMaterialsComponent } from './all-materials/all-materials.component';
import { DetailMaterialsComponent } from './detail-materials/detail-materials.component';
import { AllVehiclesComponent } from './all-vehicles/all-vehicles.component';
import { RegisterVehiclesComponent } from './register-vehicles/register-vehicles.component';
import { IdVehiclesComponent } from './id-vehicles/id-vehicles.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'delivery-areas', component: AllDeliveryAreasComponent },
      { path: 'delivery-area/:id', component: IdDeliveryAreasComponent },
      { path: 'routes', component: AllRoutesComponent },
      { path: 'route/:id', component: IdRoutesComponent },
      { path: 'micro-routes', component: AllMicroRoutesComponent },
      { path: 'micro-route/:id', component: IdMicroRoutesComponent },
      { path: 'warehouses', component: AllWarehouseComponent },
      { path: 'warehouse/:id', component: IdWarehouseComponent },
      { path: 'materials', component: AllMaterialsComponent },
      { path: 'materials/detail', component: DetailMaterialsComponent },
      { path: 'vehicles', component: AllVehiclesComponent },
      { path: 'vehicles/register', component: RegisterVehiclesComponent },
      { path: 'vehicles/:id', component: IdVehiclesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationsRoutingModule {}
