import { ICreateArticleState } from '../types/create-article-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction
} from './actions/create-article.action';

const initialState: ICreateArticleState = {
  isSubmitting: false,
  validationErrors: null,
}

const createArticleReducer = createReducer(
  initialState,
  on(createArticleAction, (state): ICreateArticleState => {
    return {
      ...state,
      isSubmitting: true,
    }
  }),
  on(createArticleSuccessAction, (state): ICreateArticleState => {
    return {
      ...state,
      isSubmitting: false,
    }
  }),
  on(createArticleFailureAction, (state, action): ICreateArticleState => {
    return {
      ...state,
      isSubmitting: false,
      validationErrors: action.errors
    }
  }),
)

export function reducer(state: ICreateArticleState, action: Action) {
  return createArticleReducer(state, action)
}
