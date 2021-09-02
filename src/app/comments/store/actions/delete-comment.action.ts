import { createAction, props } from '@ngrx/store';

import { ActionTypes } from '../action-types';

export const deleteCommentAction = createAction(
  ActionTypes.DELETE_COMMENT,
  props<{articleSlug: string, id: number}>()
)

export const deleteCommentSuccessAction = createAction(
  ActionTypes.DELETE_COMMENT_SUCCESS,
  props<{id: number}>()
)

export const deleteCommentFailureAction = createAction(
  ActionTypes.DELETE_COMMENT_FAILURE
)
