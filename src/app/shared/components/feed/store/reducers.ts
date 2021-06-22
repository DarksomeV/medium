import { Action, createReducer, on } from "@ngrx/store";
import { routerNavigationAction } from "@ngrx/router-store";

import { IFeedState } from "../types/feed-state.interface";
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "./actions/get-feed.action";



const initialState: IFeedState = {
  isLoading: false,
  error: null,
  data: null,
};

const feedReducer = createReducer(
  initialState,
  on(getFeedAction, (state): IFeedState => {
    return {
      ...state,
      isLoading: true,
    }
  }),

  on(getFeedSuccessAction, (state, action): IFeedState => {
    return {
      ...state,
      isLoading: false,
      data: action.feed
    }
  }),

  on(getFeedFailureAction, (state): IFeedState => {
    return {
      ...state,
      isLoading: false,
    }
  }),

  on(routerNavigationAction, (): IFeedState => initialState),
)

export function reducers(state: IFeedState, action: Action) {
  return feedReducer(state, action);
}
