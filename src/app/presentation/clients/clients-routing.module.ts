import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterClientComponent } from './register-client/register-client.component';
import { AllClientsComponent } from './all-clients/all-clients.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'clients', component: AllClientsComponent},
      {path: 'register-client', component: RegisterClientComponent},
      {path: 'client/:id', component: ClientComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
