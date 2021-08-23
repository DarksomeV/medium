import { Action, createReducer, on } from '@ngrx/store';
import { IEditArticleState } from '../types/edit-article-state.interface';
import {
  updateArticleAction,
  updateArticleFailureAction,
  updateArticleSuccessAction
} from './actions/update-article.action';
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from './actions/get-article.action';

const initialState: IEditArticleState = {
  isLoading: false,
  article: null,
  isSubmitting: false,
  validationErrors: null,
}

const editArticleReducer = createReducer(
  initialState,
  on(updateArticleAction, (state): IEditArticleState => {
    return {
      ...state,
      isSubmitting: true,
    }
  }),
  on(updateArticleSuccessAction, (state): IEditArticleState => {
    return {
      ...state,
      isSubmitting: false,
    }
  }),
  on(updateArticleFailureAction, (state, action): IEditArticleState => {
    return {
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    }
  }),
  on(getArticleAction, (state): IEditArticleState => {
    return {
      ...state,
      isLoading: true,
    }
  }),
  on(getArticleSuccessAction, (state, action): IEditArticleState => {
    return {
      ...state,
      isLoading: false,
      article: action.article
    }
  }),
  on(getArticleFailureAction, (state): IEditArticleState => {
    return {
      isSubmitting: false,
      validationErrors: null,
      isLoading: false,
      article: null
    }
  }),
)

export function reducers(state: IEditArticleState, action: Action) {
  return editArticleReducer(state, action)
}
