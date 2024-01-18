import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollaboratorsRoutingModule } from './collaborators-routing.module';
import { CollaboratorComponent } from './collaborator/collaborator.component';
import { MaterialModule } from 'src/app/material/material.module';
import { TablerIconsModule } from 'angular-tabler-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppBreadcrumbComponent } from '../layouts/full/shared/breadcrumb/breadcrumb.component';


@NgModule({
  declarations: [
    CollaboratorComponent
  ],
  imports: [
    CommonModule,
    CollaboratorsRoutingModule,
    MaterialModule,
    TablerIconsModule,
    FormsModule,
    ReactiveFormsModule,
    AppBreadcrumbComponent
  ]
})
export class CollaboratorsModule { }
