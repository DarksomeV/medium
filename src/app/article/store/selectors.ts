import { createFeatureSelector, createSelector } from "@ngrx/store";

import { IArticleState } from "../types/article-state.interface";
import { IAppState } from '../../shared/types/app-state.interface';

export const articleFeatureSelector = createFeatureSelector<IAppState, IArticleState>('article');

export const isLoadingSelector = createSelector(articleFeatureSelector, (articleState: IArticleState) => articleState.isLoading);

export const errorSelector = createSelector(articleFeatureSelector, (articleState: IArticleState) => articleState.error);

export const articleSelector = createSelector(articleFeatureSelector, (articleState: IArticleState) => articleState.data);
