import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CAddDeleteArray {
  setElementsArrayByCode(query: string, element: any, list: any[]) {
    const existElement = list.some((objeto) => objeto.code === query);

    if (existElement && list.length > 0) {
      return list.filter((objeto) => objeto.code !== query);
    } else {
      return [...list, element];
    }
  }
}
