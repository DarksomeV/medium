import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';
import { PersistenceService } from '../../../shared/services/persistence.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ICurrentUser } from '../../../shared/types/current-user.interface';
import { HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import {
  updateCurrentUserAction,
  updateCurrentUserFailureAction,
  updateCurrentUserSuccessAction
} from '../actions/update-current-user.action';

@Injectable()
export class UpdateCurrentUserEffect {
  constructor(
    private _actions$: Actions,
    private _authService: AuthService,
    private _persistenceService: PersistenceService,
  ) {}

  updateCurrentUser$ = createEffect(() => this._actions$.pipe(
    ofType(updateCurrentUserAction),
    switchMap(({ currentUserInput }) => {
      return this._authService.updateCurrentUser(currentUserInput).pipe(
        map((currentUser: ICurrentUser) => {
          return updateCurrentUserSuccessAction({currentUser});
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          return of(updateCurrentUserFailureAction({errors: errorResponse.error.errors}))
        })
      )
    })
  ))
}
