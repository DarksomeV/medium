import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { CreateArticleService } from '../../services/create-article.service';
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction
} from '../actions/create-article.action';
import { IArticle } from '../../../shared/types/article.interface';

@Injectable()
export class CreateArticleEffect {
  constructor(
    private _actions$: Actions,
    private _createArticleService: CreateArticleService,
    private _router: Router,
  ) {}

  createArticle$ = createEffect(() => this._actions$.pipe(
    ofType(createArticleAction),
    switchMap(({ articleInput }) => {
      return this._createArticleService.createArticle(articleInput).pipe(
        map((article: IArticle) => createArticleSuccessAction({ article })),
        catchError((errorResponse: HttpErrorResponse) => {
          return of(createArticleFailureAction({ errors: errorResponse.error.errors }))
        })
      )
    })
  ))

  redirectAfterCreate$ = createEffect(() => this._actions$.pipe(
    ofType(createArticleSuccessAction),
    tap(({article}) => {
      this._router.navigate(['/articles', article.slug])
    }),
  ), { dispatch: false })
}
