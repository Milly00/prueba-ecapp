import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RegularExpressions } from 'src/app/global/regular_expressions';
import { ConfigurationMaterialsModel } from 'src/domain/models/configuration-materials.model';

@Component({
  selector: 'app-edit-material-warehouses',
  templateUrl: './edit-material-warehouses.component.html',
  styleUrls: ['./edit-material-warehouses.component.scss'],
})
export class EditMaterialWarehousesComponent {
  expressionsR = RegularExpressions;
  price: number = 0;
  purchasePrice: number = 0;
  status = ['Habilitar', 'Deshabilitar'];
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      accountMaterialId: string;
      price: number;
      purchasePrice: number;
      material: ConfigurationMaterialsModel;
      status: boolean;
    },
    public dialogRef: MatDialogRef<EditMaterialWarehousesComponent>
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
