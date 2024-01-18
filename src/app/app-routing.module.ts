import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullComponent } from './presentation/layouts/full/full.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'associates',
        loadChildren: () =>
          import('./presentation/associates/associates.module').then(
            (m) => m.AssociatesModule
          ),
      },
      {
        path: 'configurations',
        loadChildren: () =>
          import('./presentation/configurations/configurations.module').then(
            (m) => m.ConfigurationsModule
          ),
      },
      {
        path: 'clients',
        loadChildren: () =>
          import('./presentation/clients/clients.module').then(
            (m) => m.ClientsModule
          ),
      },
      {
        path: 'collaborators',
        loadChildren: () =>
          import('./presentation/collaborators/collaborators.module').then(
            (m) => m.CollaboratorsModule
          ),
      },
      {
        path: 'accounts',
        loadChildren: () =>
          import('./presentation/account/account.module').then(
            (m) => m.AccountModule
          ),
      },
      {
        path: 'materials-recovery',
        loadChildren: () =>
          import(
            './presentation/materials-recovery/materials-recovery.module'
          ).then((m) => m.MaterialsRecoveryModule),
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./presentation/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
