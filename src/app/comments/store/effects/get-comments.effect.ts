import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CommentsService } from '../../services/comments.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { getCommentsAction, getCommentsFailureAction, getCommentsSuccessAction } from '../actions/get-comments.action';
import { IComment } from '../../../shared/types/comment.interface';

@Injectable()
export class GetCommentsEffect {
  constructor(
    private _actions$: Actions,
    private _commentsService: CommentsService
  ) {}

  getComments$ = createEffect(() => this._actions$.pipe(
    ofType(getCommentsAction),
    switchMap(({ articleSlug }) => {
      return this._commentsService.getComments(articleSlug).pipe(
        map((comments: IComment[]) => {
          return getCommentsSuccessAction({ comments });
        }),
        catchError(() => {
          return of(getCommentsFailureAction())
        })
      )
    })
  ))
}
