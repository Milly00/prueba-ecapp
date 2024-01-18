import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssociatesComponent } from './associates/associates.component';
import { AssociateComponent } from './associate/associate.component';
import { RegisterAssociateComponent } from './register-associate/register-associate.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'associates',
        component: AssociatesComponent,
      },
      {
        path: 'associate/:id',
        component: AssociateComponent
      },
      {
        path: 'register-associate',
        component: RegisterAssociateComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociatesRoutingModule { }
