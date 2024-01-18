import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GetGenericService {
  constructor(private http: HttpClient) {}

  getAll<T>(params: any): Observable<T[]> {
    return this.http.get<T[]>(params);
  }

  getId<T>(params: any): Observable<T> {
    return this.http.get<T>(params);
  }
}
