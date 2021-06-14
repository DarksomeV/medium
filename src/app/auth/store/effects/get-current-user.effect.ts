import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService } from '../../services/auth.service';
import { ICurrentUser } from '../../../shared/types/current-user.interface';
import { PersistenceService } from '../../../shared/services/persistence.service';
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction
} from '../actions/get-current-user.action';

@Injectable()
export class GetCurrentUserEffect {
  constructor(
    private _actions$: Actions,
    private _authService: AuthService,
    private _persistenceService: PersistenceService,
  ) {}

  getCurrentUser$ = createEffect(() => this._actions$.pipe(
    ofType(getCurrentUserAction),
    switchMap(() => {
      const token: string = this._persistenceService.get('accessToken');

      if (!token) {
        return of(getCurrentUserFailureAction());
      }

      return this._authService.getCurrentUser().pipe(
        map((currentUser: ICurrentUser) => {
          return getCurrentUserSuccessAction({currentUser});
        }),
        catchError(() => {
          return of(getCurrentUserFailureAction())
        })
      )
    })
  ))
}
