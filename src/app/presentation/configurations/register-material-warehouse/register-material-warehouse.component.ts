import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RegularExpressions } from 'src/app/global/regular_expressions';
import { ConfigurationMaterialsModel } from 'src/domain/models/configuration-materials.model';

@Component({
  selector: 'app-register-material-warehouse',
  templateUrl: './register-material-warehouse.component.html',
  styleUrls: ['./register-material-warehouse.component.scss'],
})
export class RegisterMaterialWarehouseComponent {
  expressionsR = RegularExpressions;
  price: number = 0;
  purchasePrice: number = 0;

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      accountMaterialId: string;
      price: number;
      purchasePrice: number;
      material: ConfigurationMaterialsModel;
    },
    public dialogRef: MatDialogRef<RegisterMaterialWarehouseComponent>
  ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }
}
