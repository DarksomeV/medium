import { createFeatureSelector, createSelector } from "@ngrx/store";

import { IAppState } from "../../../types/app-state.interface";
import { IFeedState } from "../types/feed-state.interface";

export const feedFeatureSelector = createFeatureSelector<IAppState, IFeedState>('feed');

export const isLoadingSelector = createSelector(feedFeatureSelector, (feedState: IFeedState) => feedState.isLoading);

export const errorSelector = createSelector(feedFeatureSelector, (feedState: IFeedState) => feedState.error);

export const feedSelector = createSelector(feedFeatureSelector, (feedState: IFeedState) => feedState.data);
