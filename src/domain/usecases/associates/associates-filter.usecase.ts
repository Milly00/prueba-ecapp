import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AssociatesFilter {
  filterUser(query: string, listUser: any[]) {
    return listUser.filter((user) => user.name.toLowerCase().includes(query));
  }
}
