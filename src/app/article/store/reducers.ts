import { Action, createReducer, on } from "@ngrx/store";
import { routerNavigationAction } from "@ngrx/router-store";

import { IArticleState } from "../types/article-state.interface";
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from './actions/get-article.action';


const initialState: IArticleState = {
  isLoading: false,
  error: null,
  data: null,
};

const articleReducer = createReducer(
  initialState,
  on(getArticleAction, (state): IArticleState => {
    return {
      ...state,
      isLoading: true,
    }
  }),

  on(getArticleSuccessAction, (state, action): IArticleState => {
    return {
      ...state,
      isLoading: false,
      data: action.article
    }
  }),

  on(getArticleFailureAction, (state): IArticleState => {
    return {
      ...state,
      isLoading: false,
    }
  }),

  on(routerNavigationAction, (): IArticleState => initialState),
)

export function reducers(state: IArticleState, action: Action) {
  return articleReducer(state, action);
}
