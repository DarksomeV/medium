import { Action, createReducer, on } from "@ngrx/store";

import { getTagsAction, getTagsFailureAction, getTagsSuccessAction } from "./actions/get-tags.action";
import { ITagsState } from "../types/tags-state.interface";

const initialState: ITagsState = {
  isLoading: false,
  error: null,
  data: null,
};

const tagsReducer = createReducer(
  initialState,
  on(getTagsAction, (state): ITagsState => {
    return {
      ...state,
      isLoading: true,
    }
  }),

  on(getTagsSuccessAction, (state, action): ITagsState => {
    return {
      ...state,
      isLoading: false,
      data: action.tags,
    }
  }),

  on(getTagsFailureAction, (state): ITagsState => {
    return {
      ...state,
      isLoading: false,
    }
  }),
);


export function reducers(state: ITagsState, action: Action) {
  return tagsReducer(state, action);
}
