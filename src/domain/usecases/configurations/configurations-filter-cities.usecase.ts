import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CCitiesFilter {
  filterCities(query: string, listCities: any[]) {
    return listCities.filter((city) => city.ciudad.toLowerCase().includes(query));
  }
}
