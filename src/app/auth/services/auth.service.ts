import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IRegisterRequest } from '../types/register-request.interface';
import { ICurrentUser } from '../../shared/types/current-user.interface';
import { environment } from '../../../environments/environment';
import { IAuthResponse } from '../types/auth-response.interface';
import { map } from 'rxjs/operators';
import { ILoginRequest } from '../types/login-request.interface';

@Injectable()
export class AuthService {

  constructor(
    private _http: HttpClient,
  ) {}

  public register(data: IRegisterRequest): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/users';

    return this._http
      .post<IAuthResponse>(url, data)
      .pipe(
        map(this.getUser)
      );
  }

  public login(data: ILoginRequest): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/users/login';

    return this._http
      .post<IAuthResponse>(url, data)
      .pipe(
        map(this.getUser)
      );
  }

  public getCurrentUser(): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/user';

    return this._http
      .get<IAuthResponse>(url)
      .pipe(
        map(this.getUser)
      );
  }

  private getUser(response: IAuthResponse) : ICurrentUser {
    return response.user;
  }
}
