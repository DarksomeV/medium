import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { CommentsService } from '../../services/comments.service';
import { IComment } from '../../../shared/types/comment.interface';
import { addCommentAction, addCommentFailureAction, addCommentSuccessAction } from '../actions/add-comment.action';

@Injectable()
export class AddCommentEffect {
  constructor(
    private _actions$: Actions,
    private _commentsService: CommentsService
  ) {}

  addComment$ = createEffect(() => this._actions$.pipe(
    ofType(addCommentAction),
    switchMap(({ articleSlug, body }) => {
      return this._commentsService.addComment(articleSlug, body).pipe(
        map((comment: IComment) => {
          return addCommentSuccessAction({ comment });
        }),
        catchError(() => {
          return of(addCommentFailureAction())
        })
      )
    })
  ))
}
