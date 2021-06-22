import { Action, createReducer, on } from "@ngrx/store";

import { IFeedState } from "./types/feed-state.interface";
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "./store/actions/get-feed.action";

const initialState: IFeedState = {
  isLoading: false,
  error: null,
  data: null,
}

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
      isLoading: true,
      data: action.feed
    }
  }),

  on(getFeedFailureAction, (state): IFeedState => {
    return {
      ...state,
      isLoading: false,
    }
  })
)

export function reducers(state: IFeedState, action: Action) {
  return feedReducer(state, action);
}
