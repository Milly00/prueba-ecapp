import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CWarehousesFilter {
  filterWarehouses(query: string, listWarehouses: any[]) {
    return listWarehouses.filter((warehouse) => warehouse.name.toLowerCase().includes(query));
  }
}
