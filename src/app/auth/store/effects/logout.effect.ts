import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';

import { logoutAction } from '../actions/sync.action';
import { PersistenceService } from '../../../shared/services/persistence.service';

@Injectable()
export class LogoutEffect {
  constructor(
    private _actions$: Actions,
    private _persistenceService: PersistenceService,
    private _router: Router,
  ) {}

  logout$ = createEffect(
    () => this._actions$.pipe(
      ofType(logoutAction),
      tap(() => {
        this._persistenceService.set('accessToken', '');
        this._router.navigateByUrl('/');
      })
    ),
    {dispatch: false}
  )
}
