import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CMicroroutesFilter {
  filterMicroroutes(query: string, listMicroroutes: any[]) {
    return listMicroroutes.filter((route) => route.name.toLowerCase().includes(query));
  }
}
