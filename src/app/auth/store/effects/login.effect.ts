import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { AuthService } from '../../services/auth.service';
import { ICurrentUser } from '../../../shared/types/current-user.interface';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistenceService } from '../../../shared/services/persistence.service';
import { Router } from '@angular/router';
import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.action';

@Injectable()
export class LoginEffect {
  constructor(
    private _actions$: Actions,
    private _authService: AuthService,
    private _persistenceService: PersistenceService,
    private _router: Router,
  ) {}

  login$ = createEffect(() => this._actions$.pipe(
    ofType(loginAction),
    switchMap(({ request }) => {
      return this._authService.login(request).pipe(
        map((currentUser: ICurrentUser) => {
          this._persistenceService.set('accessToken', currentUser.token)

          return loginSuccessAction({currentUser});
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          return of(loginFailureAction({errors: errorResponse.error.errors}))
        })
      )
    })
  ))

  redirectAfterSubmit$ = createEffect(() => this._actions$.pipe(
    ofType(loginSuccessAction),
    tap(() => {
      this._router.navigateByUrl('/')
    }),
  ), { dispatch: false })
}
