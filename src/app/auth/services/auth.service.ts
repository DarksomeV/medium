import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IRegisterRequest } from '../types/register-request.interface';
import { ICurrentUser } from '../../shared/types/current-user.interface';
import { environment } from '../../../environments/environment';
import { IAuthResponse } from '../types/auth-response.interface';
import { map } from 'rxjs/operators';

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
        map(({ user }: IAuthResponse) => user)
      );
  }
}
