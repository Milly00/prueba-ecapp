import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllMaterialComponent } from './all-material/all-material.component';
import { RegisterMaterialComponent } from './register-material/register-material.component';
import { IdRecoveryMaterialsComponent } from './id-recovery-materials/id-recovery-materials.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'all-materials',
        component: AllMaterialComponent
      },
      {
        path: 'register-material',
        component: RegisterMaterialComponent
      },
      {
        path: 'material/:id',
        component: IdRecoveryMaterialsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialsRecoveryRoutingModule { }
