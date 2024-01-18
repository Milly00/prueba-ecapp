import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CDeliveryFilter {
  filterDeliveryAreas(query: string, listDelivery: any[]) {
    return listDelivery.filter((area) => area.name.toLowerCase().includes(query));
  }
}
