import { createAction, props } from "@ngrx/store";

import { ActionTypes } from "../action-types";
import { IGetTagsResponse } from "../../types/get-tags-response.interface";

export const getTagsAction = createAction(ActionTypes.GET_TAGS);

export const getTagsSuccessAction = createAction(
  ActionTypes.GET_TAGS_SUCCESS,
  props<{tags: IGetTagsResponse}>()
);

export const getTagsFailureAction = createAction(ActionTypes.GET_TAGS_FAILURE);
