import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { registerAction, registerFailureAction, registerSuccessAction } from '../actions/register.action';
import { AuthService } from '../../services/auth.service';
import { ICurrentUser } from '../../../shared/types/current-user.interface';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { PersistenceService } from '../../../shared/services/persistence.service';
import { Router } from '@angular/router';

@Injectable()
export class RegisterEffect {
  constructor(
    private _actions$: Actions,
    private _authService: AuthService,
    private _persistenceService: PersistenceService,
    private _router: Router,
  ) {}

  register$ = createEffect(() => this._actions$.pipe(
    ofType(registerAction),
    switchMap(({ request }) => {
      return this._authService.register(request).pipe(
        map((currentUser: ICurrentUser) => {
          this._persistenceService.set('accessToken', currentUser.token)

          return registerSuccessAction({currentUser});
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          return of(registerFailureAction({errors: errorResponse.error.errors}))
        })
      )
    })
  ))

  redirectAfterSubmit$ = createEffect(() => this._actions$.pipe(
    ofType(registerSuccessAction),
    tap(() => {
      this._router.navigateByUrl('/')
    }),
  ), { dispatch: false })
}
