import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollaboratorComponent } from './collaborator/collaborator.component';

const routes: Routes = [
  {
    path: '',
    children: [{ path: 'collaborator', component: CollaboratorComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollaboratorsRoutingModule {}
