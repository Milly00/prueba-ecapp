import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PutGenericService {
  constructor(private http: HttpClient) {}

  update<T>(url: string, params: any): Observable<T> {
    return this.http.put<T>(url, params);
  }
}
