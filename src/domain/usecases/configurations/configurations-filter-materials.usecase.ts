import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CMaterialsFilter {
  filterMaterials(query: string, listMaterials: any[]) {
    return listMaterials.filter((materials) => materials.name.toLowerCase().includes(query));
  }
}