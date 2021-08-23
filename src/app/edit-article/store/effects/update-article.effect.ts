import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { EditArticleService } from '../../services/edit-article.service';

import { IArticle } from '../../../shared/types/article.interface';
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction
} from '../actions/update-article.action';

@Injectable()
export class UpdateArticleEffect {
  constructor(
    private _actions$: Actions,
    private _editArticleService: EditArticleService,
    private _router: Router,
  ) {}

  updateArticle$ = createEffect(() => this._actions$.pipe(
    ofType(updateArticleAction),
    switchMap(({ slug, articleInput }) => {
      return this._editArticleService.updateArticle(slug, articleInput).pipe(
        map((article: IArticle) => updateArticleSuccessAction({ article })),
        catchError((errorResponse: HttpErrorResponse) => {
          return of(updateArticleFailureAction({ errors: errorResponse.error.errors }))
        })
      )
    })
  ))

  redirectAfterCreate$ = createEffect(() => this._actions$.pipe(
    ofType(updateArticleSuccessAction),
    tap(({article}) => {
      this._router.navigate(['/articles', article.slug])
    }),
  ), { dispatch: false })
}
