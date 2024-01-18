import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  public showModal = new BehaviorSubject<boolean>(false);

  constructor() { }
}
