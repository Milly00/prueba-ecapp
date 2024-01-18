import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostGenericService {
  constructor(private http: HttpClient) {}

  add<T>(url: string, params: any): Observable<T> {
    return this.http.post<T>(url, params);
  }
}
