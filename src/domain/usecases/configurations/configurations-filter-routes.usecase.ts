import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CRoutesFilter {
  filterRoutes(query: string, listRoutes: any[]) {
    return listRoutes.filter((route) => route.name.toLowerCase().includes(query));
  }
}
