import { Component } from '@angular/core';

@Component({
  selector: 'app-id-recovery-materials',
  templateUrl: './id-recovery-materials.component.html',
  styleUrl: './id-recovery-materials.component.scss'
})
export class IdRecoveryMaterialsComponent {
  isSearchClient: boolean = true;

  displayedColumnsMaterialsDetail: string[] = [
    'img',
    'code',
    'name',
    'weight',
    'wasteWeight',
    'unitPurchasePrice',
    'valuePaid',
  ];

  displayedColumnsMR = [
    'code',
    'macroRouteId',
    'name',
    'microRouteType',
    'operationStartDate',
   
  ];

  constructor(){}
}
