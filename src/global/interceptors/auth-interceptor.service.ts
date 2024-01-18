import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
/**
 * The interceptor is a normal service tha implements the HttpInterceptor
 * It implement the intercep method that will modify the request and add Bearer token,
 * if don't have token, the interceptor return the response original
 */
@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //throw new Error('Method not implemented.');
    const token: string | null = localStorage.getItem('token');

    let request: HttpRequest<any> = req;

    if (token !== null) {
      request = req.clone({
        setHeaders: {
          authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request);
  }
}
