import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IProfile } from '../../shared/types/profile.interface';
import { environment } from '@env/environment';
import { IGetUserProfileResponse } from '../types/get-user-profile-response.interface';

@Injectable()
export class UserProfileService {
  constructor(
    private _http: HttpClient
  ) {}

  public getUserProfile(slug: string): Observable<IProfile> {
    const url: string = `${environment.apiUrl}/profiles/${slug}`;

    return this._http.get(url)
      .pipe(
        map(({ profile }: IGetUserProfileResponse) => profile)
      )
  }
}
