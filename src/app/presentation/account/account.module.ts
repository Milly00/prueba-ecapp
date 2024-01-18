import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account/account.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablerIconsModule } from 'angular-tabler-icons';
import { ModalCitiesComponent } from 'src/app/components/modal/modal-cities/modal-cities.component';
import { AppBreadcrumbComponent } from '../layouts/full/shared/breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TablerIconsModule,
    ModalCitiesComponent,
    AppBreadcrumbComponent
  ]
})
export class AccountModule { }
