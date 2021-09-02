import { createFeatureSelector, createSelector } from "@ngrx/store";

import { IAppState } from '../../shared/types/app-state.interface';
import { ICommentsState } from '../types/comments-state.interface';

export const commentsFeatureSelector = createFeatureSelector<IAppState, ICommentsState>('comments');

export const isLoadingSelector = createSelector(commentsFeatureSelector, (commentsState: ICommentsState) => commentsState.isLoading);

export const errorSelector = createSelector(commentsFeatureSelector, (commentsState: ICommentsState) => commentsState.error);

export const commentsSelector = createSelector(commentsFeatureSelector, (commentsState: ICommentsState) => commentsState.data);
