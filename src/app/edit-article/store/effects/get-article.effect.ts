import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';

import { of } from 'rxjs';

import { IArticle } from '../../../shared/types/article.interface';
import { ArticleService as SharedArticleService } from '../../../shared/services/article.service';
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from '../actions/get-article.action';

@Injectable()
export class GetArticleEffect {
  constructor(
    private _actions$: Actions,
    private _articleService: SharedArticleService,
  ) {}

  getArticle$ = createEffect(() => this._actions$.pipe(
    ofType(getArticleAction),
    switchMap(({ slug }) => {
      return this._articleService.getArticle(slug).pipe(
        map((article: IArticle) => getArticleSuccessAction({ article })),
        catchError(() => {
          return of(getArticleFailureAction())
        })
      )
    })
  ))
}
