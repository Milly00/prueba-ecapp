import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ClientsFilter {
  filterClients(query: string, listClients: any[]) {
    return listClients.filter((client) => client.name.toLowerCase().includes(query));
  }
}