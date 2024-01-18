import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CVehiclesFilter {
  filterVehicles(query: string, listVehicles: any[]) {
    return listVehicles.filter((vehicle) => vehicle.code.toLowerCase().includes(query));
  }
}
