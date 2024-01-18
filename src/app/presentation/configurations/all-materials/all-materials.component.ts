import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfigurationMaterialsModel } from 'src/domain/models/configuration-materials.model';
import { EditMaterialsComponent } from '../edit-materials/edit-materials.component';

@Component({
  selector: 'app-all-materials',
  templateUrl: './all-materials.component.html',
  styleUrls: ['./all-materials.component.scss'],
})
export class AllMaterialsComponent {
  sidePanelOpened = true;

  active: boolean = false;
  statusMaterial: string = '';
  codeMaterial: string = '';
  nameMaterial: string = '';
  groupMaterial: string = '';
  textTooltip: string = 'Ocultar lista de materiales';
  status = ['ACTIVE', 'INACTIVE', 'ALL'];
  allMaterials: ConfigurationMaterialsModel[] = [
    {
      materialId: 1,
      code: 'ABC123',
      name: 'Material1',
      description: 'Descripción del Material 1',
      purchasePrice: 50.99,
      img: 'assets/images/products/s6.jpg',
    },
    {
      materialId: 2,
      code: 'DEF456',
      name: 'Material2',
      description: 'Descripción del Material 2',
      purchasePrice: 30.5,
      img: 'assets/images/products/s6.jpg',
    },
    {
      materialId: 3,
      code: 'GHI789',
      name: 'Material3',
      description: 'Descripción del Material 3',
      purchasePrice: 75.25,
      img: 'assets/images/products/s6.jpg',
    },
    {
      materialId: 1,
      code: 'ABC122',
      name: 'Material1',
      description: 'Descripción del Material 1',
      purchasePrice: 50.99,
      img: 'assets/images/products/s6.jpg',
    },
    {
      materialId: 2,
      code: 'DEF45A',
      name: 'Material2',
      description: 'Descripción del Material 2',
      purchasePrice: 30.5,
      img: 'assets/images/products/s6.jpg',
    },
    {
      materialId: 3,
      code: 'GHI780',
      name: 'Material3',
      description: 'Descripción del Material 3',
      purchasePrice: 75.25,
      img: 'assets/images/products/s6.jpg',
    },
  ];

  copyAllMaterials: ConfigurationMaterialsModel[] = this.allMaterials;

  accountMaterials: ConfigurationMaterialsModel[] = [];

  constructor(private dialog: MatDialog) {}

  openDialog(material: any, isEdit: boolean) {
    const dialogRef = this.dialog.open(EditMaterialsComponent, {
      width: '550px',
      enterAnimationDuration: '0',
      exitAnimationDuration: 0,
      disableClose: true,
      data: material,
    });

    dialogRef.afterClosed().subscribe((result) => {
      //console.log(result);

      if (result !== undefined) {
        if (isEdit) {
          this.editMaterial(result);
        } else {
          this.addMaterial(result);
        }
      } else {
        //console.log('Wrong');
      }
    });
  }
  isOver(): boolean {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }

  close() {
    this.sidePanelOpened = !this.sidePanelOpened;

    if(this.sidePanelOpened === true){
      this.textTooltip = 'Ocultar lista de materiales'
    }else{
      this.textTooltip = 'Mostrar lista de materiales'
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  editMaterial(material: ConfigurationMaterialsModel) {
    //console.log('Se edito el material', material);
  }
  addMaterial(material: ConfigurationMaterialsModel) {
    this.accountMaterials.push(material);
    this.registerMaterial(material.code);
  }

  registerMaterial(code: string): void {
    if (this.allMaterials && this.copyAllMaterials.length > 0) {
      const i = this.allMaterials.findIndex((p) => p.code === code);
      this.allMaterials.splice(i, 1);
      this.copyAllMaterials = this.allMaterials;
    }
  }
}
