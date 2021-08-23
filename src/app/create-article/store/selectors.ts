import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IAppState } from '../../shared/types/app-state.interface';
import { ICreateArticleState } from '../types/create-article-state.interface';

export const createArticleFeatureSelector = createFeatureSelector<IAppState, ICreateArticleState>('createArticle');

export const isSubmittingSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: ICreateArticleState) => createArticleState.isSubmitting)

export const validationErrorsSelector = createSelector(
  createArticleFeatureSelector,
  (createArticleState: ICreateArticleState) => createArticleState.validationErrors
)
