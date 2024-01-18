import { Injectable } from '@angular/core';
import { MaterialRecovery } from 'src/domain/models/materials-recovery.model';

@Injectable({
  providedIn: 'root',
})
export class OperationsMaterial {
  calculateValuePaid(weight: number, wasteWeight: number, valueKG: number) {
    return (weight - wasteWeight) * valueKG;
  }

  calculateTotalKG(materials: MaterialRecovery[]) {
    let valueKG = 0;
    materials.forEach((element) => {
      valueKG += element.weight;
    });

    return valueKG;
  }

  calculateTotalWasteKG(materials: MaterialRecovery[]) {
    let wasteKG = 0;
    materials.forEach((element) => {
      wasteKG += element.wasteWeight;
    });

    return wasteKG;
  }

  calculateTotalPayment(materials: MaterialRecovery[]) {
    let total = 0;
    materials.forEach((element) => {
      total += element.valuePaid;
    });

    return total;
  }
}
