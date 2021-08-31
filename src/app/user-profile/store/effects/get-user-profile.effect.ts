import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { UserProfileService } from '../../services/user-profile.service';
import {
  getUserProfileAction,
  getUserProfileFailureAction,
  getUserProfileSuccessAction
} from '../actions/get-user-profile.action';
import { IProfile } from '../../../shared/types/profile.interface';

@Injectable()
export class GetUserProfileEffect {
  constructor(
    private _actions$: Actions,
    private _userProfileService: UserProfileService,
  ) {}

  getUserProfile$ = createEffect(() => this._actions$.pipe(
    ofType(getUserProfileAction),
    switchMap(({ slug }) => {
      return this._userProfileService.getUserProfile(slug).pipe(
        map((userProfile: IProfile) => getUserProfileSuccessAction({ userProfile })),
        catchError(() => {
          return of(getUserProfileFailureAction())
        })
      )
    })
  ))
}
