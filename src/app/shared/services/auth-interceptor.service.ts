import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs';

import { PersistenceService } from './persistence.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private _persistenceService: PersistenceService,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token: string = this._persistenceService.get('accessToken');

    request = request.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : '',
      }
    })

    return next.handle(request);
  }
}
