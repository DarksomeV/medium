import { createFeatureSelector, createSelector } from "@ngrx/store";

import { IAppState } from "../../../types/app-state.interface";
import { ITagsState } from "../types/tags-state.interface";

export const tagsFeatureSelector = createFeatureSelector<IAppState, ITagsState>('tags');

export const isLoadingSelector = createSelector(tagsFeatureSelector, (feedState: ITagsState) => feedState.isLoading);

export const errorSelector = createSelector(tagsFeatureSelector, (feedState: ITagsState) => feedState.error);

export const tagsSelector = createSelector(tagsFeatureSelector, (feedState: ITagsState) => feedState.data);
