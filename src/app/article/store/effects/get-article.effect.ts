import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from '../actions/get-article.action';
import { ArticleService } from '../../../shared/services/article.service';
import { IArticle } from '../../../shared/types/article.interface';

@Injectable()
export class GetArticleEffect {
  constructor(
    private _actions$: Actions,
    private _articleService: ArticleService,
  ) {}

  getArticle$ = createEffect(() => this._actions$.pipe(
    ofType(getArticleAction),
    switchMap(({ slug }: { slug: string }) => {
      return this._articleService.getArticle(slug).pipe(
        map((article: IArticle) => {
          return getArticleSuccessAction({ article });
        }),
        catchError(() => {
          return of(getArticleFailureAction())
        })
      )
    })
  ))
}
