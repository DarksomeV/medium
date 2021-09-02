import { Action, createReducer, on } from "@ngrx/store";
import { routerNavigationAction } from "@ngrx/router-store";

import { ICommentsState } from '../types/comments-state.interface';
import { getCommentsAction, getCommentsFailureAction, getCommentsSuccessAction } from './actions/get-comments.action';
import { addCommentAction, addCommentFailureAction, addCommentSuccessAction } from './actions/add-comment.action';
import {
  deleteCommentAction,
  deleteCommentFailureAction,
  deleteCommentSuccessAction
} from './actions/delete-comment.action';

const initialState: ICommentsState = {
  isLoading: false,
  error: null,
  data: null,
};

const commentsReducer = createReducer(
  initialState,
  on(getCommentsAction, (state): ICommentsState => {
    return {
      ...state,
      isLoading: true,
    }
  }),

  on(getCommentsSuccessAction, (state, action): ICommentsState => {
    return {
      ...state,
      isLoading: false,
      data: action.comments
    }
  }),

  on(getCommentsFailureAction, (state): ICommentsState => {
    return {
      ...state,
      isLoading: false,
    }
  }),

  on(addCommentAction, (state): ICommentsState => {
    return {
      ...state,
      isLoading: true,
    }
  }),

  on(addCommentSuccessAction, (state, action): ICommentsState => {
    return {
      ...state,
      data: [action.comment, ...state.data],
      isLoading: false,
    }
  }),

  on(addCommentFailureAction, (state): ICommentsState => {
    return {
      ...state,
      isLoading: false,
    }
  }),

  on(deleteCommentAction, (state): ICommentsState => {
    return {
      ...state,
      isLoading: true,
    }
  }),

  on(deleteCommentSuccessAction, (state, action): ICommentsState => {
    return {
      ...state,
      data: state.data.filter(({ id }) => id !== action.id),
      isLoading: false,
    }
  }),

  on(deleteCommentFailureAction, (state): ICommentsState => {
    return {
      ...state,
      isLoading: false,
    }
  }),

  on(routerNavigationAction, (): ICommentsState => initialState),
)

export function reducers(state: ICommentsState, action: Action) {
  return commentsReducer(state, action);
}
