import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { ArticleSelfService } from '../../services/article-self.service';
import {
  deleteArticleAction,
  deleteArticleFailureAction,
  deleteArticleSuccessAction
} from '../actions/delete-article.action';

@Injectable()
export class DeleteArticleEffect {
  constructor(
    private _actions$: Actions,
    private _articleService: ArticleSelfService,
    private _router: Router,
  ) {}

  deleteArticle$ = createEffect(() => this._actions$.pipe(
    ofType(deleteArticleAction),
    switchMap(({ slug }: { slug: string }) => {
      return this._articleService.deleteArticle(slug).pipe(
        map(() => {
          return deleteArticleSuccessAction();
        }),
        catchError(() => {
          return of(deleteArticleFailureAction())
        })
      )
    })
  ))

  redirectAfterDelete$ = createEffect(() => this._actions$.pipe(
    ofType(deleteArticleSuccessAction),
    tap(() => {
      this._router.navigate(['/'])
    }),
  ), { dispatch: false })
}
