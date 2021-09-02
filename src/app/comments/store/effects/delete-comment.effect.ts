import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { CommentsService } from '../../services/comments.service';
import {
  deleteCommentAction,
  deleteCommentFailureAction,
  deleteCommentSuccessAction
} from '../actions/delete-comment.action';

@Injectable()
export class DeleteCommentEffect {
  constructor(
    private _actions$: Actions,
    private _commentsService: CommentsService
  ) {}

  deleteComment$ = createEffect(() => this._actions$.pipe(
    ofType(deleteCommentAction),
    switchMap(({ articleSlug, id }) => {
      return this._commentsService.deleteComment(articleSlug, id).pipe(
        map(() => {
          return deleteCommentSuccessAction({ id });
        }),
        catchError(() => {
          return of(deleteCommentFailureAction())
        })
      )
    })
  ))
}
