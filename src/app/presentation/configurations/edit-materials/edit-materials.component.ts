import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RegularExpressions } from 'src/app/global/regular_expressions';
import { ConfigurationMaterialsModel } from '../../../../domain/models/configuration-materials.model';

@Component({
  selector: 'app-edit-materials',
  templateUrl: './edit-materials.component.html',
  styleUrls: ['./edit-materials.component.scss'],
})
export class EditMaterialsComponent {
  img: string | ArrayBuffer | null = '../assets/images/profile/user-1.jpg';
  status = ['Habilitar', 'Deshabilitar'];

  expressionsR = RegularExpressions;
  myValue: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: ConfigurationMaterialsModel,
    public dialogRef: MatDialogRef<EditMaterialsComponent>
  ) {}

 
  

  selectFile(event: any): void {
    if (!event.target.files[0] || event.target.files[0].length === 0) {
      // this.msg = 'You must select an image';
      return;
    }
    const mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      // this.msg = "Only images are supported";
      return;
    }
    // tslint:disable-next-line - Disables all
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    // tslint:disable-next-line - Disables all
    reader.onload = () => {
      // tslint:disable-next-line - Disables all
      this.img = reader.result;
    };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
