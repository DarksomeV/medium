import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../action-types';
import { IComment } from '../../../shared/types/comment.interface';

export const addCommentAction = createAction(
  ActionTypes.ADD_COMMENT,
  props<{articleSlug: string, body: string}>()
)

export const addCommentSuccessAction = createAction(
  ActionTypes.ADD_COMMENT_SUCCESS,
  props<{comment: IComment}>()
)

export const addCommentFailureAction = createAction(
  ActionTypes.ADD_COMMENT_FAILURE
)
