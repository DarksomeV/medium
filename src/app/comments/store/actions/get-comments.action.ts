import { createAction, props } from '@ngrx/store';
import { ActionTypes } from '../action-types';
import { IComment } from '../../../shared/types/comment.interface';


export const getCommentsAction = createAction(
  ActionTypes.GET_COMMENTS,
  props<{articleSlug: string}>()
)

export const getCommentsSuccessAction = createAction(
  ActionTypes.GET_COMMENTS_SUCCESS,
  props<{comments: IComment[]}>()
)

export const getCommentsFailureAction = createAction(
  ActionTypes.GET_COMMENTS_FAILURE
)
